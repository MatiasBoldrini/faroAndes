function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const talentos = {
    DanielPortnoy: {
        name: 'Daniel Portnoy',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Daniel-Portnoy.jpg',
        linkedin: 'https://www.linkedin.com/in/daniel-portnoy-8884471/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    LeonardoAmurrio: {
        name: 'Leonardo Amurrio',
        areas: [],
        position: 'En desarrollo',
        photo: 'assets/extra/Talentos/Leonardo-Amurrio.jpg',
        linkedin: '#',
        description: '<p class="text-lg mb-0">Me considero un incansable buscador de la <strong>verdad</strong>. Desde muy temprana edad he experimentado una inmensa pasión por los <strong>misterios</strong> ocultos de la vida. Formar parte de este revolucionario equipo de investigación y excelente grupo humano brinda a mi vida una gran cuota de plenitud y realización.</p><p class="text-lg mb-0">    Soy Leonardo Demian Amurrio, un profesional argentino con formación académica en Ingeniería Electrónica y Licenciatura en Física, principalmente enfocado en la investigación de tecnologías de nuevas energías y diversos campos de la <strong>ciencia</strong> disruptiva y no convencional.</p><p class="text-lg mb-0">    <strong>Autodidacta</strong> y multifacético. He dedicado gran parte de mi vida a adquirir todo tipo de habilidades y conocimientos que me ayuden a formar parte activa de la co-creación de un mundo más próspero. Desde el ámbito técnico y electrónico, como la programación de bajo y alto nivel orientada a redes neuronales, sistemas embebidos y microcontroladores, hasta la bioconstrucción, agroecología, permacultura y el estudio de diversas filosofías ontológicas y sistemas revolucionarios de organización social.</p><p class="text-lg mb-0">    Creo firmemente que un nuevo mundo es posible, solo está en nosotros hacerlo <strong>realidad</strong>.</p>'
    },
    MauricioMiranda: {
        name: 'Mauricio Miranda',
        areas: [],
        position: 'Ingeniero de Software',
        photo: 'assets/extra/Talentos/Mauricio-Miranda.jpeg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Mauricio soluciona problemas escribiendo <strong>código</strong>. Es ingeniero de software con amplia experiencia en diseño y arquitectura de aplicaciones, liderazgo de equipos y gestión de proyectos. Cuenta con más de 20 años de experiencia en desarrollo de software en múltiples industrias, con un fuerte enfoque en tecnologías <strong>geoespaciales</strong> </p> <p class="text-lg mb-0"> Mauricio se enamoró del proyecto apenas escuchó hablar del Faro. Su intención es colaborar con el equipo aportando su <strong>conocimiento</strong> en el desarrollo de software y su experiencia en la búsqueda de soluciones con una perspectiva pragmática e <strong>iterativa</strong>.</p>'
    },
    MarceloBoldrini: {
        name: 'Marcelo Boldrini',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Marcelo-Boldrini.jpeg',
        linkedin: 'https://www.linkedin.com/in/marmatbol/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    SebastianSpalenza: {
        name: 'Sebastian Spalenza',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Sebastian-Spalenza.jpg',
        linkedin: 'https://www.linkedin.com/in/sebastian-spalenza-77507155/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    PedroMiralles: {
        name: 'Pedro Miralles',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Pedro-Miralles.jpg',
        linkedin: 'https://www.linkedin.com/in/pedro-miralles-070730174/',
        description: '<p class="text-lg mb-0"> Description</p>'
    }, 
    MarianoChicatun: {
        name: 'Mariano Chicatún',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Foto-Mariano-Chicatun.jpg',
        linkedin: 'https://www.linkedin.com/in/mariano-chicatun/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    RobertoAquilano: {
        name: 'Roberto Aquilano',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Roberto-Aquilano.jpeg',
        linkedin: 'https://www.linkedin.com/in/roberto-oscar-aquilano-a0bba745/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    VictoriaColombo: {
        name: 'Victoria Colombo',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Foto-Clara-Victoria-Colombo.jpg',
        linkedin: 'https://www.linkedin.com/in/victoria-colombo-531ab71b2',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    LeonardoGuse: {
        name: 'Leonardo Guse',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Leonardo-Guse.jpeg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    CoquiPace: {
        name: 'Coqui Pace',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Coqui-pace.png',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    RaulComelli: {
        name: 'Raul Comelli',
        areas: [],
        position: 'position',
        photo: 'assets/extra/Talentos/Raúl-Comelli.jpg',
        linkedin: '',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    ManuelaPerez: {
        name: 'Manuela Perez',
        areas: [],
        position: 'position',
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
        ]
    },
    'AI aplicada a I+D': {
        talentos_investigacion: [
            talentos['MarianoChicatun'],
        ]
    },
    'Soluciones ingeniería aeroespacial': {
        talentos_investigacion: [
            talentos['DanielPortnoy'],
        ]
    },
    'Tecnologías Alternativas para la Generación de Hidrógeno': {
        talentos_investigacion: [
            talentos['SebastianSpalenza'],
            talentos['PedroMiralles'],
            talentos['LeonardoAmurrio'],
            talentos['LeonardoAmurrio'],
        ]
    },
    'Tecnología de Nuevas Energías': {
        talentos_investigacion: [
            talentos['PedroMiralles'],
            talentos['LeonardoAmurrio']
        ]
    },
    'Lanzadores Espaciales': {
        talentos_investigacion: [
            talentos['CoquiPace']
        ]
    },
    'Viviendas Sustentables': {
        talentos_investigacion: [
            // talentos['ClaraColombo'],
            talentos['ManuelaPerez'],
            talentos['SebastianSpalenza']
        ]
    }
};
function showEmployeeDetail() {
    const talentoKey = getQueryParam('talento');
    const talento = talentos[talentoKey];
    console.log(talento);
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
                    <span>${talento.position}</span>
                  </div>
                  <div class="col-auto">
                    <span>${talento.areas}</span>
                  </div>
                  <div class="col-auto">
                    

                  </div>
                </div>
                ${talento.description}
            `;
    }
}
function asignarAreasAEmpleados() {
    console.log(Object.keys(talentos).length);
    // Iterar sobre cada área de investigación
    for (let area in areas_investigacion) {
        const empleados = areas_investigacion[area].talentos_investigacion;
        console.log(empleados);
        empleados.forEach(empleado => {
            // Verificar si el empleado existe y tiene la propiedad 'areas'
            if (empleado && empleado.areas) {
                // Agregar el área al empleado
                empleado.areas.push(area);
            } else {
                console.error(`Empleado inválido o sin propiedades definidas: ${empleado}`);
            }
        });
    }

}

asignarAreasAEmpleados();

showEmployeeDetail();