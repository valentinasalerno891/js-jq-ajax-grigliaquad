// Generare una griglia 6x6 (36 boxes),
// ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {
  $('.quadrato').click(function() {
    var numero = $(this);

    $.ajax(
      {
        'url': "https://flynn.boolean.careers/exercises/api/random/int",
        'method': "GET",
        'success': function (risposta) {
            numero.text(risposta.response);
            if (risposta.response > 5) {
            numero.addClass('verde');
            // $(‘.quadrato’).addClass(‘.verde’);
            } else {
            numero.addClass('giallo');
            // $(‘.quadrato’).addClass(‘.giallo’);
            }
        }
      }
    );
  });
});
