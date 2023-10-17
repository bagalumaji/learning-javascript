const str = "hello";

function getVowelConsonantCount(str) {
  str = str.toLowerCase();
  const count = { vowels: 0, consonant: 0 };
  ///const vowels = new Set(["a", "e", "o", "u", "i"]);
  const vowels = "aeiouAEIOU";

  for (const ch of str) {
    if (vowels.includes(ch)) {
      count["vowels"]++;
    } else if (ch >= "a" && ch <= "z") {
      count["consonant"]++;
    }
  }
  return count;
}

console.log(getVowelConsonantCount(str));
