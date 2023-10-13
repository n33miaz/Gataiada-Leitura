const formulario = document.querySelector(".formulario-de-feedback");

document.getElementById("botao-abrir-feedback").addEventListener("click", function() {
    event.preventDefault();
    formulario.classList.add("feedback-aberto");
});

document.getElementById("botao-fechar-feedback").addEventListener("click", function() {
    event.preventDefault();
    formulario.classList.remove("feedback-aberto");
});