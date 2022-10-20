const firstPromise = new Promise((resolve, reject) => {
  const number = 11;
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error("not right"));
  }
});

firstPromise
  .then((val) => console.log("correct"))
  .catch((error) => console.log(error));
