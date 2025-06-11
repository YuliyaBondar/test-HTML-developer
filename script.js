//Range slider
const rangeElement = document.querySelector('.form-range__input');
const formRangeValue = document.querySelector('.form-range__value');

formRangeValue.textContent = rangeElement.value;

rangeElement.addEventListener('input', e => {
  formRangeValue.textContent = e.target.value;
});


//Burger menu
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.burger-overlay');
const navigationUlItems = document.querySelectorAll('.navigation__ul-item');

burger.addEventListener('click', adaptiveMenu);
overlay.addEventListener('click', adaptiveMenu);

navigationUlItems.forEach((item) => {
  item.addEventListener('click', () => {
    navigationUlItems.forEach((element) => {
      if (element !== this) {
        element.classList.remove('current');
      }
    });
    item.classList.add('current');

    adaptiveMenu();
  });
});

function adaptiveMenu() {
  burger.classList.toggle('active');
  navigation.classList.toggle('adaptive');
  if (window.innerWidth <= 768) {
    overlay.classList.toggle('active');
  }
}
