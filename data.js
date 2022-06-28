let usu = document.querySelector(".usu")
let contra = document.querySelector(".contra")
let btn = document.querySelector(".btn-enviar")
let mensaje = document.querySelector(".mensaje")

btn.addEventListener("click", e => {
    e.preventDefault()
    if(contra.value !== "capo") {
        mensaje.textContent = "Contraseña Incorrecta"
        mensaje.classList.add("red")
    } else if(usu.value !== "capo") {
        mensaje.textContent = "Usuario Incorrecta"
        mensaje.classList.add("red")
    } else {
        mensaje.textContent = "Bienvenido"
        mensaje.classList.add("green")
    }
    
})



