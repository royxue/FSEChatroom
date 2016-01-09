var socket = io();

$('#newPost').submit(function(){
    console.log('hello');
    socket.emit('sendChat', 
        {
            'content': $('#inputContent').val(), 
            'user': $('#usernow').text(), 
            'time': moment().format()
        });
    $('#inputContent').val('');
    return false;
});

socket.on('sendChat', function(msg){
    var $img = $("<div class=label>".aapend($("<img src='/images/1.jpg'/>"));
    var $time = $("<div class='date'>").text(msg['time']);
    var $user = $("<div class='summary'>").text(msg['user']);
    var $content = $("<div class='content'>").append($user, $time);
    var $chat = $("<div class='extra text'>").text(msg['content']);
    var $newevent = $("<div class='event'>").append($img, $content, $chat);
    $('#chats').append($newevent);
});