const confirmar = document.getElementById("confirmar")



confirmar.addEventListener("click", (()=> {
    const password = document.getElementById("Password").value
    const password2 = document.getElementById("confirmPassword").value
    const email = document.getElementById("Email").value
    const usuario = document.getElementById("Usuario").value
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
    }
    
}))

  