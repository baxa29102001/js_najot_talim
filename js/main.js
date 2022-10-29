const bohodir = document.querySelector("#bohodir");
const xurshid = document.querySelector("#xurshid");
const content = document.querySelector("#content");
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");

const arrMessage = [];
let activeId = "xurshid";

btn.addEventListener("click", sendMessage.bind(undefined));
bohodir.addEventListener(
  "click",
  getMessageByFilter.bind(undefined, "bohodir")
);
xurshid.addEventListener(
  "click",
  getMessageByFilter.bind(undefined, "xurshid")
);

function sendMessage(e) {
  e.preventDefault();

  if (message.value) {
    arrMessage.push({
      from: "Xurshid2",
      to: activeId,
      msg: message.value,
    });
    getMessageByFilter(activeId);
  }
}

function getMessageByFilter(id) {
  activeId = id;
  let msgHtml = "";
  arrMessage
    .filter((item) => item.to === id)
    .forEach((item) => {
      msgHtml += `
            <p>
            ${item.msg}
            </p>
         `;
    });

  content.innerHTML = msgHtml;
}
