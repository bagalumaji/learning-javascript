const randomeNumberPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const random = Math.random();
    if (random > 0.5) {
      resolve(random);
    } else {
      reject(new Error("value is small !!!"));
    }
  }, 2000);
});

randomeNumberPromise
  .then(function (result) {
    console.log("result is : ", result);
  })
  .catch(function (error) {
    console.log(error);
  });
