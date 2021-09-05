import Big from "big-js";
import isNumber from "./isNumber";
import operate from "./operate";

export default function calculate(obj, buttonName) {
	if (buttonName === "ac") {
		return {
			total: null,
			next: null,
			operation: null,
		};
	}

	if (isNumber(buttonName)) {
		if (buttonName === "0" && obj.next === "0") {
			console.log("clicked");
			return {};
		}

		// If there is an operation, update text
		if (obj.operation) {
			if (obj.next) {
				return { next: obj.next + buttonName };
			}
			return { next: buttonName };
		}

		// If there is no operation, update next and clear value
		if (obj.next) {
			const next = obj.next === "0" ? buttonName : obj.next + buttonName;
			return {
				next,
				total: null,
			};
		}

		return {
			next: buttonName,
			total: null,
		};
	}

	if (buttonName === "%") {
		if (obj.operation && obj.next) {
			const result = operate(obj.total, obj.next, obj.operation);
			console.log(result);

			return {
				total: Big(result).div(Big("100")).toString(),
				next: null,
				operation: null,
			};
		}

		if (obj.next) {
			return {
				next: Big(obj.next).div(Big("100")).toString(),
			};
		}

		return {};
	}

	if (buttonName === ".") {
		if (obj.next) {
			if (obj.next.includes(".")) {
				return {};
			}
			return {
				next: obj.next + ".",
			};
		}
		return { next: "0." };
	}

	if (buttonName === "=") {
		if (obj.next && obj.operation) {
			return {
				total: operate(obj.total, obj.next, obj.operation),
				next: null,
				operation: null,
			};
		} else {
			// '=' with no operation, nothing to do
			return {};
		}
	}

	if (buttonName === "+/-") {
		if (obj.next) {
			return { next: (-1 * parseFloat(obj.next)).toString() };
		}
		if (obj.total) {
			return { total: (-1 * parseFloat(obj.total)).toString() };
		}
		return {};
	}

	// User pressed an operation button and there is an existing operation
	if (obj.operation) {
		return {
			total: operate(obj.total, obj.next, obj.operation),
			next: null,
			operation: buttonName,
		};
	}

	// No operation yet, but the user typed one

	// The user hasn't typed a number yet, just save the operation
	if (!obj.next) {
		return { operation: buttonName };
	}

	// Save the operation and shift 'next' into 'total'
	return {
		total: obj.next,
		next: null,
		operation: buttonName,
	};
}
