// Selección de elementos del DOM
const calcularBtn = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

calcularBtn.addEventListener("click", () => {
  // Obtener valores de los inputs
  const sticker1 = parseInt(document.querySelector("#sticker1").value) || 0;
  const sticker2 = parseInt(document.querySelector("#sticker2").value) || 0;
  const sticker3 = parseInt(document.querySelector("#sticker3").value) || 0;

  // Sumar los valores
  const totalStickers = sticker1 + sticker2 + sticker3;

  // Mostrar el resultado según la cantidad total
  if (totalStickers <= 10) {
    resultado.textContent = `Llevas ${totalStickers} stickers.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Llevas demasiados stickers.";
    resultado.style.color = "red";
  }
});
