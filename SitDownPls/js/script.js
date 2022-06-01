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


function buyInOneClick() {

  const body = document.querySelector('body')
  body.classList.add('stop-scrolling')

  const wrapp = document.createElement('div')
  wrapp.setAttribute('class', 'buyInOneClick-modal')

  const modal = document.createElement('div')
  modal.setAttribute('class', 'buyInOneClick-modal__modalWindow')

  // title
  const title = document.createElement('span')
  title.textContent = 'Купить в один клик'
  title.setAttribute('class', 'buyInOneClick-modal__title')

  // subtitle
  const subTitle = document.createElement('span')
  subTitle.textContent = 'Чтобы оформить заказ — заполните формы ниже и наш менеджер свяжется с вами в течении часа.'
  subTitle.setAttribute('class', 'buyInOneClick-modal__subtitle')

  const form = document.createElement('form')
  form.setAttribute('class', 'buyInOneClick-modal__form')

  // input
  const inputName = document.createElement('input')
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('placeholder', 'Как вас зовут?')
  inputName.setAttribute('class', 'input buyInOneClick-modal__input')

  const inputTel = document.createElement('input')
  inputTel.setAttribute('type', 'tel')
  inputTel.setAttribute('placeholder', 'Ваш телефон')
  inputTel.setAttribute('class', 'input buyInOneClick-modal__input')

  // btn
  const btn = document.createElement('button')
  btn.setAttribute('type', 'button')
  btn.setAttribute('class', 'btn buyInOneClick-modal__btn dinamic-btn1')
  btn.textContent = 'Отправить'

  // checkbox
  const label = document.createElement('label')
  label.setAttribute('class', 'buyInOneClick-modal__checkbox checkbox')
  label.innerHTML = `
  <input class="checkbox__default" type="checkbox" data-validate-field="checkbox">
  <span class="checkbox__custom"></span>
  <p class="checkbox__text">
    Принимаю
    <a href="#">
      пользовательское соглашение
    </a>
  </p>
  `
  // close
  const close = document.createElement('button')
  close.setAttribute('type', 'button')
  close.setAttribute('class', 'buyInOneClick-modal__close btn')
  close.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z" fill="#999999"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z" fill="#999999"/>
  </svg>
  `

  wrapp.append(modal)
  modal.append(title)
  modal.append(subTitle)
  form.append(inputName)
  form.append(inputTel)
  form.append(btn)
  form.append(label)
  modal.append(form)
  modal.append(close)
  body.append(wrapp)

  close.addEventListener('click', () => {
    wrapp.remove()
    body.classList.remove('stop-scrolling')
  })

  wrapp.addEventListener('click', (e) => {
    if(e.target.classList.contains('buyInOneClick-modal')) {
      wrapp.remove()
      body.classList.remove('stop-scrolling')
    }
    
  })

  btn.addEventListener('click', () => {

    // код отправки 
    // ....

    // создание success-окна
    title.remove()
    subTitle.remove()
    form.remove()
    
    const success = document.createElement('div') 
    success.setAttribute('class', 'buyInOneClick-modal__success')

    const img = document.createElement('span')
    img.setAttribute('class', 'buyInOneClick-modal__success-img-wrapp')
    img.innerHTML = `
    <svg width="172" height="117" viewBox="0 0 172 117" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3271 104.845C48.9686 104.845 53.0467 85.9472 53.0467 70.8167C55.6171 70.8167 75.9308 70.8167 85.1963 70.8167C135.595 70.8167 135.608 0 86.8037 0C73.5292 0 64.979 7.99229 62.69 10.7765C35.4593 10.7765 32.1495 24.907 32.1495 52.3443C32.1495 57.6375 32.1495 74.844 32.1495 77.4944C32.1495 83.9457 29.539 88.1311 22.5031 88.1311C16.4959 88.1311 13.6507 82.8485 11.2507 75.4352C10.0001 76.1023 1.21848 80.8196 0 81.5932C2.65717 88.9988 5.5024 104.845 27.3271 104.845ZM57.9238 41.5663C66.1686 41.5663 66.8694 53.8823 57.3403 53.8823C49.3077 53.8823 49.5167 41.5663 57.9238 41.5663ZM86.8054 78.4731C79.8369 78.4731 59.4766 76.9747 59.4766 76.9747V114.944L78.7664 115.217L83.5888 87.7511L144.673 86.6113L146.282 116.725L168.787 117C168.787 117 172 58.0175 172 46.1848C172 24.2368 162.112 11.8144 139.85 10.7765C134.273 10.5166 126.975 9.48315 122.168 9.23696C143.118 34.5543 126.449 78.4731 86.8054 78.4731ZM125.385 93.8681L126.991 116.178L139.85 116.453L138.243 93.8681H125.385ZM85.1963 115.494L98.0561 115.767L101.269 93.8681H90.0171L85.1963 115.494Z" fill="#FF862F"/>
    </svg>
    `
    const successtitle = document.createElement('span')
    successtitle.setAttribute('class', 'buyInOneClick-modal__success-title')
    successtitle.textContent = 'Спасибо, мы вам перезвоним!'

    success.append(img)
    success.append(successtitle)
    modal.append(success)
  })

}

const detailsBtns = document.querySelectorAll('.detailCard__btn')

detailsBtns.forEach(btn => btn.addEventListener('click', buyInOneClick))

// ------------------------
// caruselModal
const imagesDom = document.querySelectorAll('.detail__swiper-img')
imagesDom.forEach(img => img.addEventListener('click', () => imageCardCaruselModal(imagesDom)))

function imageCardCaruselModal(arrImg) {
  const body = document.querySelector('body')
  body.classList.add('stop-scrolling')

  const wrapp = document.createElement('div')
  wrapp.setAttribute('class', 'detail-modal carusel-modal')

  const modal = document.createElement('div')
  modal.setAttribute('class', 'detail-modal__modalWindow')
  let containerDom = document.querySelector('.container')
  // modal.style.minWidth = `${containerDom.clientWidth-70}px`
  

  const close = document.createElement('button')
  close.setAttribute('type', 'button')
  close.setAttribute('class', 'buyInOneClick-modal__close btn')
  close.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z" fill="#999999"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z" fill="#999999"/>
  </svg>
  `

  // caruselMainImage
  const carusel = document.createElement('div')
  carusel.setAttribute('class', 'detail__modalSwiper-main swiper')
  const caruselWrapp = document.createElement('div')
  caruselWrapp.setAttribute('class', 'detailCard__img-list detail__swiper-wrapper swiper-wrapper')

  // caruselButton
  const caruselButtons = document.createElement('div')
  caruselButtons.setAttribute('class', 'detailCard__img-list-modalSwiper swiper')
  const caruselButtonsWrapp = document.createElement('div')
  caruselButtonsWrapp.setAttribute('class', 'detailCard__img-list swiper-wrapper')


  arrImg.forEach(img => {
    // top
    const slide = document.createElement('div')
    slide.setAttribute('class', 'detail__swiper-img-wrap swiper-slide')
    const image = document.createElement('img')
    image.setAttribute('src', `${img.getAttribute('src')}`)
    // bottom
    const btn = document.createElement('button')
    btn.setAttribute('class', 'detailCard__img-button swiper-slide')
    const btnImage = document.createElement('img')
    btnImage.setAttribute('src', `${img.getAttribute('src')}`)

    btn.append(btnImage)
    slide.append(image)
    caruselWrapp.append(slide)
    caruselButtonsWrapp.append(btn)
  })

  const btn1 = document.createElement('div')
  btn1.setAttribute('class', 'swiper-button-prev detail-swiper-button-prev dinamic-arrowBtn')
  btn1.innerHTML = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" fill="none" stroke="#A65CF0" stroke-width="2"/>
    <path d="M14 11L19 16L14 21" stroke="#A65CF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
  `
  const btn2 = document.createElement('div')
  btn2.setAttribute('class', 'swiper-button-next detail-swiper-button-next dinamic-arrowBtn')
  btn2.innerHTML = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" fill="none" stroke="#A65CF0" stroke-width="2"/>
    <path d="M14 11L19 16L14 21" stroke="#A65CF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
  `



  carusel.append(caruselWrapp)
  caruselButtons.append(caruselButtonsWrapp)
  caruselButtons.append(btn1)
  caruselButtons.append(btn2)
  modal.append(carusel)
  modal.append(caruselButtons)
  modal.append(close)
  wrapp.append(modal)
  body.append(wrapp)

  
  // cardChangeImgModal
  const imgListSwiperModal = new Swiper('.detailCard__img-list-modalSwiper', {
    spaceBetween: 78,
    // slidesPerView: 4,
    navigation: {
      nextEl: '.detail-swiper-button-next',
      prevEl: '.detail-swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,


      },
      1200: {
        slidesPerView: 4,
        loop: true,
      }
    },
  });

  const imgListSwiperMainModal = new Swiper(".detail__modalSwiper-main", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: imgListSwiperModal,
    },
  });



  close.addEventListener('click', () => {
    wrapp.remove()
    body.classList.remove('stop-scrolling')
  })

  wrapp.addEventListener('click', (e) => {
    if(e.target.classList.contains('detail-modal')) {
      wrapp.remove()
      body.classList.remove('stop-scrolling')
    }
  })

}
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger')
  const nav = document.querySelector('.nav')
  burger.addEventListener('click', () => { 
    nav.classList.toggle('active')
  })
})

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

