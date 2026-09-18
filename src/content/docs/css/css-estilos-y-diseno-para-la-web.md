---
title: "CSS - estilos y diseño para la web"
description: "Comprende cómo funciona CSS mediante selectores, cascada, box model, Flexbox, pseudoelementos y media queries, con un ejemplo práctico adaptable."
date: 2026-09-18
updatedDate: 2026-09-18
tags: ["pseudo-elemento","flexbox","mediaquery","selector"]
slug: css/css-estilos-y-diseno-para-la-web
type: category
topic: css
id: 3dfa9dfb-adca-80bc-85cb-c8d4c399c5b9
author: victor_cuervo
---

## ¿Qué es CSS?


**CSS** —siglas de _Cascading Style Sheets_ u hojas de estilo en cascada— es el lenguaje que define la presentación visual de los documentos HTML. Permite controlar colores, tipografías, espacios, tamaños, bordes, alineación y distribución de los elementos sin mezclar esas decisiones con la estructura del contenido.


Una regla CSS está formada por un **selector** y un bloque de declaraciones. El selector determina qué elementos reciben los estilos. Cada declaración contiene una propiedad y un valor, por ejemplo `color: navy`. Los selectores pueden dirigirse a etiquetas, clases, identificadores, atributos o estados concretos de un elemento.


El término _cascada_ describe el proceso que sigue el navegador para resolver reglas que compiten sobre el mismo elemento. En la decisión intervienen el origen de la regla, su importancia, la especificidad del selector y el orden en el que aparece. La **herencia** es un mecanismo relacionado: determinadas propiedades, como `color` o `font-family`, pueden transmitirse de un elemento padre a sus descendientes.


CSS trabaja junto con HTML. HTML aporta significado y estructura; CSS determina cómo se representa esa estructura en diferentes pantallas, dispositivos y contextos de uso.


## Características de CSS

- **Selectores:** permiten aplicar reglas a grupos de elementos. Las clases, escritas como `.nombre-clase`, son reutilizables; un selector como `.tarjeta .titulo` selecciona elementos con la clase `titulo` situados dentro de `tarjeta`.
- **Cascada y especificidad:** cuando varias reglas afectan a una propiedad, el navegador calcula cuál prevalece. Un selector más específico puede superar a otro menos específico, aunque conviene evitar aumentar la especificidad sin necesidad.
- **Box model:** cada elemento se representa como una caja compuesta por contenido, relleno (`padding`), borde y margen (`margin`). Con `box-sizing: border-box`, la anchura y la altura declaradas incluyen el relleno y el borde.
- **Diseño flexible:** Flexbox distribuye elementos en una dimensión, ya sea en fila o en columna. Propiedades como `display: flex`, `gap`, `justify-content` y `align-items` permiten controlar el espacio y la alineación.
- **Diseño adaptable:** las _media queries_ aplican estilos cuando se cumplen condiciones del dispositivo o del área de visualización. Se utilizan, por ejemplo, para reorganizar una interfaz al reducirse la anchura disponible.
- **Pseudoclases y pseudoelementos:** una pseudoclase como `:hover` selecciona un estado; un pseudoelemento como `::before` permite estilizar una parte conceptual o insertar contenido decorativo sin añadir otro elemento HTML.
- **Variables personalizadas:** las propiedades que empiezan por `--`, también llamadas variables CSS, almacenan valores reutilizables y participan en la cascada. Se recuperan mediante la función `var()`.

## ¿Por qué aprender CSS?


CSS permite construir interfaces legibles, coherentes y adaptables sin duplicar el contenido HTML. Una misma hoja de estilos puede aplicarse a muchas páginas, de modo que un cambio en un color, una tipografía o un patrón de espaciado se propaga de forma controlada.


Comprender la cascada, la especificidad y el box model ayuda a diagnosticar problemas frecuentes: reglas que no se aplican, componentes que ocupan más espacio del previsto o márgenes que alteran una distribución. Este conocimiento reduce la dependencia de correcciones improvisadas y de declaraciones `!important`.


Flexbox y las media queries permiten crear diseños que se ajustan a móviles, tabletas y escritorios. Los selectores y las clases facilitan la creación de componentes reutilizables, mientras que pseudoclases como `:focus-visible` ayudan a representar estados de interacción necesarios para usar la interfaz con teclado.


CSS también es la base de metodologías de organización de estilos, sistemas de diseño y frameworks como Bootstrap. Entender el lenguaje permite adaptar esas herramientas y saber qué reglas generan en lugar de tratarlas como una capa opaca.


## Ejemplo de CSS


Este ejemplo define una tarjeta de producto adaptable. Combina variables personalizadas, box model, Flexbox, una pseudoclase, un pseudoelemento y una media query sin depender de bibliotecas externas.


```css
:root {
  --color-principal: #2563eb;
  --color-texto: #1f2937;
  --color-fondo: #ffffff;
  --radio: 0.75rem;
}

* {
  box-sizing: border-box;
}

.tarjeta-producto {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  max-width: 42rem;
  padding: 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: var(--radio);
  color: var(--color-texto);
  background-color: var(--color-fondo);
}

.tarjeta-producto__titulo {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.tarjeta-producto__precio {
  color: var(--color-principal);
  font-weight: 700;
}

.tarjeta-producto__precio::before {
  content: "Precio: ";
  color: var(--color-texto);
  font-weight: 400;
}

.tarjeta-producto__enlace {
  color: var(--color-principal);
}

.tarjeta-producto__enlace:hover,
.tarjeta-producto__enlace:focus-visible {
  text-decoration-thickness: 0.2em;
}

@media (max-width: 40rem) {
  .tarjeta-producto {
    flex-direction: column;
    align-items: stretch;
  }
}
```


La clase `.tarjeta-producto` crea el contenedor flexible. `gap` establece una separación uniforme entre sus elementos y `box-sizing: border-box` evita que el relleno y el borde aumenten la anchura calculada de las cajas.


Los nombres con doble guion bajo identifican partes del componente, como el título, el precio y el enlace. `::before` añade la etiqueta visual «Precio:» antes del valor; al ser contenido generado, no debería utilizarse para información imprescindible que falte en HTML.


La regla `@media` cambia la dirección de Flexbox cuando el área visible mide como máximo `40rem`. En pantallas amplias, el contenido se distribuye en una fila; en pantallas estrechas, pasa a una columna. Las variables declaradas en `:root` mantienen centralizados los valores que se reutilizan en el componente.

