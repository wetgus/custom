function displayVPNProxyDetails() {
    // Simple WebRTC leak detection
    const peerConnection = new RTCPeerConnection({iceServers: []});
    peerConnection.createDataChannel("");
    peerConnection.createOffer().then(offer => peerConnection.setLocalDescription(offer));
    peerConnection.onicecandidate = function(event) {
        if (!event.candidate) return;
        const ip = /([0-9]{1,3}(\.[0-9]{1,3}){3})/g.exec(event.candidate.candidate);
        const details = `
            <h2>VPN/Proxy Detection</h2>
            <p><strong>Local IP Address:</strong> ${ip ? ip[1] : "Not available"}</p>
        `;
        document.getElementById('vpn-proxy-details').innerHTML = details;
    };
}
