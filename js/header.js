let root = document.querySelector(':root');
let header = document.querySelector('header');

function loadContent () {
    fetch('./header.html')
    .then(res => {
        return res.text();
    })
    .then(html => {
        header.innerHTML = html;
        
        let hamburger = document.getElementsByClassName('hamburger')[0];
        let nav = document.querySelector('nav');
        
        // Show/hide mobile nav
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('move-on-screen');
            hamburger.classList.toggle('hamburger-cross');
        });

        // Show/hide mobile services dropdown
        let servicesLink = document.getElementsByClassName('services-link-container')[0];
        let dropdown = document.getElementsByClassName('services-dropdown')[0];
        let arrow = document.getElementsByClassName('fa-sort-down')[0];

        servicesLink.addEventListener('click', function() {
            dropdown.classList.toggle('expand-services-dropdown');
            arrow.classList.toggle('rotate-arrow');
            console.log('JS is working so far');
        })
    })
};

loadContent();




