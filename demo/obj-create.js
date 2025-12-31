const carPrototype = {
    drive: function() {
      console.log(`${this.brand} is driving.`);
    },
    stop: function() {
      console.log(`${this.brand} has stopped.`);
    }
  };
  
  const myCar = Object.create(carPrototype);
  myCar.brand = 'Tesla';
  myCar.drive(); // Output: Tesla is driving.
  
  const anotherCar = Object.create(carPrototype);
  anotherCar.brand = 'Ford';
  anotherCar.drive(); // Output: Ford is driving.