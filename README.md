# emoji-similar

Get array of similar Emojis




How to use
----------
```
getSimilar(emoji [, count, random]);
```

Example
```
import getSimilar from 'emoji-similar';

getSimilar('😄', 4);
// return list of 4 similar emoji

getSimilar(':heartbeat:', 3);
// return list of 3 similar emoji

getSimilar('boom');
// return list of all similar emoji

getSimilar('boom', 4, true);
// return list of 4 similar emoji in random order

getSimilar('boom', null, true);
// return list of all similar emoji in random order

```

Installation
------------
```
npm i -S emoji-similar
```
