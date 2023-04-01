// Toggle Active
const navbarNav = document.querySelector
('.navbar-nav');

// Ketika menu di klik
document.querySelector('#menu').
onclick = () => {

navbarNav.classList.toggle('active');

};

// klik di luar sidebar untuk menghilangkan navigator
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){

 if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
navbarNav.classList.remove('active');
}

});