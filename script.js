// Firebase config object (with your credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCGH4ElKW0FWUkiyO_gd5aDZD3cLSG9YRY",
    authDomain: "distance-c8670.firebaseapp.com",
    databaseURL: "https://distance-c8670-default-rtdb.firebaseio.com",
    projectId: "distance-c8670",
    storageBucket: "distance-c8670.firebasestorage.app",
    messagingSenderId: "540571924866",
    appId: "1:540571924866:web:3616789d741a7e95c1779b",
    measurementId: "G-N0P2T0LWKD"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to the sensor data in Firebase
const sensorDataRef = database.ref('sensor_readings');

// Function to display data
function displayData(snapshot) {
    const data = snapshot.val();
    const lastReading = data[Object.keys(data)[Object.keys(data).length - 1]]; // Get the latest reading

    document.getElementById('temperature-celsius').textContent = lastReading.temperature_celsius || 'N/A';
    document.getElementById('temperature-fahrenheit').textContent = lastReading.temperature_fahrenheit || 'N/A';
    document.getElementById('turbidity-status').textContent = lastReading.turbidity_status || 'N/A';
    document.getElementById('pressure').textContent = lastReading.pressure_hPa || 'N/A';
    document.getElementById('altitude').textContent = lastReading.altitude_meters || 'N/A';
    document.getElementById('tds').textContent = lastReading.tds_ppm || 'N/A';
    document.getElementById('rtc-time').textContent = lastReading.rtc_time || 'N/A';
}

// Listen for real-time updates in Firebase
sensorDataRef.on('value', displayData);
