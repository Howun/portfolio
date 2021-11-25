const projectOneBtn = document.querySelector(".project__selector__img1");
const projectTwoBtn = document.querySelector(".project__selector__img2");
const projectThreeBtn = document.querySelector(".project__selector__img3");
const projectFourBtn = document.querySelector(".project__selector__img4");
const projectFiveBtn = document.querySelector(".project__selector__img5");
const projectSixBtn = document.querySelector(".project__selector__img6");
let projectDisplay = document.querySelector(".project__display");
// let projectDisplay = document.querySelector("project__display__main");
let projectDescription = document.querySelector(".project__display__description");
let projectTechStack = document.querySelector(".project__display__techStack");
let projectLink = document.querySelector(".project__display__link");

projectOneBtn.addEventListener("click", () => {
  projectDisplay.innerHTML = `<img class="project__display__main" src="./IMG/Tic-tac-toe.jpg" alt="Tic-Tac-Toe"></img>
  <p class="project__display__description">This project is the first JavaScript project.</p>
      <div class="project__display__techStack">
      <i class="fab fa-sass skills__icon5"></i>
      <i class="fab fa-css3-alt skills__icon4"></i>
      <i class="fab fa-html5 skills__icon3"></i>
      </div>
      <a class="project__display__link" href="https://howun.github.io/Tic-Tac-Toe/" target="_blank">Link to project</a>`
});

projectTwoBtn.addEventListener("click", () => {
//add when new projects to push into portfolio
});

projectThreeBtn.addEventListener("click", () => {

});

projectFourBtn.addEventListener("click", () => {

});

projectFiveBtn.addEventListener("click", () => {

});

projectSixBtn.addEventListener("click", () => {

});