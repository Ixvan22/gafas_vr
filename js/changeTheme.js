function changeTheme(type, page) {
    let STYLESHEET = document.getElementById('stylesheet-theme');
    let ICON_LIGHT = document.getElementById('navbar-theme-icon-sun');
    let ICON_DARK = document.getElementById('navbar-theme-icon-moon');

    if (type == "dark") {
        ICON_DARK.classList.add('navbar-theme-icon-hidden');
        ICON_LIGHT.classList.remove('navbar-theme-icon-hidden');
        console.log(`${page}-main-dark.css`);
        STYLESHEET.setAttribute('href', `css/${page}-main-dark.css`);
        localStorage.removeItem("stylesheet");
        localStorage.setItem('stylesheet', 'dark');
    }
    else if (type == "light") {
        ICON_LIGHT.classList.add('navbar-theme-icon-hidden');
        ICON_DARK.classList.remove('navbar-theme-icon-hidden');
        STYLESHEET.setAttribute('href', `css/${page}-main-light.css`);
        localStorage.removeItem("stylesheet");
        localStorage.setItem('stylesheet', 'light');
    }
}

function translatePathName (pathname) {
    if (pathname === "experiencias") pathname = "experiences";
    else if (pathname === "soporte") pathname = "support";
    else if (pathname.slice(0, -1) === "producto") pathname = "product";
    else pathname = "index";
    console.log(pathname)
    return pathname;
}

if (localStorage.getItem("stylesheet") != null) {
    let location = window.location.pathname;
    let pathname = translatePathName(location.substring(1, location.length - 5));
    console.log("🚀 ~ file: changeTheme.js:35 ~ pathname:", pathname)
    changeTheme(localStorage.getItem('stylesheet'), pathname);
}
else {
    let location = window.location.pathname;
    let pathname = translatePathName(location.substring(1, location.length - 5));    
    changeTheme('dark', pathname);
}