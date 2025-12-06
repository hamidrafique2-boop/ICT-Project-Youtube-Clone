// Header Interaction Logic: Search, Voice, Dropdowns

document.addEventListener('DOMContentLoaded', () => {
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

    // Dropdowns
    const micBtn = document.querySelector('.mic-btn');
    const voicePopup = document.getElementById('voice-search-popup');

    const createBtn = document.querySelector('.button-create');
    const createDropdown = document.getElementById('create-dropdown');

    const notifBtn = document.querySelector('.notification-icon-container');
    const notifDropdown = document.getElementById('notification-dropdown');

    const profileBtn = document.getElementById('profile-btn');
    const profileDropdown = document.getElementById('profile-dropdown');

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

    // Close on click outside
    window.addEventListener('click', () => {
        closeAllDropdowns();
    });

    // Prevent closing when clicking inside specific dropdowns
    if (notifDropdown) notifDropdown.addEventListener('click', (e) => e.stopPropagation());
    if (createDropdown) createDropdown.addEventListener('click', (e) => e.stopPropagation());
    if (profileDropdown) profileDropdown.addEventListener('click', (e) => e.stopPropagation());
    if (voicePopup) voicePopup.addEventListener('click', (e) => e.stopPropagation());
});
