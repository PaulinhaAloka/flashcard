function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'


cartao.innerHTML = `
<div class="cartao__conteudo">
        <h3 class="programacao">História</></h3>
        <div class="cartao__conteudo__pergunta">
            <p>Quem foi o primeiro homem a pisar na lua? E de que país ele era?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p> Neil Armstrong, Estados Unidos.</p>
        </div>
    </div>
`
container.appendChild(cartao)


}