---
title: "Imágenes"
description: "Inserta imágenes HTML con img y src, escribe un alt útil y define sus dimensiones. Incluye ejemplos de imágenes responsivas y pautas de carga y rendimiento."
date: 2026-01-18
updatedDate: 2026-10-12
tags: ["img","src","alt","srcset"]
slug: html/imagenes
type: category
topic: html
id: 2eca9dfb-adca-8043-92e2-cd1e01b9c720
author: victor_cuervo
---

## ¿Qué son las Imágenes HTML?


Las **imágenes HTML** son recursos gráficos incorporados al contenido de una página mediante elementos de marcado, principalmente `img`. El navegador obtiene el recurso indicado y lo muestra en el lugar que ocupa ese elemento dentro del documento.


En [HTML](https://lineadecodigo.com/html/), `src` indica la dirección de la imagen y `alt` proporciona su alternativa textual.


Por ejemplo,


```html
<img src="huerto.jpg" alt="Bancales de lechugas y tomates en un huerto">
```


referencia un archivo y comunica qué información aporta si no puede verse. Un atributo es una propiedad escrita en la etiqueta de apertura para configurar el elemento.


`img` es un **elemento vacío**: no contiene elementos interiores ni lleva etiqueta de cierre. La imagen no se copia dentro del documento al escribir una ruta; el archivo debe existir y estar disponible. Si cambia su ubicación, la referencia puede dejar de funcionar.


Las imágenes que aportan información pertenecen al contenido. Un fondo puramente ornamental suele corresponder a la presentación mediante [CSS](https://lineadecodigo.com/css/). Esta distinción ayuda a decidir cuándo hace falta una alternativa textual y qué significado tiene el recurso.


## Características de Imágenes HTML

- **Origen del recurso.** `src` admite una URL absoluta, como `https://ejemplo.com/imagenes/huerto.jpg`, o una referencia relativa, como `imagenes/huerto.jpg`. La segunda se resuelve respecto a la URL base del documento, normalmente su propia dirección si no hay un elemento `base`. Comprueba la carpeta, la extensión y las mayúsculas del nombre: algunos servidores distinguen entre `Huerto.jpg` y `huerto.jpg`.
- **Alternativa textual según la función.** Para una imagen informativa, `alt` debe transmitir la información necesaria en ese contexto, no describir cada detalle visual. En una imagen decorativa se utiliza `alt=""`; omitir el atributo no equivale a declararla decorativa. Si la imagen es el único contenido de un enlace, la alternativa debe identificar el propósito del enlace. `title` no sustituye a `alt`.
- **Dimensiones y estabilidad visual.** `width` y `height` aceptan números enteros sin unidades, interpretados como píxeles CSS. Declarar valores coherentes con la proporción de la imagen permite al navegador reservar espacio antes de que termine de cargarse y reduce desplazamientos del contenido. La proporción es la relación entre anchura y altura; unos valores incompatibles pueden deformar la imagen si no se ajusta su presentación.
- **Tamaño mostrado y peso del archivo.** Reducir `width` no reduce los bytes descargados. Una fotografía de gran resolución sigue siendo pesada aunque se muestre pequeña. Conviene generar archivos con dimensiones y compresión adecuadas. JPEG suele resultar útil para fotografías; PNG, para imágenes que necesitan compresión sin pérdidas o transparencia; SVG, para gráficos vectoriales. WebP y AVIF ofrecen alternativas de compresión, según las necesidades y la compatibilidad requerida.
- **Selección de resolución.** `srcset` ofrece varias versiones del mismo contenido. Los descriptores `1x` y `2x` indican densidades; los descriptores como `480w` indican la anchura real del archivo en píxeles. Con descriptores de anchura, `sizes` informa del espacio de presentación previsto. No se mezclan descriptores de anchura y densidad en un mismo `srcset`. El navegador elige el recurso considerando esas pistas y el entorno, no solo la anchura de la pantalla.
- **Selección de composición o formato.** `picture` agrupa elementos `source` y un `img` final obligatorio. Permite ofrecer recortes distintos según una condición `media`, o formatos alternativos mediante `type`. La alternativa textual se mantiene en `img`; `source` no tiene `alt`. Si ninguna fuente resulta adecuada, se utiliza el recurso de respaldo del `img`.
- **Carga diferida.** `loading="lazy"` permite aplazar la carga de imágenes alejadas del área visible, según los criterios del navegador. Es útil para galerías largas, pero no suele convenir en la imagen principal visible al abrir la página, porque puede retrasarla. El valor predeterminado es `eager`, que no solicita ese aplazamiento.
- **Pie de imagen y contexto.** `figure` agrupa contenido autónomo, como una fotografía con su pie, y `figcaption` proporciona ese pie visible. No toda imagen necesita una figura. El pie puede explicar ubicación, procedencia o contexto, pero no sustituye automáticamente a la alternativa textual. Para gráficos complejos, un `alt` breve puede acompañarse de una explicación o una tabla con los datos en el contenido.

**Adaptación de recurso y adaptación de tamaño son distintas.** `srcset`, `sizes` y `picture` ayudan a elegir qué archivo cargar; no garantizan por sí solos que la imagen encaje en cualquier contenedor. La presentación adaptable se controla por separado con estilos, que no se incluyen en los ejemplos de esta página.


## ¿Por qué aprender sobre Imágenes HTML?


Estos elementos permiten incorporar fotografías de productos, diagramas técnicos y capturas de interfaces sin perder su relación con el texto. Elegir una alternativa adecuada hace que la información siga siendo comprensible para quien utiliza un lector de pantalla o no puede cargar el recurso.


Entender las dimensiones evita dos problemas diferentes: que una imagen se deforme y que la página cambie de posición mientras carga. Optimizar el archivo resuelve otro problema: descargar más datos de los necesarios. Declarar una anchura pequeña no sustituye a preparar una versión ligera.


La selección de recursos resulta útil cuando una fotografía necesita verse nítida en pantallas de alta densidad o cuando un recorte panorámico pierde su contenido relevante en una pantalla estrecha. En el primer caso puede bastar `srcset`; en el segundo, `picture` permite cambiar la composición.


Conocer las rutas y la carga diferida también facilita diagnosticar fallos: un recurso inexistente no se arregla añadiendo dimensiones, y una imagen principal lenta no mejora necesariamente al marcarla como `lazy`. Cada atributo responde a una necesidad concreta.


## Ejemplo de Imágenes HTML


Este ejemplo presenta una fotografía informativa de un huerto con un pie visible. Prepara un archivo JPEG llamado `huerto.jpg`, de 640 × 360 píxeles, que muestre bancales de lechugas y tomates. Colócalo en una carpeta `imagenes` junto a `huerto.html`. Si utilizas otra fotografía, adapta también el texto alternativo y el pie a su contenido real.


Guarda el siguiente documento como `huerto.html`, con codificación UTF-8, y ábrelo en un navegador. La imagen se cargará desde el archivo local; no se necesitan scripts ni bibliotecas.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Huerto del centro educativo</title>
</head>
<body>
  <main>
    <h1>Huerto del centro educativo</h1>
    <p>El alumnado cultiva hortalizas en bancales separados.</p>

    <figure>
      <img
        src="imagenes/huerto.jpg"
        alt="Bancales de lechugas y tomates separados por un sendero"
        width="640"
        height="360">
      <figcaption>
        Zona de cultivo utilizada en las actividades de ciencias.
      </figcaption>
    </figure>
  </main>
</body>
</html>
```


El navegador mostrará la fotografía y su pie debajo del párrafo introductorio. `src` busca el archivo dentro de `imagenes`, mientras que `width` y `height` establecen unas dimensiones acordes con su proporción. No se utiliza carga diferida porque se trata de la imagen principal de un documento breve.


`alt` comunica la organización visible del huerto; `figcaption` explica para qué se utiliza. No repiten la misma información. Si el archivo no está disponible, la fotografía no podrá mostrarse y el navegador podrá presentar su alternativa textual.


Para ofrecer más nitidez en pantallas de alta densidad, prepara otra versión de la misma fotografía y del mismo recorte, llamada `huerto-2x.jpg`, de 1280 × 720 píxeles. Sustituye únicamente el elemento `img` por este bloque:


```html
<img
  src="imagenes/huerto.jpg"
  srcset="imagenes/huerto.jpg 1x, imagenes/huerto-2x.jpg 2x"
  alt="Bancales de lechugas y tomates separados por un sendero"
  width="640"
  height="360">
```


La imagen sigue teniendo un tamaño de presentación de 640 × 360 píxeles CSS. La versión `2x` ofrece el doble de píxeles en cada dimensión, no el doble de tamaño visible. Con estos descriptores de densidad no se necesita `sizes`; el navegador selecciona la variante adecuada y `src` proporciona el respaldo.


Como comprobación, revisa en las herramientas de desarrollo del navegador qué archivo se solicita y si sus dimensiones coinciden con las declaradas. Comprueba también que el texto alternativo permita entender la información de la fotografía sin verla y que la ruta siga siendo válida después de publicar el documento.

