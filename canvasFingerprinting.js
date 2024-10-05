// Detect Canvas Geometry
function detectCanvasGeometry() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Draw rectangle
    context.fillStyle = "blue";
    context.fillRect(10, 10, 100, 100);

    // Extract data to check for differences
    const geometryData = canvas.toDataURL();
    return geometryData;
}

// Detect Canvas Text
function detectCanvasText() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set font and draw text
    context.font = '20px Arial';
    context.fillStyle = 'black';
    context.fillText('Canvas Text Fingerprinting', 10, 50);

    // Get canvas text data
    const textData = canvas.toDataURL();
    return textData;
}

// Detect Canvas Winding Rule
function detectCanvasWinding() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Draw a non-zero winding rule shape
    context.beginPath();
    context.arc(50, 50, 40, 0, Math.PI * 2, true);  // Outer circle
    context.arc(50, 50, 20, 0, Math.PI * 2, false); // Inner circle
    context.fill('evenodd');  // 'evenodd' winding rule

    // Check rendering difference
    const windingData = canvas.toDataURL();
    return windingData;
}

// Display the results on the webpage
function displayCanvasFingerprinting() {
    const geometryResult = detectCanvasGeometry();
    const textResult = detectCanvasText();
    const windingResult = detectCanvasWinding();

    // Display results in respective HTML elements
    document.getElementById('geometry-data').src = geometryResult;
    document.getElementById('text-data').src = textResult;
    document.getElementById('winding-data').src = windingResult;
}
