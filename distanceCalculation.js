// Function to calculate distance between two sets of coordinates using the Haversine formula
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to display the calculated distance
function displayDistance() {
    const detailsDiv = document.getElementById('distance-details');
    
    if (vpnCoordinates && geoCoordinates) {
        const distance = haversineDistance(vpnCoordinates.lat, vpnCoordinates.lon, geoCoordinates.lat, geoCoordinates.lon);
        detailsDiv.innerHTML += `<p><strong>Distance between VPN and Geolocation Coordinates:</strong> ${distance.toFixed(2)} km</p>`;
    } else {
        detailsDiv.innerHTML += `<p><strong>Distance:</strong> Coordinates not available for calculation.</p>`;
    }
}
