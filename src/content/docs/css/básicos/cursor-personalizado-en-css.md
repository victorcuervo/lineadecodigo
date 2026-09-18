---
title: "Cursor personalizado en CSS"
description: "Cursor personalizado en CSS: aprende a usar la propiedad cursor con url(), define un fallback compatible y mejora la experiencia visual de tu página web."
date: 2008-01-10
updatedDate: 2026-09-18
tags: ["cursor","url","svg"]
slug: css/basicos/cursor-personalizado-en-css
type: doc
topic: css
id: 2c8a9dfb-adca-8114-872a-cd69bfa8a6bd
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/raton/cursor-personalizado.html
---

Un **cursor personalizado en CSS** permite sustituir el puntero habitual del navegador por una imagen propia. Puede utilizarse para reforzar la identidad visual de una web, señalar una interacción especial o adaptar el puntero al contexto de un elemento concreto.


La personalización se realiza mediante la propiedad `cursor`, que admite la función `url()` para indicar el archivo que debe mostrar el navegador. Conviene utilizar este recurso con moderación: el cursor debe seguir siendo reconocible y no dificultar la navegación.


## Cómo crear un cursor personalizado en CSS


Lo primero es disponer de una imagen para el cursor y publicarla en una `URL` accesible desde la página. Tradicionalmente se han utilizado archivos con extensión `.cur`, aunque los navegadores modernos también admiten otros formatos de imagen, como `PNG` o `SVG`, con diferencias de compatibilidad y limitaciones según el navegador.


La sintaxis básica consiste en asignar a `cursor` una imagen mediante `url()`:


```css
cursor: url("micursor.cur"), auto;
```


El segundo valor, `auto`, es el cursor alternativo o _fallback_. El navegador lo utilizará si no puede descargar, interpretar o mostrar la imagen personalizada. Este valor de respaldo forma parte de la sintaxis correcta y debe incluirse siempre.


## Aplicar el cursor a toda la página


Para mostrar el cursor personalizado en toda la página, la propiedad puede asignarse al elemento `body`:


```html
<style>
body {
  cursor: url("micursor.cur"), crosshair;
}
</style>
```


En este ejemplo, `crosshair` actúa como cursor de respaldo. Si el archivo `micursor.cur` no está disponible o no es compatible con el navegador, se mostrará un puntero con forma de cruz.


## Aplicar el cursor a un elemento concreto


No es necesario cambiar el cursor de toda la página. También puede aplicarse a un enlace, un botón, una imagen o cualquier otro elemento de [HTML](https://lineadecodigo.com/html/). Por ejemplo:


```html
<a class="enlace-especial" href="https://example.com">
  Abrir recurso
</a>
```


```css
.enlace-especial {
  cursor: url("micursor.cur"), pointer;
}
```


El valor `pointer` mantiene una alternativa familiar para el usuario y comunica que el elemento es interactivo.


## Definir el punto activo del cursor


La propiedad `cursor` permite añadir dos coordenadas después de la imagen. Estas coordenadas establecen el _hotspot_, es decir, el punto exacto de la imagen que el navegador considera como posición activa del puntero:


```css
.elemento {
  cursor: url("micursor.png") 8 8, pointer;
}
```


Los valores `8 8` representan las coordenadas horizontal y vertical, medidas en píxeles desde la esquina superior izquierda de la imagen. Esta opción resulta útil cuando la parte activa del cursor no coincide con esa esquina, por ejemplo, en un icono circular o en la punta de un lápiz.


## Utilizar varios formatos como alternativa


Se pueden declarar varias imágenes antes del cursor genérico. El navegador probará cada `URL` en el orden indicado hasta encontrar una opción válida:


```css
.elemento {
  cursor:
    url("micursor.svg") 8 8,
    url("micursor.cur"),
    pointer;
}
```


Esta técnica permite ofrecer alternativas para mejorar la compatibilidad. Aun así, es recomendable probar el resultado en los navegadores objetivo, ya que el soporte de formatos, tamaños y archivos animados puede variar.


## Buenas prácticas para cursores personalizados

- **Incluye siempre un cursor genérico de respaldo**, como `auto`, `default`, `pointer`, `crosshair`, `grab` o `text`.
- **Utiliza una imagen pequeña y legible**. Un cursor demasiado grande puede ocultar contenido o dificultar la selección precisa.
- **Mantén una forma reconocible** para que el usuario comprenda qué acción puede realizar.
- **Evita aplicar cursores decorativos a controles críticos**, campos de formulario o zonas donde puedan generar confusión.
- **Comprueba la ruta del archivo**. Una `URL` incorrecta hará que el navegador utilice directamente el valor de respaldo.
- **Prueba distintos navegadores y dispositivos**. En interfaces táctiles el cursor normalmente no se muestra, por lo que no debe ser el único indicador de una acción.
- **No dependas solo del cursor para comunicar información**. Combínalo con texto, iconos, estados visuales o estilos de foco accesibles.

## Ejemplo completo


El siguiente ejemplo aplica un cursor personalizado a una zona interactiva y conserva un cursor estándar como alternativa:


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cursor personalizado</title>
  <style>
    .zona-interactiva {
      display: inline-block;
      padding: 1rem;
      border: 2px solid #2563eb;
      cursor: url("micursor.cur"), pointer;
    }
  </style>
</head>
<body>
  <div class="zona-interactiva">
    Pasa el ratón por esta zona
  </div>
</body>
</html>
```


Al pasar el puntero sobre el elemento, el navegador intentará cargar `micursor.cur`. Si no puede hacerlo, mostrará `pointer`. De esta forma, el cursor personalizado en CSS aporta una mejora visual sin perder la indicación básica de interactividad.

