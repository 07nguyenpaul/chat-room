// require('./styles');
const $ = require('jquery');

var $messageInput = $('.input-field');
var $sendButton = $('.send-button');
var $displayMessage = $('.chat-box');

function Chat(message, id = Date.now(), user){
  this.message = message;
  this.id = id;
  this.user = user || 'Paul';
}

Chat.prototype.addHTML = function() {
  $displayMessage.append(`
    <article id=${this.id} class="show-recent-message user1">
      ${this.message}
      <button class="edit-button" type='button'></button>
      <button class="delete-button" type='button'></button>
    </article>
    <article class="user2">Totally.
    </article>
  `);
};

var ChatroomRepo = {
  _messagesArray: [],

  addNewMessage: function(message, id, user) {
    this._messagesArray.push(new Chat(message, id, user));
    this.storeMessage(this._messagesArray);
  },

  storeMessage: function(message, user) {
    localStorage.setItem('messageArray', JSON.stringify(this._messagesArray));
  },

  retrieveMessage: function() {
    var retrieveMessage = JSON.parse(localStorage.getItem('messageArray'));
    if (retrieveMessage) {
      this._messagesArray = retrieveMessage.map(function(message) {
        return new Chat(message.message, message.id, message.user);
      });
    }

    this.renderMessageToPage();
  },

  renderMessageToPage: function(message, user) {
    // var chat = new Chat(message, user);
    // $displayMessage.append(chat.addHTML());
    // this.addNewMessage(chat);

    $displayMessage.html('');
    $displayMessage.append(this._messagesArray.forEach(function(message) {
      return message.addHTML();
    }));
  },

  disableSendButton: function() {
    $sendButton.prop('disabled', true);
  },

  enableButton: function() {
    $sendButton.prop('disabled', false);
  },

  clearInputField: function() {
    $messageInput.val('');
  }


};


module.exports = Chat;
module.exports = ChatroomRepo;
