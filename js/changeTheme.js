const STYLESHEET = document.getElementById('stylesheet-theme');

const ICON_LIGHT = document.getElementById('navbar-theme-icon-sun');
const ICON_DARK = document.getElementById('navbar-theme-icon-moon');


function changeTheme(type, page) {
    if (type == "dark") {
        ICON_DARK.classList.toggle('navbar-theme-icon-hidden');
        ICON_LIGHT.classList.toggle('navbar-theme-icon-hidden');
        STYLESHEET.setAttribute('href', `css/${page}-main-dark.css`);
    }
    else if (type == "light") {
        ICON_LIGHT.classList.toggle('navbar-theme-icon-hidden');
        ICON_DARK.classList.toggle('navbar-theme-icon-hidden');
        STYLESHEET.setAttribute('href', `css/${page}-main-light.css`);
    }
}
