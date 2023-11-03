const NAVBAR_ICON = document.getElementById('nav-bars-icon');
const NAVBAR_LIST = document.getElementById('navbar-list');

NAVBAR_ICON.addEventListener('click', () => {
    NAVBAR_LIST.classList.toggle('navbar-list--show');
})

const NAVBAR_LIST_LINK = document.getElementsByClassName('navbar-list-link');

for (link of NAVBAR_LIST_LINK) {
    link.addEventListener('click', () => {
        NAVBAR_LIST.classList.remove('navbar-list--show');
    });
}
