//Exercício 1

function inverteArray(array) {
   let newArray = [0, 8, 23, 16, 10, 15, 41, 12, 13]

   let arrayInvertido = [];
   for(let i = array.length - 1; i >= 0; i--) {
       arrayInvertido.push(array[i])
     }
   return arrayInvertido
   }

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let newArray = [1, 2, 3, 4, 5, 6]

   let arrayPares = []
   for(let i = 0; i <array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayPares.push(array[i] * array[i])
      }
   }return arrayPares
}

//Exercício 3

function retornaNumerosPares (array) {
   let newArray = [1, 2, 3, 4, 5, 6]

   let novoArray = [];
   for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
            novoArray.push(array[i])
          }
        }
      return novoArray
      }

  
//Exercício 4

function retornaMaiorNumero(array) {
   let newArray = [10, 18, 7, 56, 39]

   let maiorNumero = array[0];
   for (let i = 0; i < array.length; i++) {
      if (maiorNumero < array[i]) {
         maiorNumero = array[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   let newArray = [1, 2, 3, 4, 5, 6]
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

}

//Exercício 7

function retornaNNumerosPares(n) {
   let newArray = [1, 2, 3, 4, 5, 6, 7, 8]

   let numerosPares = [];
   for (let numero = 0; numerosPares.length< n; numero++) {
      if (numero % 2 === 0) {
         numerosPares.push(numero)
      }
   }return numerosPares
}
 
// Exercício 8

function checaTriangulo(a, b, c) {
  
  if (a !== b && b !== c) {
     return 'Escaleno'
  }else if (a === b && b === c) {
     return 'Equilátero'
  }else{
     return 'Isóceles'
  }

}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero
   let menorNumero
   let maiorDivisivelporMenor

   if (num1 > num2) {
      maiorNumero = 30
      menorNumero = 10
   }else {
      maiorNumero = 30
      menorNumero = 10
   }

   maiorDivisivelporMenor = maiorNumero % menorNumero === 0
   const diferenca = maiorNumero - menorNumero

   return {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: diferenca
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   const arrayOrdemCrescente = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]

   const len = array.length;
   for (let i = 0; i< len; i++) {
      for (let j = 0; j <len; j++) {
         if (array[j] > array[j + 1]) {
            let tmp = array[j];
            array [j] = array [j +1];
            array [j + 1] = tmp;
         }
      }
   }
   return array

}

// Exercício 12

function filmeFavorito() {
   
   let filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
     }
     return `Venha assistir ao ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}`
   }

   
// Exercício 14

function criaRetangulo(lado1, lado2) {
   
   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
 
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   
   const newArray = arrayDePessoas.filter ((pessoa) => {
      return pessoa.idade >= 18
   })
   return newArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   
   const newArray = arrayDePessoas.filter ((pessoa) => {
      return pessoa.idade < 18
   })
   return newArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   
   const arrayNum = [1, 2, 3, 4, 5, 6]

   const novoArray = array.map ((num) => {
      return num * 2
   })
   return novoArray
}
   
// Exercício 17, letra B
const arrayNum = [1, 2, 3, 4, 5, 6]
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((num) => {
     return (num * 2).toString()
  })
  return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let entradaAutorizada = []
   for (const pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade <60) {
         entradaAutorizada.push(pessoa)
      }
   }return entradaAutorizada
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let entradaNaoAutorizada = []
   for (const pessoa of pessoas) {
      if (pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
         entradaNaoAutorizada.push(pessoa)
      }
   }return entradaNaoAutorizada
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}