const fs = require('fs'); //Ask for filesystem

let countUp = 0;
let countDown = 0;

fs.readFile('./santa.txt', (err, data) => {
	console.time('readySetGo');
	let text = data.toString();
	let arrText = text.split('');
	for(let i = 0; i < arrText.length; i++){
		if (arrText[i] === '('){
			countUp += 1;
		} else {
			countDown -= 1;
		}
	}
	let totalCount = countUp + countDown;
	console.log(totalCount);
	console.timeEnd('readySetGo');
})