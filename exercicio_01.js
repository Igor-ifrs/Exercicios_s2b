/*
http://www.inf.pucrs.br/juliopm/s2b/Lab01_JavaScript_Introducao.pdf
1. Qual o resultado de cada expressão ? Procure descrever o resultado antes de executar uma avaliação da
expressão no interpretador JavaScript.

a) "" + 1 + 0		a = 10
b) "" - 1 + 0		b = -1
c) true + false		c = 1
d) 6 / "3"		    d = 2
e) "2" * "3"		e = 6
f) 4 + 5 + "px"		f = 9 px
g) "$" + 4 + 5		g = $45
h) "4" - 2		    h = 2
i) "4px" - 2		i = NaN
j) 7 / 0		    j = Infinity
k) " -9\n" + 5		k = -9( \n = proxima linha)5
l) " -9\n" - 5		l = -14
m) null + 1		    m = 1
n) undefined + 1	n = NaN
 */

let exerciocio_1 = {
    a: "" + 1 + 0,
    b: "" - 1 + 0,
    c: true + false,
    d: 6 / "3",
    e: "2" * "3",
    f: 4 + 5 + "px",
    g: "$" + 4 + 5,
    h: "4" - 2,
    i: "4px" - 2,
    j: 7 / 0,
    k: " -9\n" + 5,
    l: " -9\n" - 5,
    m: null + 1,
    n: undefined + 1
}
console.log('- Exercício 01 \u2705');

for (let indice in exerciocio_1) {
    console.log(`${indice} = ${exerciocio_1[indice]}`);
}
