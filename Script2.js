const canvas = document.getElementById("spiderCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resize() {

        const dpr = window.devicePixelRatio || 1;

        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        }));
    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );

        particles.forEach((p, i) => {

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > window.innerWidth) {
                p.dx *= -1;
            }

            if (p.y < 0 || p.y > window.innerHeight) {
                p.dy *= -1;
            }

            // Draw glowing particles

            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);

            ctx.fillStyle = "#ffffff";
            ctx.fill();

            // Connect particles

            for (let j = i + 1; j < particles.length; j++) {

                const p2 = particles[j];

                const distance = Math.hypot(
                    p.x - p2.x,
                    p.y - p2.y
                );

                if (distance < 130) {

                    ctx.beginPath();

                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);

                    ctx.strokeStyle =
                        `rgba(180,180,180,${1 - distance / 130})`;

                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);

    resize();
    animate();
}
