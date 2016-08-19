require('./styles');
const $ = require('jquery');

var $messageInput = $('.input-field');
var $sendButton = $('.send-button');
var $displayMessage = $('.chat-box');


function messageDisplay() {
  $displayMessage.append(`
    <article class="show-recent-message user1">
      ${$messageInput.val()}
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


module.exports = Message;
