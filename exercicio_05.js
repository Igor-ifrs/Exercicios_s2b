/*
5. Escreva uma função min(x,y) que devolve o menor entre dois números. Não use funções auxiliares de Math.
na verdade não entendi o enunciado
*/

let min = function (x, y) {
    let resultado = 0;
    if (x > y) {
        resultado = y;
    } else {
        resultado = x;
    }
    return console.log(`O menor valor entre ${x} e ${y} é (${resultado})`);
    /*Acredito que não é essa a solução!*/
}
let r1 = min(9, 124);
let r2 = min(124, 9);
let r3 = min('a', 'b');