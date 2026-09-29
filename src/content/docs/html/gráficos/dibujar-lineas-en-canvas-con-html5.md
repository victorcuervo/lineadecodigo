---
title: "Dibujar líneas en Canvas con HTML5"
description: "Dibujar líneas en Canvas con HTML5 paso a paso: crea rutas con moveTo y lineTo, aplica color, grosor y extremos, y mejora la nitidez del trazo."
date: 2012-06-04
updatedDate: 2026-09-29
tags: ["canvas","line","stroke","style","width"]
slug: html/graficos/dibujar-lineas-en-canvas-con-html5
type: doc
topic: html
id: a4398317-1a66-4abf-a9f2-67f9879d6fa7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/dibujar-linea.html
---

**Dibujar líneas en Canvas con HTML5** es una de las formas más sencillas de comenzar a trabajar con la `Canvas API`. El proceso consiste en crear un elemento `<canvas>`, obtener su contexto `2d`, definir una ruta entre dos coordenadas y representar el trazo con `stroke()`.


Los métodos principales son `moveTo()`, que sitúa el punto inicial sin dibujar, y `lineTo()`, que añade una línea desde el punto actual hasta unas nuevas coordenadas.


## Crear el elemento Canvas


Primero insertamos el elemento `<canvas>` en la página. Los atributos `width` y `height` deben contener valores numéricos sin la unidad `px`:


```html
<canvas id="micanvas" width="300" height="300">
  Tu navegador no admite el elemento canvas.
</canvas>
```


El atributo `id` permite localizar el elemento desde [JavaScript](https://lineadecodigo.com/javascript/). El texto situado entre las etiquetas funciona como contenido alternativo para navegadores que no puedan mostrar el lienzo.


## Obtener el contexto de dibujo 2D


Utilizamos `document.getElementById()` para obtener la referencia y `getContext("2d")` para acceder al contexto de dibujo:


```javascript
const canvas = document.getElementById("micanvas");
const ctx = canvas.getContext("2d");
```


El objeto `ctx` es un `CanvasRenderingContext2D` y proporciona los métodos y propiedades necesarios para crear rutas, líneas, formas y estilos.


## Entender las coordenadas del Canvas


El sistema de coordenadas comienza en la esquina superior izquierda:

- La posición `(0, 0)` representa la esquina superior izquierda.
- El eje `x` aumenta hacia la derecha.
- El eje `y` aumenta hacia abajo.

Por tanto, una línea desde `(10, 10)` hasta `(180, 180)` se dibuja en diagonal hacia la esquina inferior derecha.


## Iniciar una ruta con beginPath


Antes de definir una línea conviene iniciar un `Path` nuevo con `beginPath()`:


```javascript
ctx.beginPath();
```


Este método vacía la lista de subrutas actual. Si se omite al crear trazos independientes, una llamada posterior a `stroke()` puede volver a representar segmentos definidos anteriormente.


## Definir la línea con moveTo y lineTo


Situamos el punto inicial con `moveTo(x, y)` y añadimos el segmento con `lineTo(x, y)`:


```javascript
ctx.moveTo(10, 10);
ctx.lineTo(180, 180);
```


`moveTo()` no deja ninguna marca; solo desplaza el punto actual. `lineTo()` añade la línea a la ruta, pero todavía no modifica los píxeles visibles del `<canvas>`.


## Aplicar color, grosor y extremos


Podemos personalizar el trazo antes de dibujarlo:


```javascript
ctx.strokeStyle = "#f00";
ctx.lineWidth = 4;
ctx.lineCap = "round";
ctx.stroke();
```


Cada propiedad cumple una función:

- `strokeStyle` define el color del trazo.
- `lineWidth` establece su grosor.
- `lineCap` controla la forma de los extremos y admite `butt`, `round` o `square`.
- `stroke()` representa el contorno de la ruta actual.

El valor predeterminado de `lineCap` es `butt`, que termina el trazo exactamente en sus coordenadas. `round` añade extremos redondeados y `square` los extiende con una terminación cuadrada.


## Ejemplo completo para dibujar una línea


El siguiente documento reúne todos los pasos:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dibujar líneas en Canvas con HTML5</title>
</head>
<body>
  <canvas id="micanvas" width="300" height="300">
    Tu navegador no admite el elemento canvas.
  </canvas>

  <script>
    const canvas = document.getElementById("micanvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(180, 180);

    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.stroke();
  </script>
</body>
</html>
```


## Dibujar varias líneas conectadas


Varias llamadas consecutivas a `lineTo()` crean una línea poligonal conectada:


```javascript
ctx.beginPath();
ctx.moveTo(30, 220);
ctx.lineTo(90, 120);
ctx.lineTo(150, 200);
ctx.lineTo(230, 60);
ctx.strokeStyle = "#1565c0";
ctx.lineWidth = 3;
ctx.stroke();
```


Cada nuevo segmento comienza donde terminó el anterior. Este patrón sirve para representar gráficas, contornos, rutas y figuras geométricas.


## Dibujar líneas independientes


Para incluir varios segmentos independientes en una sola ruta, llamamos de nuevo a `moveTo()` antes de cada línea:


```javascript
ctx.beginPath();

ctx.moveTo(20, 40);
ctx.lineTo(280, 40);

ctx.moveTo(20, 90);
ctx.lineTo(280, 90);

ctx.strokeStyle = "#333";
ctx.lineWidth = 2;
ctx.stroke();
```


Una sola llamada a `stroke()` representa ambos segmentos, pero `moveTo()` evita que queden unidos entre sí.


## Mejorar la nitidez de líneas finas


Un trazo con `lineWidth = 1` situado en una coordenada entera puede repartirse entre dos filas o columnas de píxeles y verse suavizado. En un contexto sin transformaciones, desplazar la coordenada `0.5` píxeles puede producir una línea más nítida:


```javascript
ctx.beginPath();
ctx.moveTo(20, 50.5);
ctx.lineTo(280, 50.5);
ctx.lineWidth = 1;
ctx.strokeStyle = "#000";
ctx.stroke();
```


Este ajuste es opcional. Si el contexto está escalado o transformado, conviene comprobar visualmente la alineación.

