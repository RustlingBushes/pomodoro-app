import './src/sass/style.scss';

const setBtn = document.querySelector('.header__btn-settings');
const popupElement = document.querySelector('.popup');

setBtn.addEventListener('click', () => {
	if (popupElement.classList.contains('popup-active')) {
		popupElement.classList.remove('popup-active');
	} else {
		popupElement.classList.add('popup-active');
	}
});
