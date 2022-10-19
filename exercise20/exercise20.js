function repeatHello(callback) {
  let call = setInterval(callback, 1000);
  setTimeout(() => clearInterval(call), 1000);
}

repeatHello(() => console.log("hello"));
