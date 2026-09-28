---
title: "Icono en la barra de navegación"
description: "Icono en la barra de navegación: aprende a configurar un favicon con HTML, formatos ICO, PNG y SVG, tamaños, rutas y soluciones para la caché."
date: 2007-03-11
updatedDate: 2026-09-28
tags: ["html","icono","link"]
slug: html/documentos/icono-en-la-barra-de-navegacion
type: doc
topic: html
id: 8202278f-4572-4c0c-9c94-038664f71337
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/imagenes/icono-en-barra-navegacion.html
---

Los navegadores permiten mostrar un icono en la barra de navegación, en las pestañas, en los marcadores y en otros lugares de su interfaz. Este pequeño gráfico se conoce como `favicon` y se configura desde la cabecera `<head>` del documento [HTML](https://lineadecodigo.com/html/).


Además de facilitar la identificación visual de una página entre varias pestañas abiertas, un `favicon` ayuda a mantener una imagen de marca coherente.


## Código para añadir el icono en la barra de navegación


La forma ¡más sencilla de declarar un `favicon` consiste en utilizar el elemento `<link>` con el atributo `rel="icon"`:


```html
<head>
  <link rel="icon" href="/favicon.ico">
</head>
```


El elemento `<link>` es un elemento vacío, por lo que no necesita una etiqueta de cierre `</link>`. 


La declaración debe aparecer dentro de `<head>`, preferiblemente en todas las páginas del sitio que puedan cargarse de forma independiente.


## Utilizar una ruta relativa o absoluta


El archivo del icono puede estar en cualquier directorio o servidor accesible. El atributo `href` admite tanto rutas relativas como absolutas.


Una ruta relativa al dominio resulta adecuada cuando el archivo pertenece al mismo sitio:


```html
<link rel="icon" href="/imagenes/favicon.ico">
```


También se puede utilizar una URL absoluta:


```html
<link rel="icon" href="https://lineadecodigo.com/iconos/favicon.ico">
```


Si se carga desde otro dominio, ese servidor debe estar disponible mediante `HTTPS` para evitar contenido mixto y problemas de descarga en páginas seguras.


## Formatos de favicon


El formato `ICO` sigue siendo una opción práctica por su amplia compatibilidad y porque un mismo archivo puede contener varios tamaños. Sin embargo, los navegadores modernos también admiten formatos como `PNG` y `SVG`.


### Favicon en formato PNG


Para un archivo `PNG` conviene indicar el tipo y las dimensiones:


```html
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/favicon-32x32.png"
>
```


El atributo `type` indica el tipo `MIME` del recurso y `sizes` informa al navegador de sus dimensiones.


### Favicon en formato SVG


Un icono `SVG` mantiene la nitidez al escalarse y puede declararse así:


```html
<link
  rel="icon"
  type="image/svg+xml"
  href="/favicon.svg"
>
```


Para mejorar la compatibilidad se pueden ofrecer varias alternativas. El navegador elegirá la que considere más apropiada:


```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">
```


## Tamaños recomendados


En los primeros navegadores era habitual utilizar únicamente un icono de `16x16` píxeles. Ese tamaño todavía puede incluirse, pero ya no es suficiente para todos los contextos y pantallas de alta densidad.


Una configuración básica puede ofrecer versiones de `16x16` y `32x32` píxeles, además de un archivo `SVG` o un `ICO` con varios tamaños. Si el sitio puede instalarse como aplicación, sus iconos deben definirse también en el archivo `Web App Manifest`; esa configuración es independiente del `favicon` de la pestaña.


## Icono para dispositivos Apple


Para el acceso directo que se crea en la pantalla de inicio de algunos dispositivos Apple puede añadirse un icono específico:


```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```


Este recurso complementa el `favicon`, pero no lo sustituye.


## El archivo favicon.ico en la raíz


Muchos navegadores intentan localizar automáticamente `/favicon.ico` en la raíz del dominio. Mantener ese archivo puede servir como mecanismo de compatibilidad, pero declarar explícitamente `<link rel="icon">` permite controlar la ruta, el formato y las variantes disponibles.


## Problemas habituales con el favicon

- **El icono no se actualiza:** los navegadores suelen almacenar el `favicon` en caché. Prueba a cambiar el nombre del archivo o su URL, limpiar la caché y recargar la página.
- **La ruta devuelve un error:** comprueba en las herramientas de desarrollo que el valor de `href` responde con un código `HTTP` correcto.
- **El icono se ve borroso:** utiliza un archivo con dimensiones suficientes o una versión vectorial en `SVG`.
- **No aparece en todas las páginas:** verifica que la declaración esté presente en el `<head>` de cada documento o en la plantilla común del sitio.
- **La página es segura y el icono no:** usa `HTTPS` para evitar bloqueos por contenido mixto.

## Ejemplo completo


Esta configuración ofrece una base moderna y compatible:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Mi página web</title>

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
<body>
  <h1>Contenido de la página</h1>
</body>
</html>
```


Puedes ampliar la información en la [documentación de MDN sobre el elemento link](https://developer.mozilla.org/es/docs/Web/HTML/Element/link).

