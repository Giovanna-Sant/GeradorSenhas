//range de quantidade da senha
var rangeQuant = document.querySelector('#rangeQuantidade')
var outQuant = document.querySelector('#outQuant')
outQuant.innerHTML = rangeQuant.value

rangeQuant.oninput = function() {
    outQuant.innerHTML = this.value;
};

//range de tamanho da senha
var rangeTam = document.querySelector('#rangeTamanho')
var outTam = document.querySelector('#outTam')
outTam.innerHTML = rangeTam.value;

rangeTam.oninput = function() {
    outTam.innerHTML = this.value;
};

//gerar senha
const gerarSenha = document.querySelector('#gerar')

gerarSenha.addEventListener('click', function () {
    const quantidade = parseInt(document.querySelector('#rangeQuantidade').value)
    const tamanho    = parseInt(document.querySelector('#rangeTamanho').value)
    const maiusculas = document.querySelector('#maiusculas').checked
    const especiais  = document.querySelector('#especiais').checked
    const numeros    = document.querySelector('#numeros').checked

    let letras = 'abcdefghijklmnopqrstuvwxyzçãáó'

    if (maiusculas) letras += 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇÃÁÓ'
    if (numeros) letras    += '012345678901234567890123456789'
    if (especiais) letras  += '!@#$%^&*()_+=-,.?/<>~!@#$%^&*_'

    const senhas = [];

    for (let i = 0; i < quantidade; i++) {
        let senha = ""
        for (let j = 0; j < tamanho; j++) {
            const index = Math.floor(Math.random() * letras.length)
            senha += letras.charAt(index)
        }
        senhas.push(senha)
    }

    const senhaExibir =  senhas.join("\n");
    document.querySelector('#output').innerHTML = `<textarea disabled>${senhaExibir}</textarea>`
})

//botao para limpar
const limparInfos = document.querySelector('#limpar')

limparInfos.addEventListener('click', function () {
    
    document.querySelector('#rangeQuantidade').value = ""
    document.querySelector('#rangeTamanho').value = ""
    document.querySelector('#maiusculas').checked = false
    document.querySelector('#numeros').checked = false
    document.querySelector('#especiais').checked = false
    document.querySelector('#output').innerHTML = ""
})