function calcularMultiplicacao() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = 5.75;
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = resultado;

    const num3 = parseFloat(document.getElementById('num3').value) || 0;
    const total1 = num3 * num2;
    document.getElementById('total1').innerText = total1;

    const num5 = parseFloat(document.getElementById('num5').value) || 0;
    const resul = num5 * num2;
    document.getElementById('resul').innerText = resul;

    calcularTotal();
}

function calcular2() {
    const num7 = parseFloat(document.getElementById('num7').value) || 0;
    const num8 = 5.75;
    const resultado1 = num7 * num8;
    document.getElementById('resultado1').innerText = resultado1;

    const num9 = parseFloat(document.getElementById('num9').value) || 0;
    const total2 = num9 * num8;
    document.getElementById('total2').innerText = total2;

    const num11 = parseFloat(document.getElementById('num11').value) || 0;
    const resul1 = num11 * num8;
    document.getElementById('resul1').innerText = resul1;

    calcularTotal1();   
}

function calcularTotal() {
    const valorResultado = parseFloat(document.getElementById('resultado').innerText) || 0;
    const valorTotal1 = parseFloat(document.getElementById('total1').innerText) || 0;
    const valorResul = parseFloat(document.getElementById('resul').innerText) || 0;

    const total = valorResultado + valorTotal1 + valorResul;

    const resultadoTotalElement = document.getElementById('resultadoTotal');
    resultadoTotalElement.textContent = 'Total : ' + total;

    calcularTotalGeral();
}

function calcularTotal1() {
    const valorResultado1 = parseFloat(document.getElementById('resultado1').innerText) || 0;
    const valorTotal2 = parseFloat(document.getElementById('total2').innerText) || 0;
    const valorResul1 = parseFloat(document.getElementById('resul1').innerText) || 0;

    const total1 = valorResultado1 + valorTotal2 + valorResul1;

    const resultadoTotal1Element = document.getElementById('resultadoTotal1');
    resultadoTotal1Element.textContent = 'Total : ' + total1;

    calcularTotalGeral();
}

function calcularTotalGeral() {
    const totalProdutoAlimenticio = parseFloat(document.getElementById('resultadoTotal').innerText.split(':')[1]) || 0;
    const totalDivulgacao = parseFloat(document.getElementById('resultadoTotal1').innerText.split(':')[1]) || 0;

    const totalGeral = totalProdutoAlimenticio + totalDivulgacao;

    const resultadoTotalGeralElement = document.getElementById('resultadoTotalGeral');
    resultadoTotalGeralElement.textContent = 'Total Geral: ' + totalGeral;
}

// Chama as funções de cálculo inicialmente para exibir os totais iniciais
calcularMultiplicacao();
calcular2();

// Define os listeners para atualizar os totais quando os campos são alterados
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        calcularMultiplicacao();
        calcular2();
    });
});



// Exibe o total de inscritos do localStorage
var total = localStorage.getItem('inscritos');
if(total !== null ) {
    alert('total de inscritos' + total);
}else{
    total = prompt('Digite o total de inscritos: ');
    localStorage.setItem('incritos', total);
}
document.write('Total de inscritos' + total );

 




  



