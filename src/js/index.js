const botoes = document.querySelectorAll(".botao");
const personagens =document.querySelectorAll(".personagem")


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        botao.classList.add("selecionado")

        const botaoselecionado = document.querySelector(".botao.selecionado")
        botaoselecionado.classList.add("selecionado")

        botao.classList.add("selecionado")


        const personagemselecionado = document.querySelector(".personagem.selecionado")

        personagemselecionado.classList.remove("selecionado")

        personagens[indice].classList.add("selecionado")
    });

});



