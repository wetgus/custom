// distanceCalculation.js

// Haversine formula to calculate distance between two coordinates
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to display the distance between VPN location and geolocation
function displayDistance(vpnLat, vpnLon, geoLat, geoLon) {
    const distance = haversineDistance(vpnLat, vpnLon, geoLat, geoLon);
    const distanceDiv = document.getElementById('distance-details');

    // Add a section header for distance
    if (!distanceDiv.innerHTML) {
        distanceDiv.innerHTML = `<h2>Distance Details</h2>`;
    }

    distanceDiv.innerHTML += `<p><strong>Distance between VPN and Geolocation:</strong> ${distance.toFixed(2)} km</p>`;
}
