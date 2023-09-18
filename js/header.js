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
        
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('move-on-screen');
            hamburger.classList.toggle('hamburger-cross');
        })
    })
};

loadContent();




