const stages = document.querySelectorAll('.stage');
const resetBtn = document.getElementById('reset-btn');

// Function to strike out a stage
function strikeOutStage(event) {
	event.preventDefault();
	const stage = event.currentTarget;
	stage.classList.add('disabled');
	const strike = document.createElement('div');
	strike.classList.add('strike');
	stage.appendChild(strike);
}

// Function to reset all stages
function resetStages(event) {
	event.preventDefault();
	stages.forEach((stage) => {
		stage.classList.remove('disabled');
		const strike = stage.querySelector('.strike');
		if (strike) {
			strike.remove();
		}
	});
}

// Add event listeners for touch and click events
stages.forEach((stage) => {
	stage.addEventListener('touchstart', strikeOutStage);
	stage.addEventListener('click', strikeOutStage);
});

resetBtn.addEventListener('touchstart', resetStages);
resetBtn.addEventListener('click', resetStages);
