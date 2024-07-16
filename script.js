function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    if (password === 'disney') {
        message.style.color = '#00ff00';
        message.innerText = 'Félicitations ! Tu gagnes 2 places pour DisneyLand Paris !';
        showConfetti();
    } else {
        message.style.color = 'red';
        message.innerText = 'Essayer une nouvelle fois';
    }
}

function showConfetti() {
    const confettiElement = document.createElement('div');
    confettiElement.id = 'confetti';
    document.body.appendChild(confettiElement);

    confettiElement.style.display = 'block';
    // Utiliser une bibliothèque de confettis comme confetti.js
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confettiElement.style.display = 'none';
        confettiElement.remove();
    }, 5000);
}

// Inclure la bibliothèque confetti.js
(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    script.onload = function() {
        console.log('Confetti library loaded');
    };
    document.head.appendChild(script);
})();
