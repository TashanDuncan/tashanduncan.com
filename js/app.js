//buttons
const projectBtn = document.getElementById("projectsBtn");
const topbutton = document.getElementById("topBtn");



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
const headSection = document.getElementById("header")
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

// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}



 
//Event Listeners
projectBtn.addEventListener("click", () => Scroller(projectsSection, "smooth", "start"));
projectsNav.addEventListener("click", () => Scroller(projectsSection, "smooth", "start"));
aboutMeNav.addEventListener("click", () => Scroller(aboutSection, "smooth", "center"));
skillsNav.addEventListener("click", () => Scroller(skillsSection, "smooth", "center"));
githubNav.addEventListener("click", () => Scroller(githubSection, "smooth", "center"));
topbutton.addEventListener("click", () => Scroller(headSection, "smooth", "start"));

window.onscroll = function() {scrollFunction()};