"use strict";

var projectOneBtn = document.querySelector(".project__selector__img1");
var projectTwoBtn = document.querySelector(".project__selector__img2");
var projectThreeBtn = document.querySelector(".project__selector__img3");
var projectFourBtn = document.querySelector(".project__selector__img4");
var projectFiveBtn = document.querySelector(".project__selector__img5");
var projectSixBtn = document.querySelector(".project__selector__img6");
var projectDisplay = document.querySelector(".project__display"); // let projectDisplay = document.querySelector("project__display__main");

var projectDescription = document.querySelector(".project__display__description");
var projectTechStack = document.querySelector(".project__display__techStack");
var projectLink = document.querySelector(".project__display__link");
projectOneBtn.addEventListener("click", function () {
  projectDisplay.innerHTML = "<img class=\"project__display__main\" src=\"./IMG/Tic-tac-toe.jpg\" alt=\"Tic-Tac-Toe\"></img>\n  <p class=\"project__display__description\">This project is the first JavaScript project.</p>\n      <div class=\"project__display__techStack\">\n      <i class=\"fab fa-sass skills__icon5\"></i>\n      <i class=\"fab fa-css3-alt skills__icon4\"></i>\n      <i class=\"fab fa-html5 skills__icon3\"></i>\n      </div>\n      <a class=\"project__display__link\" href=\"https://howun.github.io/Tic-Tac-Toe/\" target=\"_blank\">Link to project</a>";
});
projectTwoBtn.addEventListener("click", function () {//add when new projects to push into portfolio
});
projectThreeBtn.addEventListener("click", function () {});
projectFourBtn.addEventListener("click", function () {});
projectFiveBtn.addEventListener("click", function () {});
projectSixBtn.addEventListener("click", function () {});