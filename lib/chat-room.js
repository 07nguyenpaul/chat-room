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

var text_max = 120;
   $('.character-count').html(text_max + ' characters remaining');

   $('.input-field').keyup(function() {
       var text_length = $('.input-field').val().length;
       var text_remaining = text_max - text_length;

       $('.character-count').html(text_remaining + ' characters remaining');
   });
