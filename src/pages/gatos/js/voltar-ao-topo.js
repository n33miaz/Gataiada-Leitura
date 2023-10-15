document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("voltar-ao-topo");

    window.onscroll = function () {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    btn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
});

