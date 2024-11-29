const categorias = document.querySelector('.categories') 
let type = ''  

fetch('https://dummyjson.com/recipes/tags')
    .then(function(response){
        return response.json();
})
    .then(function(data){
        
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
        }
          
        }})
        .catch(function (){
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
      
        