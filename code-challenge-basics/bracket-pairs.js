'use strict';

//attempt one

var isValid = function(string) {
  let obj = {
    '{': 0,
    '(': 0,
    '[': 0,
    '}': 0,
    ')': 0,
    ']': 0
  };

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '[' || '{' || '(') {
      obj[string[i]]++;
    }
    if (string[i] === '[') {
      if (string[i + 1] === ')' || string[i + 1] === '}') {
        return false;
      }
    }
    if (string[i] === '{') {
      if (string[i + 1] === ']' || string[i + 1] === ')') {
        return false;
      }
    }
    if (string[i] === '(') {
      if (string[i + 1] === ']' || string[i + 1] === '}') {
        return false;
      }
    }

    if (string[i] === ']' || '}' || ')') {
      obj[string[i]]++;
    }
  }

  if (obj['{'] === obj['}'] && obj['['] === obj[']'] && obj['('] === obj[')']) {
    return true;
  } else {
    return false;
  }
};
