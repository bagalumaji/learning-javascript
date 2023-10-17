"use strict";

const str = "hello javascript";

const countOccurrences = {};
function getCharacterOccuranceCount(str) {
  for (let ch of str) {
    if (countOccurrences.hasOwnProperty(ch)) {
      countOccurrences[ch] = countOccurrences[ch] + 1;
    } else {
      countOccurrences[ch] = 1;
    }
  }
  return countOccurrences;
}

console.log(getCharacterOccuranceCount(str));

// using Map data structure

function getCharacterOccuranceCount1(str) {
  const map = new Map();
  for (let ch of str) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }
  return map;
}

console.log(getCharacterOccuranceCount1(str));
