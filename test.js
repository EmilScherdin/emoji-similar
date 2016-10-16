'use strict';

var getSimilar = require('./index');
var assert = require('assert');

describe('getSimilar', function() {
  it('should return 3 similar emoji', function() {
    assert.equal(3, getSimilar('boom', 3).length);
  });
});

describe('getSimilar', function() {
  it('should return 3 similar emoji', function() {
    assert.equal(3, getSimilar(':heartbeat:', 3).length);
  });
});

describe('getSimilar', function() {
  it('should return 4 similar emoji', function() {
    assert.equal(4, getSimilar('😄', 4).length);
  });
});


describe('getSimilar', function() {
  it('should return all (4) similar emoji', function() {
    assert.equal(4, getSimilar('facepunch').length);
  });
});
