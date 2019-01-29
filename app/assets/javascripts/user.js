$(function(){
  function appendUsers(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${user.name}
                  </p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
                </div>`;
    $('#user-search-result').append(html);
    console.log("append");
  }

  function appendUser(user){
    var html = `<div class="chat-group-user__name">
                  ${user}
                </div>
    `;
    $('#user-search-result').append(html);
    console.log("no append");
  }

  $('#user-search-field').keyup(function(){
    var input = $.trim($("#user-search-field").val());
    console.log(input);
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
    .always(function(){
      $('#user-search-result').empty();
    })
    .done(function(users){
      console.log(users);
      if (users.length !== 0){
        console.log(users.length);
        users.forEach(function(user){
          appendUsers(user);
        });
      } else {
        console.log('fault');
        appendUser('nobody');
      }
    })
    .fail(function(){
      console.log("no");
    })
  });

  $("#user-search-result").on('click', ".chat-group-user__btn--add", function(){
    console.log("hello");
  });
});
