document.querySelector('.menu').addEventListener('click', () => {
    const menuOpen = document.querySelector('.menu_open');
    const closeMenu = document.querySelector('.close_menu');

    menuOpen.classList.add('active');
    closeMenu.classList.add('active');
});

document.querySelector('.close_menu').addEventListener('click', () => {
    const menuOpen = document.querySelector('.menu_open');
    const closeMenu = document.querySelector('.close_menu');

    closeMenu.classList.remove('active');

    setTimeout(() => {
        menuOpen.classList.remove('active');
    }, 70);
});

// Обработчик для кнопки "close button"
document.querySelector('.close_menu').addEventListener('click', () => {
    const menuOpen = document.querySelector('.menu_open');
    menuOpen.classList.remove('active');
});

let header = document.getElementById('header').classList
let active_class = 'header_scrolled'
window.addEventListener('scroll', e => {
    if(scrollY > 50) header.add(active_class)
    else header.remove(active_class)
})

// Темная тема
const btn = document.querySelector(".toggle");
const theme = document.querySelector("#theme-link");
//Проверка времени для автосмены темы
let nowDate = new Date();
console.log(nowDate.getHours());
let currentDate = nowDate.getHours();

if (currentDate >= 18 || currentDate < 6) {
  theme.href = "Style/CSS/dark_style.css";
}
//Проверка времени для автосмены темы
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "Style/CSS/style.css") {
    theme.href = "Style/CSS/dark_style.css";
  } else {
    theme.href = "Style/CSS/style.css";
  }
});