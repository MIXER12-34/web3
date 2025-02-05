function realizarSuma() {
    const numero1 = parseFloat(document.getElementById("sumaNumero1").value);
    const numero2 = parseFloat(document.getElementById("sumaNumero2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").textContent = `El resultado de la suma es: ${resultado}`;
}

function realizarResta() {
    const numero1 = parseFloat(document.getElementById("restaNumero1").value);
    const numero2 = parseFloat(document.getElementById("restaNumero2").value);
    const resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = `El resultado de la resta es: ${resultado}`;
}

function realizarMultiplicacion() {
    const numero1 = parseFloat(document.getElementById("multiplicacionNumero1").value);
    const numero2 = parseFloat(document.getElementById("multiplicacionNumero2").value);
    const resultado = numero1 * numero2;
    document.getElementById("resultado").textContent = `El resultado de la multiplicación es: ${resultado}`;
}

function realizarDivision() {
    const numero1 = parseFloat(document.getElementById("divisionNumero1").value);
    const numero2 = parseFloat(document.getElementById("divisionNumero2").value);
    if (numero2 === 0) {
        document.getElementById("resultado").textContent = `Error: No se puede dividir entre cero.`;
    } else {
        const resultado = numero1 / numero2;
        document.getElementById("resultado").textContent = `El resultado de la división es: ${resultado}`;
    }
}
