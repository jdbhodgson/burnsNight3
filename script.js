document.addEventListener("DOMContentLoaded", () => {
    const roundBoxes = document.querySelectorAll(".round-box");
    roundBoxes.forEach(box => {
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
        box.style.animationDelay = `${delay}s`;
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const croissant = document.getElementById("croissant");

    function randomPosition() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const x = Math.floor(Math.random() * vw);
        const y = Math.floor(Math.random() * vh);
        return { x, y };
    }

    var loc = randomPosition();
    var current = randomPosition();

    function moveCroissant() {
        dx = loc.x-current.x
        dy = loc.y-current.y
        current.x = current.x + 0.1*dx
        current.y = current.y + 0.1*dy
        croissant.style.transform = `translate(${current.x}px, ${current.y}px)`;
    }

    function updateLoc(){
        loc = randomPosition();
    }

    setInterval(updateLoc, 2000);
    setInterval(moveCroissant, 100);
});
