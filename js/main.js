const moviesArr = [
  {
    title: "Patton Oswalt: Annihilation",
    year: 2017,
    categories: ["Uncategorized"],
    imdbId: "tt7026230",
    imdbRating: 7.4,
    runtime: 66,
    language: "English",
    youtubeId: "4hZi5QaMBFc",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    smallThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg",
  },
  {
    title: "New York Doll",
    year: 2005,
    categories: ["Documentary", "Music"],
    imdbId: "tt0436629",
    imdbRating: 7.9,
    runtime: 75,
    language: "English",
    youtubeId: "jwD04NsnLLg",
    summary:
      'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.',
    smallThumbnail: "http://i3.ytimg.com/vi/jwD04NsnLLg/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/jwD04NsnLLg/maxresdefault.jpg",
  },

  {
    title: "And Then I Go",
    year: 2017,
    categories: ["Drama"],
    imdbId: "tt2018111",
    imdbRating: 7.6,
    runtime: 99,
    language: "English",
    youtubeId: "8CdIiD6-iF0",
    summary:
      'In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel "Project X" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.',
    smallThumbnail: "http://i3.ytimg.com/vi/8CdIiD6-iF0/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/8CdIiD6-iF0/maxresdefault.jpg",
  },
  {
    title: "An Extremely Goofy Movie",
    year: 2000,
    categories: ["Animation", "Comedy", "Family", "Sport"],
    imdbId: "tt0208185",
    imdbRating: 6.4,
    runtime: 79,
    language: "English",
    youtubeId: "H8oSvldAGfg",
    summary:
      "It's a big time in Max's life. He's college bound with his friends and finally free of his embarrassing father as he strives to be a top contender for the X-Games. Unfortunately, Goofy loses his job and learns that he cannot get another job without a college degree. To his son's mortification, Goofy decides to join him in his campus to get that degree. Desperate to distract his father, Max talks him into joining the competing Gamma Fraternity team and introduces him to a wonderful librarian who shares his nostalgic love for 1970's pastimes. Unfortunately, things do not go according to plan as events put this father-son relationship to the test.",
    smallThumbnail: "http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/H8oSvldAGfg/maxresdefault.jpg",
  },
  {
    title: "Peter Rabbit",
    year: 2018,
    categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
    imdbId: "tt5117670",
    imdbRating: 6.6,
    runtime: 95,
    language: "English",
    youtubeId: "7Pa_Weidt08",
    summary:
      "Based on the books by Beatrix Potter: Peter Rabbit (James Corden;) his three sisters: Flopsy (Margot Robbie,) Mopsy (Elizabeth Debicki) and Cotton Tail (Daisy Ridley) and their cousin Benjamin (Colin Moody) enjoy their days harassing Mr McGregor in his vegetable garden. Until one day he dies and no one can stop them roaming across his house and lands for a full day or so. However, when one of Mr McGregor's relatives inherits the house and goes to check it out, he finds much more than he bargained for. What ensues, is a battle of wills between the new Mr McGregor and the rabbits. But when he starts to fall in love with Bea (Rose Byrne,) a real lover of all nature, his feelings towards them begin to change. But is it too late?",
    smallThumbnail: "http://i3.ytimg.com/vi/7Pa_Weidt08/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/7Pa_Weidt08/maxresdefault.jpg",
  },
  {
    title: "Love Songs",
    year: 2007,
    categories: ["Uncategorized"],
    imdbId: "tt0996605",
    imdbRating: 7.2,
    runtime: 91,
    language: "English",
    youtubeId: "s54vpKAFmS0",
    summary:
      "Julie's boyfriend Ismaël lives with her; rather than worry about the time he spends with his colleague Alice, Julie invites Alice to join them. The three walk the streets of Paris, party, read, and sleep together. Sometimes it's lighthearted, sometimes there are jealousies. Then death strikes. In various ways, those left come to terms with the departure and absence of a loved one: showing concern, eating together, attempting new relationships, trying to \"be there\" for the other. Then, the spirit returns and new commitments are possible. The romantic elements of musical comedy play in contrast to the ambivalence of the lyrics and the story.",
    smallThumbnail: "http://i3.ytimg.com/vi/s54vpKAFmS0/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/s54vpKAFmS0/maxresdefault.jpg",
  },
  {
    title: "89",
    year: 2017,
    categories: ["Uncategorized"],
    imdbId: "tt7614404",
    imdbRating: 8.1,
    runtime: 91,
    language: "English",
    youtubeId: "5hfAExhHTMM",
    summary:
      "89 tells the incredible story of one of football's greatest triumphs: when against all odds Arsenal snatched the Championship title from Liverpool at Anfield in the last minute of the last game of the 1988/89 season. It's a universal tale of a band of brothers who, led by a charismatic and deeply respected manager, came together to defy the odds and create history. Mixing archive and previously unseen footage with revealing interviews, insights and memories from the original squad, game officials, famous fans and the people who were there on the night this is the definitive account of a watershed moment in football and a must-watch for any sports fan.",
    smallThumbnail: "http://i3.ytimg.com/vi/5hfAExhHTMM/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/5hfAExhHTMM/maxresdefault.jpg",
  },
  {
    title: "The Foster Boy",
    year: 2011,
    categories: ["Drama"],
    imdbId: "tt2057931",
    imdbRating: 7.4,
    runtime: 107,
    language: "English",
    youtubeId: "E9Qv_XVJ-js",
    summary:
      "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
    smallThumbnail: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/maxresdefault.jpg",
  },
  {
    title: "Forever My Girl",
    year: 2018,
    categories: ["Drama", "Music", "Romance"],
    imdbId: "tt4103724",
    imdbRating: 6.4,
    runtime: 108,
    language: "English",
    youtubeId: "3vqcMr1q5Uc",
    summary:
      "After being gone for a decade a country star returns home to the love he left behind.",
    smallThumbnail: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/maxresdefault.jpg",
  },
  {
    title: "Tom Segura: Disgraceful",
    year: 2018,
    categories: ["Comedy", "Documentary"],
    imdbId: "tt7379330",
    imdbRating: 7.5,
    runtime: 0,
    language: "English",
    youtubeId: "kYYINJM3lPA",
    summary:
      "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
    smallThumbnail: "http://i3.ytimg.com/vi/kYYINJM3lPA/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/kYYINJM3lPA/maxresdefault.jpg",
  },
  {
    title: "Algorithms",
    year: 2015,
    categories: ["Documentary"],
    imdbId: "tt5818010",
    imdbRating: 7.5,
    runtime: 58,
    language: "English",
    youtubeId: "hpyxmT6KSvw",
    summary:
      "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
    smallThumbnail: "http://i3.ytimg.com/vi/hpyxmT6KSvw/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/hpyxmT6KSvw/maxresdefault.jpg",
  },
  {
    title: "Secrets in the Fall",
    year: 2015,
    categories: ["Family"],
    imdbId: "tt2522908",
    imdbRating: 7.3,
    runtime: 0,
    language: "English",
    youtubeId: "eMVw1pHVMAw",
    summary:
      "Nothing is impossible for a group of young campers, friends and enemies alike, on a weekend retreat at Camp Pinnacle. But what starts as an exciting wilderness adventure turns into trouble when a young camper goes missing and the rest of the group must set out to find him. The campers are forced to overcome their differences and band together to re-claim their weekend and make it out of the woods before dark!",
    smallThumbnail: "http://i3.ytimg.com/vi/eMVw1pHVMAw/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/eMVw1pHVMAw/maxresdefault.jpg",
  },
  {
    title: "Silent Night",
    year: 2017,
    categories: ["Comedy", "Drama"],
    imdbId: "tt7133554",
    imdbRating: 7.5,
    runtime: 100,
    language: "English",
    youtubeId: "cA6BUYVkQoE",
    summary:
      "Adam unexpectedly visits his family house at Christmas after a few years of working abroad. No family member knows about his secret plans and the real reasons of his visit.",
    smallThumbnail: "http://i3.ytimg.com/vi/cA6BUYVkQoE/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/cA6BUYVkQoE/maxresdefault.jpg",
  },
  {
    title: "Suicide Squad: Hell to Pay",
    year: 2018,
    categories: ["Action", "Animation"],
    imdbId: "tt7167602",
    imdbRating: 7.2,
    runtime: 86,
    language: "English",
    youtubeId: "EPZZvk-wbGE",
    summary:
      "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
    smallThumbnail: "http://i3.ytimg.com/vi/EPZZvk-wbGE/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/EPZZvk-wbGE/maxresdefault.jpg",
  },
  {
    title: "Wildling",
    year: 2018,
    categories: ["Fantasy", "Horror"],
    imdbId: "tt5085924",
    imdbRating: 6.1,
    runtime: 92,
    language: "English",
    youtubeId: "eyl1Wf90AgY",
    summary:
      "Anna spends her entire childhood under the care of a mysterious man she only knows as Daddy. He keeps her locked in an attic making her fear the Wildling, a child-eating monster that roams the outside. At age 16, Anna is freed by small-town sheriff Ellen Cooper who helps her start a new life as a normal teenager. But as Anna's body begins to blossom, her childhood nightmares return with a vengeance, leading to the conclusion of a terrifying secret.",
    smallThumbnail: "http://i3.ytimg.com/vi/eyl1Wf90AgY/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/eyl1Wf90AgY/maxresdefault.jpg",
  },
  {
    title: "The Humanity Bureau",
    year: 2017,
    categories: ["Action", "Sci-Fi"],
    imdbId: "tt6143568",
    imdbRating: 6.1,
    runtime: 95,
    language: "English",
    youtubeId: "kUH8JGhRzPY",
    summary:
      "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
    smallThumbnail: "http://i3.ytimg.com/vi/kUH8JGhRzPY/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/kUH8JGhRzPY/maxresdefault.jpg",
  },
];

