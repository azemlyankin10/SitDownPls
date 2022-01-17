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