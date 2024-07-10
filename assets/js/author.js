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
        description: '<p class="text-lg mb-0">Doctor y Máster en Astrofísica e Ingeniero Aeroespacial. Obtuve mis títulos en el Instituto Tecnológico de Israel, <strong>Technion</strong>. Luego de terminar mis estudios académicos, desarrollé sistemas aviónicos computados para la Fuerza Aérea Israelí y continúo siendo consultor para el Gobierno de Israel en distintos proyectos de defensa, como el sistema de defensa contra misiles balísticos <strong>Arrow</strong>. Desde hace más de 25 años soy consultor y trabajo activamente en el desarrollo del programa espacial israelí. Además, difundí en distintos congresos de América Latina los logros más destacados de este programa.</p><p class="text-lg mb-0">Desde hace 15 años soy educador tecnológico de alumnos de escuela secundaria, utilizando al espacio y los satélites como plataforma educativa, liderando un grupo de profesionales de distintas disciplinas, mentores en el proyecto <strong>Dujifat</strong> y <strong>Tevel</strong>, en el cual alumnos de escuelas secundarias desarrollan e integran nanosatélites con fines educacionales. Estas actividades se realizan en el Centro de Ciencias Herzliya (ciudad que queda en el centro de Israel) y los distintos colegios que fueron elegidos para estos programas.</p><p class="text-lg mb-0">En la actualidad soy profesor externo de la Universidad de Tel Aviv, donde enseño varios cursos: “<strong>Introducción a la Ingeniería Espacial</strong>”, “<strong>Mecánica de Órbitas de Satélites</strong>”, “<strong>Control Angular de los Satélites</strong>”.</p><p class="text-lg mb-0">Estar en el <strong>Faro Andes</strong> significa para mí varias cosas: volverme a conectar tecnológicamente con el país donde nací, ser parte de un grupo de excelentes profesionales y líderes tecnológicos y tener la posibilidad de desarrollar proyectos de vanguardia tecnológica.</p>'
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
        description: '<p class="text-lg mb-0">  <strong>¿Por qué estoy en el Faro?</strong> Los avances científicos y tecnológicos han hecho posible que se puedan atender aspectos muy importantes como la salud. Lo que hace unos años parecía algo imposible de atender, actualmente con los avances que se han obtenido es posible curar enfermedades con la ayuda de la tecnología. La ciencia y la tecnología van de la mano. Estos avances son importantes cuando son usados para el bien común, mejorando la calidad de vida de la gente. La ciencia y la tecnología también han proporcionado grandes beneficios en el ámbito de la educación, comunicación e inteligencia artificial. Por ejemplo, en cuanto se refiere a la educación, ha sido posible implementar sistemas de enseñanza más lúdicos e interactivos. La ciencia y la tecnología nos ofrecen un mundo de conocimientos, pero al mismo tiempo, la oportunidad para desarrollar otras capacidades cognitivas sin dejar de lado la parte humana, como es la práctica de los valores. Como este emprendimiento va en ese camino, me es grato embarcarme en esta maravillosa aventura. Usar bien las palabras y la ciencia es construir un mundo mejor.</p><p class="text-lg mb-0"><br>    <strong>Doctor en Astronomía</strong>, graduado en la Universidad Nacional de La Plata. Actualmente es Consultor Científico de empresas y organismos nacionales e internacionales, <strong>Líder de Investigación y Desarrollo de Adetech Industrial Group S.A.</strong> y se encuentra trabajando como Investigador Científico con Universidades de EEUU (Texas/Colorado/Ohio/Carolina del Norte) en <strong>proyectos científicos espaciales de la NASA.</strong></p><p class="text-lg mb-0">    Ha tenido una extensa trayectoria en el área de las ciencias y en la administración de las mismas. Ha sido <strong>Investigador del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET)</strong>, Profesor de la Facultad de Ciencias Exactas, Ingeniería y Agrimensura de la Universidad Nacional de Rosario (UNR)</strong>, Director del Complejo Astronómico de Rosario (Observatorio Astronómico, Planetario y Museo Experimental de Ciencias)</strong>, Subsecretario de Promoción Científica y Tecnológica de la Secretaría de Estado de Ciencia, Tecnología e Innovación de la Provincia de Santa Fe</strong> y <strong>Vicepresidente de la Agencia Santafesina de Ciencia, Tecnología e Innovación</strong>, todos del ámbito del Ministerio de Ciencia, Tecnología e Innovación Productiva de la Provincia de Santa Fe.</p><p class="text-lg mb-0">    También se ha desempeñado como Secretario de Ciencia y Tecnología de la Facultad de Ciencias Exactas, Ingeniería y Agrimensura de la Universidad Nacional de Rosario</strong>, Titular de la Comisión de Desarrollo Científico e Intercambio de Tecnología de la Organización de los Estados Americanos (OEA)</strong>, Coordinador Titular de la Comisión Temática Capacitación de Recursos Humanos y Proyectos de Investigación y Desarrollo de la RECyT del MERCOSUR</strong>, <strong>Comisionado como Senior Oficial ante la Unión Europea</strong>, entre otros roles destacados en su carrera.</p>',
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
        description: '<p class="text-lg mb-0">    Estoy en el Faro porque creo en la <strong>transformación</strong> y la innovación sostenible. Aquí, puedo contribuir a un futuro más próspero y equitativo, alineado con mis valores y aspiraciones.</p><p class="text-lg mb-0">    Mi pasión por la <strong>investigación</strong> y el descubrimiento se enciende en el Faro. La oportunidad de trabajar en proyectos que impactan positivamente en el mundo resuena en mi interior y me motiva a dar lo mejor de mí cada día.</p><p class="text-lg mb-0">    Estudiante de <strong>biotecnología</strong>, con experiencia en proyectos de I+D relacionados con procesos para la obtención de hidrógeno, gas de síntesis y valorización de biomasa. Altamente interesado y muy apasionado por las energías renovables y los procesos de conversión de biomasa, con habilidades y experiencia adquiridas en grupos de investigación multidisciplinarios en trabajos relacionados con la síntesis, caracterización, evaluación y desarrollo de procesos catalíticos.</p><p class="text-lg mb-0">    ⁠<strong> Experiencia laboral relacionada:</strong><br>    •⁠ Investigador en I+D: INCAPE - UNL - CONICET / Santa Fe - Argentina / Junio 2017 – Presente<br>    •⁠  ⁠Analista y Asistente en I+D: AdeTech Industrial Group S.A. / Argentina / Marzo 2023 – Presente: Analista y asistente en proyectos de I+D en el Centro de Investigación<br>    Áreas de especialización: Catálisis heterogénea, Diseño de reactores, Procesos de reformado catalítico, Energías renovables, Biomasa lignocelulósica, Bioproductos, Biocombustibles, Combustibles <strong>sostenibles</strong>.</p>'
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
        description: '<p class="text-lg mb-0">Mi nombre es <strong>Manuela</strong> María Pérez. Soy Ingeniera Química egresada  de la Universidad Tecnológica Nacional Regional Rosario. Mi orientación elegida fue <strong>Medio Ambiente</strong>. Viví 6 años en Rosario mientras estudiaba.</p><p class="text-lg mb-0">Por motivos personales volví a mi ciudad natal de Cañada de Gómez y comencé a trabajar en una empresa local con proyección internacional, que se llama <strong>NOVA S.A.U.</strong> Hace 15 años que trabajo en la misma y ocupo el puesto de Directora Técnica del Laboratorio de Investigación y Desarrollo.</p><p class="text-lg mb-0">Durante estos 15 años he realizado varios cursos relativos a mi puesto de trabajo, y otros tantos no relacionados, pero que han sido de interés personal para mí. También completé una carrera de pos grado, <strong>Profesorado Universitario para la Educación Superior y Secundaria</strong>, debido a mi gusto por la Enseñanza.</p><p class="text-lg mb-0">Soy mamá de un niño de 4 años, el cual, con su llegada a mi vida, ha vuelto a despertar, y con más fuerza, la motivación a movilizarme por aportar al Mundo Ideas, Proyectos y Acciones que hagan de nuestro Planeta un mejor lugar para vivir. Éste es uno de los grandes motivos por el cual me he sentido interpelada para integrar este potente grupo de Seres, que es <strong>Faro</strong>. Me siento honrada haber sido convocada, y maravillada por la magia de <strong>Sincronicidad</strong>. Tengo Fe en <strong>Faro</strong>, tengo Fe en Nosotros como Humanidad.</p>'
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
                  ${(() => {
                    let result = Object.keys(areas_investigacion).map(area => {
                        // Verificar si el área está asignada al empleado
                        if (areas_investigacion[area].talentos_investigacion.includes(talento)) {
                            let htmlString = `
                                <a href="${areas_investigacion[area].pageName}.html">
                                    <span>${area} y </span>
                                </a>
                            `;
                            return htmlString;
                        }
                        return ''; // Si el área no está asignada, retorna una cadena vacía
                    }).join('');
            
                    // Eliminar la última " y " del resultado
                    result = result.replace(/ y <\/span>(?=\s*<\/a>\s*$)/, '</span>');
            
                    // Retornar el resultado modificado
                    return result;
                })()}
                </div>

                </div>
                ${talento.description}
                <button class="mt-2 btn btn-outline-dark mb-0" onclick="history.back()"><i class="me-2 fa-solid fa-arrow-left"></i> Regresar</button>

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