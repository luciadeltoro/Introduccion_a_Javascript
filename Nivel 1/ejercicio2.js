/* Modificar el ejercicio anterior para que el script contenga una variable de cadena de caracteres 
que guarde la cadena necesaria para darle color de fuente azul y tamaño 12 a la tabla del ejercicio anterior. */


// Esto es el contenido del ejerciicio anterior
const tabla = document.createElement('table'); 

const fila1 = document.createElement('tr'); 
const celda1 = document.createElement('td'); 

celda1.textContent = 'Primera fila'; 
fila1.appendChild(celda1);

const fila2 = document.createElement('tr'); 
const celda2 = document.createElement('td'); 

celda2.textContent = 'Segunda fila'; 
fila2.appendChild(celda2); 

tabla.appendChild(fila1);
tabla.appendChild(fila2); 

tabla.setAttribute('border', '1'); 


// Añadimos la variable de cadena de caracteres de color azul y tamaño 12
const estilo = 'color: blue; font-size: 12px;';

// Añadimos la cadena al atributo style de la tabla para que se apliquen los cambios
tabla.setAttribute('style', estilo);

// Agregamos la tabla al HTML
document.body.appendChild(tabla); 