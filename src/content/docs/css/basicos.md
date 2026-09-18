---
title: "Básicos"
description: "Consulta ejemplos básicos CSS para entender su sintaxis, comentarios, reglas, selectores, propiedades y valores mediante código claro y práctico."
date: 2026-01-17
updatedDate: 2026-09-18
tags: ["selector","propiedades","comentarios","valor"]
slug: css/basicos
type: category
topic: css
id: 2eba9dfb-adca-8047-83fa-dde1183b8729
author: victor_cuervo
---

## ¿Qué son los ejemplos básicos CSS?


Los **ejemplos básicos CSS** son artículos que enseñan los conceptos necesarios para escribir y comprender hojas de estilo: sintaxis, selectores, declaraciones, propiedades, valores, comentarios, cascada y herencia. [CSS](https://lineadecodigo.com/css/), siglas de _Cascading Style Sheets_, describe cómo se presenta un documento en el navegador.


Una hoja de estilo está formada por **reglas CSS**. Cada regla combina un selector y un bloque de declaraciones:


```css
selector {
  propiedad: valor;
}
```


El **selector** determina qué elementos reciben el estilo. Dentro de las llaves, cada **declaración** asigna un valor a una propiedad. La propiedad identifica qué aspecto se modifica, como `color` o `margin`, y el valor establece el resultado, como `#1d4ed8` o `1rem`.


Cuando varias reglas afectan al mismo elemento, el navegador resuelve el resultado mediante la **cascada**. Para ello considera el origen de los estilos, la importancia, la especificidad del selector y el orden de aparición. Algunas propiedades, como `color` y `font-family`, también pueden heredarse desde un elemento antecesor.


## Características de los ejemplos básicos CSS

- **Sintaxis declarativa:** [CSS](https://lineadecodigo.com/css/) expresa el resultado visual deseado mediante pares `propiedad: valor`; no describe una secuencia de instrucciones.
- **Selectores:** permiten aplicar reglas por tipo de elemento, clase, identificador, atributo, relación estructural o estado. Elegir selectores claros reduce conflictos y facilita el mantenimiento.
- **Bloques de declaraciones:** se delimitan con llaves y pueden contener varias declaraciones separadas por punto y coma. Una declaración no válida suele ignorarse sin impedir que se procesen las demás.
- **Valores y unidades:** una propiedad admite valores concretos según su definición. Pueden ser palabras clave, colores, números, longitudes, porcentajes o funciones. Por ejemplo, `width` acepta longitudes y porcentajes, mientras que `font-weight` acepta palabras clave o valores numéricos.
- **Cascada y especificidad:** permiten combinar estilos procedentes de distintas reglas. Un selector más específico puede prevalecer sobre otro menos específico; si tienen la misma prioridad, suele imponerse la declaración escrita después.
- **Herencia:** determinadas propiedades pasan de un elemento padre a sus descendientes. Esto resulta útil para definir tipografía y color en un contenedor sin repetir declaraciones.
- **Comentarios:** se escriben entre `/*` y `*/`. Sirven para documentar decisiones o dividir una hoja de estilo, pero no deben sustituir nombres de clases comprensibles.

## ¿Por qué aprender ejemplos básicos CSS?


Comprender los ejemplos básicos CSS permite interpretar por qué un estilo se aplica, se sobrescribe o no produce el resultado esperado. Esta base ayuda a localizar errores de sintaxis, comprobar si un selector coincide con el elemento correcto y reconocer cuándo la cascada o la herencia están modificando una declaración.


También permite escribir estilos reutilizables. En lugar de repetir propiedades en cada elemento, se pueden agrupar reglas mediante clases y aprovechar la herencia para los valores compartidos. Esto reduce duplicaciones y hace que los cambios visuales sean más predecibles.


Estos conceptos se utilizan antes de trabajar con técnicas como [Flexbox](https://lineadecodigo.com/css/flexbox/), [Grid](https://lineadecodigo.com/css/grid/), [media queries](https://lineadecodigo.com/css/media-queries/), animaciones o variables personalizadas. Todas ellas conservan la misma estructura de reglas, propiedades y valores, y siguen participando en la cascada.


## Ejemplo de Básicos CSS


El siguiente ejemplo reúne una regla por elemento, una regla por clase, varias propiedades, valores con distintas unidades y un comentario:


```css
/* Estilos generales del documento */
body {
  color: #1f2937;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.tarjeta {
  width: 90%;
  max-width: 32rem;
  margin: 2rem auto;
  padding: 1.25rem;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
}

.tarjeta__titulo {
  margin-top: 0;
  color: #1d4ed8;
}

.tarjeta__enlace {
  color: #1d4ed8;
  text-decoration: none;
}

.tarjeta__enlace:hover {
  text-decoration: underline;
}
```


La regla de `body` establece valores generales. `color`, `font-family` y `line-height` son propiedades heredables, por lo que los elementos descendientes las reciben salvo que otra regla las sustituya.


`.tarjeta`, `.tarjeta__titulo` y `.tarjeta__enlace` son selectores de clase. La tarjeta combina dimensiones, margen, relleno, fondo y borde. El valor porcentual de `width` permite que se adapte al espacio disponible, mientras que `max-width` limita su anchura máxima.


El selector `.tarjeta__enlace:hover` incluye la pseudoclase `:hover`, que solo coincide cuando el puntero está sobre el enlace. Como su selector es más específico que `.tarjeta__enlace`, puede cambiar `text-decoration` durante ese estado sin modificar el color definido en la regla anterior.

