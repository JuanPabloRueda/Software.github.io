document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('vacancy-form');
    const vacanciesList = document.getElementById('vacancies-list');
    const authModal = document.getElementById('auth-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userGreeting = document.getElementById('user-greeting');

    // Mostrar formulario de inicio de sesión
    loginBtn.addEventListener('click', function() {
        authModal.style.display = "block";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    // Mostrar formulario de registro
    registerBtn.addEventListener('click', function() {
        authModal.style.display = "block";
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Cerrar el modal
    document.querySelector('.close').addEventListener('click', function() {
        authModal.style.display = "none";
    });

    // Manejar el registro de usuarios
    document.getElementById('register').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (localStorage.getItem(username)) {
            alert('El usuario ya existe.');
        } else {
            localStorage.setItem(username, password);
            alert('Registro exitoso. Ahora puede iniciar sesión.');
            authModal.style.display = "none";
        }
    });

    // Manejar el inicio de sesión de usuarios
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (localStorage.getItem(username) === password) {
            sessionStorage.setItem('loggedInUser', username);
            updateUIForLoggedInUser(username);
            authModal.style.display = "none";
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });

    // Manejar el cierre de sesión
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');
        updateUIForLoggedOutUser();
    });

    // Actualizar la UI cuando el usuario inicia sesión
    function updateUIForLoggedInUser(username) {
        loginBtn.style.display = "none";
        registerBtn.style.display = "none"}
