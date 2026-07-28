const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const telefone = "996830631"; // ← COLOCA SEU NÚMERO AQUI (com DDD)

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgCodificada = encodeURIComponent(texto);

    const link = `https://wa.me/${telefone}?text=${msgCodificada}`;

    window.open(link, "_blank");
});
// ANIMAÇÃO AO SCROLL

const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("ativo");
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((el) => observer.observe(el));
