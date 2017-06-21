$(function(){

  $('#btnRegisterUser').on('click',function(e){
    e.preventDefault();
    let $name = $('#name');
    let $email = $('#email');
    let $password = $('#password');

    if ($name.val() === '' || $email.val() === '' || $password.val() === '') {
      message.html('<p>All fields must be filled</p>');
      return false;
    }

    var data = {
      'name': $name.val(),
      'email': $email.val(),
      'password': $password.val()
    };
    console.log(data);

    $.ajax({
        url: '/registeruser',
        method: 'POST',
        data: data,
        success: function(result){
          console.log("in the success",result);
        },
        error: function(err){
          console.log("in the error",err);
        }

    });

  }); //function btnRegister

}); //$ function ends here