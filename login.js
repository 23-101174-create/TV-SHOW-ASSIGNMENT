document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Login successful! Welcome to the Upside Down... I mean, the fan site!');
    }

    if (email == "rawda" && password == "123"){
        window.location == "index.html";
    }
});