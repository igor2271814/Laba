// Обработчик для setting_

document.querySelector('.setting_menu').addEventListener('click', () => {
    const setting_menuOpen = document.querySelector('.setting_menu_open');
    const setting_closeMenu = document.querySelector('.setting_close_menu');
    const setting_darkening = document.querySelector('.darkening');

    setting_menuOpen.classList.add('setting_active');
    setting_closeMenu.classList.add('setting_active');
    setting_darkening.classList.add('setting_active');
});

document.querySelector('.setting_close_menu').addEventListener('click', () => {
    const setting_menuOpen = document.querySelector('.setting_menu_open');
    const setting_closeMenu = document.querySelector('.setting_close_menu');
    const setting_darkening = document.querySelector('.darkening');

    setting_closeMenu.classList.remove('setting_active');
    setTimeout(() => {
      setting_menuOpen.classList.remove('setting_active');
      setting_darkening.classList.remove('setting_active');
    }, 70);
});

// Обработчик для кнопки "close button"
document.querySelector('.setting_close_menu').addEventListener('click', () => {
    const setting_menuOpen = document.querySelector('.setting_menu_open');
    setting_menuOpen.classList.remove('setting_active');
});
// Обработчик для setting_
let header = document.getElementById('header').classList
let active_class = 'header_scrolled'
window.addEventListener('scroll', e => {
    if(scrollY > 50) header.add(active_class)
    else header.remove(active_class)
})
const btn = document.querySelector(".toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "Style/CSS/style.css") {
    theme.href = "Style/CSS/dark_style.css";
  } else {
    theme.href = "Style/CSS/style.css";
  }
});