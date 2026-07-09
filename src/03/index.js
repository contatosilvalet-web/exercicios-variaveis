const ValorTenis = 129.99;
const dinheiroRestou = 80.00;

const valorDesconto = ValorTenis - dinheiroRestou;

const porcentagemDesconto = (valorDesconto * 100) / ValorTenis;

console.log("Eu vou precisar de um desconto de " + porcentagemDesconto.toFixed(0) + "% para comprar o tênis.");
