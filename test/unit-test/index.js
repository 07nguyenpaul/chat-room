const assert = require('chai').assert;
const $ = require('jquery');
require('../../lib/index');
const Chat = require('../../lib/message');
const ChatroomRepo = require('../../lib/message');


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
      ChatroomRepo._messagesArray = [];
      ChatroomRepo.addNewMessage('suh', 'dude');
      assert.equal(ChatroomRepo._messagesArray.length, 1);
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

    xit('should create a new message when addNewMessage() is called', function(message, user) {
      ChatroomRepo.addNewMessage(message='suh dude', user='Billy');
      assert.equal('.current-message', true);
    });
  });
});
