---
title: "Crear un Path sobre un Canvas de HTML5"
description: "Crear un Path sobre un Canvas de HTML5: aprende a iniciar rutas, trazar líneas y arcos, aplicar estilos y dibujarlas con stroke o fill paso a paso."
date: 2012-07-30
updatedDate: 2026-09-29
tags: ["canvas","path","getcontext","stroke","line"]
slug: html/graficos/crear-un-path-sobre-un-canvas-de-html5
type: doc
topic: html
id: 2c8a9dfb-adca-817b-b9d0-c8e1103344b8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/crear-path.html
---

Un `Path` o ruta es un conjunto de movimientos y trazos definidos dentro de un elemento `<canvas>` de HTML5. Con estas instrucciones podemos construir líneas, arcos y figuras para después dibujarlas mediante `stroke()` o rellenarlas con `fill()`.


El punto clave es que métodos como `moveTo()`, `lineTo()` y `arc()` añaden segmentos a la ruta actual, pero no los muestran por sí solos. La ruta se representa cuando llamamos a `stroke()` o `fill()`. Estas operaciones no eliminan la ruta: para comenzar otra independiente hay que ejecutar de nuevo `beginPath()`.


## Preparar el elemento Canvas


Primero creamos el elemento `<canvas>`. Los atributos `width` y `height` se expresan como números de píxeles, sin añadir la unidad `px`:


```html
<canvas id="micanvas" width="300" height="300">
  Tu navegador no admite el elemento canvas.
</canvas>
```


Después obtenemos la referencia al elemento y su contexto de dibujo `2d` mediante [JavaScript](https://lineadecodigo.com/javascript/):


```javascript
const canvas = document.getElementById("micanvas");
const ctx = canvas.getContext("2d");
```


El método `getContext("2d")` devuelve un objeto `CanvasRenderingContext2D`, que proporciona las propiedades y los métodos necesarios para dibujar sobre el lienzo.


## Iniciar una ruta con beginPath


Para crear un `Path` nuevo utilizamos `beginPath()`:


```javascript
ctx.beginPath();
```


Este método vacía la lista de subrutas actual. Conviene llamarlo antes de cada figura independiente, especialmente cuando queremos aplicar colores o estilos distintos sin volver a dibujar trazos anteriores.


## Añadir movimientos, líneas y arcos


Una vez iniciada la ruta podemos combinar distintas instrucciones:

- `moveTo(x, y)` desplaza el punto inicial sin dibujar.
- `lineTo(x, y)` añade una línea desde el punto actual hasta las coordenadas indicadas.
- `arc(x, y, radio, ánguloInicial, ánguloFinal, antihorario)` añade un arco. Los ángulos se expresan en radianes.

El siguiente código crea una línea diagonal y, a continuación, un semicírculo. El arco comienza justo donde termina la línea:


```javascript
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.arc(170, 120, 50, Math.PI, 0);
```


Las coordenadas del `<canvas>` parten de la esquina superior izquierda: `x` aumenta hacia la derecha e `y` hacia abajo.


## Dibujar la ruta con stroke


Para definir el color del contorno utilizamos `strokeStyle`. También podemos ajustar su grosor con `lineWidth`. Finalmente, `stroke()` pinta la ruta actual:


```javascript
ctx.strokeStyle = "#f00";
ctx.lineWidth = 4;
ctx.stroke();
```


Si después queremos dibujar otra figura sin reutilizar los segmentos anteriores, debemos llamar a `beginPath()` antes de añadirla.


## Cerrar y rellenar una ruta


El método `closePath()` conecta el punto actual con el punto inicial de la subruta mediante una línea recta. Es útil para figuras cerradas, como un triángulo. Por su parte, `fill()` rellena el interior con el valor de `fillStyle`:


```javascript
ctx.beginPath();
ctx.moveTo(50, 220);
ctx.lineTo(150, 80);
ctx.lineTo(250, 220);
ctx.closePath();

ctx.fillStyle = "#ffd54f";
ctx.fill();

ctx.strokeStyle = "#333";
ctx.lineWidth = 2;
ctx.stroke();
```


`closePath()` no dibuja por sí mismo ni finaliza el `Path`; únicamente añade el segmento de cierre. Para mostrar la figura seguimos necesitando `stroke()` o `fill()`.


## Ejemplo completo de Path sobre Canvas


Este ejemplo reúne los pasos anteriores en un documento funcional:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Path sobre Canvas</title>
</head>
<body>
  <canvas id="micanvas" width="300" height="300">
    Tu navegador no admite el elemento canvas.
  </canvas>

  <script>
    const canvas = document.getElementById("micanvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(120, 120);
    ctx.arc(170, 120, 50, Math.PI, 0);

    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 4;
    ctx.stroke();
  </script>
</body>
</html>
```


## Errores comunes al crear un Path

- **Añadir** **`px`** **a** **`width`** **o** **`height`****:** en los atributos del elemento `<canvas>` deben utilizarse valores numéricos, como `width="300"`.
- **Omitir** **`beginPath()`****:** los segmentos anteriores permanecen en la ruta y pueden volver a pintarse cuando se llama a `stroke()`.
- **Confundir** **`closePath()`** **con** **`stroke()`****:** el primero cierra una subruta; el segundo dibuja su contorno.
- **Usar grados en** **`arc()`****:** los ángulos deben indicarse en radianes. Por ejemplo, `Math.PI` equivale a 180 grados y `2 * Math.PI` a 360 grados.
- **Olvidar** **`stroke()`** **o** **`fill()`****:** definir la geometría no basta para mostrarla sobre el lienzo.

En resumen, para crear un `Path` sobre un `Canvas` de HTML5 debemos iniciar una ruta con `beginPath()`, añadir sus segmentos y representarla con `stroke()` o `fill()`. Esta separación permite construir figuras complejas y decidir después cómo mostrar su contorno y su relleno.

