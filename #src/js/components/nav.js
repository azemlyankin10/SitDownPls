const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
burger.addEventListener('click', () => { 
  nav.classList.toggle('active')
})