'use strict';

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let shpos = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Shop(name, minPerCus, maxPerCus, avgCookiePerCus) {
    this.name = name;
    this.minPerCus = minPerCus;
    this.maxPerCus = maxPerCus;
    this.avgCookiePerCus = avgCookiePerCus;
    this.avgCookiePerHourArr = [];
    this.total = 0;
    shpos.push(this);
}

Shop.prototype.custPerHour = function () {
    return random(this.minPerCus, this.maxPerCus);
}

Shop.prototype.avgCookiePerHour = function () {
    for (let i = 0; i < hoursOpen.length; i++) {
        this.avgCookiePerHourArr.push(Math.floor(this.avgCookiePerCus * this.custPerHour()));
    }
}

Shop.prototype.totalCookies = function () {
    for (let i = 0; i < hoursOpen.length; i++) {
        this.total = this.total + this.avgCookiePerHourArr[i];
    }
}

let seattle = new Shop('Seattle', 23, 26, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);



//   creating the table
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


function header() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = "Location Name";
    for (let i = 0; i < hoursOpen.length; i++) {
        let hElement = document.createElement('th');
        headingRow.appendChild(hElement);
        hElement.textContent = hoursOpen[i];
    }
    let dailyTotalElement = document.createElement('th');
    headingRow.appendChild(dailyTotalElement);
    dailyTotalElement.textContent = "Daily Location Total";
};

Shop.prototype.render = function () {
    let shopsRow = document.createElement('tr');
    table.appendChild(shopsRow);
    let tdElement = document.createElement('td');
    shopsRow.appendChild(tdElement);
    tdElement.textContent = this.name;
    for (let i = 0; i < hoursOpen.length; i++) {
        let tdRElement = document.createElement('td');
        shopsRow.appendChild(tdRElement);
        tdRElement.textContent = this.avgCookiePerHourArr[i];
    }
    let tdTotalElement = document.createElement('td');
    shopsRow.appendChild(tdTotalElement);
    tdTotalElement.textContent = this.total;
}

function footer() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let totalshElement = document.createElement('th');
    footerRow.appendChild(totalshElement);
    totalshElement.textContent = 'Totals';

    let hourlyTotal;
    let totals = 0;
    for (let i = 0; i < hoursOpen.length; i++) {
        hourlyTotal = 0;
        for (let j = 0; j < shpos.length; j++) {
            hourlyTotal += shpos[j].avgCookiePerHourArr[i];
            totals += shpos[j].avgCookiePerHourArr[i];
        }

        let footerhElement = document.createElement('th');
        footerRow.appendChild(footerhElement);
        footerhElement.textContent = hourlyTotal;
    }
    let totalOfTotalsElement = document.createElement('th');
    footerRow.appendChild(totalOfTotalsElement);
    totalOfTotalsElement.textContent = totals;
};

// create an object from HTML form;
let shopForm = document.getElementById('shopForm');

shopForm.addEventListener('submit', addNewShop);

function addNewShop(event) {
    event.preventDefault();

    console.log(event);

    let name = event.target.locationName.value;
    console.log(name);
    let min = event.target.minValue.value;
    console.log(min);
    let max = event.target.maxValue.value;
    console.log(max);
    let avg = event.target.avgValue.value;
    console.log(avg);
    
    let newShop = new Shop(name,min,max,avg);
    console.log(newShop);

    // newShop.custPerHour();
    // newShop.avgCookiePerHour();
    // newShop.totalCookies();
    // newShop.render();

    let cotainer = document.getElementById('parent');
    table.textContent=""; 

    header();
    for (let i = 0; i < shpos.length; i++) {
        shpos[i].custPerHour();
        shpos[i].avgCookiePerHour();
        shpos[i].total=0;
        shpos[i].totalCookies();
        shpos[i].render();
    }
    footer();
}


header();
for (let i = 0; i < shpos.length; i++) {
    shpos[i].custPerHour();
    shpos[i].avgCookiePerHour();
    shpos[i].totalCookies();
    shpos[i].render();
};
footer();

