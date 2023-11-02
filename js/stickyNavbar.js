window.addEventListener("scroll", function (){
    let nav = document.getElementById('navbar');
    nav.classList.toggle('navbar--fixed', window.scrollY > 0);
});
