# calculator

Live site: https://adamnorred.github.io/calculator/

Technologies used:

CSS (flexbox)

JS (vanilla)

It is inspired by Windows calculator, but simplified.

Calculator always rounds to 2 decimal places and simplifies outcome i.e. if there is 0.0066 it will round to 0.01. Used method 'toFixed' to avoid flooding screen, since it is project for training.

I believe it covers almost everything i.e. 0.0 / 0.0000 outputs undefined, can't put double zeros before decimal points etc. Only problem is with big numbers and does not display well on small screens.

Main goals that I achieved:

- implement things like minus and minus equals plus, can't divide by zero etc.
- flexibility with calculator, which means a lot of functionality for user to work with
- bug less code (tested it a lot, everything should be 100% accurate)
- learn to use 'this' keyword
- learn how to work with regex patterns
