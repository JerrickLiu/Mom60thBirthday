const textToDisplay = "Mama, Happy 60th Birthday! I'm sorry the whole family can't be there in person with you in Cabo, but I hope this website makes up for it. I hope you enjoy this present! And your time in Cabo with Baba. Let this website be a celebration of our entire family's appreciation for you, and one day when you look back on this, you are SHIAWASE. \n\n\n With love - Jerrick"; // Edit the text as needed
const buttonElement = document.createElement("button");
buttonElement.textContent = "Click here!";
buttonElement.onclick = function() {
    window.location.href = "pictures_page.html";
};

function generateText() {
    const displayElement = document.getElementById("rolling-text");
    let index = 0;

    function displayNextCharacter() {
        if (index < textToDisplay.length) {
            displayElement.innerHTML += textToDisplay.charAt(index);
            index++;
            setTimeout(displayNextCharacter, 100); // Adjust the delay (in milliseconds) to control the speed
        } else {
            // Text display finished, show the button at the bottom
            const bottomButtonContainer = document.getElementById("bottom-button-container");
            bottomButtonContainer.appendChild(buttonElement);
        }
    }

    displayNextCharacter();
}

function createMultipleShootingStars(numStars) {
    // Create regular stars to fill the background
    createStars();

    for (let i = 0; i < numStars; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`; // Randomize animation duration

        // Randomize starting position
        shootingStar.style.left = `${Math.random() * window.innerWidth}px`; // Randomize horizontal position
        shootingStar.style.top = `${Math.random() * window.innerHeight}px`; // Randomize vertical position

        shootingStar.style.animationTimingFunction = "linear"; // Use linear animation timing function for a constant speed

        // Randomize trajectory
        const angle = Math.random() * 360; // Random angle in degrees
        const distance = window.innerWidth + window.innerHeight; // Ensure the star crosses the entire screen
        const radians = angle * (Math.PI / 180); // Convert angle to radians

        const deltaX = Math.cos(radians) * distance;
        const deltaY = Math.sin(radians) * distance;

        // Set the transform property to move the shooting star along the trajectory
        shootingStar.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        document.body.appendChild(shootingStar);
    }
}


function createStars() {
    const numberOfStars = 100;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Randomize animation duration
        star.style.left = `${Math.random() * window.innerWidth}px`; // Randomize horizontal position
        star.style.top = `${Math.random() * window.innerHeight}px`; // Randomize vertical position
        document.body.appendChild(star);
    }
}


// Call the functions when the window has finished loading
window.onload = function () {
    generateText();
    createMultipleShootingStars(3);

};
