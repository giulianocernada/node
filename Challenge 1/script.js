const fs = require('fs'); //Ask for filesystem

let currentFloor = 0;

fs.readFile('./santa.txt', (err, data) => {
	console.time('readySetGo');
	let text = data.toString();
	let arrText = text.split('');
	for(let i = 0; i < arrText.length; i++){
		if (arrText[i] === '('){
			currentFloor += 1;
		} else {
			currentFloor -= 1;
		}
	}
	console.log(currentFloor);
	console.timeEnd('readySetGo');
})