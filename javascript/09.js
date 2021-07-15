const input =
	'I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind .';

const main = (input = '') => {
	return input
		.split(' ')
		.map((word) => action(word))
		.join(' ');
};
const action = (word = '') => {
	if (word.length <= 4) return word;
	const wordArray = word.split('');
	const first = wordArray.shift();
	const last = wordArray.pop();
	const randomizedArray = randomize(wordArray);
	randomizedArray.unshift(first);
	randomizedArray.push(last);
	return randomizedArray.join('');
};

const randomize = (wordArray = new Array()) => {
	return Array(wordArray.length)
		.fill(1)
		.map((one, index) => ({ index, value: Math.random() }))
		.sort((a, b) => (a.value > b.value ? -1 : 1))
		.map((value) => value.index)
		.reduce((result, index) => {
			result.push(wordArray[index]);
			return result;
		}, new Array());
};

console.log(main(input));
