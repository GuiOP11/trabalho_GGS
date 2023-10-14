
function calcularMultiplicacao() {
const num1 = parseFloat(document.getElementById('num1').value) || 0;
const num2 = parseFloat(document.getElementById('num2').value) || 0;
const resultado = num1 * 5.75;
document.getElementById('resultado').innerText = resultado;

const num3 = parseFloat(document.getElementById('num3').value);
const num4 = parseFloat(document.getElementById('num4').value);
const total1 = num3 * 5.75;
document.getElementById('total1').innerText = total1;

const num5 = parseFloat(document.getElementById('num5').value);
const num6 = parseFloat(document.getElementById('num6').value);
const resul = num5 * 5.75;
document.getElementById('resul').innerText = resul;
 }//pular

 function calcular2() {
    const num7 = parseFloat(document.getElementById('num7').value) || 0;
const num8 = parseFloat(document.getElementById('num8').value) || 0;
const resultado1 = num7 * 5.75;
document.getElementById('resultado1').innerText = resultado1;

const num9 = parseFloat(document.getElementById('num9').value);
const num10 = parseFloat(document.getElementById('num10').value);
const total2 = num9 * 5.75;
document.getElementById('total2').innerText = total2;

const num11 = parseFloat(document.getElementById('num11').value);
const num12 = parseFloat(document.getElementById('num12').value);
const resul1 = num11 * 5.75;
document.getElementById('resul1').innerText = resul1;

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
const btn = document.querySelector("#resultado");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const number = document.querySelector("#resultado")
    comst
});



  

  function calcularTotal() {
    const spanResultado = document.getElementById('resultado');
    const spanTotal1 = document.getElementById('total1');
    const spanResul = document.getElementById('resul');

    ;
  
    // Parseando os valores dos spans
    const valorResultado = parseInt(spanResultado.textContent);
    const valorTotal1 = parseInt(spanTotal1.textContent );
    const valorResul = parseInt(spanResul.textContent );


  
    // Calculando o total
    const total = valorResultado + valorTotal1 + valorResul;
  
  
    // Exibindo o total
    const resultadoTotalElement = document.getElementById('resultadoTotal');
    resultadoTotalElement.textContent = 'Total: ' + total;


  }

  function calcularTotal1() {
    const spanResultado1 = document.getElementById('resultado1');
    const spanTotal2 = document.getElementById('total2');
    const spanResul1 = document.getElementById('resul1');

    
    const valorResultado1 = parseInt(spanResultado1.textContent);
    const valorTotal2 = parseInt(spanTotal2.textContent );
    const valorResul1 = parseInt(spanResul1.textContent );

    const total1 = valorResultado1 + valorTotal2 + valorResul1;

    const resultadoTotal1Element = document.getElementById('resultadoTotal1');
    resultadoTotal1Element.textContent = 'Total: ' + total1;

  }

  function calcularEvento() {
    const spanResultadoTotal = document.getElementById('resultadoTotal');
    const spanResultadoTotal1 = document.getElementById('resultadoTotal1');
    //pular
    
    const valorResultadoTotal = parseInt(spanResultadoTotal.textContent);   
    const valorResultadoTotal1 = parseInt(spanResultadoTotal1.textContent );
    
    const total2 = valorResultadoTotal + valorResultadoTotal1 ;

    const resultadoTotal2Element = document.getElementById('resultadoTotal2');
    resultadoTotal2Element.textContent = 'Total: ' + total2;
  }
  
  



