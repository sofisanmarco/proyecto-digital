let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get('id')

const nombreReceta = document.querySelector(".nombre")
const tiempo = document.querySelector(".tiempo")
const instrucciones = document.querySelector(".instrucciones")
const categorias = document.querySelector(".categorias")
const foto = document.querySelector(".foto")

let detalleReceta = {
    nombre: '',
    tiempo: '',
    instrucciones: '',
    categorias: '',
    foto: ''
}

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(response){
        return response.json();
    })  
    .then(function(data){

        detalleReceta.nombre = data.name
        detalleReceta.tiempo = data.cookTimeMinutes
        detalleReceta.instrucciones = data.instructions
        detalleReceta.categorias = data.tags
        detalleReceta.foto = data.image

        nombreReceta.innerText = detalleReceta.nombre
        tiempo.innerText = `${detalleReceta.tiempo} min.`
        instrucciones.innerText = `${detalleReceta.instrucciones}`
        foto.innerHTML = `<img weight="500px" height="500px" src=${detalleReceta.foto}>`
        categorias.innerText = `${detalleReceta.categorias}`

    })
    .catch(function(){
    })

const form = document.querySelector("#header-form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".invalido")

let errors = false

form.addEventListener("submit", function() {

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