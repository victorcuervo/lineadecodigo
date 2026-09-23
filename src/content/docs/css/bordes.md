---
title: "Bordes"
description: "Domina los bordes CSS: grosor, estilos, color, esquinas redondeadas, imágenes y efectos para delimitar componentes sin alterar su accesibilidad."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["border","border-style","border-radius","border-color"]
slug: css/bordes
type: category
topic: css
id: 3e3a9dfb-adca-8080-954f-d1922fa1de97
author: victor_cuervo
---

## ¿Qué son los Bordes CSS?


Los **bordes CSS** son líneas dibujadas alrededor de la caja de un elemento, entre su relleno (`padding`) y su margen (`margin`). Permiten delimitar componentes, separar regiones y comunicar estados visuales mediante un grosor, un estilo y un color.


La propiedad abreviada `border` reúne esos tres componentes. Por ejemplo, `border: 1px solid #64748b` define un borde de un píxel, continuo y gris. Si `border-style` conserva su valor inicial `none`, el borde no se dibuja aunque se hayan indicado un ancho y un color.


El borde forma parte del [modelo de caja](https://lineadecodigo.com/css/box-model/) de [CSS](https://lineadecodigo.com/css/). Con `box-sizing: content-box`, su grosor se añade al ancho y al alto declarados; con `box-sizing: border-box`, queda incluido dentro de esas dimensiones. Esta diferencia afecta al tamaño final que ocupa el elemento.


## Características de Bordes CSS

- **Propiedades abreviadas y específicas:** `border` configura los cuatro lados. `border-width`, `border-style` y `border-color` permiten cambiar cada componente, mientras que `border-top`, `border-right`, `border-bottom` y `border-left` controlan lados concretos.
- **Estilos disponibles:** los más habituales son `solid`, `dashed`, `dotted` y `double`. También existen `groove`, `ridge`, `inset` y `outset`, cuyo efecto depende del color y de la representación del navegador.
- **Color heredable de forma explícita:** `currentColor` toma el valor calculado de la propiedad `color`. Resulta útil para mantener el borde sincronizado con el texto o con el estado de un componente.
- **Bordes lógicos:** propiedades como `border-inline-start` y `border-block-end` se adaptan a la dirección de escritura. Son preferibles cuando una interfaz debe funcionar tanto de izquierda a derecha como de derecha a izquierda.
- **Esquinas redondeadas:** `border-radius` redondea las esquinas aunque no exista un borde visible. Puede recibir uno o varios radios; la barra inclinada permite definir radios horizontales y verticales para crear curvas elípticas.
- **Contenido y recorte:** una esquina redondeada modifica el fondo y el borde, pero no recorta por sí sola todos los descendientes. Si una imagen hija debe respetar la curva del contenedor, puede ser necesario aplicar el mismo radio o utilizar `overflow: hidden` con cuidado.
- **Imágenes como borde:** `border-image` divide y coloca una imagen alrededor de la caja. Requiere que exista un ancho de borde y es apropiada para marcos decorativos, no para separadores sencillos.
- **Bordes y sombras:** `box-shadow` puede reforzar la profundidad visual, pero no sustituye al borde ni altera el modelo de caja. Una sombra puede ser exterior o interior mediante la palabra clave `inset`.
- **Diferencia respecto a** **`outline`****:** el contorno se dibuja fuera del borde y no ocupa espacio. Suele utilizarse para indicar el foco del teclado; eliminarlo sin proporcionar una alternativa visible perjudica la accesibilidad.

## ¿Por qué aprender a manejar Bordes CSS?


Los bordes permiten expresar la estructura de una interfaz sin añadir elementos de presentación al documento. Sirven para separar tarjetas, remarcar avisos, delimitar campos de formulario o diferenciar estados como error, selección y foco.


Comprender su relación con el modelo de caja evita desajustes de tamaño. Un elemento con `width: 100%` puede desbordar su contenedor si usa `content-box` y después recibe relleno y bordes. Aplicar `border-box` hace que esos valores formen parte del ancho declarado y vuelve más predecible la composición.


También es útil distinguir entre borde, sombra y contorno. El borde define el límite de la caja; la sombra aporta profundidad sin ocupar espacio; y el contorno proporciona una señal de foco que debe permanecer perceptible. Elegir cada recurso por su función mejora la claridad visual y evita depender únicamente del color para comunicar estados.


## Ejemplo de Bordes CSS


```css
* {
  box-sizing: border-box;
}

.tarjeta {
  max-width: 28rem;
  padding: 1.25rem;
  color: #1e293b;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-inline-start: 0.35rem solid #2563eb;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1.25rem rgb(15 23 42 / 0.08);
}

.tarjeta__campo {
  width: 100%;
  padding: 0.75rem;
  color: inherit;
  background: #ffffff;
  border: 2px solid #94a3b8;
  border-radius: 0.4rem;
}

.tarjeta__campo:hover {
  border-color: #475569;
}

.tarjeta__campo:focus-visible {
  border-color: #2563eb;
  outline: 3px solid rgb(37 99 235 / 0.3);
  outline-offset: 2px;
}

.tarjeta__campo[aria-invalid="true"] {
  border-color: #b91c1c;
  border-style: dashed;
}
```


La regla universal aplica `border-box`, por lo que el relleno y los bordes quedan incluidos en las dimensiones declaradas. La tarjeta utiliza un borde neutro en los cuatro lados y uno más grueso en el inicio del eje en línea. Al ser una propiedad lógica, ese acento cambia de lado automáticamente cuando cambia la dirección de escritura.


El campo modifica el color del borde durante la interacción. `:focus-visible` añade un contorno exterior que no cambia el tamaño de la caja y permite localizar el foco del teclado. El estado indicado mediante `aria-invalid="true"` combina color y estilo discontinuo, de modo que el error no se comunica únicamente mediante una diferencia cromática.

