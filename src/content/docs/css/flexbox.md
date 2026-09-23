---
title: "Flexbox"
description: "Comprende Flexbox CSS: contenedores, ejes, alineación, distribución y crecimiento flexible, con un ejemplo responsive explicado paso a paso."
date: 2026-01-17
updatedDate: 2026-09-23
tags: ["flexbox","flex-direction","justify-content","responsive"]
slug: css/flexbox
type: category
topic: css
id: 2eba9dfb-adca-8012-8999-fbffff56ea53
author: victor_cuervo
---

## ¿Qué es Flexbox CSS?


**Flexbox CSS** es un modelo de distribución unidimensional que organiza elementos en una fila o en una columna. Permite repartir el espacio disponible, alinear componentes y adaptar sus tamaños sin depender de posiciones o medidas rígidas.


El modelo se activa con `display: flex` o `display: inline-flex` sobre un elemento. Este pasa a ser el **contenedor flexible**, mientras que sus hijos directos se convierten en **elementos flexibles**. Las propiedades del contenedor controlan la dirección, la alineación y la posibilidad de crear varias líneas; las propiedades de los elementos determinan cómo crecen, se encogen o cambian de orden.


Flexbox trabaja con dos ejes. El **eje principal** sigue la dirección establecida por `flex-direction`, y el **eje transversal** lo cruza de forma perpendicular. Si la dirección es `row`, el eje principal suele ser horizontal; si es `column`, es vertical. Esta distinción permite entender qué eje controla cada propiedad de alineación.


Es un sistema adecuado para componentes y distribuciones en una dimensión: barras de navegación, grupos de botones, cabeceras, formularios, tarjetas o elementos centrados. Para estructuras que necesitan controlar filas y columnas a la vez, [CSS Grid](https://lineadecodigo.com/css/grid/) suele ser más apropiado.


## Características de Flexbox CSS

- **Dirección del flujo:** `flex-direction` acepta `row`, `row-reverse`, `column` y `column-reverse`. La dirección también afecta al significado de eje principal y transversal.
- **Distribución en el eje principal:** `justify-content` reparte el espacio libre con valores como `flex-start`, `center`, `space-between` o `space-evenly`.
- **Alineación transversal:** `align-items` alinea todos los elementos de una línea. `align-self` permite modificar la alineación de un elemento concreto.
- **Salto de línea:** `flex-wrap: wrap` permite que los elementos pasen a nuevas líneas cuando no caben. Sin esta regla, el valor inicial `nowrap` intenta mantenerlos en una sola línea.
- **Separación uniforme:** `gap` establece espacio entre elementos y entre líneas sin añadir márgenes exteriores al contenedor.
- **Crecimiento y contracción:** `flex-grow` indica cómo se reparte el espacio sobrante y `flex-shrink` cuánto puede reducirse cada elemento cuando falta espacio.
- **Tamaño base:** `flex-basis` establece el tamaño inicial sobre el eje principal antes de distribuir el espacio. La abreviatura `flex` combina crecimiento, contracción y tamaño base.
- **Orden visual:** `order` cambia la posición visual de un elemento, pero no modifica el orden lógico del documento. Por accesibilidad, no debe utilizarse para corregir una estructura de contenido incorrecta.
- **Varias líneas:** `align-content` distribuye las líneas completas sobre el eje transversal y solo tiene efecto cuando existen varias líneas y queda espacio libre.
- **Tamaños mínimos:** los elementos flexibles pueden conservar un tamaño mínimo basado en su contenido. `min-width: 0` o `min-height: 0` resulta útil cuando un hijo debe encogerse y su contenido provoca desbordamiento.

## ¿Por qué aprender Flexbox CSS?


Flexbox resuelve alineaciones frecuentes con pocas reglas. Permite centrar un elemento en ambos ejes, separar los extremos de una cabecera, mantener controles alineados o distribuir un grupo de tarjetas aunque sus contenidos tengan tamaños distintos.


Su flexibilidad reduce la necesidad de calcular anchos manualmente. Los elementos pueden ocupar el espacio sobrante, conservar un tamaño base y pasar a otra línea cuando el contenedor se estrecha. Esto facilita construir componentes responsive que reaccionan al espacio real disponible.


También mejora el mantenimiento del código. La relación entre el contenedor y sus hijos expresa directamente la intención del diseño: dirección, separación, alineación y reparto de espacio. No hace falta simular estas tareas con `float`, márgenes calculados o posicionamiento absoluto.


Comprender los ejes ayuda a evitar errores habituales. `justify-content` no significa siempre alineación horizontal, y `align-items` no significa siempre alineación vertical: ambos dependen de `flex-direction`. Esta idea es esencial para predecir el resultado antes de modificar valores por prueba y error.


Flexbox se complementa con el modelo de caja, las unidades relativas, las media queries y [CSS Grid](https://lineadecodigo.com/css/grid/). Una interfaz puede usar [Grid](https://lineadecodigo.com/css/grid/) para la estructura general y Flexbox dentro de cada componente, sin que ambos sistemas compitan entre sí.


## Ejemplo de Flexbox CSS


Este ejemplo crea un grupo de tarjetas adaptable. Las tarjetas parten de un ancho de `16rem`, pueden crecer para ocupar el espacio libre y saltan a otra línea cuando dejan de caber.


```css
.lista-tarjetas {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
}

.tarjeta {
  display: flex;
  flex: 1 1 16rem;
  flex-direction: column;
  min-width: 0;
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
}

.tarjeta__contenido {
  flex-grow: 1;
}

.tarjeta__acciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}
```


La clase `.lista-tarjetas` es el contenedor principal. `flex-wrap: wrap` permite formar nuevas filas y `gap` mantiene una separación constante. `align-items: stretch`, que coincide con el comportamiento inicial, hace que las tarjetas de una misma línea tengan la misma altura cuando no se les asigna otra altura.


La abreviatura `flex: 1 1 16rem` indica que cada tarjeta puede crecer, puede encogerse y parte de un tamaño base de `16rem`. El resultado no fija un número concreto de columnas: el navegador crea las que caben según el ancho del contenedor.


Cada tarjeta también es un contenedor flexible con dirección vertical. `flex-grow: 1` hace que el contenido central ocupe el espacio disponible y empuje las acciones hacia la parte inferior. Dentro de las acciones, `justify-content: flex-end` coloca los controles al final del eje principal, que en este caso es horizontal.

