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
      setServices(jsondata.favoriteService);
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
function setServices(data) {
  const tabListEl = document.getElementById('service-tab-list');
  const tabContentEl = document.getElementById('service-tab-content');
  
  data.forEach((group, index) => {
    const btnEl = document.createElement('button');
    btnEl.textContent = Object.keys(group)[0];
    btnEl.classList.add('btn');
    if (index == 0) {
    btnEl.classList.add('active');
    }
    tabListEl.appendChild(btnEl);

    const items = group[Object.keys(group)[0]];
    const divEl = document.createElement('div');
    divEl.classList.add('contents-area');
    if (index == 0) {
      divEl.classList.add('active');
      }
    items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.classList.add('item');
      const imgEl = document.createElement('img');
      const titleEl = document.createElement('div');
      const priceEl = document.createElement('p');
      const starEl = document.createElement('span');

      imgEl.src = item.image;
      titleEl.innerHTML = item.title;
      priceEl.innerHTML = item.price;
      starEl.innerHTML = item.star;
      
      itemEl.addEventListener("click", function() {
        window.open(item.link);
      });
      itemEl.appendChild(imgEl);
      itemEl.appendChild(titleEl);
      itemEl.appendChild(priceEl);
      itemEl.appendChild(starEl);

      divEl.appendChild(itemEl);
    })
    
    tabContentEl.appendChild(divEl);
  });
}

fetchData();
