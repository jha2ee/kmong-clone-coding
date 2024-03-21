import { ranking } from "./rank-data.js";

function getElements() {
  const contentEl = document.querySelector("#ranking-content");

  ranking.forEach((category) => {
    const categoryName = Object.keys(category)[0];
    const categoryEl = document.createElement("div");
    categoryEl.classList.add("category");

    const items = category[categoryName];
    const firstRank = items.shift();
    const rank1El = document.createElement("div");
    rank1El.classList.add("item");
    rank1El.classList.add(`rank1`);
    const rankEl = document.createElement("img");
    rankEl.classList.add("rank");
    rankEl.src = `../img/icon/ranking-01.webp`;
    const div = document.createElement("div");
    div.classList.add("text-area");
    const priceEl = document.createElement("div");
    priceEl.innerHTML = firstRank.value;
    priceEl.classList.add("name");
    const nameEl = document.createElement("div");
    nameEl.innerHTML = firstRank.name;
    nameEl.classList.add("sub-name");
    div.appendChild(priceEl);
    div.appendChild(nameEl);
    const imgEl = document.createElement("img");
    imgEl.src = firstRank.image;
    imgEl.classList.add("img");

    rank1El.appendChild(rankEl);
    rank1El.appendChild(div);
    rank1El.appendChild(imgEl);

    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    const headingEl = document.createElement("h2");
    headingEl.textContent = categoryName;

    boxEl.appendChild(headingEl);
    boxEl.appendChild(rank1El);
    categoryEl.appendChild(boxEl);

    const listEl = document.createElement("div");
    listEl.classList.add("rest-list");

    // 2~5등 생성
    items.forEach((i, index) => {
      const itemEl = document.createElement("div");
      itemEl.classList.add("item");
      itemEl.classList.add(`rank${index + 2}`);
      const rankEl = document.createElement("img");
      rankEl.classList.add("rank");
      rankEl.src = `../img/icon/ranking-0${index + 2}.webp`;
      const div = document.createElement("div");
      div.classList.add("text-area");
      const priceEl = document.createElement("div");
      priceEl.innerHTML = i.value;
      priceEl.classList.add("name");
      const nameEl = document.createElement("div");
      nameEl.innerHTML = i.name;
      nameEl.classList.add("sub-name");
      div.appendChild(priceEl);
      div.appendChild(nameEl);
      const imgEl = document.createElement("img");
      imgEl.src = i.image;
      imgEl.classList.add("img");

      itemEl.appendChild(rankEl);
      itemEl.appendChild(div);
      itemEl.appendChild(imgEl);
      const line = document.createElement("div");
      line.className = "separate-line";

      if (index < items.length - 1) {
        listEl.appendChild(itemEl);
        listEl.appendChild(line.cloneNode(true)); // separate-line을 복제하여 추가
      } else {
        listEl.appendChild(itemEl);
      }
    });

    categoryEl.appendChild(listEl);
    contentEl.appendChild(categoryEl);
    addSeparateLines();
  });
}

function addSeparateLines() {
  for (i = 2; i < 5; i++) {
    const line = document.createElement("div");
    line.className = "separate-line";
    //document.querySelector(`.rank${i}`).after(line);
  }
}

getElements();
