// Esperar a que el DOM Content de HTML este cargado
// una vez cargado ejecuta la funcion siguiente
document.addEventListener("DOMContentLoaded", function () {

  // Tomar los elementos por id
  // var para que las varibales puedan ser modificadas a lo largo del codigo
  var form    = document.getElementById("form-contacto");
  // Se busca el ID de  DOM 
  var nombre  = document.getElementById("contacto-nombre");
  var correo  = document.getElementById("contacto-correo");
  var mensaje = document.getElementById("contacto-mensaje");
  var estado  = document.getElementById("contacto-estado");

  // espera el envio del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();                 // no recargar la pagina
    estado.classList.remove("oculto");  // mostrar el texto de estado
    estado.textContent = "";            // limpiar la variable mensaje queda vacia

    // validaciones, una por una
    // en caso de que una de estas este vacia, osea que el usuario
    // no ingreso texto, entonces estado.textContent se reemplaza por el string
    // revelando la informacion y el mensaje como retorno (termina la ejecucion de la funcion)
    if (nombre.value === "") {
      estado.textContent = "Ingresa tu nombre.";
      return;
    }

    if (correo.value === "") {
      estado.textContent = "Ingresa tu correo.";
      return;
    }

    // Comprobación básica del correo (revisa el @)
    if (correo.value.indexOf("@") === -1) {
      estado.textContent = "Correo inválido.";
      return;
    }

    if (mensaje.value === "") {
      estado.textContent = "Escribe tu mensaje.";
      return;
    }

    estado.textContent = "Mensaje enviado. ¡Gracias!";
    form.reset(); // limpiar el formulario
  });
});
