let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let q = queryStringObj.get("search")

console.log(q)
fetch(`https://dummyjson.com/recipes/search?q=${q}`)
.then(res => res.json())
.then(console.log);
