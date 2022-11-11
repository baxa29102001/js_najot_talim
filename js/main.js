function loop() {
  console.log("Loop qiymati");
}

// loop();
// loop();
// loop();
// loop();
// loop();
// loop();
// loop();

// loop();

// let i = 1;
//  i = i - 2
// i -= 2;
// // i += 2;

// const arr = [1,2,3,4]

// for(let i =0; i< 5;i++){
//     if(arr.includes(i)){

//     }
// }
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i < 10) {
//   console.log(i);
//   i--;
// }
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// const arr = ["Bohodir", "Xurshid", "Sodiqjon", "dsds"];

// function helloName(name) {
//   console.log("Hello " + name);
// }

// const num = ["o", 3, 5, 6];
// let name = "Bohodir";
// for (let i = 0; i < 31; i++) {}

let vowel = ["a", "e", "i", "o", "u"];
let num = 0;
function getCount(name) {
  for (let i = 0; i < name.length; i++) {
    if (vowel.includes(name[i])) {
      num += 1;
    }
  }

  console.log(num);
}

getCount("abracadabra");

function toUpperCase(name) {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    result += name[i].toUpperCase();
  }

  return result;
}

toUpperCase("hello"); 'hEllO'
