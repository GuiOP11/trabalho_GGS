
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

    // Obter as taxas de câmbio
    const taxaDolar = parseFloat(document.getElementById('taxaDolar').value) || 0;
    const taxaEuro = parseFloat(document.getElementById('taxaEuro').value) || 0;

    // Calcular e exibir o total em Dólar e Euro
    const totalDolar = totalGeral * taxaDolar;
    const totalEuro = totalGeral * taxaEuro;        

    document.getElementById('totalDolar').innerText = 'Total em Dólar: ' + totalDolar.toFixed(2) ;
    document.getElementById('totalEuro').innerText = 'Total em Euro: ' + totalEuro.toFixed(2) ;
}

// Adicionar event listeners para os campos de taxa de câmbio
document.getElementById('taxaDolar').addEventListener('input', calcularTotalGeral);
document.getElementById('taxaEuro').addEventListener('input', calcularTotalGeral);


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
    total = prompt('Digite o total de inscritos : ');
    
     localStorage.setItem('incritos', total);
     montarTexto();
}

 document.write('Total de inscritos' + total );

 var totalInscritos = 100;
 // converter o val para string
 localStorage.setItem("total_inncritos", totalInscritos.toString());
 //verificar se o localStorage possui o item
 if (localStorage.getItem("total_inscritos")){
  //Recupera o valor associado á chave
  var totalInscritos = localStorage.getItem("total_inscritos");
  // Converter o valor para o tipo numerico, se necessario
  totalInscritos = parseInt(totalInscritos, 10); 
  //10 é a base decimal

  //totalIncscritos com participantes recuperado do localStorage
  console.log("Número de participantes :" + totalInscritos);
 }else{
  console.log("A chave 'total_inscritos' não está no localStorage");
 }




 

  

 function montarTexto() {
   
     // Obtenha o número de inscritos do localStorage
     const totalInscritos = localStorage.getItem('inscritos') || 0;

    // Obter os totais dos produtos alimentícios
    const totalCafe = parseFloat(document.getElementById('resultado').innerText) || 0;
    const totalBolo = parseFloat(document.getElementById('total1').innerText) || 0;
    const totalDog = parseFloat(document.getElementById('resul').innerText) || 0;

    // Obter os totais dos itens de divulgação
    const totalBanner = parseFloat(document.getElementById('resultado1').innerText) || 0;
    const totalCracha = parseFloat(document.getElementById('total2').innerText) || 0;
    const totalCamiseta = parseFloat(document.getElementById('resul1').innerText) || 0;

    // Obter as quantidades dos produtos alimentícios
    const qtdCafe = parseFloat(document.getElementById('num1').value) || 0;
    const qtdBolo = parseFloat(document.getElementById('num3').value) || 0;
    const qtdDog = parseFloat(document.getElementById('num5').value) || 0;

    // Obter as quantidades dos itens de divulgação
    const qtdBanner = parseFloat(document.getElementById('num7').value) || 0;
    const qtdCracha = parseFloat(document.getElementById('num9').value) || 0;
    const qtdCamiseta = parseFloat(document.getElementById('num11').value) || 0;

    // Obter os totais gerais
    const totalProdutoAlimenticio = parseFloat(document.getElementById('resultadoTotal').innerText.split(':')[1]) || 0;
    const totalDivulgacao = parseFloat(document.getElementById('resultadoTotal1').innerText.split(':')[1]) || 0;
    const totalGeral = parseFloat(document.getElementById('resultadoTotalGeral').innerText.split(':')[1]) || 0;

    //innerText.split(':') descrição (por exemplo, "Total Alimentício") da quantidade ou valor associado (por exemplo, "100.50R$").
    // então quer dizer, Se você aplicar .innerText.split(':') a essa string, o resultado será um array com duas partes:

    const relatorioTexto = `
        Relatório do Evento:
        ---------------------   
        
        Quantidade de Inscritos: ${totalInscritos}

        Custos dos Produtos Alimentícios:
        - Café:
          - Quantidade por Participante: ${qtdCafe}
          - Total: ${totalCafe.toFixed(2)}R$

        - Bolo:
          - Quantidade por Participante: ${qtdBolo}
          - Total: ${totalBolo.toFixed(2)}R$

        - Cachorro-Quente:
          - Quantidade por Participante: ${qtdDog}
          - Total: ${totalDog.toFixed(2)}R$

        Custos dos Itens de Divulgação:
        - Banner:
          - Quantidade: ${qtdBanner}
          - Total: ${totalBanner.toFixed(2)}R$

        - Crachá:
          - Quantidade: ${qtdCracha}
          - Total: ${totalCracha.toFixed(2)}R$

        - Camiseta:
          - Quantidade: ${qtdCamiseta}
          - Total: ${totalCamiseta.toFixed(2)}R$

        Custos Totais:
        - Total Alimentício: ${totalProdutoAlimenticio.toFixed(2)}R$
        - Total Divulgação: ${totalDivulgacao.toFixed(2)}R$
        - Custo Total do Evento: ${totalGeral.toFixed(2)}R$

        Donos: Guilherme de Oliveira Padilha e Guilherme Borsatti

    `;

    document.getElementById('relatorioTexto').value = relatorioTexto;
}


function enviarRelatorio() {
  const relatorioTexto = document.getElementById('relatorioTexto').value; // Obtenha o texto do relatório

  fetch('https://app.headlessforms.cloud/api/v1/form-submission/nkJtA1ewcj', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', // Defina o tipo de conteúdo como JSON
      },
      body: JSON.stringify({ relatorioTexto: relatorioTexto }), // Envie o relatório como JSON
  })
  .then(response => {
      if (response.ok) {
          alert('Relatório enviado com sucesso!');
      } else {
          alert('O envio do relatório falhou.');
      }
  })
  .catch(error => {
      console.error('Erro ao enviar o relatório:', error);
  });
}

 




  



