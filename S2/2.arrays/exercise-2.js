const cars = ['Saab', 'Volvo', 'BMW'];

cars.splice(0, 1, "Ford");
console.log(cars);

// o más sencillo:
// cars[0] = "Ford"