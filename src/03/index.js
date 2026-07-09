const ValorTenis = 129.99;
const dinheiroRestou = 80.00;

const valorDesconto = ValorTenis - dinheiroRestou;

const porcentagemDesconto = (valorDesconto * 100) / ValorTenis;

console.log("Eu vou precisar de um desconto de " + porcentagemDesconto.toFixed(1) + "% para comprar o tênis.");
