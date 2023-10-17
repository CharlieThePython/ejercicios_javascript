function sumar(a, b, ...c) {
    let resultado = a + b;

    for (let i = 0; i < c.length; i++) {
        resultado += c[i];
    }

    return resultado;
}

function restar(a, b, ...c) {
    let resultado = a - b;

    for (let i = 0; i < c.length; i++) {
        resultado -= c[i];
    }

    return resultado;
}

function multiplicar(a, b, ...c) {
    let resultado = a * b;

    for (let i = 0; i < c.length; i++) {
        resultado *= c[i];
    }

    return resultado;
}

export const aritmetica={
    sumar,
    restar,
    multiplicar,
};
