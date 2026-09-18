// ESTUDO DE FUNÇÃO

function SomaNumeros() {
    let valor1 = 1;
    let valor2 = 2;
    let resultado = 0;

    return resultado = valor1 + valor2;
}

console.log(SomaNumeros());


function SOMANUMEROS2(valor1, valor2) {
    console.log(valor1 + valor2);
}

SOMANUMEROS2(3, 5);
SOMANUMEROS2(4, 10);
SOMANUMEROS2(6, 7);

/* aula */


function Burrinho(x, y, z) {
    let resultado = (x + y) / z;
    return resultado;
}

console.log(Burrinho(10, 10, 10));

/* const aula */

const SOMANUMEROS3 = (valor1, valor2) => {
    return valor1 + valor2;
}

console.log("Seu Resultado Seria: ",SOMANUMEROS3(125, 125));