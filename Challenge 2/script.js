const fs = require('fs'); //Ask for filesystem

let piso = 0;
let basementVisit = 0; 
fs.readFile('./santa.txt', (err, data) => {
	console.time('readySetGo');
	let text = data.toString();
	let arrText = text.split('');
	console.log(arrText.length);
		for(let i = 0; i < arrText.length; i++){
			if (piso !== -1){
			if (arrText[i] === '('){
				piso += 1;
			} else {
				piso -= 1;
			}
			basementVisit = [i+1];
			}

		}
	console.log(basementVisit);
	console.timeEnd('readySetGo');
})