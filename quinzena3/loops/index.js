// Exercicio 3 

//Item a 

const arrayOriginal = [10, 25, 27, 34, 8, 9, 70, 51]
/*for (let numeros of arrayOriginal){
    console.log(numeros)
}*/
  
//Item b

/*for (let numeros of arrayOriginal){
    console.log(numeros/10)
}*/

//Item c

/*const novoArray = []
for (const numeros of arrayOriginal){
    if(numeros % 2 === 0){
        novoArray.push(numeros)
    }
}
console.log (novoArray)*/


// Item d

/*const arrayString = []
for (let i = 0; i < arrayOriginal.length; i++){
    const string = `O elemento do index ${i} é: ${arrayOriginal[i]}`
    arrayString.push(string)
}

console.log (arrayString)*/

//Item e

let menorNumero = arrayOriginal[0]
let maiorNumero = arrayOriginal[0]

for(let i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    }else if (arrayOriginal[i] <menorNumero) {
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O menor numero é o ${menorNumero} e o maior é o ${maiorNumero}`)