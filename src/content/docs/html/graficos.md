---
title: "Gráficos"
description: "Crea gráficos HTML con SVG y distingue sus usos frente a Canvas. Aprende coordenadas, viewBox, atributos y accesibilidad con un gráfico de barras práctico."
date: 2026-10-13
updatedDate: 2026-10-13
tags: ["svg","canvas","img","accesibilidad"]
slug: html/graficos
type: category
topic: html
id: 3f7a9dfb-adca-8037-8cd6-dd5d8a3fa915
author: victor_cuervo
---

## ¿Qué son los Gráficos HTML?


Los **gráficos HTML** son representaciones visuales integradas en una página web para mostrar formas, diagramas, ilustraciones o datos. [HTML](https://lineadecodigo.com/html/) permite incorporar imágenes y proporcionar espacios de dibujo, pero no incluye un elemento específico que genere automáticamente un gráfico de barras o de líneas a partir de datos.


Las dos tecnologías habituales para crear gráficos dentro de una página son [SVG](https://lineadecodigo.com/svg/) y **Canvas**. [SVG](https://lineadecodigo.com/svg/), siglas de [Scalable Vector Graphics](https://lineadecodigo.com/svg/), describe formas mediante elementos como rectángulos, círculos y trazados. Canvas utiliza el elemento `<canvas>` como superficie de dibujo; normalmente se dibuja sobre ella mediante una API y código adicional.


Un gráfico **vectorial** se define con geometría, como puntos, líneas y curvas, en lugar de almacenar únicamente una cuadrícula de píxeles. [SVG](https://lineadecodigo.com/svg/) utiliza este modelo y puede ampliarse conservando la nitidez de sus formas vectoriales. Canvas dispone de un mapa de bits: una superficie con dimensiones en píxeles sobre la que se representa el resultado del dibujo.


El **renderizado** es el proceso por el que el navegador convierte esa descripción o esas instrucciones en una imagen visible. Para un gráfico estático que deba construirse únicamente con marcado, [SVG](https://lineadecodigo.com/svg/) incrustado en [HTML](https://lineadecodigo.com/html/) permite definir tanto las formas como las etiquetas sin scripts ni librerías.


## Características de Gráficos HTML

- **SVG admite dibujo declarativo.** Dentro de `<svg>` se pueden escribir `<rect>` para rectángulos, `<circle>` para círculos, `<line>` para líneas, `<path>` para trazados y `<text>` para etiquetas. Sus atributos describen posición, dimensiones y apariencia. El navegador puede representar estas formas sin que se ejecute código de dibujo.
- **Canvas necesita instrucciones para dibujar.** `<canvas>` crea la superficie, pero sus atributos no describen barras, círculos ni textos. La API Canvas 2D permite dibujarlos mediante código. Sus atributos `width` y `height` determinan el tamaño del mapa de bits; si se omiten, el tamaño predeterminado es 300 por 150. Cambiar esas dimensiones reinicia el contexto y borra el dibujo.
- **Las coordenadas determinan la posición.** En el sistema inicial de SVG, el origen se sitúa en la esquina superior izquierda: `x` aumenta hacia la derecha e `y` hacia abajo. En un rectángulo, `x` e `y` ubican la esquina superior izquierda, mientras que `width` y `height` definen su extensión. Los valores pertenecen al sistema de coordenadas del gráfico y no siempre equivalen a píxeles de pantalla.
- **`viewBox`** **separa coordenadas y tamaño visible.** En SVG, `viewBox="0 0 480 220"` define una región interna que comienza en las coordenadas 0, 0 y tiene 480 unidades de ancho por 220 de alto. `width` y `height` definen el tamaño de presentación. El navegador transforma la región interna para ajustarla al área visible; de forma predeterminada conserva su proporción.
- **Rellenos, contornos y orden de dibujo.** `fill` establece el relleno y `stroke` el contorno; `stroke-width` controla su grosor. Son atributos de presentación propios de SVG. Los elementos posteriores suelen dibujarse sobre los anteriores, por lo que el orden del marcado influye cuando las formas se superponen.
- **SVG conserva elementos; Canvas conserva el resultado visual.** Cada forma de un SVG incrustado pertenece al DOM, la representación estructurada del documento. Puede identificarse y modificarse de manera individual. Los objetos dibujados sobre Canvas no se convierten automáticamente en nodos del DOM: para cambiar una figura normalmente hay que actualizar el dibujo.
- **El formato no determina por sí solo el rendimiento.** SVG suele ser adecuado para iconos, diagramas y gráficos con un número manejable de elementos. Canvas puede resultar conveniente para escenas con muchos objetos y actualizaciones frecuentes. El coste depende de la cantidad de elementos, la complejidad del dibujo y la frecuencia de actualización, no solo de la tecnología elegida.
- **La accesibilidad requiere información equivalente.** Un gráfico informativo necesita un nombre y una descripción de su significado. En SVG incrustado pueden utilizarse `<title>`, `<desc>` y atributos ARIA para asociarlos al gráfico. Para datos cuantitativos, añade también una lista o tabla visible con los valores. No comuniques categorías o resultados únicamente mediante colores.
- **Un SVG externo no funciona igual que uno incrustado.** `<img src="grafico.svg" alt="…">` incorpora el archivo como imagen y permite definir su texto alternativo. Sus formas internas no quedan expuestas como elementos del DOM de la página principal. El SVG incrustado, en cambio, permite integrar y gestionar sus elementos directamente.

En un `<canvas>`, el contenido alternativo entre sus etiquetas puede aportar información a tecnologías de asistencia, pero no convierte los píxeles dibujados en datos semánticos. Una explicación visible junto al gráfico ayuda también a quienes no pueden interpretar la representación visual.


## ¿Por qué aprender Gráficos HTML?


Conocer [SVG](https://lineadecodigo.com/svg/) permite crear iconos, diagramas y visualizaciones sencillas sin depender de una imagen de resolución fija. El sistema de coordenadas y `viewBox` ayudan a adaptar la representación a distintos tamaños sin recalcular manualmente todas las posiciones.


Distinguir [SVG](https://lineadecodigo.com/svg/) de Canvas evita elegir una tecnología que no encaja con el trabajo. Un gráfico estático con etiquetas puede describirse directamente con [SVG](https://lineadecodigo.com/svg/); una escena que se redibuja continuamente necesita un enfoque distinto. La elección afecta tanto a la actualización de las figuras como a la forma de proporcionar información accesible.


En las visualizaciones de datos, aprender a relacionar valores con longitudes o posiciones evita resultados engañosos. Las barras deben seguir una escala coherente, mostrar sus unidades y partir de una base común. El navegador dibuja lo que se le indica: no comprueba que la representación corresponda a los datos.


Este conocimiento también facilita separar el contenido de su representación. Los valores y las categorías siguen siendo información útil aunque el gráfico no pueda verse, por lo que deben poder consultarse de otra forma.


## Ejemplo de Gráficos HTML


Este gráfico de barras compara las unidades vendidas de tres productos. Utiliza [SVG](https://lineadecodigo.com/svg/) incrustado porque las formas y los textos pueden definirse directamente en el documento. Guarda el código como `ventas.html` y ábrelo en un navegador; no necesita archivos externos, estilos ni scripts.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Ventas por producto</title>
</head>
<body>
  <h1>Ventas de papelería</h1>

  <figure>
    <svg
      width="480"
      height="220"
      viewBox="0 0 480 220"
      role="img"
      aria-labelledby="titulo-ventas descripcion-ventas"
    >
      <title id="titulo-ventas">Unidades vendidas por producto</title>
      <desc id="descripcion-ventas">
        Cuadernos: 20 unidades. Bolígrafos: 40. Carpetas: 30.
        Los bolígrafos son el producto con más unidades vendidas.
      </desc>

      <line
        x1="140" y1="35" x2="140" y2="185"
        stroke="black" stroke-width="2"
      ></line>

      <text x="10" y="65">Cuadernos</text>
      <rect x="140" y="45" width="120" height="30" fill="#245b8f"></rect>
      <text x="270" y="65">20</text>

      <text x="10" y="115">Bolígrafos</text>
      <rect x="140" y="95" width="240" height="30" fill="#245b8f"></rect>
      <text x="390" y="115">40</text>

      <text x="10" y="165">Carpetas</text>
      <rect x="140" y="145" width="180" height="30" fill="#245b8f"></rect>
      <text x="330" y="165">30</text>

      <text x="140" y="205">Longitud de las barras: unidades vendidas</text>
    </svg>
    <figcaption>Comparación de ventas por producto.</figcaption>
  </figure>

  <p>Valores representados:</p>
  <ul>
    <li>Cuadernos: 20 unidades.</li>
    <li>Bolígrafos: 40 unidades.</li>
    <li>Carpetas: 30 unidades.</li>
  </ul>
</body>
</html>
```


El navegador muestra tres barras horizontales. La de Bolígrafos es el doble de larga que la de Cuadernos y la de Carpetas tiene una longitud intermedia. Todas comienzan en `x="140"`, una base común que representa cero unidades.

- La escala es de seis unidades de coordenadas por cada unidad vendida. Los anchos se han calculado como 20 × 6 = 120, 40 × 6 = 240 y 30 × 6 = 180. HTML y SVG no calculan esos valores automáticamente.
- Cada `<rect>` representa una barra. Su altura constante facilita comparar las longitudes sin introducir una segunda medida visual.
- Los atributos `y` separan las filas. En `<text>`, `y` sitúa la línea base del texto, no su borde superior, por lo que no coincide con la coordenada superior de los rectángulos.
- `viewBox` define la región de dibujo completa. Si cambias `width` a 720 y `height` a 330, manteniendo el mismo `viewBox`, el gráfico se amplía con la misma proporción sin modificar las coordenadas internas.
- `role="img"` presenta el SVG como una imagen informativa. `aria-labelledby` referencia los identificadores de su título y descripción para aportar una alternativa textual. La lista visible permite consultar los valores sin interpretar las barras.

Para actualizar las ventas, cambia tanto el ancho de la barra correspondiente como su etiqueta numérica, la descripción y la lista de valores. Mantén la misma escala para los tres productos y comprueba que ninguna barra ni etiqueta quede fuera de la región definida por `viewBox`.

