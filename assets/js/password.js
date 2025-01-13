// Obtener los elementos del DOM
const verificarBtn = document.querySelector("#verificar");
const resultado = document.querySelector("#resultado");

verificarBtn.addEventListener("click", () => {
  // Obtener los valores seleccionados
  const digit1 = document.querySelector("#digit1").value;
  const digit2 = document.querySelector("#digit2").value;
  const digit3 = document.querySelector("#digit3").value;

  // Formar el password a partir de los valores seleccionados
  const password = digit1 + digit2 + digit3;

  // Validar el password
  if (password === "911") {
    resultado.textContent = "Password 1 correcto";
    resultado.style.color = "green";
  } else if (password === "714") {
    resultado.textContent = "Password 2 correcto";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Password incorrecto";
    resultado.style.color = "red";
  }
});
