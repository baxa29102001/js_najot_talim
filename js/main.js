const name = "Bohodir";

function helloWorld() {
  console.log("Hello World");
}

// setTimeout(() => {
//   console.log("Set TimeOut 1");
// }, 2000);

// setInterval(() => {
//   console.log("Set interval");
// }, 1000);

// console.log("Simple Hello World");

// helloWorld();

let promise = new Promise((resolve, reject) => {
  let result = setTimeout(() => {
    resolve("Muaviqayatli amalga oshdi");
  }, 3000);

  return result;
});

console.log("Loading", true);

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");

    console.log("Loading", false);
  });
