require('./styles');

var messageInput = $('.input-field');
var sendButton = $('.send-button');
var displayMessage = $('.chat-box');

sendButton.on('click', function(){

  displayMessage.append(
    '<article class="show-recent-message">' + messageInput.val() +
    '</article>'
    );
});
