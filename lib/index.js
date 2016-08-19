require('./styles');
const $ = require('jquery');

var $messageInput = $('.input-field');
var $sendButton = $('.send-button');
var $displayMessage = $('.chat-box');

function messageDisplay() {
  $displayMessage.append(`
    <article class="show-recent-message user1">
      ${$messageInput.val()}
      <button class="delete-button" type='image'></button>
    </article>
    <article class="user2">Totally.
    </article>
  `);
}

function disableButton() {
    $sendButton.prop('disabled', true);
}

function enableButton() {
    $sendButton.prop('disabled', false);
}

function clearInput() {
  $messageInput.val('');
}


$sendButton.on('click', function(e){
  event.preventDefault();
  messageDisplay();
  clearInput();
  disableButton();
});

$messageInput.on('keyup', function() {
  if($messageInput.val()) {
    enableButton();
  }
  // var messageInputIsEmpty = !$messageInput.val();
  // $sendButton.prop('disabled', messageInputIsEmpty);
});
