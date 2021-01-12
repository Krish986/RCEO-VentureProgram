const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.sub-menu');
const links = document.querySelectorAll('.sub-menu li');
const buttons = document.querySelector('.selection-container');
const navigBar = document.getElementById('navbar');

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

burger.onclick = function() {
    if (navigBar.classList.contains('open')) {
        buttons.style.zIndex = "-1";
    } else {
        setTimeout(function() {
            buttons.style.zIndex = "0";
        }, 400);     
    }
};


