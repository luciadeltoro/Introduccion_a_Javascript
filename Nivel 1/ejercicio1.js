// Crear una web que llame a un script de JavaScript que dibuje una tabla de dos filas y una columna.

// Creamos la tabla
const tabla = document.createElement('table'); 
// Creamos la primera fila y la primera celda
const fila1 = document.createElement('tr'); 
const celda1 = document.createElement('td'); 
// Le añadimos contenido a la celda y la agregamos a la fila
celda1.textContent = 'Primera fila'; 
fila1.appendChild(celda1);
// Creamos la segunda fila y la segunda celda
const fila2 = document.createElement('tr'); 
const celda2 = document.createElement('td'); 
// Otra vez le añadimos contenido a la celda y la agregamos a la fila
celda2.textContent = 'Segunda fila'; 
fila2.appendChild(celda2); 
 // Agregamos ambas filas a la tabla
tabla.appendChild(fila1);
tabla.appendChild(fila2); 
// Agregamos un borde a la tabla
tabla.setAttribute('border', '1'); 
// Agregamos la tabla al HTML
document.body.appendChild(tabla); 
