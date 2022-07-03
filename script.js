//Desafio 5 - Vai na Web - Estrutura de Dados Complexos - Array

// 1 - Crie um array que receba 5 itens e exiba no console.
// 2 - Utilize um método para adicionar um nome ao inicio do array.
// 3 - Utilize um método para remover o último nome do array.
// 4 - Utilize um método para adicionar dois nomes ao fim do array.
// 5 - Utilize um método para remover o primeiro nome do array.
// 6 - Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]


console.log("==========1=====cinco itens=============");
// 1 - Crie um array que receba 5 itens e exiba no console.

let almoço = ["Arroz", "Feijão", "Bife", "Batata-frita", "Farofa"];
console.log(almoço);



console.log("==========2=====adic inicio===========");
// 2 - Utilize um método para adicionar um nome ao inicio do array.

almoço.unshift("Salada");
console.log(almoço);


console.log("=========3====remove o ultimo=============");
// 3 - Utilize um método para remover o último nome do array.

almoço.pop();
console.log(almoço);


console.log("==========4=======dois no fim==============");
// 4 - Utilize um método para adicionar dois nomes ao fim do array.

almoço.push("Farofa", "Refri");
console.log(almoço);


console.log("==========5======remove primeiro========");
// 5 - Utilize um método para remover o primeiro nome do array.
almoço.shift();
console.log(almoço);


console.log("==========6======ordem crescente========");
// 6 - Utilize um método para organizar em ordem crescente o seguinte array:
let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4,]
numeros.sort(function(a, b){
     return a - b
})
console.log(numeros);


console.log("===============fim=======:-)==============");