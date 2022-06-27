let minimo = 10;
let maximo = 30;
let suma = 0;

for (i = minimo; i <= maximo; i++) {
    resto = i%2;
    if (resto !== 0) {
        suma += i;
    }else{
        continue;
    }
}
console.log(`La suma de los numeros impares entre ${minimo} y ${maximo} es ${suma}`)