let drpDown = document.getElementById('drpdown');
let cancel = document.getElementById('cancel');
let menu = document.getElementById('menu');

const drpD = () => {
    drpDown.style.height = '250px';
    menu.style.cssText = 'display : none !important ;'
    cancel.style.cssText = 'display : block !important ;'
};

const drpU = () => {
    drpDown.style.height = '0px';
    menu.style.cssText = 'display : block !important ;'
    cancel.style.cssText = 'display : none !important ;'
};



document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const trail = document.querySelector('.custom-cursor-trail');

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function animateTrail() {
        requestAnimationFrame(animateTrail);

        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;

        trail.style.left = `${trailX}px`;
        trail.style.top = `${trailY}px`;
    }

    animateTrail();

    document.addEventListener('click', () => {
        cursor.classList.add('click');
        setTimeout(() => {
            cursor.classList.remove('click');
        }, 150); // 150ms is the duration of the animation
    });
});

