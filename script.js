const text = "Full Stack Developer | Open Source Enthusiast";
const typingElement = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Start typing after a short delay
    setTimeout(type, 1000);
});