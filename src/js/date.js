var dataAtual = new Date();
var dia = String(dataAtual.getDate()).padStart(2, '0');
var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
var ano = dataAtual.getFullYear();
var hora = String(dataAtual.getHours()).padStart(2, '0');
var minuto = String(dataAtual.getMinutes()).padStart(2, '0');
var dataFormatada = dia + '/' + mes + '/' + ano + ' - ' + hora + ':' + minuto;

document.getElementById('daily').textContent = dataFormatada;