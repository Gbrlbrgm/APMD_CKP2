function Detalhes(elenco) {
    let atores = document.createElement("div")
    atores.classList.add("atores")

    let foto = document.createElement("img")
    foto.src = elenco.foto
    foto.alt = "Foto de " + elenco.nome

    let nome = document.createElement("p")
    nome.innerText = elenco.nome

    let personagem = document.createElement("p")
    personagem.innerText = elenco.personagem

    atores.appendChild(foto)
    atores.appendChild(nome)
    atores.appendChild(personagem)

    return atores
}
const dados =
    [
        {
            foto: "https://image.tmdb.org/t/p/original/qLJm1n615JinCuizZSxbZiVtEr8.jpg",
            nome: "Mason Thames",
            personagem: "Finney"
        },
        {
            foto: "https://i.pinimg.com/564x/d3/0a/1b/d30a1b799ea36f6a85cd18265539eb70.jpg",
            nome: "Miguel Cazarez Mora",
            personagem: "Robin"
        }
    ]


let perfil = document.querySelector("#elenco")
dados.forEach((elenco) => { perfil.appendChild(Detalhes(elenco)) })
