// additionalDetails.js

// Function to display additional device and browser details
function displayAdditionalDetails() {
    const detailsDiv = document.getElementById('additional-details');

    // Add a section header
    let additionalHeader = `<h2>Additional Device and Browser Details</h2>`;
    detailsDiv.innerHTML = additionalHeader;

    // OS Detection
    const userAgent = navigator.userAgent.toLowerCase();
    let os = "Unknown OS";
    if (/android/i.test(userAgent)) {
        os = "Android";
    } else if (/ipad|iphone|ipod/.test(userAgent) && !window.MSStream) {
        os = "iOS";
    }
    detailsDiv.innerHTML += `<p><strong>Operating System:</strong> ${os}</p>`;

    // Screen Density
    const screenDensity = window.devicePixelRatio;
    detailsDiv.innerHTML += `<p><strong>Screen Density:</strong> ${screenDensity}</p>`;

    // Memory and CPU Info
    const memory = navigator.deviceMemory || "Unknown";
    const processors = navigator.hardwareConcurrency || "Unknown";
    detailsDiv.innerHTML += `<p><strong>Device Memory:</strong> ${memory} GB</p>`;
    detailsDiv.innerHTML += `<p><strong>Logical Processors:</strong> ${processors}</p>`;

    // Connection type (if supported)
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
        detailsDiv.innerHTML += `<p><strong>Connection Type:</strong> ${connection.effectiveType}</p>`;
    }

    // Battery Status (if supported)
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            detailsDiv.innerHTML += `<p><strong>Battery Level:</strong> ${(battery.level * 100).toFixed(0)}%</p>`;
            detailsDiv.innerHTML += `<p><strong>Charging:</strong> ${battery.charging ? "Yes" : "No"}</p>`;
        });
    }

    // WebGL Vendor/Renderer
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
        const webglVendor = gl.getParameter(gl.VENDOR);
        const webglRenderer = gl.getParameter(gl.RENDERER);
        detailsDiv.innerHTML += `<p><strong>WebGL Vendor:</strong> ${webglVendor}</p>`;
        detailsDiv.innerHTML += `<p><strong>WebGL Renderer:</strong> ${webglRenderer}</p>`;
    }
}

// Call the function to display additional details
displayAdditionalDetails();
