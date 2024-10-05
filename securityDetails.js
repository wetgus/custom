// securityDetails.js

// Function to display security-related details
function displaySecurityDetails() {
    const detailsDiv = document.getElementById('security-details');

    // DNS Leaks and WebRTC Detection
    function detectDNSLeak() {
        const dnsInfo = {
            localIP: null,
            publicIP: null,
            dnsServers: []
        };

        // Attempt to get local and public IP using WebRTC
        const rtcPeerConnection = new RTCPeerConnection();
        rtcPeerConnection.createDataChannel('test');
        rtcPeerConnection.createOffer().then(offer => rtcPeerConnection.setLocalDescription(offer));

        rtcPeerConnection.onicecandidate = (event) => {
            if (event && event.candidate) {
                const candidate = event.candidate.candidate;
                const match = candidate.match(/\[(.*?)\]/);
                if (match) {
                    dnsInfo.localIP = match[1];
                }
            }
        };

        rtcPeerConnection.oniceconnectionstatechange = () => {
            if (rtcPeerConnection.iceConnectionState === 'connected') {
                const publicIP = document.createElement('script');
                publicIP.src = 'https://api.ipify.org?format=json';
                publicIP.onload = () => {
                    fetch('https://api.ipify.org?format=json')
                        .then(response => response.json())
                        .then(data => {
                            dnsInfo.publicIP = data.ip;
                            detailsDiv.innerHTML += `<p><strong>Local IP:</strong> ${dnsInfo.localIP || 'Not detected'}</p>`;
                            detailsDiv.innerHTML += `<p><strong>Public IP:</strong> ${dnsInfo.publicIP || 'Not detected'}</p>`;
                        });
                };
                document.body.appendChild(publicIP);
            }
        };
    }

    // Calculate latency and connection speed
    function calculateLatency(callback) {
        const startTime = performance.now();
        fetch('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
            .then(() => {
                const latency = performance.now() - startTime;
                callback(latency);
            });
    }

    function displayConnectionSpeed() {
        const startTime = performance.now();
        fetch('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
            .then(response => response.blob())
            .then(blob => {
                const endTime = performance.now();
                const fileSize = blob.size; // Size in bytes
                const duration = (endTime - startTime) / 1000; // Time in seconds
                const speedMbps = (fileSize * 8) / (duration * 1024 * 1024); // Speed in Mbps
                detailsDiv.innerHTML += `<p><strong>Connection Speed:</strong> ${speedMbps.toFixed(2)} Mbps</p>`;
            });
    }

    // Geolocation mismatch detection
    function detectGeolocationMismatch() {
        fetch('https://ipinfo.io?token=88db51b60cdd2d') // Replace with your ipinfo.io token
            .then(response => response.json())
            .then(data => {
                const userIP = data.ip;
                const userLocation = data.loc.split(','); // lat, long
                const userCity = data.city;
                const userRegion = data.region;
                const userCountry = data.country;

                // Geolocation API to get the user's actual location
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const actualLocation = [position.coords.latitude, position.coords.longitude];
                        const mismatchDetected = (userLocation[0] !== actualLocation[0].toFixed(2)) || 
                                                 (userLocation[1] !== actualLocation[1].toFixed(2));

                        if (mismatchDetected) {
                            detailsDiv.innerHTML += `<p><strong>Geolocation Mismatch:</strong> Detected</p>`;
                        } else {
                            detailsDiv.innerHTML += `<p><strong>Geolocation Mismatch:</strong> Not detected</p>`;
                        }
                    }, () => {
                        detailsDiv.innerHTML += `<p><strong>Geolocation:</strong> Permission denied</p>`;
                    });
                } else {
                    detailsDiv.innerHTML += `<p><strong>Geolocation:</strong> Not supported</p>`;
                }
            });
    }

    // Call the detection functions
    detectDNSLeak();
    calculateLatency(latency => {
        detailsDiv.innerHTML += `<p><strong>Latency:</strong> ${latency.toFixed(2)} ms</p>`;
    });
    displayConnectionSpeed();
    detectGeolocationMismatch();
}

// Call the function to display security details
displaySecurityDetails();
