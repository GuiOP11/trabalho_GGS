
function calcularSoma() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const resultado = num1 + num2;
document.getElementById('resultado').innerText = resultado;

const num3 = parseFloat(document.getElementById('num3').value);
const num4 = parseFloat(document.getElementById('num4').value);
const total = num3 + num4;
document.getElementById('total').innerText = total;

const num5 = parseFloat(document.getElementById('num5').value);
const num6 = parseFloat(document.getElementById('num6').value);
const resul = num5 + num6;
document.getElementById('resul').innerText = resul;
}

function calcularSubtracao() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const resultado = num1 - num2;
document.getElementById('resultado').innerText = resultado;

const num3 = parseFloat(document.getElementById('num3').value);
const num4 = parseFloat(document.getElementById('num4').value);
const total = num3 - num4;
document.getElementById('total').innerText = total;

const num5 = parseFloat(document.getElementById('num5').value);
const num6 = parseFloat(document.getElementById('num6').value);
const resul = num5 - num6;
document.getElementById('resul').innerText = resul;
}
function calcularMultiplicacao() {
const num1 = parseFloat(document.getElementById('num1').value) || 0;
const num2 = parseFloat(document.getElementById('num2').value) || 0;
const resultado = num1 * num2;
document.getElementById('resultado').innerText = resultado;

const num3 = parseFloat(document.getElementById('num3').value);
const num4 = parseFloat(document.getElementById('num4').value);
const total = num3 * num4;
document.getElementById('total').innerText = total;

const num5 = parseFloat(document.getElementById('num5').value);
const num6 = parseFloat(document.getElementById('num6').value);
const resul = num5 * num6;
document.getElementById('resul').innerText = resul;
}
