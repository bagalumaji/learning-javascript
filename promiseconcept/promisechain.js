function evenNumberPromise(value, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value % 2 === 0) {
        resolve(value);
      } else {
        reject(new Error("number is not even"));
      }
    }, timeout);
  });
}

evenNumberPromise(6, 3000)
  .then((result) => {
    printMessage(result);
    return evenNumberPromise(70, 2000);
  })
  .then((result) => console.log(result))
  .catch((err) => printMessage(err.message));

function printMessage(message) {
  console.log(message);
}
