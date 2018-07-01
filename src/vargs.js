const isFunction = require('./helper/is-function');
const functionArguments = require('@alesmenzel/function-arguments');

/**
 * Variable amount of arguments
 *
 * @param {Function} fnc
 */
const vargs = fnc => {
  if (!isFunction(fnc)) {
    throw new Error(
      `A function must be passed to vargs. Passed type '${typeof fnc}'.`
    );
  }

  const fncArgs = functionArguments(fnc);

  return (...args) => {
    if (!args.length) {
      fnc();
      return;
    }

    const lastArgument = args.pop();
    if (!isFunction(lastArgument)) {
      fnc(...args, lastArgument);
    }

    const numberOfMissingArguments = fncArgs.length - (args.length + 1);
    const filler = Array.from({ length: numberOfMissingArguments });
    const newArgs = [...args, ...filler];

    fnc(...newArgs, lastArgument);
  };
};

module.exports = vargs;
