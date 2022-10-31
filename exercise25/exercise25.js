const user = {
  id: 1,
  name: "John",
  age: 25,
};

for (const x in user) {
  localStorage.setItem(x, user[x]);
}
