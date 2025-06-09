const rangeElement = document.querySelector('.form-range__input');
const formRangeValue = document.querySelector('.form-range__value');

formRangeValue.textContent = rangeElement.value;

rangeElement.addEventListener('input', e => {
  formRangeValue.textContent = e.target.value;
});
