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

