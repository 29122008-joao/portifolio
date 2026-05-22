document.addEventListener("DOMContentLoaded", () => { // Garante que o código só rode após o HTML carregar completamente

    const btnInstagram = document.getElementById("btn-instagram"); // Captura o elemento onde está escrito Instagram
    const btnGithub = document.getElementById("btn-github");       // Captura o elemento do botão do GitHub

    btnInstagram.addEventListener("click", () => {
        console.log("Redirecionando para o seu Instagram...");     // Registra no console quando o botão Instagram for clicado
    });

    btnGithub.addEventListener("click", () => {
        console.log("Redirecionando para o seu GitHub...");        // Registra no console quando o botão GitHub for clicado
    });

});