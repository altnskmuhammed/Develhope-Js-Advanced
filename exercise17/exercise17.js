const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const json = JSON.stringify(
  Object.entries(person).filter(
    ([key]) => key.includes("id") || key.includes("age")
  )
);

console.log(json); // Should return: { id: 1, age: 25 }
