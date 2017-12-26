var target = document.getElementById('target');
target.innerHTML = 'JavaScript running!';

function CreateCar(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var firstCar = new CreateCar('chevy', 'monte carlo', '1977');

CreateCar.prototype.vroom = function () {
  console.log("Vroom vroom!");
}

function CreateUsedCar(make, model, year, mileage) {
  CreateCar.call(this, make, model, year);
  this.mileage = mileage;
}

CreateUsedCar.prototype = Object.create(CreateCar.prototype);
CreateUsedCar.prototype.constructor = CreateCar;

var firstUsedCar = new CreateUsedCar('chevy', 'monte carlo', '1977', 10000);
