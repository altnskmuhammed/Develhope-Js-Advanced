function sum(...param) {
  return param.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
