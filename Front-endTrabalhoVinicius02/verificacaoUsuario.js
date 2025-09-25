function verificarUsuarioLogado() {
    const usuarioLogado = sessionStorage.getItem("usuarioLogado")
    if (!usuarioLogado) {
        alert("Por favor, faça o login para acessar esta página.")
        window.location.href = "../Login/indexLogin.html"
        return;
}
}

verificarUsuarioLogado();

const boasVindas = document.getElementById("boasVindas");
const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
boasVindas.innerText = `Essa é Nigth City, ${usuarioLogado.usuario} aproveite!`;

const logOut = document.getElementById("logOut");
logOut.addEventListener("click", () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "../Login/indexLogin.html";
});
