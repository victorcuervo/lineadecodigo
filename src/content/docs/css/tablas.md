---
title: "Tablas"
description: "Aprende a diseñar tablas CSS legibles y responsive con bordes, espaciado, columnas, filas alternas y desbordamiento horizontal mediante un ejemplo."
date: 2026-09-22
updatedDate: 2026-09-23
tags: ["table","td","border","nth-child"]
slug: css/tablas
type: category
topic: css
id: 3e3a9dfb-adca-8013-af07-c9d9d5643a19
author: victor_cuervo
---

## ¿Qué son las Tablas CSS?


Las **tablas** [**CSS**](https://lineadecodigo.com/css/) son tablas de datos cuya presentación visual se controla mediante [hojas de estilo](https://lineadecodigo.com/css/). [CSS](https://lineadecodigo.com/css/) permite definir el ancho, los bordes, el espaciado, la alineación, los colores y el comportamiento responsive de las filas, columnas y celdas sin alterar los datos que contienen.


La estructura de una tabla pertenece al documento: se organiza en una tabla, grupos de encabezado y cuerpo, filas, celdas de cabecera y celdas de datos. [CSS](https://lineadecodigo.com/css/) actúa sobre esos elementos mediante selectores como `table`, `thead`, `tbody`, `tr`, `th` y `td`.


Cada celda participa en el algoritmo de distribución de la tabla. Por defecto, el navegador calcula el ancho de las columnas a partir del contenido y del espacio disponible. Propiedades como `width`, `table-layout` y `border-collapse` permiten controlar ese cálculo y la relación visual entre las celdas.


Las tablas están pensadas para información tabular, es decir, datos que se interpretan mediante la relación entre filas y columnas. No deben utilizarse como sustituto de [Grid](https://lineadecodigo.com/css/grid/) o [Flexbox](https://lineadecodigo.com/css/flexbox/) para construir la estructura general de una página.


## Características de Tablas CSS

- **Modelo de bordes:** `border-collapse: collapse` fusiona los bordes contiguos de las celdas. Con `separate`, cada celda conserva su borde y `border-spacing` controla la separación entre ellas.
- **Distribución de columnas:** `table-layout: auto` calcula los anchos según el contenido. `table-layout: fixed` utiliza el ancho de la tabla y las dimensiones declaradas, lo que produce una distribución más predecible.
- **Ancho del conjunto:** `width: 100%` permite que la tabla ocupe su contenedor. Esto no garantiza que quepa si una celda contiene una palabra, URL o valor que no puede dividirse.
- **Espaciado interno:** `padding` separa el contenido del borde de `th` y `td`. Un espaciado coherente mejora la exploración visual de filas y columnas.
- **Alineación:** `text-align` controla la alineación horizontal y `vertical-align` la posición vertical dentro de una celda. Los valores numéricos suelen alinearse a la derecha para facilitar comparaciones.
- **Filas alternas:** `:nth-child()` permite aplicar colores diferentes a filas pares o impares. Este patrón, conocido como estilo cebra, ayuda a seguir una fila en tablas anchas.
- **Estados interactivos:** `:hover` puede resaltar la fila bajo el puntero. Debe considerarse una ayuda visual adicional, no la única forma de comunicar información.
- **Encabezados fijos:** `position: sticky` puede mantener visible una fila de cabecera durante el desplazamiento, siempre que el contenedor y sus propiedades de desbordamiento sean compatibles.
- **Contenido largo:** `overflow-wrap`, `word-break`, `white-space` y `text-overflow` permiten decidir si el texto se divide, permanece en una línea o se recorta.
- **Adaptación a pantallas estrechas:** envolver la tabla en un contenedor con `overflow-x: auto` conserva la relación entre columnas y habilita desplazamiento horizontal cuando no existe espacio suficiente.

## ¿Por qué aprender Tablas CSS?


Estilizar tablas permite presentar comparaciones, precios, métricas, calendarios, inventarios y resultados de manera legible. Los bordes, el espaciado y la alineación ayudan a identificar qué encabezado corresponde a cada dato y a comparar valores sin perder la fila de referencia.


También permite controlar tablas con contenido variable. Un diseño puede reservar anchos predecibles con `table-layout: fixed`, permitir que ciertas celdas dividan texto largo y mantener otras, como importes o fechas, en una sola línea.


El comportamiento responsive requiere una decisión explícita. Reducir indefinidamente las columnas suele volver ilegibles los datos. El desplazamiento horizontal conserva la estructura original; en casos concretos, una vista alternativa puede reorganizar la información, pero debe mantener las relaciones y encabezados comprensibles.


Conocer el modelo de tabla ayuda a evitar soluciones frágiles. Aplicar [Flexbox](https://lineadecodigo.com/css/flexbox/) a filas o celdas puede romper el cálculo coordinado de columnas. Es preferible conservar el modelo tabular y usar [CSS](https://lineadecodigo.com/css/) sobre la tabla o dentro del contenido de una celda cuando se necesita una alineación adicional.


La presentación visual complementa, pero no sustituye, una estructura correcta. Los encabezados y asociaciones entre datos deben existir en el documento para que la tabla sea comprensible con tecnologías de asistencia y para que [CSS](https://lineadecodigo.com/css/) pueda mantener una jerarquía visual coherente.


## Ejemplo de Tablas CSS


Este ejemplo crea una tabla con bordes unificados, columnas predecibles, filas alternas y desplazamiento horizontal en pantallas estrechas. Se presupone que la tabla está dentro de un contenedor con la clase `.tabla-responsive`.


```css
.tabla-responsive {
  width: 100%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}

.tabla-datos {
  width: 100%;
  min-width: 42rem;
  border-collapse: collapse;
  table-layout: fixed;
  color: #1e293b;
}

.tabla-datos th,
.tabla-datos td {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  text-align: left;
  vertical-align: top;
  overflow-wrap: anywhere;
}

.tabla-datos thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #e2e8f0;
  font-weight: 700;
}

.tabla-datos tbody tr:nth-child(even) {
  background-color: #f8fafc;
}

.tabla-datos tbody tr:hover {
  background-color: #eef2ff;
}

.tabla-datos .columna-numero {
  width: 8rem;
  text-align: right;
  white-space: nowrap;
}
```


El contenedor permite desplazarse horizontalmente cuando la tabla, cuyo ancho mínimo es `42rem`, no cabe en la pantalla. De este modo, las columnas no se comprimen hasta volver ilegible el contenido.


`border-collapse: collapse` convierte los bordes contiguos en una sola línea. `table-layout: fixed` hace predecible el reparto del ancho y evita que una celda extensa controle por sí sola toda la distribución. `overflow-wrap: anywhere` permite dividir cadenas largas dentro de las celdas.


La cabecera utiliza `position: sticky` para permanecer visible al desplazarse en un contenedor con altura limitada o en la página, según el contexto. Necesita un color de fondo y un `z-index` para no mezclarse visualmente con las filas que pasan por debajo.


La pseudoclase `:nth-child(even)` aplica el estilo cebra únicamente a las filas del cuerpo. La clase `.columna-numero` reserva un ancho concreto, alinea los valores a la derecha y evita que cifras cortas se dividan en varias líneas.

