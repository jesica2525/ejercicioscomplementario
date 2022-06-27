let numero = parseInt(prompt("Ingrese el numero que quiere saber el factorial"));
let suma = 1;

for (let i = 1; i <= numero; i++) {
    suma = suma*i;
}
alert(`El factorial de ${numero} es ${suma}`)