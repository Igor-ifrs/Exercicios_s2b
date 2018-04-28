let pow = (base, expoente = 2) => {
    resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base
    }
    return resultado
}
let p1 = console.log(pow(2));//usando valor default

let p2 = console.log(pow(4,3));

let p3 = console.log(Math.pow(4, 3));//equivalente 


