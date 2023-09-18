/* Add shadow to header on scroll */
function headerShadow() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    header.classList.add('header-box-shadow');
  } else {
    header.classList.remove('header-box-shadow');
  }
}

window.addEventListener('scroll', headerShadow);

/* Stick homepage logo to top on scroll */
let logo = document.getElementsByClassName('logo')[0];
let logoTop = logo.offsetTop;

function stickyLogo() {
    let y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    
    if (y >= logoTop) {
        logo.classList.add('fixed-logo');
    } else {
        logo.classList.remove('fixed-logo');
    }
}

window.addEventListener('scroll', stickyLogo);

