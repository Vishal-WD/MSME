// Utility functions
export function showModal(content) {
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-container').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

export function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

export function showToast(message) {
    document.getElementById('toast-message').textContent = message;
    document.getElementById('success-toast').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('success-toast').classList.add('hidden');
    }, 3000);
}

export function checkOnlineStatus() {
    function updateOnlineStatus() {
        const indicator = document.getElementById('offline-indicator');
        if (!navigator.onLine) {
            indicator.classList.remove('hidden');
            window.isOffline = true; // Use window to make it global if needed elsewhere
        } else {
            indicator.classList.add('hidden');
            window.isOffline = false;
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

export function saveUserPreferences(currentLanguage, currentUserType) {
    const preferences = {
        language: currentLanguage,
        userType: currentUserType
    };
    localStorage.setItem('healthcareAppPreferences', JSON.stringify(preferences));
}

export function loadUserPreferences() {
    const saved = localStorage.getItem('healthcareAppPreferences');
    if (saved) {
        const preferences = JSON.parse(saved);
        return {
            language: preferences.language || 'en',
            userType: preferences.userType || 'patient'
        };
    }
    return { language: 'en', userType: 'patient' };
}
