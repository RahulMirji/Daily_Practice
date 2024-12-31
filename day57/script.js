// Selecting elements
const heading = document.getElementById("heading");
const button = document.getElementById("clickButton");
const output = document.getElementById("output");

// Adding an onMouseOver event to the heading
heading.addEventListener("mouseover", () => {
  heading.style.color = "blue";
  output.textContent = "You hovered over the heading!";
});

// Adding an onMouseOut event to reset heading style
heading.addEventListener("mouseout", () => {
  heading.style.color = "#333";
  output.textContent = "Hover effect removed.";
});

// Adding an onClick event to the button
("click", () => {
  output.textContent = "You clicked the button!";
});
