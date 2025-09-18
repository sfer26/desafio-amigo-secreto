let amigos = []

// Função de mensagem inicial pra usar depois de mensagens de alertas
function exibirMensagemInicial() {
exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}

// Pegar o id do botão 'Adicionar', fazer as vericações e depois dar push no array
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
// Verifica se o campo não está vazio. E mostra uma mensagem
    if (nome == '') {
        exibirTextoNaTela('h2', 'Por favor, digite um nome para adicionar');
        return; // PARA a função. Assim o espaço em branco não entra no array
    } else {
        exibirMensagemInicial();
    }
// Verifica se o nome já está na lista e emite a mensagem
    if (amigos.includes(nome)) {
        exibirTextoNaTela('h2', `O nome ${nome} já foi adicionado. Escreva outro nome, por favor.`);
        limparCampo();
        return; 
    } else {
        exibirMensagemInicial();
    }
    // Leva o nome para o array
    amigos.push(nome); 
    limparCampo();
    // Mostrar na tela a lista de amigos
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = amigos.join(' - '); // Usando join para informar como quero que trate as strings

}

// Função para mensagem na tela e facilitar o uso no código (DRY)
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  return; 
}

function limparCampo() {
  let campoParaLimpar = document.querySelector('input');
  // Linha inteira está simplesmente pegando o valor do campo de input e substituindo-o por nada
  // Limpando o campo de forma eficaz
  campoParaLimpar.value = ''; 
}

function sortearAmigo() {
// validação: Verifica se tem pelo menos 3 amigos para sortear
    if (amigos.length < 3) {
        exibirTextoNaTela('h2', 'Você precisa adicionar 3 amigos para sortear');
        return;
    } else {
        embaralharFY(amigos);
    }
}
 
function embaralharFY(lista) {
    for (let i = lista.length-1; i > 0; i--){
        // sorteio um nome para a troca e guardo na variavel j 
        const j = Math.floor(Math.random() * (i + 1)); // sorteia entre 0 e 1
        let temp = lista[i]
        lista[i] = lista[j]
        lista[j] = temp
}
// Fazer as duplas do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa a tela para o novo sorteio
    for (let i = 0; i < amigos.length-1; i++) {
        resultado.innerHTML += `<li>${amigos[i]} &rarr; ${amigos[i+1]}</li>`;
    }

    resultado.innerHTML += `<li>${amigos[amigos.length - 1]} &rarr; ${amigos[0]}</li>`;
}





