var $ = require('jquery');
const chatRoomRepo = require('./message');
const Chat = require('./message');

var $messageInput = $('.input-field');
var $sendButton = $('.send-button');
var $displayMessage = $('.chat-box');

$sendButton.on('click', function(e){
  event.preventDefault();
  chatRoomRepo.renderMessageToPage($messageInput.val());
  chatRoomRepo.clearInputField();
  chatRoomRepo.disableSendButton();
});

$messageInput.on('keyup', function() {
  if($messageInput.val()) {
    chatRoomRepo.enableButton();
  }
  // var messageInputIsEmpty = !$messageInput.val();
  // $sendButton.prop('disabled', messageInputIsEmpty);
});
