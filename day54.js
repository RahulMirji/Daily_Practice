// Select elements
const heading = document.querySelector("#heading");
const changeTextButton = document.querySelector("#changeText");
const changeColorButton = document.querySelector("#changeColor");

// Change text content on button click
changeTextButton.addEventListener("click", () => {
  heading.textContent = "Hi I'm Rahul and Hope everyone enjoying this series, no matter who are following,this series is just a battle between my brain and mind lets see who wins. I really learnt dicipline with this and I'm imporving my communication skills as well and lets end this year with a happy note.  ";
});

// Change color on button click
changeColorButton.addEventListener("click", () => {
  heading.style.color = "white";
});
