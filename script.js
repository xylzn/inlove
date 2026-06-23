const btn = document.getElementById("letterBtn");
const music = document.getElementById("bgMusic");
const letter = document.getElementById("letter");
const heartsContainer = document.querySelector('.hearts-container');

// Generate floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = ['❤️', '💕', '💗', '💖', '💘'][Math.floor(Math.random() * 5)];
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 6 + 4) + 's';
    heart.style.animationDelay = (Math.random() * 2) + 's';
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create initial hearts
for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 300);
}

// Keep creating hearts
setInterval(createHeart, 500);

btn.addEventListener("click", () => {

    // mulai musik
    music.play();

    // scroll ke surat
    letter.scrollIntoView({
        behavior: "smooth"
    });

    // Add confetti effect
    createConfetti();

});

// Confetti effect
function createConfetti() {
    const colors = ['#ff7b89', '#ffb38a', '#ff6f7f', '#ff9d7a', '#c64f72', '#fff'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);

        // Animate confetti
        const animation = confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        // Remove confetti after animation
        animation.onfinish = () => confetti.remove();
    }
}