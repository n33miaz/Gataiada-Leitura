const resenhas = [
    {
        id: 1,
        imagem: "all-for-the-game.jpg",
        titulo: "All for the Game",
        descricao: "A cada patada do personagem principal Neil, eu ficava em êxtase, me arrepiava. Me estressava com tantas problemas que ele passava mas tudo era recompensado com as migalhas de romance entre Neil e Andrew. Ficava chocada com o quanto Neil pode ser tapado em alguns assuntos e tão sagaz em outros. O time foi conquistando tanto Neil quanto eu, amava todos com o decorrer do livro e odiava seus aniversários. Resumindo, não tem como descrever esse livro em uma só sensação, recomendo para todos.",
        linkLerMais: "https://www.tumblr.com/n33miaz-blog/732120185872498688/resenha-all-for-the-game?source=share",
        linkBaixar: "https://drive.google.com/drive/folders/1mFlXTKe5ivvZxU8xffD02bZPZ6mNULEg?usp=drive_link",
    },
    {
        id: 2,
        imagem: "aristoteles-dante.jpg",
        titulo: "Aristóteles e Dante descobrem os Segredos do Universo",
        descricao: "Foi um livro que me marcou bastante, principalmente por causa do personagem principal. Ele está na adolescência, descobrindo novas emoções e tentando aprender a lidar com elas, e é um personagem solitário. Acabei me vendo um pouco nele. Ele descrevia emoções que eu mesma não sabia descrever, e lendo, descobri que as emoções que ele descrevia, era o mesmo que eu sentia. Enfim, esse livro é ótimo e recomendo a leitura.",
        linkLerMais: "https://www.tumblr.com/n33miaz-blog/732120281790955520/resenha-arist%C3%B3teles-e-dante?source=share",
        linkBaixar: "https://drive.google.com/drive/folders/1a9b6hWm0tvtOhChQ0wZHCQHxEThUu3pj?usp=drive_link",
    },
    {
        id: 3 ,
        imagem: "todas-as-suas-imperfeicoes.jpg",
        titulo: "Todas as suas (Im)Perfeições",
        descricao: "Até gostei da história, achei legal ela abordar temas importantes, o qual não é muito discutido, principalmente nestes livros de romances. mas esse final foi??? do nada ela está super mal e aí lê algumas cartas e fim, está curada em um passe de mágica. ela precisa de terapia!!! mas não, foi retratado que não importa o que aconteça o amor dele por ela é tão grande que ao ler sobre isso ela se cura, e deixa pra trás DO NADA o que ela sentia em relação a si mesma, e sobre maternidade. não, não, não. dava pra usar tão bem este tema, e dar um belo de um final. tudo bem, eles ficarem juntos e tals, e ela aceitar que as coisas são como são, mas após um tempo para assimilar isso, e com TERAPIA. ela estava super depressiva, e a colleen quer mesmo enfiar na história que umas cartinhas de amor curam tudo???? nao more nao apesar disto, gostei da história, o graham é um querido, que em diversos momentos me fez pensar que sim, ele merece coisa melhor, e deveria largar a quinn logo. porque ô mulher insuportável, entendo a dor dela e tals, mas em diversos momentos ela foi bem chata. o romance achei beeem rapido, e confesso que diversos momentos foram super desconfortaveis, ainda mais pq eles NAO se conheciam, tipo invadir o chuveiro como se estivesse tudo normal. tipo assim, ELES NAO SE CONHECIAM. mas ele foi um querido maaais pra frente. enfim, acho que é isso",
        linkLerMais: "https://www.tumblr.com/n33miaz-blog/732120332062818304/resenha-todas-as-suas-imperfei%C3%A7%C3%B5es?source=share",
        linkBaixar: "https://drive.google.com/drive/folders/1vNJjPvDwyyXgCjZsplBwC-eXbccKiWkd?usp=drive_link",
    },
];

for (const livroResenha of resenhas)
{
    const livro = 
    `<div class="resenha-${livroResenha.id}">
        <img src="./src/assets/img-resenhas/${livroResenha.imagem}" alt="capa do livro: ${livroResenha.titulo}">
        <h3>${livroResenha.titulo}</h3>
        <div class="texto">
            <p>${livroResenha.descricao}</p>
        </div>
        <div class="botoes-resenha">
            <button id="ler-mais"><a href="${livroResenha.linkLerMais}" target="_blank"><strong>Ler Mais</strong></a></button>
            <button id="baixar"><a href="${livroResenha.linkBaixar}" target="_blank"><strong>Baixar</strong></a></button>
        </div>
    </div>`;

    document.getElementById("secao-resenhas").innerHTML += livro;
}