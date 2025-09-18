const login = document.getElementById("login")

login.addEventListener ("click" (()=>{
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    const usuario = document.getElementById("usuario")
    const password = document.getElementById("password")

    for(let i = 0;i < usuarios.length; i++){
        
    }
}))