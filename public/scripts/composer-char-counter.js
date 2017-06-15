$(document).ready(function () {
  var maxCharacters = 140;
  var count = $('.counter');

  count.text(maxCharacters);

  $('textarea').on('keydown', function() {
    var characters = $(this).val().length;

    if (characters > maxCharacters) {
      count.addClass('over');
    } else {
      count.removeClass('over');
    }
    count.text(maxCharacters - characters);
  });
});
