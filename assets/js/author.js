function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const talentos = {
    DanielPortnoy: {
        name: 'Daniel Portnoy',
        areas: ['Espacio', 'Otra'],
        position: 'En desarrollo',
        photo: 'assets/extra/Talentos/Daniel-Portnoy.jpg',
        linkedin: 'https://www.linkedin.com/in/daniel-portnoy-8884471/',
        description: '<p class="text-lg mb-0"> Description</p>'
    },
    LeonardoAmurrio: {
        name: 'Leonardo Amurrio',
        areas: ['Espacio', 'Otra'],
        position: 'En desarrollo',
        photo: 'assets/extra/Talentos/Leonardo-Amurrio.jpg',
        linkedin: '#',
        description: '<p class="text-lg mb-0">Me considero un incansable buscador de la <strong>verdad</strong>. Desde muy temprana edad he experimentado una inmensa pasión por los <strong>misterios</strong> ocultos de la vida. Formar parte de este revolucionario equipo de investigación y excelente grupo humano brinda a mi vida una gran cuota de plenitud y realización.</p><p class="text-lg mb-0">    Soy Leonardo Demian Amurrio, un profesional argentino con formación académica en Ingeniería Electrónica y Licenciatura en Física, principalmente enfocado en la investigación de tecnologías de nuevas energías y diversos campos de la <strong>ciencia</strong> disruptiva y no convencional.</p><p class="text-lg mb-0">    <strong>Autodidacta</strong> y multifacético. He dedicado gran parte de mi vida a adquirir todo tipo de habilidades y conocimientos que me ayuden a formar parte activa de la co-creación de un mundo más próspero. Desde el ámbito técnico y electrónico, como la programación de bajo y alto nivel orientada a redes neuronales, sistemas embebidos y microcontroladores, hasta la bioconstrucción, agroecología, permacultura y el estudio de diversas filosofías ontológicas y sistemas revolucionarios de organización social.</p><p class="text-lg mb-0">    Creo firmemente que un nuevo mundo es posible, solo está en nosotros hacerlo <strong>realidad</strong>.</p>'
    },
    // MauricioMiranda: {
    //     name: 'Mauricio Miranda',
    //     areas: ['Desarrollo de Software'],
    //     position: 'Ingeniero de Software',
    //     photo: 'assets/extra/Talentos/Mauricio-Miranda.jpeg',
    //     linkedin: '',
    //     description: '<p class="text-lg mb-0"> Mauricio soluciona problemas escribiendo <strong>código</strong>. Es ingeniero de software con amplia experiencia en diseño y arquitectura de aplicaciones, liderazgo de equipos y gestión de proyectos. Cuenta con más de 20 años de experiencia en desarrollo de software en múltiples industrias, con un fuerte enfoque en tecnologías <strong>geoespaciales</strong> </p> <p class="text-lg mb-0"> Mauricio se enamoró del proyecto apenas escuchó hablar del Faro. Su intención es colaborar con el equipo aportando su <strong>conocimiento</strong> en el desarrollo de software y su experiencia en la búsqueda de soluciones con una perspectiva pragmática e <strong>iterativa</strong>.</p>'
    // },

    // Agrega más empleados aquí
};
const areas_investigacion ={
    Catalisis:{
        talentos_investigacion: [talentos['Daniel Portnoy'],talentos['Daniel Portnoy']],        
    },
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

showEmployeeDetail();