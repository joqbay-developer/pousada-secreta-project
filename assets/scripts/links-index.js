
const LINKS__MENU = document.querySelectorAll('.header__container a[href^="#"');

LINKS__MENU.forEach((link) => {
    console.log(link);

    link.addEventListener('click', (event) => {
        event.preventDefault();
        let element = event.target;
        let id = element.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    })
})