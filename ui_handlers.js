import { showToast, saveUserPreferences, closeModal, showModal } from './utils.js';
import { translations } from './translations.js';
import { handleQuickAction, triggerEmergencySOS } from './action_handlers.js';

// Global state (can be managed more formally with a state management pattern)
let currentLanguage = 'en';
let currentUserType = 'patient';

export function getCurrentLanguage() {
    return currentLanguage;
}

export function getCurrentUserType() {
    return currentUserType;
}

export function setCurrentLanguage(lang) {
    currentLanguage = lang;
}

export function setCurrentUserType(type) {
    currentUserType = type;
}

export function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

export function switchUserType(type) {
    currentUserType = type;

    // Update button states
    document.getElementById('patient-mode').className = type === 'patient'
        ? 'px-6 py-2 rounded-lg bg-blue-500 text-white font-medium transition-all'
        : 'px-6 py-2 rounded-lg text-gray-600 font-medium transition-all hover:bg-gray-100';

    document.getElementById('doctor-mode').className = type === 'doctor'
        ? 'px-6 py-2 rounded-lg bg-blue-500 text-white font-medium transition-all'
        : 'px-6 py-2 rounded-lg text-gray-600 font-medium transition-all hover:bg-gray-100';

    // Show/hide dashboards
    document.getElementById('patient-dashboard').classList.toggle('hidden', type !== 'patient');
    document.getElementById('doctor-dashboard').classList.toggle('hidden', type !== 'doctor');

    // Show/hide sidebar quick actions
    const patientActions = document.getElementById('sidebar-patient-actions');
    const doctorActions = document.getElementById('sidebar-doctor-actions');
    if (type === 'doctor') {
        if (patientActions) patientActions.style.display = 'none';
        if (doctorActions) doctorActions.style.display = '';
    } else {
        if (patientActions) patientActions.style.display = '';
        if (doctorActions) doctorActions.style.display = 'none';
    }

    showToast(`Switched to ${type} mode`);
}

export function initializeEventListeners() {
    // Language selector
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', function(e) {
            currentLanguage = e.target.value;
            updateLanguage();
            saveUserPreferences(currentLanguage, currentUserType);
        });
    }

    // User type toggle
    const patientModeBtn = document.getElementById('patient-mode');
    if (patientModeBtn) patientModeBtn.addEventListener('click', () => switchUserType('patient'));
    const doctorModeBtn = document.getElementById('doctor-mode');
    if (doctorModeBtn) doctorModeBtn.addEventListener('click', () => switchUserType('doctor'));

    // Emergency SOS
    const emergencyBtn = document.getElementById('emergency-sos');
    if (emergencyBtn) emergencyBtn.addEventListener('click', triggerEmergencySOS);

    // Sidebar hamburger toggle logic
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    function openSidebar() {
        if (sidebar) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('block');
        }
    }
    function closeSidebar() {
        if (sidebar) {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('block');
        }
    }
    function handleResize() {
        if (sidebar) {
            if (window.innerWidth >= 768) {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('flex');
                sidebar.classList.remove('block');
            } else {
                sidebar.classList.remove('flex');
                sidebar.classList.add('hidden');
            }
        }
    }
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Toggle sidebar visibility
            if (window.innerWidth < 768) {
                if (sidebar.classList.contains('hidden')) {
                    sidebar.classList.remove('hidden');
                    sidebar.classList.add('block');
                } else {
                    sidebar.classList.add('hidden');
                    sidebar.classList.remove('block');
                }
            }
        });
    }
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 768 && sidebar && !sidebar.contains(e.target) && e.target !== toggleBtn) {
            closeSidebar();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (window.innerWidth < 768 && e.key === 'Escape') {
            closeSidebar();
        }
    });
    window.addEventListener('resize', handleResize);
    handleResize();

    // Patient quick actions (sidebar)
    document.querySelectorAll('#sidebar-patient-actions .quick-action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleQuickAction(action);
        });
    });

    // Doctor quick actions (sidebar)
    document.querySelectorAll('#sidebar-doctor-actions button[data-action]').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleQuickAction(action);
        });
    });

    // Modal close
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                window.closeModal(); // Use window.closeModal for consistency
            }
        });
    }

    // Accessibility features
    document.addEventListener('keydown', function(e) {
        // ESC key to close modal
        if (e.key === 'Escape') {
            window.closeModal(); // Use window.closeModal for consistency
        }

        // Alt + E for emergency
        if (e.altKey && e.key === 'e') {
            triggerEmergencySOS();
        }
    });

    // Voice navigation support
    if ('speechSynthesis' in window && emergencyBtn) {
        function speak(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = currentLanguage === 'hi' ? 'hi-IN' :
                             currentLanguage === 'ta' ? 'ta-IN' :
                             currentLanguage === 'te' ? 'te-IN' : 'en-IN';
            speechSynthesis.speak(utterance);
        }

        // Add voice feedback for important actions
        emergencyBtn.addEventListener('click', () => {
            speak('Emergency SOS activated');
        });
    }
}
