/*
const fiz = function () {
	console.log("$$$$$$$$$$$$");
	for (let num = 1; num < 44; num++) {
		var result = "";
		if (num % 3 === 0) {
			result += "Fiz";
		}
		if (num % 5 === 0) {
			result += "Buzz";
		}
		console.log(result || num);
	}
};
fiz();
*/

/*
const fiz = function () {
	console.log("$$$$$$$$$$$$");
	for (let num = 1; num < 44; num++) {
		if (num % 3 === 0 && num % 5 === 0) {
			console.log(`FizzBuzz ${num}`);
		}
		if (num % 3 === 0) {
			console.log("Buzz",num);
		}
		console.log("FIzz",num);
	}
};
fiz();
*/

//!ProMode
for (let num = 1; num < 40; num++) console.log( `${num % 3 == 0 ? '' : 'Fizz'}${num % 5 == 0 ? '' : 'Buzz'}` || num,);
