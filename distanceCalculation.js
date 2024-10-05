// distanceCalculation.js

// Function to calculate the distance between two coordinates
function calculateDistance() {
    if (vpnCoordinates.latitude && actualCoordinates.latitude) {
        const R = 6371; // Radius of the Earth in kilometers
        const lat1 = vpnCoordinates.latitude;
        const lon1 = vpnCoordinates.longitude;
        const lat2 = actualCoordinates.latitude;
        const lon2 = actualCoordinates.longitude;

        // Haversine formula
        const dLat = degreesToRadians(lat2 - lat1);
        const dLon = degreesToRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers

        // Display the distance
        const distanceDiv = document.getElementById('distance-details');
        distanceDiv.innerHTML = `<h2>Distance between Coordinates</h2>
                                 <p><strong>Distance:</strong> ${distance.toFixed(2)} km</p>`;
    } else {
        console.error("Coordinates are not available for distance calculation.");
    }
}

// Helper function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
