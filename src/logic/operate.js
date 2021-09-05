import Big from "big-js";

export default function operate(numberOne, numberTwo, operation) {
	const one = Big(numberOne || "0");
	const two = Big(numberTwo || (operation === "÷" || operation === "x" ? "1" : "0"));

	console.log(one);
	console.log(two);

	if (operation === "+") {
		return one.plus(two).toString();
	} else if (operation === "-") {
		return one.minus(two).toString();
	} else if (operation === "x") {
		return one.times(two).toString();
	} else if (operation === "÷") {
		if (two === "0") {
			alert("Divide by 0 error");
			return "0";
		} else {
			return one.div(two).toString();
		}
	}

	throw Error(`Unknown operation '${operation}'`);
}
