function displayHardwareDetails() {
    const cpuCores = navigator.hardwareConcurrency || "Not available";
    const deviceMemory = navigator.deviceMemory || "Not available";
    
    const details = `
        <h2>Hardware Details</h2>
        <p><strong>CPU Cores:</strong> ${cpuCores}</p>
        <p><strong>Device Memory:</strong> ${deviceMemory} GB</p>
    `;
    
    document.getElementById('hardware-details').innerHTML = details;
}
