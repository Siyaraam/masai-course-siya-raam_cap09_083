
// Basic Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.fuelType = fuelType;
}

// Adding common methods to the Vehicle object using prototype
Vehicle.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function () {
  console.log(`${this.brand} ${this.model} is refueling.`);
};

// Car constructor function inheriting from Vehicle
function Car(brand, model, speed, fuelType, numberOfWheels) {
  // Inheriting properties from Vehicle
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfWheels = numberOfWheels;
}

// Inheriting methods from Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);

// Adding additional method for Car
Car.prototype.honk = function () {
  console.log(`${this.brand} ${this.model} is honking. Beep beep!`);
};

// Airplane constructor function inheriting from Vehicle
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
  // Inheriting properties from Vehicle
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfEngines = numberOfEngines;
  this.hasLandingGear = hasLandingGear;
}

// Inheriting methods from Vehicle prototype
Airplane.prototype = Object.create(Vehicle.prototype);

// Adding additional method for Airplane
Airplane.prototype.takeOff = function () {
  console.log(`${this.brand} ${this.model} is taking off. Prepare for departure!`);
};

// Creating instances of Car and Airplane
const myCar = new Car("Toyota", "Camry", 60, "Petrol", 4);
const myAirplane = new Airplane("Boeing", "747", 800, "Jet Fuel", 4, true);

// Demonstrating method invocation
myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
