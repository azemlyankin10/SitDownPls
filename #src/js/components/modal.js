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