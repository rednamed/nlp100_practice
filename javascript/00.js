const input = 'stressed';

const main = (input = '') => {
	return input.split('').reverse().join('');
};

console.log(main(input));
