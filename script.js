document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Getting the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (can be improved)
    if (username === 'BRS Free' && password === 'BRS') {
        alert('Login successful! Click ok to see our free videos...');
        window.location.href = 'video.html';  // Redirect to video page after login
    } else {
        alert('Invalid username and password.');
    }
});
