'use strict';

var isEmoji = require('is-emoji');
var emojiDict = require('emoji-dictionary');

const similarEmoji = [
  ['blush', 'smile', 'simple_smile', 'laughing', 'relaxed'],
  ['kissing_heart', 'kissing_closed_eyes', 'kissing'],
  ['heart', 'heartpulse', 'heartbeat', 'green_heart'],
  ['facepunch', 'boom', 'raised_hands', 'clap']
];

var _getEmojiname = function(emoji) {
  if (isEmoji(emoji))
    return emojiDict.getName(emoji);

  return emoji.indexOf(':') > -1 ? emoji.slice(1, emoji.length - 1) : emoji;
};

var getSimilar = function(emoji, count) {
  var emojiName = _getEmojiname(emoji);

  for (var i = 0; i < similarEmoji.length; i++)
    if(similarEmoji[i].indexOf(emojiName) > -1)
      return count ? similarEmoji.filter(e => e !== emojiName).slice(0, count) : similarEmoji.filter(e => e !== emojiName);

  return [];
};


module.exports = getSimilar;
