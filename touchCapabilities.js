function displayTouchCapabilities() {
    const maxTouchPoints = navigator.maxTouchPoints || "Not available";
    const details = `
        <h2>Touch Capabilities</h2>
        <p><strong>Max Touch Points:</strong> ${maxTouchPoints}</p>
    `;
    
    document.getElementById('touch-details').innerHTML = details;
}
