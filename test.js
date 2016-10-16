'use strict';

var getSimilar = require('./index');
var assert = require('assert');

describe('getSimilar', function() {
  it('should return 3 similar emoji', function() {
    var emojis = getSimilar('boom', 3);
    console.log(emojis);
    assert.equal(3, emojis.length);
  });
});

describe('getSimilar', function() {
  it('should return 3 similar emoji', function() {
    var emojis = getSimilar(':heartbeat:', 3);
    console.log(emojis);
    assert.equal(3, emojis.length);
  });
});

describe('getSimilar', function() {
  it('should return 4 similar emoji', function() {
    var emojis = getSimilar('😬', 4);
    console.log(emojis);
    assert.equal(4, emojis.length);
  });
});


describe('getSimilar', function() {
  it('should return all (5) similar emoji', function() {
    var emojis = getSimilar('facepunch');
    console.log(emojis);
    assert.equal(5, emojis.length);
  });
});

describe('getSimilar', function() {
  it('should return 4 random similar emoji', function() {
    var emojis = getSimilar('smile', 4, true);
    console.log(emojis);
    assert.equal(4, emojis.length);
  });
});

describe('getSimilar', function() {
  it('should return all (5) similar emoji in random order', function() {
    var emojis = getSimilar('facepunch', null, true);
    console.log(emojis);
    assert.equal(5, emojis.length);
  });
});
