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
  it('should have chat input and append to page', function() {
    browser.url('/');

    var chatInput = browser.element('.input-field');

    chatInput.setValue('a string');
    assert.equal(chatInput.getValue(), 'a string');
  });

  it('sends input to chat area section', function() {

    browser.click('.send-button');
    var chatArea = browser.element('.show-recent-message');

    assert.equal(chatArea.getText(), 'a string');
  });

  it('should clear the input field after submit', function() {
    var chatInput = browser.element('.input-field');

    assert(chatInput.getValue(), '');
  });

  it('should have a chat area', function() {
    var chatArea = browser.element('.chat-box');

    assert(chatArea.isExisting(''));
  });

  it('should disable the send button upon page load', function() {

    browser.url('/');

    var buttonStatus = browser.isEnabled('.send-button');

    assert.equal(buttonStatus, false);
  });

  it('should enable the button when there is text in the input field',function(){

    var chatInput = browser.element('.input-field');

    chatInput.setValue('suh dude');

    var expectedButtonStatus = browser.isEnabled('.send-button');

    assert.equal(expectedButtonStatus, true);
  });

  


});
