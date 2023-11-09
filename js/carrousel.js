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
            carrusel.lista = ['img/products/gafas1.png', 'img/products/gafas2.png', 'img/products/gafas3.png'];
            break;
        case "producto2":
            carrusel.lista = ['img/products/gafas.png', 'img/products/gafas.png', 'img/products/gafas.png'];
            break;
    }
    carrusel.contador = 0;
    carrusel.tempor = null;
    carrusel.src = carrusel.lista[0]
}

