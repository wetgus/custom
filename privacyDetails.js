// privacyDetails.js

// Function to display privacy-related details
function displayPrivacyDetails() {
    const detailsDiv = document.getElementById('privacy-details');

    // Timezone and Language Detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language || navigator.userLanguage;
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;

    detailsDiv.innerHTML += `<p><strong>Timezone:</strong> ${timezone}</p>`;
    detailsDiv.innerHTML += `<p><strong>Language:</strong> ${language}</p>`;
    detailsDiv.innerHTML += `<p><strong>Locale:</strong> ${locale}</p>`;

    // Cookies and Local Storage Detection
    const cookiesEnabled = navigator.cookieEnabled ? "Enabled" : "Disabled";
    const localStorageEnabled = typeof(Storage) !== "undefined" ? "Available" : "Not Available";

    detailsDiv.innerHTML += `<p><strong>Cookies:</strong> ${cookiesEnabled}</p>`;
    detailsDiv.innerHTML += `<p><strong>Local Storage:</strong> ${localStorageEnabled}</p>`;

    // Navigator Storage Quota to detect Incognito Mode
    navigator.storage.estimate().then(estimate => {
        let quotaInfo = `<p><strong>Storage Quota:</strong> ${(estimate.quota / (1024 * 1024)).toFixed(2)} MB</p>`;
        quotaInfo += `<p><strong>Used Storage:</strong> ${(estimate.usage / (1024 * 1024)).toFixed(2)} MB</p>`;
        
        // Detect Incognito mode based on significantly lower storage quota
        if (estimate.quota < 1000000000) {
            quotaInfo += `<p><strong>Incognito Mode Detection (Quota):</strong> Incognito mode detected</p>`;
        } else {
            quotaInfo += `<p><strong>Incognito Mode Detection (Quota):</strong> Not in Incognito mode</p>`;
        }
        
        detailsDiv.innerHTML += quotaInfo;
    }).catch(error => {
        detailsDiv.innerHTML += `<p><strong>Error Fetching Storage Info:</strong> ${error.message}</p>`;
    });
}
