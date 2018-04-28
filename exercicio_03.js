/*
3. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros
não-negativos inicio e fim. Utilize versões com for e while.
*/

let se_par = function (inicio, fim) {
    let i = inicio; 
    let pares = [];
    while (i <= fim) {
        if (i % 2 === 0) {
            pares.push(i);
        }
        i++;
    }
    console.log(`Os  numeros pares entre (${inicio},${fim}) são ${pares}`);
}
se_par(81, 165)

let se_par2 = function (inicio, fim) {
    let i = inicio;
    let pares = [];
    for (i; i <= fim; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    console.log(`Os  numeros pares entre (${inicio},${fim}) são ${pares}`);
}
se_par2(10, 20)