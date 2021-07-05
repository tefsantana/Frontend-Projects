
//IMC = KG / (H/100 * H/100) 

document.getElementById("submit").addEventListener("click", CalculadoraIMC); 
 function CalculadoraIMC(){
 	var cm = parseInt(document.getElementById("cm").value);
 	var kg = parseFloat(document.getElementById("kg").value);

 	var imc;
 	var newCm= parseFloat(cm/100);

 	imc = kg / (newCm * newCm);
 	imc = imc.toFixed(1);
 	console.log(imc);

 	document.getElementById("result").innerHTML = imc;

 }