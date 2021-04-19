function adicionarTarefa (){
    let tarefa = document.getElementById ("tarefa").value
    let diasSemana = document.getElementById ("dias-semana").value
    document.getElementById("tarefa").value = ""
    document.getElementById(diasSemana).innerHTML += `<p> ${tarefa} </p>`
}
