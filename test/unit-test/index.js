const assert = require('chai').assert;
const $ = require('jquery');
require('../../lib/index');
const Chat = require('../../lib/message');
const ChatroomRepo = require('../../lib/message');
// require('../unit-test/message-test');


describe('Our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('Message', function() {
  it('should have set attributes', function() {
    var message = new Chat('Totally', 'user2');
    assert.equal(message.message, 'Totally');
    assert.equal(message.user, 'user2');
  });
});

describe('Chatroom', function() {
  context('Message should be in an array', function() {
    it('should be an array', function() {
      var allMessagesInChatbox = [];
      assert.isArray(allMessagesInChatbox);
    });
  });

  context('Chatroom functions', function() {
    it('should have function called addNewMessage', function() {
      assert.isFunction(ChatroomRepo.addNewMessage);
    });

    it('should have function called storeMessage', function() {
      assert.isFunction(ChatroomRepo.storeMessage);
    });

    it('should have function called retrieveMessage', function() {
      assert.isFunction(ChatroomRepo.retrieveMessage);
    });

    it('should have function called renderMessageToPage', function() {
      assert.isFunction(ChatroomRepo.renderMessageToPage);
    });

    it('should have function called renderMessageToPage', function() {
      assert.isFunction(ChatroomRepo.renderMessageToPage);
    });

    it('should have function called disableSendButton', function() {
      assert.isFunction(ChatroomRepo.disableSendButton);
    });

    it('should have function called enableButton', function() {
      assert.isFunction(ChatroomRepo.enableButton);
    });

    it('should have function called findId', function() {
      assert.isFunction(ChatroomRepo.findId);
    });

    it('should have function called editMessage', function() {
      assert.isFunction(ChatroomRepo.editMessage);
    });

    it('should create a new message when addNewMessage() is called', function(message, user) {
      ChatroomRepo.addNewMessage(message='suh dude', user='Billy');
      assert.equal()
    });
  });
});


// describe('message input interactions', function() {
//   it('messageDisplay() should display the chat message to the page', function() {
//     var $messageInput = $('.input-field');
//     $messageInput.val('Great idea.');
//
//     assert.equal(chat.messageDisplay(), 'Great idea.');
//   });
//
//   it('disableButton() should disable the button', function() {
//     var $sendButton = $('.send-button');
//     assert.isTrue(disableButton(), 'the button is disabled');
//   });
//
//   it('enableButton() should enable the button', function() {
//     var $sendButton = $('.send-button');
//     assert.isTrue(enableButton(), 'the button is enabled');
//   });
// });
