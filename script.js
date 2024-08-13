document.querySelectorAll('.pergunta').forEach(pergunta => {
    pergunta.addEventListener('click', function() {
        const respostaId = this.getAttribute('data-resposta');
        const resposta = document.getElementById(respostaId);
        const arrow = this.querySelector('.arrow');

        if (resposta.style.display === 'none' || resposta.style.display === '') {
            resposta.style.display = 'block';
            arrow.src = './imagens/arrow-bottom.png'; // Altera para a imagem da seta para baixo
        } else {
            resposta.style.display = 'none';
            arrow.src = './imagens/arrow-top.png'; // Altera para a imagem da seta para cima
        }
    });
});

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    });
  });