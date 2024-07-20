function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
let talentos = {};
let areas_investigacion = {};

document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/talentos-db/talentos.json')
        .then(response => response.json())
        .then(data => {
            talentos = data;
            showEmployeeDetail();
            areas_investigacion = {
                'Catalisis': {
                    talentos_investigacion: [
                        talentos['LeonardoGuse'],
                        talentos['RaulComelli'],
                    ],
                    pageName: 'catalisis',
                },
                'AI aplicada a I+D': {
                    talentos_investigacion: [
                        talentos['MauricioMiranda'],
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
                        talentos['RaulComelli'],
                        talentos['LeonardoGuse'],
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
                'Planeador y avión propulsado por hidrógeno': {
                    talentos_investigacion: [
                        talentos['CoquiPace']
                    ],
                    pageName: 'lanzadores-espaciales',
                },
                'Refugios del futuro': {
                    talentos_investigacion: [
                        talentos['VictoriaColombo'],
                        talentos['ManuelaPerez'],
                        talentos['SebastianSpalenza']
                    ],
                    pageName: 'viviendas-sustentables',
                },
                'Desarrollo de oportunindades': {
                    talentos_investigacion: [
                        talentos['MarceloBoldrini'],
                    ],
                    pageName: 'index',
                },
                'Estudio de arquitectura': {
                    talentos_investigacion: [
                        talentos['RubenJuarez'],
                    ],
                    pageName: 'https://juarezdambola.com/',
                },
            };

            showEmployeesForCurrentPage();
        })
        .catch(error => console.error('Error al cargar los datos del JSON:', error));
});
document.getElementById('btn-regresar').addEventListener('click', function () {
    if (document.referrer) {
        history.back();
    } else {
        window.location.href = 'https://www.faroandes.com/';
    }
});

function showEmployeeDetail() {
    const talentoKey = getQueryParam('talento');
    const talento = talentos[talentoKey];
    for (let area in areas_investigacion) {
        if (area != 'pageName') {
            const empleados = areas_investigacion[area].talentos_investigacion;
            empleados.forEach(empleado => {
                // Verificar si el empleado existe y tiene la propiedad 'areas'
                if (empleado.name) {

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
                        let htmlString;

                        if (areas_investigacion[area].pageName.includes('.')) {
                            htmlString = `
                                <a target="_blank" href="${areas_investigacion[area].pageName}">
                                    <span>${area} <i style="font-size:12px" class="fa-solid fa-arrow-up-right-from-square"></i> y </span>
                                </a>
                            `;
                        } else {
                            htmlString = `
                                <a href="${areas_investigacion[area].pageName}.html">
                                    <span>${area} <i style="font-size:12px" class="fa-solid fa-arrow-up-right-from-square"></i> y </span>
                                </a>
                            `;
                        }

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
