const categorias = document.querySelector('.categories') 
let type = ''  

fetch('https://dummyjson.com/recipes/tags')
    .then(function(response){
        return response.json();
})
    .then(function(data){
        console.log(data)
        
        for (let i = 0; i < data.length; i++) {
            let tag = data[i]; 
            let markUp = `
                <article class="cat">
                 <p class="veinte"><a class="categoriescolor" href="category.html?id=${tag}">${tag}</a></p>
                </article>
                `;
            type += markUp;   
        categorias.innerHTML = type;
        const ratonarriba = document.querySelectorAll(`.veinte`);
        for (let i =0; i<ratonarriba.length; i++){
            let raton =ratonarriba[i]
            raton.addEventListener('mouseover', function(){
                raton.style.color = 'white';
    
            
            });
            let ratin =ratonarriba[i]
            ratin.addEventListener('mouseout', function(){
                ratin.style.color = '';
                
        
            });

       // const colores = document.querySelectorAll('.categoriescolor')
       // for (let i=0; i<colores.length; i++){
          //  let color = colores[i]
          //  color.addEventListener('mouseover', function(){
                //color.style.color = '#ae2012';

          //  });
           // let nocolor = colores[i]
          //  nocolor.addEventListener('mouseover', function(){
               // nocolor.style.color = '';

         //  });

       ///}

            
        }
          
        }})
        .catch(function (error){
            console.log("Mi error fue", error);
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
      
        