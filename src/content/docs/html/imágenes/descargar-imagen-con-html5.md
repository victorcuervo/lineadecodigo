---
title: "Descargar imagen con HTML5"
description: "Descargar imagen con HTML5: utiliza el atributo download en enlaces, define el nombre del archivo y conoce sus límites de origen y compatibilidad."
date: 2020-03-23
updatedDate: 2026-09-29
tags: ["a","href","img","imagenes","descargar","download"]
slug: html/imagenes/descargar-imagen-con-html5
type: doc
topic: html
id: 7afa4a7f-7a1b-4cec-bc86-2869b06b048f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/descargar-imagen.html
---

Descargar imagen con HTML5 es posible mediante el atributo `download` del elemento `<a>`. Al añadirlo a un enlace, indicamos al navegador que el recurso enlazado está destinado a descargarse en lugar de abrirse como una página o mostrarse directamente.


Esta solución resulta útil para ofrecer fotografías, ilustraciones, gráficos o recursos visuales que el usuario pueda guardar desde la propia página. Sin embargo, el comportamiento final depende del origen del archivo, la configuración del servidor y las preferencias del navegador.


## Crear un enlace sobre una imagen


Primero creamos un enlace mediante el elemento `<a>` y utilizamos la propia imagen como contenido del enlace con `<img>`:


```html
<a href="imagen.png">
  <img src="imagen.png" alt="Descargar imagen de ejemplo">
</a>
```


El atributo `href` contiene la ruta del archivo que se abrirá o descargará. Por su parte, `src` indica la imagen que se muestra como vista previa y `alt` proporciona una descripción alternativa.


Hasta este punto tenemos una [imagen con enlace en HTML](https://lineadecodigo.com/html/imagen-con-enlace-en-html/): al pulsarla, el navegador normalmente intentará mostrar el recurso enlazado.


## Descargar imagen con HTML5 mediante download


Para solicitar la descarga añadimos el atributo booleano `download` al elemento `<a>`:


```html
<a href="imagen.png" download>
  <img src="imagen.png" alt="Descargar imagen de ejemplo">
</a>
```


Cuando el usuario activa el enlace, el navegador trata `imagen.png` como un recurso descargable. El atributo expresa la intención de descarga, aunque el navegador conserva el control sobre la interacción final y puede mostrar un diálogo, guardar el archivo automáticamente o abrirlo según su configuración.


## Proponer un nombre para el archivo


También podemos asignar un valor a `download`. Ese valor actúa como nombre de archivo sugerido:


```html
<a href="imagenes/paisaje.png" download="paisaje-al-atardecer.png">
  <img src="imagenes/paisaje.png" alt="Paisaje al atardecer">
</a>
```


El navegador puede adaptar el nombre para cumplir las reglas del sistema operativo. Por eso conviene utilizar un nombre sencillo, descriptivo y con la extensión adecuada.


## Límites de origen del atributo download


El atributo `download` funciona de forma fiable con recursos del mismo origen que la página, así como con direcciones `blob:` y `data:`. Un archivo tiene el mismo origen cuando comparte protocolo, dominio y puerto con el documento.


Por ejemplo, este caso es del mismo origen si la página también pertenece a `ejemplo.com`:


```html
<a href="https://ejemplo.com/imagenes/foto.jpg" download>
  Descargar fotografía
</a>
```


En cambio, si la imagen está alojada en un dominio externo, el navegador puede ignorar `download` y navegar hasta el recurso. Cuando controlamos el servidor del archivo, la descarga también puede configurarse mediante la cabecera `HTTP` `Content-Disposition: attachment`.


## Por qué conviene utilizar un servidor web


Abrir el documento directamente mediante una dirección `file:` puede producir resultados diferentes según el navegador y sus políticas de seguridad. Para probar el ejemplo de forma realista, conviene servir la página y la imagen desde un servidor local o remoto.


No es que `download` necesite siempre un servidor por definición; la recomendación se debe a que un entorno `HTTP` o `HTTPS` reproduce correctamente el concepto de origen y evita las limitaciones particulares de los archivos locales.


Una estructura sencilla podría ser:


```text
/proyecto
  index.html
  imagen.png
```


Si ambos archivos se sirven desde la misma carpeta y origen, el enlace puede utilizar una ruta relativa:


```html
<a href="imagen.png" download="imagen-ejemplo.png">
  Descargar imagen
</a>
```


## Ejemplo completo con vista previa


El siguiente documento muestra una imagen y permite descargarla mediante un enlace accesible:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Descargar imagen con HTML5</title>
</head>
<body>
  <figure>
    <img
      src="imagen.png"
      alt="Paisaje de ejemplo disponible para descargar"
      width="640"
      height="360"
    >
    <figcaption>
      <a href="imagen.png" download="paisaje-ejemplo.png">
        Descargar imagen en formato PNG
      </a>
    </figcaption>
  </figure>
</body>
</html>
```


Separar la vista previa del enlace de descarga hace que la acción sea más clara. El texto también informa del tipo de archivo, lo que ayuda al usuario a saber qué ocurrirá al activar el enlace.


## Descargar una imagen generada en el navegador


El atributo `download` también admite direcciones `data:` o `blob:`. Esto permite descargar imágenes generadas dinámicamente, por ejemplo a partir de un `<canvas>`. En ese caso, una aplicación puede crear una dirección temporal y asignarla al `href` del enlace.


Este enfoque requiere [JavaScript](https://lineadecodigo.com/javascript/) y es útil cuando el archivo no existe previamente en el servidor. Para una imagen estática, un enlace directo con `download` sigue siendo la opción más sencilla.


## Errores comunes

- **Confundir** **`download`** **con una propiedad:** en HTML es un atributo del elemento `<a>`.
- **Enlazar una URL de otro origen:** el navegador puede ignorar la solicitud de descarga.
- **Omitir** **`href`****:** sin un recurso enlazado no existe ningún archivo que descargar.
- **Usar un nombre sin extensión:** el usuario podría no identificar fácilmente el formato.
- **Suponer que la descarga siempre será automática:** la configuración del navegador puede solicitar confirmación o aplicar otro comportamiento.
- **Probar únicamente mediante** **`file:`****:** el resultado puede no representar el funcionamiento desde un servidor web.

En resumen, para descargar imagen con HTML5 creamos un enlace `<a>` hacia el archivo y añadimos `download`. Podemos sugerir el nombre del archivo, pero debemos considerar las restricciones de mismo origen y las políticas del navegador.

