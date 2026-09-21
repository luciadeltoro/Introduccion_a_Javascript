/* Crear una web que tenga una imagen insertada. Incluirle a dicha web un script que cambie los
valores de ancho y alto de esta imagen para que tenga un tamaño de 100x100. */

// Creamos la imagen
const imagen = document.createElement('img');
imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIWQ1FJ8rdLtFnPtI6LcnhbZp6K-mnImkAM7GQCQEtQ&s';

// Agregamos la imagen al html
document.body.appendChild(imagen);

// Cambiamos el tamaño de la imagen a 100x100
imagen.width = 100; // ancho
imagen.height = 100; // alto