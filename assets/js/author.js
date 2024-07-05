function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const talentos = {
    DanielPortnoy: {
        name: 'Daniel Portnoy',
        areas: [],

        photo: 'assets/extra/Talentos/Daniel-Portnoy.jpg',
        linkedin: 'https://www.linkedin.com/in/daniel-portnoy-8884471/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    LeonardoAmurrio: {
        name: 'Leonardo Amurrio',
        areas: [],
        photo: 'assets/extra/Talentos/Leonardo-Amurrio.jpg',
        linkedin: '#',
        description: '<p class="text-lg mb-0">Me considero un incansable buscador de la <strong>verdad</strong>. Desde muy temprana edad he experimentado una inmensa pasión por los <strong>misterios</strong> ocultos de la vida. Formar parte de este revolucionario equipo de investigación y excelente grupo humano brinda a mi vida una gran cuota de plenitud y realización.</p><p class="text-lg mb-0">    Soy Leonardo Demian Amurrio, un profesional argentino con formación académica en Ingeniería Electrónica y Licenciatura en Física, principalmente enfocado en la investigación de tecnologías de nuevas energías y diversos campos de la <strong>ciencia</strong> disruptiva y no convencional.</p><p class="text-lg mb-0">    <strong>Autodidacta</strong> y multifacético. He dedicado gran parte de mi vida a adquirir todo tipo de habilidades y conocimientos que me ayuden a formar parte activa de la co-creación de un mundo más próspero. Desde el ámbito técnico y electrónico, como la programación de bajo y alto nivel orientada a redes neuronales, sistemas embebidos y microcontroladores, hasta la bioconstrucción, agroecología, permacultura y el estudio de diversas filosofías ontológicas y sistemas revolucionarios de organización social.</p><p class="text-lg mb-0">    Creo firmemente que un nuevo mundo es posible, solo está en nosotros hacerlo <strong>realidad</strong>.</p>'
    },
    MauricioMiranda: {
        name: 'Mauricio Miranda',
        areas: [],
        photo: 'assets/extra/Talentos/Mauricio-Miranda.jpeg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Mauricio soluciona problemas escribiendo <strong>código</strong>. Es ingeniero de software con amplia experiencia en diseño y arquitectura de aplicaciones, liderazgo de equipos y gestión de proyectos. Cuenta con más de 20 años de experiencia en desarrollo de software en múltiples industrias, con un fuerte enfoque en tecnologías <strong>geoespaciales</strong> </p> <p class="text-lg mb-0"> Mauricio se enamoró del proyecto apenas escuchó hablar del Faro. Su intención es colaborar con el equipo aportando su <strong>conocimiento</strong> en el desarrollo de software y su experiencia en la búsqueda de soluciones con una perspectiva pragmática e <strong>iterativa</strong>.</p>'
    },
    MarceloBoldrini: {
        name: 'Marcelo Boldrini',
        areas: [],
        photo: 'assets/extra/Talentos/Marcelo-Boldrini.jpeg',
        linkedin: 'https://www.linkedin.com/in/marmatbol/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    SebastianSpalenza: {
        name: 'Sebastian Spalenza',
        areas: [],

        photo: 'assets/extra/Talentos/Sebastian-Spalenza.jpg',
        linkedin: 'https://www.linkedin.com/in/sebastian-spalenza-77507155/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    PedroMiralles: {
        name: 'Pedro Miralles',
        areas: [],

        photo: 'assets/extra/Talentos/Pedro-Miralles.jpg',
        linkedin: 'https://www.linkedin.com/in/pedro-miralles-070730174/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
        MarianoChicatun: {
            name: 'Mariano Chicatun',
            areas: [],

            photo: 'assets/extra/Talentos/Foto-Mariano-Chicatun.jpg',
            linkedin: 'https://www.linkedin.com/in/mariano-chicatun/',
            description: '<p class="text-lg mb-0"> Description</p>'
        },
        RobertoAquilano: {
        name: 'Roberto Aquilano',
        areas: [],

        photo: 'assets/extra/Talentos/Roberto-Aquilano.jpeg',
        linkedin: 'https://www.linkedin.com/in/roberto-oscar-aquilano-a0bba745/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    VictoriaColombo: {
        name: 'Victoria Colombo',
        areas: [],

        photo: 'assets/extra/Talentos/Foto-Clara-Victoria-Colombo.jpg',
        linkedin: 'https://www.linkedin.com/in/victoria-colombo-531ab71b2',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    LeonardoGuse: {
        name: 'Leonardo Guse',
        areas: [],

        photo: 'assets/extra/Talentos/Leonardo-Guse.jpeg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    CoquiPace: {
        name: 'Coqui Pace',
        areas: [],

        photo: 'assets/extra/Talentos/Coqui-pace.png',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    RaulComelli: {
        name: 'Raul Comelli',
        areas: [],

        photo: 'assets/extra/Talentos/Raul-Comelli.jpg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    ManuelaPerez: {
        name: 'Manuela Perez',
        areas: [],
        photo: 'assets/extra/Talentos/Foto-Manuela-Perez.jpg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    }
};
const areas_investigacion = {
    'Catalisis': {
        talentos_investigacion: [
            talentos['LeonardoGuse'],
            talentos['RaulComelli'],
        ],
        pageName: 'catalisis',
    },
    'AI aplicada a I+D': {
        talentos_investigacion: [
            talentos['MarianoChicatun'],
        ],
        pageName: 'AI-Inv-Desarrollo',
    },
    'Soluciones ingeniería aeroespacial': {
        talentos_investigacion: [
            talentos['DanielPortnoy'],
        ],
        pageName: 'ingenieria-espacial',
    },
    'Tecnologías Alternativas para la Generación de Hidrógeno': {
        talentos_investigacion: [
            talentos['SebastianSpalenza'],
            talentos['PedroMiralles'],
            talentos['LeonardoAmurrio'],
        ],
        pageName: 'energias-alternativas-hidrogeno',
    },
    'Tecnología de Nuevas Energías': {
        talentos_investigacion: [
            talentos['PedroMiralles'],
            talentos['LeonardoAmurrio']
        ],
        pageName: 'tecnologia-nuevas-energias',
    },
    'Lanzadores Espaciales': {
        talentos_investigacion: [
            talentos['CoquiPace']
        ],
        pageName: 'lanzadores-espaciales',
    },
    'Viviendas Sustentables': {
        talentos_investigacion: [
            // talentos['ClaraColombo'],
            talentos['ManuelaPerez'],
            talentos['SebastianSpalenza']
        ],
        pageName: 'viviendas-sustentables',
    }
};
function showEmployeeDetail() {
    const talentoKey = getQueryParam('talento');
    const talento = talentos[talentoKey];
    console.log(talento);
    for (let area in areas_investigacion) {
        if (area != 'pageName') {
            const empleados = areas_investigacion[area].talentos_investigacion;
            empleados.forEach(empleado => {
                // Verificar si el empleado existe y tiene la propiedad 'areas'
                if (empleado.name) {
                    console.log(empleado + ' Asignado a ' + area.talentos_investigacion);
                    // Agregar el área al empleado
                    empleado.areas.push(area);
                } else {
                    console.error(`Empleado inválido o sin propiedades definidas: ${empleado}`);
                }
            });
        }

    }
    if (talento) {
        const detailContainer = document.getElementById('talento-detail-container');
        const imageContainer = document.getElementById('author-image-container');
        imageContainer.innerHTML = `
        <img style="object-fit: cover;" class="avatar  shadow-xl position-relative z-index-2"
								src="${talento.photo}" alt="foto_perfil" loading="lazy"></img>
                                `;
        detailContainer.innerHTML = `
                <h3 class="mb-0">${talento.name} <a href="${talento.linkedin}">
                      <i style="color: #0B65C2; margin-left:7px; font-size:25px;" class="fa-brands fa-linkedin"></i>
                    </a></h3>

                </div>
                <div class="row mb-4">
                  <div class="col-auto">
                    ${Object.keys(areas_investigacion).map(area => {
                        // Verificar si el área está asignada al empleado
                        if (areas_investigacion[area].talentos_investigacion.includes(talento)) {
                            return `
                                <a href="${areas_investigacion[area].pageName}.html">
                                    <span>${area}</span>
                                </a>
                            `;
                        }
                        return ''; // Si el área no está asignada, retorna una cadena vacía
                    }).join('')}
                </div>

                </div>
                ${talento.description}
                <button class="mt-5 btn btn-outline-dark mb-0" onclick="history.back()"><i class="me-2 fa-solid fa-arrow-left"></i> Regresar</button>

            `;
    }
        }
        function showEmployeesForCurrentPage() {
            // Obtener el nombre de la página actual desde la URL
            const currentPageName = window.location.pathname.split('/').pop().replace('.html', '');
            areaInvestigacion = null;
            for (let area in areas_investigacion) {
                if (areas_investigacion[area].pageName === currentPageName) {
                    areaInvestigacion = areas_investigacion[area];
                    break;
                }
            }
        
            if (areaInvestigacion) {
                const empleados = areaInvestigacion.talentos_investigacion;

                // Limpiar contenedores de empleados
                const employeeContainer = document.getElementById('multiple-talentos-container');

                // Generar HTML para cada empleado
                empleados.forEach(empleado => {
                    const empleadokey = empleado.name.replace(/\s+/g, ''); // Reemplazar espacios por guiones
                    employeeContainer.innerHTML += `
                    <li class="clearfix multiple-talentos-item">
                        <div class="widget-posts-image">
                            <div class="hexagon-img-container">
                                <button onclick="redirectToEmployee('${empleadokey}')">
                                    <img src="${empleado.photo}" alt="Foto de ${empleado.name}" />
                                </button>
                            </div>
                        </div>
                        <div class="widget-posts-body" style="margin-left: 10px;">
                            <div class="widget-posts-title font-alt">
                                ${empleado.name}
                            </div>
                        </div>
                    </li>
                    `;
                });
            } else {
                console.error(`No se encontró la página correspondiente a '${currentPageName}' en areas_investigacion.`);
            }
        }

        // Llamar a la función al cargar la página
showEmployeesForCurrentPage();


showEmployeeDetail();