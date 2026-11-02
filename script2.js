const sense = document.createElement("div");
sense.className = "spidey-sense";

sense.innerHTML = `
    <span class="spider-icon">🕷️</span>
    <div class="sense-info">
        <strong>SPIDEY SENSE</strong>
        <small>● ACTIVE</small>
    </div>
    <span class="sense-ring"></span>
`;

document.body.appendChild(sense);
