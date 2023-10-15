const formulario = document.querySelector(".formulario-de-adicionar-foto");

document.getElementById("botao-abrir-adicionar-foto").addEventListener("click", function() {
    event.preventDefault();
    formulario.classList.add("formulario-adicionar-foto-aberto");
});

document.getElementById("botao-fechar-adicionar-foto").addEventListener("click", function() {
    event.preventDefault();
    formulario.classList.remove("formulario-adicionar-foto-aberto");
});

function mostrarPopup() {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = "Recomendação Enviada com Sucesso!";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    popup.style.padding = "20px";
    popup.style.zIndex = "5";
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

document.getElementById("botao-enviar-adicionar-foto").addEventListener("click", function(event) {
    const nomeInput = document.querySelector(".nome-adicionar-foto");
    const emailInput = document.querySelector(".email-adicionar-foto");
    const tituloInput = document.querySelector(".titulo-adicionar-foto");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (
        nomeInput.value.trim() !== "" &&
        emailRegex.test(emailInput.value.trim()) &&
        tituloInput.value.trim() !== "" 
    ) {
        mostrarPopup();
    }
});