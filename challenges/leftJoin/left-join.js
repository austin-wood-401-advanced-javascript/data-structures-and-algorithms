'use strict';

const mergeHashmaps = (synonymsTable, antonymsTable) => {
  let results = [];
  for (let word in synonymsTable) {
    let syn = synonymsTable[word];
    let ant = antonymsTable.hasOwnProperty(word);
    if (antonymsTable[word] !== null) {
      results.push([word, syn, ant]);
    }
  }
  return results;
};

//Need an extra function that will handle the merging of the keys in results