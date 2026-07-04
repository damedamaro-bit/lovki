document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loaderWrapper');
    const stepCelebrate = document.getElementById('stepCelebrate');
    const surpriseButton = document.getElementById('surpriseButton');

    function fireConfetti() {
        if (typeof confetti !== 'function') return;
        confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#f36363', '#ffffff', '#263241']
        });
    }

    function fireSideCannons() {
        if (typeof confetti !== 'function') return;
        const end = Date.now() + 2000;
        const colors = ['#bb0000', '#ffffff'];
        (function frame() {
            confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors });
            confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors });
            if (Date.now() < end) requestAnimationFrame(frame);
        })();
    }

    const bizcocho1Shape = document.getElementById('bizcocho1Shape');
    const cremaShape = document.getElementById('cremaShape');
    setTimeout(() => bizcocho1Shape.classList.add('reveal'), 2000);
    setTimeout(() => cremaShape.classList.add('reveal'), 4600);

    setTimeout(fireSideCannons, 6800);
    setTimeout(() => loaderWrapper.classList.add('slide-up-fade-out'), 8400);
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
        stepCelebrate.classList.add('active');
        fireConfetti();
    }, 9000);

    const cardOverlay = document.getElementById('cardOverlay');
    const cardBook = document.getElementById('cardBook');
    const cardOpenHint = document.getElementById('cardOpenHint');
    const cardClose = document.getElementById('cardClose');

    surpriseButton.addEventListener('click', () => {
        cardBook.classList.remove('flipped');
        cardOverlay.classList.add('active');
        fireConfetti();
    });

    cardOpenHint.addEventListener('click', () => {
        cardBook.classList.toggle('flipped');
    });

    cardClose.addEventListener('click', () => {
        cardOverlay.classList.remove('active');
    });
});
