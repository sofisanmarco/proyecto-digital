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
    .catch(function(){
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
