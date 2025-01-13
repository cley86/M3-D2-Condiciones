// Seleccionar la imagen
const imagen = document.querySelector("#imagen");

// Agregar evento de click a la imagen
imagen.addEventListener("click", () => {
  // Verificar si la imagen ya tiene un borde
  if (imagen.style.border) {
    // Quitar el borde
    imagen.style.border = "";
  } else {
    // Agregar el borde
    imagen.style.border = "2px solid red";
  }
});
