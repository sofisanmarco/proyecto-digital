let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get('id')

const recetas = document.querySelector('.recetitas') 
let recetin = ''

fetch(`https://dummyjson.com/recipes/tag/${id}`)
    .then(function(response){
        return response.json();
    })  
    .then(function(data){
       // console.log(data)
        for (let i=0; i < data.recipes.length; i++){
            let right = data.recipes[i];
            
            let markUp = `
                <article class="right">
                    <img src= ${right.image} >
                    <p> Name: ${right.name} </p>
                    <p> Nivel de dificultad: ${right.difficulty} </p>
                    <a href=receta.html?id=${right.id}> Mas detalle </a>
                </article>
                `;
            recetin += markUp;
        }
        recetas.innerHTML = recetin;

    })
    .catch(function(e){
        console.log(e)
    })
