async function cargar(id, ruta) {
  const cont = document.getElementById(id);

  if (!cont) return; // si no existe el contenedor, termina
  const res = await fetch(ruta); // pide el archivo HTML (navbar.html / footer.html)
  cont.innerHTML = await res.text(); // inserta el HTML dentro del contenedor
}

document.addEventListener("DOMContentLoaded", () => {
  cargar("navbar", "navbar.html"); // coloca navbar.html dentro de site-navbar
  cargar("footer", "footer.html"); // coloca footer.html dentro de site-footer
});
