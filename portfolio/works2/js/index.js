// ハンバーガーメニューのjs
var btnMenu = document.getElementsByClassName("btn-menu");
var body = document.body;
for (var i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", function () {
    body.classList.toggle("menu-open");
  });
}

// 下からくるっと表示させるjs
function fadeAnime() {
  const elements = document.querySelectorAll(".rotateYTrigger");
  elements.forEach(function (element) {
    const elemPos = element.getBoundingClientRect().top + window.scrollY - 100;

    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scroll >= elemPos - windowHeight) {
      element.classList.add("rotateY");
    } else {
      element.classList.remove("rotateY");
    }
  });
}

window.addEventListener("scroll", fadeAnime);
window.onload = function () {
  fadeAnime();

  // top画像の表示のjs
  const topSwiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // ギャラリーソート
  var grid = new Muuri(".grid", {
    showDuration: 600,
    showEasing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    hideDuration: 600,
    hideEasing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  });
  const sortBtn = document.querySelectorAll(".sort-btn li");
  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener("click", function (e) {
      const activeClass = document.querySelector(".sort-btn .active");
      if (activeClass) {
        activeClass.classList.remove("active");
      }
      e.currentTarget.classList.add("active");
      const className = e.currentTarget.className.split(" ");
      if (className[0] == "sort00") {
        grid.show("");
      } else {
        grid.filter("." + className[0]);
      }
    });
  }
};