let moveName = document.querySelector("#move_name");
let year = document.querySelector("#year");
let reting = document.querySelector("#reting");
let kategorya = document.querySelector("#kategorya");
let content = document.querySelector("#content");
let move = document.querySelector("#add_move");
let saved_movie = document.querySelector("#saved_movie");
let filter_category = document.querySelector("#filter_category");

function cards(movies) {
  let result = "";
  for (let i = 0; i < movies.length; i++) {
    result += `
    <div class="col-4">
            <div class="card">
              <img src="${movies[i].bigThumbnail}" alt="img">
              <div class="card-body">
                <h5 class="">${movies[i].title}</h5>
                <p class=""> ${movies[i].year}</p>
                <p class="card-text">${movies[i].imdbRating}</p>
                <p class="card-text">${movies[i].language} </p>
                <div class="d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-primary">Primary</button>
                  <button type="button" class="btn btn-outline-secondary" onclick="saveMovie(${movies[i].runtime})">Secondary</button> 
                </div>
              </div>
            </div>
          </div>
    `;
  }
  content.innerHTML = result;
}

cards(moviesArr);
let savedMoviesArr = [];

function saveMovie(movieId) {
  let findEndedMovie = movies.find((item) => item.runtime === movieId);
  if (!savedMoviesArr.find((item) => item.runtime === movieId)) {
    savedMoviesArr.push(findEndedMovie);
  }
  renderSavedMovie();
}

function renderSavedMovie() {
  let result = "";

  savedMoviesArr.forEach((item) => {
    result += `
    <div class="p-3 border border-dark rounded">
    <h3>${item.title}</h3>
    <button class="btn btn-danger" >O'chirish</button>
  </div>

    `;
  });

  saved_movie.innerHTML = result;
}

move.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedOpts = [...kategorya.options]
    .filter((x) => x.selected)
    .map((item) => {
      return item.value;
    });
  let moviCard = {
    title: moveName.value,
    year: year.value,
    categories: selectedOpts,
    imdbId: "tt7026230",
    imdbRating: reting.value,
    runtime: 66,
    language: "English",
    youtubeId: "4hZi5QaMBFc",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    smallThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/jwD04NsnLLg/maxresdefault.jpg",
  };
  moviesArr.unshift(moviCard);
  cards(moviesArr);
});

filter_category.addEventListener("change", (e) => {
  // console.log(e.target.value);
  let arr2 = moviesArr.filter((item) => {
    if (item.categories.find((item) => item === e.target.value)) {
      return true;
    }

    return false;
  });

  cards(arr2);
});

const checkBox = document.querySelector("#checkbox");
