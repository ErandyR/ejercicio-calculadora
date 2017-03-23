
var numero = "";
function mostrarValor(num){
  numero += num; //creamos una variable que concatene los numeros ingresados
  document.getElementById("valorIngresado").value = numero;

}
function mostrarOperador(operador){
  numero += operador;
  document.getElementById("valorIngresado").value = numero;
}

function elegirOperador(){
  var suma = document.getElementById("botonSuma").value;
  var resta = document.getElementById("botonResta").value;
  if (operador == suma){
    resultado = Number(num1 + num2);
    return resultado;
  }
  else if (operador == resta){
    resultado = Number(num1 - num2);
    return resultado
  }
}
function mostrarResultado(){

}
