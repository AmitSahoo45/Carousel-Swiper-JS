let menuIcon = document.querySelector('.menu_icon');
let navbar = document.querySelector('.header__navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('show');

    if (!menuIcon.classList.contains('active')) {
        menuIcon.classList.toggle('not-active');
    } else {
        menuIcon.classList.remove('not-active');
    }
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        scale: 1,
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});