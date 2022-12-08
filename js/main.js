const content = document.querySelector("#content");
const btn = document.querySelector("button");

function getPosts() {
  let arr = [];

  const id = 2;

  let result = "<p>Loading...</p>";
  fetch(
    `https://6391d454ac688bbe4c53df8b.mockapi.io/api/posts/instagram_posts?page=2&limit=2`,
    {
      method: "GET",
      headers: {
        autorization: "token",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error("Nimadir xato");

      return res.json();
    })
    .then((res) => {
      console.log(res);
      // arr = res;
      // result = "";
      // arr.forEach((item) => {
      //   result += `
      //       <li>
      //         ${item.title}
      //        </li>
      //       `;
      // });
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

function sendData() {
  const data = {
    post_title: "Hello World",

    post_desc:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt fugit sapiente tempore adipisci, facere reiciendis ex iste vitae officia.",

    created_at: new Date(),
    comments: [],
  };

  fetch(
    "https://6391d454ac688bbe4c53df8b.mockapi.io/api/posts/instagram_posts",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((res) => {
      if (!res.ok) throw res;

      return res.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteCard() {
  fetch(
    `https://6391d454ac688bbe4c53df8b.mockapi.io/api/posts/instagram_posts/${5}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => {
      if (!res.ok) throw res;

      return res.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
const changeData = async () => {
  const data = {
    post_title: "Hello World",
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/post", {
      method: "GET",
    });
    if (!response.ok) throw response;
    const realRes = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// deleteCard();

changeData();

btn.addEventListener("click", sendData);
