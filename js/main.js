const pro = document.querySelector("#pro");
const comfort = document.querySelector("#comfort");
const standart = document.querySelector("#standart");
const form = document.querySelector("#form");
const km = document.querySelector("#form #km");
const price = document.querySelector("#form #price");

const pro_rate = 1500;
const standart_rate = 500;
const comfort_rate = 1000;

let rate;

function calculatePrice(km, rate) {
  //   if (rate === "pro") {
  //     return km * pro_rate;
  //   } else if (rate === "comfort") {
  //     return km * comfort_rate;
  //   } else {
  //     return km * standart_rate;
  //   }

  let sum;

  switch (rate) {
    case "pro":
      sum = km * pro_rate;
      break;
    case "comfort":
      sum = km * comfort_rate;
      break;
    default:
      sum = km * standart_rate;
      break;
  }

  return sum;
}

function renderPrice(e) {
  e.preventDefault();

  let kmValue = +km.value;
  let main_price = calculatePrice(kmValue, rate);
  price.innerHTML = `<h1 class="h1">${main_price} So'm</h1>`;
}

function changeRate(e) {
  rate = e.target.id;
}
form.addEventListener("submit", renderPrice);
pro.addEventListener("click", changeRate);
standart.addEventListener("click", changeRate);
comfort.addEventListener("click", changeRate);
