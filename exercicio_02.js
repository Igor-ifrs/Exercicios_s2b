/*
2. Qual o resultado de cada expressão ? Procure descrever o resultado antes de executar uma avaliação da
expressão no interpretador JavaScript.

a) 5 > 4		                a = true
b) "apple" > "pineapple"		b = false
c) "2" > "12"		            c = true
d) undefined == null		    d = true
e) undefined === null		    e = false
f) null == "\n0\n"		        f = false
h) null === +"\n0\n"		    h = false

NOTA "b c" O javascript compara strings usando o seu código unicode, não pelo tamanho da string

*/
let exerciocio_2 = {
    a: 5 > 4,
    b: "apple" > "pineapple",
    c: "2" > "12",
    d: undefined == null,
    e: undefined === null,
    f: null == "\n0\n",
    h: null === +"\n0\n"
}
console.log('- Exercício 02 🤔');

for (const indice in exerciocio_2) {
    console.log(` ${indice} = ${exerciocio_2[indice]}`);
}