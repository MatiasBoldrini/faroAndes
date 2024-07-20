function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
let talentos = {};
let areas_investigacion = {};

function loadData() {
    return Promise.all([
        fetch('/assets/talentos-db/talentos.json').then(response => response.json()),
        fetch('/assets/talentos-db/areas-investigacion.json').then(response => response.json())
    ])
        .then(([talentosData, areasData]) => {
            talentos = talentosData;
            areas_investigacion = areasData;

            showEmployeeDetail();
            showEmployeesForCurrentPage();
        })
        .catch(error => console.error('Error al cargar los datos del JSON:', error));
}
document.addEventListener('DOMContentLoaded', () => {
    loadData();
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
                    if (areas_investigacion[area].talentos_investigacion.includes(talentoKey)) {
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
}// Función para mostrar los empleados para la página actual
function showEmployeesForCurrentPage() {
    const currentPageName = window.location.pathname.split('/').pop().replace('.html', '');
    let areaInvestigacion = null;

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
        employeeContainer.innerHTML = ''; // Limpiar antes de agregar nuevos elementos

        // Generar HTML para cada empleado
        empleados.forEach(empleadoKey => {
            const empleado = talentos[empleadoKey];
            if (empleado) { // Verificar que el empleado existe
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
            }
        });
    } else {
        if(currentPageName != 'author.php'){
            console.error(`No se encontró la página correspondiente a '${currentPageName}' en areas_investigacion.`);
        }
    }
}

