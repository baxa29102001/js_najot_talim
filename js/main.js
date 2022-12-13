const sendBookBtn = document.querySelector("#send");
const getBookBtn = document.querySelector("#get");
const getAllBook = document.querySelector("#getAllBook");

function sendDataToFireBase() {
  const bookData = {
    title: "O'tkan kunlar",
    price: "50000",
    rate: 6,
    desc: "Yaxshi kitoblardan iborat bolgan kitob",
  };

  fetch("https://books-b8a06-default-rtdb.firebaseio.com/books.json", {
    method: "POST",
    body: JSON.stringify(bookData),
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getBookOne() {
  fetch(
    "https://books-b8a06-default-rtdb.firebaseio.com/books/-NIvr5qi6Sdm5okbhm_b.json",
    {
      method: "GET",
    }
  )
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getAllBooks() {
  fetch("https://books-b8a06-default-rtdb.firebaseio.com/books.json", {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function putOneBook() {
  fetch(
    "https://books-b8a06-default-rtdb.firebaseio.com/books/-NIvr5qi6Sdm5okbhm_b.json",
    {
      method: "PUT",
      body: JSON.stringify({
        title: "Edited",
        price: "50000",
        rate: 6,
        desc: "Edited",
      }),
    }
  )
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

putOneBook();

sendBookBtn.addEventListener("click", sendDataToFireBase);

getBookBtn.addEventListener("click", getBookOne);
getAllBook.addEventListener("click", getAllBooks);

// function autorizathion() {
//   const data = {
//     username: "user123",
//     password: "user123456",
//   };
//   fetch("https://task.samid.uz/v1/user/sign-in", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// autorizathion();

// function checkRate() {
//   console.log(this.rate);
//   return this.rate;
// }

// function Book(title, desc, rate, price) {
//   this.title = title;
//   this.desc = desc;
//   this.rate = rate;

//   this.price = price;
// }

// Book.prototype.checkRate = checkRate;

// const book1 = new Book("Salom", "sasa", 10, 50000);

// console.log(book1.checkRate());

// const obj1 = {
//   name: "Bohodir",
//   lastName: "Rahmonov",

//   fullName() {
//     return this.name + " " + this.lastName;
//   },
// };
// const obj2 = {
//   name: "Xurshid",
//   lastName: "Boriyev",
// };

// function Book(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
//   this.fullName = function () {
//     return this.name + " " + this.lastName;
//   };
// }

// console.log([]);
