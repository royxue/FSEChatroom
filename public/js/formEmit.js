$('#newPost').submit(function(){
    console.log('hello');
    socket.emit('sendChat', 
        {
            'content': $('#inputContent').val(), 
            'user': $('#usernow').text(), 
            'time': moment().format('MMMM Do YYYY, h:mm:ss a')
        });
    return true
});