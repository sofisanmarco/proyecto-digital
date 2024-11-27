const recetas = document.querySelector('.recetitas') 
let recetin = ''  
let cargar = 0

function getData(){
    fetch(`https://dummyjson.com/recipes?limit=10&cargar=${cargar}`)
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
                    <p> Nivel de dificultad: <span class="negrita"> ${right.difficulty} </span> </p>
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
}


const form = document.querySelector("form")

const search = document.getElementById("search")
const Invalidsearch = document.querySelector(".search")

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

getData() //invocamos a la funcion por primera vez

let load = document.querySelector(".load")

load.addEventListener('click', function(e){
    e.preventDefault()
    cargar += 10
    getData()
});
