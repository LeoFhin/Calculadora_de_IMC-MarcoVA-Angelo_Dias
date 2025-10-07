import { describe, it, expect } from 'vitest';
import { calcularIMC, classificarIMC } from './imc.js';

describe('Calculadora de IMC', () => {

  it('deve calcular o IMC corretamente para valores válidos', () => {
    const peso = 70;
    const altura = 1.75;
    const imc = calcularIMC(peso, altura);
    expect(imc).toBeCloseTo(22.86);
  });
  
  it('deve calcular o IMC para outros valores válidos', () => {
    const imc = calcularIMC(80, 1.80);
    expect(imc).toBeCloseTo(24.69);
  });

  it('deve lançar um erro se a altura for zero', () => {
    expect(() => calcularIMC(70, 0)).toThrow('Peso e altura devem ser valores positivos.');
  });
  
  it('deve lançar um erro se o peso for negativo', () => {
    expect(() => calcularIMC(-70, 1.75)).toThrow('Peso e altura devem ser valores positivos.');
  });
  
  it('deve lançar um erro se a altura não for um número', () => {
    expect(() => calcularIMC(70, '1.75')).toThrow('Peso e altura devem ser valores numéricos.');
  });

  it('deve lançar um erro se o peso não for um número', () => {
    expect(() => calcularIMC('setenta', 1.75)).toThrow('Peso e altura devem ser valores numéricos.');
  });
});

describe('Classificador de IMC', () => {

  it('deve retornar "Abaixo do peso" para IMC menor que 18.5', () => {
    expect(classificarIMC(17.5)).toBe('Abaixo do peso');
  });

  it('deve retornar "Peso normal" para IMC entre 18.5 e 24.9', () => {
    expect(classificarIMC(18.5)).toBe('Peso normal');
    expect(classificarIMC(22)).toBe('Peso normal');
    expect(classificarIMC(24.9)).toBe('Peso normal');
  });

  it('deve retornar "Sobrepeso" para IMC entre 25.0 e 29.9', () => {
    expect(classificarIMC(25.0)).toBe('Sobrepeso');
    expect(classificarIMC(27.5)).toBe('Sobrepeso');
    expect(classificarIMC(29.9)).toBe('Sobrepeso');
  });

  it('deve retornar "Obesidade Grau I" para IMC entre 30.0 e 34.9', () => {
    expect(classificarIMC(30.0)).toBe('Obesidade Grau I');
    expect(classificarIMC(32.5)).toBe('Obesidade Grau I');
    expect(classificarIMC(34.9)).toBe('Obesidade Grau I');
  });

  it('deve retornar "Obesidade Grau II" para IMC entre 35.0 e 39.9', () => {
    expect(classificarIMC(35.0)).toBe('Obesidade Grau II');
    expect(classificarIMC(37.5)).toBe('Obesidade Grau II');
    expect(classificarIMC(39.9)).toBe('Obesidade Grau II');
  });

  it('deve retornar "Obesidade Grau III" para IMC maior ou igual a 40.0', () => {
    expect(classificarIMC(40.0)).toBe('Obesidade Grau III');
    expect(classificarIMC(50.0)).toBe('Obesidade Grau III');
  });

  it('deve lançar um erro para IMC inválido (negativo ou não-numérico)', () => {
    expect(() => classificarIMC(-1)).toThrow('IMC inválido.');
    expect(() => classificarIMC('texto')).toThrow('IMC inválido.');
  });
});