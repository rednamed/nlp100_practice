const main = (target) => {
	return cipher(target);
};

const cipher = (targetString = '') =>
	targetString
		.split('')
		.map((character) => encode(character))
		.join('');
const encode = (character = '') =>
	'abcdefghijklmnopqrstuvwxyz'.includes(character) ? String.fromCharCode(219 - character.charCodeAt()) : character;

console.log(main('あいうえお'));
