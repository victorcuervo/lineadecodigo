---
title: "Layout"
description: "Comprende el layout CSS con Grid y Flexbox: organiza filas, columnas y alineaciones, crea estructuras adaptables y consulta un ejemplo práctico."
date: 2026-01-17
updatedDate: 2026-09-21
tags: ["css","flexbox","responsive","display","columnas"]
slug: css/layout
type: category
topic: css
id: 2eba9dfb-adca-804f-8f91-f41cbc9a31b3
author: victor_cuervo
---

## ¿Qué son los Layout CSS?


El **layout CSS** es el conjunto de técnicas y propiedades que determina cómo se distribuyen, dimensionan y alinean los elementos de una página. Define la estructura visual: qué zonas aparecen en filas o columnas, cuánto espacio ocupan y cómo responden cuando cambia el tamaño disponible.


Todo elemento participa en un flujo de diseño. El **flujo normal** coloca los bloques uno debajo de otro y los elementos en línea dentro del texto. La propiedad `display` permite cambiar ese comportamiento y activar modelos especializados como [Flexbox](https://lineadecodigo.com/css/flexbox/) o [Grid](https://lineadecodigo.com/css/grid/).


[**Flexbox**](https://lineadecodigo.com/css/flexbox/) organiza elementos principalmente en una dimensión: una fila o una columna. [**CSS Grid**](https://lineadecodigo.com/css/grid/) controla filas y columnas al mismo tiempo, por lo que resulta adecuado para estructuras bidimensionales. Ambos trabajan con un contenedor que establece las reglas y con elementos hijos que se distribuyen dentro de él.


Un diseño adaptable combina estos modelos con unidades flexibles, límites de tamaño y media queries. Una media query aplica reglas según características del dispositivo o del área de visualización, como su ancho.


## Características de Layout CSS

- **Distintos modelos de distribución:** el flujo normal resuelve estructuras sencillas; [Flexbox](https://lineadecodigo.com/css/flexbox/) distribuye componentes en un eje; [Grid](https://lineadecodigo.com/css/grid/) crea cuadrículas de filas y columnas. Elegir el modelo adecuado evita ajustes innecesarios.
- **Ejes y alineación:** [Flexbox](https://lineadecodigo.com/css/flexbox/) distingue un eje principal y otro transversal. `justify-content` distribuye elementos sobre el eje principal y `align-items` los alinea sobre el transversal. La dirección depende de `flex-direction`.
- **Cuadrículas explícitas:** [Grid](https://lineadecodigo.com/css/grid/) define columnas y filas con `grid-template-columns` y `grid-template-rows`. La unidad `fr` reparte el espacio libre en fracciones.
- **Espaciado independiente:** `gap` añade separación entre elementos de [Grid](https://lineadecodigo.com/css/grid/) o [Flexbox](https://lineadecodigo.com/css/flexbox/) sin depender de márgenes exteriores ni exigir correcciones en los bordes del contenedor.
- **Tamaños flexibles con límites:** funciones como `minmax()` y propiedades como `min-width` o `max-width` permiten que el contenido crezca sin perder restricciones útiles.
- **Distribución automática:** `repeat()`, `auto-fit` y `auto-fill` permiten crear columnas en función del espacio disponible. Son útiles en galerías y listados de tarjetas.
- **Adaptación por contexto:** las media queries pueden cambiar la estructura cuando deja de caber con claridad, por ejemplo al convertir un diseño de dos columnas en una sola.
- **Control del desbordamiento:** `overflow` define qué ocurre si el contenido supera su caja. Antes de ocultarlo, conviene revisar tamaños mínimos, ajuste de texto y capacidad de crecimiento.
- **Posicionamiento puntual:** `position` permite desplazar o anclar elementos, pero no sustituye a [Grid](https://lineadecodigo.com/css/grid/) o [Flexbox](https://lineadecodigo.com/css/flexbox/) para la distribución general. El posicionamiento absoluto retira el elemento del flujo normal.

## ¿Por qué aprender el uso de Layout CSS?


Comprender la distribución permite convertir una estructura de contenido en una interfaz estable. Resuelve tareas como crear una cabecera con navegación, separar contenido y barra lateral, alinear controles de un formulario o presentar tarjetas con tamaños consistentes.


[Grid](https://lineadecodigo.com/css/grid/) y [Flexbox](https://lineadecodigo.com/css/flexbox/) reducen la dependencia de medidas rígidas y desplazamientos manuales. El navegador puede repartir el espacio, ajustar columnas y recolocar elementos a partir de reglas declarativas. Esto produce estilos más fáciles de mantener cuando cambia el contenido.


El layout también está relacionado con el diseño responsive. Una estructura flexible puede adaptarse de forma natural y utilizar media queries solo cuando el contenido necesita un cambio real de composición. Así se evita diseñar para una lista cerrada de dispositivos.


Dominar el flujo normal y el modelo de caja ayuda a diagnosticar problemas frecuentes: elementos que desbordan, columnas que no se encogen, espacios duplicados o alineaciones que cambian según el contenido. También permite reservar el posicionamiento absoluto para superposiciones y elementos anclados, en lugar de usarlo para construir toda la página.


## Ejemplo de Layout CSS


Este ejemplo define una página con cabecera, navegación, contenido principal, barra lateral y pie. En pantallas estrechas utiliza una sola columna; desde `48rem`, [Grid](https://lineadecodigo.com/css/grid/) crea una columna flexible y otra lateral.


```css
.pagina {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.cabecera {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
}

.navegacion {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.zona-principal {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
  width: min(100% - 2rem, 75rem);
  margin-inline: auto;
  padding-block: 1.5rem;
}

.contenido,
.barra-lateral {
  min-width: 0;
}

@media (min-width: 48rem) {
  .zona-principal {
    grid-template-columns: minmax(0, 1fr) minmax(14rem, 20rem);
    align-items: start;
  }
}
```


La clase `.pagina` utiliza tres filas: la cabecera y el pie toman la altura de su contenido, mientras `1fr` asigna al área central el espacio restante. `min-height: 100vh` mantiene el pie al final de la ventana cuando hay poco contenido.


La cabecera y la navegación usan [Flexbox](https://lineadecodigo.com/css/flexbox/) porque sus elementos se organizan en una sola dirección. `flex-wrap: wrap` permite crear una nueva línea si no caben, y `gap` mantiene una separación uniforme.


La zona principal empieza con una columna. La media query añade la barra lateral cuando existe espacio suficiente. `minmax(0, 1fr)` permite que la columna principal se encoja por debajo del tamaño mínimo implícito de su contenido, lo que ayuda a evitar desbordamientos.


La expresión `width: min(100% - 2rem, 75rem)` conserva un margen lateral en pantallas pequeñas y limita el ancho total en pantallas grandes. `margin-inline: auto` centra el conjunto sin depender de una dirección de escritura concreta.

