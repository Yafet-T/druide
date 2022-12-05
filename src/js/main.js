var menu = document.querySelector(".cash");
var buttonOne = document.querySelector(".button-one");
var buttonTwo = document.querySelector(".button-two");
var buttonTree = document.querySelector(".button-tree");
var buttonFour = document.querySelector(".button-four");

menuHover = function () {
  buttonOne.classList.add("button-one-hover");
  buttonTwo.classList.add("button-two-hover");
  buttonTree.classList.add("button-tree-hover");
  buttonFour.classList.add("button-four-hover");
};

menuHoverFalse = function () {
  buttonOne.classList.remove("button-one-hover");
  buttonTwo.classList.remove("button-two-hover");
  buttonTree.classList.remove("button-tree-hover");
  buttonFour.classList.remove("button-four-hover");
};

menu.addEventListener("mousemove", menuHover);
menu.addEventListener("mouseleave", menuHoverFalse);
