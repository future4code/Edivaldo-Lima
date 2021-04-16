// function adicionarTarefa (){
//     let tarefa = document.getElementById ("tarefa").value
//     let diasSemana = document.getElementById ("dias-semana").value
//     document.getElementById("tarefa").value = ""
//     document.getElementById(diasSemana).innerHTML += `<p> ${tarefa} </p>`
// }

const pokemons = [
    {nome: 'bulbasaur', tipo: 'grama'}
    {nome: 'charmander', tipo: 'fogo'}
    {nome: 'squirtle', tipo: 'agua'}
]

for (const pkmn of pokemons) {
    console.log(`${pkmn.nome} é de ${pkmn.tipo}`)
}