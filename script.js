document.addEventListener('DOMContentLoaded', function () {
    const jobList = document.getElementById('jobList');
    const searchInput = document.getElementById('searchInput');
    const btnSearch = document.getElementById('btnSearch');
    const btnLogin = document.getElementById('btnLogin');
  
    const jobs = [
        { title: 'Operario de Producción', location: 'Lima', description: 'Encargado de operar y controlar las máquinas de producción en la línea de ensamblaje.' },
        { title: 'Recepcionista', location: 'Arequipa', description: 'Responsable de recibir y dirigir a los visitantes, atender llamadas telefónicas y realizar tareas administrativas.' },
        { title: 'Mecánico Industrial', location: 'Trujillo', description: 'Encargado de realizar mantenimiento preventivo y correctivo en maquinaria industrial.' },
        { title: 'Ingeniero Civil', location: 'Cusco', description: 'Supervisión de proyectos de construcción, diseño de estructuras y gestión de recursos.' },
        { title: 'Analista de Sistemas', location: 'Lima', description: 'Desarrollo y mantenimiento de sistemas informáticos, análisis de requerimientos y soporte técnico.' },
        { title: 'Contador', location: 'Piura', description: 'Registro y análisis de transacciones financieras, elaboración de estados financieros y declaración de impuestos.' },
        { title: 'Desarrollador de Software', location: 'Lima', description: 'Desarrollo de software para aplicaciones web y móviles.' },
        { title: 'Ingeniero de QA', location: 'Arequipa', description: 'Pruebas de calidad de software y garantía de calidad.' },
        { title: 'Arquitecto de Software', location: 'Trujillo', description: 'Diseño y planificación de la arquitectura de software.' },
        { title: 'Analista de Datos', location: 'Cusco', description: 'Análisis de datos para la toma de decisiones empresariales.' },
        { title: 'Especialista en Seguridad Informática', location: 'Piura', description: 'Implementación y monitoreo de medidas de seguridad informática.' }
    ];
  
    function displayJobs(jobs) {
      jobList.innerHTML = '';
      jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Ubicación:</strong> ${job.location}</p>
          <p>${job.description}</p>
        `;
        jobList.appendChild(jobElement);
      });
    }

    displayJobs(jobs);

    btnSearch.addEventListener('click', function () {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredJobs = jobs.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) || job.location.toLowerCase().includes(searchTerm);
      });
      displayJobs(filteredJobs);
    });

    btnLogin.addEventListener('click', function () {
      alert('Funcionalidad de inicio de sesión no implementada en este prototipo.');
    });
  });


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const users = [
      { username: 'reclutador1', password: '1234', type: 'reclutador' },
      { username: 'candidato1', password: '5678', type: 'candidato' },
    ];
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
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const username = formData.get('username');
      const password = formData.get('password');
      login(username, password);
    });
  });
  