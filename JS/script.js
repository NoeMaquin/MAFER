
// Seleccionar los botones de next y prev
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Función para mover las imágenes al siguiente elemento
function moveToNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}
// Función para mover las imágenes al elemento previo
function moveToPrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}
//--------------------------------------------------------
const letras = document.querySelectorAll('.lyrics-container .des');
// Ocultar todas las letras al inicio
letras.forEach(letra => {
  letra.style.display = 'none';
});
// Función para mostrar cada letra con su propio tiempo
function mostrarLetrasConIntervalos(index) {
  if (index < letras.length) {
    setTimeout(() => {
      letras[index].style.display = 'block';
      mostrarLetrasConIntervalos(index + 1);
    }, obtenerTiempoPorIndice(index));
  }
}
// Función para obtener el tiempo para cada letra por su índice
function obtenerTiempoPorIndice(index) {
  switch (index) {
    case 0:
      return 4000; // Tiempo para la primera letra en milisegundos
    case 1:
      return 4000; // Tiempo para la segunda letra en milisegundos
    case 2:
      return 4000; // Tiempo para la tercera letra en milisegundos
    case 3:
      return 8000; // Tiempo para la cuarta letra en milisegundos
    case 4:
      return 5000; // Tiempo para la quinta letra en milisegundos
    case 5:
      return 4000; // Tiempo para la sexta letra en milisegundos
    case 6:
      return 2000; // Tiempo para la séptima letra en milisegundos
    case 7:
      return 6000; // Tiempo para la octava letra en milisegundos
    case 8:
      return 7000; // Tiempo para la novena letra en milisegundos
    case 9:
      return 7000; // Tiempo para la décima letra en milisegundos
    default:
      return 0;
  }
}

// Obtener el elemento de audio
const miAudio = document.getElementById('miAudio');
// Función para detener el carrusel cuando el audio termina
function detenerCarrusel() {
  clearInterval(intervalId); // Detener el intervalo del carrusel
}
// Función para iniciar carrusel y letras al reproducir el audio
function iniciarCarruselYLetras() {
  intervalId = setInterval(moveToNext, 5000); // Iniciar el carrusel
  mostrarLetrasConIntervalos(0); // Mostrar las letras con intervalos
}
window.addEventListener('load', function() {
  miAudio.addEventListener('play', iniciarCarruselYLetras); // Iniciar carrusel y letras al reproducir el audio
  miAudio.addEventListener('ended', detenerCarrusel); // Detectar cuando el audio termine y detener el carrusel
  miAudio.addEventListener('ended', function() {
    window.location.href = 'añonuevo.html';
  });
});


