function getElements() {
  const bannerEls = document.querySelectorAll('.ad-banner img');
  bannerEls.forEach(i=> {
    i.addEventListener("click", function() {
      alert("광고 창 팝업");
    })
  })
  // const ad1 = document.querySelector('.ad1');
  // ad1.addEventListener("click", function() {
  //   window.open("/event/1.html")
  // });
  // const ad2 = document.querySelector('.ad2');
  // ad2.addEventListener("click",  function() {
  //   window.open("/event/2.html")
  // });
  // const ad3 = document.querySelector('.ad3');
  // ad3.addEventListener("click",  function() {
  //   window.open("/event/3.html")
  // });
  
}

getElements();