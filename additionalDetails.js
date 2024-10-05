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

    // Audio Context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sampleRate = audioContext.sampleRate;
    detailsDiv.innerHTML += `<p><strong>Audio Sample Rate:</strong> ${sampleRate} Hz</p>`;

    // Device Type
    const userAgent = navigator.userAgent.toLowerCase();
    let deviceType = "Unknown device type";
    if (/mobile/.test(userAgent)) {
        deviceType = "Mobile";
    } else if (/tablet/.test(userAgent)) {
        deviceType = "Tablet";
    } else if (/desktop/.test(userAgent)) {
        deviceType = "Desktop";
    }
    detailsDiv.innerHTML += `<p><strong>Device Type:</strong> ${deviceType}</p>`;


    // User-Agent Overrides
    const isUserAgentOverridden = (navigator.userAgent !== window.navigator.userAgent) ? "User-Agent overridden" : "User-Agent not overridden";
    detailsDiv.innerHTML += `<p><strong>User-Agent Override:</strong> ${isUserAgentOverridden}</p>`;

    // Additional Screen Properties
    const pixelRatio = window.devicePixelRatio;
    detailsDiv.innerHTML += `<p><strong>Device Pixel Ratio:</strong> ${pixelRatio}</p>`;
}

// Call the function to display additional details
displayAdditionalDetails();
