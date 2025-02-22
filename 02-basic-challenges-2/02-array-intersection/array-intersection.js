// function arrayIntersection(arr1, arr2) {
//   arr3 = [];
//   for (let i = 1; i < arr1.length; ++i) {
//     if (arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }

//   return arr3;
// }

const arrayIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const arr3 = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      arr3.push(num);
    }
  }

  return arr3;
};

module.exports = arrayIntersection;
