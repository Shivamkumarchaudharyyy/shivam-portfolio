// Spider Web Background Animation

const canvas = document.getElementById("web-background");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = [];

    for (let i = 0; i < 70; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6
        });
    }
}

function animateWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#aaaaaa";
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {

            let p2 = particles[j];

            let distance = Math.hypot(
                p.x - p2.x,
                p.y - p2.y
            );

            if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);

                ctx.strokeStyle =
                    `rgba(180,180,180,${1 - distance / 120})`;

                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animateWeb);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateWeb();// Spider Web Background Animation

const canvas = document.getElementById("web-background");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = [];

    for (let i = 0; i < 70; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6
        });
    }
}

function animateWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#aaaaaa";
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {

            let p2 = particles[j];

            let distance = Math.hypot(
                p.x - p2.x,
                p.y - p2.y
            );

            if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);

                ctx.strokeStyle =
                    `rgba(180,180,180,${1 - distance / 120})`;

                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animateWeb);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateWeb();
