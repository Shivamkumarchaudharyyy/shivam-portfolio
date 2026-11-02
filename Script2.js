const canvas = document.getElementById("spiderCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    }));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.hypot(p.x - p2.x, p.y - p2.y);

            if (distance < 130) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(255,255,255,${1 - distance / 130})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animate);
}

resize();
window.addEventListener("resize", resize);
animate();
