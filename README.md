# Vargs

This library enables variable argument pattern with callback as last argument.

## Instalation

```bash
npm i @alesmenzel/vargs
```

## Usage

Supports ES5, ES6 and ES6 shorthand arrow functions.

```javascript
const vargs = require('@alesmenzel/vargs');

// ES5
const fnc = vargs(function(a = 15, b, c, callback) {
  console.log({ a, b, c, callback })
});

fnc(() => {});
// { a: 15, b: undefined, c: undefined, callback: [Function] }


// ES6
const fnc = vargs((a = 15, b, c, callback) => {
  console.log({ a, b, c, callback })
});

fnc(() => {});
// { a: 15, b: undefined, c: undefined, callback: [Function] }


// ES6 shorthand
const fnc = vargs((a = 15, b, c, callback) => console.log({ a, b, c, callback }));

fnc(() => {});
// { a: 15, b: undefined, c: undefined, callback: [Function] }
```
