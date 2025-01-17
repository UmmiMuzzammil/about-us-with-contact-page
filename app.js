

function toggleMenu() {
    const overlay = document.getElementById('overlay');
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    }
}

// cicle

document.addEventListener("DOMContentLoaded", function () {
    const radialBars = document.querySelectorAll(".radial-bar");

    radialBars.forEach((bar) => {
        const percentageText = bar.querySelector(".percentage");
        const targetPercentage = parseInt(percentageText.textContent);
        const progressCircle = bar.querySelector(".path");
        const radius = 80; // Same as 'r' in the <circle> element
        const circumference = 2 * Math.PI * radius;

        // Set the circle's circumference
        progressCircle.style.strokeDasharray = `${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        // Animate the progress bar and number
        let currentPercentage = 0;

        const animateProgress = () => {
            const interval = setInterval(() => {
                if (currentPercentage >= targetPercentage) {
                    clearInterval(interval); // Stop animation at target
                } else {
                    currentPercentage++;
                    percentageText.textContent = `${currentPercentage}%`;

                    // Update circle's stroke offset
                    const offset = circumference - (currentPercentage / 100) * circumference;
                    progressCircle.style.strokeDashoffset = offset;
                }
            }, 20); // Adjust speed by changing interval duration (20ms)
        };

        // Start the animation
        animateProgress();
    });
});
