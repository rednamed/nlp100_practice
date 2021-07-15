const inputX = 'paraparaparadise';
const inputY = 'paragraph';

const main = (inputX = '', inputY = '') => {
	const biX = charNgram(inputX, 2);
	const biY = charNgram(inputY, 2);
	const uniqBiX = Array.from(new Set(biX));
	const uniqBiY = Array.from(new Set(biY));
	const union = Array.from(new Set(uniqBiX.concat(uniqBiY)));
	const intersection = uniqBiX.filter((value) => uniqBiY.includes(value));
	const setDifferenceXtoY = uniqBiX.filter((value) => !uniqBiY.includes(value));
	const setDifferenceYtoX = uniqBiY.filter((value) => !uniqBiX.includes(value));
	const XincludesSe = uniqBiX.includes('se') ? 'Yes' : 'No';
	const YincludesSe = uniqBiY.includes('se') ? 'Yes' : 'No';
	console.table({
		biX,
		biY,
		union,
		intersection,
		setDifferenceXtoY,
		setDifferenceYtoX,
		XincludesSe,
		YincludesSe
	});
};

const charNgram = (sequence = '', n) => {
	const targetArray = (Array.isArray(sequence) ? sequence.join('') : sequence).split(' ').join('').split('');
	return ngram(targetArray, n);
};

const ngram = (targetArray, n, sep = '') => {
	return targetArray
		.map((value, index) => (targetArray.length >= index + n ? targetArray.slice(index, index + n).join(sep) : null))
		.filter((value) => value != null);
};

main(inputX, inputY);
