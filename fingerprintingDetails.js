// fingerprintingDetails.js

// Function to display additional fingerprinting details
function displayFingerprintingDetails() {
    const detailsDiv = document.getElementById('fingerprinting-details');

    // Add a section header
    let fingerprintingHeader = `<h2>Fingerprinting Details</h2>`;
    detailsDiv.innerHTML = fingerprintingHeader;

    // Canvas Fingerprinting
    function canvasFingerprint() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.textBaseline = 'top';
        context.font = '14px Arial';
        context.fillText('Testing canvas fingerprinting', 2, 2);
        const dataUrl = canvas.toDataURL();
        const fingerprint = dataUrl.substring(dataUrl.indexOf(',') + 1); // Strip the prefix
        return fingerprint;
    }

    const canvasFingerprintValue = canvasFingerprint();
    detailsDiv.innerHTML += `<p><strong>Canvas Fingerprint:</strong> ${canvasFingerprintValue}</p>`;

    // WebGL Fingerprinting
    function webGLFingerprint() {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            return 'WebGL not supported';
        }

        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        const extensions = gl.getSupportedExtensions();

        return {
            vendor,
            renderer,
            extensions
        };
    }

    const webGLInfo = webGLFingerprint();
    detailsDiv.innerHTML += `
        <p><strong>WebGL Vendor:</strong> ${webGLInfo.vendor}</p>
        <p><strong>WebGL Renderer:</strong> ${webGLInfo.renderer}</p>
        <p><strong>WebGL Extensions:</strong> ${webGLInfo.extensions.join(', ')}</p>
    `;

    // Media Devices Detection
    function getMediaDevices() {
        return navigator.mediaDevices.enumerateDevices()
            .then(devices => devices.map(device => `${device.kind}: ${device.label}`).join(', '))
            .catch(() => 'Media Devices not accessible');
    }

    getMediaDevices().then(mediaDevicesInfo => {
        detailsDiv.innerHTML += `<p><strong>Media Devices:</strong> ${mediaDevicesInfo}</p>`;
    });
}
