'use strict';

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// Seattle
let seattle = {
    name: 'Seattle',
    minPerCus: 23,
    maxPerCus: 65,
    avgCookiePerCus: 6.3,

    randomCus: function () {
        return Math.floor(Math.random() * (this.maxPerCus - this.minPerCus + 1)) + this.minPerCus;
    },
    custPerHour: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOpen.length; i++) {
            custPerHour.push(this.randomCus());
        }
        return custPerHour;
    },
    avgCookiePerHour: function () {
        let avgCookiePerHour = [];
        let custPerHour = this.custPerHour();
        for (let i = 0; i < custPerHour.length; i++) {
            avgCookiePerHour.push(Math.floor(this.avgCookiePerCus * custPerHour[i]));
        }
        return avgCookiePerHour;
    },
    totalCookies: function () {
        let avgCookiePerHour= this.avgCookiePerHour();
        let total = 0;
        for (let i = 0; i < avgCookiePerHour.length; i++) {
            total = total + avgCookiePerHour[i];
        }
        return total;
    },
};
// console.log(seattle.custPerHour());
seattle.avgCookiePerHour();
seattle.totalCookies();
seattle.custPerHour();

let seattleParent = document.getElementById('parent');
let seattleArticleElement = document.createElement('article');
seattleParent.appendChild(seattleArticleElement);
let Seattleh2Element = document.createElement('h2');
seattleArticleElement.appendChild(Seattleh2Element);
Seattleh2Element.textContent = seattle.name;
let seattleulElement = document.createElement('ul');
seattleArticleElement.appendChild(seattleulElement);

for (let i = 0; i < hoursOpen.length; i++) {
    let seattleliElement = document.createElement('li');
    seattleulElement.appendChild(seattleliElement);
    seattleliElement.textContent = `${hoursOpen[i]} : ${seattle.avgCookiePerHour()[i]} cookies`;
}
let SliTotalElement = document.createElement('li');
seattleulElement.appendChild(SliTotalElement);
SliTotalElement.textContent = `Total : ${seattle.totalCookies()} cookies`;

// Tokyo 

let tokyo = {
    name: 'Tokyo',
    minPerCus: 3,
    maxPerCus: 24,
    avgCookiePerCus: 1.2,

    randomCus: function () {
        return Math.floor(Math.random() * (this.maxPerCus - this.minPerCus + 1)) + this.minPerCus;
    },
    custPerHour: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOpen.length; i++) {
            custPerHour.push(this.randomCus());
        }
        return custPerHour;
    },
    avgCookiePerHour: function () {
        let avgCookiePerHour = [];
        let custPerHour = this.custPerHour();
        for (let i = 0; i < custPerHour.length; i++) {
            avgCookiePerHour.push(Math.floor(this.avgCookiePerCus * custPerHour[i]));
        }
        return avgCookiePerHour;
    },
    totalCookies: function () {
        let avgCookiePerHour= this.avgCookiePerHour();
        let total = 0;
        for (let i = 0; i < avgCookiePerHour.length; i++) {
            total = total + avgCookiePerHour[i];
        }
        return total;
    },
};
tokyo.avgCookiePerHour();
tokyo.totalCookies();
tokyo.custPerHour();

let tokyoParent = document.getElementById('parent');
let tokyoArticleElement = document.createElement('article');
tokyoParent.appendChild(tokyoArticleElement);
let h2Element = document.createElement('h2');
tokyoArticleElement.appendChild(h2Element);
h2Element.textContent = tokyo.name;
let ulElement = document.createElement('ul');
tokyoArticleElement.appendChild(ulElement);

for (let i = 0; i < hoursOpen.length; i++) {
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `${hoursOpen[i]} : ${tokyo.avgCookiePerHour()[i]} cookies`;
}
let liTotalElement = document.createElement('li');
ulElement.appendChild(liTotalElement);
liTotalElement.textContent = `Total : ${tokyo.totalCookies()} cookies`;

// Dubai 

let dubai = {
    name: 'Dubai',
    minPerCus: 11,
    maxPerCus: 38,
    avgCookiePerCus: 3.7,

    randomCus: function () {
        return Math.floor(Math.random() * (this.maxPerCus - this.minPerCus + 1)) + this.minPerCus;
    },
    custPerHour: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOpen.length; i++) {
            custPerHour.push(this.randomCus());
        }
        return custPerHour;
    },
    avgCookiePerHour: function () {
        let avgCookiePerHour = [];
        let custPerHour = this.custPerHour();
        for (let i = 0; i < custPerHour.length; i++) {
            avgCookiePerHour.push(Math.floor(this.avgCookiePerCus * custPerHour[i]));
        }
        return avgCookiePerHour;
    },
    totalCookies: function () {
        let avgCookiePerHour= this.avgCookiePerHour();
        let total = 0;
        for (let i = 0; i < avgCookiePerHour.length; i++) {
            total = total + avgCookiePerHour[i];
        }
        return total;
    },
};
dubai.avgCookiePerHour();
dubai.totalCookies();
dubai.custPerHour();

