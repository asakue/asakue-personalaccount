// scripts.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Check if both username and password are "test"
    if (username === "test" && password === "test") {
        alert("Успешно!");
        window.location.href = "dashboard.html";
    } else {
        alert("Login failed. Please try again.");
    }
});
