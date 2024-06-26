
/*PARA MOSTRAR LA SUMA DADA POR NUMERO DEL USUARIO*/

document.getElementById('numUsua').addEventListener('submit', function(event) {
    event.preventDefault(); /* Evita que el formulario se env�e y se pueda ejecutar el conteo*/
    
    var number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
      alert('Por favor, ingresa un n�mero v�lido.');
      return;
    }
    
    var suma = 0;
    for (var i = 1; i <= number; i++) {
        suma += i;
    }
    
    var counterDiv = document.getElementById('suma');
    counterDiv.innerHTML = ''; // Limpiar el contenido anterior
    
    counterDiv.innerHTML = 'La suma de los numeros hasta ' + number + ' es: ' + suma;
}); 


/*PARA MOSTRAR CONTEO HASTA NUMERO DEL USUARIO*/

document.getElementById('numUsua').addEventListener('submit', function(event) {
    event.preventDefault(); /* Evita que el formulario se env�e y se pueda ejecutar el conteo*/
    
    var number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
      alert('Por favor, ingresa un numero valido.');
      return;
    }
    
    var counterDiv = document.getElementById('contador');
    counterDiv.innerHTML = ''; // Limpiar el contenido anterior
    
    /* Funci�n para mostrar el contador */
    function showCounter(count) {
      counterDiv.innerHTML = count;
      if (count < number) {
        setTimeout(function() {
          showCounter(count + 1);
        }, 1000); /* el numero 1000 es 1 segundo, tiempo que se demora mostrando el numero */
      } else {
        counterDiv.innerHTML += '<p>Felicidades! Has llegado al numero ingresado.</p>';
      }
    }
    
    /* Iniciar el contador*/
    showCounter(0);
}); 

