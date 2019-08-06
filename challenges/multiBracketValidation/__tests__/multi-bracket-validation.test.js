'use strict';

let validation = require('../multi-bracket-validation.js');

describe('Multi Bracket Validation', () => {

  it('returns true on ()', () => {
    expect(validation.multiBracketValidation('()')).toBeTruthy();
  });

  it('returns false on unbalanced (){[]', () => {
    expect(validation.multiBracketValidation('(){[]')).toBeFalsy();
  });
  
  it('ignores non essential characters', () => {
    expect(validation.multiBracketValidation('[]{a()}')).toBeTruthy();
  });

});

