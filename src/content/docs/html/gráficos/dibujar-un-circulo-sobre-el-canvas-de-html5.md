---
title: "Dibujar un círculo sobre el canvas de HTML5"
description: "Dibujar un círculo sobre el CANVAS de HTML5 paso a paso: utiliza arc con radianes, aplica relleno y borde, y aprende a crear arcos completos."
date: 2012-08-03
updatedDate: 2026-09-29
tags: ["canvas","circle","circulo","radio","fill","stroke"]
slug: html/graficos/dibujar-un-circulo-sobre-el-canvas-de-html5
type: doc
topic: html
id: cd5f78c2-3b63-4db5-b7ec-1d8ccd35e62b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/dibujar-circulo.html
---

Dibujar un círculo sobre el Canvas de HTML5 consiste en crear una ruta circular sobre el elemento [`<canvas>`](https://www.w3api.com/HTML/canvas/) y después pintar su relleno, su contorno o ambos. El contexto `2d` no dispone de un método específico llamado `circle()`: para crear la circunferencia se utiliza `arc()`, ya que un círculo completo equivale a un arco de 360 grados.


## Crear el elemento Canvas y obtener el contexto 2D


Primero necesitamos incluir un elemento `<canvas>` en el documento. Los atributos `width` y `height` definen el tamaño real de su superficie de dibujo y deben expresarse como números, sin `px`:


```html
<canvas id="micanvas" width="500" height="160">
  Tu navegador no admite el elemento canvas.
</canvas>
```


Después obtenemos una referencia al elemento mediante `document.getElementById()` y solicitamos su contexto de renderizado `2d` con `getContext()`:


```javascript
const canvas = document.getElementById("micanvas");
const ctx = canvas.getContext("2d");
```


Este código está escrito en [JavaScript](https://lineadecodigo.com/javascript/), el lenguaje que permite manipular el contexto y dibujar sobre el lienzo.


## Sintaxis del método arc


La forma actual de llamar a `arc()` es la siguiente:


```javascript
ctx.arc(x, y, radio, anguloInicial, anguloFinal, sentidoAntihorario);
```


Sus parámetros son:

- `x` e `y`: coordenadas del centro del arco.
- `radio`: distancia desde el centro hasta la circunferencia. Debe ser un valor positivo.
- `anguloInicial`: ángulo en el que comienza el arco, expresado en radianes.
- `anguloFinal`: ángulo en el que termina el arco, también en radianes.
- `sentidoAntihorario`: valor booleano opcional. Si es `true`, el arco se traza en sentido contrario a las agujas del reloj; si se omite o vale `false`, se dibuja en sentido horario.

El origen de coordenadas del `<canvas>` está en la esquina superior izquierda. El eje `x` crece hacia la derecha y el eje `y`, hacia abajo. Los ángulos se miden desde el eje `x` positivo.


## Convertir grados a radianes


Los ángulos de `arc()` se indican en radianes, no en grados. La equivalencia fundamental es:


```text
180 grados = π radianes
360 grados = 2π radianes
```


Para convertir un ángulo en grados a radianes podemos utilizar esta expresión:


```javascript
const radianes = (Math.PI / 180) * grados;
```


Por ejemplo, 90 grados se convierten así:


```javascript
const angulo = (Math.PI / 180) * 90;
```


Cuando queremos dibujar un círculo completo resulta más claro escribir directamente `2 * Math.PI`.


## Dibujar arcos sobre el Canvas


Antes de definir una forma conviene ejecutar `beginPath()`. Este método inicia una ruta nueva y evita que el arco se una accidentalmente a trazos creados con anterioridad.


El siguiente código crea un arco de 270 grados desde el ángulo inicial `0`:


```javascript
ctx.beginPath();
ctx.arc(100, 70, 50, 0, (Math.PI / 180) * 270, false);
ctx.stroke();
```


El valor `false` hace que el recorrido se realice en sentido horario. Si se utilizara `true` con esos mismos ángulos, el recorrido sería antihorario y se dibujaría el arco complementario de 90 grados.


Para crear medio círculo, del ángulo `0` al ángulo de 180 grados, podemos escribir:


```javascript
ctx.beginPath();
ctx.arc(230, 70, 50, 0, Math.PI, false);
ctx.stroke();
```


## Dibujar un círculo completo


Un círculo completo comienza en `0` y termina en `2 * Math.PI`, es decir, en 360 grados:


```javascript
ctx.beginPath();
ctx.arc(360, 70, 50, 0, 2 * Math.PI);
ctx.stroke();
```


`arc()` solo incorpora el arco a la ruta actual. Para mostrarlo hay que ejecutar `stroke()`, si queremos pintar el contorno, o `fill()`, si queremos rellenar su interior.


## Aplicar relleno al círculo


La propiedad `fillStyle` permite indicar el color de relleno. Después de asignarlo debemos llamar a `fill()` para pintar el interior:


```javascript
ctx.beginPath();
ctx.arc(100, 80, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#ff9999";
ctx.fill();
```


`fillStyle` admite distintos formatos de color compatibles con la web, como valores hexadecimales, `rgb()`, `rgba()` o nombres de color.


## Añadir un borde al círculo


Para dibujar el contorno utilizamos `strokeStyle` para el color, `lineWidth` para el grosor en píxeles y `stroke()` para renderizarlo:


```javascript
ctx.beginPath();
ctx.arc(230, 80, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 10;
ctx.stroke();
```


El borde queda centrado sobre la trayectoria geométrica. Por tanto, un `lineWidth` de `10` píxeles se extiende aproximadamente 5 píxeles hacia el interior y 5 hacia el exterior del círculo.


## Dibujar un círculo con relleno y borde


Podemos aplicar ambas operaciones sobre la misma ruta. Es recomendable ejecutar primero `fill()` y después `stroke()` para que el borde permanezca completamente visible:


```javascript
ctx.beginPath();
ctx.arc(150, 80, 50, 0, 2 * Math.PI);

ctx.fillStyle = "#ffcccc";
ctx.fill();

ctx.strokeStyle = "#cc0000";
ctx.lineWidth = 4;
ctx.stroke();
```


## Ejemplo completo


Este ejemplo reúne la creación del `<canvas>`, la obtención del contexto `2d` y el dibujo de tres formas: un arco de 270 grados, un semicírculo y un círculo completo con relleno y borde.


```html
<canvas id="micanvas" width="500" height="160">
  Tu navegador no admite el elemento canvas.
</canvas>

<script>
  const canvas = document.getElementById("micanvas");
  const ctx = canvas.getContext("2d");

  // Arco de 270 grados
  ctx.beginPath();
  ctx.arc(80, 80, 50, 0, (Math.PI / 180) * 270);
  ctx.strokeStyle = "#555555";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Semicírculo
  ctx.beginPath();
  ctx.arc(230, 80, 50, 0, Math.PI);
  ctx.strokeStyle = "#0066cc";
  ctx.stroke();

  // Círculo completo
  ctx.beginPath();
  ctx.arc(380, 80, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffcccc";
  ctx.fill();
  ctx.strokeStyle = "#cc0000";
  ctx.lineWidth = 4;
  ctx.stroke();
</script>
```


## Errores frecuentes al dibujar círculos


Algunos de los errores en los que podemos caer cuando estemos dibujando un círculo sobre el canvas en HTML son los siguientes:

- **Olvidar** **`beginPath()`****:** las rutas anteriores pueden volver a pintarse o quedar conectadas con el nuevo arco.
- **Usar grados directamente:** `arc()` espera radianes; escribir `360` no equivale a `360°`.
- **No llamar a** **`fill()`** **o** **`stroke()`****:** crear la ruta no basta para mostrarla.
- **Utilizar un radio negativo:** `arc()` exige que el radio sea positivo.
- **Confundir el sentido del recorrido:** el último parámetro modifica la dirección entre los ángulos inicial y final, por lo que también puede cambiar la longitud visible del arco.
- **Dibujar demasiado cerca del borde:** parte de un contorno grueso puede quedar fuera del `<canvas>` y recortarse.

Con estos conceptos podemos dibujar un círculo sobre el canvas de HTML5, crear arcos parciales y controlar por separado el relleno y el contorno. La combinación de `beginPath()`, `arc()`, `fill()` y `stroke()` ofrece todo lo necesario para construir indicadores, gráficos, iconos y otras formas circulares.

