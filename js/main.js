function fetchData() {
  fetch("./js/data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      setMenu(jsondata.menu);
      setFooter(jsondata.footer);
    });
}

function setMenu(data) {
  //console.log(data);
  return;
}

function setFooter(data) {
  const footerEl = document.querySelector('#site-map');
  console.log(footerEl);

  data.forEach(category  => {
    const item = document.createElement('div');
    const title = Object.keys(category)[0];

    item.className = "item";
    item.textContent = title;

    const items = category[title];
    items.forEach(sub => {
      const subEl = document.createElement('div');
      subEl.className = "sub-item";
      const link = document.createElement('a');
      link.textContent = sub.title;
      link.href = sub.href;
      subEl.appendChild(link);
      item.appendChild(subEl);
    });
    footerEl.appendChild(item);
  })
}

fetchData();
