// browserDetails.js

// Function to display browser details
function displayBrowserDetails() {
    const detailsDiv = document.getElementById('browser-details');

    // User Agent
    const userAgent = navigator.userAgent;
    detailsDiv.innerHTML += `<p><strong>User Agent:</strong> ${userAgent}</p>`;

    // Screen Resolution
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    detailsDiv.innerHTML += `<p><strong>Screen Resolution:</strong> ${screenWidth} x ${screenHeight}</p>`;

    // Installed Fonts Detection
    function detectFonts(fonts) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const detectedFonts = [];

        fonts.forEach(font => {
            context.font = `72px ${font}`;
            const width = context.measureText('abcdefghijklmnopqrstuvwxyz').width;
            context.font = '72px monospace'; // Fallback font
            const fallbackWidth = context.measureText('abcdefghijklmnopqrstuvwxyz').width;

            if (width !== fallbackWidth) {
                detectedFonts.push(font);
            }
        });

        return detectedFonts;
    }

    const fontsToCheck = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'];
    const installedFonts = detectFonts(fontsToCheck);
    detailsDiv.innerHTML += `<p><strong>Installed Fonts:</strong> ${installedFonts.join(', ')}</p>`;

    // Installed Plugins
    const plugins = Array.from(navigator.plugins).map(plugin => plugin.name);
    detailsDiv.innerHTML += `<p><strong>Installed Plugins:</strong> ${plugins.join(', ')}</p>`;
}
