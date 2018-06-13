/*global describe, it */

import decimals, { decimalize } from '../src';

import InvalidSymbolError from '../src/error/InvalidSymbolError';
import chai from 'chai';

const { assert, expect } = chai;
const INVALID_SYMBOL = 'FOOBAR';

describe('decimals', () => {
  it('should export a decimals object', done => {
    assert.isTrue(typeof decimals === 'object');

    Object.keys(decimals).forEach(symbol => {
      assert.isString(symbol);
    });

    Object.values(decimals).forEach(item => {
      assert.isNumber(item);
    });

    done();
  });
});

describe('decimalize', () => {
  it('should decimalize the symbols correctly', done => {
    const amount = 1.880991119933992111999292944484;

    Object.keys(decimals).forEach(symbol => {
      const decimalized = decimalize(amount, symbol);
      const places = decimalized.toString().split('.')[1];

      assert.strictEqual(decimals[symbol], places.length);
    });

    done();
  });

  it('should throw an InvalidSymbolError if an invalid symbol is passed', done => {
    expect(() => decimalize(1, INVALID_SYMBOL).to.throw(InvalidSymbolError));

    done();
  });
});
