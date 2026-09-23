---
title: "Unidades y Medidas"
description: "Comprende las unidades y medidas CSS: px, %, em, rem, vw, vh y funciones fluidas para definir tamaños, espacios y proporciones responsive."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["rem","font-size","width","responsive"]
slug: css/unidades-y-medidas
type: category
topic: css
id: 3e3a9dfb-adca-803e-9ff1-f70ffd655b4b
author: victor_cuervo
---

## ¿Qué es Unidades y Medidas CSS?


Las **unidades y medidas CSS** son los valores que expresan dimensiones, distancias y proporciones dentro de una hoja de estilos. Se utilizan en propiedades como `width`, `height`, `margin`, `padding`, `font-size` o `gap` para determinar el tamaño y la separación de los elementos.


Una medida suele combinar un número y una unidad, por ejemplo `16px`, `1.5rem` o `50vw`. El valor `0` puede escribirse sin unidad porque representa una ausencia de longitud. Los porcentajes, como `80%`, no son unidades de longitud en sentido estricto, pero permiten calcular valores relativos a una referencia que depende de cada propiedad.


Las unidades pueden ser **absolutas** o **relativas**. Las absolutas mantienen una relación fija con la unidad de referencia; las relativas se calculan a partir del tamaño de la fuente, del contenedor o del área visible del navegador. Elegir una u otra determina cómo se adapta el diseño cuando cambian la pantalla, el contenido o las preferencias del usuario.


## Características de Unidades y Medidas CSS

- **`px`** **(píxel CSS):** es una unidad de referencia útil para bordes, sombras y detalles que necesitan un tamaño estable. Un píxel CSS no equivale necesariamente a un píxel físico de la pantalla, ya que el navegador puede aplicar escalado.
- **`%`** **(porcentaje):** calcula una proporción respecto a otra medida. La referencia varía según la propiedad: el ancho suele depender del bloque contenedor, mientras que el tamaño de fuente porcentual depende de la fuente heredada.
- **`em`****:** se relaciona con el tamaño de fuente. En `font-size`, toma como referencia el tamaño calculado del elemento padre; en la mayoría de las demás propiedades, usa el tamaño de fuente del propio elemento. Puede producir escalado acumulativo en elementos anidados.
- **`rem`****:** se calcula respecto al tamaño de fuente del elemento raíz (`html`). Facilita una escala coherente para tipografía y espacios sin depender de la profundidad del componente.
- **Unidades del viewport:** `vw` representa el 1 % del ancho del área visible y `vh`, el 1 % de su altura. Las variantes `svh`, `lvh` y `dvh` consideran los distintos tamaños del viewport en navegadores móviles, incluidos los cambios causados por sus barras de interfaz.
- **Unidades tipográficas:** `ch` aproxima el ancho del carácter «0» de la fuente y resulta útil para limitar la longitud de las líneas. `lh` equivale a la altura de línea calculada del elemento.
- **Unidades físicas:** `in`, `cm`, `mm`, `pt` y `pc` son más apropiadas para impresión. En pantalla, CSS fija su relación con el píxel de referencia; por ejemplo, `1in` equivale a `96px`.
- **Funciones de cálculo:** `calc()` combina valores compatibles; `min()` y `max()` eligen un límite; `clamp()` define un mínimo, un valor preferido y un máximo. Estas funciones permiten dimensiones fluidas sin perder control.
- **Proporciones:** `aspect-ratio` usa una razón sin unidad, como `16 / 9`, para conservar la relación entre ancho y alto. La unidad `fr`, disponible en cuadrículas, distribuye una fracción del espacio libre y no representa una longitud fija.

## ¿Por qué aprender Unidades y Medidas CSS?


Conocer la referencia de cada unidad permite diseñar interfaces que se adapten al espacio disponible en lugar de depender de dimensiones rígidas. Los porcentajes ajustan componentes al contenedor; `rem` respeta mejor los cambios globales de escala tipográfica; y las unidades del viewport conectan una medida con el tamaño de la ventana.


También ayuda a evitar problemas concretos: texto demasiado pequeño, columnas que desbordan su contenedor, líneas difíciles de leer o espacios inconsistentes entre componentes. Una medida relativa no siempre es superior a una absoluta; la elección depende de qué relación deba conservarse. Un borde puede funcionar bien con `1px`, mientras que el texto y los espacios suelen beneficiarse de `rem`.


Las funciones `min()`, `max()` y `clamp()` permiten crear escalado fluido con límites explícitos. Así, una fuente o un espacio puede crecer con la pantalla sin hacerse ilegible en dispositivos pequeños ni excesivo en monitores grandes. Estas decisiones se relacionan directamente con el diseño responsive, la accesibilidad y el modelo de caja.


## Ejemplo de Unidades y Medidas CSS


```css
:root {
  --espacio: clamp(1rem, 0.75rem + 1vw, 2rem);
  --texto: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
}

.contenedor {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
  padding-block: var(--espacio);
}

.rejilla {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 16rem), 1fr)
  );
  gap: var(--espacio);
}

.tarjeta {
  padding: 1.25rem;
  font-size: var(--texto);
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
}

.tarjeta__imagen {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.tarjeta__texto {
  max-width: 60ch;
  line-height: 1.6;
}
```


El contenedor ocupa el ancho disponible menos un margen lateral de `2rem`, pero nunca supera `70rem`. La función `min()` selecciona el menor de ambos valores, por lo que el contenido se mantiene centrado y legible en pantallas grandes y pequeñas.


Las variables `--espacio` y `--texto` emplean `clamp()`. Cada valor crece de forma gradual con el ancho del viewport, pero permanece dentro de límites expresados en `rem`. La separación y el texto conservan así una escala controlada.


En la cuadrícula, `16rem` establece un tamaño deseado para cada columna, `100%` evita que una tarjeta exceda el espacio disponible y `1fr` reparte el espacio sobrante. La imagen ocupa todo el ancho de la tarjeta y mantiene una proporción de `16 / 9`. Por último, `60ch` limita la longitud de línea del texto según la métrica de la fuente, lo que mejora su lectura.

