'use strict';
let insertsort = require('./insertsort.js.js');
const bigArr = require('./longlist.js.js');

describe('Insert sort tests', () => {
  it('Sorts a short array', () => {
    expect(insertsort([4, 2, 7, 9]).result).toEqual([2, 4, 7, 9]);
  });
  it('sorts any length array', () => {
    expect(insertsort([...bigArr]).result).toEqual(
      [...bigArr].sort((a, b) => {
        return a > b ? 1 : -1;
      })
    );
  });
  it('cant sort an array of strings', () => {
    expect(insertsort(['a', 'b', 'z', 'g', 'y']).result).not.toBe([
      'a',
      'b',
      'g',
      'y',
      'z'
    ]);
  });
});