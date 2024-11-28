const form = document.querySelector("#login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")

const Invalidemail = document.querySelector(".email")
const Invalidpassword = document.querySelector(".password")



form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let errors = false

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
        form.submit();
    }
})

const header = document.querySelector("#header-form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".invalido")

let errors = false

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