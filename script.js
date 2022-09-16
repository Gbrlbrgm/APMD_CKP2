function Card(filme) {
    let card = document.createElement("div")
    card.classList.add("card")

    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "Poster do filme " + filme.titulo

    let titulo = document.createElement("p")
    titulo.innerText = filme.titulo

    let divNota = document.createElement("div")
    divNota.classList.add("nota")

    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"

    let nota = document.createElement("span")
    nota.innerText = filme.nota

    divNota.appendChild(estrela)
    divNota.appendChild(nota)

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "Detalhes"
    botao.href = filme.botao


    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

const dados =
    [{
        poster: "https://br.web.img3.acsta.net/pictures/22/06/23/21/10/1998178.jpg",
        titulo: "O Telefone Preto",
        nota: "7,3",
        botao: "detalhes/detalhes.html"
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BNDJkNGM4YTUtZjhhYy00OTE1LWJhZDUtMjRkMTU2NTg4MTEyXkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_.jpg",
        titulo: "Não! Não Olhe!",
        nota: "7,0",
        botao: "#"
    },
    {
        poster: "https://br.web.img2.acsta.net/c_310_420/pictures/22/07/13/17/20/2336764.png",
        titulo: "Órfã 2: A Origem",
        nota: "6,0",
        botao: "#"
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        titulo: "O Senhor dos Anéis: As Duas Torres",
        nota: "8,8",
        botao: "#"
    }]

let filmes = document.querySelector("#filmes")
dados.forEach((filme) => { filmes.appendChild(Card(filme)) })

let series = document.querySelector("#series")
dadosSeries.forEach((serie) => { filmes.appendChild(Card(filme)) })
