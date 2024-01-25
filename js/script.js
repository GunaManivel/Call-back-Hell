const countdown = (count, callback) => {
  document.getElementById("countdown").textContent = count;
  if (count > 1) {
    setTimeout(() => {
      document.getElementById("countdown").style.color = "#ff0000"; // Change color for countdown effect
      countdown(count - 1, callback);
    }, 1000);
  } else {
    setTimeout(() => {
      document.getElementById("countdown").textContent = "";
      document.getElementById("message").textContent =
        "Happy Independence Day !!";
      document.getElementById("message").style.display = "block"; // Show message
      document.getElementById("flag").style.display = "block"; // Hide flag container
    }, 1000);
  }
};

// Start the countdown
setTimeout(() => {
  countdown(10, null);
}, 1000); // Initial timeout to start countdown
