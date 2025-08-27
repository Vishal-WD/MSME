import { showModal, showToast, closeModal } from './utils.js';
import {
    generateBookingModal, generateHealthRecordsModal, generateMedicineOrdersModal,
    generateFamilyHealthModal, generateWellnessTrackerModal, generateLabReportsModal,
    generateAppointmentQueueModal, generateMemoryBoardModal, generatePrescriptionPadModal,
    generatePatientInsightsModal
} from './modal_generators.js';

export function triggerEmergencySOS() {
    // Simulate emergency SOS functionality
    showModal(`
        <div class="p-6">
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-exclamation-triangle text-red-600 text-2xl pulse-animation"></i>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Emergency SOS Activated</h2>
                <p class="text-gray-600">Your location has been shared with emergency contacts and nearby hospitals.</p>
            </div>

            <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div class="flex items-center mb-2">
                    <i class="fas fa-map-marker-alt text-red-600 mr-2"></i>
                    <span class="font-semibold text-red-800">Current Location:</span>
                </div>
                <p class="text-red-700">Koramangala, Bangalore, Karnataka</p>
            </div>

            <div class="space-y-3 mb-6">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center">
                        <i class="fas fa-hospital text-blue-600 mr-3"></i>
                        <span class="font-medium">Manipal Hospital</span>
                    </div>
                    <span class="text-sm text-gray-600">2.3 km</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center">
                        <i class="fas fa-phone text-green-600 mr-3"></i>
                        <span class="font-medium">Emergency Contact</span>
                    </div>
                    <span class="text-sm text-gray-600">Notified</span>
                </div>
            </div>

            <div class="flex space-x-3">
                <button onclick="window.closeModal()" class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                    Cancel
                </button>
                <button onclick="window.callEmergency()" class="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                    <i class="fas fa-phone mr-2"></i>Call 108
                </button>
            </div>
        </div>
    `);
}

export function handleQuickAction(action) {
    const actionModals = {
        'book-appointment': generateBookingModal(),
        'health-records': generateHealthRecordsModal(),
        'medicine-orders': generateMedicineOrdersModal(),
        'family-health': generateFamilyHealthModal(),
        'wellness-tracker': generateWellnessTrackerModal(),
        'lab-reports': generateLabReportsModal(),
        'appointment-queue': generateAppointmentQueueModal(),
        'memory-board': generateMemoryBoardModal(),
        'prescription-pad': generatePrescriptionPadModal(),
        'patient-insights': generatePatientInsightsModal()
    };

    if (actionModals[action]) {
        showModal(actionModals[action]);
    }
}

// Action handlers that need to be globally accessible for onclick attributes
window.callEmergency = function() {
    showToast('Calling Emergency Services (108)...');
    closeModal();
};

window.confirmBooking = function() {
    showToast('Appointment booked successfully!');
    closeModal();
};

window.uploadRecord = function() {
    showToast('Document uploaded successfully!');
};

window.startVoiceOrder = function() {
    document.getElementById('voice-indicator').classList.remove('hidden');
    showToast('Voice recording started...');
    setTimeout(() => {
        document.getElementById('voice-indicator').classList.add('hidden');
        showToast('Voice order processed!');
    }, 3000);
};

window.scanPrescription = function() {
    showToast('Prescription scanned and processed!');
};

window.reorderMedicine = function() {
    showToast('Medicine reordered successfully!');
};

window.newOrder = function() {
    showToast('New order created!');
    closeModal();
};

window.addFamilyMember = function() {
    showToast('Family member added successfully!');
};

window.addWater = function() {
    showToast('Water intake recorded! 💧');
};

window.bookLabTest = function() {
    showToast('Lab test booking initiated!');
};

window.startVoicePrescription = function() {
    document.getElementById('voice-indicator').classList.remove('hidden');
    showToast('Voice to text activated...');
    setTimeout(() => {
        document.getElementById('voice-indicator').classList.add('hidden');
        showToast('Prescription transcribed!');
    }, 3000);
};

window.showMedicineSuggestions = function() {
    showToast('Smart suggestions loaded!');
};

window.addMedicine = function() {
    showToast('Medicine added to prescription!');
};

window.savePrescription = function() {
    showToast('Prescription saved and sent to patient!');
    closeModal();
};

// Expose closeModal from utils.js globally as well, since it's used in modal content
window.closeModal = closeModal;
