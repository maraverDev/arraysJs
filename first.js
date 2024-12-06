const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const map = oneToTen.map((i) => i * i);
console.log(map);
//   [
//     1,  4,  9, 16,  25,
//     36, 49, 64, 81, 100
//   ]

let parNums = [];
oneToTen.forEach((x) => {
  if (x % 2 === 0) {
    parNums.push(x);
  }
});
console.log(parNums);
// [ 2, 4, 6, 8, 10 ]

const reduce = oneToTen.reduce((x, i) => x + i, 0);
console.log(reduce);
// 55