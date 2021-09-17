/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/prokrutka.js":
/*!*************************!*\
  !*** ./js/prokrutka.js ***!
  \*************************/
/***/ (() => {

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector('.header__logo').offsetHeight; // const topOffset = 0; // если не нужен отступ сверху 

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./js/scroll_top.js":
/*!**************************!*\
  !*** ./js/scroll_top.js ***!
  \**************************/
/***/ (() => {

const goTopBtn = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  const scrolled = window.pageYOffset + 400;
  console.log('scrolled', scrolled);
  const coords = document.documentElement.clientHeight;
  console.log('coords', coords);

  if (scrolled >= coords) {
    goTopBtn.classList.add('back_to_top-show');
  }

  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
} // function backToTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -40); // скорость подьема
//         setTimeout(backToTop, 0);
//     }
// }


function backToTop() {
  const scrollStep = window.pageYOffset / 40;

  if (window.pageYOffset > 0) {
    window.scrollBy(0, -scrollStep);
    setTimeout(backToTop, 0);
  }
}

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (() => {

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0; // sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up');
});
downBtn.addEventListener('click', () => {
  changeSlide('down');
}); // Переключение слайдов стрелочками

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
}); // Функция переключения слайдов

function changeSlide(direction) {
  if (direction === 'down') {
    activeSlideIndex++;

    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'up') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * 73}vh)`; // sidebar.style.transform = `translateY(${activeSlideIndex * 87}vh)`
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/main_logo.png */ "./img/main_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about1.png */ "./img/about1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about2.png */ "./img/about2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about3.png */ "./img/about3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/gallery1.png */ "./img/gallery1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/gallery2.png */ "./img/gallery2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/gallery3.png */ "./img/gallery3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/gallery4.png */ "./img/gallery4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/gallery5.png */ "./img/gallery5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/contact.png */ "./img/contact.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/footer_logo1.svg */ "./img/footer_logo1.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css\" />\r\n    <title>TEST</title>\r\n</head>\r\n\r\n<body>\r\n    <!-- HEADER -->\r\n    <header class=\"header\">\r\n        <div class=\"header__wrapper _wrapper\">\r\n            <div class=\"header__logo\">\r\n                <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></a>\r\n            </div>\r\n            <div class=\"menu__icon\">\r\n                <span></span>\r\n            </div>\r\n            <nav class=\"menu__body\">\r\n                <ul class=\"menu__list\">\r\n                    <li><a href=\"#part1\" class=\"menu__link\"><span class=\"bords\">ГЛАВНАЯ</span></a></li>\r\n                    <li><a href=\"#part2\" class=\"menu__link\"><span class=\"bords\">ГАЛЕРЕЯ</span></a></li>\r\n                    <li><a href=\"#part3\" class=\"menu__link\"><span class=\"bords\">ПРОЕКТЫ</span></a></li>\r\n                    <li><a href=\"#part4\" class=\"menu__link\"><span class=\"bords\">СЕРТИФикаты</span></a></li>\r\n                    <li><a href=\"#part5\" class=\"menu__link\"><span class=\"bords\">КОНТАКТы</span></a></li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n        <div id=\"root\"></div>\r\n    </header>\r\n    <div class=\"main\" id=\"part1\">\r\n        <!-- SLIDER -->\r\n        <div class=\"slider__wrapper _wrapper\" id=\"part2\">\r\n            <div class=\"container\">\r\n                <div class=\"sidebar\">\r\n                    <!-- <div>\r\n                    <h1>NoName xD</h1>\r\n                    <p>Dream come true</p>\r\n                </div>\r\n                <div>\r\n                    <h1>Ferrari</h1>\r\n                    <p>Try to catch up</p>\r\n                </div>\r\n                <div>\r\n                    <h1>Aston Martin</h1>\r\n                    <p>Luxury has a name</p>\r\n                </div> -->\r\n                    <div>\r\n                        <h1>PROJECT</h1>\r\n                        <p>HOME</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"main-slide\">\r\n                    <div class=\"slide1\">\r\n                        <button class=\"but\">ВЗГЛЯНУТЬ<i class=\"fas fa-arrow-right\"></i></button>\r\n                    </div>\r\n                    <div class=\"slide2\">\r\n                        <button class=\"but\">ВЗГЛЯНУТЬ<i class=\"fas fa-arrow-right\"></i></button>\r\n                    </div>\r\n                    <div class=\"slide3\">\r\n                        <button class=\"but\">ВЗГЛЯНУТЬ<i class=\"fas fa-arrow-right\"></i></button>\r\n                    </div>\r\n                    <div class=\"slide4\">\r\n                        <button class=\"but\">ВЗГЛЯНУТЬ<i class=\"fas fa-arrow-right\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"controls\">\r\n                    <button class=\"down-button\">\r\n                        <i class=\"fas fa-arrow-down\"></i>\r\n                    </button>\r\n                    <button class=\"up-button\">\r\n                        <i class=\"fas fa-arrow-up\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- ABOUT COMPANY -->\r\n        <div class=\"about\" id=\"part4\">\r\n            <div class=\"about__wrapper _wrapper\">\r\n                <div class=\"about__foto\">\r\n                    <div class=\"left__foto\">\r\n                        <img class=\"first\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n                        <img class=\"third\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"right__foto\">\r\n                        <img class=\"second\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"about__info\">\r\n                    <h2 class=\"about__title _greytitle\">\r\n                        О компании\r\n                    </h2>\r\n                    <p class=\"info__text _about\">\r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\r\n                        the\r\n                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of\r\n                        type\r\n                        and\r\n                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the\r\n                        leap\r\n                        into electronic typesetting, remaining essentially unchanged.\r\n                    </p>\r\n                    <a href=\"#\" class=\"about__link _link\">ВЗГЛЯНУТЬ<i class=\"fas fa-arrow-right\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- MAIN GOALS -->\r\n        <div class=\"main__goals _wrapper\">\r\n            <h2 class=\"goals__title _greytitle\">Основные задачи</h2>\r\n            <div class=\"goals__info\">\r\n                <div class=\"goals__text _one\">\r\n                    <span class=\"number _numb\">1</span>\r\n                    <p class=\"text__info\">Создание комфортных условий и повышение качества обслуживания клиентов</p>\r\n                </div>\r\n                <div class=\"goals__text _two\">\r\n                    <span class=\"number _numb\">2</span>\r\n                    <p class=\"text__info\">Постоянно совершенствовать качество предоставляемых услуг путем обучения\r\n                        персонала, закупки нового оборудования и усиленной рекламы на рынке</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- OUR PROJECT -->\r\n        <div class=\"our__project _wrapper\" id=\"part3\">\r\n            <h2 class=\"project__title _greytitle\">Наши проекты</h2>\r\n            <div class=\"portfolio\">\r\n                <ul class=\"portfolio__grid _wrapper\">\r\n                    <li class=\"box1\"><span class=\"descr\">ДОСУГОВЫЙ ЦЕНТР<a class=\"portfolio__link _link\"\r\n                                href=\"#\">подробнее<i class=\"fas fa-arrow-right\"></i></a></span><img\r\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"></li>\r\n                    <li class=\"box2\"><span class=\"descr\">ДОСУГОВЫЙ ЦЕНТР<a class=\"portfolio__link _link\"\r\n                                href=\"#\">подробнее<i class=\"fas fa-arrow-right\"></i></a></span><img\r\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\"></li>\r\n                    <li class=\"box3\"><span class=\"descr\">ДОСУГОВЫЙ ЦЕНТР<a class=\"portfolio__link _link\"\r\n                                href=\"#\">подробнее<i class=\"fas fa-arrow-right\"></i></a></span><img\r\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\"></li>\r\n                    <li class=\"box4\"><span class=\"descr\">ДОСУГОВЫЙ ЦЕНТР<a class=\"portfolio__link _link\"\r\n                                href=\"#\">подробнее<i class=\"fas fa-arrow-right\"></i></a></span><img class=\"foto4\"\r\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\"></li>\r\n                    <li class=\"box5\"><span class=\"descr\">ДОСУГОВЫЙ ЦЕНТР<a class=\"portfolio__link _link\"\r\n                                href=\"#\">подробнее<i class=\"fas fa-arrow-right\"></i></a></span><img\r\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\"></li>\r\n                </ul>\r\n            </div>\r\n            <a href=\"#\" class=\"project__link _link\">все проекты<i class=\"fas fa-arrow-right\"></i></a>\r\n        </div>\r\n        <!-- CONTACT US -->\r\n        <section class=\"contact__form _wrapper\" id=\"part5\">\r\n            <h2 class=\"contact__title _greytitle\">Связаться с нами</h2>\r\n            <form action=\"#\" name=\"newform\" method=\"POST\">\r\n                <div class=\"main__form\">\r\n                    <div class=\"form__inputs\">\r\n                        <input type=\"text\" maxlength=\"30\" name=\"name\" placeholder=\"Имя\"\r\n                            oninput=\"this.value=this.value.replace(/[^a-zA-Z]/g,'');\">\r\n                        <input type=\"tel\" maxlength=\"13\" name=\"number\" placeholder=\"Номер телефона*\"\r\n                            oninput=\"this.value=this.value.replace(/[^0-9+()]/g,'');\">\r\n                        <input type=\"email\" maxlength=\"35\" name=\"email\" placeholder=\"E-mail*\">\r\n                        <input type=\"search\" name=\"name\" placeholder=\"Интересующий товар/услуга\">\r\n                        <textarea name=\"text\" placeholder=\"Сообщение*\"></textarea>\r\n                        <label class=\"check\"><input class=\"check__input\" type=\"checkbox\">Отправляя заявку Вы\r\n                            соглашаетесь\r\n                            с политикой\r\n                            конфиденциальности</label>\r\n                        <input type=\"submit\" class=\"sent\" name=\"submit\">\r\n                    </div>\r\n                    <div class=\"contact__foto\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </section>\r\n        <!-- FOOTER -->\r\n        <footer class=\"footer\">\r\n            <div class=\"footer__wrapper _wrapper\">\r\n                <div class=\"footer__logo\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"footer__info\">\r\n                    <h3 class=\"info__title _foottitle\">Информация</h3>\r\n                    <div class=\"info__list\">\r\n                        <li><a class=\"info__link\" href=\"#\">Главная</a></li>\r\n                        <li><a class=\"info__link\" href=\"#\">Галерея</a></li>\r\n                        <li><a class=\"info__link\" href=\"#\">Проекты</a></li>\r\n                        <li><a class=\"info__link\" href=\"#\">Сертификаты</a></li>\r\n                        <li><a class=\"info__link\" href=\"#\">Контакты</a></li>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer__contacts\">\r\n                    <h3 class=\"contacts__title _foottitle\">Контакты</h3>\r\n                    <div class=\"contacts__list\">\r\n                        <li>\r\n                            <svg display=\"none\">\r\n                                <symbol id=\"point\" viewBox=\"0 0 97.713 97.713\">\r\n                                    <g>\r\n                                        <path d=\"M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684\r\n                                    c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695\r\n                                    c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659\r\n                                    c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687\r\n                                    C67.542,46.276,59.159,54.659,48.855,54.659z\" />\r\n                                    </g>\r\n                                </symbol>\r\n                            </svg>\r\n                            <svg class=\"icon\">\r\n                                <use xlink:href=\"#point\"></use>\r\n                            </svg>\r\n                            <a href=\"#\" class=\"footer__link\">100000, Республика Казахстан,\r\n                                г. Караганда, ул. Телевизионная 10</a>\r\n                        </li>\r\n                        <li>\r\n                            <svg display=\"none\">\r\n                                <symbol id=\"telephone\" viewBox=\"0 0 482.6 482.6\">\r\n                                    <g>\r\n                                        <path d=\"M98.339,320.8c47.6,56.9,104.9,101.7,170.3,133.4c24.9,11.8,58.2,25.8,95.3,28.2c2.3,0.1,4.5,0.2,6.8,0.2\r\n                                    c24.9,0,44.9-8.6,61.2-26.3c0.1-0.1,0.3-0.3,0.4-0.5c5.8-7,12.4-13.3,19.3-20c4.7-4.5,9.5-9.2,14.1-14\r\n                                    c21.3-22.2,21.3-50.4-0.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2c-12.8,0-25.1,5.6-35.6,16.1l-35.8,35.8\r\n                                    c-3.3-1.9-6.7-3.6-9.9-5.2c-4-2-7.7-3.9-11-6c-32.6-20.7-62.2-47.7-90.5-82.4c-14.3-18.1-23.9-33.3-30.6-48.8\r\n                                    c9.4-8.5,18.2-17.4,26.7-26.1c3-3.1,6.1-6.2,9.2-9.3c10.8-10.8,16.6-23.3,16.6-36s-5.7-25.2-16.6-36l-29.8-29.8\r\n                                    c-3.5-3.5-6.8-6.9-10.2-10.4c-6.6-6.8-13.5-13.8-20.3-20.1c-10.3-10.1-22.4-15.4-35.2-15.4c-12.7,0-24.9,5.3-35.6,15.5l-37.4,37.4\r\n                                    c-13.6,13.6-21.3,30.1-22.9,49.2c-1.9,23.9,2.5,49.3,13.9,80C32.739,229.6,59.139,273.7,98.339,320.8z M25.739,104.2\r\n                                    c1.2-13.3,6.3-24.4,15.9-34l37.2-37.2c5.8-5.6,12.2-8.5,18.4-8.5c6.1,0,12.3,2.9,18,8.7c6.7,6.2,13,12.7,19.8,19.6\r\n                                    c3.4,3.5,6.9,7,10.4,10.6l29.8,29.8c6.2,6.2,9.4,12.5,9.4,18.7s-3.2,12.5-9.4,18.7c-3.1,3.1-6.2,6.3-9.3,9.4\r\n                                    c-9.3,9.4-18,18.3-27.6,26.8c-0.2,0.2-0.3,0.3-0.5,0.5c-8.3,8.3-7,16.2-5,22.2c0.1,0.3,0.2,0.5,0.3,0.8\r\n                                    c7.7,18.5,18.4,36.1,35.1,57.1c30,37,61.6,65.7,96.4,87.8c4.3,2.8,8.9,5,13.2,7.2c4,2,7.7,3.9,11,6c0.4,0.2,0.7,0.4,1.1,0.6\r\n                                    c3.3,1.7,6.5,2.5,9.7,2.5c8,0,13.2-5.1,14.9-6.8l37.4-37.4c5.8-5.8,12.1-8.9,18.3-8.9c7.6,0,13.8,4.7,17.7,8.9l60.3,60.2\r\n                                    c12,12,11.9,25-0.3,37.7c-4.2,4.5-8.6,8.8-13.3,13.3c-7,6.8-14.3,13.8-20.9,21.7c-11.5,12.4-25.2,18.2-42.9,18.2\r\n                                    c-1.7,0-3.5-0.1-5.2-0.2c-32.8-2.1-63.3-14.9-86.2-25.8c-62.2-30.1-116.8-72.8-162.1-127c-37.3-44.9-62.4-86.7-79-131.5\r\n                                    C28.039,146.4,24.139,124.3,25.739,104.2z\" />\r\n                                    </g>\r\n                                </symbol>\r\n                            </svg>\r\n                            <svg class=\"icon\">\r\n                                <use xlink:href=\"#telephone\"></use>\r\n                            </svg>\r\n                            <a href=\"#\" class=\"footer__link\">+38 (000) 000 00 00</a>\r\n                        </li>\r\n                        <li>\r\n                            <svg display=\"none\">\r\n                                <symbol id=\"mail\" viewBox=\"0 0 512 512\">\r\n                                    <g>\r\n                                        <path\r\n                                            d=\"M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121\r\n                                    C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18\r\n                                    s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894z\r\n                                     M51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939\r\n                                    l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z\" />\r\n                                    </g>\r\n                                </symbol>\r\n                            </svg>\r\n                            <svg class=\"icon\">\r\n                                <use xlink:href=\"#mail\"></use>\r\n                            </svg>\r\n                            <a href=\"#\" class=\"footer__link\">mail@gmail.com</a>\r\n                        </li>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer__social\">\r\n                    <h3 class=\"social__title _foottitle\">Социальные сети</h3>\r\n                    <div class=\"social__list\">\r\n                        <a href=\"https://www.facebook.com/\" target=\"_blank\" class=\"social__links\">\r\n                            <li>\r\n                                <svg display=\"none\">\r\n                                    <symbol id=\"facebook\" viewBox=\"0 0 24 24\">\r\n                                        <g>\r\n                                            <path\r\n                                                d=\"m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z\" />\r\n                                        </g>\r\n                                    </symbol>\r\n                                </svg>\r\n                                <svg class=\"icon\">\r\n                                    <use xlink:href=\"#facebook\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </a>\r\n                        <a href=\"https://twitter.com/\" target=\"_blank\" class=\"social__links\">\r\n                            <li>\r\n                                <svg display=\"none\">\r\n                                    <symbol id=\"twitter\" viewBox=\"0 0 512 512\">\r\n                                        <g>\r\n                                            <path d=\"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016\r\n                                        c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992\r\n                                        c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056\r\n                                        c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152\r\n                                        c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792\r\n                                        c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44\r\n                                        C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568\r\n                                        C480.224,136.96,497.728,118.496,512,97.248z\" />\r\n                                        </g>\r\n                                    </symbol>\r\n                                </svg>\r\n                                <svg class=\"icon\">\r\n                                    <use xlink:href=\"#twitter\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </a>\r\n                        <a href=\"https://www.linkedin.com/\" target=\"_blank\" class=\"social__links\">\r\n                            <li>\r\n                                <svg display=\"none\">\r\n                                    <symbol id=\"linkedin\" viewBox=\"0 0 512 512\">\r\n                                        <g>\r\n                                            <path\r\n                                                d=\"m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0\" />\r\n                                        </g>\r\n                                    </symbol>\r\n                                </svg>\r\n                                <svg class=\"icon\">\r\n                                    <use xlink:href=\"#linkedin\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </a>\r\n                        <a href=\"https://www.pinterest.com/\" target=\"_blank\" class=\"social__links\">\r\n                            <li>\r\n                                <svg display=\"none\">\r\n                                    <symbol id=\"pinterest\" viewBox=\"0 0 24 24\">\r\n                                        <g>\r\n                                            <path\r\n                                                d=\"m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z\" />\r\n                                        </g>\r\n                                    </symbol>\r\n                                </svg>\r\n                                <svg class=\"icon\">\r\n                                    <use xlink:href=\"#pinterest\"></use>\r\n                                </svg>\r\n                            </li>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n        <footer class=\"subfooter\">\r\n            <div class=\"subfooter__info _wrapper\">\r\n                <p class=\"subfooter__text\">© 2019 Digital Project. Все права защищены.</p>\r\n            </div>\r\n            <a class=\"back_to_top\" title=\"Наверх\"><i class=\"fas fa-arrow-up\"></i></a>\r\n        </footer>\r\n\r\n    </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/about1.png":
/*!************************!*\
  !*** ./img/about1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/about1.png";

/***/ }),

/***/ "./img/about2.png":
/*!************************!*\
  !*** ./img/about2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/about2.png";

/***/ }),

/***/ "./img/about3.png":
/*!************************!*\
  !*** ./img/about3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/about3.png";

/***/ }),

/***/ "./img/contact.png":
/*!*************************!*\
  !*** ./img/contact.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/contact.png";

/***/ }),

/***/ "./img/footer_logo1.svg":
/*!******************************!*\
  !*** ./img/footer_logo1.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/footer_logo1.svg";

/***/ }),

/***/ "./img/gallery1.png":
/*!**************************!*\
  !*** ./img/gallery1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gallery1.png";

/***/ }),

/***/ "./img/gallery2.png":
/*!**************************!*\
  !*** ./img/gallery2.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gallery2.png";

/***/ }),

/***/ "./img/gallery3.png":
/*!**************************!*\
  !*** ./img/gallery3.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gallery3.png";

/***/ }),

/***/ "./img/gallery4.png":
/*!**************************!*\
  !*** ./img/gallery4.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gallery4.png";

/***/ }),

/***/ "./img/gallery5.png":
/*!**************************!*\
  !*** ./img/gallery5.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gallery5.png";

/***/ }),

/***/ "./img/main_logo.png":
/*!***************************!*\
  !*** ./img/main_logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/main_logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/slider.js */ "./js/slider.js");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_prokrutka_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/prokrutka.js */ "./js/prokrutka.js");
/* harmony import */ var _js_prokrutka_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_prokrutka_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_scroll_top_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/scroll_top.js */ "./js/scroll_top.js");
/* harmony import */ var _js_scroll_top_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_scroll_top_js__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=main.js.map