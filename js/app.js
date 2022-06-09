//VARIABLES
const numeros = document.querySelector('.numbers');
const acciones = document.querySelector('.process');
const pantalla = document.querySelector('.pantalla');


//ESCUCHAR EVENTOS
numeros.addEventListener('click', imprimirNumeros);

//FUNCIONES
//Obtener el valor del botón e imprime el resultado en pantalla.

function imprimirNumeros(e){
    let numero = e.target.textContent;
    let fuera = e.target.classList.value;
    if(fuera === ''){
        if(pantalla.textContent.length <= 7){
            pantalla.textContent+=numero;
        }   
    }
}

//Suma las cantidades 
function sumar(){

}