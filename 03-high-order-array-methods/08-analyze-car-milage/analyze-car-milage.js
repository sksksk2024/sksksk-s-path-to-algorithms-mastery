// function analyzeCarMileage(cars) {
//   const avgMileage = cars.reduce((acc, car) => acc + car.mileage, 0);

//   let maxi = 0,
//     mini = 100000000,
//     maxCar = {},
//     minCar = {};
//   cars.forEach((car) => {
//     if (car.mileage > maxi) {
//       maxi = car.mileage;
//       maxCar = car;
//     }
//     if (car.mileage < mini) {
//       mini = car.mileage;
//       minCar = car;
//     }
//   });

//   const avg = parseFloat((avgMileage / cars.length).toFixed(2));

//   return {
//     averageMileage: avg,
//     highestMileageCar: maxCar,
//     lowestMileageCar: minCar,
//     totalMileage: avgMileage,
//   };
// }

function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
