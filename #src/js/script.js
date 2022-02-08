tippy('#form-tooltip', {
  animation: 'fade',
  maxWidth: 157,
  content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
});

// rating-btn
const ratingBtn = document.querySelector('.rating__btn')
const sectionRating = document.querySelector('.rating')
ratingBtn.addEventListener('click', () => { 
  sectionRating.classList.toggle('active')
  if(sectionRating.classList.contains('active')) {
    ratingBtn.textContent = 'Показать меньше товаров'
  } else {
    ratingBtn.textContent = 'Смотреть больше товаров'
  }
})

//header line
const height = document.querySelector('.header__info-list').getBoundingClientRect().height
console.log(height);
const line = document.querySelector('.header__line')
line.style.height = `${height + 32}px`

if(window.innerWidth < 567) {
  line.style.height = '50px'
}