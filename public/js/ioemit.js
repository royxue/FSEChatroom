var socket = io();

socket.on('sendChat', function(msg){
    var $img = $("<div class=label>").append($("<img src='/images/1.jpg'/>"));
    var $time = $("<div class='date'>").text(msg['time']);
    var $user = $("<div class='summary'>").text(msg['user']);
    var $content = $("<div class='content'>").append($user, $time);
    var $chat = $("<div class='extra text'>").text(msg['content']);
    var $newevent = $("<div class='event'>").append($img, $content, $chat);
    $('#chats').append($newevent);
});