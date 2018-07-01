/* eslint-disable func-names, no-unused-vars, prefer-rest-params */
const { expect } = require('chai');

const vargs = require('./vargs');

const noop = () => {};

describe('function-arguments', () => {
  // ES5
  it('should handle unnamed ES5 function - no arguments', () => {
    const subject = function() {
      expect(Array.from(arguments)).to.be.deep.equal([]);
    };
    vargs(subject)();
  });

  it('should handle unnamed ES5 function - no arguments with overload', () => {
    const subject = function() {
      expect(Array.from(arguments)).to.be.deep.equal([15, noop]);
    };
    vargs(subject)(15, noop);
  });

  it('should handle unnamed ES5 function - single argument', () => {
    const subject = function(a) {
      expect(a).to.be.undefined;
    };
    vargs(subject)();
  });

  it('should handle unnamed ES5 function - single argument with default params', () => {
    const subject = function(a = 15) {
      expect(a).to.be.equal(15);
    };
    vargs(subject)();
  });

  it('should handle unnamed ES5 function - single argument with callback', () => {
    const subject = function(a) {
      expect(a).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  it('should handle unnamed ES5 function - single argument with callback and default params', () => {
    const subject = function(a = 15) {
      expect(a).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  it('should handle unnamed ES5 function - multiple arguments', () => {
    const subject = function(a, b) {
      expect(a).to.be.undefined;
      expect(b).to.be.undefined;
    };
    vargs(subject)();
  });

  it('should handle unnamed ES5 function - multiple arguments with callback', () => {
    const subject = function(a, b) {
      expect(a).to.be.undefined;
      expect(b).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  it('should handle unnamed ES5 function - multiple arguments with callback and default params', () => {
    const subject = function(a = 15, b = 25) {
      expect(a).to.be.equal(15);
      expect(b).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  // ES6
  it('should handle ES6 function - no arguments', () => {
    const subject = () => {
      // Just expect the function to be called (cant use arguments due to => binding)
      expect(null).to.be.null;
    };
    vargs(subject)();
  });

  it('should handle ES6 function - no arguments with overload', () => {
    const subject = () => {
      // Just expect the function to be called (cant use arguments due to => binding)
      expect(null).to.be.null;
    };
    vargs(subject)(15, noop);
  });

  it('should handle ES6 function - single argument', () => {
    // prettier-ignore
    const subject = (a) => {
      expect(a).to.be.undefined;
    };
    vargs(subject)();
  });

  it('should handle ES6 function - single argument with default params', () => {
    const subject = (a = 15) => {
      expect(a).to.be.equal(15);
    };
    vargs(subject)();
  });

  it('should handle ES6 function - single argument with callback', () => {
    // prettier-ignore
    const subject = (a) => {
      expect(a).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  it('should handle ES6 function - single argument with callback and default params', () => {
    const subject = (a = 15) => {
      expect(a).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  it('should handle ES6 shorthand function - single argument', () => {
    const subject = a => expect(a).to.be.undefined;
    vargs(subject)();
  });

  it('should handle ES6 shorthand function - single argument with default params', () => {
    const subject = (a = 15) => expect(a).to.be.equal(15);
    vargs(subject)();
  });

  it('should handle ES6 shorthand function - single argument with callback', () => {
    const subject = a => expect(a).to.be.equal(noop);
    vargs(subject)(noop);
  });

  it('should handle ES6 shorthand function - single argument with callback and default params', () => {
    const subject = (a = 15) => expect(a).to.be.equal(noop);
    vargs(subject)(noop);
  });

  it('should handle ES6 function - multiple arguments', () => {
    const subject = (a, b) => {
      expect(a).to.be.undefined;
      expect(b).to.be.undefined;
    };
    vargs(subject)();
  });

  it('should handle ES6 function - multiple arguments with callback', () => {
    const subject = (a, b) => {
      expect(a).to.be.undefined;
      expect(b).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });

  it('should handle ES6 function - multiple arguments with callback and default params', () => {
    const subject = (a = 15, b = 25) => {
      expect(a).to.be.equal(15);
      expect(b).to.be.equal(noop);
    };
    vargs(subject)(noop);
  });
});
