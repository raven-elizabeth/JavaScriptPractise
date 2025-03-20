// As a beginner, I have used lots of comments to help me remember my methods and to make debugging easier

// Create a function to animate the sleigh
function moveSleigh() {
    // Initialise sleigh in JavaScript
    const sleigh = document.getElementById("sleigh");
    // Match position to CSS
    let position = -30;
    // Make move function repeat continuosly every 90m/s
    const interval = setInterval(move, 90);
    // Create a function to move the sleigh in the right direction
    function move() {
    // Stop the movement once the sleigh reaches the edge of the webpage
    if (position == 90) {
        clearInterval();
    } 
    else {
        // Alter sleigh position by +1
        position++;
        sleigh.style.left = position + "em";
    }
    }
}

//add media query? - make sure edge of webpage matches screen size
