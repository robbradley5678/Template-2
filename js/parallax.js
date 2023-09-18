const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function() {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY =  (offset * 0.4)  + "px";
})

/* How easy is that? Thanks freeCodeCamp.org */