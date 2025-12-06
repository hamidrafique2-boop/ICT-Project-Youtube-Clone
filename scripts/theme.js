// Theme Logic
// Handles Light/Dark mode toggle and persistence

document.addEventListener('DOMContentLoaded', () => {
    const appearanceToggle = document.getElementById('appearance-toggle');
    const appearanceText = document.getElementById('appearance-text');

    // Theme Initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (appearanceText) appearanceText.innerText = "Dark theme";
    }

    // Dark Mode Toggle
    if (appearanceToggle) {
        appearanceToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent closing menu immediately (handled by header.js? No, stopPropagation here prevents bubbling to window click)
            // But wait, header.js also listens to click on profileDropdown. 
            // We need to ensure logic doesn't conflict. header.js stops propagation on profileDropdown click.
            // appearanceToggle is INSIDE profileDropdown. So header.js listener already stops it from reaching window.
            // But we might want to keep the menu open.

            document.body.classList.toggle('dark-mode');

            const isDark = document.body.classList.contains('dark-mode');
            if (appearanceText) {
                appearanceText.innerText = isDark ? "Dark theme" : "Light theme";
            }
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
