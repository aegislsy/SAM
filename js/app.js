/* resposive menu */
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("menu a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

/* Scroll to top */
function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

/* Prevent user sizing */
document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  false
);

/* works slide */
let swiperworks = new Swiper(".works__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      spaceBetween: 32,
    },
  },
});
