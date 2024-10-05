// Global variable to store geolocation coordinates
let actualCoordinates = { latitude: null, longitude: null };

// Function to display geolocation details
function displayGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const { latitude, longitude } = position.coords;
            actualCoordinates.latitude = latitude;  // Store actual coordinates
            actualCoordinates.longitude = longitude;

            const details = `
                <h2>Geolocation Details</h2>
                <p><strong>Latitude:</strong> ${latitude}</p>
                <p><strong>Longitude:</strong> ${longitude}</p>
            `;
            document.getElementById('geolocation-details').innerHTML = details;
        });
    } else {
        const details = `<p>Geolocation is not supported by this browser.</p>`;
        document.getElementById('geolocation-details').innerHTML = details;
    }
}
