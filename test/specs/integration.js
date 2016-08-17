const assert = require('assert');
var $ = require('jquery');

describe('webpage interaction', function() {
  it('should have a title', function() {
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, "Fantastic Telegram");
  });
});

describe('chat input interaction', function() {
  it('should have chat input', function() {
    browser.url('/');

    var chatInput = browser.element('.input-field');

    chatInput.setValue('a string');
    assert.equal(chatInput.getValue(), 'a string');
  });

  it('message should append to the page', function() {
    browser.url('/');

    var chatArea = browser.element('.chat-box');

    chatArea.setValue('something');

    assert.equal(chatArea.getValue(), 'something');

    browser.click('.send-button');

    var allMessages = browser.getText('article');
    assert.equal(allMessages.replace(/\n/g, ", "), 'something');
  });

  it('should have a chat area', function() {
    browser.url('/');

    var chatArea = browser.element('.chat-box');
    chatArea.setValue('so many chats');

    assert.equal(chatArea.getValue(), 'so many chats');
  });

  // it('should disable the send button upon page load', function() {
  //   browser.url('/');
  //
  //   var sendButton = browser.element('.send-button');
  //
  //   assert.isTrue(sendButton.prop('disabled'), 'is disabled');
  // });


});
