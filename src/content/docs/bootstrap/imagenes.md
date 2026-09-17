---
title: "Imágenes"
description: "Aprende a gestionar imágenes en Bootstrap con img-fluid, miniaturas, bordes, alineación y texto alternativo mediante un ejemplo responsive y accesible."
date: 2026-09-17
updatedDate: 2026-09-17
tags: ["img","img-thumbnail","responsive","border-radius"]
slug: bootstrap/imagenes
type: category
topic: bootstrap
id: 3dea9dfb-adca-8074-bc70-e1678b03d188
author: victor_cuervo
---

## ¿Qué son las imágenes en Bootstrap?


**Las imágenes en Bootstrap son elementos** [**`img`**](https://www.w3api.com/HTML/img/) **de HTML cuya presentación se controla mediante clases del framework.** [Bootstrap](https://lineadecodigo.com/bootstrap/) no modifica el archivo de imagen ni sustituye sus atributos; proporciona utilidades para adaptar su tamaño al contenedor, aplicar bordes, crear miniaturas y ajustar su posición dentro del diseño.


La clase principal es `.img-fluid`. Aplica un ancho máximo del 100 % y una altura automática, por lo que la imagen puede reducirse cuando su contenedor es más estrecho sin deformar su proporción. Este **comportamiento es responsive**: responde al espacio disponible, pero no amplía la imagen por encima de su tamaño natural solo por usar esta clase.


El contenido y la accesibilidad siguen dependiendo del marcado. El atributo `src` indica el recurso que se carga, `width` y `height` ayudan al navegador a reservar espacio, y `alt` ofrece una alternativa textual. Si la imagen aporta información, `alt` debe describir su función o contenido; si es puramente decorativa, debe utilizarse `alt=""`.


Esta explicación toma Bootstrap 5 como referencia. Clases antiguas como `.img-responsive`, `.img-rounded` e `.img-circle`, habituales en Bootstrap 3, ya no son las opciones actuales. En Bootstrap 5 se utilizan `.img-fluid`, las utilidades de bordes y `.rounded-circle`.


## Características de las imágenes en Bootstrap

- **Adaptación al contenedor:** `.img-fluid` evita que una imagen desborde un contenedor estrecho mediante `max-width: 100%` y `height: auto`.
- **Miniaturas:** `.img-thumbnail` añade un borde, esquinas redondeadas, relleno interior y un fondo coherente con el tema. Es un estilo visual; no genera una versión más pequeña del archivo ni reduce su peso de descarga.
- **Bordes configurables:** `.border`, `.border-0` y las variantes de color permiten mostrar o eliminar bordes. Las clases `.rounded`, `.rounded-0`, `.rounded-circle` y `.rounded-pill` controlan la forma de las esquinas.
- **Alineación:** `.float-start` y `.float-end` hacen flotar una imagen junto al texto. Para centrar una imagen de bloque se puede combinar `.d-block` con `.mx-auto`.
- **Tamaño mediante utilidades:** clases como `.w-25`, `.w-50`, `.w-75` y `.w-100` asignan porcentajes de ancho. Deben utilizarse con criterio, porque el ancho apropiado depende del contenedor y del tamaño intrínseco de la imagen.
- **Integración con la rejilla:** una imagen puede colocarse dentro de columnas `col-*` para que su tamaño y posición cambien según los puntos de ruptura de Bootstrap.
- **Proporciones y recorte:** `.ratio` resulta útil para contenedores multimedia con una proporción fija, pero no recorta por sí sola una etiqueta `img`. Cuando todas las imágenes deben ocupar una caja idéntica puede ser necesaria una regla específica con `object-fit`.
- **Accesibilidad independiente del estilo:** las clases de [Bootstrap](https://lineadecodigo.com/bootstrap/) no crean texto alternativo ni convierten una imagen en accesible. Esa información se define en los atributos y en el contexto del documento.

## ¿Por qué aprender a usar imágenes en Bootstrap?


Dominar estas clases permite evitar uno de los fallos más comunes en diseños adaptables: imágenes con un ancho fijo que sobresalen en pantallas pequeñas. `.img-fluid` resuelve el ajuste visual básico sin duplicar recursos ni escribir una regla nueva para cada componente.


Las utilidades de bordes, redondeado y alineación ayudan a mantener criterios visuales comunes en tarjetas, perfiles, galerías y contenidos editoriales. Al reutilizar la escala y las variables del framework, una miniatura conserva el mismo tratamiento que el resto de la interfaz.


También conviene distinguir presentación y optimización. [Bootstrap](https://lineadecodigo.com/bootstrap/) controla cómo se muestra el recurso, pero no comprime archivos, no elige el formato y no genera tamaños alternativos. Para mejorar el rendimiento siguen siendo necesarios archivos con dimensiones adecuadas y, cuando proceda, `srcset`, `sizes`, formatos modernos y carga diferida con `loading="lazy"`.


Comprender este límite evita usar `.img-fluid` como solución a imágenes demasiado pesadas. Una imagen puede verse correctamente en un móvil y, aun así, transferir un archivo mucho mayor de lo necesario. El diseño responsive y la optimización de recursos son tareas relacionadas, pero diferentes.


## Ejemplo de imágenes en Bootstrap


El siguiente ejemplo crea una ficha editorial con una miniatura responsive. La rejilla apila la imagen y el texto en pantallas pequeñas y los coloca en dos columnas desde el punto de ruptura mediano.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Paisaje de montaña</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <article class="row g-4 align-items-center">
      <div class="col-12 col-md-5">
        <img
          src="images/paisaje.jpg"
          class="img-fluid img-thumbnail rounded-3"
          width="1200"
          height="800"
          loading="lazy"
          alt="Sendero entre montañas cubiertas de vegetación">
      </div>

      <div class="col-12 col-md-7">
        <h1 class="h2">Ruta por la montaña</h1>
        <p class="text-body-secondary mb-0">
          Un recorrido de dificultad media con vistas panorámicas.
        </p>
      </div>
    </article>
  </main>
</body>
</html>
```


La clase `.col-12` hace que cada bloque ocupe toda la fila en pantallas pequeñas. Desde el ancho `md`, `.col-md-5` reserva cinco columnas para la imagen y `.col-md-7` asigna siete al texto. El espacio entre ambos se controla con `.g-4`.


La combinación `.img-fluid` y `.img-thumbnail` adapta la imagen al ancho de su columna y presenta un marco de miniatura. `.rounded-3` establece un redondeado concreto y prevalece visualmente sobre el redondeado base de la miniatura.


Los atributos `width` y `height` declaran la proporción intrínseca, lo que reduce cambios de diseño mientras se carga el archivo. `loading="lazy"` retrasa la descarga cuando la imagen está fuera del área visible, y `alt` describe la información visual relevante. La ruta `images/paisaje.jpg` debe apuntar a una imagen real del proyecto.

