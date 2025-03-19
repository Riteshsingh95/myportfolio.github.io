/* For Typing animation */

const typed = new Typed(".multi-text", {
    strings: ["Software Developer","Frontend Developer", "Web Developer", "Programmer", "UI/UX Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


/* scrollrevel */

ScrollReveal({
    distance: '80px',
    duration: 3000,
    delay: 500,
});

ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'right' });
ScrollReveal().reveal('.about-content', { origin: 'top' });
ScrollReveal().reveal('.about-img', { origin: 'right' });
ScrollReveal().reveal('.home-content p, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .skill-flex , .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img, img', { origin: 'right' });

// responsive//

let icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

icon.onclick = () => {
    icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}