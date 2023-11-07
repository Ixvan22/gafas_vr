function cambio( sen){        
    let carrusel = document.getElementById('centro');
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
    let carrusel = document.getElementById('centro');
    carrusel.lista = new Array('/img/1.jfif', '/img/2.jfif', '/img/3.jfif');
    carrusel.contador = 0;
    carrusel.tempor = null;
    carrusel.src = carrusel.lista[0]
}