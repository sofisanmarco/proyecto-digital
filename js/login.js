const form = document.querySelector("#login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")

const Invalidemail = document.querySelector(".email")
const Invalidpassword = document.querySelector(".password")

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let errors = false

    if (email.value === "") {
        alert("Por favor complete el campo email")
        errors = true
    } else {
        Invalidemail.style.display = 'none'
    }

    if (password.value === "" || password.value.length < 3) {
        alert("Por favor complete el campo contraseña")
        errors = true
    } else {
        Invalidpassword.style.display = 'none'
    }
    
    if (!errors) {
        form.submit();
    }
})


const header = document.querySelector("#header-form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".invalido")

header.addEventListener("submit", function() {

    if (search.value == "" || search.value.length < 3) {
        Invalidsearch.innerText = "El término buscado debe tener minimo 3 caracteres"
        Invalidsearch.style.display = 'block';
    } else {
        header.submit
    }
    
})

