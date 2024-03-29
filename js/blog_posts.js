const blog_data = [{
      title: "N잡, 이제 선택이 아닌 필수예요",
      author: "크몽어워즈 신규고객상&스케일업상 수상자",
      src: "./img/blog/main_theme_picked_business_tip_20231220_1_1.webp",
      href: "https://kmong.com/article/643--2023-%ED%81%AC%EB%AA%BD%EC%96%B4%EC%9B%8C%EC%A6%88-N%EC%9E%A1-%EC%9D%B4%EC%A0%9C-%EC%84%A0%ED%83%9D%EC%9D%B4-%EC%95%84%EB%8B%8C-%ED%95%84%EC%88%98%EC%98%88%EC%9A%94"
    },
    {
      title: "크몽으로 제 삶이 180도 바뀌었어요",
      author: "크몽어워즈 디지털노마드상& 체인지상 수상자",
      src: "./img/blog/main_theme_picked_business_tip_20231220_2_1.webp",
      href: "https://kmong.com/article/644--2023-%ED%81%AC%EB%AA%BD%EC%96%B4%EC%9B%8C%EC%A6%88-%ED%81%AC%EB%AA%BD%EC%9C%BC%EB%A1%9C-%EC%A0%9C-%EC%82%B6%EC%9D%B4-180%EB%8F%84-%EB%B0%94%EB%80%8C%EC%97%88%EC%96%B4%EC%9A%94"
    },
    {
      title: "AI를 이용하여 수입을 창출해 보세요",
      author: "크몽어워즈 AI선구자상 수상자",
      src: "./img/blog/main_theme_picked_business_tip_20231220_3_1.webp",
      href: "https://kmong.com/article/645--2023-%ED%81%AC%EB%AA%BD%EC%96%B4%EC%9B%8C%EC%A6%88-AI%EB%A5%BC-%EC%A0%81%EA%B7%B9%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%88%98%EC%9E%85%EC%9D%84-%EC%B0%BD%EC%B6%9C%ED%95%B4%EB%B3%B4%EC%84%B8%EC%9A%94"
    },
  ];

function getElements() {
  const sectionEl = document.querySelector("#blog-content");

  for (i = 0; i < 3; i++) {
    //console.log(blog_data[i].href);
    const divEl = document.createElement('div');
    const imgEl = document.createElement('img');
    imgEl.src = blog_data[i].src;
    imgEl.alt = blog_data[i].title;
    imgEl.addEventListener("click", function() {
      window.open(blog_data[i].href);
    })
    const textEl = document.createElement('div');
    textEl.className = "text";
    const p1El = document.createElement('p');
    p1El.innerHTML = blog_data[i].title;
    p1El.className = "name";
    const p2El = document.createElement('p');
    p2El.innerHTML = blog_data[i].author;
    p2El.className = "sub-name";
    textEl.appendChild(p1El);
    textEl.appendChild(p2El);

    divEl.appendChild(imgEl);
    divEl.appendChild(textEl);
    sectionEl.appendChild(divEl);
  }
}

getElements();
