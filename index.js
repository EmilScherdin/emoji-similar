'use strict';

var isEmoji = require('is-emoji');
var emojiDict = require('emoji-dictionary');

const similarEmoji = [
  ['joy', 'smile', 'simple_smile', 'laughing', 'relaxed', 'sweat_smile', 'grimacing'],
  ['kissing_heart', 'kissing_closed_eyes', 'kissing', 'heart'],
  ['heart', 'heartpulse', 'heartbeat', 'green_heart', 'blue_heart', 'purple_heart', 'two_hearts'],
  ['facepunch', 'boom', 'raised_hands', 'clap', 'sparkles', 'muscle']
];

var _getEmojiname = function(emoji) {
  if (isEmoji(emoji))
    return emojiDict.getName(emoji);

  return emoji.indexOf(':') > -1 ? emoji.slice(1, emoji.length - 1) : emoji;
};

var getSimilar = function(emoji, count, random) {
  var emojiName = _getEmojiname(emoji);

  var index = null;
  for (var i = 0; i < similarEmoji.length; i++) {
    if(similarEmoji[i].indexOf(emojiName) > -1) {
      index = i;
      break;
    }
  }

  if (index === null)
    return [];

  var emojis = similarEmoji[index].filter(e => e !== emojiName);

  if (random) {
    emojis.sort(function() { return 0.5 - Math.random() });
  }

  return count ? emojis.slice(0, count) : emojis;
};


module.exports = getSimilar;
