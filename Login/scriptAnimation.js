const openDialog = document.getElementById("openDialog")

openDialog.addEventListener("click", (()=>{
    
    const dialogLogin = document.getElementById("dialogLogin")
    dialogLogin.showModal()
    dialogLogin.style.display = "flex"

    setTimeout(() => {
        dialogLogin.classList.add("show");
    }, 1);

    setTimeout(() => {
        openDialog.classList.add("hidden");
    }, 1);
}))