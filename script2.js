
const canvas = document.getElementById("spiderCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
let mouse = { x: null, y: null };

const particleCount = 100;
const maxDistance = 140;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7
    }));
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Glowing particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.hypot(p.x - p2.x, p.y - p2.y);

            if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle =
                    `rgba(255,255,255,${1 - distance / maxDistance})`;
                ctx.lineWidth = 0.7;
                ctx.stroke();
            }
        }

        // Connect particles to mouse
        if (mouse.x !== null) {
            const distance = Math.hypot(
                p.x - mouse.x,
                p.y - mouse.y
            );

            if (distance < 180) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle =
                    `rgba(255,255,255,${1 - distance / 180})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
