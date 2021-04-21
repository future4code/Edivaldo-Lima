const filme = {

}
    
const filmeArray = []
function adicionarPost () {
    post.titulo = document.getElementById("titulo-post").value;
    post.autor = document.getElementById("autor-post").value;
    post.conteudo = document.getElementById("conteudo-post").value ;

    let areaPost = document.getElementById("container-de-posts")
    areaPost.innerHTML += `<h1> ${post.titulo}</h1>`
    const inputTitulo = document.getElementById ("titulo-post")
    inputTitulo.value = ""

    areaPost.innerHTML += `<h2>${post.autor}</h2>`
    const inputAutor = document.getElementById("autor-post")
    inputAutor.value = ""

    areaPost.innerHTML += `<h2>${post.conteudo}</h2>`
    const conteudo = document.getElementById ("conteudo-post")
    inputConteudo.value = ""

    novoFilme.push(filmeArray)

    




}

