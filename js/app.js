//O que acontecerá assim que abrir a página
let totalGeral;
limpar();

//Aqui não será preciso criar uma função que habilite ou desabilite os botões pois ela já foi declarada no HTML
function adicionar() {
    //Recuperar nome do produto, quantidade e valor
    //Puxado da id produto no HTML
    let produto = document.getElementById('produto').value;
    //O produto estava como Nome - R$Valor, então dividimos com .split para pegar só a primeira parte (o nome)
    let nomeProduto = produto.split('-') [0];
    //O produto estava como Nome - R$Valor, então dividimos com .split para pegar só a segunda parte (o valor)
    let valorUnitario = produto.split('R$') [1];
    //Aqui é o campo input quantidade de produtos
    let quantidade = document.getElementById('quantidade').value;
    
    //Calcular o preço subtotal = quantidade * seu valor unitário
    let subtotal = quantidade * valorUnitario;
    
    //Adicionar itens ao carrinho
    //Puxado o id da lista/carrinho no HTML
    let carrinho = document.getElementById('lista-produtos');
    //Como essa informação está como texto, é possível mudar tudo de uma só vez no HTML, fazendo uma concatenação
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`
    
    //Calcular o valor total
    //A variável totalGeral foi definida lá no início como 0, que será então adicionada ao valor dos itens do subtotal
    totalGeral = totalGeral + subtotal;
    //Puxado o id do valor total com o que estiver no carrinho
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    //Valor do input de quantidade, que se reseta a cada nova adição
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    //O botão limpar vai zerar o carrinho, o valor total e o total geral inicial
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

