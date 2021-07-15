const input = 'パタトクカシーー';

const main = (input = '') => {
	return input
		.split('')
		.filter((value, index) => {
			return [1, 3, 5, 7].includes(index + 1);
		})
		.join('');
};

console.log(main(input));
