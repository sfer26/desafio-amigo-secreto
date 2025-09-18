# Desafio Amigo Secreto

![print_aplicacao_final](/assets/captura_de_tela_aplicacao_final.png)

Este repositório documenta o processo de criação de uma aplicação web interativa em para realizar sorteios de amigo secreto, conforme escopo do Desafio Final da Etapa ONE da Oracle Next Education. Com o objetivo de aplicar os ensinamentos dos primeiros cursos e módulos de Logica de Programação em JavaScript e Estilização com html e css.

---

## Tecnologias usadas
- JavaScript
- .html
- .css

---

A lógica do projeto foi executada pensando no fluxo de embaralhamento e sorteio que acontece na 'vida real' em amigo secreto de natal da família, firma, etc.

>  Você sorteia para ser sua dupla de troca de presentes e não ocorre repetição de nomes já que, assim que o papel é retirado da urna, não tem como ser sorteado novamente
<br/>

## 🚀 Como Executar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador de preferência

> [!TIP]
> Você pode também acessar o deploy da aplicação web aqui [Aplicação Web Desafio-AmigoSecreto](https://sfer26.github.io/desafio-amigo-secreto/)

<br/>

## **1. Estrutura Inicial e Adição de Participantes**

O projeto começou com a estruturação do HTML e a lógica inicial em JavaScript para capturar os nomes dos participantes.

- **Manipulação do DOM:** Foi estabelecida a conexão entre o JavaScript e os elementos HTML essenciais (`input` para nomes, `button` para adicionar, e `ul` para exibir a lista).
    
- **Gerenciamento de Lista:** Um array (`let amigos = []`) foi utilizado como a estrutura central para armazenar a lista de participantes.
    
- **Funcionalidade de Adição:** A função `adicionarAmigo()` foi criada para pegar o valor (`.value`) do campo de input e adicioná-lo ao array com o método `.push()`.
    
- **Exibição Dinâmica:** A lista de amigos era atualizada na tela em tempo real utilizando `innerHTML` e o método `.join()` para formatar a exibição dos nomes.

## **2. Implementação de Validações Robustas**

Para garantir a integridade do sorteio, foram implementadas validações cruciais na entrada de dados
- **Nomes em Branco:** Uma verificação (`if (nome == '')`) foi adicionada para impedir a adição de participantes sem nome.
- **Nomes Duplicados:** Utilizando `amigos.includes(nome)`, o sistema passou a barrar a inclusão de um mesmo nome mais de uma vez.   
- **Controle de Fluxo:** O comando `return;` foi um aprendizado chave, usado para interromper a execução da função imediatamente após um erro de validação, impedindo que dados inválidos fossem adicionados ao array.   
- **Feedback ao Usuário:** A interface foi aprimorada para exibir mensagens de erro dinâmicas, alterando o título `<h2>` da página para guiar o usuário. Uma função reutilizável, `exibirTextoNaTela()`, foi criada para essa finalidade.

## **3. O Coração do Sorteio: Algoritmo de Embaralhamento**
A parte mais complexa foi a implementação de uma lógica de sorteio justa e verdadeiramente aleatória.
- **Algoritmo Fisher-Yates Shuffle:** Este algoritmo clássico foi o escolhido por garantir que cada permutação possível da lista de amigos tivesse a mesma probabilidade de ocorrer.
- **Implementação:** A lógica foi construída dentro de uma função `embaralhar()`, utilizando um laço `for` que percorre o array de trás para frente, trocando o elemento atual por um elemento de posição aleatória anterior a ele. A troca foi feita utilizando uma variável temporária.
- **Validação do Sorteio:** Antes de embaralhar, a função `sortearAmigo()` verifica se há um número mínimo de participantes (ex: 3) para que o sorteio seja válido.
## **4. Formação dos Pares e Exibição do Resultado**

Com a lista devidamente embaralhada, o passo final foi definir os pares e mostrá-los na tela.
- **Lógica do "Círculo":** Para evitar duplas isoladas (ex: A tira B e B tira A), foi implementada uma lógica de "círculo", onde o primeiro da lista tira o segundo, o segundo tira o terceiro, e assim por diante, até que o último participante tire o primeiro, fechando o ciclo.
- **Geração de HTML Dinâmico:** O resultado foi construído dinamicamente dentro de um laço `for`. Para cada par, uma string contendo tags `<li>` era criada. 
- **Template Literals:** O uso de Template Literals (crases `` ` ``) e interpolação (`${...}`) foi fundamental para criar as strings de resultado de forma limpa e legível.
- **Operador `+=`:** O operador de atribuição de adição (`+=`) foi usado para acumular os resultados, adicionando cada novo par à lista na tela sem apagar os anteriores.

> [!TIP]
> O projeto foi concluído com sucesso, resultando em uma aplicação funcional, robusta e com uma experiência de usuário clara.
---

![Linkedin](https://www.linkedin.com/in/stellafern)