document.addEventListener('DOMContentLoaded', () => {
  const filterRange = document.querySelector('.filter__range-slider');

  if(filterRange) {
    noUiSlider.create(filterRange, {
      start: [0, 150000],
      connect: true,
      step: 100,
      range: {
          'min': [0],
          'max': [200000]
      }
    })

    const input0 = document.getElementById('input0')
    const input1 = document.getElementById('input1')
    const inputs = [input0, input1]

    filterRange.noUiSlider.on('update', (values, handle) => {
      inputs[handle].value = Math.round(values[handle])
    })

    const setRangeSlider = (i, value) => {
      let arr = [null, null]
      arr[i] = value

      filterRange.noUiSlider.set(arr)
    }

    inputs.forEach((el, index) => {
      el.addEventListener('change', e => {
        setRangeSlider(index, e.currentTarget.value)
      })
    })

    // добавление стилей при фокусе
    const sliderContainer = document.querySelector('.noUi-base')
    const controlBtns = document.querySelectorAll('.noUi-handle')
    controlBtns.forEach(btn => {
      btn.addEventListener('focusin', e => {
        sliderContainer.classList.add('sliderActive')
        e.target.classList.add('active')
      })
      btn.addEventListener('focusout', e => {
        sliderContainer.classList.remove('sliderActive')
        e.target.classList.remove('active')
      })
    })
  }
})


