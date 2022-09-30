function excluirLS() {
    localStorage.clear()
    setInterval(novoCard, .01)
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
    localStorage.atividade = document.getElementById("atividade").value;
    localStorage.dia = document.getElementById("dia").value;
    localStorage.hora = document.getElementById("hora").value;
}

function carregar() {
    if (localStorage.atividade){
        document.getElementById("atividade").value = localStorage.atividade;
        document.getElementById("dia").value = localStorage.dia;
        document.getElementById("hora").value = localStorage.hora;
    }
}

function novoCard() {
    var textoAtividade = document.createElement("p")
    var textoConteudoA = document.createTextNode(localStorage.atividade)
    var textoDia = document.createElement("p")
    var textoConteudoD = document.createTextNode(localStorage.dia)
    const textoHora = document.createElement("p")
    var textoConteudoH = document.createTextNode(localStorage.hora)    
    
    textoAtividade.appendChild(textoConteudoA)
    textoDia.appendChild(textoConteudoD)
    textoHora.appendChild(textoConteudoH)

    var conteudoHora = document.getElementById("cardsHora")
    conteudoHora.classList.add("cardshorap")
    conteudoHora.appendChild(textoConteudoH)
    var conteudoAtividade = document.getElementById("cardAtividades")
    conteudoAtividade.classList.add("cardsatividadep")
    conteudoAtividade.appendChild(textoConteudoA)
}
 
if (localStorage.atividade, localStorage.dia, localStorage.hora) {
    novoCard()
}
