const canvas = document.getElementById("spiderCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = [];

    for (let i = 0; i < 85; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }
}

function drawSpiderWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Spider web points
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();

        // Spider web connecting lines
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];

            const distance = Math.hypot(
                p.x - p2.x,
                p.y - p2.y
            );

            if (distance < 110) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);

                ctx.strokeStyle =
                    `rgba(180,180,180,${0.5 - distance / 220})`;

                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(drawSpiderWeb);
}

window.addEventListener("resize", resize);

resize();
drawSpiderWeb();
