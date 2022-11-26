const horseMeat = document.querySelector("#horseMeat");
const tomato = document.querySelector("#tomato");
const sausage = document.querySelector("#sausage");

const checkbox = document.querySelectorAll(".checkbox");
let onPizzaArray = [];

const pizzaOrder = {
  userName: "Palonchi",
  phoneNumber: "9990909090",
  adress: "Toshkent, Tuzel 1-11-12",

  thickness: 2,

  onPizza: [],
  addPizza: [],
};
function getCheckboxValue(e) {
  console.log(e.target.id);
  // console.log(e.target.checked);

  if (e.target.checked) pizzaOrder.onPizza.push(e.target.id);
  else
    pizzaOrder.onPizza = pizzaOrder.onPizza.filter(
      (item) => item !== e.target.id
    );

  // onPizzaArray.push(e.target.id);

  console.log(pizzaOrder.onPizza);
}

// tomato.addEventListener("change", getCheckboxValue);4

checkbox.forEach((item) => {
  item.addEventListener("change", getCheckboxValue);
});
