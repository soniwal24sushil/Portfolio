// ^ Navbar
const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

//  ^ Header

var typed = new Typed("#element", {
    strings: ["Sushil Soniwal!"],
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 30, // Backspacing speed in milliseconds
    loop: true, // Enable looping
    loopCount: Infinity, // Number of loops, set to Infinity for infinite loop
    backDelay: 3000,
});
