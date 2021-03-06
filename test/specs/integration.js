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

    browser.buttonUp('.send-button');
    chatInput.setValue('');

    assert.equal(chatInput.getValue(), '');
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

  it('should display chat in chronological order', function() {
    var chatInput = browser.element('.input-field');

    chatInput.setValue('suh dude');
    browser.click('.send-button');
    chatInput.setValue('yo man');
    browser.click('.send-button');

    var chatList = browser.getText('.show-recent-message');

    assert.equal(chatList[1], 'suh dude');
    assert.equal(chatList[2], 'yo man');
  });

  it('should visually differentiate each user', function() {
    var colorUser1 = browser.getCssProperty('.user1', 'color');
    var colorUser2 = browser.getCssProperty('.user2', 'color');

    assert.notEqual(colorUser1, colorUser2, 'not the same color');
  });

  context('Deleting a message', function() {
    it('should have a delete button for only the current user and NOT the AI', function() {
      var chatInput = browser.element('.input-field');
      var deleteButton = browser.element('.delete-button');
      chatInput.setValue('suh dude');
      browser.click('.send-button');
      assert(deleteButton.isExisting(''));
    });

    it('should only remove the current user message and NOT the AI', function() {
      var chatInput = browser.element('.input-field');
      var deleteButton = browser.element('.delete-button');

      chatInput.setValue('hello');
      assert.equal(chatInput.getValue(), 'hello');

      browser.click('.send-button');
      browser.click('.delete-button');

      var allMessages = browser.getText('.current-message');
      assert.equal(allMessages[0], 'suh dude');
    });

  // context('Editing a massage', function() {
  //   it('should be able to only edit user message and NOT the AI', function() {
  //
  //   });
  //
  // });
  //
  //
  //
  //
  //   // it('should have a edit button for only the current user and NOT the AI', function() {
  //   //     var chatInput = browser.element('.input-field');
  //   //     var editButton = browser.element('.edit-button');
  //   //     chatInput.setValue('suh dude');
  //   //     browser.click('.send-button');
  //   //     assert(editButton.isExisting(''));
  //   //   });
  });
});
