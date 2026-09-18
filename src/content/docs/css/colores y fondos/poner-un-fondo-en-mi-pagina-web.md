---
title: "Poner un fondo en mi página web"
description: "Poner un fondo en mi página web es sencillo con CSS: aprende a usar background, imágenes, repetición, posición y tamaño con ejemplos prácticos."
date: 2011-05-28
updatedDate: 2026-09-18
tags: ["background","background-image","background-repeat","background-attachment","background-size","url"]
slug: css/colores-y-fondos/poner-un-fondo-en-mi-pagina-web
type: doc
topic: css
id: a237e561-c4a4-4157-8283-dc556baa2407
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_css/fondos/fondo-pagina-web
---

Poner un fondo en mi página web es una de las tareas más habituales al diseñar un sitio. Podemos utilizar un color, una imagen o combinar ambos recursos para que la página mantenga una apariencia coherente incluso mientras se carga la imagen.


Aunque antiguamente algunos atributos de [HTML](https://lineadecodigo.com/html/) se utilizaban con fines visuales, hoy la estructura corresponde a [HTML](https://lineadecodigo.com/html/) y la presentación se define con [CSS](https://lineadecodigo.com/css/). Por tanto, los fondos deben configurarse mediante propiedades de estilo.


## Aplicar el fondo al elemento body


Para cambiar el fondo de toda la página aplicamos los estilos al elemento `<body>`. La propiedad abreviada `background` permite definir en una sola declaración el color, la imagen, la repetición, la posición, el tamaño y otros valores relacionados con el fondo.


Una forma simplificada de representar su estructura es la siguiente:


```css
background: <color> <image> <repeat> <attachment> <position>;
```


Los componentes son opcionales y el orden de varios de ellos es flexible. Cuando se indican juntos `background-position` y `background-size`, deben separarse mediante `/`.


## Poner una imagen de fondo


El ejemplo original utiliza una imagen llamada `fondo.gif`, situada en el mismo directorio que la hoja de estilos o el documento donde se declara la regla:


```css
body {
  background: url("fondo.gif") repeat 0 0;
}
```


La función `url()` indica la ubicación del recurso. En este caso, `repeat` repite la imagen horizontal y verticalmente, mientras que `0 0` la coloca desde la esquina superior izquierda.


También es recomendable definir un color de respaldo. Así la página conserva un fondo legible si la imagen tarda en descargarse o no está disponible:


```css
body {
  background: #f2f2f2 url("fondo.gif") repeat 0 0;
}
```


## Utilizar una imagen de otro directorio


La ruta de la imagen puede ser relativa al archivo desde el que se carga el estilo. Si el directorio `imagenes` está en la raíz del sitio, la ruta comienza por `/`:


```css
body {
  background: url("/imagenes/fondo.gif") repeat 0 0;
}
```


La barra inicial hace que el navegador busque el recurso desde la raíz del dominio. Si escribimos `imagenes/fondo.gif` sin la barra, la ruta será relativa a la ubicación de la hoja de estilos.


Cuando el código se encuentra en un archivo `.css` externo, la ruta de `url()` se resuelve respecto a ese archivo y no respecto al documento [HTML](https://lineadecodigo.com/html/). Esta diferencia es importante cuando las hojas de estilo se guardan en un directorio como `/css/`.


## Mostrar una imagen sin repetir


Para utilizar una imagen grande que cubra la ventana podemos desactivar la repetición, centrarla y adaptar su tamaño:


```css
body {
  min-height: 100vh;
  background-color: #1f2937;
  background-image: url("/imagenes/fondo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```


El valor `cover` escala la imagen hasta cubrir todo el área disponible. Puede recortar parte de la imagen si sus proporciones no coinciden con las de la ventana. Si necesitamos mostrarla completa, podemos utilizar `contain`, aunque podrían quedar zonas sin cubrir.


La misma configuración se puede escribir con la propiedad abreviada `background`. La posición y el tamaño se separan con `/`:


```css
body {
  min-height: 100vh;
  background: #1f2937 url("/imagenes/fondo.jpg") center / cover no-repeat;
}
```


## Utilizar solamente background-image


Si únicamente queremos indicar la imagen, podemos usar `background-image` sin configurar el resto de propiedades:


```css
body {
  background-image: url("/imagenes/fondo.gif");
}
```


En este caso se aplican los valores iniciales de las demás propiedades. Por ejemplo, la imagen se repite de forma predeterminada. Por eso, para una fotografía de gran tamaño suele ser necesario añadir `background-repeat: no-repeat` y `background-size: cover`.


## Incluir los estilos en el documento


Si los estilos se escriben directamente en el documento, el elemento `<style>` debe situarse dentro de `<head>`, no antes de esa etiqueta:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Página con imagen de fondo</title>
  <style>
    body {
      min-height: 100vh;
      background: #1f2937 url("/imagenes/fondo.jpg") center / cover no-repeat;
    }
  </style>
</head>
<body>
  <h1>Contenido de la página</h1>
</body>
</html>
```


En un proyecto real también podemos trasladar la regla a una hoja `.css` externa y enlazarla desde `<head>` mediante `<link>`.


## Recomendaciones para elegir el fondo

- Utiliza imágenes optimizadas para reducir el tiempo de carga.
- Define un `background-color` compatible con los colores de la imagen.
- Comprueba el contraste entre el fondo y el texto para mantener la legibilidad.
- Prueba el resultado en pantallas estrechas y anchas, ya que `cover` puede producir recortes diferentes.
- Evita que una imagen decorativa dificulte la lectura del contenido principal.

Con estas propiedades podemos poner un fondo en mi página web mediante [CSS](https://lineadecodigo.com/css/), tanto si necesitamos un patrón repetido como una imagen que cubra toda la pantalla.

