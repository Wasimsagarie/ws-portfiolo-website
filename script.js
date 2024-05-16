let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nabar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(window.scrollY >= offset && window.scrollY < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a [href*=${id} ]`).classList.add('active')
            })
        }
    })
}





menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}