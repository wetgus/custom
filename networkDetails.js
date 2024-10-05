// networkDetails.js

// Function to display network properties and geolocation details
function displayNetworkDetails() {
    const detailsDiv = document.getElementById('network-details');

    // Add a section header
    let networkHeader = `<h2>Network Details</h2>`;
    detailsDiv.innerHTML = networkHeader;

    // Network Properties Detection
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const networkProperties = connection ? {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
    } : 'Network API not supported';

    detailsDiv.innerHTML += `
        <p><strong>Network Properties:</strong> Effective Type: ${networkProperties.effectiveType || 'N/A'}, 
        Downlink: ${networkProperties.downlink || 'N/A'} Mbps, 
        RTT: ${networkProperties.rtt || 'N/A'} ms</p>
    `;

    // Fetch IP Address and Geolocation Information
    fetch('https://ipinfo.io?token=88db51b60cdd2d')  // Replace with your actual ipinfo.io token
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const city = data.city;
            const region = data.region;
            const country = data.country;
            const location = data.loc; // Latitude, Longitude

            detailsDiv.innerHTML += `
                <p><strong>IP Address:</strong> ${ip}</p>
                <p><strong>Location:</strong> ${city}, ${region}, ${country} (Lat, Long: ${location})</p>
            `;
        })
        .catch(error => {
            detailsDiv.innerHTML += `<p><strong>Error Fetching IP/Geolocation:</strong> ${error.message}</p>`;
        });
}
