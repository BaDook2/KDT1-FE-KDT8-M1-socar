const headerTag = document.querySelector('header');
const logoEl = document.querySelector('.company__logo');
const hamburgerEl = document.querySelector('.hamburger');
const navnetEl = document.querySelector('.nav-net');
const navbarEl = document.querySelector('.navbar');



hamburgerEl.addEventListener('click', function(){
  let currentImgLogo = logoEl.getAttribute('src');
  if(currentImgLogo === './image/logo-blue.svg'){
    logoEl.setAttribute('src','./image/logo-w.svg');
  }else{
  logoEl.setAttribute('src','./image/logo-blue.svg');
  }

  navbarEl.classList.toggle('active');
  navnetEl.classList.toggle('active');
  hamburgerEl.classList.toggle('active');
})


window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY > 10){
    headerTag.classList.add('active');
  } else{
    headerTag.classList.remove('active');
  }

}, 300));
