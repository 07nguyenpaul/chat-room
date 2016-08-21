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
      <aside class="current-message" contenteditable="true">${this.message}</aside>
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
  },

  remove: function(id) {
    id = parseInt(id);
    this._messagesArray = this._messagesArray.filter(function(message){
      return message.id !== id;
    });
    this.storeMessage();
  },

  findId: function(id) {
    return this._messagesArray.find(function(message){
      return message.id === id;
    });
  },

  editMessage: function(id, newMessage) {
    id = parseInt(id);
    var message = this.findId(id);
    message.message = newMessage;
    this.storeMessage();
  }
};

module.exports = Chat;
module.exports = ChatroomRepo;
