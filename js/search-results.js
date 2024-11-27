let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let buscar = queryStringObj.get("search")
let search = document.querySelector(".recetitas")
let recets = ""

console.log(buscar)
fetch(`https://dummyjson.com/recipes/search?q=${buscar}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data.recipes)

    for (let i=0; i < data.recipes.length; i++){
        let right = data.recipes[i];
        
        let markUp = `
            <article class="receta">
                <img width="300px" height="300px" src= ${right.image}>
                <p> Name: ${right.name} </p>
                <p> Nivel de dificultad: ${right.difficulty}  </p>
                <a href=receta.html?id=${right.id}> Mas detalle </a>
            </article>
            `;
        recets += markUp;
    }
    search.innerHTML = recets;
    })
    .catch(function (error){
        console.log("Mi error fue", error);
    })
