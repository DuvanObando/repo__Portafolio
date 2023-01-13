const iconMenu = document.querySelector('.icon__menu')
const menu = document.querySelector('.menu')

function closeMenu() {
    menu.classList.toggle('menu__show')
}

iconMenu.addEventListener('click', closeMenu)

const contentMenu = document.querySelectorAll('#content__menu li')

for (const li of contentMenu) {
    li.addEventListener('click', closeMenu)
}