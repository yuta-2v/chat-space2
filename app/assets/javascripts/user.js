$(function(){
  function appendUsers(user){
  }

  $('#user-search-field').keyup(function(){
    var input =$("#user-search-field").val();
    console.log(input);
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      console.log("ok");
      $('#user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUsers(user);
        });
      } else {
        $('#user-search-result').empty();
        appendUsers('nobody');
      }
    })
    .fail(function(users){
      console.log("no");
    })
  })
});
