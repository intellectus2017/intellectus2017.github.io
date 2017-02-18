$(document).ready(function (){
  
	"use strict";
	 

	 $('#contact-form-holder').submit(onSubmitForm);
	 $('#alert').removeClass('alert-danger')
	


    function onSubmitForm(event) {
    event.preventDefault();
    var form = this;
    var btnEnviar = $(form).find('.btn-primary');

    btnEnviar.button('loading');
    $.ajax({
      url: '//formspree.io/intellectusagency@gmail.com',
      method: 'POST',
      dataType: 'json',
      data: {
        nome: $(form).find('input[name="name"]').val(),
        Sobrenome: $(form).find('input[name="surname"]').val(),
        email: $(form).find('input[name="email"]').val(),
        mensagem: $(form).find('textarea[name="message"]').val()
      },
      success: function() {
        $('#alert')
          .removeClass('alert-danger')
          .addClass('alert-success')
          .text('Obrigado! Recebemos a sua mensagem!')
          .show();

           $(form).find('input[name="name"]').val(""),
           $(form).find('input[name="email"]').val(""),
           $(form).find('textarea[name="surname"]').val(""),
           $(form).find('textarea[name="message"]').val("")
           btnEnviar.button('reset');
      },
      error: function() {
        $('#alert')
          .removeClass('alert-success')
          .addClass('alert-danger')
          .text('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde!')
          .show();

           $(form).find('input[name="name"]').val(""),
           $(form).find('input[name="email"]').val(""),
           $(form).find('textarea[name="surname"]').val(""),
           $(form).find('textarea[name="message"]').val("")
           btnEnviar.button('reset');
      },
      complete: function() {
      form.reset();
    

      }
    });
  }


});
