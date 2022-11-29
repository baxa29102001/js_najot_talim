const ingredents = document.querySelectorAll(".ingredients");
const name = document.querySelector("#name");
const Pnum = document.querySelector("#Pnum");
const address = document.querySelector("#address");
const Pwidth = document.querySelector("#Pwidth");
const sizes = document.querySelectorAll(".size");
const form = document.querySelector("#form");
const content = document.querySelector("#content");
let ingredinetArr = [];
let pitsaSize = "25";
console.log(localStorage.getItem("orders"));
let localArr = JSON.parse(localStorage.getItem("orders")) || [];
let orders = localArr;

function getCheckBoxValue(e) {
  if (e.target.checked) ingredinetArr.push(e.target.value);
  else if (!e.target.checked)
    ingredinetArr = ingredinetArr.filter((item) => item !== e.target.value);
}

function getPitsaSize(e) {
  pitsaSize = e.target.value;
}

ingredents.forEach((item) => {
  item.addEventListener("change", getCheckBoxValue);
});
sizes.forEach((item) => {
  item.addEventListener("change", getPitsaSize);
});

function createOrder(e) {
  e.preventDefault();

  // const arr = [...Pwidth.options]
  //   .filter((item) => item.selected)
  //   .map((item) => item.value);

  const orderObj = {
    userName: name.value,
    phoneNumber: Pnum.value,
    adress: address.value,
    size: pitsaSize,
    thickness: Pwidth.value,
    ingredent: ingredinetArr,
    id: +Math.random().toFixed(2),
  };

  orders.push(orderObj);

  localStorage.setItem("orders", JSON.stringify(orders));

  renderOrderCard();
}

let obj = {
  name: "dsdsdsds",
};

form.addEventListener("submit", createOrder);

function renderOrderCard() {
  let result = "";
  orders.forEach((item, index) => {
    let ingredent =
      item.thickness === "Thin" ? 10 : item.thickness === "Medium" ? 12 : 15;
    let sizeSum = item.size === "25" ? 10 : item.size === "30" ? 12 : 15;

    let ingredentSum = item.ingredent.length * 5;
    let total = ingredentSum + sizeSum + ingredent;

    result =
      result +
      `
   <div class="card position-relative fit m-3" style="width: 18rem;">
   <button type="button"  
   onClick="deleteCard(${item.id})"
     class="delete position-absolute top-0 end-0"></button>
   <div class="card-body">
     <h5 class="card-title">Order: ${index + 1}</h5>
   </div>
   <div>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">
       <ul>
         <li class="m-1"><strong>Name: </strong>${item.userName}</li>
         <li class="m-1"><strong>Phone: </strong>+998${item.phoneNumber}</li>
         <li class="m-1"><strong>Address: </strong>${item.adress}</li>
       </ul>
     </li>
     <li class="list-group-item">
       <ul class="list-group list-group-flush">
         <li class="list-group-item p-0">
           <ul class="mb-4">
             <li class="m-1"><strong>Dough thickness: </strong>${
               item.thickness
             }</li>
             <li class="m-1"><strong>Size: </strong>dsds sm</li>
             <li class="m-1"><strong>On pizza: </strong>${item.ingredent.join(
               " "
             )}</li>
             <li class="m-1"><strong>Add: </strong>dsds</li>
           </ul>
         </li>
         <li class="list-group-item text-end pe-5"><strong>Total: </strong>$${total}</li>
       </ul>
     </li>
   </ul>
 </div>

    
   `;
  });

  content.innerHTML = result;
}

function deleteCard(id) {
  orders = orders.filter((item) => item.id !== id);

  localStorage.setItem("orders", JSON.stringify(orders));

  renderOrderCard();
}

renderOrderCard();
