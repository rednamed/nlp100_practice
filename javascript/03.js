const input = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.';

const main = (input = '') => {
	return input
		.replace(/[^A-Za-z ]/g, '')
		.split(' ')
		.map((value) => value.length);
};

console.log(main(input));
