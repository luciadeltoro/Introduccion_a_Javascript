/* Modificar el ejercicio anterior para incluir dos cuadros de texto en los que se puedan poner los
valores para el ancho y alto de la imagen. Incluir también un botón para que cuando lo pulsemos
se redimensione la imagen a los valores introducidos en los cuadros de texto. */

// Esto es del ejercicio anterior
const imagen = document.createElement('img');
imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIWQ1FJ8rdLtFnPtI6LcnhbZp6K-mnImkAM7GQCQEtQ&s';

document.body.appendChild(imagen);

// Creamos los dos cuadros de texto para el ancho y alto
const inputAncho = document.createElement('input');
inputAncho.type = 'text';
inputAncho.placeholder = 'Ingresa el ancho';
const inputAlto = document.createElement('input');
inputAlto.type = 'text';
inputAlto.placeholder = 'Ingresa el alto';

// Creamos el botón 
const button = document.createElement('button');
button.textContent = 'Redimensionar';

// Agregamos un evento al botón para que al hacer click se cambien los valores de ancho y alto de la imagen 
button.addEventListener('click', () => {
    const ancho = parseInt(inputAncho.value);
    const alto = parseInt(inputAlto.value);

    if (!isNaN(ancho) && !isNaN(alto)) {
        imagen.width = ancho;
        imagen.height = alto;
    } // Solo se cambia el tamaño si los valores introducidos son números válidos
});

// Agregamos todo al html
document.body.appendChild(inputAncho);
document.body.appendChild(inputAlto);
document.body.appendChild(button);