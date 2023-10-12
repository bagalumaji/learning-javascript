function User(username, password) {
  this.username = username;
  this.password = password;
  //return this; implicitly returns this
}

// const userOne = User("userOne", "userOnePassword");
// const userTwo = User("userTwo", "userTwoPassword");

// console.log(userOne); // output of second user will be printed

const userOne = new User("userOne", "userOnePassword");
const userTwo = new User("userTwo", "userTwoPassword");

console.log(userOne); // output of first user will be printed

console.log(userTwo); // output of second user will be printed
