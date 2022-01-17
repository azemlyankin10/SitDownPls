document.addEventListener('DOMContentLoaded', () => {
  // catalog pagination
  const catalogCards = document.querySelectorAll('.catalog__grid-cards .card-regular')
  catalogCards.forEach(elem => elem.style.display = 'none')

  let numberOfCards = 9 //количество карточек на странице

  if(window.innerWidth <= 992) {
    numberOfCards = 6
  } 

  // пагинация
  const containerPagination = document.querySelector('.catalog__pagination')
  const numberOfPaginagion = Math.ceil(catalogCards.length / numberOfCards) 
  for(let i = 0; i < numberOfPaginagion; i++) {
    let li = document.createElement('li')
    li.setAttribute('class', 'pagination__elem')
    li.innerHTML = `<button class="pagination__btn pagination__btn-catalog">${i + 1}</button>`
    containerPagination.append(li)
  }
  const catalogPagination = document.querySelectorAll('.pagination__btn-catalog') 

  for(let i = 0; i < numberOfCards; i++) {  //карточки при загрузке страници
    catalogCards[i].style.display = 'flex'  
  }
  catalogPagination[0].classList.add('active') //устанавилиет активный класс на первый кнопку пагинации

  catalogPagination.forEach(btn => {  //действия по клику на кнопку
    
    btn.addEventListener('click', (e) => {
      catalogPagination.forEach(elem => elem.classList.remove('active'))
      e.target.classList.add('active')
      catalogCards.forEach(elem => elem.style.display = 'none')
      let listNumber = +e.target.innerHTML
      let start = (listNumber - 1) * numberOfCards
      let end = start + numberOfCards
      for(let i = start; i < end; i++) {
        catalogCards[i].style.display = 'flex'
      }
    })
  })
})
