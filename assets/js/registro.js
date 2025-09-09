// Datos simples a modo de ejemplo como lo que tiene el documento en ava
const regiones = {
  "Región Metropolitana de Santiago": ["Santiago", "Ñuñoa", "Puente Alto"],
  "Región de la Araucanía": ["Temuco", "Padre Las Casas", "Villarrica"],
  "Región de Ñuble": ["Chillán", "San Carlos", "Quirihue"]
};

// Espera al HTML parseado y el DOM
// No espera a que carguen imágenes; solo a que el documento esté listo.
document.addEventListener("DOMContentLoaded", () => {
  // Tomamos referencias a los elementos del formulario por su id.
  const selRegion = document.getElementById("region");
  const selComuna = document.getElementById("comuna");
  const form = document.getElementById("form-registro");
  const estado = document.getElementById("estado");

    // poblar opciones de region usando los datos del objeto Object.keys(regiones) devuelve un array 
  Object.keys(regiones).forEach(r => {
    const opt = document.createElement("option");
    opt.value = r; opt.textContent = r;
    selRegion.appendChild(opt);
  });

  // Cuando el usuario cambia la region llenamos las comunas.
  selRegion.addEventListener("change", () => {

    // Reinicia el <select id="comuna"> con su opcion por defecto.
    selComuna.innerHTML = '<option value="">-- Seleccione la comuna --</option>';
    
    // Obtiene el array de comunas de la región elegida; si no hay, usa [].
    const lista = regiones[selRegion.value] || [];

    // Crea una <option> por cada comuna y la agrega al select de comunas.
    lista.forEach(comuna => {
      const opt = document.createElement("option");
      opt.value = comuna; opt.textContent = comuna;
      selComuna.appendChild(opt);
    });
    selComuna.disabled = lista.length === 0;
  });

  // validación al enviar
  form.addEventListener("submit", (e) => {
  
    const correo = document.getElementById("correo").value.trim(); // .trim() elimina espacios al inicio/fin (útil para mails)
    const correo2 = document.getElementById("correo2").value.trim();
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;

    // los correos deben coincidir
    if (correo !== correo2) {
      estado.textContent = "Los correos no coinciden.";
      return;
    }

    // las contrasenas deben coincidir.
    if (pass !== pass2) {
      estado.textContent = "Las contraseñas no coinciden.";
      return;
    }

    // debe haber una region y comuna
    if (!selRegion.value || !selComuna.value) {
      estado.textContent = "Selecciona región y comuna.";
      return;
    }

    // registro enviado
    estado.textContent = "Registro enviado. ¡Gracias!";
    
    // se resetea el formulario
    form.reset();

    // vuelve a desactivar comunas
    selComuna.disabled = true;
  });
});
