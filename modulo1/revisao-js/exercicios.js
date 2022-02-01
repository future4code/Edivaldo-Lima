// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const frutas = ["banana", "maça", "pera", "abacaxi"]

function retornaTamanhoArray(array) {
   return array.length
}


// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) { 
  
}



// EXERCÍCIO 04
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function retornaNumerosPares(array) {  
    return array.filter(x => x % 2 === 0); 
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return Math.pow(array.filter(item => item % 2 == 0), 2)
}


// EXERCÍCIO 06

let maiorNumero = [1, 2, 9, 11]
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0; numerosPares.length < n; i++) {
       if (i % 2 == 0) {
           numerosPares.push(i)
       }
   }
   return numerosPares;  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}