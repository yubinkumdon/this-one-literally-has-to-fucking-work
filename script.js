// Configuration for flies and phrases
const flyCount = 10; // Number of flies
const phrases = [
    "LFG", "$FLY", "Fuk my vape died", "Trench God", "Alpha soon...", 
    "wen binance", "Left my girl to chase bags", "pnut was kinda a hoe", 
    "I left my girl to sit on this wall"
];
const flyContainer = document.getElementById("fly-container");

// Helper to generate random position within the viewport
function getRandomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
}

// Creates flies and sets up their movement and text display
function createFlies() {
    for (let i = 0; i < flyCount; i++) {
        const fly = document.createElement("div");
        fly.classList.add("fly");

        // Create the phrase text for each fly
        const phrase = document.createElement("span");
        phrase.classList.add("phrase");
        fly.appendChild(phrase);
        
        // Random initial position
        const { x, y } = getRandomPosition();
        fly.style.left = `${x}px`;
        fly.style.top = `${y}px`;

        // Start movement and text animation for the fly
        animateFly(fly, phrase);
        flyContainer.appendChild(fly);
    }
}

// Moves flies randomly and controls phrase visibility
function animateFly(fly, phrase) {
    const moveInterval = Math.random() * 2000 + 1000; // Interval between moves
    const phraseInterval = Math.random() * 3000 + 2000; // Interval for phrase visibility

    setInterval(() => {
        // Move the fly to a new random position
        const { x, y } = getRandomPosition();
        fly.style.transform = `translate(${x - fly.offsetLeft}px, ${y - fly.offsetTop}px)`;
    }, moveInterval);

    setInterval(() => {
        // Show a random phrase
        phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        phrase.style.opacity = 1; // Show text

        // Hide text after a delay to allow for readability
        setTimeout(() => {
            phrase.style.opacity = 0;
        }, 2000); // Visible for 2 seconds
    }, phraseInterval);
}

// Initialize flies on page load
createFlies();
