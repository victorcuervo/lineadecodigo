---
title: "Crear un polígono en Canvas HTML5"
description: "Crear un polígono en Canvas HTML5 paso a paso: define sus vértices, recorre las coordenadas con JavaScript y aplica contorno y relleno con un ejemplo completo."
date: 2021-02-25
updatedDate: 2026-09-29
tags: ["canvas","path","line","stroke","array"]
slug: html/graficos/crear-un-poligono-en-canvas-html5
type: doc
topic: html
id: 8d06faaf-f293-4eea-951c-106eacd690db
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/crear-poligono.html
---

**Crear un polígono en Canvas HTML5** consiste en definir las coordenadas de sus vértices, unirlas mediante líneas y cerrar la figura. Aunque la `Canvas API` no ofrece un método específico para dibujar cualquier polígono, podemos construirlo como un `Path` con `beginPath()`, `moveTo()`, `lineTo()` y `closePath()`.


Este procedimiento permite dibujar triángulos, pentágonos y otras figuras, además de controlar por separado el contorno y el relleno.


## Crear el elemento Canvas


El primer paso es añadir un elemento `<canvas>` a la página. Los atributos `width` y `height` deben recibir valores numéricos sin la unidad `px`:


```html
<h1>Crear polígonos</h1>
<canvas id="micanvas" width="400" height="350">
  Tu navegador no admite el elemento canvas.
</canvas>
```


Después obtenemos su referencia y el contexto de dibujo `2d` mediante [JavaScript](https://lineadecodigo.com/javascript/):


```javascript
const canvas = document.getElementById("micanvas");
const ctx = canvas.getContext("2d");
```


El método correcto es `document.getElementById()`. A partir del contexto `ctx` podemos crear rutas, aplicar estilos y representar las figuras sobre el lienzo.


## Definir las coordenadas de los vértices


Cada vértice del polígono se representa mediante un par de coordenadas `[x, y]`. En el `<canvas>`, el origen `(0, 0)` está en la esquina superior izquierda; `x` crece hacia la derecha e `y` hacia abajo.


El siguiente `Array` contiene cinco vértices y permite dibujar un pentágono:


```javascript
const vertices = [
  [200, 30],
  [350, 140],
  [290, 310],
  [110, 310],
  [50, 140]
];
```


Esta representación agrupa las coordenadas de cada punto y facilita su recorrido. Los valores también están adaptados a las dimensiones del lienzo para que la figura resulte visible.


## Crear un polígono en Canvas HTML5


Iniciamos un `Path` vacío con `beginPath()` y situamos el punto de dibujo en el primer vértice mediante `moveTo()`:


```javascript
ctx.beginPath();
ctx.moveTo(vertices[0][0], vertices[0][1]);
```


A continuación recorremos el resto de los vértices. Cada llamada a `lineTo()` añade una línea desde el punto actual hasta el siguiente:


```javascript
for (let i = 1; i < vertices.length; i++) {
  ctx.lineTo(vertices[i][0], vertices[i][1]);
}
```


Utilizamos `let` para que el índice `i` quede limitado al bloque del bucle y no se convierta accidentalmente en una variable global.


## Cerrar y dibujar el polígono


Cuando se han añadido todos los vértices, `closePath()` conecta el último punto con el primero. Después configuramos el relleno y el contorno:


```javascript
ctx.closePath();

ctx.fillStyle = "#FFCC00";
ctx.fill();

ctx.lineWidth = 3;
ctx.strokeStyle = "#B8860B";
ctx.stroke();
```


Las operaciones cumplen funciones distintas:

- `closePath()` añade el segmento que cierra la figura.
- `fillStyle` define el color interior y `fill()` aplica el relleno.
- `strokeStyle` define el color del borde.
- `lineWidth` establece el grosor de la línea.
- `stroke()` dibuja el contorno del `Path`.

Aplicar primero `fill()` y después `stroke()` ayuda a mantener el borde completamente visible sobre el relleno.


## Ejemplo completo


El código completo para crear un polígono en `Canvas` HTML5 queda así:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Crear un polígono en Canvas HTML5</title>
</head>
<body>
  <h1>Crear polígonos</h1>
  <canvas id="micanvas" width="400" height="350">
    Tu navegador no admite el elemento canvas.
  </canvas>

  <script>
    const canvas = document.getElementById("micanvas");
    const ctx = canvas.getContext("2d");

    const vertices = [
      [200, 30],
      [350, 140],
      [290, 310],
      [110, 310],
      [50, 140]
    ];

    ctx.beginPath();
    ctx.moveTo(vertices[0][0], vertices[0][1]);

    for (let i = 1; i < vertices.length; i++) {
      ctx.lineTo(vertices[i][0], vertices[i][1]);
    }

    ctx.closePath();

    ctx.fillStyle = "#FFCC00";
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#B8860B";
    ctx.stroke();
  </script>
</body>
</html>
```


## Crear una función reutilizable


Si necesitamos dibujar varios polígonos, podemos encapsular el proceso en una función. Así separamos los datos de los vértices de la lógica de dibujo:


```javascript
function dibujarPoligono(ctx, vertices, opciones = {}) {
  if (vertices.length < 3) {
    return;
  }

  const {
    relleno = "#FFCC00",
    borde = "#B8860B",
    grosor = 3
  } = opciones;

  ctx.beginPath();
  ctx.moveTo(vertices[0][0], vertices[0][1]);

  for (let i = 1; i < vertices.length; i++) {
    ctx.lineTo(vertices[i][0], vertices[i][1]);
  }

  ctx.closePath();
  ctx.fillStyle = relleno;
  ctx.fill();
  ctx.lineWidth = grosor;
  ctx.strokeStyle = borde;
  ctx.stroke();
}

 dibujarPoligono(ctx, vertices, {
  relleno: "#90caf9",
  borde: "#1565c0",
  grosor: 4
});
```


La comprobación inicial evita intentar crear un polígono con menos de tres vértices.


## Errores comunes

- **Usar** **`px`** **en** **`width`** **y** **`height`****:** los atributos del `<canvas>` deben ser numéricos, por ejemplo `width="400"`.
- **Confundir** **`getElementById()`** **con un método inexistente:** `getDocumentbyId()` no forma parte del `DOM`.
- **Utilizar nombres de variables distintos:** el `Array` recorrido debe ser el mismo que contiene los vértices.
- **Omitir** **`beginPath()`****:** podrían volver a dibujarse segmentos de rutas anteriores.
- **No llamar a** **`closePath()`****:** el contorno quedará abierto entre el último vértice y el primero.
- **Declarar el índice sin** **`let`** **o** **`const`****:** puede crearse una variable global no deseada.
- **Usar coordenadas demasiado pequeñas o fuera del lienzo:** la figura puede resultar casi invisible o quedar recortada.

En conclusión, para **crear un polígono en Canvas HTML5** debemos almacenar sus vértices, iniciar una ruta, recorrer las coordenadas con `lineTo()`, cerrar la figura y aplicar el relleno o el contorno deseados.

