const isLogged = true;

const validateLogging = (isLogged) =>
  new Promise((resolve, reject) => {
    if (isLogged) resolve(Math.random());
    else reject(new Error("isLogged is false"));
  });

const checkIfGreater = (number) =>
  new Promise((resolve, reject) => {
    if (number > 0.5) resolve({ name: "John", age: 24 });
    else reject(new Error(`${number} is less than 0.5`));
  });

validateLogging(isLogged)
  .then((number) => checkIfGreater(number))
  .then((obj) => console.log(obj))
  .catch((err) => console.log(err));