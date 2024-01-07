const imageContainer = document.getElementById("image-container");

const textToDisplay = "Today marks not just the passing of another year but the celebration of a life filled with love, wisdom, and grace a life that has touched so many, especially mine. You are not just a mother; you are a source of inspiration, a pillar of strength, and the embodiment of love. Your laughter has been the melody to our family's song. Your sacrifices, your kindness, and your unwavering love have shaped the person I am today and our entire family. You are also a grandma now, and just like how you raised me and Renny, Noelle is lucky to have you as her grandmother. As you reach this milestone, I want to express my deepest gratitude for the countless sacrifices you've made, the lessons you've imparted, and the love you've showered upon us. You are not just 60 years old; you are 60 years young, with so much more love to give and wisdom to share. May this day be a reflection of the joy you've brought into our lives. May it be filled with the warmth of love, the company of those who cherish you, and the delight of seeing the impact you've had on the world around you. Happy Birthday, Mom! Here's to the next chapter of your incredible journey. May it be filled with love, laughter, and all the happiness you deserve. \n\n With all my love - Jerrick"; // Edit the text as needed

const buttonElement = document.createElement("button");
buttonElement.textContent = "Click here!";
buttonElement.onclick = function() {
    // Pause all audio elements on the page
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => audio.pause());
    window.open("https://www.youtube.com/watch?v=0GvPQWjFICc", "_blank");
};

let currentImageIndex = 0; // Keep track of the current image index

function generateText() {
    const displayElement = document.getElementById("rolling-text");
    displayElement.style.fontSize = '28px';
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


function generateImageGallery(imageFolder) {
    // List of image filenames in the local folder
    const imageFiles = [
        "0.jpg",
        // "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        // Add more image filenames as needed
    ];

    // Create complete image URLs and display them
    const images = imageFiles.map(file => `${imageFolder}/${file}`);
    displayNextImage(images);

    // Generate rolling text in the left half of the screen
    generateText();
}

// Function to display the next image in the loop
function displayNextImage(images) {
    // Remove previous images
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

    // Display the current image
    const imgElement = document.createElement("img");
    imgElement.src = images[currentImageIndex];
    imgElement.alt = "Image";
    imageContainer.appendChild(imgElement);

    // Increment the image index for the next iteration
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Set a timeout to display the next image after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
        displayNextImage(images);
    }, 3000); // Adjust the duration as needed (in milliseconds)
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
    createMultipleShootingStars(3)
    // Change "path/to/your/image/folder" to the actual path of your image folder
    generateImageGallery("photos");
};