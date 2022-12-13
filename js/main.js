// "use strict";

// let name = "Bohodir";

// var userName = "Bohodir";

// console.log(userName);
// class

// function Person(person) {
//   this.person = person;
// }

// class Person {
//   constructor(name, lastName) {
//     this.userName = name;
//     this.lastName = lastName;
//   }

//   showFullName() {
//     console.log(this.lastName + " " + this.userName + "N80");
//   }
// }

// const toxir = new Person("Toxir", "UsmonAliyev");
// const sodiqjon = new Person("Toxir", "UsmonAliyev");
// const asad = new Person("Toxir", "UsmonAliyev");
// toxir.showFullName();

class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;

    console.log(`${this.name} is running ${this.speed}`);
  }

  stop() {
    console.log(this);
    console.log(`${this.name} is stopped`);
  }
}

const leopard = new Animal("Leopard");

// // leopard.run(100);
// // leopard.stop();

// class Rabbit extends Animal {
//   constructor(userName, legs) {
//     super(userName);
//     this.legs = legs;
//   }
//   stop() {
//     console.log("Rabbit Stop");
//   }
//   showName() {
//     super.stop();
//     console.log(this.legs);
//   }
// }

// const quyoncha = new Rabbit("Quyoncha", 4);

// quyoncha.showName();
// quyoncha.stop();

// console.log(this);

// const obj = {
//   name: "Bohodir",
//   lastName: "Rahmonov",
//   fullName: function () {
//     console.log(this.lastName);
//   }, 
// };

// // obj.fullName();

// // function helloWorld(e, name) {
// //   console.log(e);
// //   console.log(name);
// //   console.log(this);
// // }

// const btn = document.querySelector("button");

// // helloWorld.apply(obj,['d']);

// btn.addEventListener("click", leopard.stop.bind(leopard));
