function displayBotDetection() {
    const isHeadless = navigator.webdriver ? "Headless Browser (likely bot)" : "Not Headless (likely human)";
    
    const details = `
        <h2>Bot Detection</h2>
        <p><strong>Browser Headless Status:</strong> ${isHeadless}</p>
    `;
    
    document.getElementById('bot-detection').innerHTML = details;
}
