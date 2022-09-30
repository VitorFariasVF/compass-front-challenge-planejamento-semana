
function mostraHora() {
    const horafull = new Date();
    var hora = horafull.getHours();
    var min = horafull.getMinutes()
    /*var seg = horafull.getSeconds()*/
    document.getElementById("hora-cabecalho").innerHTML = (hora + ":" + min/* +":" + seg*/);

}

function mostraData() { 
    var dia = new Date().getDate();
    var ano = new Date().getFullYear();
    var mesAno = new Date().getMonth();
    var mesLista = ["Janeiro", "Fevereiro", "Março", "Abril",   "Maio", "Junho", "Julho", "Agosto", "Setenbro", "Outubro", "Novembro", "Dezembro"];
    var mes = mesLista[mesAno]
    document.getElementById("data-cabecalho").innerHTML = (dia + " " + mes + " " + ano);
}

mostraHora();
mostraData();
setInterval(mostraHora, 1) /*Atualiza horario*/

function 