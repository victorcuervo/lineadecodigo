---
title: "Media Queries"
description: "Aprende a usar Media Queries CSS con breakpoints, condiciones de viewport, preferencias del usuario e impresión para crear diseños responsive y accesibles."
date: 2026-01-17
updatedDate: 2026-09-23
tags: ["mediaquery","responsive","print","width"]
slug: css/media-queries
type: category
topic: css
id: 2eba9dfb-adca-80b4-a335-fe9363cb4e5d
author: victor_cuervo
---

## ¿Qué es Media Queries CSS?


Las **Media Queries** son reglas condicionales de [CSS](https://lineadecodigo.com/css/) que aplican estilos únicamente cuando el entorno de visualización cumple unos criterios. Se escriben mediante `@media` y permiten consultar características como el ancho del viewport, la orientación, la resolución, el tipo de puntero o determinadas preferencias del usuario.


El **viewport** es el área del navegador donde se representa la página. Una consulta puede comprobar, por ejemplo, si su ancho alcanza `48rem`. Cuando la condición es verdadera, el navegador incorpora las declaraciones incluidas en la regla; cuando es falsa, las ignora.


También existen tipos de medio. `screen` se refiere principalmente a pantallas, `print` a la impresión y `all` a cualquier medio. No obstante, muchas consultas modernas omiten el tipo y se centran en características concretas del entorno.


## Características de Media Queries CSS

- **Condiciones evaluadas por el navegador:** expresiones como `(width >= 48rem)` o `(orientation: landscape)` producen un resultado verdadero o falso y pueden cambiar mientras se redimensiona la ventana o gira el dispositivo.
- **Operadores lógicos:** `and` exige que se cumplan varias condiciones, `not` niega una consulta y la coma separa alternativas equivalentes a un «o» lógico.
- **Rangos de viewport:** `min-width` y `max-width` tienen una compatibilidad muy amplia. La sintaxis moderna de rangos permite escribir comparaciones como `(width >= 48rem)` de forma más directa.
- **Estrategia mobile-first:** consiste en definir primero los estilos para espacios reducidos y añadir mejoras con consultas de ancho mínimo. Reduce anulaciones y mantiene una base funcional para cualquier viewport.
- **Breakpoints basados en el contenido:** un breakpoint es el punto donde el diseño necesita cambiar. Conviene elegirlo cuando el contenido deja de caber o de leerse correctamente, no según modelos concretos de dispositivos.
- **Capacidades de interacción:** características como `hover` y `pointer` distinguen si el mecanismo principal puede pasar sobre un elemento o si tiene precisión fina. No identifican un dispositivo específico.
- **Preferencias del usuario:** `prefers-reduced-motion`, `prefers-color-scheme` y `prefers-contrast` permiten respetar ajustes del sistema relacionados con movimiento, tema y contraste.
- **Estilos de impresión:** `@media print` puede ocultar controles innecesarios, ajustar colores y eliminar elementos de navegación al imprimir.
- **Cascada normal:** las reglas internas mantienen la especificidad habitual de [CSS](https://lineadecodigo.com/css/). Si dos reglas aplicables compiten, la especificidad y el orden de aparición siguen determinando cuál prevalece.

## ¿Por qué aprender Media Queries CSS?


Las Media Queries permiten reorganizar una interfaz cuando cambia el espacio disponible. Una lista de tarjetas puede mostrarse en una columna en una pantalla estrecha y pasar a varias columnas cuando existe anchura suficiente. Esto evita texto comprimido, desplazamiento horizontal y controles difíciles de utilizar.


También permiten adaptar la experiencia a capacidades que no dependen del tamaño. Un dispositivo táctil puede necesitar áreas pulsables mayores, mientras que una persona que haya reducido las animaciones en el sistema debería recibir transiciones menos intensas o ninguna animación decorativa.


Separar los estilos base de las mejoras condicionales facilita el mantenimiento. Las reglas generales resuelven la presentación común y cada consulta introduce únicamente el cambio necesario. Esta técnica se combina con unidades relativas, diseños flexibles e imágenes adaptables para construir interfaces responsive sin asumir dimensiones fijas.


## Ejemplo de Media Queries CSS


```css
.lista-productos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.tarjeta-producto {
  padding: 1rem;
  border: 1px solid #cbd5e1;
  transition: transform 180ms ease;
}

@media (width >= 48rem) {
  .lista-productos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (width >= 75rem) {
  .lista-productos {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (hover: hover) and (pointer: fine) {
  .tarjeta-producto:hover {
    transform: translateY(-0.25rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tarjeta-producto {
    transition: none;
  }
}

@media print {
  .lista-productos {
    display: block;
  }

  .tarjeta-producto {
    break-inside: avoid;
    border-color: #000;
  }
}
```


Los estilos base muestran una sola columna, por lo que funcionan en viewports estrechos sin depender de una consulta. A partir de `48rem`, la lista utiliza dos columnas; desde `75rem`, utiliza tres. Los puntos de cambio se expresan en `rem` para relacionarlos con la escala tipográfica configurada por el usuario.


El efecto de elevación solo se activa cuando el mecanismo principal admite `hover` y dispone de un puntero preciso. La consulta `prefers-reduced-motion` elimina la transición si el usuario ha solicitado menos movimiento. Por último, la regla de impresión convierte la lista en bloques y evita, cuando es posible, que una tarjeta se divida entre dos páginas.

