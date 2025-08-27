// Modal content generation functions
export function generateBookingModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Book Appointment</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="space-y-4 mb-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                    <select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>General Medicine</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>Orthopedics</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Available Doctors</label>
                    <div class="space-y-2">
                        <div class="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h4 class="font-medium text-gray-800">Dr. Rajesh Kumar</h4>
                                    <p class="text-sm text-gray-600">General Medicine • 15 years exp</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-sm font-medium text-green-600">Available</p>
                                    <p class="text-xs text-gray-500">Queue: 3 patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex space-x-3">
                <button onclick="window.closeModal()" class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                    Cancel
                </button>
                <button onclick="window.confirmBooking()" class="flex-1 bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Book Appointment
                </button>
            </div>
        </div>
    `;
}

export function generateHealthRecordsModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Health Records</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-6">
                <div class="flex space-x-2 mb-4">
                    <button onclick="window.uploadRecord()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <i class="fas fa-camera mr-2"></i>Scan Document
                    </button>
                    <button onclick="window.uploadRecord()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-upload mr-2"></i>Upload File
                    </button>
                </div>
            </div>

            <div class="space-y-3">
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                <i class="fas fa-file-medical text-red-600"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Blood Test Report</h4>
                                <p class="text-sm text-gray-600">Dec 15, 2023 • Dr. Kumar</p>
                            </div>
                        </div>
                        <button class="text-blue-500 hover:text-blue-600">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <i class="fas fa-x-ray text-blue-600"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">X-Ray Chest</h4>
                                <p class="text-sm text-gray-600">Nov 28, 2023 • Dr. Sharma</p>
                            </div>
                        </div>
                        <button class="text-blue-500 hover:text-blue-600">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function generateMedicineOrdersModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Medicine Orders</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-6">
                <div class="flex space-x-2 mb-4">
                    <button onclick="window.startVoiceOrder()" class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                        <i class="fas fa-microphone mr-2"></i>Voice Order
                    </button>
                    <button onclick="window.scanPrescription()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-camera mr-2"></i>Scan Prescription
                    </button>
                </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 class="font-medium text-gray-800 mb-3">Recent Orders</h3>
                <div class="space-y-3">
                    <div class="bg-white rounded-lg p-3 flex items-center justify-between">
                        <div>
                            <h4 class="font-medium text-gray-800">Paracetamol 500mg</h4>
                            <p class="text-sm text-gray-600">Qty: 10 tablets</p>
                        </div>
                        <button onclick="window.reorderMedicine()" class="text-blue-500 hover:text-blue-600 text-sm font-medium">
                            Reorder
                        </button>
                    </div>
                    <div class="bg-white rounded-lg p-3 flex items-center justify-between">
                        <div>
                            <h4 class="font-medium text-gray-800">Vitamin D3</h4>
                            <p class="text-sm text-gray-600">Qty: 30 capsules</p>
                        </div>
                        <button onclick="window.reorderMedicine()" class="text-blue-500 hover:text-blue-600 text-sm font-medium">
                            Reorder
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex space-x-3">
                <button onclick="window.closeModal()" class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                    Close
                </button>
                <button onclick="window.newOrder()" class="flex-1 bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors">
                    New Order
                </button>
            </div>
        </div>
    `;
}

