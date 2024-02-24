
const automobilePrototype = {
  start: function () {
    console.log("Engine started");
  },
  stop: function () {
    console.log("Engine stopped");
  },
};

// FourWheeler prototype inherits from the base Automobile prototype
const fourWheelerPrototype = Object.create(automobilePrototype, {
  wheels: { value: 4 },
  brand: { value: "maruti suzuki" },
});

// Constructor function for creating FourWheeler objects
function FourWheeler(model) {
  const car = Object.create(fourWheelerPrototype);
  car.model = model;
  return car;
}

// create four whiler object
const myCar = FourWheeler("Nexon");
console.log(myCar); // { model: 'Nexon' }

// Using inherited methods
myCar.start(); // Engine started
myCar.stop();  // Engine stopped


// Base Automobile constructor function
function Automobile() {}

// Adding methods to the Automobile prototype
Automobile.prototype.start = function () {
  console.log("Engine started");
};

Automobile.prototype.stop = function () {
  console.log("Engine stopped");
};

// FourWheeler constructor function inherits from the base Automobile constructor
function FourWheeler(model) {
  // Calling the parent constructor
  Automobile.call(this);

  this.model = model;
  this.wheels = 4;
  this.brand = "Tata";
}

// Inheriting methods from the base Automobile prototype
FourWheeler.prototype = Object.create(Automobile.prototype);

// Creating a new FourWheeler object
const car= new FourWheeler("Nexon");
console.log(myCar); // FourWheeler { model: 'Nexon', wheels: 4, brand: 'Tata' }

// Using inherited methods
myCar.start(); // Engine started
myCar.stop();  // Engine stopped
