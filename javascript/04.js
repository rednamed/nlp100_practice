const input =
	'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.';

const main = (input = '') => {
	return input
		.split(' ')
		.map((value, index) =>
			[1, 5, 6, 7, 8, 9, 15, 16, 19].includes(index + 1) ? value.substring(0, 1) : value.substring(0, 2)
		)
		.reduce((result, value, index) => {
			result.set(value, index + 1);
			return result;
		}, new Map());
};

console.log(main(input));
