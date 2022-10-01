var tarefas = []  /*lista de tarefas*/


function excluirLS() {
    localStorage.clear();
    limparCards();
}


function mostraHora() {
    const horafull = new Date()
    var hora = horafull.getHours()
    var min = horafull.getMinutes()
    /*var seg = horafull.getSeconds()*/
    document.getElementById("hora-cabecalho").innerHTML = (hora + ":" + min/* +":" + seg*/)

}

function mostraData() { 
    var dia = new Date().getDate()
    var ano = new Date().getFullYear()
    var mesAno = new Date().getMonth()
    var mesLista = ["Janeiro", "Fevereiro", "Março", "Abril",   "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var mes = mesLista[mesAno]
    document.getElementById("data-cabecalho").innerHTML = (dia + " " + mes + " " + ano)
}

mostraHora();
mostraData();
setInterval(mostraHora, 1) /*Atualiza horario*/

function addAtividade() {
    if (!localStorage.tarefas) {
        var tarefas = []
        //localStorage.tarefas = JSON.parse(tarefas);
    }

    let tarefa = new Object();
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'))
    if(tarefasSalvas == null){
        tarefasSalvas = [];
    }
    tarefa.atividade = document.getElementById("atividade").value;
    tarefa.dia = document.getElementById("dia").value;
    tarefa.hora = document.getElementById("hora").value;
    tarefasSalvas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
    mostraCards();
}

function carregar() {
    if (localStorage.atividade){
        document.getElementById("atividade").value = localStorage.atividade;
        document.getElementById("dia").value = localStorage.dia;
        document.getElementById("hora").value = localStorage.hora;
    }
}

function novoCard(tarefa) {

    var sectionCardHora = document.createElement("section");
    sectionCardHora.classList.add("cards-hora")
    sectionCardHora.classList.add("cardshorap")

    var sectionCardAtividade = document.createElement("section");
    sectionCardAtividade.classList.add("cards-atividades")
    sectionCardAtividade.classList.add("cardsatividadep")

    var textoAtividade = document.createElement("p")
    var textoConteudoA = document.createTextNode(tarefa.atividade)
    textoAtividade.appendChild(textoConteudoA)

    var textoDia = document.createElement("p")
    var textoConteudoD = document.createTextNode(tarefa.dia)
    textoDia.appendChild(textoConteudoD)
    const textoHora = document.createElement("p")
    var textoConteudoH = document.createTextNode(tarefa.hora)    
    textoHora.appendChild(textoConteudoH)
    
    sectionCardHora.appendChild(textoHora)
    sectionCardAtividade.appendChild(textoAtividade)

    var atividades = document.getElementById("atividades")
    atividades.appendChild(sectionCardAtividade)
    
    var colunaHora = document.getElementById("colunaHora")
    colunaHora.appendChild(sectionCardHora)
}

function mostraCards(dia) {
    limparCards();
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasSalvas = tarefasSalvas.filter(tarefasSalvas => tarefasSalvas.dia === dia);
    for (let index = 0; index < tarefasSalvas.length; index++) {
        novoCard(tarefasSalvas[index]);
        
    }
}

function limparCards(){
    var listaElementsHora = document.getElementsByClassName("cards-hora", "cardshorap")
    var listaElementsAtividade = document.getElementsByClassName("cards-atividades", "cardsatividadep")
    var numeroElements = listaElementsHora.length;
    if(numeroElements > 0){
    for (let index = numeroElements; index > 0; index--) {
        listaElementsHora[index-1].remove(); 
    }

    for (let index = numeroElements; index > 0; index--) {
        listaElementsAtividade[index-1].remove(); 
    }
    }
}

let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'))
if (tarefasSalvas != null && tarefasSalvas.length > 0) {
    mostraCards();
}


