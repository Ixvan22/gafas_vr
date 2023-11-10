function cambio( sen){        
    let carrusel = document.getElementById('center-image');
    carrusel.contador+= sen;
    if ( carrusel.contador == carrusel.lista.length){
         carrusel.contador = 0;
   }
   else  if ( carrusel.contador < 0) {
       carrusel.contador =  carrusel.lista.length-1;
    }
    carrusel.src =  carrusel.lista[carrusel.contador]
 }
 
function reset(){
    let location = window.location.pathname;
    let pathname = location.substring(location.lastIndexOf("/") + 1, location.length - 5);

    let carrusel = document.getElementById('center-image');
    switch (pathname) {
        case "producto-meta-quest-2":
            console.log("aaa");
            carrusel.lista = ['img/products/meta_quest__1.png', 'img/products/meta_quest__2.png', 'img/products/meta_quest__3.png'];
            break;
        case "producto-meta-quest-3":
            console.log("aaa");
            carrusel.lista = ['img/products/meta_quest_3__1.png', 'img/products/meta_quest_3__2.png', 'img/products/meta_quest_3__3.png'];
            break;
        case "producto-samsung-gear-vr":
            carrusel.lista = ['img/products/samsung_gear_vr__1.png', 'img/products/samsung_gear_vr__2.png', 'img/products/samsung_gear_vr__3.png', 'img/products/samsung_gear_vr__4.png'];
            break;
        case "producto-base-carga":
            carrusel.lista = ['img/products/charge_base__1.png', 'img/products/charge_base__2.png', 'img/products/charge_base__3.png'];
            break;
        case "producto-funda-meta-quest-2":
            carrusel.lista = ['img/products/funda_quest__1.png', 'img/products/funda_quest__2.png', 'img/products/funda_quest__3.png'];
            break;
    }
    carrusel.contador = 0;
    carrusel.tempor = null;
    carrusel.src = carrusel.lista[0]
}

