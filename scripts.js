async function cargarFrases() {
  const respuesta = await fetch("frases.json");
  return await respuesta.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const frases = await cargarFrases();
  const btn = document.getElementById("btn");
  const frase = document.getElementById("frase");

  btn.addEventListener("click", () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    frase.textContent = aleatoria;
  });
});
