let contra = document.querySelector(".contra")
let btn = document.querySelector(".btn-enviar")
let mensaje = document.querySelector(".mensaje")

btn.addEventListener("click", e => {
    e.preventDefault()
    if(contra.value !== "Bruno") {
        mensaje.textContent = "Contraseña Incorrecta"
        mensaje.classList.add("red")
    } else {
        mensaje.textContent = "Contraseña Correcta"
        mensaje.classList.add("green")
    }
})

