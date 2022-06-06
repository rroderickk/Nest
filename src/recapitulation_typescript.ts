const myName = 'CheatModeS4';
const myAge = 49;

const sum = (a: number, b: number): number => a + b;

class Person {
	constructor(private age: number, private name: string) {}

	getSummary() {
		return `myNameIs ${this.name}, ${this.age}`;
	}
}
const person = new Person(myAge, myName);
const myPersonSummary = person.getSummary();

console.log(sum(2, 20)); //-> 22
console.log(myPersonSummary);
