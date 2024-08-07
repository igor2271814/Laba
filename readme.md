<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bowlby+One&size=60&pause=1000&random=false&width=1300&height=90&lines=Welcom+to+laboratory+work+on+VvIT!" alt="Typing SVG" /></a>

На этой странице будут выкладываться лабораторные работы по дисциплине ВвИТ
Основная страница с дизайном для текущих работ: <a href="https://www.figma.com/file/dJriDptlswrqLomE1t1veN/Nikol_Laba1?type=design&node-id=2%3A39&mode=design&t=GBNXklVeO8bGJHRE-1">Дизайн</a>

На текущий момент основная версия 0.5. Выполнены все задачи для лабораторной работы. Есть некоторые проблемы с отображением tile_group и темной темой, все остальное работает надежно как швейцарские часы. Мобильной версии пока нет. Посмотреть, как все это выглядит можно <a href="https://igor2271814.github.io/Laba/">тут</a>

# Навигация
*  <a href="#task">Задачи лабораторной работы</a>
*  <a href="#pre_wa">Предпросмотр</a>
*  <a href="#strukt">Структура сайта</a>
*  <a href="#discr">Подробное описание</a>
    *  <a href="#head">Head</a>
    *  <a href="#menu">Menu</a>
    *  <a href="#tile_group">Tile group</a>
    *  <a href="#uper">Uper</a>
    *  <a href="#support">Support</a>
    *  <a herf="#wrapper">Wrapper</a>
    *  <a href="#footer">Footer</a>
*  <a href="#fin_task">Выполненные задачи</a> 

<h1 id="task">Задачи лабораторной работы:</h1>

<ol>
  <li>С помощью тэгов table и/или div необходимо создать базовую структуру проекта главной страницы сайта. Структура может иметь любой вид. размещение блоков не регламентируется, кроме хедера, который в любом случае необходимо разместить вверху страницы, с разделением на логотип и наименование проекта.</li>
  <li>Необходимо создать корректные css-файлы, минимум два файла. Корректно их подключить к странице вашего проекта. Проверить работоспособность двумя способами:

А) Путем присваивания параметра фона "телу" сайта;

