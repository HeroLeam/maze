function trocarImagem(selectId, imgSrc, index) {
  var overlayImg = document.getElementById('overlay-img-' + index);

  if (!overlayImg) {
    overlayImg = new Image();
    overlayImg.id = 'overlay-img-' + index;
    overlayImg.style.position = 'absolute';
    overlayImg.style.top = '0';
    overlayImg.style.left = '0';
    overlayImg.style.display = 'none';
    overlayImg.style.zIndex = '1';
    document.querySelector('.container').appendChild(overlayImg);
  }

  if (imgSrc === 'nenhum') {
    overlayImg.style.display = 'none';
  } else {
    overlayImg.src = 'src/image/' + imgSrc + '.png';
    overlayImg.style.display = 'block';
  }
}

function resetarSelecao() {
  document.getElementById('saida-certa').value = 'nenhum';
  document.getElementById('saida-errada').value = 'nenhum';
  document.getElementById('guard-esquerda').value = 'nenhum';
  document.getElementById('guard-direita').value = 'nenhum';
  document.getElementById('biblioteca-esquerda').value = 'nenhum';
  document.getElementById('biblioteca-direta').value = 'nenhum';
  document.getElementById('ponte-fina-esquerda').value = 'nenhum';
  document.getElementById('ponte-fina-direita').value = 'nenhum';
  document.getElementById('ilha-l-cima').value = 'nenhum';
  document.getElementById('ilha-l-baixo').value = 'nenhum';
  document.getElementById('coluna-cima').value = 'nenhum';
  document.getElementById('coluna-baixo').value = 'nenhum';
  document.getElementById('ponte-grossa-esquerda').value = 'nenhum';
  document.getElementById('ponte-grossa-direita').value = 'nenhum';

  var selects = document.querySelectorAll('select');
  selects.forEach(function(select) {
    var event = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    select.dispatchEvent(event);
  });
}

document.getElementById('saida-certa').addEventListener('change', function() {
  trocarImagem('saida-certa', this.value, 1);
});

document.getElementById('saida-errada').addEventListener('change', function() {
  trocarImagem('saida-errada', this.value, 2);
});

document.getElementById('guard-esquerda').addEventListener('change', function() {
  trocarImagem('guard-esquerda', this.value, 3);
});

document.getElementById('guard-direita').addEventListener('change', function() {
  trocarImagem('guard-direita', this.value, 4);
});

document.getElementById('biblioteca-esquerda').addEventListener('change', function() {
  trocarImagem('biblioteca-esquerda', this.value, 5);
});

document.getElementById('biblioteca-direta').addEventListener('change', function() {
  trocarImagem('biblioteca-direta', this.value, 6);
});

document.getElementById('ponte-fina-esquerda').addEventListener('change', function() {
  trocarImagem('ponte-fina-esquerda', this.value, 7);
});

document.getElementById('ponte-fina-direita').addEventListener('change', function() {
  trocarImagem('ponte-fina-direita', this.value, 8);
});

document.getElementById('ilha-l-cima').addEventListener('change', function() {
  trocarImagem('ilha-l-cima', this.value, 9);
});

document.getElementById('ilha-l-baixo').addEventListener('change', function() {
  trocarImagem('ilha-l-baixo', this.value, 10);
});

document.getElementById('coluna-cima').addEventListener('change', function() {
  trocarImagem('coluna-cima', this.value, 11);
});

document.getElementById('coluna-baixo').addEventListener('change', function() {
  trocarImagem('coluna-baixo', this.value, 12);
});

document.getElementById('ponte-grossa-esquerda').addEventListener('change', function() {
  trocarImagem('ponte-grossa-esquerda', this.value, 13);
});

document.getElementById('ponte-grossa-direita').addEventListener('change', function() {
  trocarImagem('ponte-grossa-direita', this.value, 14);
});

document.getElementById('reset-btn').addEventListener('click', function() {
  resetarSelecao();
});