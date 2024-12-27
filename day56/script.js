// Function to display the current date and time
function displayCurrentDate() {
    const currentDateElement = document.getElementById("currentDate");

    // Create a new Date object
    const now = new Date();

    // Format the date and time
    const formattedDate = `${now.toDateString()} ${now.toLocaleTimeString()}`;

    // Update the content of the paragraph
    currentDateElement.textContent = `Current Date & Time: ${formattedDate}`;
}

// Add event listener to the button
document.getElementById("updateDate").addEventListener("click", displayCurrentDate);

// Call the function on page load
displayCurrentDate();
