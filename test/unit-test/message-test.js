const assert = require('chai').assert;
const Chat = require('../../lib/message');
const $ = require('jquery');

describe('Our test bundle', function() {
  it('should work', function() {
      assert(true);
  });
});

describe('Message', function() {
  it('should have set attributes', function() {
    var message = new Chat('Totally', 12345, 'user2');
    assert.equal(message.message, 'Totally');
    assert.equal(message.user, 'user2');
  });
});
