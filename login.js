document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const eyeIcon = document.getElementById('eye');

    // Simulación de datos de usuarios
    const users = [
        { username: 'reclutador1', password: '1234', type: 'reclutador' },
        { username: 'candidato1', password: '5678', type: 'candidato' },
    ];

    // Función para manejar el inicio de sesión
    function login(username, password) {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('Inicio de sesión exitoso');
            window.location.href = 'bolsatrabajo.html';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    }

    // Event listener para el formulario de inicio de sesión
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');
        login(username, password);
    });

    // Función para mostrar/ocultar la contraseña
    function showHidePassword() {
        const passwordInput = document.getElementById('pwd');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }

    // Event listener para mostrar/ocultar la contraseña
    eyeIcon.addEventListener('click', showHidePassword);
});