document.getElementById('download-btn').addEventListener('click', function () {
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    var ano = dataAtual.getFullYear();
    var dataFormatada = dia + '-' + mes + '-' + ano;

    var botoes = document.querySelector('.botoes');
    botoes.style.display = 'none';

    var container = document.querySelector('.container');
    html2canvas(container, {
        allowTaint: true,
        useCORS: true,
        logging: false,
        scrollX: 0,
        scrollY: 0
    }).then(function (canvas) {
        botoes.style.display = 'flex';

        var link = document.createElement('a');
        link.download = 'Maze do dia ' + dataFormatada + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });

    console.log("Imagem salva com sucesso!")
});