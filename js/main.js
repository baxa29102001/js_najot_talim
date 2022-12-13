// const ibrohim = {
//   name: "Ibrohim",
//   lastName: "Hakimov",
//   age: 22,
//   fullName() {
//     return this.name + " " + this.lastName;
//   },
// };

// const sodiqjon = {
//   ame: "Ibrohim",n
//   lastName: "Hakimov",
//   ageNum: 22,
//   fullName() {
//     return this.name + " " + this.lastName;
//   },
// };
// console.log(sodiqjon.age);
// const arr = [];

// arr.push(ibrohim);

// function fullName() {
//   return this.lastName + " " + this.name;
// }

// function Person(name, lastName, age) {
//   this.name = name;
//   this.lastName = lastName;
//   this.ageNum = age;
// }

// Person.prototype.fullName = fullName;

// const ibrohim = new Person("Ibrohim", "Hakimov", 22);
// const sodiqjon2 = new Person("Sodiqjon", "Nurmirzayev", 19);

// console.log(sodiqjon2.fullName());
// console.log(ibrohim.fullName());

// class Person {
//   constructor(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.ageNum = age;
//   }

//   fullName() {
//     return this.lastName + " " + this.name;
//   }
// }

// const ibrohim = new Person("Ibrohim", "Hakimov", 22);

const arr = [
  "Bohodir",
  "Sodiqjon",
  "Ibrohim",
  "Javlon",
  "Axborxoja",
  "Qobil",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
  "Islom",
];

const pageUl = document.querySelector(".numbers");
const names = document.querySelector(".names");
const limit = 2;

function pagination() {
  const countPage = Math.ceil(arr.length / limit);

  renderPages(countPage);
}

function renderPages(num) {
  let result = "";
  if (num > 10) {
    for (let i = 0; i < 5; i++) {
      if (i === 4) result += ` <li onclick="nameSlice(${i + 1})">...</li>`;
      result += ` <li onclick="nameSlice(${i + 1})">${i + 1}</li>`;
    }
  } else {
    for (let i = 0; i < num; i++) {
      result += ` <li onclick="nameSlice(${i + 1})">${i + 1}</li>`;
    }
  }

  pageUl.innerHTML = result;
}

function nameSlice(page) {
  let startToSlice = page * limit - limit;
  const arr2 = arr.slice(startToSlice, limit * page);

  let result = "";
  arr2.forEach((item) => {
    result += `<li>${item}</li>`;
  });

  names.innerHTML = result;
}

pagination();
