/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name-input");
    const submitButton = document.getElementById("submit-button");
    const dynamicMessage = document.getElementById("dynamic-message");
  
    submitButton.addEventListener("click", () => {
      const userName = nameInput.value.trim();
  
      if (userName) {
        const currentTime = new Date().getHours();
        let greeting;
  
        if (currentTime < 12) {
          greeting = "እንደምን አደሩ";
        } else if (currentTime < 18) {
          greeting = "እንደምን አረፈዱ";
        } else {
          greeting = "አንደምን አመሹ";
        }
  
        dynamicMessage.textContent = `${greeting}, ${userName}! እንኳን ወደዚህ ድረ-ገጽ በደህና መጡ!`;
      } else {
        dynamicMessage.textContent = "Please enter your name to get a personalized message!";
      }
    });
  });
  