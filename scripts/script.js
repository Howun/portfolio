const projectOneBtn = document.querySelector(".project__selector__img1");
const projectTwoBtn = document.querySelector(".project__selector__img2");
const projectThreeBtn = document.querySelector(".project__selector__img3");
const projectFourBtn = document.querySelector(".project__selector__img4");
const projectFiveBtn = document.querySelector(".project__selector__img5");
const projectSixBtn = document.querySelector(".project__selector__img6");
let projectDisplay = document.querySelector(".project__display");
let projectDescription = document.querySelector(".project__display__description");
let projectTechStack = document.querySelector(".project__display__techStack");
let projectLink = document.querySelector(".project__display__link");

projectOneBtn.addEventListener("click", () => {
  projectDisplay.innerHTML =
    `<img class="project__display__main"
     src="./IMG/GIFS/Tic-Tac-Toe.gif"
     alt="Tic-Tac-Toe"></img>
     <p class="project__display__description">
     This project is the first JavaScript project. Making Tic-Tac-Toe
     </p>
     <div class="project__display__techStack">
     <i class="fab fa-sass skills__icon5" alt="SASS" title="SASS"></i>
      <i class="fab fa-css3-alt skills__icon4" alt="CSS" title="CSS"></i>
      <i class="fab fa-html5 skills__icon3" alt="HTML" title="HTML"></i>
     </div>
     <a class="project__display__link" href="https://howun.github.io/Tic-Tac-Toe/" target="_blank">Link to project</a>`
});

projectTwoBtn.addEventListener("click", () => {
  projectDisplay.innerHTML = `<img class="project__display__main" src="./IMG/GIFS/Beer-API.gif" alt="Tic-Tac-Toe"></img>
  <p class="project__display__description">This beers API was built to demonstrate my skills at interacting with an API. <br/>
  To create the functions to fetch the data involved reading documentations for for API. <br/>
  It is built using React whilst using hooks such as useState and useEffect</p>
      <div class="project__display__techStack">
      <i class="fab fa-sass skills__icon5" alt= "SASS" title="SASS"></i>
      <i class="fab fa-css3-alt skills__icon4" alt="CSS" title="CSS"></i>
      <i class="fab fa-html5 skills__icon3" alt="HTML" title="HTML"></i>
      <i class = "fab fa-react skills__icon6"></i>
      </div>
      <a class="project__display__link" href="https://howun.github.io/Tic-Tac-Toe/" target="_blank">Link to project</a>`
});

projectThreeBtn.addEventListener("click", () => {
  projectDisplay.innerHTML =
    `<img class="project__display__main"
     src="./IMG/GIFS/Calculator.gif"
     alt="Tic-Tac-Toe"></img>
     <p class="project__display__description">
     Calculator project
     </p>
     <div class="project__display__techStack">
     <i class="fab fa-sass skills__icon5" alt="SASS" title="SASS"></i>
      <i class="fab fa-css3-alt skills__icon4" alt="CSS" title="CSS"></i>
      <i class="fab fa-html5 skills__icon3" alt="HTML" title="HTML"></i>
     </div>
     <a class="project__display__link" href="https://howun.github.io/Tic-Tac-Toe/" target="_blank">Link to project</a>`
});

projectFourBtn.addEventListener("click", () => {
  projectDisplay.innerHTML =
    `<img class="project__display__main"
     src="./IMG/GIFS/Ticket-Tracker.gif"
     alt="Tic-Tac-Toe"></img>
     <p class="project__display__description">
     Calculator project
     </p>
     <div class="project__display__techStack">
     <i class="fab fa-sass skills__icon5" alt="SASS" title="SASS"></i>
      <i class="fab fa-css3-alt skills__icon4" alt="CSS" title="CSS"></i>
      <i class="fab fa-html5 skills__icon3" alt="HTML" title="HTML"></i>
     </div>
     <a class="project__display__link" href="https://howun.github.io/Tic-Tac-Toe/" target="_blank">Link to project</a>`
});

projectFiveBtn.addEventListener("click", () => {

});

projectSixBtn.addEventListener("click", () => {

});