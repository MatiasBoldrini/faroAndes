function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const employees = {
    DanielPortnoy: {
        name: 'Daniel Portnoy',
        areas: ['Espacio'],
        position: 'En desarrollo',
        photo: 'assets/extra/Talentos/Daniel-Portnoy.jpg',
        linkedin: 'https://www.linkedin.com/in/daniel-portnoy-8884471/',
        description: '<p class="text-lg mb-0"> Mauricio soluciona problemas escribiendo <strong>código</strong>. Es ingeniero de software con amplia experiencia en diseño y arquitectura de aplicaciones, liderazgo de equipos y gestión de proyectos. Cuenta con más de 20 años de experiencia en desarrollo de software en múltiples industrias, con un fuerte enfoque en tecnologías <strong>geoespaciales</strong> </p> <p class="text-lg mb-0"> Mauricio se enamoró del proyecto apenas escuchó hablar del Faro. Su intención es colaborar con el equipo aportando su <strong>conocimiento</strong> en el desarrollo de software y su experiencia en la búsqueda de soluciones con una perspectiva pragmática e <strong>iterativa</strong>.</p>'
    },
    MauricioMiranda: {
        name: 'Mauricio Miranda',
        areas: ['Desarrollo de Software'],
        position: 'Ingeniero de Software',
        photo: 'assets/extra/Talentos/Mauricio-Miranda.jpeg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Mauricio soluciona problemas escribiendo <strong>código</strong>. Es ingeniero de software con amplia experiencia en diseño y arquitectura de aplicaciones, liderazgo de equipos y gestión de proyectos. Cuenta con más de 20 años de experiencia en desarrollo de software en múltiples industrias, con un fuerte enfoque en tecnologías <strong>geoespaciales</strong> </p> <p class="text-lg mb-0"> Mauricio se enamoró del proyecto apenas escuchó hablar del Faro. Su intención es colaborar con el equipo aportando su <strong>conocimiento</strong> en el desarrollo de software y su experiencia en la búsqueda de soluciones con una perspectiva pragmática e <strong>iterativa</strong>.</p>'
    },

    // Agrega más empleados aquí
};

function showEmployeeDetail() {
    const employeeKey = getQueryParam('employee');
    const employee = employees[employeeKey];
    console.log(employee);
    if (employee) {
        const detailContainer = document.getElementById('employee-detail-container');
        const imageContainer = document.getElementById('author-image-container');
         imageContainer.innerHTML = `
        <img style="object-fit: cover;" class="avatar  shadow-xl position-relative z-index-2"
								src="${employee.photo}" alt="foto_perfil" loading="lazy"></img>
                                `;
        detailContainer.innerHTML = `
                <h3 class="mb-0">${employee.name}</h3>

                </div>
                <div class="row mb-4">
                  <div class="col-auto">
                    <span>${employee.position}</span>
                  </div>
                  <div class="col-auto">
                    <span>${employee.areas}</span>
                  </div>
                  <div class="col-auto">
                    <a href="${employee.linkedin}">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>

                  </div>
                </div>
                ${employee.description}
            `;
    }
}

showEmployeeDetail();