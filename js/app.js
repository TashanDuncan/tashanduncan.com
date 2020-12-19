const projects = document.getElementById('projects');
const projectBtn = document.getElementById('projectsBtn');

projectBtn.addEventListener('click', () =>{
    projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
})


function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }