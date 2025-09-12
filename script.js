// o que é um algoritmo?
// Um algoritmo é uma sequência de passos ou instruções que são seguidos para realizar uma tarefa ou resolver um problema. 

/* 
O que vamos fazer? 
1. colocar os produtos na tela 
[X]Saber quem são os produtos 
[X] Onde colocar os produtos na tela 
    [X]colocar os produtos na tela 
    [X]Estilizar os produtos 

2. Filtrar por categoria
[] Saber quem são os botões 
[]Quando um dos botões foram clicados
[]Qual botão foi clicado?
[]Filtrar por produtos daquela categoria
[]Deixar na tela só os produtos daquela categoria

3. Filtrar por nome 
[X] saber quem é o input 
[X] saber quando digitou algo no input 
[X]  saber o que foi digitado
[X] Filtrar os produtos de acordo com o que foi digitado
[X] deixar na tela só os produtos que correspondem ao filtro

*/
let meuArray = [1, 2, 3, 4, 5,6,7,8,9,10];


    let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400" ,
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" ,
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400" ,
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" ,
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400" ,
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" ,
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "accessories",
        preco: 2499,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400" ,
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400" ,
        descricao: "Notebook Windows premium"
    }
];



// Array de produtos
let containerProdutos = document.querySelector(".produtos-container");
// pra usar uma classe coloca . antes do nome da classe

let inputPesquisa = document.querySelector(".input-pesquisa");

let textoInput = ""

let todosBotoes = document.querySelectorAll(".botao-categorias")
//  All seria todos 

let categoria = "todos"
//  a variável categoria começa com todos, ou seja, mostra todos os produtos


// função para mostrar os produtos na tela
function mostrarProdutos() {

    // vamos guardar esses produtos em htmlProdutos
    let htmlProdutos = "";

// usaremos a função forEach como uma esteira de produtos trazendo os produtos 
    produtos.forEach(prd=>{

        // includes -> verifica se dois textos batem
        // prd.nome -> Macbook air -> includes (input) -> Macbook
//  se o prd.nome tiver a mesma coisa que o que foi digitado no input, ele mostra o produto
//  o toLocaleLowerCase() serve para deixar tudo em minúsculo e evitar problemas de comparação

        if (prd.nome.toLocaleLowerCase().includes(textoInput.toLocaleLowerCase())){

      if(prd.categoria == categoria || categoria == "todos"){
// || significa ou 
      

        // para mencionar os dados dentro dos objetos, usamos a sintaxe ${} e a cada passada da função  ele vai incluindo os outros objetos
        // estou guardando o htmlProduto que já tinha + o próximo htmlProduto, se não só ficará visível na página o último produto do loop
      htmlProdutos = htmlProdutos +`
      <div class="cartao-produto">
          <img src="${prd.imagem}" alt="${prd.nome}"  class="imagem-produto"/>
          <div class="info-produto">
            <h3 class="nome-produto">${prd.nome}</h3>
            <p class="descricao-produto">${prd.descricao}</p>
            <p class="preco-produto">R$${prd.preco}</p>
            <button class="botao-produto">Ver detalhes</button>
          </div>
           </div>
      `
      }
        }
    })
    // pega item por item do array, e para cada item cria-se um elemento HTML
    // o nome prd representa cada produto individualmente, é de sua escolha o nome 


 containerProdutos.innerHTML = htmlProdutos
    //  depois de terminar o array, informar onde mostrar os produtos no Html e isso usamos .innerHTML

}
mostrarProdutos()




    // função para saber quando digitou algo no input

function pesquisar () {
 textoInput = inputPesquisa.value

    // console.log("digitou algo")
/*     console.log(inputPesquisa.value)
    // value é o valor que está dentro do input, só vai mostrar o que foi digitado */

//  colocamos a função mostrarProdutos() para atualizar a lista de produtos toda vez que digitamos algo
    mostrarProdutos()
}
// Ferramenta Addeventlistener (ouvinte de eventos) ele serve como um fofoqueiro do código
//  toda vez que digitar algo no inpput ele vai chamar a função pesquisar 
//  o js sabe qual input estou me referindo porque criei a varável let inputPesquisa = document.querySelector(".input-pesquisa");

inputPesquisa.addEventListener("input", pesquisar)

/* 
criei uma varável inputPesquisa pra guardar o input
fiquei de olho no input para saber quando ele foi usado: pegando a variável inputPesquisa que criei e plugo nela o addEventListener

chamei uma função quando ele foi usado: quando digitar algo ele chama a função pesquisar 
Eu guardei o que foi digitado na variável textoInput o valor de inputPesquisa.value

*/



// configurando o filtro dos botões 

// Vamos usar o forEach que cria uma matriz e guarda todos os botões [botao,1, botao 2, botao 3 ....]
//  no forEach nos parenteses precisamos dar um nome botao para nomear a variável, como prd na função mostrar produtos
todosBotoes.forEach(botao=>{ 

        // vamos usar o addEventListener pra identificar qual botão foi clicado
        // podemos criar uma função ou chamar a função existente sem precisar escolher nome 
 botao.addEventListener("click", function(){



 categoria = botao.getAttribute("data-categoria")
//  o getAttribute serve para pegar o atributo que está no html, no caso data-categoria


// Mudar a cor dos botões quando for clicado 
// remove a classe ativo de todos os botões
todosBotoes.forEach(b => b.classList.remove("ativo"))

// adiciona a classe ativo ao botão clicado
botao.classList.add("ativo")

// vamos chamar a função mostrarProdutos() para atualizar a lista de produtos ao clicar no botão
mostrarProdutos()
})

})



