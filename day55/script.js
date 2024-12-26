// Select elements
const output = document.querySelector("#output");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

let intervalId = null; // To store interval ID

// setTimeout: Display a message after 3 seconds
setTimeout(() => {
  output.textContent = "Hello, this appeared after 3 seconds!";
}, 3000);

// Start Interval: Update the message every 2 seconds
startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      output.textContent = "This message updates after 2 seconds!";
    }, 200);
  }
});

// Stop Interval: Stop the repeated updates
stopButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId); // Stop the interval
    intervalId = null; // Reset the interval ID
    output.textContent = "Interval stopped!";
  }
});
