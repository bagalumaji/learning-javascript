//Write a Java program to count the number of words in a string?

let count = str => str.split(' ').length;

console.log("count of words: ", count("hello world"))

const count1 = str => {
    let cnt = 0;
    const word = str.split(' ');
    for (let i = 0; i < word.length; i++) {
        cnt++;
    }
    return cnt;
}
console.log("count of words: ", count1("hello world of js"))
