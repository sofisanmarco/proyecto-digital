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
                <article class="right">
                    <img class="imagen" src= ${right.image} >
                    <div class = parrafo>
                    <p> Name: ${right.name} </p>
                    <p> Nivel de dificultad: ${right.difficulty} </p>
                    <a href=receta.html?id=${right.id}> Mas detalle </a>
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
