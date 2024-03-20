/* data.json에서 데이터 가져오기 */
function fetchData() {
  fetch("./js/data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      setMenu(jsondata.menu);
      setFooter(jsondata.footer);
      setCategory(jsondata.category);
    });
}

function setMenu(data) {
  const menuEl = document.querySelector(".sub-category");
  data.forEach((i) => {
    const item = document.createElement("div");
    item.className = "sub-category-item";
    item.textContent = i.title;
    menuEl.appendChild(item);
  });
}

function setFooter(data) {
  const footerEl = document.querySelector("#site-map");

  data.forEach((category) => {
    const item = document.createElement("div");
    const title = Object.keys(category)[0];

    item.className = "item";
    item.textContent = title;

    const items = category[title];
    items.forEach((sub) => {
      const subEl = document.createElement("div");
      subEl.className = "sub-item";
      const link = document.createElement("a");
      link.textContent = sub.title;
      link.href = sub.href;
      subEl.appendChild(link);
      item.appendChild(subEl);
    });
    footerEl.appendChild(item);
  });
}

function setCategory(data) {
  const sectionEl = document.querySelector(".section-category");
  console.log(sectionEl);
  console.log(data);

  data.forEach((i) => {
    const boxEl = document.createElement("div");
    const title = Object.keys(i)[0];
    boxEl.className = "box";

    const titleEl = document.createElement("div");
    titleEl.innerHTML = title;
    titleEl.style.fontWeight = 600;
    titleEl.style.lineHeight = 2;
    boxEl.appendChild(titleEl);

    const items = i[title];
    const contentEl = document.createElement("div");
    contentEl.className = "sub-items";
    boxEl.style.width = items.length * 120 + "px";

    items.forEach((sub) => {
      const subEl = document.createElement("div");
      subEl.className = "sub-item";
      subEl.addEventListener("click", () => {
        console.log(sub.title);
      });
      const imgEl = document.createElement("img");
      imgEl.className = "sub-icon";
      imgEl.src = sub.icon;
      subEl.append(imgEl);
      subEl.append(sub.title);
      contentEl.appendChild(subEl);
    });
    boxEl.appendChild(contentEl);

    sectionEl.appendChild(boxEl);
  });
}

fetchData();
