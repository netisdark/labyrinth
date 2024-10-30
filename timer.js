let minutes = 1;
let seconds = 60;
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');

function updateTimer() {
  seconds--;
  if (seconds === 0) {
    seconds = 60;
    if(minutes === 0){
      location.reload();
    }
    else{
      minutes--;

    }
  }
  
  minDisplay.textContent = String(minutes).padStart(2, '0');
  secDisplay.textContent = String(seconds).padStart(2, '0');
}

    setInterval(updateTimer, 1000);