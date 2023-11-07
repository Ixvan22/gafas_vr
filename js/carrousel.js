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
    let carrusel = document.getElementById('center-image');
    carrusel.lista = new Array('img/oculus1.webp', 'img/oculus1.webp', 'img/oculus1.webp');
    carrusel.contador = 0;
    carrusel.tempor = null;
    carrusel.src = carrusel.lista[0]
}