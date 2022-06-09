//VARIABLES
const btnNumero = document.querySelector('.numbers');
const acciones = document.querySelector('.process');
const pantalla = document.querySelector('.pantalla');
const btnMas = document.querySelector('.plus');
const btnIgual = document.querySelector('.ecual');
let numeros = [];


//ESCUCHAR EVENTOS
btnNumero.addEventListener('click', imprimirNumeros);
btnMas.addEventListener('click', agregaArray);
btnIgual.addEventListener('click', igual);


//FUNCIONES
//Obtener el valor del botón e imprime el resultado en pantalla.

function imprimirNumeros(e){
    let numero = e.target.textContent;
    let fuera = e.target.classList.value;
    if(fuera === ''){
        if(pantalla.textContent.length <= 7){
            pantalla.textContent+=numero;
            // numeros.push(numero);        
        }   
    }
}
//Agregar numeros al array
function agregaArray(){
    let grupoNumeros = pantalla.textContent;
    numeros=[...numeros,parseInt(grupoNumeros)];
    pantalla.textContent = '';
    console.log(pantalla.textContent);
    console.log(numeros);
}

//Da el resultado de los procesos
function igual(){
    pantalla.textContent = suma();
}

//Sumar los números capturados en un array
function suma(){
    let sumando = 0;
    let resultado = 0;
    for(let i = 0;i<=numeros.length-1;i++){
        resultado = sumando += numeros[i];
    }
    return resultado;
}
