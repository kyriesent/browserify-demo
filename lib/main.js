$ = require('jquery');
isValidEmail = require('./isValidEmail');
$(function () {
  $('form').on('submit', function (e) {
    email = $('input[name=email]').val();
    if (!isValidEmail(email)) {
      e.preventDefault();
      alert("Your email fails. Change it.");
    }
  })  
})
