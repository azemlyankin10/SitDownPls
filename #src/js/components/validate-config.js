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
})
