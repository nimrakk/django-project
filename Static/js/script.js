
  function downloadImage() {
    // Create an anchor element
    var anchor = document.createElement('a');

    // Set the anchor's href to the image file you want to download
    anchor.href = 'img/cv.jpg';

    // Set the download attribute to specify the filename for the downloaded file
    anchor.download = 'cv.jpg';

    // Simulate a click on the anchor element to trigger the download
    anchor.click();
  }


/*-------------- toggle item navbar----------*/
console.log("Script is running"); // Add this line to check if the script is running
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*------------------------------------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections. forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id= sec.getAttribute('id');

            if (top >= offset && top < offset + height) { 
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

                });
            };
    });

/*-------------- sticky navbar --------------- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

/*-------------- remove toggle item and navbar when click navbar link (scroll) ----------*/
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

/*------------------scroll reveal ------------*/

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); 
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); 
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); 
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); 


/*------------------typed js ------------------*/
const typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Developer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
});



    