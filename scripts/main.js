const body = document.body;
const menuBtn = document.getElementById('menu-btn');
const menuBtnOverlay = document.getElementById('menu-btn-overlay');
const backdrop = document.getElementById('backdrop');

// Search Bar Focus Logic
const searchInputContainer = document.querySelector('.search-input-container');
const searchInput = document.querySelector('.search-box');
const searchFocusIcon = document.getElementById('search-focus-icon');

if (searchInput && searchInputContainer && searchFocusIcon) {
    searchInput.addEventListener('focus', () => {
        searchFocusIcon.style.display = 'block';
        searchInputContainer.style.borderColor = '#1c62b9';
    });

    searchInput.addEventListener('blur', () => {
        searchFocusIcon.style.display = 'none';
        searchInputContainer.style.borderColor = '#d3d3d3';
    });
}


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
        // In mini mode (mid-screen), standard behavior usually opens overlay or expands.
        // We will open overlay for better UX or toggle mini/expanded. 
        // Let's toggle overlay for this clone.
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

// Interactive Header Logic

const micBtn = document.querySelector('.mic-btn');
const voicePopup = document.getElementById('voice-search-popup');

const createBtn = document.querySelector('.button-create');
const createDropdown = document.getElementById('create-dropdown');

const notifBtn = document.querySelector('.notification-icon-container');
const notifDropdown = document.getElementById('notification-dropdown');

const profileBtn = document.getElementById('profile-btn');
const profileDropdown = document.getElementById('profile-dropdown');

const appearanceToggle = document.getElementById('appearance-toggle');
const appearanceText = document.getElementById('appearance-text');

// Helper to close all
function closeAllDropdowns(except = null) {
    if (except !== voicePopup && voicePopup) voicePopup.style.display = 'none';
    if (except !== createDropdown && createDropdown) createDropdown.style.display = 'none';
    if (except !== notifDropdown && notifDropdown) notifDropdown.style.display = 'none';
    if (except !== profileDropdown && profileDropdown) profileDropdown.style.display = 'none';
}

function toggleDropdown(element) {
    if (!element) return;
    const isVisible = element.style.display === 'block';
    closeAllDropdowns();
    if (!isVisible) {
        element.style.display = 'block';
    }
}

if (micBtn && voicePopup) {
    micBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(voicePopup);
    });
}

if (createBtn && createDropdown) {
    createBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(createDropdown);
    });
}

if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(notifDropdown);
    });
}

if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(profileDropdown);
    });
}

// Theme Initialization
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (appearanceText) appearanceText.innerText = "Dark theme";
}

// Dark Mode Toggle
if (appearanceToggle) {
    appearanceToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent closing menu immediately
        document.body.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode');
        if (appearanceText) {
            appearanceText.innerText = isDark ? "Dark theme" : "Light theme";
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Close on click outside
window.addEventListener('click', () => {
    closeAllDropdowns();
});

// Calculate notification dropdown position if needed or prevent overflow
if (notifDropdown) {
    notifDropdown.addEventListener('click', (e) => e.stopPropagation());
}
if (createDropdown) {
    createDropdown.addEventListener('click', (e) => e.stopPropagation());
}
if (profileDropdown) {
    profileDropdown.addEventListener('click', (e) => e.stopPropagation());
}
if (voicePopup) {
    voicePopup.addEventListener('click', (e) => e.stopPropagation());
}

// TOOLTIP LOGIC: Hide on click
// Select all elements that might have tooltips
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
