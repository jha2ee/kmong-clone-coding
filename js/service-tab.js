function switchTabs() {
  let btnEls;
  let contentEls;
  setTimeout(function () {
    btnEls = document.querySelectorAll(".tab-list .btn");
    contentEls = document.querySelectorAll(".tab-content .contents-area");
    setActive(btnEls, contentEls);
  }, 3000);

  function setActive(btn, content) {
    btn.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        content.forEach((c) => {
          c.classList.remove("active");
        });

        btn.forEach((b) => {
          b.classList.remove("active");
        });

        btn[index].classList.add("active");
        content[index].classList.add("active");
      });
    });
  }
}

switchTabs();
