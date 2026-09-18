---
title: "Texto"
description: "Consulta cómo dar formato al texto CSS con fuentes, tamaños, alineación, altura de línea, espaciado y decoración mediante ejemplos prácticos."
date: 2026-01-17
updatedDate: 2026-09-18
tags: ["font-family","font-size","text-align","text-decoration"]
slug: css/texto
type: category
topic: css
id: 2eba9dfb-adca-80f0-a08c-ec7042d6dd90
author: victor_cuervo
---

## ¿Qué es Texto CSS?


El **texto CSS** es el conjunto de propiedades que controla la presentación tipográfica del contenido: familia de fuente, tamaño, peso, altura de línea, alineación, espaciado y decoración. [CSS](https://lineadecodigo.com/css/) modifica la apariencia del texto sin cambiar su significado ni su contenido.


Las propiedades tipográficas se dividen principalmente en dos grupos. Las propiedades `font-*`, como `font-family`, `font-size` y `font-weight`, configuran la fuente. Las propiedades `text-*`, como `text-align`, `text-decoration` y `text-transform`, controlan el formato y la distribución del texto dentro de su contenedor.


Muchas de estas propiedades se **heredan**. Esto significa que un elemento puede recibir valores definidos en un antecesor. Por ejemplo, si se establece `font-family` en el contenedor principal, los párrafos y encabezados suelen utilizar esa fuente salvo que una regla más específica indique otra.


El navegador también aplica la cascada para decidir qué declaración prevalece cuando varias reglas afectan al mismo texto. La especificidad del selector y el orden de las reglas influyen en el resultado final.


## Características de Texto CSS

- **Familia tipográfica:** `font-family` define una lista ordenada de fuentes. Conviene terminar con una familia genérica, como `sans-serif` o `serif`, para disponer de una alternativa si las fuentes anteriores no están instaladas.
- **Tamaño y escala:** `font-size` acepta unidades absolutas y relativas. Las unidades `rem` y `em` facilitan escalas adaptables; `rem` toma como referencia el tamaño raíz y `em`, el tamaño calculado del elemento o de su contexto según la propiedad.
- **Peso y estilo:** `font-weight` controla el grosor y `font-style` permite, entre otros valores, aplicar cursiva. El resultado real depende de las variantes disponibles en la fuente utilizada.
- **Altura de línea:** `line-height` determina el espacio vertical de cada línea. Un valor sin unidad, como `1.6`, suele ser práctico porque se calcula en relación con el tamaño de fuente de cada elemento.
- **Alineación:** `text-align` distribuye el contenido en línea dentro de su bloque. Valores como `start` y `end` se adaptan a la dirección de escritura, mientras que `left` y `right` fijan un lado físico.
- **Espaciado:** `letter-spacing` modifica la separación entre caracteres y `word-spacing`, la separación entre palabras. Deben ajustarse con moderación para no perjudicar la legibilidad.
- **Decoración y transformación:** `text-decoration` añade líneas como subrayado o tachado. `text-transform` cambia la presentación a mayúsculas, minúsculas o capitalización sin modificar el texto original.
- **Control de líneas largas:** `overflow-wrap: break-word` permite dividir palabras extensas cuando podrían desbordar el contenedor. Esta propiedad resulta útil para direcciones y cadenas sin espacios.

## ¿Por qué aprender Texto CSS?


Controlar el texto permite construir una jerarquía visual comprensible. El tamaño, el peso y el espaciado ayudan a diferenciar títulos, entradillas, párrafos y contenido auxiliar sin alterar la estructura del documento.


Una configuración tipográfica coherente también mejora la lectura. La combinación de un tamaño suficiente, una altura de línea proporcionada y un ancho de lectura razonable reduce el esfuerzo necesario para seguir párrafos extensos. En cambio, un contraste bajo, un interlineado reducido o un espaciado excesivo pueden dificultar la comprensión.


Estas propiedades permiten centralizar decisiones de diseño. Definir la familia y el color en un contenedor aprovecha la herencia, mientras que las clases específicas resuelven variaciones concretas. Así se evita repetir declaraciones y se mantiene una apariencia consistente.


El texto está relacionado con el diseño adaptable y la accesibilidad. Las unidades relativas respetan mejor los ajustes de tamaño del usuario, y las alineaciones lógicas funcionan en idiomas con distintas direcciones de escritura. Las decoraciones tampoco deben eliminarse de enlaces sin ofrecer otra señal visual clara que permita reconocerlos.


## Ejemplo de Texto CSS


Este ejemplo configura la tipografía de un bloque de contenido y diferencia el título, la introducción, los párrafos y los enlaces:


```css
.articulo {
  max-width: 65ch;
  margin-inline: auto;
  color: #1f2937;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
}

.articulo__titulo {
  margin-block: 0 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: start;
}

.articulo__introduccion {
  font-size: 1.125rem;
  color: #4b5563;
}

.articulo p {
  margin-block: 0 1rem;
  overflow-wrap: break-word;
}

.articulo a {
  color: #1d4ed8;
  text-decoration-line: underline;
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.15em;
}

.articulo a:hover,
.articulo a:focus-visible {
  text-decoration-thickness: 0.18em;
}
```


La clase `.articulo` establece las propiedades compartidas. La familia, el color, el tamaño y la altura de línea se heredan, por lo que no es necesario repetirlas en cada párrafo. `max-width: 65ch` limita aproximadamente la medida del texto según el ancho del carácter `0` de la fuente, lo que ayuda a evitar líneas demasiado largas.


El título utiliza un tamaño mayor, más peso y una altura de línea menor porque normalmente ocupa pocas líneas. El valor negativo de `letter-spacing` compacta ligeramente sus caracteres; es un ajuste visual que debe comprobarse con la fuente real.


La introducción aumenta de tamaño y cambia de color para diferenciarse sin recurrir únicamente a la negrita. Los enlaces conservan un subrayado visible y lo refuerzan al pasar el puntero o recibir el foco del teclado. De este modo, el formato comunica que son interactivos sin depender solo del color.

