  $(document)
  .ready(function() {
    $('form .submit.button')
    .api({
      url: 'https://api.sknk.ws/',
      serializeForm: true,
      onSuccess: function(response) {
        $('form').removeClass('error')
        $('#shortURL').val(response.shortURL);
        $('.ui.modal').modal('show');
      },
      onFailure: function(response) {
        $('form').addClass('error')
        $('form .error.message').text(response.message);
        console.log(response)
      },
    });

    var clipboard = new Clipboard('.copy-button');
    clipboard.on('success', function(e) {
      $('.copy-button').popup('show');
    });
  });
