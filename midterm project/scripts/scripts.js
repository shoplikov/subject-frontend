//// SOUNDS //// 
  // Giraffe sound
  const giraffe_audio = new Audio("sounds/giraffe.mp3");
  function playSound() {
    giraffe_audio.play();
  }
  document.getElementById("play-sound-giraffe").addEventListener("click", playSound);

  // Floppa sound
  const floppa_audio = new Audio("sounds/floppa.mp3");
  function playSoundFloppa() {
    floppa_audio.play();
  }
  document.getElementById("play-sound-floppa").addEventListener("click", playSoundFloppa);

  // Headgehog sound
  const headgehog_audio = new Audio("sounds/hedgehog.mp3");
  function playSoundHeadgehog() {
    headgehog_audio.play();
  }
  document.getElementById("play-sound-headgehog").addEventListener("click", playSoundHeadgehog);

  // Panda sound
  const panda_audio = new Audio("sounds/panda.mp3");
  function playSoundPanda() {
    panda_audio.play();
  }
  document.getElementById("play-sound-panda").addEventListener("click", playSoundPanda);

  // Panda sound
  const sloth_audio = new Audio("sounds/sloth.mp3");
  function playSoundSloth() {
    sloth_audio.play();
  }
  document.getElementById("play-sound-sloth").addEventListener("click", playSoundSloth);

  // Pango sound
  const pango_audio = new Audio("sounds/pangolion.m4a");
  function playSoundPango() {
    pango_audio.play();
  }
  document.getElementById("play-sound-pango").addEventListener("click", playSoundPango);

//// OBJECTS ////

// JavaScript object with a list of animals
const animalList = {
  mammals: ["Giraffe", "Panda", "Sloth", "Caracal", "Hedgehog"],
  birds: [],
  reptiles: ["Pangolin"],
  amphibians: [],
  fish: [],
};


// Function to display an alert with the list of animals
function displayAnimalList() {
  let animalAlert = "List of Animals:\n";

  for (const category in animalList) {
      animalAlert += `\n${category}:\n`;
      animalList[category].forEach((animal) => {
          animalAlert += `- ${animal}\n`;
      });
  }

  alert(animalAlert);
}
document.getElementById("listAnimals").addEventListener("click", function() {
  displayAnimalList();
});

// Number of animals
// Loop through each category in the animalList and add the length of the array to the total
function calculateTotalAnimals() {
  let totalAnimals = 0;

  // Loop through each category in the animalList and add the length of the array to the total
  for (const category in animalList) {
    totalAnimals += animalList[category].length;
  }

  // Output the total number of animals
  alert(`Total number of animals: ${totalAnimals}`);
}

// Add a click event listener to the button
const findAnimalsButton = document.getElementById("findAnimalsButton");

if (findAnimalsButton) {
  findAnimalsButton.addEventListener("click", calculateTotalAnimals);
}

// Text animation
const letters = document.querySelectorAll('.letter');

// Function to add a delay between animating each letter
const animateLetters = (letters, delay) => {
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.animation = 'bounce 0.5s ease infinite alternate';
    }, index * delay);
  });
};

animateLetters(letters, 100); // Adjust the delay (in milliseconds) to your preference

// Login validation

// Function to toggle between login and password pages
