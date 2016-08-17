require('./styles');

var $messageInput = $('.input-field');
var $sendButton = $('.send-button');
var $displayMessage = $('.chat-box');

$sendButton.on('click', function(e){
  event.preventDefault();
  $displayMessage.append(`
    <article class="show-recent-message">
      ${$messageInput.val()}
    </article>
  `);
});

$messageInput.on('keyup', function() {
  var messageInputIsEmpty = !$messageInput.val();
  $sendButton.prop('disabled', messageInputIsEmpty);
});
