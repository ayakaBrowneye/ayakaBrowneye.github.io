// 下からふわっと
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fadeUpTrigger");
  console.log(elements);
  elements.forEach(function (element) {
    const elemPos = element.getBoundingClientRect().top + window.scrollY - 100;

    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scroll >= elemPos - windowHeight) {
      element.classList.add("fadeUp");
    } else {
      element.classList.remove("fadeUp");
    }
  });
});
