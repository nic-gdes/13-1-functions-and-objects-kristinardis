//create a Car class with three properties in the constructor

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //create a nethod  .describe which returns year, make and model
    describe() {
        return `This is a ${this.year} ${this.model}, made by ${this.make}.`;
    }
}
//create 4 cars and push to a new array called allCars
const chevyTahoe = new Car("Chevrolet", "Tahoe", "2017");
chevyTahoe.describe;
const fordMustang = new Car("Ford", "Mustang", "2020");
fordMustang.describe;
const toyotaCorolla = new Car("Toyota", "Corolla", "2019");
toyotaCorolla.describe;
const hondaCivic = new Car("Honda", "Civic", "2022");
hondaCivic.describe;

//create the array allCars
const allCars = [chevyTahoe, fordMustang, toyotaCorolla, hondaCivic];

function describeCar(car) {
    console.log(car.describe());
}

// Loop through allCars and call the describeCar function for each car
for (let i = 0; i < allCars.length; i++) {
    describeCar(allCars[i]);
}

