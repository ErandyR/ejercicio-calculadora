
var numero = "";
function mostrarValor(num){
  numero += num; //creamos una variable que concatene los numeros ingresados
  document.getElementById("valorIngresado").value = numero;

}
function mostrarOperador(operador){
  numero += operador;
  document.getElementById("valorIngresado").value = numero;
}
