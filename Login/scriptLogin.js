const login = document.getElementById("login")

login.addEventListener("click", (()=>{
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(usuario === "" || password === ""){
        window.alert("Porfavor preencha todos os campos")
        return;
    }

    let encontrarUsuario = null;
    for(let i = 0;i < usuarios.length; i++){
        if(usuarios[i].usuario === usuario){
            encontrarUsuario = usuarios[i];
            break;
        }
    }

    if(encontrarUsuario === null){
        window.alert("Usuario não encontrado")
        return;
    }

    if(encontrarUsuario.password !== password){
        window.alert("Senha invalida")
        return;
    }

    sessionStorage.setItem("usuarioLogado", JSON.stringify(encontrarUsuario))
    window.location.href = "../Front-endTrabalhoVinicius02/index.html"



    
}))

