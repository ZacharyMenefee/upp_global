

/* 
Created accessible objects for each important section of the navbar, then added an on-click event that 
calls a fuction that adds the class of active 
*/
const hamburger = document.querySelector(".hamburger-navigation");
const navMenu = document.querySelector("#navigation-links-fs");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* 
Created an object that contains all of the anchor items from the navigation bar, then using a for each on each of the items
calls a fuction called closeMenu which removes the active tag from the hamburger menu and nav-bar
*/ 
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
