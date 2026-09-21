/* Crear una web que tenga dos cuadros de texto y un botón y hacer un script de JavaScript para
que cuando hagamos click sobre él se muestre con la función alert la suma de lo escrito en ambos
cuadros de texto. */

// Creamos los dos cuadros de texto
const input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = 'Ingresa un número';
const input2 = document.createElement('input');
input2.type = 'text';
input2.placeholder = 'Ingresa otro número';

// Creamos el botón 
const button = document.createElement('button');
button.textContent = 'Sumar';

// Agregamos un evento al botón para que al hacer click se haga la suma y se muestre el resultado con la función alert
button.addEventListener('click', () => {
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);
    const suma = n1 + n2;
    alert(`${suma}`);
}); 

// Agregamos todo al html
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);

