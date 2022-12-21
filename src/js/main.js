// var menuOverlay = document.querySelector(".menu-overlay");
// var menu = document.querySelector(".menu");
// var close = document.querySelector(".menu-overlay-close");

// var openMenu = function () {
//   menuOverlay.classList.toggle("is-active");
//   menu.classList.toggle("is-open");
// };

// menu.addEventListener("click", openMenu);

// close.addEventListener("click", openMenu);

// -----------

var menu = document.querySelector(".menu");
var buttonOne = document.querySelector(".button-one");
var buttonTwo = document.querySelector(".button-two");
var buttonTree = document.querySelector(".button-tree");
var buttonFour = document.querySelector(".button-four");
var menuVisible = document.querySelector(".menu-visible");

menuHover = function () {
  buttonOne.classList.toggle("button-one-act");
  buttonTwo.classList.toggle("button-two-act");
  buttonTree.classList.toggle("button-tree-act");
  buttonFour.classList.toggle("button-four-act");
};

menu.addEventListener("click", menuHover);

var menuOverlay = document.querySelector(".menu-overlay");
var menu = document.querySelector(".menu");

var openMenu = function () {
  menuOverlay.classList.toggle("is-active");
  menu.classList.toggle("is-open");
};

menu.addEventListener("click", openMenu);
menuOverlay.addEventListener("click", openMenu);