document.addEventListener('DOMContentLoaded', () => {
  const regionSelect = document.querySelector('#region-select')
  const regionChoices = new Choices(regionSelect, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  })
  
  const categorySelect = document.querySelector('#category-select')
  const categoryChoices = new Choices(categorySelect, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  })
})
document.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 900,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      // pauseOnMouseEnter: true
    },
    pagination: {
      el: '.hero__swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
  
  const offerSwiper = new Swiper('.offer__swiper', {
    navigation: {
      nextEl: '.offer__button-next',
      prevEl: '.offer__button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 1
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
  
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      }
    },
  
  });
  
  const userfulSwiper = new Swiper('.userful__swiper', {
    slidesPerGroup: 1,
    spaceBetween: 32,
  
  
    navigation: {
      nextEl: '.userful__button-next',
      prevEl: '.userful__button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 1
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 2,
  
      }
    },
  });

  const detailCardSwiper = new Swiper('.detailCard__carusel-swiper', {
    slidesPerGroup: 1,
    spaceBetween: 32,
  
  
    navigation: {
      nextEl: '.detailCard__carusel-button-next',
      prevEl: '.detailCard__carusel-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      576: {
        // slidesPerView: 2,
        // slidesPerGroup: 1,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 4,
  
      }
    },
  });


  //cardChangeImg
  const imgListSwiper = new Swiper('.detailCard__img-list-swiper', {
    spaceBetween: 38,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 3,

      },
      576: {
        direction: 'vertical',
      },
      992: {
        direction: 'horizontal',

      },
      // 1200: {

      // }
    },
  });

  const imgListSwiperMain = new Swiper(".detail__swiper-main", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: imgListSwiper,
    },
  });
  
})






document.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('input[type="tel"]')
  const im = new Inputmask("+7 (999) 999-99-99")
  im.mask(selector)
  
  new JustValidate('.main-form__form', {
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      },
      checkbox: {
        required: true
      }
    },
    messages: {
      name: 'Введите имя',
      tel: {
        required: 'Введите номер телефона',
        function: 'Недопустимый формат'
      },
      email: {
        required: 'Введите адрес электронной почты',
        email: 'Неверный формат электронной почты'
      },
      checkbox: {
        required: ' '
      }
    },
    submitHandler: function(form) {
      createModal()

      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
            createSuccessModal()
          } else {
            createFatalModal()
          }
        }
      }
  
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
  
      form.reset();
  
    }
  })
  
})


function createModal() {
  const body = document.querySelector('body')
  let div = document.createElement('div')
  div.setAttribute('class', "modalSuccess")
  div.textContent = 'Идет отправка...'
  body.insertAdjacentElement('afterbegin', div)
}

function createSuccessModal() {
  const modal = document.querySelector('.modalSuccess')
  modal.textContent = 'Письмо отправлено'
  setTimeout(() => {
    modal.remove()
  }, 2000)
}

function createFatalModal() {
  const modal = document.querySelector('.modalSuccess')
  modal.textContent = 'Письмо не удалось отправить'
  setTimeout(() => {
    modal.remove()
  }, 2000)
}

document.addEventListener('DOMContentLoaded', () => {
	function testWebP(callback) {
		var webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector('html').classList.add('_webp')
		} else {
			document.querySelector('html').classList.add('_no-webp')
		}
	})
})

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

// //header line
// const height = document.querySelector('.header__info-list').getBoundingClientRect().height
// console.log(height);
// const line = document.querySelector('.header__line')
// line.style.height = `${height + 32}px`

// if(window.innerWidth < 567) {
//   line.style.height = '50px'
// }