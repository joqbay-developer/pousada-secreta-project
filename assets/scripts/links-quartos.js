
const LINKS = document.querySelectorAll('.dropdown__content a[href^="#"]');

LINKS.forEach((link) => {
    console.log(link);

    link.addEventListener('click', (event) => {
        event.preventDefault();
        let myElement = event.target;
        let myId = myElement.getAttribute('href');
        console.log(myId);
        document.querySelector(myId).scrollIntoView({behavior: 'smooth'});
    })
})