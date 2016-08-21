var $ = require('jquery');
const ChatroomRepo = require('./message');
const Chat = require('./message');

var $messageInput = $('.input-field');
var $sendButton = $('.send-button');
var $displayMessage = $('.chat-box');

$(document).ready(function(){
  ChatroomRepo.retrieveMessage();
  ChatroomRepo.storeMessage();
});

$sendButton.on('click', function(e){
  event.preventDefault();
  ChatroomRepo.addNewMessage($messageInput.val());
  ChatroomRepo.renderMessageToPage();
  ChatroomRepo.clearInputField();
  ChatroomRepo.disableSendButton();
});

$messageInput.on('keyup', function() {
  if($messageInput.val()) {
    ChatroomRepo.enableButton();
  }

});

$('.chat-box').on('click', '.delete-button', function() {
  var id = parseInt(this.closest('.show-recent-message').id);
  ChatroomRepo.remove(id);
  ChatroomRepo.renderMessageToPage();
});

$('.chat-box').on('focusout', '.current-message', function() {
  // $('.show-recent-message').prop('contenteditable', true);
  var id = parseInt(this.closest('.show-recent-message').id);
  var newMessage = $(this).text();
  ChatroomRepo.editMessage(id, newMessage);
  ChatroomRepo.renderMessageToPage();
});

var text_max = 120;
   $('.character-count').html(text_max + ' characters remaining');

   $('.input-field').keyup(function() {
       var text_length = $('.input-field').val().length;
       var text_remaining = text_max - text_length;

       $('.character-count').html(text_remaining + ' characters remaining');
   });
