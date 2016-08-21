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
      ${$messageInput.val()}
      <button class="delete-button" type='image'></button>
    </article>
    <article class="user2">Totally.
    </article>
  `);
};

var ChatroomRepo = {
  _messagesArray: [],

  addNewMessage: function(chat) {
    this._messagesArray.unshift(chat);
    this.storeMessage(this._messagesArray);
  },

  storeMessage: function(message, user) {
    localStorage.setItem('messageArray', JSON.stringify(this._messagesArray));
  },

  renderMessageToPage: function(message, user) {
    var chat = new Chat(message, user);
    $displayMessage.append(chat.addHTML());
    this.addNewMessage(chat);
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

  // retrieveMessage: function() {
  //   var retrieveMessage = JSON.parse(localStorage.getItem('messageArray'));
  //   if (retrieveMessage) {
  //       this._messagesArray = retrieveMessage.map(function(message) {
  //         return new Chat(message.user, message.message);
  //       });
  //   }
  //   this.renderMessage();
  // },

};


module.exports = Chat;
module.exports = ChatroomRepo;
