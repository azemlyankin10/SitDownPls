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
