---
title: "Definir el ancho de una capa con CSS"
description: "Definir el ancho de una capa con CSS: aprende a usar width, box-sizing y unidades de medida para controlar dimensiones y evitar desbordamientos."
date: 2010-09-11
updatedDate: 2026-09-18
tags: ["CSS Básicos","CSS Dimensiones","css","width"]
slug: css/box-model/definir-el-ancho-de-una-capa-con-css
type: doc
topic: css
id: 38c2ad4e-1453-4818-aecf-b0eb1336abc5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/capas/definir-ancho-de-una-capa.html
---

Para **definir el ancho de una capa con CSS** se utiliza principalmente la propiedad `width`. Aunque el procedimiento es sencillo, conviene tener en cuenta el modelo de caja, las unidades de medida, el contenido y el comportamiento de los elementos de bloque.


En documentos actuales, el término «capa» suele referirse a un contenedor, normalmente un elemento `div` de [HTML](https://lineadecodigo.com/html/). Estos contenedores permiten organizar la estructura de una página y aplicar estilos a grupos de contenido.


## Estructura HTML de las capas


Partimos de dos contenedores: uno para los equipos de fútbol y otro para los goleadores. Cada elemento tiene un atributo `id` que permite seleccionarlo de forma individual desde la hoja de estilos:


```html
<div id="equipos">
  <h2>Equipos</h2>
  <p>
    Los equipos que se han presentado son FC Barcelona, Real Madrid,
    Atlético de Madrid y Betis.
  </p>
</div>

<div id="goleadores">
  <h2>Goleadores</h2>
  <p>
    Los goleadores de esta temporada son Villa, Diego Forlán,
    Messi y Cristiano Ronaldo.
  </p>
</div>
```


El contenido textual se ha incluido en elementos `p` para mantener una estructura semántica más clara.


## Definir el ancho con la propiedad width


La propiedad `width` establece el ancho del área de contenido de un elemento. Para asignar un ancho de `100px` a los dos contenedores, utilizamos los selectores de `id`, identificados mediante el carácter `#`:


```css
#equipos {
  width: 100px;
  background: red;
}

#goleadores {
  width: 100px;
  background: blue;
}
```


La propiedad `background` permite distinguir visualmente los contenedores. En el código original, `backgorund` estaba escrito de forma incorrecta; la propiedad válida es `background`.


Con estas reglas, ambos elementos tienen un ancho de contenido de `100px`. Sin embargo, ese valor no incluye necesariamente el relleno ni el borde.


## Cómo afecta el modelo de caja


De forma predeterminada, los navegadores utilizan `box-sizing: content-box`. En este modelo, `width` solo controla el ancho del contenido. Si añadimos `padding` y `border`, el ancho visible del elemento será mayor:


```css
#equipos,
#goleadores {
  width: 100px;
  padding: 10px;
  border: 2px solid #222;
}
```


El ancho total será de `124px`: `100px` de contenido, `20px` de relleno horizontal y `4px` de borde.


Si queremos que los `100px` incluyan el contenido, el relleno y el borde, podemos utilizar `box-sizing: border-box`:


```css
#equipos,
#goleadores {
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  border: 2px solid #222;
}
```


Esta configuración facilita el cálculo de dimensiones y suele resultar más predecible al construir interfaces.


## Elegir una unidad para el ancho


El valor de `width` puede expresarse con distintas unidades según el resultado que necesitemos:

- `px`: define un ancho fijo en píxeles.
- `%`: calcula el ancho respecto al bloque contenedor.
- `rem`: establece una medida relativa al tamaño de fuente del elemento raíz.
- `vw`: utiliza un porcentaje del ancho de la ventana gráfica.
- `auto`: deja que el navegador determine el ancho.

Por ejemplo, para que una capa ocupe la mitad del ancho disponible:


```css
#equipos {
  width: 50%;
}
```


En diseños adaptables suele ser útil combinar `width` con `max-width`. Así, el elemento puede ocupar el espacio disponible sin superar un límite:


```css
#equipos,
#goleadores {
  width: 100%;
  max-width: 320px;
}
```


## Evitar que el contenido se desborde


En el ejemplo original, la palabra «Goleadores» podía sobresalir del contenedor porque el ancho de `100px` era demasiado pequeño. El navegador intenta ajustar el texto en varias líneas, pero una palabra larga o un contenido indivisible puede provocar desbordamiento.


Una solución consiste en permitir la división de palabras largas:


```css
#equipos,
#goleadores {
  width: 100px;
  overflow-wrap: anywhere;
}
```


Otra posibilidad es aumentar el ancho o utilizar un valor flexible. Si el contenido debe mantenerse en una sola línea, se puede controlar con `overflow`, aunque esto cambia el comportamiento visual y debe aplicarse de forma intencionada:


```css
#goleadores {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```


Este último ejemplo recorta el texto y muestra puntos suspensivos cuando no cabe en el espacio disponible.


## Por qué las capas aparecen una debajo de otra


Los elementos `div` se comportan como elementos de bloque. Por defecto, cada uno comienza en una línea nueva y ocupa horizontalmente el espacio disponible de su contenedor, incluso cuando se establece un `width` reducido. Por eso las capas no se colocan automáticamente una junto a otra.


Para alinearlas horizontalmente puede utilizarse `flexbox` en un contenedor padre:


```html
<div class="contenedor">
  <div id="equipos">Equipos</div>
  <div id="goleadores">Goleadores</div>
</div>
```


```css
.contenedor {
  display: flex;
  gap: 16px;
}

#equipos,
#goleadores {
  box-sizing: border-box;
  width: 160px;
  padding: 12px;
}
```


La propiedad `display: flex` controla la distribución de los elementos hijos, mientras que `gap` define el espacio entre ellos. El ancho continúa estableciéndose con `width`.


## Ejemplo completo y adaptable


El siguiente ejemplo conserva la estructura original, evita desbordamientos y permite que las capas se adapten al ancho disponible:


```html
<div class="contenedor">
  <section id="equipos">
    <h2>Equipos</h2>
    <p>FC Barcelona, Real Madrid, Atlético de Madrid y Betis.</p>
  </section>

  <section id="goleadores">
    <h2>Goleadores</h2>
    <p>Villa, Diego Forlán, Messi y Cristiano Ronaldo.</p>
  </section>
</div>
```


```css
.contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

#equipos,
#goleadores {
  box-sizing: border-box;
  width: 100%;
  max-width: 320px;
  padding: 16px;
  overflow-wrap: anywhere;
}

#equipos {
  background: #ffd6d6;
}

#goleadores {
  background: #dbeafe;
}
```


De esta forma, `width` define el ancho disponible, `max-width` limita el crecimiento y `box-sizing` evita que el relleno y el borde aumenten inesperadamente la dimensión final. Además, `flex-wrap` permite que los elementos pasen a otra línea cuando no existe espacio suficiente.

