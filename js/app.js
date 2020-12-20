//buttons
const projectBtn = document.getElementById("projectsBtn");


//SideNav
const projectsNav = document.getElementById("projects");
const aboutMeNav = document.getElementById("aboutMe");
const skillsNav = document.getElementById("skills");
const githubNav = document.getElementById("github");

//sections
const aboutSection = document.getElementById("aboutSection");
const skillsSection = document.getElementById("skillsSection");
const projectsSection = document.getElementById("projectsSection");
const githubSection = document.getElementById("githubSection");

//Functions
function openNav() {
  document.getElementById("mySidenav").style.width = "160px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function Scroller(section, behavior, block) {
  section.scrollIntoView({ behavior: behavior, block: block });
}

//Event Listeners
projectBtn.addEventListener("click", () => Scroller(projectsSection, "smooth", "start"));
projectsNav.addEventListener("click", () => Scroller(projectsSection, "smooth", "start"));
aboutMeNav.addEventListener("click", () => Scroller(aboutSection, "smooth", "center"));
skillsNav.addEventListener("click", () => Scroller(skillsSection, "smooth", "center"));
githubNav.addEventListener("click", () => Scroller(githubSection, "smooth", "center"));