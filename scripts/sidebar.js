// Sidebar Logic
// Uses 'body' classList manipulation

// Ensure body is available
// If included after body open, this is fine
// or wait for DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const menuBtn = document.getElementById('menu-btn');
    const menuBtnOverlay = document.getElementById('menu-btn-overlay');
    const backdrop = document.getElementById('backdrop');

    function handleResize() {
        const width = window.innerWidth;

        // Logic: 
        // > 1200: Expanded
        // 750 < width <= 1200: Mini
        // <= 750: Overlay

        if (width > 1200) {
            if (body.classList.contains('sidebar-overlay')) {
                body.classList.remove('sidebar-overlay', 'sidebar-open');
                body.classList.add('sidebar-expanded');
            }
        } else if (width <= 1200 && width > 750) {
            if (body.classList.contains('sidebar-overlay')) {
                body.classList.remove('sidebar-overlay', 'sidebar-open');
            }
            body.classList.remove('sidebar-expanded');
            body.classList.add('sidebar-mini');
        } else {
            // Mobile / Tablet Portrait
            body.classList.remove('sidebar-expanded', 'sidebar-mini');
            body.classList.add('sidebar-overlay');
        }
    }

    function toggleSidebar() {
        const width = window.innerWidth;

        if (width > 1200) {
            // Toggle between Expanded and Mini
            if (body.classList.contains('sidebar-expanded')) {
                body.classList.remove('sidebar-expanded');
                body.classList.add('sidebar-mini');
            } else {
                body.classList.remove('sidebar-mini');
                body.classList.add('sidebar-expanded');
            }
        } else if (width <= 1200 && width > 750) {
            // Toggle Overlay
            body.classList.add('sidebar-overlay');
            setTimeout(() => body.classList.add('sidebar-open'), 10);
        } else {
            // Mobile
            if (body.classList.contains('sidebar-open')) {
                body.classList.remove('sidebar-open');
            } else {
                body.classList.add('sidebar-open');
            }
        }
    }

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Sidebar Toggle ONLY on Menu Buttons
    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if (menuBtnOverlay) menuBtnOverlay.addEventListener('click', toggleSidebar);

    if (backdrop) {
        backdrop.addEventListener('click', () => {
            body.classList.remove('sidebar-open');
        });
    }
});
