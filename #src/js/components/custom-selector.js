document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.filter__block')

  window.addEventListener('click', e => {
    let parentBlock = e.target.parentNode
    let elem = e.target
    if(elem.classList.contains('filter__name') && parentBlock.classList.contains('active')) {
      parentBlock.classList.remove('active')
    } else if(elem.classList.contains('filter__name')) {
      blocks.forEach(item => item.classList.remove('active'))
      parentBlock.classList.add('active')
    } 
  })

  const filterList = document.querySelectorAll('.filter__list')

  filterList.forEach(list => {
    if(list.children.length > 9) {
      list.classList.add('maxlenght')
      let li = document.createElement('li')
      li.setAttribute('class', 'filter__elem filter__elem--indicator')
      li.innerHTML = `<button type="button" class="dinamic-1 filter__list-btn"><span style="pointer-events: none">+ ещё</span> ${list.children.length - 8}</button>`
      list.append(li)
    }
  })

  const btnList = document.querySelectorAll('.filter__list-btn')
  btnList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let list = e.target.parentElement.parentElement
      let contant = e.target.firstChild
      list.classList.toggle('active')
      if(contant.textContent === 'скрыть') {
        contant.textContent = '+ ещё'
      } else {
        contant.textContent = 'скрыть'
      }
      
    })
  })



  if (window.innerWidth <= 1200) {
    document.querySelector('.filter__title').textContent = 'Фильтры:'
    document.querySelector('.catalog__title--desc').style.display = 'none'
    document.querySelector('.catalog__title--mob').style.display = 'block'
  }
})

