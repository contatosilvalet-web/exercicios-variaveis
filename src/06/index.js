const numeroLados = 6;

const soma = (numeroLados - 2) * 180;

const angulo = soma / numeroLados;

console.log("O valor da soma dos ângulos internos S é: " + soma + "°");
console.log("O valor de cada ângulo do polígono a é: " + angulo.toFixed(0) + "°");
