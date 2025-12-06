// Tooltip Logic: Hide on click

document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('.icon-btn, .search-button, .voice-button, .notification-icon-container, .logo-container, .button-create, .user-avatar[title]');

    tooltipElements.forEach(el => {
        el.addEventListener('click', function () {
            this.classList.add('tooltip-hidden');
        });
        el.addEventListener('mouseleave', function () {
            this.classList.remove('tooltip-hidden');
        });
        // Also handle mouseenter to ensure we're clean
        el.addEventListener('mouseenter', function () {
            this.classList.remove('tooltip-hidden');
        });
    });
});