export function generateFamilyHealthModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Family Health Tree</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-6">
                <button onclick="window.addFamilyMember()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <i class="fas fa-plus mr-2"></i>Add Family Member
                </button>
            </div>

            <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23F59E0B'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EM%3C/text%3E%3C/svg%3E" alt="Mother" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <h4 class="font-medium text-gray-800">Sunita Sharma (Mother)</h4>
                                <p class="text-sm text-gray-600">Age: 58 • Last checkup: 2 months ago</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="w-3 h-3 bg-green-400 rounded-full"></span>
                            <span class="text-sm text-green-600">Healthy</span>
                        </div>
                    </div>
                    <div class="text-sm text-gray-600">
                        <p>Conditions: Diabetes Type 2, Hypertension</p>
                        <p>Next appointment: Jan 20, 2024</p>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%236366F1'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EF%3C/text%3E%3C/svg%3E" alt="Father" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <h4 class="font-medium text-gray-800">Rajesh Sharma (Father)</h4>
                                <p class="text-sm text-gray-600">Age: 62 • Last checkup: 1 month ago</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
                            <span class="text-sm text-yellow-600">Monitoring</span>
                        </div>
                    </div>
                    <div class="text-sm text-gray-600">
                        <p>Conditions: High Cholesterol</p>
                        <p>Next appointment: Jan 15, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function generateWellnessTrackerModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Wellness Tracker</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-blue-50 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <i class="fas fa-tint text-blue-600 text-xl mr-3"></i>
                            <h3 class="font-medium text-gray-800">Water Intake</h3>
                        </div>
                        <button onclick="window.addWater()" class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="flex items-center">
                        <div class="flex-1 bg-blue-200 rounded-full h-3 mr-3">
                            <div class="bg-blue-600 h-3 rounded-full" style="width: 75%"></div>
                        </div>
                        <span class="text-sm font-medium text-blue-600">6/8 glasses</span>
                    </div>
                </div>

                <div class="bg-green-50 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <i class="fas fa-walking text-green-600 text-xl mr-3"></i>
                            <h3 class="font-medium text-gray-800">Steps Today</h3>
                        </div>
                        <span class="text-sm font-medium text-green-600">8,432</span>
                    </div>
                    <div class="flex items-center">
                        <div class="flex-1 bg-green-200 rounded-full h-3 mr-3">
                            <div class="bg-green-600 h-3 rounded-full" style="width: 84%"></div>
                        </div>
                        <span class="text-sm font-medium text-green-600">84% of goal</span>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4 text-white mb-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-lg">12 Day Streak! 🔥</h3>
                        <p class="text-sm opacity-90">Keep up the great work!</p>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold">🏆</div>
                        <p class="text-xs opacity-90">Health Champion</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                    <div class="text-2xl mb-1">💧</div>
                    <p class="text-xs text-gray-600">Hydration Master</p>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                    <div class="text-2xl mb-1">🚶</div>
                    <p class="text-xs text-gray-600">Step Counter</p>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                    <div class="text-2xl mb-1">💊</div>
                    <p class="text-xs text-gray-600">Medicine Tracker</p>
                </div>
            </div>
        </div>
    `;
}

export function generateLabReportsModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Lab Reports</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-6">
                <button onclick="window.bookLabTest()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <i class="fas fa-plus mr-2"></i>Book Lab Test
                </button>
            </div>

            <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                <i class="fas fa-vial text-red-600"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Complete Blood Count</h4>
                                <p class="text-sm text-gray-600">Dec 15, 2023 • PathLab</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Normal</span>
                            <button class="text-blue-500 hover:text-blue-600">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-sm text-gray-600">
                        <p>Hemoglobin: 13.5 g/dL (Normal: 12-15)</p>
                        <p>WBC Count: 7,200 /μL (Normal: 4,000-11,000)</p>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <i class="fas fa-heartbeat text-blue-600"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Lipid Profile</h4>
                                <p class="text-sm text-gray-600">Nov 20, 2023 • DiagnosticLab</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Borderline</span>
                            <button class="text-blue-500 hover:text-blue-600">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-sm text-gray-600">
                        <p>Total Cholesterol: 210 mg/dL (High: >200)</p>
                        <p>HDL: 45 mg/dL (Low: <40)</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function generateAppointmentQueueModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Appointment Queue</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-4">
                <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span class="font-medium text-blue-800">Current Patient: Amit Patel</span>
                    <span class="text-sm text-blue-600">In Progress</span>
                </div>
            </div>

            <div class="space-y-3">
                <div class="border border-gray-200 rounded-lg p-4 queue-update">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                2
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Priya Sharma</h4>
                                <p class="text-sm text-gray-600">General Consultation • ETA: 5 mins</p>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <button class="text-blue-500 hover:text-blue-600">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="text-green-500 hover:text-green-600">
                                <i class="fas fa-phone"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                3
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Rajesh Kumar</h4>
                                <p class="text-sm text-gray-600">Follow-up • ETA: 15 mins</p>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <button class="text-blue-500 hover:text-blue-600">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="text-green-500 hover:text-green-600">
                                <i class="fas fa-phone"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                4
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Sunita Devi</h4>
                                <p class="text-sm text-gray-600">New Patient • ETA: 25 mins</p>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <button class="text-blue-500 hover:text-blue-600">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="text-green-500 hover:text-green-600">
                                <i class="fas fa-phone"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function generateMemoryBoardModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Memory Board</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-6">
                <div class="flex space-x-2">
                    <input type="text" placeholder="Search patient..." class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2310B981'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EP%3C/text%3E%3C/svg%3E" alt="Patient" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <h4 class="font-medium text-gray-800">Priya Sharma</h4>
                                <p class="text-sm text-gray-600">Last visit: Dec 10, 2023</p>
                            </div>
                        </div>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Regular</span>
                    </div>
                    <div class="text-sm text-gray-600 mb-3">
                        <p><strong>Conditions:</strong> Hypertension, Diabetes Type 2</p>
                        <p><strong>Current Medications:</strong> Metformin, Lisinopril</p>
                        <p><strong>Allergies:</strong> Penicillin</p>
                    </div>
                    <div class="bg-yellow-50 border border-yellow-200 rounded p-2">
                        <p class="text-sm text-yellow-800"><strong>AI Insight:</strong> Blood pressure trending upward. Consider medication adjustment.</p>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%236366F1'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3ER%3C/text%3E%3C/svg%3E" alt="Patient" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <h4 class="font-medium text-gray-800">Rajesh Kumar</h4>
                                <p class="text-sm text-gray-600">Last visit: Nov 25, 2023</p>
                            </div>
                        </div>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Follow-up</span>
                    </div>
                    <div class="text-sm text-gray-600 mb-3">
                        <p><strong>Conditions:</strong> High Cholesterol</p>
                        <p><strong>Current Medications:</strong> Atorvastatin</p>
                        <p><strong>Allergies:</strong> None known</p>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 rounded p-2">
                        <p class="text-sm text-blue-800"><strong>Reminder:</strong> Schedule lipid profile test in 2 weeks.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function generatePrescriptionPadModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Prescription Pad</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="mb-6">
                <div class="flex items-center space-x-4 mb-4">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                        <input type="text" value="Priya Sharma" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input type="text" value="32" class="w-20 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>

                <div class="mb-4">
                    <button onclick="window.startVoicePrescription()" class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors mr-2">
                        <i class="fas fa-microphone mr-2"></i>Voice to Text
                    </button>
                    <button onclick="window.showMedicineSuggestions()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <i class="fas fa-lightbulb mr-2"></i>Smart Suggestions
                    </button>
                </div>
            </div>

            <div class="space-y-4 mb-6">
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="font-medium text-gray-800">Medicine 1</h4>
                        <button class="text-red-500 hover:text-red-600">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Medicine Name</label>
                            <input type="text" value="Paracetamol 500mg" class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Dosage</label>
                            <input type="text" value="1-0-1" class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Duration</label>
                            <input type="text" value="5 days" class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        </div>
                    </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="font-medium text-gray-800">Medicine 2</h4>
                        <button class="text-red-500 hover:text-red-600">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Medicine Name</label>
                            <input type="text" value="Vitamin D3" class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Dosage</label>
                            <input type="text" value="0-0-1" class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Duration</label>
                            <input type="text" value="30 days" class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex space-x-3">
                <button onclick="window.addMedicine()" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    <i class="fas fa-plus mr-2"></i>Add Medicine
                </button>
                <button onclick="window.savePrescription()" class="flex-1 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Save & Send Prescription
                </button>
            </div>
        </div>
    `;
}

