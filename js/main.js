// // function hash(str, index) {
// //   let result = "";
// //   for (let i = 0; i < str.length; i++) {
// //     if (i <= index) {
// //       result += str[i];
// //     } else {
// //       result += "#";
// //     }
// //   }

// //   return result;
// // }

// // let num = hash("89998", 3);

// // const arr=  ['Inson Sodq']

// // const person = {
// //   name: "Sodiqjon",
// //   age: 19,
// //   single: true,
// //   middle_name: "Nurmirzayev",
// //   hobby: ["Reading books", "Sport"],
// //   subject: {
// //     name: "IT",
// //   },

// //   "birt-day": 2003,
// // };

// // // let name = "birt-day";

// // console.log(person);

// // const arr = [{}]

// const btn = document.querySelector("button");
// const select = document.querySelector("select");
// const form = document.querySelector("form");

// btn.addEventListener("dblclick", (e) => {
//   console.log(e);
// });

// const input = document.querySelector("input");

// input.addEventListener("blur", (e) => {
//   console.log(e);
// });
// input.addEventListener("input", (e) => {
//   console.log(e);
// });
// select.addEventListener("change", (e) => {
//   console.log(e);
// });

// function formHandler(e) {
//   console.log(e);
// }

// form.addEventListener("submit", formHandler);

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Loading Dom");
// });

// document.addEventListener("scroll", (e) => {
//   console.log(e);
// });

const input = document.getElementById("text");
const form = document.querySelector("#form");
const content = document.querySelector("#content");

let cards = [];

const formHandler = (e) => {
  e.preventDefault();
  const card = {
    text: input.value,
    id: Math.random().toFixed(2),
  };

  cards.push(card);

  ekrangaChiqarish();
};

function ekrangaChiqarish() {
  let result = "";

  for (let i = 0; i < cards.length; i++) {
    result += `
        <div class="col-4" id=${cards[i].id}>
        <div
          class="p-3 bg-white text-dark border border-dark rounded shadow"
        >
          <p>
            ${cards[i].text}
          </p>
          <button class="btn btn-danger" onClick="deleteCard(${cards[i].id})">O'chirish</button>
        </div>
      </div>

      `;
  }

  console.log(result);

  content.innerHTML = result;
}

// ekrangaChiqarish()

function deleteCard(elementId) {
  let arr2 = cards.filter((element) => {
    return +element.id !== elementId;
  });

  cards = arr2;

  console.log(cards);

  ekrangaChiqarish();
}

// ekrangaChiqarish();

form.addEventListener("submit", formHandler);
