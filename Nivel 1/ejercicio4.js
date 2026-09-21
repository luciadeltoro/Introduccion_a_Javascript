/* Modificar el ejercicio anterior para que en lugar del alert con la función innerHTML se muestre en
una tabla el contenido de cada cuadro de texto */

// Contenido del ejercicio anterior
const input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = 'Ingresa un número';
const input2 = document.createElement('input');
input2.type = 'text';
input2.placeholder = 'Ingresa otro número';

const button = document.createElement('button');
button.textContent = 'Sumar';

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);

// Creamos un contenedor en el que va a ir la tabla
const contenedor = document.createElement('div');
document.body.appendChild(contenedor); // Agregamos el contenedor al html

// Al hacer click en el botón, generamos toda la tabla de una vez con innerHTML
button.addEventListener('click', () => {
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);
    const suma = n1 + n2;

    contenedor.innerHTML = `
        <table border="1">
            <tr>
                <td>Número 1</td>
                <td>Número 2</td>
                <td>Suma</td>
            </tr>
            <tr>
                <td>${n1}</td>
                <td>${n2}</td>
                <td>${suma}</td>
            </tr>
        </table>
    `;
});