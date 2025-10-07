# Calculadora de IMC com Testes Unitários

> Projeto para calcular o Índice de Massa Corporal (IMC) e apresentar a classificação de saúde correspondente, desenvolvido com JavaScript puro e com foco na qualidade de código através de testes unitários com a ferramenta Vitest.

Este projeto demonstra a implementação de uma lógica de negócio e a garantia de seu funcionamento através de uma suíte de testes que valida os requisitos funcionais e as regras de validação de entrada.

## Tecnologias Utilizadas

* **JavaScript**: Linguagem principal para a lógica e a interface.
* **Node.js**: Ambiente para gerenciamento de pacotes e execução de scripts.
* **Vitest**: Ferramenta de testes unitários moderna e rápida.
* **HTML5 / CSS3**: Para a estrutura e estilização da interface do usuário.

## Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação em sua máquina local.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado. O `npm` será instalado junto com ele.

### Instalação

1.  Clone o repositório (ou baixe os arquivos para uma pasta).
2.  Abra o terminal na pasta do projeto.
3.  Instale as dependências de desenvolvimento (neste caso, o Vitest):
    ```bash
    npm install
    ```

### Rodando a Aplicação

Como o projeto utiliza Módulos JavaScript (`import`/`export`), ele precisa ser servido por um servidor local.

1.  No terminal, na raiz do projeto, execute o comando:
    ```bash
    npx serve
    ```
2.  Abra o navegador e acesse o endereço fornecido (geralmente `http://localhost:3000`).

## Como Executar os Testes

O projeto está configurado com scripts para facilitar a execução dos testes e a geração de relatórios.

### Rodando os Testes Unitários

Para executar todos os testes unitários e verificar se a lógica está funcionando corretamente, utilize o comando:
```bash
npm test
```
Este comando executará o Vitest em modo "watch", que re-executa os testes automaticamente ao salvar uma alteração nos arquivos.

**Relatório de Execução dos Testes:**

Vide print:

<img width="786" height="442" alt="image" src="https://github.com/user-attachments/assets/c33f655a-d86c-4108-b51a-8283dd0b27df" />


### Gerando o Relatório de Cobertura

Para verificar a porcentagem do código que está sendo coberta pelos testes, rode o comando:
```bash
npm run test:coverage
```
Este comando gerará uma tabela de cobertura no terminal e criará uma pasta `coverage/` com um relatório HTML interativo.

**Relatório de Cobertura de Testes:**

Vide print:

<img width="550" height="157" alt="image" src="https://github.com/user-attachments/assets/6d924029-6d37-41b9-8531-31d1f53fee3f" />

---

## Regras de Negócio Testadas

A suíte de testes automatizados foi construída para garantir que as seguintes regras de negócio e validações do sistema sejam atendidas:

1.  **Cálculo Correto do IMC**: O sistema deve calcular o IMC utilizando a fórmula matemática padrão: `IMC = peso / (altura * altura)`.

2.  **Validação de Entradas Positivas**: O peso e a altura informados pelo usuário devem ser valores numéricos estritamente positivos (maiores que zero). O sistema não deve processar cálculos com valores nulos, negativos ou iguais a zero.

3.  **Validação de Tipo de Dados**: As entradas de peso e altura devem ser exclusivamente do tipo numérico. O sistema deve rejeitar e informar um erro caso o usuário insira textos ou qualquer outro formato de dado que não seja um número.

4.  **Formato do Resultado**: O resultado final do IMC calculado deve ser apresentado ao usuário formatado e arredondado para, no máximo, duas casas decimais.

5.  **Classificação do Resultado do IMC**: Após o cálculo, o valor do IMC é classificado de acordo com as faixas da Organização Mundial da Saúde (OMS), resultando em uma das seguintes categorias:

    | IMC                    | Classificação       |
    | ---------------------- | ------------------- |
    | Menor que 18.5         | Abaixo do peso      |
    | Entre 18.5 e 24.9      | Peso normal         |
    | Entre 25.0 e 29.9      | Sobrepeso           |
    | Entre 30.0 e 34.9      | Obesidade Grau I    |
    | Entre 35.0 e 39.9      | Obesidade Grau II   |
    | Maior ou igual a 40.0  | Obesidade Grau III  |

---

## Autor

**Leonardo Santos de Lima**
