const categorias = document.querySelector('.categories') 
let type = ''  

fetch('https://dummyjson.com/recipes/tags')
    .then(function(response){
        return response.json();
})
    .then(function(data){
        console.log(data)
            
            let markUp = `
                <article class="cat">
                <p>${data}</p>
                </article>
                `;
            type += markUp;
    
        categorias.innerHTML = type;
        })
        .catch(function (error){
            console.log("Mi error fue", error);
        })

    