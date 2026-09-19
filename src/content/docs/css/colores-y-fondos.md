---
title: "Colores y Fondos"
description: "Consulta cómo usar colores CSS en texto y fondos con formatos modernos, transparencia, gradientes, contraste y variables mediante ejemplos prácticos."
date: 2026-01-17
updatedDate: 2026-09-19
tags: ["color","background-color","gradiente","opacity"]
slug: css/colores-y-fondos
type: category
topic: css
id: 2eba9dfb-adca-8053-9fec-e9115760d91f
author: victor_cuervo
---

## ¿Qué es Colores CSS?


Los **colores CSS** son valores que definen el color del texto, los fondos, los bordes, las sombras y otros componentes visuales de una interfaz. [CSS](https://lineadecodigo.com/css/) permite expresarlos con palabras clave, notación hexadecimal y funciones como `rgb()` o `hsl()`.


La propiedad `color` establece el color de primer plano. Normalmente afecta al texto y también proporciona el valor de `currentColor`, una palabra clave que otras propiedades pueden reutilizar. Por ejemplo, un borde con `border-color: currentColor` adopta el mismo color que el texto.


Los fondos se controlan con propiedades `background-*`. `background-color` define un color sólido, mientras que `background-image` admite imágenes y gradientes generados por CSS. Un gradiente se comporta como una imagen de fondo, no como un color simple.


La **transparencia** se representa mediante un canal alfa. Un alfa de `1` es totalmente opaco y uno de `0`, totalmente transparente. Conviene distinguirlo de `opacity`: el alfa afecta al color concreto, mientras que `opacity` vuelve transparente el elemento completo, incluidos sus descendientes.


## Características de Colores CSS

- **Palabras clave:** nombres como `red`, `navy` o `transparent` son legibles, pero una paleta de proyecto suele gestionarse mejor con valores explícitos o variables personalizadas.
- **Hexadecimal:** formatos como `#2563eb` representan rojo, verde y azul. También existen versiones abreviadas y formatos con alfa, como `#2563ebcc`.
- **RGB:** `rgb()` permite definir canales rojo, verde y azul. La sintaxis moderna admite un canal alfa separado por `/`, por ejemplo `rgb(37 99 235 / 80%)`.
- **HSL:** `hsl()` describe tono, saturación y luminosidad. Resulta útil para construir variaciones visuales porque permite ajustar la claridad o saturación sin cambiar directamente cada canal RGB.
- **Herencia:** `color` se hereda normalmente a los descendientes. `background-color` no se hereda; si no se establece, su valor inicial es transparente y deja ver el fondo situado detrás.
- **Gradientes:** `linear-gradient()`, `radial-gradient()` y `conic-gradient()` generan transiciones entre colores. Pueden incluir posiciones o paradas para controlar dónde comienza y termina cada transición.
- **Capas de fondo:** CSS permite combinar varios fondos separados por comas. La primera capa se dibuja encima de las siguientes y el color de fondo queda debajo de todas ellas.
- **Variables de color:** las propiedades personalizadas, como `--color-principal`, centralizan la paleta y facilitan mantener estados, temas y variantes coherentes.
- **Contraste:** el color debe mantener una diferencia suficiente entre contenido y fondo. Como referencia de accesibilidad, el texto normal suele requerir una relación mínima de 4.5:1 y el texto grande, 3:1.

## ¿Por qué aprender Colores CSS?


Controlar el color permite crear jerarquía visual, diferenciar estados y mantener una identidad consistente. Texto, superficies, bordes y acciones pueden compartir una paleta definida en un único lugar mediante variables personalizadas.


Conocer los formatos evita resultados inesperados. Un color con alfa deja ver lo que hay detrás, mientras que `opacity` afecta también al texto y a los elementos internos. Esta diferencia es relevante al diseñar tarjetas, superposiciones, avisos y botones desactivados.


Los fondos y gradientes permiten construir profundidad y separar regiones sin depender siempre de imágenes externas. Al generarse con [CSS](https://lineadecodigo.com/css/), se adaptan al tamaño del elemento y pueden modificarse mediante variables, estados o preferencias de tema.


El color también comunica información, pero no debe ser la única señal. Un mensaje de error necesita texto, iconografía o una indicación adicional además del rojo. Esta práctica mejora la comprensión para personas con dificultades de percepción cromática y hace la interfaz más clara en distintos dispositivos.


Comprender `currentColor`, la herencia y la cascada reduce duplicaciones. Un icono, un borde y un subrayado pueden seguir automáticamente el color del componente sin repetir el mismo valor en varias declaraciones.


## Ejemplo de Colores CSS


El ejemplo define una paleta con variables, aplica un fondo degradado a una tarjeta y utiliza transparencia sin reducir la opacidad del contenido:


```css
:root {
  --color-principal: #1d4ed8;
  --color-principal-oscuro: #1e3a8a;
  --color-superficie: #ffffff;
  --color-texto: #172033;
  --color-texto-secundario: #475569;
  --color-borde: rgb(29 78 216 / 25%);
}

.tarjeta {
  color: var(--color-texto);
  background-color: var(--color-superficie);
  background-image: linear-gradient(
    135deg,
    rgb(219 234 254 / 85%),
    rgb(255 255 255 / 0%) 65%
  );
  border: 1px solid var(--color-borde);
  box-shadow: 0 0.75rem 2rem rgb(15 23 42 / 12%);
}

.tarjeta__titulo {
  color: var(--color-principal-oscuro);
}

.tarjeta__texto {
  color: var(--color-texto-secundario);
}

.tarjeta__enlace {
  color: var(--color-principal);
  text-decoration-color: currentColor;
}

.tarjeta__enlace:hover,
.tarjeta__enlace:focus-visible {
  color: var(--color-principal-oscuro);
}
```


La pseudoclase `:root` almacena los colores de la interfaz como propiedades personalizadas. Las reglas posteriores los recuperan con `var()`, de modo que un cambio en la paleta se realiza en un único lugar.


La tarjeta combina un color de fondo blanco con un gradiente semitransparente. El degradado deja ver la superficie inferior porque algunas paradas utilizan alfa. El contenido conserva su opacidad completa, algo que no ocurriría si se aplicara `opacity` al contenedor.


El borde y la sombra usan `rgb()` con transparencia para producir un efecto ligero. El enlace reutiliza su propio `color` mediante `currentColor`; cuando cambia en los estados `:hover` o `:focus-visible`, la decoración se actualiza sin otra declaración.

