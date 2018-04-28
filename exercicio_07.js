/*
7. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s(assuma qualquer string não vazia) e
retorna a mesma string com a primeira letra em maiúscula.
*/
let toMaiusculaPrimeira = function (string) {
    string = [...string.toLowerCase()];//  só pra garantir todas as letras minusculas
    string[0] = string[0].toUpperCase();
    return string.join('');    
}
console.log(toMaiusculaPrimeira('IGOR CORREA'));

