$(function(){
  function appendUsers(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
                </div>`;
    $('#user-search-result').append(html);
  }

  function appendUser(user){
    var html = `<div class="chat-group-user__name">
                  ${user}
                </div>
    `;
    $('#user-search-result').append(html);
  }

  function addUser(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>
    `;
    $('#user-search-result').append(html);
  }

  $('#user-search-field').keyup(function(){
    var input = $.trim($("#user-search-field").val());
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
      if (users.length !== 0){
        users.forEach(function(user){
          appendUsers(user);
        });
      } else {
        appendUser('一致するユーザーはいません');
      }
    })
    .fail(function(){
      alert('ユーザ検索に失敗しました。');
    })
  });

  $("#user-search-result").on('click', ".user-search-add ", function(){
    var id = $(this).attr("data-user-id")
    var name = $(this).attr("data-user-name")
    var html = addUser(id,name)
    $(this).parent().remove();
  });
});
