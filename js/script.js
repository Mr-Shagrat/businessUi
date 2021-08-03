'use strict'
const iconMenu = document.querySelector('.menu-header__icon');

if (iconMenu) {
  const menuBody = document.querySelector('.menu-header__menu');

  iconMenu.addEventListener("click", function (e) {

    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');

  });
}
//Задаем фон блоку из картинки
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


const tabsLink = document.querySelectorAll('.tabs__item')
const tabsBlock = document.querySelectorAll('.tabs__block')


for (let i = 0; i < tabsLink.length; i++) {

  tabsLink[i].addEventListener('click', (e) => {
    e.preventDefault();

    const activeTabLink = document.querySelector('.tabs__item.active')
    const activeTabBlock = document.querySelector('.tabs__block.active')
    const tabsId = e.target.getAttribute('href').replace('#', '')

    activeTabLink.classList.remove('active')
    activeTabBlock.classList.remove('active')
    tabsLink[i].classList.add('active')


    document.querySelector(`#${tabsId}`).classList.add('active')
  })
}

const readMore = document.querySelectorAll('.column__link')

for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener('click', (e) => {
    e.preventDefault();

    const descriptionElement = e.target.previousElementSibling

    e.target.text.length > 4 ? e.target.text = 'hide' : e.target.text = 'read more'
    descriptionElement.classList.toggle('active')
  })
}
