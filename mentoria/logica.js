let numeros = [1,2,3,4,5,6,7,8,9,10];
let impares = [];
let pares = [];
let sumaPares = 0;
let sumaImpares = 0;

numeros.forEach((num)=>{
    if(num % 2 === 0){
        sumaPares += num
        pares.push( num )
    } else {
        sumaImpares += num
        impares.push( num )
    }
})

console.log(`la suma de: ${pares} es = ${sumaPares}`)
console.log(`la suma de: ${impares} es = ${sumaImpares}`)