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
        console.log(data)

        detalleReceta.nombre = data.name
        detalleReceta.tiempo = data.cookTimeMinutes
        detalleReceta.instrucciones = data.instructions
        detalleReceta.categorias = data.tags
        detalleReceta.foto = data.image

        nombreReceta.innerText = detalleReceta.nombre
        tiempo.innerText = `${detalleReceta.tiempo}`
        instrucciones.innerText = `${detalleReceta.instrucciones}`
        categorias.innerText = `${detalleReceta.categorias}`
        foto.innerHTML = `<img weight="500px" height="500px" src=${detalleReceta.foto}>`

    })
    .catch(function(e){
        console.log(e)
    })