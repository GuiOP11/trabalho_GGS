
function calcularMultiplicacao() {
const num1 = parseFloat(document.getElementById('num1').value) || 0;
const num2 = parseFloat(document.getElementById('num2').value) || 0;
const resultado = num1 * num2;
document.getElementById('resultado').innerText = resultado;

const num3 = parseFloat(document.getElementById('num3').value);
const num4 = parseFloat(document.getElementById('num4').value);
const total1 = num3 * num4;
document.getElementById('total1').innerText = total1;

const num5 = parseFloat(document.getElementById('num5').value);
const num6 = parseFloat(document.getElementById('num6').value);
const resul = num5 * num6;
document.getElementById('resul').innerText = resul;
 }//pular

 function calcular2() {
    const num7 = parseFloat(document.getElementById('num7').value) || 0;
const num8 = parseFloat(document.getElementById('num8').value) || 0;
const resultado1 = num7 * num8;
document.getElementById('resultado1').innerText = resultado1;

const num9 = parseFloat(document.getElementById('num9').value);
const num10 = parseFloat(document.getElementById('num10').value);
const total2 = num9 * num10;
document.getElementById('total2').innerText = total2;

const num11 = parseFloat(document.getElementById('num11').value);
const num12 = parseFloat(document.getElementById('num12').value);
const resul1 = num11 * num12;
document.getElementById('resul1').innerText = resul1;

 }
 function somar() {
    const resultado = parseFloat(document.getElementById('resultado').value) ;
    const total1 = parseFloat(document.getElementById('total1').value) ;
    const resul = parseFloat(document.getElementById('resul').laue) ;
    const somatodos = resultado + total1 + resul;
    document.getElementById('somatodos').innerText = somatodos
 }
 //pular

var total =localStorage.getItem('inscritos');
if(total !== null){
    alert("Total de inscritos " + total);
}else{
    total = prompt('Digite o total de inscritos'  );
    localStorage.setItem('incritos', total);
    document.write('Total de inscritos ' + total);
}

function calcular(){
    
}
