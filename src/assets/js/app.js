let carousel = document.querySelector(".containe-carrusel");
let items = document.querySelectorAll("item_carusel");
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

function itm() {
  console.log("hol mundo desde el archivo de js");
}

function bottomNext() {
  // carousel.classList.remove('prv');
  // carousel.classList.add('net');
  console.log("hola",countItem);
  active = active + 1 >= countItem ? 0 : active + 1;
  other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  other_2 = active + 1 >= countItem ? 0 : active + 1;
  changeSlider();
}

function bottomPrev() {
  // carousel.classList.remove('next');
  // carousel.classList.add('prev');
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  other_1 = active + 1 >= countItem ? 0 : active + 1;
  other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
  changeSlider();
}

// next.onclick = () => {
// }
// prev.onclick = () => {
// }

function changeSlider() {
    let itemOldActive = document.querySelector(
        ".containe-carrusel item_carusel.active"
    );
    if (itemOldActive) itemOldActive.classList.remove("active");
    console.log("hola mundo de angular", itemOldActive);

  let itemOldOther_1 = document.querySelector(
    ".containe-carrusel .item_carusel.other_1"
  );
  if (itemOldOther_1) itemOldOther_1.classList.remove("other_1");

  let itemOldOther_2 = document.querySelector(
    ".containe-carrusel .item_carusel.other_2"
  );
  if (itemOldOther_2) itemOldOther_2.classList.remove("other_2");

  items.forEach((e) => {
    e.querySelector(".img-article img").style.animation = "none";
    e.querySelector(".img-article figcaption").style.animation = "none";
    void e.offsetWidth;
    e.querySelector(".img-article img").style.animation = "";
    e.querySelector(".img-article figcaption").style.animation = "";
  });

//   items[active].classList.add("active");
//   items[other_1].classList.add("other_1");
//   items[other_2].classList.add("other_2");

//   clearInterval(autoPlay);
  // autoPlay = setInterval(() => {
  //     next.click();
  // }, 5000);
}
// let autoPlay = setInterval(() => {
//     next.click();
// }, 5000);
