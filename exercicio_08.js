/*
8. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento
encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos
disponibilizados pelo JavaScript.
*/

const arr = [0, 5, 94, 4, 48, 20, 10, 89, 10, 44];
console.log(arr);
let getMax = function (array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }        
    }
    return maior 
}

let m1 = getMax(arr);

let m2 = Math.max(...arr);  // forma com objeto Math

let m3 = arr.reduce(function (a, b) {  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    return Math.max(a, b);
});

console.log(` O maior elemento encontrado no Array é (${m1})`);










