const form = document.querySelector("#register-form")

const email = document.getElementById("email")
const password = document.getElementById("password")

const Invalidemail = document.querySelector(".email")
const Invalidpassword = document.querySelector(".password")

let errors = false

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (email.value === "") {
        Invalidemail.innerText = "Incompleto"
        Invalidemail.style.display = "block"
        errors = true
    } else {
        Invalidemail.style.display = 'none'
    }

    if (password.value === "" || password.value.length < 3) {
        Invalidpassword.innerText = "Incompleto"
        Invalidpassword.style.display = 'block'
        errors = true
    } else {
        Invalidpassword.style.display = 'none'
    }

    if (!errors) {
        this.submit
    }
})

const header = document.querySelector("#header-form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".invalido")

let error = false

header.addEventListener("submit", function() {
   
    if (search.value === ""){
        Invalidsearch.innerText = "Incompleto"
        Invalidsearch.style.display = 'block';
        errors = true
    } else {
        Invalidsearch.style.display = 'none'
    }
    if (search.value.length < 3){
        Invalidsearch.innerText = "El término buscado debe tener minimo 3 caracteres"
        Invalidsearch.style.display = 'block';
        errors = true
    } else {
        Invalidsearch.style.display = 'none';
    }

    if (!errors) {
        this.submit
    }
})