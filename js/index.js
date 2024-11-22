const recetas = document.querySelector('.recetitas') 
let recetin = ''  

fetch('https://dummyjson.com/recipes')
    .then(function(response){
        return response.json();
})
    .then(function(data){
        console.log(data.recipes)

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
        .catch(function (error){
            console.log("Mi error fue", error);
        })

