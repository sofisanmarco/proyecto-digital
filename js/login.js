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