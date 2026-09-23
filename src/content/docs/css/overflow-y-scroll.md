---
title: "Overflow y Scroll"
description: "Domina Overflow y Scroll CSS: controla desbordamiento, recorte, barras y desplazamiento por ejes con propiedades actuales y un ejemplo práctico."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["css","overflow","scroll","scrollbar","scrolling"]
slug: css/overflow-y-scroll
type: category
topic: css
id: 3e3a9dfb-adca-8055-ad6f-da89abd3d177
author: victor_cuervo
---

## ¿Qué es Overflow y Scroll CSS?


**Overflow y Scroll CSS** son los mecanismos que controlan qué ocurre cuando el contenido supera el espacio disponible de una caja. El desbordamiento puede permanecer visible, recortarse o convertirse en contenido desplazable mediante barras de scroll u otros métodos de desplazamiento.


Para que exista un desbordamiento controlable, la caja necesita normalmente una restricción de tamaño en el eje correspondiente. Por ejemplo, `max-height` puede limitar la altura de un panel y `overflow-y: auto` añade desplazamiento vertical solo cuando el contenido excede ese límite.


La propiedad abreviada `overflow` actúa sobre ambos ejes. `overflow-x` controla el eje horizontal y `overflow-y` el vertical. En modos de escritura distintos del horizontal occidental también pueden utilizarse las propiedades lógicas `overflow-inline` y `overflow-block`.


Una **caja de desplazamiento** o _scroll container_ es un elemento cuyo contenido puede moverse dentro de una zona visible. La parte que se muestra se denomina puerto de desplazamiento. El contenido sigue existiendo aunque una parte quede fuera de esa zona.


## Características de Overflow y Scroll CSS

- **Contenido visible:** `overflow: visible` es el valor inicial. El contenido puede dibujarse fuera de la caja y superponerse a otros elementos; no se crea un contenedor de scroll.
- **Recorte con desplazamiento interno:** `overflow: hidden` oculta lo que queda fuera. No muestra barras, pero la caja sigue siendo un contenedor desplazable y puede moverse mediante controles internos o programación.
- **Recorte estricto:** `overflow: clip` corta el contenido y no crea un contenedor de scroll. `overflow-clip-margin` puede ampliar la zona hasta la que se permite dibujar antes del recorte.
- **Barras permanentes:** `overflow: scroll` crea el mecanismo de desplazamiento aunque no exista desbordamiento. La forma exacta de las barras depende del navegador y del sistema operativo.
- **Barras según necesidad:** `overflow: auto` deja que el navegador muestre el desplazamiento solo cuando hace falta. Suele ser la opción adecuada para paneles con tamaño limitado.
- **Control por ejes:** `overflow-x` y `overflow-y` permiten tratar cada dirección por separado. Ocultar un eje sin revisar el contenido puede volver inaccesible una parte de la interfaz.
- **Espacio reservado:** `scrollbar-gutter: stable` reserva espacio para la barra y reduce cambios de ancho cuando aparece o desaparece. `stable both-edges` puede reservarlo en ambos lados.
- **Encadenamiento del scroll:** `overscroll-behavior` controla si, al llegar al límite de un panel, el desplazamiento continúa en un contenedor exterior. El valor `contain` evita ese encadenamiento sin bloquear el scroll interno.
- **Desplazamiento suave:** `scroll-behavior: smooth` suaviza desplazamientos iniciados por navegación o APIs. Debe respetarse la preferencia `prefers-reduced-motion` para no forzar movimiento a quien lo ha reducido.
- **Ajuste a puntos:** `scroll-snap-type` define un eje de ajuste y `scroll-snap-align` marca las posiciones de los elementos. Resulta útil en galerías desplazables, pero un ajuste demasiado estricto puede dificultar la navegación.
- **Elementos flexibles y de Grid:** un hijo puede negarse a encoger por su tamaño mínimo automático. `min-width: 0` o `min-height: 0` suele ser necesario para que el desbordamiento se gestione en el elemento esperado.

## ¿Por qué aprender Overflow y Scroll CSS?


Gestionar el desbordamiento evita que textos, imágenes, tablas o bloques de código rompan el diseño. Permite mantener dimensiones útiles sin eliminar contenido y elegir si conviene recortarlo, dividirlo o hacerlo desplazable.


Los paneles con scroll aparecen en menús, historiales, tablas extensas, editores, cuadros de diálogo y galerías horizontales. Elegir el eje correcto evita barras innecesarias y conserva el movimiento principal de la página.


Comprender la diferencia entre `hidden` y `clip` evita errores sutiles. Ambos ocultan contenido, pero solo `hidden` mantiene una caja desplazable. Esta diferencia afecta a los elementos enfocados, los enlaces internos y cualquier acción que intente mover la posición del scroll.


Propiedades como `scrollbar-gutter` y `overscroll-behavior` mejoran la estabilidad y la interacción. La primera evita saltos cuando aparece una barra; la segunda impide que el desplazamiento pase accidentalmente del panel a la página.


El scroll también tiene implicaciones de accesibilidad. Una zona desplazable debe poder utilizarse con teclado y tecnologías de asistencia, mostrar una señal clara de que contiene más información y evitar la ocultación visual de barras cuando son necesarias para descubrir el desplazamiento.


## Ejemplo de Overflow y Scroll CSS


Este ejemplo crea un historial con altura limitada, desplazamiento vertical y cabecera fija. La barra aparece solo si el contenido supera el tamaño máximo y se reserva su espacio para evitar cambios de ancho.


```css
.historial {
  max-block-size: 22rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  overscroll-behavior-y: contain;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  background-color: #ffffff;
}

.historial__cabecera {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #cbd5e1;
  background-color: #f8fafc;
}

.historial__lista {
  margin: 0;
  padding: 0;
  list-style: none;
}

.historial__elemento {
  padding: 0.75rem 1rem;
  overflow-wrap: anywhere;
}

.historial__elemento + .historial__elemento {
  border-top: 1px solid #e2e8f0;
}

.enlace-interno {
  scroll-margin-block: 4rem;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```


La propiedad `max-block-size: 22rem` limita el tamaño de la caja en el eje de bloque, que normalmente corresponde a la altura. `overflow-y: auto` activa el desplazamiento vertical solo cuando es necesario, mientras `overflow-x: hidden` evita una barra horizontal causada por pequeños excesos visuales.


`scrollbar-gutter: stable` reserva el espacio de la barra incluso cuando no está visible. `overscroll-behavior-y: contain` impide que la rueda o el gesto continúen desplazando la página al alcanzar el principio o el final del historial.


La cabecera permanece dentro del panel gracias a `position: sticky`. Necesita un fondo opaco y un `z-index` para que los elementos desplazados no se vean por debajo.


Vemos que `overflow-wrap: anywhere` divide cadenas largas antes de que generen desbordamiento horizontal. `scroll-margin-block` deja espacio al llevar un objetivo a la vista, lo que evita que una cabecera fija lo tape. La media query elimina el desplazamiento suave cuando el usuario ha solicitado reducir el movimiento.

