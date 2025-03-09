document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const h1Element = document.getElementById('ld');

    const headings = [
        "Shoutout to QHPS",
        "I made this website in a week😭😭",
        "SumenSite🔥🔥",
        "Contains no cringe",
        "Go to settings and set a panic mode, trust me",
        "Griddy while loading",
        "Agree to anly share the website with the best",
        "Sumen is the GOAT",
        "Sumen is the GOAT",
        "Sumen is the GOAT",
        "Sumen is the GOAT",
        "Lock in, make sure there's no teachers",
        "If balloons go up ur grades can too",
        "You better have done ur home work",
        "I swear if there's a snitch"
    ];

    if (loadingScreen) {
        document.body.classList.add('loading');

        if (h1Element) {
            h1Element.textContent = headings[Math.floor(Math.random() * headings.length)];
        }

        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        console.error('loading screen not found?????');
    }
});
