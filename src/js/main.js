var menu = document.querySelector(".menu");
var buttonOne = document.querySelector(".button-one");
var buttonTwo = document.querySelector(".button-two");
var buttonTree = document.querySelector(".button-tree");
var buttonFour = document.querySelector(".button-four");
var menuVisible = document.querySelector(".menu-visible");
var menuOverlay = document.querySelector(".menu-overlay");
var menu = document.querySelector(".menu");
var close = document.querySelector(".menu-overlay-close");

menuHover = function () {
  buttonOne.classList.toggle("button-one-act");
  buttonTwo.classList.toggle("button-two-act");
  buttonTree.classList.toggle("button-tree-act");
  buttonFour.classList.toggle("button-four-act");
};

menu.addEventListener("click", menuHover);

var openMenu = function () {
  menuOverlay.classList.toggle("is-active");
  menu.classList.toggle("is-open");
};

menu.addEventListener("click", openMenu);
menuOverlay.addEventListener("click", openMenu);

/*-------------------------------------------------------------------------------------------
button-haut
-------------------------------------------------------------------------------------------*/

var move = document.querySelector(".button-move");
var cercle = document.querySelector(".cercle");
var ligne = document.querySelector(".ligne-arrow");
var arrow = document.querySelector(".arrow-right");

on = function () {
  cercle.classList.toggle("cercle-active");
  ligne.classList.toggle("ligne-arrow-active");
  arrow.classList.toggle("arrow-active");
};

move.addEventListener("click", on);
