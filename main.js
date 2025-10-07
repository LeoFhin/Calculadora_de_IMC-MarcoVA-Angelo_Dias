import { calcularIMC, classificarIMC } from './imc.js';

const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoP = document.getElementById('resultado');

calcularBtn.addEventListener('click', () => {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  try {
    const imc = calcularIMC(peso, altura);

    const classificacao = classificarIMC(imc);

    resultadoP.textContent = `Seu IMC é: ${imc} (${classificacao})`;
    resultadoP.style.color = 'black';

  } catch (error) {
    resultadoP.textContent = `Erro: ${error.message}`;
    resultadoP.style.color = 'red';
  }
});