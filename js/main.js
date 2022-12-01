// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");
// const carousel_container = document.querySelector(".carousel_container");
// const width = 400;
// let active = 0;
// function prevNextHandler(action) {
//   if (action === "prev") {
//     active--;
//   } else {
//     active++;
//   }
//   // console.log(width * active);
//   carousel_container.style.transform = `translateX(-${width * active}px)`;
// }

// prev.addEventListener("click", prevNextHandler.bind(undefined, "prev"));
// next.addEventListener("click", prevNextHandler.bind(undefined, "next"));

// // let str = "We will, we will rock you";

// // console.log(str.match(/we/i));

// function searchMovie(keyword) {
//   let arr = ["Salom Dunyo", "sevgi", "Odamzod"];

//   let searchKeyword = new RegExp(keyword, "g", "i");
//   let arr2 = arr.filter((item) => {
//     console.log(searchKeyword.test(item));
//     return item.match(searchKeyword);
//   });

//   // console.log(arr2);
// }

// searchMovie("Sa");
