document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu_open').classList.add('active');
    document.querySelector('.close_menu').classList.add('active');
});
document.querySelector('.close_menu').addEventListener('click', () => {
    document.querySelector('.menu_open').classList.remove('active');
    document.querySelector('.close_menu').classList.remove('active');
});
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