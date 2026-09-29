---
title: "Dibujar un triángulo en HTML5"
description: "Dibujar un triángulo en HTML5 paso a paso con Canvas: crea la ruta con moveTo y lineTo, añade relleno y borde, y evita los errores habituales."
date: 2021-02-15
updatedDate: 2026-09-29
tags: ["canvas","triangulo","line","stroke","fill","getcontext"]
slug: html/graficos/dibujar-un-triangulo-en-html5
type: doc
topic: html
id: 0469fc6e-15e2-40b6-8108-8e96213a0735
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/dibujar-triangulo.html
---

**Dibujar un triángulo en HTML5** es una tarea sencilla cuando utilizamos el elemento [`<canvas>`](http://w3api.com/wiki/HTML5:CANVAS) y su contexto de renderizado `2d`. Aunque Canvas incluye métodos específicos para rectángulos y arcos, no dispone de una función `triangle()`. Por eso debemos construir el triángulo como una ruta formada por tres puntos unidos mediante líneas.


## Crear el Canvas en HTML5


El primer paso consiste en añadir un elemento `<canvas>` a la página web. Sus atributos `width` y `height` establecen el tamaño real de la superficie de dibujo y deben escribirse como valores numéricos, sin `px`:


```html
<canvas id="micanvas" width="500" height="400">
  Tu navegador no admite el elemento canvas.
</canvas>
```


En este caso, el lienzo mide 500 píxeles de ancho por 400 píxeles de alto. El atributo [`id`](http://w3api.com/wiki/HTML:Id), cuyo valor es `micanvas`, permite localizar el elemento desde el código.


Es importante distinguir estos atributos del tamaño definido mediante estilos. Si solo se modifica el ancho o el alto con estilos, el navegador puede escalar la superficie y hacer que el dibujo se vea deformado o borroso.


## Obtener el contexto 2D


Para dibujar sobre el `<canvas>`, obtenemos una referencia al elemento mediante `document.getElementById()` y solicitamos su contexto `2d` con `getContext()`:


```javascript
const canvasElement = document.getElementById("micanvas");
const context = canvasElement.getContext("2d");
```


Este código está escrito en [JavaScript](https://lineadecodigo.com/javascript/), que es el lenguaje encargado de crear y pintar la ruta. Las coordenadas del lienzo parten de la esquina superior izquierda: `x` aumenta hacia la derecha e `y` aumenta hacia abajo.


## Iniciar la ruta del triángulo


Un triángulo se puede representar mediante una ruta con tres vértices. Antes de definirlos llamamos a `beginPath()`, que vacía la lista de subrutas actual e inicia una forma nueva:


```javascript
context.beginPath();
```


Este paso es especialmente importante cuando se dibujan varias figuras, ya que impide que el nuevo triángulo quede unido a rutas anteriores.


## Definir el primer vértice con moveTo


El método `moveTo(x, y)` desplaza el punto actual de la ruta sin dibujar una línea. Lo utilizamos para situarnos en el primer vértice, en las coordenadas `(100, 100)`:


```javascript
context.beginPath();
context.moveTo(100, 100);
```


Podemos imaginar `moveTo()` como el gesto de levantar un lápiz y colocarlo en una posición concreta del lienzo.


## Trazar los lados con lineTo


A partir del punto inicial, `lineTo(x, y)` añade una línea recta desde la posición actual hasta las nuevas coordenadas. Para conservar el ejemplo original, trazamos un lado hasta `(100, 300)` y otro hasta `(300, 300)`:


```javascript
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
```


Estos tres puntos forman un triángulo rectángulo. Podemos crear otras variantes cambiando las coordenadas de sus vértices; por ejemplo, un triángulo isósceles podría utilizar un vértice superior centrado respecto a los dos inferiores.


## Cerrar el triángulo con closePath


No es necesario repetir manualmente el punto inicial. El método `closePath()` añade una línea recta desde el último punto hasta el primero y cierra la subruta:


```javascript
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();
```


Cerrar la ruta es imprescindible si queremos mostrar los tres lados mediante `stroke()`. Aunque `fill()` cierra automáticamente la forma para calcular el relleno, utilizar `closePath()` hace que la intención del código sea más clara y permite pintar correctamente el contorno.


## Configurar y dibujar el borde


La propiedad `lineWidth` define el grosor del trazo en píxeles y `strokeStyle` establece su color. Finalmente, `stroke()` pinta el contorno de la ruta:


```javascript
context.lineWidth = 10;
context.strokeStyle = "#666666";
context.stroke();
```


El trazo queda centrado sobre la ruta. Con un `lineWidth` de `10`, aproximadamente 5 píxeles se extienden hacia el interior y otros 5 hacia el exterior de cada lado.


## Rellenar el triángulo


La propiedad `fillStyle` permite elegir el color interior. El relleno se renderiza al ejecutar `fill()`:


```javascript
context.fillStyle = "#ffcc00";
context.fill();
```


Si queremos combinar relleno y borde, suele ser preferible ejecutar primero `fill()` y después `stroke()`. Así el relleno no cubre parcialmente el contorno.


## Ejemplo completo para dibujar un triángulo en HTML5


El siguiente documento reúne todos los pasos y conserva las coordenadas del ejemplo original:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Triángulo en Canvas</title>
</head>
<body>
  <canvas id="micanvas" width="500" height="400">
    Tu navegador no admite el elemento canvas.
  </canvas>

  <script>
    const canvasElement = document.getElementById("micanvas");
    const context = canvasElement.getContext("2d");

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();

    context.fillStyle = "#ffcc00";
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = "#666666";
    context.stroke();
  </script>
</body>
</html>
```


Al abrir este documento en el navegador se mostrará un triángulo amarillo con un borde gris de 10 píxeles.


## Crear un triángulo reutilizable


Si necesitamos dibujar varios triángulos, podemos encapsular la lógica en una función. Cada llamada recibe los tres vértices y los estilos que se aplicarán:


```javascript
function dibujarTriangulo(context, p1, p2, p3, relleno, borde) {
  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p3.x, p3.y);
  context.closePath();

  context.fillStyle = relleno;
  context.fill();

  context.strokeStyle = borde;
  context.lineWidth = 4;
  context.stroke();
}

dibujarTriangulo(
  context,
  { x: 250, y: 60 },
  { x: 150, y: 260 },
  { x: 350, y: 260 },
  "#66ccff",
  "#004466"
);
```


Esta técnica resulta útil para gráficos, juegos, diagramas o interfaces que generan formas a partir de coordenadas dinámicas.


## Errores frecuentes al dibujar el triángulo


Algunos errores en los que podemos caer a la hora de dibujar un triángulo en HTML5 y los cuales debemos de evitar son:

- **Añadir** **`px`** **a** **`width`** **y** **`height`****:** los atributos del `<canvas>` esperan números enteros; las unidades se reservan para los estilos.
- **Olvidar** **`beginPath()`****:** el triángulo puede conectarse con una figura anterior.
- **No utilizar** **`closePath()`****:** al ejecutar `stroke()` faltará el lado que une el último vértice con el primero.
- **No llamar a** **`fill()`** **o** **`stroke()`****:** definir la ruta no la muestra automáticamente.
- **Confundir los ejes:** en Canvas, el valor de `y` crece hacia abajo.
- **Pintar el borde antes del relleno:** el relleno puede cubrir parte del trazo.
- **Colocar vértices fuera del lienzo:** las partes que excedan las dimensiones del `<canvas>` quedarán recortadas.

Con `beginPath()`, `moveTo()`, `lineTo()` y `closePath()` podemos construir cualquier triángulo en HTML5. Las propiedades `fillStyle`, `strokeStyle` y `lineWidth` permiten personalizar su relleno y contorno sin cambiar la geometría de la figura.

