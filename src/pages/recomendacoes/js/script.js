const recomendacoes = [
    {
        link: "https://drive.google.com/file/d/0B0_8Idwuhrt-ZjZmNjI5OWUtOWRlMC00ZGUyLTg3NTgtODRkZjQyYzNjNjgz/view?usp=sharing&resourcekey=0-OQbyRYu1pxB6DRoj6Bt6MA",
        imagem: "duna.jpg",
        titulo: "Duna (Frank Herbert)",
        descricao: "Em um futuro distante, Duna é uma epopeia repleta de intrigas políticas e desafios épicos no deserto, onde a jornada de Paul Atreides desvendará segredos cósmicos.",
    },
    {   
        link: "https://www.academia.edu/68295681/Pachinko_Min_Jin_Lee",
        imagem: "pachinko.jpg",
        titulo: "Pachinko (Min Jin Lee)",
        descricao: "Pachinko é uma emocionante saga familiar que atravessa décadas e continentes, explorando a força da família em face da discriminação e desafios culturais.",
    },
    {
        link: "https://dlivros.com/livro/sol-para-todos-harper-lee",
        imagem: "o-sol-e-para-todos.jpg",
        titulo: "O Sol é para Todos (Harper Lee)",
        descricao: "Nas profundezas do sul dos EUA, O Sol é para Todos é uma comovente exploração da justiça e do preconceito, contada pelos olhos perspicazes de Scout Finch, uma criança determinada.",
    }
];

for (const livroRecomendado of recomendacoes) 
{
    const livro = 
        `<div>
            <a href="${livroRecomendado.link}" target="_blank">
                <img src="../../assets/img-recomendacoes/${livroRecomendado.imagem}" alt="${livroRecomendado.titulo}">
            </a>
            <h6>${livroRecomendado.titulo}</h6>
            <p>${livroRecomendado.descricao}</p>
        </div>`;

    document.getElementById("secao-recomendacoes").innerHTML += livro;
}