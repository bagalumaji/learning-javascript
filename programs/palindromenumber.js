function isPalindrome(num) {
  const numCopy = num;
  let reverse = 0;
  while (num !== 0) {
    let d = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + d;
  }

  if (reverse === numCopy) {
    console.log(`${numCopy} is palindrome number`);
  } else {
    console.log(`${numCopy} NOT is palindrome number`);
  }
}