let dubaiParent = document.getElementById('parent');
let dubaiArticleElement = document.createElement('article');
dubaiParent.appendChild(dubaiArticleElement);
let dubaih2Element = document.createElement('h2');
dubaiArticleElement.appendChild(dubaih2Element);
dubaih2Element.textContent = dubai.name;
let dubaiulElement = document.createElement('ul');
dubaiArticleElement.appendChild(dubaiulElement);

for (let i = 0; i < hoursOpen.length; i++) {
    let dubailiElement = document.createElement('li');
    dubaiulElement.appendChild(dubailiElement);
    dubailiElement.textContent = `${hoursOpen[i]} : ${dubai.avgCookiePerHour()[i]} cookies`;
}
let dubailiTotalElement = document.createElement('li');
dubaiulElement.appendChild(dubailiTotalElement);
dubailiTotalElement.textContent = `Total : ${dubai.totalCookies()} cookies`;



// Paris 
let paris = {
    name: 'Paris',
    minPerCus: 20,
    maxPerCus: 38,
    avgCookiePerCus: 2.3,

    randomCus: function () {
        return Math.floor(Math.random() * (this.maxPerCus - this.minPerCus + 1)) + this.minPerCus;
    },
    custPerHour: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOpen.length; i++) {
            custPerHour.push(this.randomCus());
        }
        return custPerHour;
    },
    avgCookiePerHour: function () {
        let avgCookiePerHour = [];
        let custPerHour = this.custPerHour();
        for (let i = 0; i < custPerHour.length; i++) {
            avgCookiePerHour.push(Math.floor(this.avgCookiePerCus * custPerHour[i]));
        }
        return avgCookiePerHour;
    },
    totalCookies: function () {
        let avgCookiePerHour= this.avgCookiePerHour();
        let total = 0;
        for (let i = 0; i < avgCookiePerHour.length; i++) {
            total = total + avgCookiePerHour[i];
        }
        return total;
    },
};
paris.avgCookiePerHour();
paris.totalCookies();
paris.custPerHour();

let parisParent = document.getElementById('parent');
let parisArticleElement = document.createElement('article');
parisParent.appendChild(parisArticleElement);
let parish2Element = document.createElement('h2');
parisArticleElement.appendChild(parish2Element);
parish2Element.textContent = paris.name;
let parisulElement = document.createElement('ul');
parisArticleElement.appendChild(parisulElement);

for (let i = 0; i < hoursOpen.length; i++) {
    let parisliElement = document.createElement('li');
    parisulElement.appendChild(parisliElement);
    parisliElement.textContent = `${hoursOpen[i]} : ${paris.avgCookiePerHour()[i]} cookies`;
}
let PliTotalElement = document.createElement('li');
parisulElement.appendChild(PliTotalElement);
PliTotalElement.textContent = `Total : ${paris.totalCookies()} cookies`;


//Lima 
let lima= {
    name: 'Lima',
    minPerCus: 2,
    maxPerCus: 16,
    avgCookiePerCus: 4.6,

    randomCus: function () {
        return Math.floor(Math.random() * (this.maxPerCus - this.minPerCus + 1)) + this.minPerCus;
    },
    custPerHour: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOpen.length; i++) {
            custPerHour.push(this.randomCus());
        }
        return custPerHour;
    },
    avgCookiePerHour: function () {
        let avgCookiePerHour = [];
        let custPerHour = this.custPerHour();
        for (let i = 0; i < custPerHour.length; i++) {
            avgCookiePerHour.push(Math.floor(this.avgCookiePerCus * custPerHour[i]));
        }
        return avgCookiePerHour;
    },
    totalCookies: function () {
        let avgCookiePerHour= this.avgCookiePerHour();
        let total = 0;
        for (let i = 0; i < avgCookiePerHour.length; i++) {
            total = total + avgCookiePerHour[i];
        }
        return total;
    },
};
lima.avgCookiePerHour();
lima.totalCookies();
lima.custPerHour();

let limaParent = document.getElementById('parent');
let limaArticleElement = document.createElement('article');
limaParent.appendChild(limaArticleElement);
let limah2Element = document.createElement('h2');
limaArticleElement.appendChild(limah2Element);
limah2Element.textContent = lima.name;
let limaulElement = document.createElement('ul');
limaArticleElement.appendChild(limaulElement);

for (let i = 0; i < hoursOpen.length; i++) {
    let limaliElement = document.createElement('li');
    limaulElement.appendChild(limaliElement);
    limaliElement.textContent = `${hoursOpen[i]} : ${lima.avgCookiePerHour()[i]} cookies`;
}
let limaliTotalElement = document.createElement('li');
limaulElement.appendChild(limaliTotalElement);
limaliTotalElement.textContent = `Total : ${lima.totalCookies()} cookies`;