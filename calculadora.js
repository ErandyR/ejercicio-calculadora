var suma = false;
var resta = false;
var multiplicacion = false;
var division = false;

var cargarPagina = function(){
  $(".btn").click(pintarValor);
  $()
  $("#botonIgual").click(btnIgualClick);
}


var contValor = '';
function pintarValor(){
  var valorIngresado = this.value;
  contValor += valorIngresado
  $("#valorIngresado").val(contValor);
}

function btnIgualClick(){
  evaluarOperacion()
} 

function evaluarOperacion(){
  let contValorInput = $("#valorIngresado").val();
  console.log(contValorInput);
  var quitarIgual = contValorInput.substr(0, contValorInput.length - 1);
  console.log(quitarIgual);
 
  var primerNumero = quitarIgual.substr(0, quitarIgual.lastIndexOf("+"));
  console.log(primerNumero);
  var segundoNumero = quitarIgual.substr(quitarIgual.lastIndexOf("+") + 1);
  console.log(segundoNumero);
}

function sumar(num1, num2){
  var result =  num1 + num2;
  return result;
}
function restar(num1, num2){
  var result = num1 - num2;
  return result;
}
function dividir(){
  var result = num1 / num2;
  return result;
}
function multiplicar(){
  var result = num1 * num2;
  return result;
}

$(document).ready(cargarPagina);