Б) Путем присваивания класса с параметром фона "хедеру";</li>

  <li>Необходимо создать структуру меню, минимум из четырех элементов. Название разделов необходимо закрепить ссылками, для первой лабораторной работы необходимо "зациклить" ссылки. Кроме того, убрать подчеркивание.</li>
  <li>Заполнить контейнеры стандартными текстами вида - кнопка 1, 2, 3 и 4. Текстовые блоки, вида - Ipsum Lorem. Настроить выравнивание текста по вертикали/горизонтали, в Хедере - с помощью параметров HTML, а в остальных контейнерах через css.</li>
  <li>Заполнить главную страницу проекта контентом (2-3 блока текста, 2-3 изображения.
Настроить выравнивание, исходя из стилистики проекта.</li>
  <li>Применить эффект снижения яркости изображения при наведении, с помощью технологии изменения прозрачности, на 20 %.
Применить шрифты из открытых источников в проекте.
Заполнить футер. Добавить мини карту (350x350 px).</li>
  <li>Используя id создать псевдо ссылки на ключевые словосочетания в текстовом блоке основного окна. Ключевые моменты выделить с помощью псевдоклассов “before” и “after”, используя символ “<<” и “>>”.</li>
  <li>С помощью “iframe” создать в основном окне страницы вкладку с “картой” сайта.</li>
   <li>В одном из созданных блоков использовать линейный градиент в качестве фона, состоящий из двух цветов в формате rgb.</li>
   <li>Создать форму обратной связи.</li>
   <li>Создать галерею из 4-6 изображений с эффектами на основе псевдокласса "hover".</li>
   <li>Создать текстовый файл и настроить возможность скачивания со страницы.</li>
   <li>Создать дополнительную страницу, к основному проекту. Верстка должна быть выполнена на основе flex-контейнеров</li>
   <li>Создать "кнопки", слева от основного окна текущей страницы. придать закругленную форму (степень закругления не менее 5px). Использовать border, не менее 1px. Придать кнопкам фон, используя изображение (однотонный, фактурный узор). Применить эффект изменения яркости кнопки, без изменения яркости текста. Расположение кнопок - вертикальное с расстоянием равным между кнопками, но вдвое меньшим от верхнего и нижнего краев</li>
   <li>В основном окне создать не менее 4 контейнеров с контентом (изображение и текст). Расположение элементов свободное. Привязать фон каждой кнопки к фону соответствующего ей контейнера (пара - кнопка + контейнер). Применить к контейнерам тень, со степенью распространения не менее 5px. Расположение контейнеров - горизонтальное, с равным расстоянием между ними</li>
   <li>Создать контейнеры, без контента, но с применением разных фонов. Размер 200х200px. Размещение блока контейнеров - ниже элементов предыдущего задания. Размещение контейнеров внутри блока - по диагонали</li>
  <li>Создать Grid-контейнеры, с сеткой 4х3, используя в качестве размеров строк и столбцов, следующие элементы: fr, абсолютные величины и проценты. В итоге должны получиться три вида «сеток».

Задание 2.1.

Первая «сетка» должна быть выполнена с помощью функции repeat.

Задание 2.2.

Во второй «сетке» необходимо использовать функцию min-max.

Задание 2.3.

В третьей «сетке» необходимо разделить контейнеры с помощью «названия линий».

Использование горизонтального или вертикального размещения – по выбору.</li>
   <li>Написать пример «сетки», в которой элементы автоматически размесятся по ячейкам.</li>
   <li>Разместить элементы контента в первой «сетке» - во втором столбце, второй строке.

   Во второй «сетке» - в четвертой строке, третьем столбце.

   В третьей «сетке» - в первом столбце, первой строке.</li>
   <li>Подготовить концепцию проекта и оформить в виде JPG-изображения. (Отдельный пункт! Лабораторная работа должна быть выполнена в виде архива с файлами html, css и т.д. Архив принимается в формате rar/zip).</li>
</ol>

<h1 id="pre_wa">Предпросмотр</h1>
<img src="Img/pre_wa.gif">

<h1 id="strukt">Структура сайта:</h1>

Структура сайта будет состоять из:
*  header
*  menu
*  tile_group
*  uper
*  support
*  button
*  support
*  button
*  wrapper
*  footer

*     <div class="header">

      </div>
      <div class="menu" >
        
      </div>
      <div class="tile_group">
      
      </div>
      <div class="uper">
      
      </div>
      <div class="support">
      
      </div>
      <div class="button">
      
      </div>
      <div class="support">
      
      </div>
      <div class="button">
      
      </div>
      <div class="wrapper">

      </div>
      <div class="footer">
      
      </div>
  
<h1 id="discr">Подробное описание</h1>

- <h2 id="header">header</h2>
  голова сайта. Она же шапка. Нужна для удобно навигации по сайту для поиска настроек конкретного типа интернет подключения для конкретных производителей роутеров (пока находится на стадии разработки). Для удобства размещения контента внутри этого класса я решил сделать его grid элементом. Благодаря этому свойству можно разделить весь контейнер на условные ячейки (как в Exele. Увидеть это можно если зайдя на сайт открыть меню разработчика и нажать на нужный grid элемент) и управляя этими ячейками гибко настраивать контент. Структура header очень проста и в html не занимает много места:
*             <div class="router-1"><a href="">TP LINK</a></div>
        	<div class="router-2"><a href="">D-LINK</a></div>
        	<div class="router-3"><a href="">KEENETIC</a></div>
        	<div class="router-4"><a href="">MIKROTIK</a></div>
        	<div class="router-5">We will help you set up your router!</div>
    Нам нужно, чтобы панель была фиксированная (но с какой-нибудь прикольной анимацией), потому воспользуемся js. Нужно, что при скроле сайта на n пикселей начиналась анимация. Добавим в класс head id="head", это нужно, чтобы скрипт нашел этот объект и начал с ним взаимодействовать. Далее добавим класс "header_scrolled" для добавления анимации и фиксацию с помощью scrollY (скрол странички по оси Y) сделаем активацию нового класса при скроле на 50 пикселей и получим:
    JS
  -     let header = document.getElementById('header').classList
        	let active_class = 'header_scrolled'
        	window.addEventListener('scroll', e => {
        	    if(scrollY > 50) header.add(active_class)
        	    else header.remove(active_class)
        	})
    CSS
  -     .header_scrolled {
        	position: fixed;
        	animation-name: fadeInUp;
        	animation-duration: 0.7s;
        	}
    HTML
  -     <div id="header" class="header" name="header" align="center"><!--header выравнивание в html-->
        	    <div class="router-1"><a href="">TP LINK</a></div>
        	    <div class="router-2"><a href="">D-LINK</a></div>
        	    <div class="router-3"><a href="">KEENETIC</a></div>
        	    <div class="router-4"><a href="">MIKROTIK</a></div>
        	    <div class="router-5">We will help you set up your router!</div>
        	</div><!--header-->
    Далее уже только внешнее оформление кнопки:
  -     .header {
    margin-bottom: 1vh;
    transition: 0.7s;
    display: grid;
    background-color: #555;
    width: 100%;
    height: 5vh;
    color: #FFF;
    grid-template-columns: 14vh 12vh 14vh 14vh auto;
    gap: 8vh;
    font-size: 2vh;
    align-items: center;
    }
    .header a {
    text-decoration: none;
    color: #FFF;
    text-shadow: 0.8vh -0.7vh 0.2vh rgba(0, 0, 0, 0.25);
    }
    .header a:hover {
    font-size: 3vh;
    transition: all, 0.4s;
    border-bottom: #fda500 solid;
    }
- <h2 id="menu">menu</h2>
  это кнопка, нарисованная на html и css. Для оформления внешнего вида кнопки я так-же использовал display: grid ибо так гораздо проще рисовать подобные объекты. Внутри класса menu есть несколько подклассов. Например: class="menu_open". По умолчанию этот класс пользователь не видит т.к. находится в отрицательной системе координат right: -25%. Процесс открытия этого блока работает очень просто. При помощи js добавляем menu событие "click". В css файле прописываем новый класс menu_open.active со свойствами:
*       right: 0;
        transition: right 0.7s;
    А по событию щелчка в класс menu добавляется класс active, а при нажатии на кнопку закрытия удаляет этот класс. Настроим классы menu_open, close_menu и добавим им эти события + интервал задержки для close_menu:
  -     document.querySelector('.menu').addEventListener('click', () => {
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
    И отдельно добавим обработчик событий для снопки закрытия:
  -       document.querySelector('.close_menu').addEventListener('click', () => {
          const menuOpen = document.querySelector('.menu_open');
          menuOpen.classList.remove('active');
          });
    Далее остаётся только настройка внешнего вида кнопок и самого меню
    Т.к. это grid элемент то и оформлять будем следующим образом:
  -     <div class="box-4"></div>
        <div class="box-1"><span></span></div>
        <div class="box-2"><span></span></div>
        <div class="box-3"><span></span></div>
        <div class="box-4"></div>
    Пустые box нужны для отступов ибо grid делит весь объект на равные ячейки, потому для центрирования именно полос я решил добавить по одному "отступу" сверху и снизу. Внутри span рисуются полоски для дизайна кнопки, а для оформления закруглений у кнопки использовался border-radius. CSS код будет выглядеть следующим образом:
  -     [class^="box-"] {
        display: grid;
        place-items: center;
        height: 1vh;
        cursor: pointer;
        }
        .menu span {
        width: 8vh;
        height: 1.3vh;
        background-color: #434343;
        border-radius: 1vh;
        }
        .menu {
        transition: 0.7s;
        display: grid;
        position: fixed;
        z-index: 10;
        right: 2vh;
        top: 5.5vh;
        justify-items: end;
        justify-content: center;
        border-radius: 1vh 1vh 1vh 3vh;
        background: #fcd041;
        background-blend-mode: color-burn;
        box-shadow: 0.7vh 0.7vh 0.19vh 0vh rgba(0, 0, 0, 0.25);
        width: 11vh;
        height: 11vh;
        gap: 0.2vh;
        }
    Для размера везде использовалась единица измерения либо vh либо % для создания адаптивности сайта. После оформления самой кнопки можно приступить к контенту, который прячется за кнопкой. Будем использовать grid для установки кнопок и прочего на свои места. Начнем с разметки на html
  -     <div class="menu_open">
        <button class="close_menu">close button</button>
        <div class="ladder-1"><a href="">Home</a></div>
        <div class="ladder-2"><a href="">News</a></div>
        <div class="ladder-3"><a href="">Contact</a></div>
        <div class="ladder-4"><a href="">About us</a></div>
        <div class="ladder-5"><a href="">/a></div>
        <div class="ladder-6"></div>
        <div class="ladder-7"></div>
        <div class="ladder-8"></div>
        <div class="ladder-9"></div>
        <div class="ladder-10"></div>
        </div>
    Как и с header будем использовать пустые контейнеры для расстановки кнопок и их выравнивания. + т.к. в задании нужно добавить несколько различных листов CSS сделаем переход на темную тему сайта (да и глаза так будут уставать меньше). Оформление в CSS будет выгляеть так:
  -     .menu_open {
        display: grid;
        justify-content: center;
        position: fixed;
        transform: translateX(100vh);
        width: 25%;
        height: 96vh;
        background-color: rgba(0, 0, 0, 0.95);
        color: aliceblue;
        transition: right 0.7s 0.7s;
        border-radius: 3vh 0 0 3vh;
      }
      
      .menu_open {
        transform: translateX(100vh);
        transition: transform 0.7s ease-in-out;
      }
      .menu_open span {
        margin-top: 2vh;
        text-align: right;
        font-size: 3vh;
        width: 120%;
        cursor: pointer;
        transition: 0.4s;
      }
      .menu_open span:hover {
        color: #ebb400;
        transition: 0.4s;
      }
      .menu_open a {
        color: #000;
        text-decoration: none;
        text-align: center;
        padding: 1vh 1vh 1vh 1vh;
        background-color: #ffedd1;
        border-radius: 2vh;
        box-shadow: inset 0.3vh 0.7vh 0.26vh 0pvh rgba(255, 252, 252, 0.25);
        width: 35vh;
        transition: 0.7s;
      }
      .menu_open a::before {
        content: "<<";
        color: rgb(0, 0, 0);
      }
      .menu_open a:hover::after {
        content: ">>";
        color: rgb(0, 0, 0);
      }
      .menu_open a:hover {
        transition: 0.7s;
        box-shadow: inset 0 -7vh 0 rgb(240, 204, 3), 0.3vh 0.7vh 0.26vh 0vh rgba(255, 252, 252, 0.25);
      }
      
      .menu_open.active {
        transform: translateX(0);
      }
      .menu_open.active span {
        margin-top: 2vh;
        text-align: right;
        font-size: 3vh;
        width: 120%;
        cursor: pointer;
        transition: 0.4s;
      }
      .menu_open.active span:hover {
        color: #ebb400;
        transition: 0.4s;
      }
      .menu_open.active a {
        color: #000;
        text-decoration: none;
        text-align: center;
        padding: 1vh 1vh 1vh 1vh;
        background-color: #ffedd1;
        border-radius: 2vh;
        box-shadow: inset 0.3vh 0.7vh 0.26vh 0pvh rgba(255, 252, 252, 0.25);
        width: 35vh;
        transition: 0.7s;
      }
      .menu_open.active a::before {
        content: "<<";
        color: rgb(0, 0, 0);
      }
      .menu_open.active a:hover::after {
        content: ">>";
        color: rgb(0, 0, 0);
      }
      .menu_open.active a:hover {
        transition: 0.7s;
        box-shadow: inset 0 -7vh 0 rgb(240, 204, 3), 0.3vh 0.7vh 0.26vh 0vh rgba(255, 252, 252, 0.25);
      }
      
      [class^=ladder-] {
        display: grid;
        place-items: center;
        width: 30vh;
        font-size: 3vh;
      }
      
      .close_menu {
        transform: scale(0);
        transition: transform 0.7s ease-in-out;
      }
      
      .close_menu.active {
        transform: scale(1);
      }
    Для перехода на темную тему в ladder-5 добавим id="toggle" и зацикленную ссылку
  -     <div class="ladder-5"><a class="toggle" href="#">Another theme</a></div>
    Далее создаем новый css файл с названием dark_style.css но пока туда ничего не добавляем. В ссылку на обычный лист классов добавляем id="theme-link" (это нужно будет для связи через js). А далее достаточно простой код на js. Добавляем событие клика на нужную кнопку и условие. Если ссылка текущий лист классов - обычный лист то меняем на лист с темной темой. Иначе делаем наоборот:
  -     const btn = document.querySelector(".toggle");
        const theme = document.querySelector("#theme-link");
        btn.addEventListener("click", function() {
          if (theme.getAttribute("href") == "Style/CSS/style.css") {
            theme.href = "Style/CSS/dark_style.css";
          } else {
            theme.href = "Style/CSS/style.css";
          }
        });
    Готово! Если при нажатии на эту ссылку у Вас сбросились все классы, то кнопка работает (т.к. в лист с темной темой мы ничего не добавляли, то и оформления тоже нет), а заполнять все эти классы рекомендуется только после завершения работы с основным листом ибо иначе работа увеличится в два раза.
- <h2 id="tile_group">tile_group</h2>
  группа плиток. В задании указано, что нужно сделать блоки с текстом, картинками, числами потому постараемся разместить контент с основным описанием услуг сайта. И сделаем так, чтобы все помещалось без скрола при первом переходе на стартовую страничку сайта. И да, опять grid ведь он ученб удобный и гибко настраиваемый.
  Разметка на HTML:
-     <div class="tile_group"><!--tile group-->
      	<div class="tile-1" id="anchor"></div>
      	<div class="tile-2">
      		<div class="tile_little-1">1</div>
      		<div class="tile_little-2">2</div>
      		<div class="tile_little-3">3</div>
      		<div class="tile_little-4">4</div>
      	</div>
      	<div class="tile-3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      	aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      	aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      	occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      	<div class="tile-4"></div>
      	<div class="tile-5"><p>It is on this site that you will find instructions for configuring any routers. From absolutely all brands. Starting
      	with the simplest and cheapest tp link and ending with the complex mikrotik routerboard. We will get into the
      	configuration of all these types of equipment, configure both DHCP, PPPoE, and PPTP, and raise our VPN tunnel</p></div>
      </div><!--tile group-->
  Т.к. Внутри этой группы плиток у нас будет еще одна группа плиток. tile-2 разделим еще на 4 tile_little. Для корректного отображения блоков с информацией используем grid свойство grid-template-areas. С его помощью можно делать визуально понятную расстановку дочерних grid элементов. Каждому из tile присваиваем grid-area и расставляем следующим образом:
-     	grid-template-areas:
        "A A A C C C E E E E E"
        "A A A C C C E E E E E"
        "A A A C C C E E E E E"
      
        "B B B D D D E E E E E"
        "B B B D D D E E E E E"
        "B B B D D D E E E E E";
  И тоже самое делаем с tile-2:

-     .tile-2 {
        grid-area: B;
        grid-template-areas:
        "A B"
        "C D";
      }
      .tile_little-1{
        grid-area: A;
      }
      .tile_little-2{
        grid-area: B;
      }
      .tile_little-3{
        grid-area: C;
      }
      .tile_little-4{
        grid-area: D;
      }
  А далее наполняем плитки контентом и получим:
-     .tile-1 {
        grid-area: A;
        background: url(../../Img/tp_link.png) center;
        background-size: cover;
        width: 45vh;
        height: 45vh;
        background-color: rgb(45, 43, 43);
        box-shadow: 1vh 1.5vh 0.4vh 0vh rgba(0, 0, 0, 0.25);
      }
      .tile-2 {
        grid-area: B;
        width: 45vh;
        height: 45vh;
        gap: 1vh;
        grid-template-areas:
        "A B"
        "C D";
      }
      .tile_little-1{
        grid-area: A;
      }
      .tile_little-2{
        grid-area: B;
      }
      .tile_little-3{
        grid-area: C;
      }
      .tile_little-4{
        grid-area: D;
      }
      [class^="tile_little-"] {
        font-size: 8vh;
        display: grid;
        border-radius: 9vh;
        color: #FFF;
        text-align: center;
        place-items: center;
        box-shadow: 1vh 1.5vh 0.4vh 0vh rgba(0, 0, 0, 0.25);
        background: rgb(45,43,43);
        background: linear-gradient(180deg, rgba(45,43,43,1) 0%, rgba(45,43,43,1) 34%, rgba(168,151,116,0.95) 57%, rgba(226,199,146,0.95) 77%, rgba(255,237,209,1) 100%);
      }
      .tile-3 {
        grid-area: C;
        font-size: 1.8vh;
        width: 45vh;
        height: 45vh;
        background-color: rgb(45, 43, 43);
        box-shadow: 11px 15px 4px 0px rgba(0, 0, 0, 0.25);
      }
      .tile-4 {
        grid-area: D;
        width: 45vh;
        height: 45vh;
        background: url(../../Img/mikrotik.png) center;
        background-size: cover;
        background-color: rgb(45, 43, 43);
        box-shadow: 11px 15px 4px 0px rgba(0, 0, 0, 0.25);
      }
      .tile-5 {
        grid-area: E;
        width: 60vh;
        font-size: 3.6vh;
        background-color: rgb(45, 43, 43);
        box-shadow: 1vh 1.5vh 0.4vh 0vh rgba(0, 0, 0, 0.25);
      }
      [class^="tile-"] {
        display: grid;
        border-radius: 7vh;
        color: #FFF;
        text-align: justify;
      }
- <h2 id="uper">uper</h2>
  Для удобства навигации по сайту добавим функцию "якоря". Она нужна для быстрого перемещая из одной точки сайта в другую. Для этого в tile-1 был добавлен id
-     <div class="tile-1" id="anchor"></div>
  "Якорь" сделаем в виде стрелки. Саму стрелку сделаем при помощи контура (border) и разворота блока. Создадим разметку на html:
-     <div class="uper"><!--uper-->
          <a href="#anchor">Aaad</a>
      </div><!--uper-->
  Ссылка будет находиться внутри тега <a>, а текст мы сделаем полностью прозразчным. Там образом стрелка будет кликабельна
-     .uper {
        right: 0vh;
        bottom: 2vh;
        position: fixed;
        width: 6vh;
        height: 6vh;
        border-top: 10px solid #2d2c2e;
        border-right: 10px solid #2d2c2e;
        margin-right: 60px;
        transform: rotate(-45deg);
      }
      .uper a {
        color: rgba(0, 0, 0, 0);
      }
- <h2 id="support">support</h2>
  два блока с разницей в тексте и картинке. Этот класс будем формировать с помощью списков ul. Отделим кнопку от основного блока с информацией. Начнем с разметки сайта на html:
-     <div class="support"><!--support box-1-->
          <ul>
              <li>
                  <h1>We are a team</h1>
                  <p>Our friendly technical support team is always ready to help you with equipment setup both remotely and on-site! You can
                  always contact by number +7 999 999 99 99 We work 24/7 You can ask a question on our discord channel</p>
              </li>
              <li><img src="Img/support.png" alt=""></li>
          </ul>
      </div>
      <div class="button">
          <ul>
              <a href="#">
                  <li>
                      <p>DISCORD HERE</p>
                  </li>
              </a>
      </div><!--support box-1-->
  Для разделения у тега <li> будем использовать display: inline-block. Чтобы каждый из <li>блоков был выстроен в одну линию, сделаем центрирование при помощи margin, вертикальное центрирование с помощью vertical-align, а размер картинки будем растягивать на размер блока с помощью object-position: bottom, object-fit: cover и получим:
-     .support {
        margin-left: 1%;
        margin-right: 4%;
        margin-top: 15vh;
      }
      .support li {
        vertical-align: text-top;
        margin-right: 4%;
        list-style-type: none;
        display: inline-block;
        width: 45%;
      }
      .support h1 {
        margin-top: 0;
        color: #000000;
        font-size: 40px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.15px;
      }
      .support p {
        color: #000000;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
      }
      .support img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: bottom;
           object-position: bottom;
      }
  Кнопку сделаем через тег <a>. Пропишем display: inline-block, растянем на ширину блока с текстом (обязательно везде задавать размеры через vh или %, иначе сайт не будет адаптироваться под размер экрана пользователя) и добавим анимации:
  HTML
-     <div class="button">
          <ul>
              <a href="#">
                  <li>
                      <p>DISCORD HERE</p>
                  </li>
              </a>
      </div><!--support box-1-->
  CSS
-     .button {
        margin-left: 1%;
      }
      .button li {
        margin-left: 0.7%;
        margin-right: 0.7%;
        display: flex;
        list-style-type: none;
        display: inline-block;
        width: 43.5%;
        background-color: #ebb400;
        outline-offset: 8px;
        outline: 0.5vh solid  #ebb400;
        box-shadow: inset 0 0px 0 #ffffff;
        transition: 1s;
        align-items: center;
        border-radius: 3vh;
      }
      .button li:hover {
      	box-shadow: inset 0 -13vh 0 #000000, 0.2vh 0.2vh 0.3vh rgba(0, 0, 0, 0.3);
        outline: 2px solid  #000000;
      	color: #ffffff;
      	transition: 1s;
      }
      .button p {
        color: #FFF;
        margin: 2% auto 2% auto;
        text-align: center;
        font-size: 6vh;
        font-style: normal;
      }
  Второй блок кода делам по аналогии за исключением картинки. Вместо неё будет iframe с картами из Яндекса. Копируем и вставляем разметку, удаляем тег img и ставим вместо него предварительно сгенерированную карту Яндекс, далее меняем текст и готово
*  <h2 id="wrapper">wrapper</h2>
    Далее идет блок с формой обратной связи. Его сделает через grid. Все элементы расположим следующим образом:
*      grid-template-areas:
       "A A A A"
       "B C C C"
       "D C C C";
   Участок A - отведен для заголовка, B - текст между формой и заголовком, D - сама форма и C - общая картинка. Теперь можно приступить к настройке Формы. Добавим поля с: ФИО, номер телефона, адрес почты и само сообщение посетителя сайта. Разметка будет выглядеть так:
*        <form action="" class="block-3">
            <div class="inp-1"><input type="text" placeholder="Full name" required></input></div>
            <div class="inp-2"><input type="number" placeholder="Phone number" required></input></div>
            <div class="inp-3"><input type="email" placeholder="Email" required></input></div>
            <div class="inp-4"><textarea type="text" placeholder="Message"></textarea></div>
            <div class="inp-5"><button type="submit">Send</button></div>
        </form>
    Далее дело только за визуальным наполнением:
*      /*forms start*/
      .wrapper {
        width: 100%;
        height: 100%;
        margin-bottom: 0;
        background: rgb(45, 43, 43);
        background: linear-gradient(
          0deg,
          rgba(45, 43, 43, 1) 0%,
          rgba(45, 43, 43, 1) 34%,
          rgba(168, 151, 116, 0.95) 57%,
          rgba(226, 199, 146, 0.95) 77%,
          rgba(255, 237, 209, 1) 100%
        );
      }
      .forms {
        display: grid;
        gap: 2vh;
        margin: 5vh 3vh 0vh 3vh;
        grid-template-areas:
          "A A A A"
          "B C C C"
          "D C C C";
      
        & h1 {
          width: 45%;
        }
      }
      .block-1 {
        display: grid;
        grid-area: A;
        height: 20vh;
        border-radius: 2vh;
        background: #ffe9c6;
        box-shadow: 1.5vh -1.5vh 0.4vh 0vh rgba(0, 0, 0, 0.25);
      }
      .block-2 {
        display: grid;
        grid-area: B;
        align-items: center;
      }
      .block-3 {
        display: grid;
        grid-area: D;
        border-radius: 3vh;
        gap: 1.5vh;
        background: linear-gradient(180deg, #ffe5a3 0.07%, rgba(144, 101, 34, 0.5) 50.81%, rgba(45, 43, 43, 0) 135.38%);
        padding: 3vh 3vh 3vh 3vh;
        box-shadow: -1vh 0.9vh 0.2vh 0vh rgba(0, 0, 0, 0.25) inset;
        grid-template-areas:
          "A A"
          "B C"
          "D D"
          "E E";
      
        & input {
          border: 1px solid #000;
          background: #fff0d8;
          box-shadow: 0.3vh 0.5vh 0.4vh 0px rgba(0, 0, 0, 0.25) inset;
          border-radius: 1vh;
        }
        & textarea {
          border: 1px solid #000;
          background: #fff0d8;
          box-shadow: 0.3vh 0.5vh 0.4vh 0px rgba(0, 0, 0, 0.25) inset;
          border-radius: 1vh;
        }
      }
      .block-4 {
        grid-area: C;
        display: grid;
        backdrop-filter: blur(20px);
        border-radius: 3vh;
      
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom;
        }
      }
      .inp-1 {
        grid-area: A;
        height: 70%;
        gap: 10px;
      }
      .inp-2 {
        grid-area: B;
        height: 70%;
      }
      .inp-3 {
        grid-area: C;
        height: 70%;
      }
      .inp-4 {
        grid-area: D;
        height: 20vh;
      }
      .inp-5 {
        grid-area: E;
      
        & button {
          background-color: #ebb400;
          box-shadow: inset 0 0px 0 rgb(243, 191, 48);
          transition: 1s;
          font-family: Bowlby One;
          font-size: 3vh;
      
          &:hover {
            box-shadow:
              inset 0 -13vh 0 #000000,
              2px 2px 3px rgba(0, 0, 0, 0.3);
            outline: 2px solid #000000;
            color: #ffffff;
            transition: 1s;
          }
        }
      }
      [class^="block-"] {
        display: grid;
      }
      [class^="inp-"] {
        display: grid;
      }
      /*forms end*/
*  <h2 id="footer">footer</h2>
    подвал сайта. В нем будет справочная информация + iframe (т.к. это есть в задании). Этот блок мы разделим на 3
  *   Разметка под три точки. Класс так и назовем for_dot. В html разметке сделаем конструкцию ul, в которую поместим три li, а в них загруженные из фигмы точки в формате svg
*      <div class="for_dot">
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                    </svg>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                    </svg>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                    </svg>
                </li>
            </ul>
        </div>

CSS
*      .for_dot {
      margin-right: 6%;
      text-align: center;
      }
  *  map_site - это место под iframe. В нем не будет ничего необычного. Только ширину, отступ по левому края для центрирования и в самом фрейме зададим ему закругление рамок + спрячем скрол бар по оси x:
      HTML
  *      <div class="map_site">
            <iframe src="index.html"></iframe>
        </div>
     CSS
  *      .map_site {
          width: 80%;
          margin-left: 16vh;
        }
        .map_site iframe {
          width: 100%;
          border-radius: 2vh;
          overflow-x: hidden;
        }
  *  И последний элемент - bottom_panel. Нужен для разметки финальных ссылок на куки и прочее. Сама разметка будет выглядеть так:
    *      <div class="bottom_panel">
              <ul>
                  <li>
                      <a href="#">terms of use</a>
                  </li>
                  <li>
                      <a href="#">privacy policy</a>
                  </li>
                  <li>
                      <a href="#">cookie settings</a>
                  </li>
              </ul>
          </div>
    И настраиваем внешний вид ссылок:
  *      .bottom_panel {
          text-align: center;
          padding-bottom: 0.5%;
        }
        
        .bottom_panel a {
          text-decoration: none;
          color: #E8E9E9;
          font-size: 3vh;
          transition: 0.7s;
        }
        
        .bottom_panel a:hover {
          color: #000000;
          transition: 0.7s;
        }
        
        .bottom_panel li {
          display: inline;
          padding-right: 5%;
        }
        
        .bottom_panel ul {
          margin-top: 0;
          padding-top: 0;


<h1 id="fin_task">Выполненные задачи</h1>
1. Базовая структура сайта создана с помощью div элементов (некоторые из них - grid по сути таблицы)
*     <div class="header">

      </div>
      <div class="menu" >
        
      </div>
      <div class="tile_group">
      
      </div>
      <div class="uper">
      
      </div>
      <div class="support">
      
      </div>
      <div class="button">
      
      </div>
      <div class="support">
      
      </div>
      <div class="button">
      
      </div>
      <div class="footer">
      
      </div>
  Хедер находится вверху страницы и зафиксирован:
  *     .header_scrolled {
        position: fixed;
        animation-name: fadeInUp;
        animation-duration: 0.7s;
        }
  2. Для работы сайта создано 2 CSS файла со светлой и темной темой, они находятся в папке Style/CSS/. Фон для тела и хедера:
  *     body {
        background: rgba(255, 237, 209, 0.89);
        font-family: "Bowlby One";
        margin: 0;
        transition: 0.7s;
        }
        .header {
        margin-bottom: 1vh;
        transition: 0.7s;
        display: grid;
        background-color: #555;
        width: 100%;
        height: 5vh;
        color: #FFF;
        grid-template-columns: 14vh 12vh 14vh 14vh auto;
        gap: 8vh;
        font-size: 2vh;
        align-items: center;
        }
3. Было создано меню (menu) с 5 ссылками без подчеркиваний. Все ссылки зациклены:
  *     <div class="menu_open">
          <button class="close_menu">close button</button>
          <div class="ladder-1"><a href="#">Home</a></div>
          <div class="ladder-2"><a href="#">News</a></div>
          <div class="ladder-3"><a href="#">Contact</a></div>
          <div class="ladder-4"><a href="#">About us</a></div>
          <div class="ladder-5"><a class="toggle" href="#">Another theme</a></div>
          <div class="ladder-6"></div>
          <div class="ladder-7"></div>
          <div class="ladder-8"></div>
          <div class="ladder-9"></div>
          <div class="ladder-10"></div>
        </div>
        .menu_open.active a {
        color: #000;
        text-decoration: none;
        text-align: center;
        padding: 1vh 1vh 1vh 1vh;
        background-color: #FFEDD1;
        border-radius: 2vh;
        box-shadow: inset 0.3vh 0.7vh 0.26vh 0pvh rgba(255, 252, 252, 0.25);
        width: 30vh;
        transition: 0.7s;
        }
  4. Для выполнения этого пункта был создан класс tile_group, внутри которого есть и текстовые блоки, и картинки и т.д. Выравнивание текста в хедере выполнено в html
*      <div id="header" class="header" name="header" align="center">
5. Для выполнения этого пункта был создан класс tile_group
6. Изменение яркости при наведении выполнено в классах tile-1, tile-4, support
*      .support img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: bottom;
           object-position: bottom;
        transition: 0.6s;
      }
      .support img:hover {
        transition: 0.6s;
        opacity: 0.8;
        width: 110%;
        height: 110%;
      }
      .tile-4:hover {
        transition: 0.6s;
        opacity: 0.8;
        width: 90%;
        height: 90%;
      }
      .tile-1:hover {
        transition: 0.6s;
        opacity: 0.8;
        width: 110%;
        height: 110%;
      }
   Для всего сайта применен шрифт Bowlby One, футер заполнен контентом, и на сайте есть карта Яндекс, с нужными размерами
*      @font-face {
        font-family: "Bowlby One";
        src: url(../../font/BowlbyOne/BowlbyOne-Regular.ttf);
      }
        body {
        background: rgba(255, 237, 209, 0.89);
        font-family: "Bowlby One";
        margin: 0;
        transition: 0.7s;
      }
         <div class="footer"> <!--footer-->
          <div class="for_dot">
              <ul>
                  <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                      </svg>
                  </li>
                  <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                      </svg>
                  </li>
                  <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                      </svg>
                  </li>
              </ul>
          </div>
          <div class="map_site">
              <iframe src="index.html"></iframe>
          </div>
          <div class="bottom_panel">
              <ul>
                  <li>
                      <a href="#">terms of use</a>
                  </li>
                  <li>
                      <a href="#">privacy policy</a>
                  </li>
                  <li>
                      <a href="#">cookie settings</a>
                  </li>
              </ul>
          </div>
      </div><!--footer-->
7. Ссылки оформлены как "якорь" и для них есть класс uper, при нажатии на который пользователя направляет на верхнюю часть сайта
*      <div class="uper"><!--uper-->
          <a href="#anchor">Aaad</a>
      </div><!--uper-->
      <div class="tile_group"><!--tile group-->
          <div class="tile-1" id="anchor"></div>
   Элементы before, after указал для ссылок класса menu_open
*      .menu_open.active a::before {
        content: "<<";
        color: rgb(0, 0, 0);
      }
      .menu_open.active a:hover::after {
        content: ">>";
        color: rgb(0, 0, 0);
      }
8. Карта сайта встроена в footer
*      <div class="map_site">
        <iframe src="index.html"></iframe>
       </div>
9. Градиент есть в нескольких местах. Например:
*      [class^="tile_little-"] {
        font-size: 8vh;
        display: grid;
        border-radius: 9vh;
        color: #fff;
        text-align: center;
        place-items: center;
        box-shadow: 1vh 1.5vh 0.4vh 0vh rgba(0, 0, 0, 0.25);
        background: rgb(45, 43, 43);
        background: linear-gradient(
          180deg,
          rgba(45, 43, 43, 1) 0%,
          rgba(45, 43, 43, 1) 34%,
          rgba(168, 151, 116, 0.95) 57%,
          rgba(226, 199, 146, 0.95) 77%,
          rgba(255, 237, 209, 1) 100%
        );
      }
10. Форма обратной связи создана внутри дива forms
*        <form action="" class="block-3">
            <div class="inp-1"><input type="text" placeholder="Full name" required></input></div>
            <div class="inp-2"><input type="number" placeholder="Phone number" required></input></div>
            <div class="inp-3"><input type="email" placeholder="Email" required></input></div>
            <div class="inp-4"><textarea type="text" placeholder="Message"></textarea></div>
            <div class="inp-5"><button type="submit">Send</button></div>
        </form>
11. Различные изображения есть как в качестве background так и в качестве <img>
12. Загрузка файла возможна по нажатию кнопки terms of use
*      <a href="superReadme.txt" download="">terms of use</a>
13. Концепция проекта выполнена в Figma и доступна всем по ссылке <a href="https://www.figma.com/file/dJriDptlswrqLomE1t1veN/Nikol_Laba1?type=design&node-id=2%3A39&mode=design&t=GBNXklVeO8bGJHRE-1">Дизайн</a>
