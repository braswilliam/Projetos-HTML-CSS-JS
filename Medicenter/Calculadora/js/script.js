let input = document.getElementById('input');

function adicionarValor(valor) {
    input.value += valor;
}

function calcular() {
    let expressao = input.value;
    let operandos = expressao.split(/[-+*/]/); // divide a expressão em operandos usando regex
    let operadores = expressao.match(/[-+*/]/g); // pega os operadores da expressão usando regex
  
    let resultado = Number(operandos[0]); // inicia com o primeiro operando como resultado
  
    // percorre a lista de operadores e operandos para avaliar a expressão
    for (let i = 0; i < operadores.length; i++) {
      let operador = operadores[i];
      let operando = Number(operandos[i + 1]);
  
      if (operador === "+") {
        resultado += operando;
      } else if (operador === "-") {
        resultado -= operando;
      } else if (operador === "*") {
        resultado *= operando;
      } else if (operador === "/") {
        resultado /= operando;
      }
    }
  
    input.value = resultado;
  }
  
