const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const carousel_container = document.querySelector(".carousel_container");
const width = 400;
let active = 0;
function prevNextHandler(action) {
  if (action === "prev") {
    active--;
  } else {
    active++;
  }
  // console.log(width * active);
  carousel_container.style.transform = `translateX(-${width * active}px)`;
}

prev.addEventListener("click", prevNextHandler.bind(undefined, "prev"));
next.addEventListener("click", prevNextHandler.bind(undefined, "next"));
