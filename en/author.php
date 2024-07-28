<!--
=========================================================
* Material Kit 2 - v3.0.4
=========================================================

* Product Page:  https://www.creative-tim.com/product/material-kit 

-->

<?php
// Obtener el parámetro de la URL
$talento = isset($_GET['talento']) ? $_GET['talento'] : '';

// Leer y decodificar el archivo JSON
$jsonFile = '../assets/talentos-db/en-talentos.json';
$jsonData = file_get_contents($jsonFile);
$authorData = json_decode($jsonData, true);

// Verificar si el talento existe en los datos
if (isset($authorData[$talento])) {
    $name = $authorData[$talento]['name'];
    // Cambiar la extensión de la imagen a .png
    $photoUrl = str_replace('.jpeg', '.png', $authorData[$talento]['photo']);
    $photoUrl = str_replace('.jpg', '.png', $photoUrl);
    $photoUrl = str_replace('.webp', '.png', $photoUrl);
} else {
    // Si el talento no existe, usar una imagen por defecto
    $name = 'Talento Desconocido';
    $photoUrl = '/assets/extra/default-image.png'; // Reemplaza con la ruta a una imagen por defecto en .png
}

// Generar la URL completa de la imagen
$baseUrl = 'https://faroandes.sirv.com/Images/';
$imageUrl = $baseUrl . basename($photoUrl);

// Generar el título del usuario
$title = htmlspecialchars($name);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>FARO andes</title>
    <meta property="og:site_name" content="FARO andes">
    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:description" content="Scientific Heart">
    <meta name="image" property="og:image" content="<?php echo htmlspecialchars($imageUrl); ?>">
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <!-- CSS Files -->
    <link id="pagestyle" href="/assets/css/material-kit.css?v=3.0.4" rel="stylesheet" />
</head>

<body class="blog-author bg-gray-200">
    <!-- Navbar Transparent -->

    <!-- End Navbar -->
    <!-- -------- START HEADER 4 w/ search book a ticket form ------- -->
    <header>
        <div class="page-header min-height-400" style="background-image: url('/assets/extra/faro.webp');"
            loading="lazy">
            <span class="mask bg-gradient-dark opacity-2"></span>
        </div>
    </header>
    <!-- -------- END HEADER 4 w/ search book a ticket form ------- -->
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
        <!-- START Testimonials w/ user image & text & info -->
        <section class="py-sm-7 py-5 position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-12 mx-auto">

                        <div class="mt-n9 mt-md-n11 text-center" id="author-image-container">

                        </div>
                        <div class="row py-5">

                            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto"
                                id="talento-detail-container">
                            </div>
                            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                                <button class="mt-2 btn btn-outline-dark mb-0" id="btn-regresar"><i
                                        class="me-2 fa-solid fa-arrow-left"></i> Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <script src="/assets/js/author-en.js"></script>
    <script src="/assets/lib/components-font-awesome/js/fontawesome_kit.js" crossorigin="anonymous"></script>

</body>

</html>