'use strict';

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let shpos = [];

//   creating the table
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

function header() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = "  ";
    for (let i = 0; i < hoursOpen.length; i++) {
        let hElement = document.createElement('th');
        headingRow.appendChild(hElement);
        hElement.textContent = hoursOpen[i];
    }
    let dailyTotalElement = document.createElement('th');
    headingRow.appendChild(dailyTotalElement);
    dailyTotalElement.textContent = "Daily Location Total";
};
header();

function Shop(name, minPerCus, maxPerCus, avgCookiePerCus) {
    this.name = name;
    this.minPerCus = minPerCus;
    this.maxPerCus = maxPerCus;
    this.avgCookiePerCus = avgCookiePerCus;
    this.avgCookiePerHourArr = [];
    this.total=0;
    shpos.push(this);
};


let seattle = new Shop('Seattle', 23, 26, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Pris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);


Shop.prototype.randomCus = function () {
    return Math.floor(Math.random() * (this.maxPerCus - this.minPerCus + 1)) + this.minPerCus;
};
Shop.prototype.custPerHour = function () {
    let custPerHour = [];
    for (let i = 0; i < hoursOpen.length; i++) {
        custPerHour.push(this.randomCus());
    }
    return custPerHour;
};
Shop.prototype.avgCookiePerHour = function () {
    let avgCookiePerHourArr = [];
    let custPerHour = this.custPerHour();
    for (let i = 0; i < custPerHour.length; i++) {
        avgCookiePerHourArr.push(Math.floor(this.avgCookiePerCus * custPerHour[i]));
    }
    return avgCookiePerHourArr;
};

Shop.prototype.totalCookies = function () {
    // let avgCookiePerHourArr = this.avgCookiePerHour();

    for (let i = 0; i < this.avgCookiePerHourArr.length; i++) {
        this.total = this.total + this.avgCookiePerHourArr[i];
    }
    return this.total;
};

Shop.prototype.render = function () {
    let shopsRow = document.createElement('tr');
    table.appendChild(shopsRow);
    let tdElement = document.createElement('td');
    shopsRow.appendChild(tdElement);
    tdElement.textContent = this.name;
    this.avgCookiePerHour();
    for (let i = 0; i < hoursOpen.length; i++) {
        let tdRElement = document.createElement('td');
        shopsRow.appendChild(tdRElement);
        tdRElement.textContent = this.avgCookiePerHour()[i];
    }
    let tdTotalElement = document.createElement('td');
    shopsRow.appendChild(tdTotalElement);
    tdTotalElement.textContent = this.total;
};


for (let i = 0; i < shpos.length; i++) {
    shpos[i].render();
    shpos[i].randomCus();
    shpos[i].custPerHour();
    shpos[i].avgCookiePerHour();
    shpos[i].totalCookies();



};

function totals() {
    let sumTotals = [];
    for (let i = 0; i < hoursOpen.length; i++) {
        let sum = 0;
        for (let j = 0; j < shpos.length; j++) {
            sum = shpos[j].avgCookiePerHourArr[i] + sum;
        }
        sumTotals.push(sum);
    }
    return sumTotals;
};
// function totalOfTotals (){
//     let sumofTotals = 0;
//     for (let j = 0; j < shpos.length; j++) {
//         sumofTotals = shpos.total[j] + sumofTotals;
//     }
//     return sumofTotals;
// };
// totalOfTotals();
//   creating the table
function footer() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let totalshElement = document.createElement('th');
    footerRow.appendChild(totalshElement);
    totalshElement.textContent = 'Totals';
    for (let i = 0; i < hoursOpen.length; i++) {
        let footerhElement = document.createElement('th');
        footerRow.appendChild(footerhElement);
        footerhElement.textContent = totals()[i];
    }
    let totalOfTotalsElement = document.createElement('th');
    footerRow.appendChild(totalOfTotalsElement);
    totalOfTotalsElement.textContent= sumofTotals;
};


footer();

