function displayBrowserFeatures() {
    const doNotTrack = navigator.doNotTrack ? "Enabled" : "Disabled";
    const details = `
        <h2>Browser Features</h2>
        <p><strong>Do Not Track:</strong> ${doNotTrack}</p>
    `;
    
    document.getElementById('browser-features').innerHTML = details;
}
