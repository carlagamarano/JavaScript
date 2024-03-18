// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de escutar o click do botão calcular
    document.getElementById("calcular").addEventListener("click", function() {
        // Pega os valores de peso e altura
        var peso = document.getElementById("peso").value;
        var altura = document.getElementById("altura").value;

        // Verifica se o peso e a altura são números válidos e diferentes de zero
        if (!isNaN(peso) && !isNaN(altura) && peso !== 0 && altura !== 0) {
            // Calcula o IMC
            var imc = peso / (altura * altura);

            // Seleciona os elementos para exibir o resultado do IMC e o status
            var valorImc = document.querySelector("#resultado_imc p:nth-of-type(1)");
            var statusImc = document.querySelector("#resultado_imc p:nth-of-type(2)");

            // Atualiza o conteúdo dos elementos com o valor do IMC e o status correspondente
            valorImc.textContent = "Valor do IMC: " + imc.toFixed(2);

            // Determina o status do IMC com base no valor calculado
            if (imc < 18.5) {
                statusImc.textContent = "Status do IMC: Abaixo do peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                statusImc.textContent = "Status do IMC: Peso normal";
            } else if (imc >= 25 && imc < 29.9) {
                statusImc.textContent = "Status do IMC: Sobrepeso";
            } else if (imc >= 30 && imc < 34.9) {
                statusImc.textContent = "Status do IMC: Obesidade grau I";
            } else if (imc >= 35 && imc < 39.9) {
                statusImc.textContent = "Status do IMC: Obesidade grau II";
            } else {
                statusImc.textContent = "Status do IMC: Obesidade grau III";
            }
        } else {
            // Caso o peso ou a altura sejam inválidos ou iguais a zero, limpa o resultado anterior e exibe uma mensagem de alerta
            var divResultado = document.getElementById("resultado_imc");
            // Limpa o conteúdo anterior
            divResultado.innerHTML = ''; 
            alert("Por favor, insira valores válidos e diferentes de zero para peso e altura.");
        }
    });
});