const assert = require('chai').assert;

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

//The application should have a section for displaying chat messages.

describe('display chat messages', function() {
  it('should have a section for displaying chat messages', function() {
    // $('#header').should.have.class('foo');
    // expect($('body')).to.have.class('foo');

    // $('section').should.have.class('chat-box');
    // expect($('section')).to.have.class('chat-box');

    // var newSection = getElementsByTagName('section');
    // assert(newSection.attr('class') === 'chat-box', 'section has class chat-box');
  });
});



describe('reverse chronological order', function() {
  it('should display messages in reverse chronological order', function() {
    var ideaOne = Date.now();
    var ideaTwo;
    function delayIdeaTwo(ideaTwo) {
      ideaTwo = window.setTimeout(returnIdeaTwo, 2000);
      return ideaTwo;
    }
    function returnIdeaTwo (ideaTwo) {
      ideaTwo = Date.now();
      return ideaTwo;
    }
    assert.isAbove(ideaTwo, ideaOne, 'ideaTwo is greater than ideaOne');

  });
});
