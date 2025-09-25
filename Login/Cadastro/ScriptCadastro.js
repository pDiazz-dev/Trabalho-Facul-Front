const confirmar = document.getElementById("confirmar")



function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

confirmar.addEventListener("click", (()=> {
    const password = document.getElementById("Password").value
    const password2 = document.getElementById("confirmPassword").value
    const email = document.getElementById("Email").value
    const usuario = document.getElementById("Usuario").value

    if(usuario === "" || email === "" || password === "" || password2 === ""){
        window.alert("Porfavor preencha todos os campos")
        return;
    }
    if(!validarEmail(email)){
        window.alert("Por favor, insira um email válido.");
        return;
    }
    if(password === password2){
        
        //Pega o localStorage que já existe ou cria um novo vazio se não tiver
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

        for(let i = 0;i < usuarios.length; i++){
            if(usuarios[i].usuario == usuario){
                window.alert("Este usuario já existe escolha outro nome!")
                return
            }
        }
        const novoUsuario = {
            usuario: usuario,
            email: email,
            password: password
        }
        

        usuarios.push(novoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))

        window.alert("Usuario cadastrado com sucesso!")
        window.location.href = "../indexLogin.html"
    }
    
}))

  