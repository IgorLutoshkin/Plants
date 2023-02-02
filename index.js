console.log(
  "Вёрстка соответствует макету. Ширина экрана 768px +24\nВёрстка соответствует макету. Ширина экрана 380px +24\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +18"
);

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".hed-navbar");
  const menuClose = document.querySelector(".navbar-close");
  const linkClose = document.querySelector(".list-nav");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("hed-navbar-active");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("hed-navbar-active");
  });
  linkClose.addEventListener("click", () => {
    menu.classList.remove("hed-navbar-active");
  });
})();
