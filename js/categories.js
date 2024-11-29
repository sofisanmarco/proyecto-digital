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
        const colorinche = document.querySelectorAll(`.veinte`);
        for (let i =0; i<colorinche.length; i++){
            let colorin =colorinche[i]
            colorin.addEventListener('mouseover', function(){
                colorin.style.fontSize = '25px';
                colorin.style.backgroundColor = 'white';
                colorin.style.border = 'pink 2px solid';
                colorin.style.borderRadius = '3px';
    
            
            });
            let colorout =colorinche[i]
            colorout.addEventListener('mouseout', function(){
                colorout.style.fontSize = ''
                colorout.style.backgroundColor= '';
                colorout.style.border = '';
                colorout.style.borderRadius = '';

                
        
            });
        }
          
        }})
        .catch(function (){
        })

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
      
        