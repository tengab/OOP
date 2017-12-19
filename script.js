// var person = {
//     name: 'Tomek',
//     surname: 'Banach',
//     age: 33,
//     welcome: function () {
//         console.log('Hi, I am ' + this.name + ' ' + this.surname + '. I am ' + this.age + ' years old.')
//     },
//     setFirstname: function (name) {
//         this.name = name;
//     }
//
// }
// // console.log(person)
// // person.welcome()
// // person.setFirstname('Marek')
// // console.log(person.name)
//
// var car = {
//     color: 'blue',
//     maxSpeed: 200,
//     model: 'Toyota',
//     type: 'Verso',
//     maxSpeedTest: function () {
//         console.log('My ' + this.model + ' ' + this.type + ' can ride maximally ' + this.maxSpeed + ' km/h')
//     },
//     setMaxSpeed: function (maxSpeed) {
//         this.maxSpeed = maxSpeed
//     },
//     netPrice: 7000,
//     tax: 0.23,
//     calculatePrice: function (tax, bonusPrice) {
//         return (this.netPrice + this.netPrice * this.tax) + bonusPrice
//     }
// }
//
// var truck = {
//     netPrice: 20000,
//     tax: 0.23,
//     calculatePrice: function (tax, bonusPrice) {
//         return (this.netPrice + this.netPrice * this.tax)
//     }
// }
// console.log(car.calculatePrice.call(truck, 50, 1000000))
// console.log(car.calculatePrice.apply(truck, [50, 100000])) // roznica polega tylko na tym, ze parametry sa podawane w formie tablicy
//
//
// var cart = {
//     value: 1500,
//     paidDate: new Date(2017, 0, 3),
//     items: ['mleko', 'maslo', 'jajka', 'kawa', 'ibuprom'],
//     adjustments: [
//         {name: 'Koszt dostawy', value: 50},
//         {name: 'Promocja', value: -15}
//     ],
//     getPaidDate: function () {
//         return (this.paidDate.toDateString())
//     },
//     getPrice: function () {
//         return this.value + this.adjustments[0].value + this.adjustments[1].value
//     }, //przerobic na reduce
//     printItems: function () {
//         console.log('Kupione produkty: ' + this.items.join(', '))
//     },
// }
// console.log(cart.getPrice());
//
// var order = {
//     value: 3000,
//     adjustments: [
//         {name: 'Koszt dostawy', value: 100},
//         {name: 'Promocja', value: -30}
//     ],
// }
//
// console.log(cart.getPrice.call(order))
//
//
// function Tree(age, height, radius) {
//     this.age = age;   //jezlei niemma this. to wtedy nie da sie dostac do fukcji z zewnatrz (inną zmienna, np tree1)
//     this.height = height;
//     this.radius = radius;
// }
//
//
// function Sosna(age, height, radius){
//     this.age = age;
//     this.height = height;
//     this.radius = radius;
//
//
//     this.getPrice = function(){
//         return 1500 * this.height * this.radius
//     }
// }
//
// function Dab(age, height, radius) {
//     this.age = age;
//     this.height = height;
//     this.radius = radius;
// }
// var sosna1 = new Sosna(25, 70, 2)
// console.log(sosna1)
// console.log(sosna1 instanceof Sosna) //instanceof sprawdza po ktorym konstruktorze dziedziczy nowy obiekt
// console.log(sosna1.getPrice())

// function Cart(value) {
//     this.value = value;  //publiczne
//     var _paidDate = new Date();   //prywatne
//     this.items = ['mleko', 'maslo', 'jajka', 'kawa', 'ibuprom'];
//     var _tax = 0.23;
//
//     this.getPrice = function (value) {
//         return this.value * _tax + this.value
//     }
// }
//
// var order = new Cart(100);
// console.log(order)
// console.log(order.getPrice())



function Person(name, surname) {
    this.health = 50;
    this.name = name;
    this.surname = surname;
};

Person.prototype.sayHello = function(){
    console.info('Greetings from ' + this.name);
};

function Doctor(name, surname) {
    Person.call(this, name, surname);
    this.hospital = 'Main';
};

Doctor.prototype = Object.create(Person.prototype);  //jezeli by tego nie bylo, to doktor nie powie Greetings...
Doctor.prototype.constructor = Doctor;  //
Doctor.prototype.cure = function (person) {
    if (person instanceof Person === false){
        throw new Error ('Cannot cure!');
    }

    person.health +=10;
};

var person1 = new Person("jan", "kowalski")

function SuperDoctor(name, surname){
    Doctor.call(this, name, surname);
    this.speciality = 'Speciality'
}
SuperDoctor.prototype = Object.create(Doctor.prototype);
SuperDoctor.prototype.constructor = SuperDoctor;
Doctor.prototype.cure = function (person) {
    if (person instanceof Person === false){
        throw new Error ('Cannot cure!');
    }

    person.health +=20;
};

console.log(SuperDoctor.prototype)
console.log(SuperDoctor.prototype.constructor)
console.log(SuperDoctor)

var person2 = new Person('Adam', 'Nowak')
var doctor2 = new Doctor('Lecznik', 'Doktorski')
var superdoctor2 = new SuperDoctor('SuperImie', 'SuperNazwisko')

console.log(person2, doctor2, superdoctor2);

