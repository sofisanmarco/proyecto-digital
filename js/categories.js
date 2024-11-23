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
                 <p><a class="categoriescolor" href="category.html?id=${tag}">${tag}</a></p>
                </article>
                `;
            type += markUp;   
        categorias.innerHTML = type;
        }})
        .catch(function (error){
            console.log("Mi error fue", error);
        })

    