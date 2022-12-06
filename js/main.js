const content = document.querySelector("#content");

function getPosts() {
  let arr = [];

  let result = "<p>Loading...</p>";
  fetch("https://jsonplaceholder.typicode.com/post", {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Nimadir xato");

      return res.json();
    })
    .then((res) => {
      // console.log(res);
      arr = res;
      result = "";
      arr.forEach((item) => {
        result += `
            <li>
              ${item.title}
             </li>
    
            `;
      });
    })
    .catch(() => {
      result = "<p>Serverdan malumot olishda xatolik</p>";
    })
    .finally(() => {
      content.innerHTML = result;
    });

  content.innerHTML = result;
}

getPosts();
