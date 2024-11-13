//Manipulação dos objetos DOM (Document Object Model)
//Representação de dados dos objetos que compõem uma estrutura e o conteúdo de um documento web 

//Essencial para manipular e interagir com elementos de uma página
// Document.querySelector()
//Exemplo: 
const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado'; // Modifica o texto do elemento
//Uso principal: Buscar e modificar elementos HTML 

// Document.createElement()
//Cria novos elementos dinamicamente
//Exemplo:
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);
//Uso principal: adicionar novos elementos ao DOM

// addEventListener()
//Funções que lidam com interações dos usuários 
//Sua fubnção é adicionar um ouvinte para eventos ()

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert('Botão Clicado!');
}
);
//Uso principal: Criar interatividade, como cliques ou movimento do mouse

// setTimeout()
//Controlam uma função após um período de tempo (unidade de medida > Milisegundos)

setTimeout(() => {
    alert('Executado após 2 segundos!');
}, 2000);
//alert : executa o toString do objeto e apresenta em tela
//Já o consele.log: registra a informação no console do navegador, ficando restrita ao conhecimento do desenvolvedor  
//Uso principal: atrasar execuções ou criar temporizadores 

//Aula JavaScript > DOM e Functions

