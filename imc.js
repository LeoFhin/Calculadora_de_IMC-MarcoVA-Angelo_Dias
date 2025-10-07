/**
 * Calcula o Índice de Massa Corporal (IMC).
 * @param {number} peso - O peso em quilogramas (kg).
 * @param {number} altura - A altura em metros (m).
 * @returns {number} O valor do IMC arredondado para duas casas decimais.
 * @throws {Error} Se o peso ou a altura não forem números ou forem menores ou iguais a zero.
 */
export function calcularIMC(peso, altura) {
  if (typeof peso !== 'number' || typeof altura !== 'number') {
    throw new Error('Peso e altura devem ser valores numéricos.');
  }
  if (peso <= 0 || altura <= 0) {
    throw new Error('Peso e altura devem ser valores positivos.');
  }

  const imc = peso / (altura * altura);

  return parseFloat(imc.toFixed(2));
}


/**
 * Classifica o IMC de acordo com a tabela da OMS.
 * @param {number} imc - O valor do IMC a ser classificado.
 * @returns {string} A classificação do IMC.
 * @throws {Error} Se o IMC for um valor inválido.
 */
export function classificarIMC(imc) {
  if (typeof imc !== 'number' || imc < 0) {
    throw new Error('IMC inválido.');
  }

  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc <= 24.9) {
    return 'Peso normal';
  } else if (imc <= 29.9) {
    return 'Sobrepeso';
  } else if (imc <= 34.9) {
    return 'Obesidade Grau I';
  } else if (imc <= 39.9) {
    return 'Obesidade Grau II';
  } else { // imc >= 40.0
    return 'Obesidade Grau III';
  }
}