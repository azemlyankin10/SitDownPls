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





