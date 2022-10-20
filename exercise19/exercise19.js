function printAsyncName(callback, name) {
  let id = setInterval(callback, 1000);
  setTimeout(() => clearInterval(id), 3000);
  setTimeout(() => console.log(name), 2030);
}

printAsyncName(() => console.log("Hello"), "Muhammed");
