// Esperar a que el HTML esté listo
document.addEventListener("DOMContentLoaded", function () {

  // Tomar los elementos por id
  var form    = document.getElementById("form-contacto");
  var nombre  = document.getElementById("contacto-nombre");
  var correo  = document.getElementById("contacto-correo");
  var mensaje = document.getElementById("contacto-mensaje");
  var estado  = document.getElementById("contacto-estado");

  // espera el envio del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();                 // no recargar la pagina
    estado.classList.remove("oculto");  // mostrar el texto de estado
    estado.textContent = "";            // limpiar mensajes anteriores

    // validaciones, una por una
    if (nombre.value === "") {
      estado.textContent = "Ingresa tu nombre.";
      nombre.focus();
      return;
    }

    if (correo.value === "") {
      estado.textContent = "Ingresa tu correo.";
      correo.focus();
      return;
    }

    // Comprobación básica del correo (revisa el @)
    if (correo.value.indexOf("@") === -1) {
      estado.textContent = "Correo inválido.";
      correo.focus();
      return;
    }

    if (mensaje.value === "") {
      estado.textContent = "Escribe tu mensaje.";
      mensaje.focus();
      return;
    }

    estado.textContent = "Mensaje enviado. ¡Gracias!";
    form.reset(); // limpiar el formulario
  });
});