export function generatePatientInsightsModal() {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Patient Insights</h2>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-blue-50 rounded-lg p-4">
                    <h3 class="font-medium text-gray-800 mb-3">Today's Statistics</h3>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-600">Total Patients:</span>
                            <span class="font-medium">24</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-600">New Patients:</span>
                            <span class="font-medium">6</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-600">Follow-ups:</span>
                            <span class="font-medium">18</span>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 rounded-lg p-4">
                    <h3 class="font-medium text-gray-800 mb-3">Common Conditions</h3>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-600">Hypertension:</span>
                            <span class="font-medium">8 patients</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-600">Diabetes:</span>
                            <span class="font-medium">5 patients</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-600">Common Cold:</span>
                            <span class="font-medium">4 patients</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 class="font-medium text-yellow-800 mb-2">AI Recommendations</h3>
                <ul class="text-sm text-yellow-700 space-y-1">
                    <li>• Consider scheduling follow-up for 3 hypertension patients</li>
                    <li>• Flu vaccination reminder for elderly patients</li>
                    <li>• Review medication adherence for diabetes patients</li>
                </ul>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg p-4">
                <h3 class="font-medium text-gray-800 mb-3">Upcoming Reminders</h3>
                <div class="space-y-2">
                    <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm">Call Priya Sharma for test results</span>
                        <span class="text-xs text-gray-500">Tomorrow</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm">Review Rajesh Kumar's medication</span>
                        <span class="text-xs text-gray-500">Jan 20</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
