const hamburger = document.querySelector(".hamburger");
const  menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");
const closeElement = document.querySelector(".menu__overlay");

const modalWindow = document.querySelector('.modal-window');

const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');


const btnsSHowModalWindow = document.getElementById(
    'show_modal'
);



hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");

});

closeElement.addEventListener("click", () => {
    menu.classList.remove("active");

});

const openModalWindow = function (e) {
    e.preventDefault();
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsSHowModalWindow.addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

