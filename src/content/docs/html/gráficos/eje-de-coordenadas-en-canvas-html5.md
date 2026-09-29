---
title: "Eje de coordenadas en Canvas HTML5"
description: "Eje de coordenadas en Canvas HTML5 paso a paso: crea una cuadrícula, dibuja los ejes X e Y y añade etiquetas numéricas para representar gráficos."
date: 2021-02-24
updatedDate: 2026-09-29
tags: ["canvas","grid","x","y","line","getcontext"]
slug: html/graficos/eje-de-coordenadas-en-canvas-html5
type: doc
topic: html
id: 8e440448-259d-4cf1-b077-0620004fa405
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/ejes.html
---

**Crear un eje de coordenadas en Canvas HTML5** permite representar puntos, funciones y otros elementos gráficos sobre una cuadrícula de referencia. En este ejemplo construiremos un plano cartesiano con sus ejes `X` e `Y`, líneas de cuadrícula y etiquetas numéricas para identificar cada posición.


El resultado servirá como base para dibujar gráficas, diagramas o figuras a partir de coordenadas. Conviene recordar que el sistema de coordenadas nativo de `<canvas>` sitúa el origen en la esquina superior izquierda: `x` aumenta hacia la derecha e `y` aumenta hacia abajo. Para obtener un plano cartesiano centraremos un origen propio y adaptaremos las etiquetas alrededor de él.


## Crear el Canvas


