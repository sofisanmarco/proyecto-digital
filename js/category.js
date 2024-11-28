let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get('id')

const recetas = document.querySelector('.recetitas') 
const titulo = document.querySelector('.title')
let recetin = ''

fetch(`https://dummyjson.com/recipes/tag/${id}`)
    .then(function(response){
        return response.json();
    })  
    .then(function(data){
       // console.log(data)

       titulo.innerHTML = `Category: ${id}`;
    
        for (let i=0; i < data.recipes.length; i++){
            let right = data.recipes[i];
    
            
            let markUp = `
                <article class="caja">
                    <img class="imagen" src= ${right.image} >
                    <div class = "parrafo">
                    <p> Name: ${right.name} </p>
                    <p> Nivel de dificultad: ${right.difficulty} </p>
                    <a class="link" href=receta.html?id=${right.id}> <span class="det"> Mas detalle </span> </a>
                    </div>

                </article>
                `;
            recetin += markUp;
        }
        recetas.innerHTML = recetin;

    })
    .catch(function(e){
        console.log(e)
    })

const form = document.querySelector("#header-form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".invalido")

let errors = false

form.addEventListener("submit", function(event) {
    event.preventDefault();
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
