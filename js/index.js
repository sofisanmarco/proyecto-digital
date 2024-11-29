const recetas = document.querySelector('.recetitas') 
let recetin = ''  
let loading = 0

function getData(){
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${loading}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        for (let i=0; i < data.recipes.length; i++){
            let right = data.recipes[i];
            
            let markUp = `
                <article class="receta">
                    <img width="300px" height="300px" src= ${right.image}>
                    <p> Name: ${right.name} </p>
                    <p> Nivel de dificultad: <span class="negrita"> ${right.difficulty} </span> </p>
                    <a class='eldetalle' href=receta.html?id=${right.id}> Mas detalle </a>
                </article>
                `;
            recetin += markUp;
        }
        recetas.innerHTML = recetin;
        })
        .catch(function (){
        })
}


const header = document.querySelector("#header-form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".invalido")

header.addEventListener("submit", function(e) {
    e.preventDefault()
    if (search.value == "" || search.value.length < 3) {
        Invalidsearch.innerText = "El término buscado debe tener minimo 3 caracteres"
        Invalidsearch.style.display = 'block';
    } else {
        header.submit()
    }
    
})

getData() 
let load = document.querySelector(".load")
load.addEventListener('click', function(e){
    e.preventDefault()
    loading += 10
    getData()
});
