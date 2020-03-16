let person = {
  name: "Hakan",
  alter: 40,

  sagNameAlter() {
    alert(`${this.name} ${this.alter}`);
  }
};
person.sagNameAlter();
console.log(person.name);
console.log(person.alter);
