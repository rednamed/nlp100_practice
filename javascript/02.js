const input1 = 'パトカー';
const input2 = 'タクシー';

const main = (input1 = '', input2 = '') => {
	return Array(input1.length)
		.fill(1)
		.map((one, index) => index)
		.map((index) => input1[index] + input2[index])
		.reduce((result, target) => result + target, '');
};

console.log(main(input1, input2));
