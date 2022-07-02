

//1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos).

for(var i = 0; i <= 30; i++){
    if(i % 2 !=0){
        console.log(i)
    }
}

//2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).

var QtdeTotal = 0;
for(var i = 1; i <= 70; i++){
        if(i% 7 == 0){  
        QtdeTotal++
}
}console.log(QtdeTotal);

//3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.

var QtdeMinima = parseInt(prompt("Digite o menor valor para saber quantos pares e impares tem entre o primeiro e o segundo valor digitado "));
var QtdeMaxima = parseInt(prompt("Digite o maior valor para saber quantos pares e impares tem entre o primeiro e o segundo valor digitado "));

var QtdePar = 0;
var QtdeImpar = 0;

for(var i = QtdeMinima; i <= QtdeMaxima; i++){
    if(i % 2 == 0){
        QtdePar++
    } else {
        QtdeImpar++
    }
} console.log("existem " + QtdePar + " numeros pares e " + QtdeImpar + " numeros impares entre " + QtdeMinima + " e " + QtdeMaxima);


//4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;

var NumMin = parseInt(  prompt("Digite o menor valor"));
var NumMax = parseInt(  prompt("Digite o maior valor"));
var soma =0;

for (var i = NumMin; i <= NumMax; i++ ) {
    if (i%11 == 0) {
        soma = soma + i; 
    }
} console.log(soma);

//5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var NumMaximo = parseInt(	prompt("Digite o valor Maximo"));
var soma =0;

for(var i = 1; i <= NumMaximo; i++){
	soma = soma +i;
	

} console.log(soma)