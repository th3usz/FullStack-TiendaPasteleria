
// Espera a que el navegador termine de construir el DOM
document.addEventListener("DOMContentLoaded", () => {
    // busca y guarda las referencias de los elementos del HTML por su id
  const form = document.getElementById("form-login");
  const email  = document.getElementById("login-email");
  const pass   = document.getElementById("login-pass");
  const estado = document.getElementById("login-estado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    estado.classList.remove("oculto");
    estado.textContent = "";

    const correo = (email.value || "").trim();
    const clave  = pass.value || "";

    if (!correo) {
         estado.textContent = "Ingresa tu correo."; 
         email.focus(); return; 
        }
    if (!clave)  { 
        estado.textContent = "Ingresa tu contraseña."; 
        pass.focus();  return; 
    }

    const testEmail = "rparra@duoc.cl";
    const testPass  = "123456";

    if (correo === testEmail && clave === testPass) {
      estado.textContent = "Sesion iniciada";
      window.location.href = "./admin/admin.html";
    } else {
      estado.textContent = "Correo o contraseña incorrectos.";
    }
  });
});