const input = 'I am an NLPer';

const main = (input = '') => {
	return [charNgram(input, 2), sentenceNgram(input, 2)];
};

const charNgram = (sequence = '', n) => {
	const targetArray = (Array.isArray(sequence) ? sequence.join('') : sequence).split(' ').join('').split('');
	return ngram(targetArray, n);
};
const sentenceNgram = (sequence = '', n) => {
	const targetArray = (Array.isArray(sequence) ? sequence.join('') : sequence).split(' ');
	return ngram(targetArray, n, ' ');
};

const ngram = (targetArray, n, sep = '') => {
	return targetArray
		.map((value, index) => (targetArray.length >= index + n ? targetArray.slice(index, index + n).join(sep) : null))
		.filter((value) => value != null);
};

console.log(main(input));
