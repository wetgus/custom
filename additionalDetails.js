// additionalDetails.js

// Function to display additional device and browser details
function displayAdditionalDetails() {
    const detailsDiv = document.getElementById('additional-details');

    // Add a section header
    let additionalHeader = `<h2>Additional Device and Browser Details</h2>`;
    detailsDiv.innerHTML = additionalHeader;

    // Color Depth
    const colorDepth = screen.colorDepth;
    detailsDiv.innerHTML += `<p><strong>Color Depth:</strong> ${colorDepth} bits</p>`;

    // Screen Orientation
    const orientation = screen.orientation ? screen.orientation.type : "Orientation API not supported";
    detailsDiv.innerHTML += `<p><strong>Screen Orientation:</strong> ${orientation}</p>`;

    // Touch Support
    const touchSupport = navigator.maxTouchPoints > 0 ? "Touch supported" : "Touch not supported";
    detailsDiv.innerHTML += `<p><strong>Touch Support:</strong> ${touchSupport}</p>`;

    // Battery Status
    navigator.getBattery().then(battery => {
        const batteryLevel = (battery.level * 100).toFixed(0);
        const chargingStatus = battery.charging ? "Charging" : "Not Charging";
        const chargingTime = battery.chargingTime ? `${battery.chargingTime} seconds` : "Not charging";
        const dischargingTime = battery.dischargingTime ? `${battery.dischargingTime} seconds` : "Unlimited";

        detailsDiv.innerHTML += `
            <p><strong>Battery Level:</strong> ${batteryLevel}%</p>
            <p><strong>Charging Status:</strong> ${chargingStatus}</p>
            <p><strong>Charging Time:</strong> ${chargingTime}</p>
            <p><strong>Discharging Time:</strong> ${dischargingTime}</p>
        `;
    });

    // Device Memory
    const deviceMemory = navigator.deviceMemory ? navigator.deviceMemory + " GB" : "Device Memory not available";
    detailsDiv.innerHTML += `<p><strong>Device Memory:</strong> ${deviceMemory}</p>`;

    // Hardware Concurrency
    const hardwareConcurrency = navigator.hardwareConcurrency || "Hardware Concurrency not available";
    detailsDiv.innerHTML += `<p><strong>Hardware Concurrency:</strong> ${hardwareConcurrency} logical processors</p>`;

    // Audio Context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sampleRate = audioContext.sampleRate;
    detailsDiv.innerHTML += `<p><strong>Audio Sample Rate:</strong> ${sampleRate} Hz</p>`;
}

// Call the function to display additional details
displayAdditionalDetails();
