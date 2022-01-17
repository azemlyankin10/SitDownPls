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
