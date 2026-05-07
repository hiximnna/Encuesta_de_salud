const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

dolor.addEventListener("input", () => {
    valorDolor.textContent = dolor.value;
});

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    mensaje.textContent = "✅ Encuesta enviada correctamente";
});
