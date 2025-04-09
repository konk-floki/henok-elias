// Retrieve the username from the URL parameters
const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get("username");

// Display the welcome message
if (username) {
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.textContent = `Hello, ${username}! We’re glad to have you here.`;
}

// Redirect to the next page when the button is clicked
document.getElementById("redirect-button").addEventListener("click", () => {
    window.location.href = "naturalscienceresources.html"; // Replace with the actual next page URL
});