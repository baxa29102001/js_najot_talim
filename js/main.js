// let num = 10;

// Ternary Operator

// const toti = (aSmile, bSmile, cMile) => {
//   return (aSmile && bSmile) || (!aSmile && !bSmile)
//     ? "sdd"
//     : cMile === "salom"
//     ? true
//     : false;
// };

// console.log(toti(true, true));

// const arr = ["1", 3, 6, true, {}, null, undefined, Symbol("ds")];
// const arr = Array("1", "4", 6);

// Slice m

// console.log(arr.slice(-3, -1));
// Eng oxirigia malumot qoshob beradi.

// console.log(arr.push("Eng oxirgi malumot"));
// console.log(arr);

// Eng oxirgi elementni tushirib beradi.
// console.log(arr.pop());
// Unshift malumotni boshidan qoshib beradi

// console.log(arr.unshift("Birinchi elementman"));
// console.log(arr);

// Massviga birinchi element ob tashyadi.

// console.log(arr.shift());

// console.log(arr);
// console.log(arr.splice(3, 2));

// console.log(arr.includes("1"));

// function findMin(a, b, c) {
//   // code
// }

// findMin(1, 5, 7); // -> 1

const posNeg = (a, b, negative) =>
  (a > 0 && b < 0) || (b > 0 && a < 0) || negative ? true : false;

console.log(posNeg(-1, 1, false));
console.log(posNeg(1, -1, false));
console.log(posNeg(-1, -1, true));
