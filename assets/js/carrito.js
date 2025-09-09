
// esperamos el HTML
document.addEventListener("DOMContentLoaded", () => {

  // se selecciona los productos del carro, el carrito item es la clase 
  // que definidos en el HTML para el item mostrado
  const items = document.querySelectorAll(".carrito-item");
  // para mostrar el total de objteos y su numero de cuanto sale el total
  const totalEl = document.getElementById("carrito-total");

  // para calcular plata en CLP y el formato
  const fmtCLP = new Intl.NumberFormat("es-CL", { 
    style: "currency", 
    currency: "CLP", 
    maximumFractionDigits: 0 });

  // funcion que sirve para calcular el total
  function actualizarTotal() {
    // primero parte de 0
    let total = 0;

    // por cada item ejecuta lo siguiente
    items.forEach((item) => {
        // calcula el precio segun el item como un numero entero pasando de string a int
      const precio = Number(item.dataset.price);
      // busca el input de la cantidad del numero para tomar ese valor
      const qty = Number(item.querySelector(".input-cant").value);
      // con el valor del precio y la cantidad calcula el total realizando la suma
      // del total el cual seria el precio x la cantidad
      total += precio * qty;
    });

    // lo entrega en formato CLP
    totalEl.textContent = fmtCLP.format(total);
  }

  // pro cada producto del carro linkea el boton de mas y menos
  items.forEach((item) => {
    // define el input de la cantidad o el numero de items
    const input = item.querySelector(".input-cant");
    // boton de mas
    const btnMas = item.querySelector(".btn-cant.mas");
    // boton de menos
    const btnMenos = item.querySelector(".btn-cant.menos");

    // define la funcion que hace el boton de mas
    btnMas.addEventListener("click", () => {
        // suma uno o si esta vacio reemplaza con 0
      input.value = Number(input.value || 0) + 1;
      // actualiza el total
      actualizarTotal();
    });

    // define el boton dem menos
    btnMenos.addEventListener("click", () => {
    // se define una variable n que tiene como numero minimo el 0
    // y permite reducir esta de 1 en 1
      const n = Math.max(0, Number(input.value || 0) - 1);
      input.value = n;
      actualizarTotal();
    });

    input.addEventListener("input", () => {
      //intento de corregir variables menores a 1, si queda
      // menor a uno entonces se remplaza por 1
      if (input.value === "" || Number(input.value) < 1) input.value = 1;
      actualizarTotal();
    });
  });

  // Cuadrar el total al cargar
  actualizarTotal();

  /*
  //  boton de cupon, busca el elemento de nombre btn-cupon
  const btnCupon = document.getElementById("btn-cupon");
  // si el comun es usado entonces se envia el mensaje
  if (btnCupon) {
    btnCupon.addEventListener("click", () => {
      cuponMensaje.classList.remove("error", "oculto");
      cuponMsg.textContent = "Cupón aplicado: 10% de descuento.";
    });
  }
  */  
});
