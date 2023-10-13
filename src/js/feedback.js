const formulario = document.querySelector(".formulario-de-feedback");

document.getElementById("botao-abrir-feedback").addEventListener("click", function() {
    event.preventDefault();
    formulario.classList.add("feedback-aberto");
});

document.getElementById("botao-fechar-feedback").addEventListener("click", function() {
    event.preventDefault();
    formulario.classList.remove("feedback-aberto");
});

function mostrarPopup() {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = "Feedback Enviado com Sucesso!";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    popup.style.padding = "20px";
    popup.style.zIndex = "3";
    const popupBackground = document.createElement("div");
    popupBackground.className = "popup-background";
    popupBackground.style.position = "fixed";
    popupBackground.style.top = "0";
    popupBackground.style.left = "0";
    popupBackground.style.width = "100%";
    popupBackground.style.height = "100%";
    popupBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    popupBackground.style.zIndex = "2";
    document.body.appendChild(popupBackground);
    document.body.appendChild(popup);
};

document.getElementById("botao-enviar-feedback").addEventListener("click", function(event) {
    const nomeInput = document.querySelector(".nome-feedback");
    const emailInput = document.querySelector(".email-feedback");
    const assuntoInput = document.querySelector(".assunto-feedback");
    const descricaoInput = document.querySelector(".descricao-feedback");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (
        nomeInput.value.trim() !== "" &&
        emailRegex.test(emailInput.value.trim()) &&
        assuntoInput.value.trim() !== "" &&
        descricaoInput.value.trim() !== ""
    ) {
        mostrarPopup();
    }
});