/*
7. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s(assuma qualquer string não vazia) e
retorna a mesma string com a primeira letra em maiúscula.
*/
let toMaiusculaPrimeira = function (texto) {
    texto = [...texto.toLowerCase()]; //  só pra garantir todas as letras minusculas
    texto[0] = texto[0].toUpperCase();
    return texto.join('');
}
console.log(toMaiusculaPrimeira('IGOR CORREA'));

let toMaiusculaPrimeira2 = function (texto) {
    texto = texto.toLowerCase();
    return texto[0].toUpperCase() + texto.slice(1);
};
const string = 'a varias formas de fazer A MESMA COISA EM JAVASCRIPT';

console.log(toMaiusculaPrimeira2(string));

let capitalize = function (texto) {
    texto = texto.toLowerCase();
    return texto.replace(/\w\S*/g, function (t) {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
console.log(capitalize(string));

