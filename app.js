const board = document.querySelector('#board');
const colors = ['#ff1900', '#b300ff', '#0099ff', '#ff7700', '#00ff6a', '#e1ff00', '#00f7ff'];
const SQUARES_NUMBER = 2090;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', setColor);

	square.addEventListener('mouseleave', removeColor);

	board.append(square);
}

function setColor(event) {
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
	const element = event.target;
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 3px #000`;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}