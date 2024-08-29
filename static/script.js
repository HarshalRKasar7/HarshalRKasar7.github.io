// script.js

// Function to create typing effect
function typingEffect(element, words, speed) {
    let text = '';
    let char = 0;
    let timer;

    function type() {
        if (char < words.length) {
            text += words[char];
            element.textContent = text;
            char++;
        } else {
            clearInterval(timer);
        }
    }

    // Start typing
    timer = setInterval(type, speed);

    // When typing is done, clear interval and reset
    return () => {
        clearInterval(timer);
        char = 0;
        text = '';
    };
}

// Select the element to apply the typing effect
const titleElement = document.querySelector('h1');

// Words to type out
const words = ['Hi, I\'m Harsh!'];

// Speed of typing (lower values mean faster)
const speed = 75; // milliseconds

// Apply typing effect
typingEffect(titleElement, words[0], speed);

// After typing first sentence, wait a bit and then type second sentence
setTimeout(() => {
    typingEffect(titleElement, words[1], speed);
}, 5000);
