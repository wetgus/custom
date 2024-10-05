function displayBatteryDetails() {
    navigator.getBattery().then(function(battery) {
        const batteryLevel = (battery.level * 100).toFixed(0);
        const chargingStatus = battery.charging ? "Charging" : "Not Charging";
        const chargingTime = battery.chargingTime ? `${battery.chargingTime} seconds` : "Not charging";
        const dischargingTime = battery.dischargingTime ? `${battery.dischargingTime} seconds` : "Unlimited";

        const details = `
            <h2>Battery Details</h2>
            <p><strong>Battery Level:</strong> ${batteryLevel}%</p>
            <p><strong>Charging Status:</strong> ${chargingStatus}</p>
            <p><strong>Charging Time:</strong> ${chargingTime}</p>
            <p><strong>Discharging Time:</strong> ${dischargingTime}</p>
        `;
        document.getElementById('battery-details').innerHTML = details;
    });
}
