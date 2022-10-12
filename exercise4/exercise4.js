class Person {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }
  set lastName(lastName) {
    this.lastName = lastName;
  }
  get firstName() {
    return this.firstName;
  }
  get lastName() {
    return this.lastName;
  }
  get fullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
