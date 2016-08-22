const assert = require('chai').assert;
const $ = require('jquery');
require('../../lib/index');
require('../unit-test/message-test');


describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

// describe('storing user input', function() {
//   it('should store the user"s chat input in a variable', function() {
//
//   });
// });

describe('Message', function() {
  it('should have set attributes', function() {
    var message = new Chat('Totally', 'user2');
    assert.equal(message.message, 'Totally');
    assert.equal(message.user, 'user2');
  });
});

describe('message input interactions', function() {
  it('messageDisplay() should display the chat message to the page', function() {
    var $messageInput = $('.input-field');
    $messageInput.val('Great idea.');

    assert.equal(chat.messageDisplay(), 'Great idea.');
  });

  it('disableButton() should disable the button', function() {
    var $sendButton = $('.send-button');
    assert.isTrue(disableButton(), 'the button is disabled');
  });

  it('enableButton() should enable the button', function() {
    var $sendButton = $('.send-button');
    assert.isTrue(enableButton(), 'the button is enabled');
  });
});