Primero añadimos el elemento [`<canvas>`](http://w3api.com/wiki/HTML5:CANVAS) a la página. Los atributos `width` y `height` definen la resolución interna y deben contener números sin la unidad `px`:


```html
<canvas id="micanvas" width="1000" height="600">
  Tu navegador no admite el elemento canvas.
</canvas>
```


El lienzo tiene 1000 píxeles de ancho y 600 de alto. El atributo `id` permite localizarlo desde el código. Si queremos adaptar su tamaño visible al contenedor sin distorsionarlo, podemos añadir estilos sin cambiar la relación de aspecto:


```css
canvas {
  display: block;
  max-width: 100%;
  height: auto;
}
```


## Obtener el contexto 2D y las dimensiones


Utilizamos `document.getElementById()` para obtener el `<canvas>` y `getContext("2d")` para acceder al contexto de dibujo. También guardamos sus dimensiones:


```javascript
const canvas = document.getElementById("micanvas");
const ctx = canvas.getContext("2d");
const alto = canvas.height;
const ancho = canvas.width;
```


Este código está escrito en [JavaScript](https://lineadecodigo.com/javascript/). Todas las líneas y etiquetas se dibujarán mediante el objeto `ctx`, que implementa la interfaz `CanvasRenderingContext2D`.


## Configurar el eje de coordenadas


Antes de dibujar definimos los valores que controlan la cuadrícula y los ejes:

- `gridSize`: separación, en píxeles, entre las líneas de la cuadrícula.
- `xAxisSize`: longitud visible del eje horizontal.
- `yAxisSize`: longitud visible del eje vertical.
- `xCero` e `yCero`: posición del origen `(0, 0)` dentro del lienzo.

```javascript
const gridSize = 20;
const xAxisSize = ancho - 2 * gridSize;
const yAxisSize = alto - 2 * gridSize;
const xCero = ancho / 2;
const yCero = alto / 2;
```


A diferencia del ejemplo original con valores fijos, calcular `xCero` e `yCero` a partir de las dimensiones mantiene el origen centrado si cambiamos el tamaño del `<canvas>`.


## Crear la cuadrícula


La cuadrícula se construye con líneas verticales y horizontales separadas por `gridSize`. Para cada línea utilizamos `moveTo()` para establecer el punto inicial y `lineTo()` para indicar el final.


```javascript
function dibujarGrid(ctx) {
  ctx.beginPath();

  // Líneas verticales
  for (let x = 0; x <= ancho; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, alto);
  }

  // Líneas horizontales
  for (let y = 0; y <= alto; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(ancho, y);
  }

  ctx.strokeStyle = "#dcdcdc";
  ctx.lineWidth = 1;
  ctx.stroke();
}
```


La segunda condición debe comparar `y` con `alto`, no con `ancho`; de lo contrario, el bucle calcularía líneas horizontales fuera de la altura real del lienzo. `beginPath()` inicia una ruta nueva y `stroke()` hace visible todo el conjunto de líneas.


## Dibujar los ejes X e Y


El eje `X` atraviesa horizontalmente el origen, mientras que el eje `Y` lo hace en vertical. Ambos se dibujan en una ruta diferente para aplicar un color y un grosor más destacados que los de la cuadrícula:


```javascript
function dibujarEjes(ctx) {
  ctx.beginPath();

  // Eje X
  ctx.moveTo(xCero - xAxisSize / 2, yCero);
  ctx.lineTo(xCero + xAxisSize / 2, yCero);

  // Eje Y
  ctx.moveTo(xCero, yCero - yAxisSize / 2);
  ctx.lineTo(xCero, yCero + yAxisSize / 2);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();
}
```


Separar la cuadrícula y los ejes mediante llamadas distintas a `beginPath()` evita que el estilo negro y grueso se aplique también a las líneas del fondo.


## Añadir etiquetas numéricas


Las etiquetas indican el valor de cada división. La propiedad `font` configura la tipografía, `textAlign` controla la alineación horizontal, `textBaseline` ajusta la referencia vertical y `fillText()` pinta cada número en las coordenadas indicadas.


```javascript
function dibujarEtiquetas(ctx) {
  ctx.font = "bold 10px sans-serif";
  ctx.fillStyle = "#000000";

  // Origen
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText("0", xCero - 5, yCero + 5);

  // Valores del eje Y
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  for (let valor = 1; valor * gridSize <= yAxisSize / 2; valor++) {
    ctx.fillText(
      String(valor),
      xCero - gridSize / 4,
      yCero - gridSize * valor
    );

    ctx.fillText(
      String(-valor),
      xCero - gridSize / 4,
      yCero + gridSize * valor
    );
  }

  // Valores del eje X
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (let valor = 1; valor * gridSize <= xAxisSize / 2; valor++) {
    ctx.fillText(
      String(valor),
      xCero + gridSize * valor,
      yCero + gridSize / 4
    );

    ctx.fillText(
      String(-valor),
      xCero - gridSize * valor,
      yCero + gridSize / 4
    );
  }
}
```


En el eje `Y`, los valores positivos aparecen por encima del origen y los negativos por debajo. Esta inversión es necesaria porque las coordenadas verticales de Canvas crecen hacia abajo. En el eje `X`, los valores positivos se sitúan a la derecha y los negativos a la izquierda.


## Ejemplo completo del eje de coordenadas


El siguiente documento reúne la creación del lienzo, la cuadrícula, los ejes y las etiquetas:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Eje de coordenadas en Canvas HTML5</title>
  <style>
    canvas {
      display: block;
      max-width: 100%;
      height: auto;
      border: 1px solid #cccccc;
    }
  </style>
</head>
<body>
  <canvas id="micanvas" width="1000" height="600">
    Tu navegador no admite el elemento canvas.
  </canvas>

  <script>
    const canvas = document.getElementById("micanvas");
    const ctx = canvas.getContext("2d");
    const alto = canvas.height;
    const ancho = canvas.width;

    const gridSize = 20;
    const xAxisSize = ancho - 2 * gridSize;
    const yAxisSize = alto - 2 * gridSize;
    const xCero = ancho / 2;
    const yCero = alto / 2;

    function dibujarGrid() {
      ctx.beginPath();

      for (let x = 0; x <= ancho; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, alto);
      }

      for (let y = 0; y <= alto; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(ancho, y);
      }

      ctx.strokeStyle = "#dcdcdc";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function dibujarEjes() {
      ctx.beginPath();
      ctx.moveTo(xCero - xAxisSize / 2, yCero);
      ctx.lineTo(xCero + xAxisSize / 2, yCero);
      ctx.moveTo(xCero, yCero - yAxisSize / 2);
      ctx.lineTo(xCero, yCero + yAxisSize / 2);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function dibujarEtiquetas() {
      ctx.font = "bold 10px sans-serif";
      ctx.fillStyle = "#000000";

      ctx.textAlign = "right";
      ctx.textBaseline = "top";
      ctx.fillText("0", xCero - 5, yCero + 5);

      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      for (let valor = 1; valor * gridSize <= yAxisSize / 2; valor++) {
        ctx.fillText(String(valor), xCero - 5, yCero - gridSize * valor);
        ctx.fillText(String(-valor), xCero - 5, yCero + gridSize * valor);
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      for (let valor = 1; valor * gridSize <= xAxisSize / 2; valor++) {
        ctx.fillText(String(valor), xCero + gridSize * valor, yCero + 5);
        ctx.fillText(String(-valor), xCero - gridSize * valor, yCero + 5);
      }
    }

    dibujarGrid();
    dibujarEjes();
    dibujarEtiquetas();
  </script>
</body>
</html>
```


## Convertir coordenadas cartesianas a coordenadas Canvas


Una vez creado el plano, podemos transformar cualquier punto cartesiano `(x, y)` en una posición del lienzo. Multiplicamos cada unidad por `gridSize`, sumamos el desplazamiento horizontal al origen e invertimos el eje vertical:


```javascript
function aCanvas(x, y) {
  return {
    x: xCero + x * gridSize,
    y: yCero - y * gridSize
  };
}

const punto = aCanvas(4, 3);

ctx.beginPath();
ctx.arc(punto.x, punto.y, 5, 0, 2 * Math.PI);
ctx.fillStyle = "#e63946";
ctx.fill();
```


El punto cartesiano `(4, 3)` se representa cuatro divisiones a la derecha y tres hacia arriba respecto al origen. Esta función facilita añadir datos sin tener que calcular manualmente los píxeles.


## Errores frecuentes


Algunos errores en los que podemos caer cuando creemos un **eje de coordenadas en canvas HTML5** pueden ser los siguientes.

- **Usar** **`px`** **en** **`width`** **y** **`height`****:** los atributos del `<canvas>` esperan valores numéricos.
- **Recorrer** **`ancho`** **al crear líneas horizontales:** el límite correcto del bucle vertical es `alto`.
- **Olvidar** **`beginPath()`****:** una ruta nueva puede heredar líneas anteriores y volver a pintarlas.
- **Confundir el eje vertical:** en Canvas, `y` crece hacia abajo; en el plano cartesiano suele crecer hacia arriba.
- **Aplicar el mismo estilo a todas las rutas:** conviene separar cuadrícula y ejes para darles colores y grosores diferentes.
- **No configurar** **`textAlign`** **y** **`textBaseline`****:** las etiquetas pueden quedar desplazadas o superpuestas a los ejes.
- **Modificar las dimensiones después de dibujar:** cambiar `canvas.width` o `canvas.height` borra el contenido y restablece el contexto.

Con esta estructura obtenemos un **eje de coordenadas en Canvas HTML5 reutilizable** y fácil de configurar. Podemos cambiar `gridSize`, mover el origen o transformar coordenadas cartesianas para representar funciones, datos y figuras con claridad.

