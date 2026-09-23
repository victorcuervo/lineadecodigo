---
title: "Formularios"
description: "Diseña formularios CSS claros y accesibles: organiza campos, estados de foco y validación, botones y controles responsive con un ejemplo práctico."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["form","input","label","validation"]
slug: css/formularios
type: category
topic: css
id: 3e3a9dfb-adca-80de-8788-fb76157a17a3
author: victor_cuervo
---

## ¿Qué es Formularios CSS?


Los **formularios** [**CSS**](https://lineadecodigo.com/css/) son formularios cuyos campos, controles, botones, mensajes y estados visuales se presentan mediante hojas de estilo. [CSS](https://lineadecodigo.com/css/) controla su apariencia y distribución, pero no define qué datos se solicitan ni sustituye la validación o el procesamiento de la información.


Los controles conservan un estilo inicial proporcionado por el navegador y el sistema operativo. Propiedades como `font`, `color`, `background-color`, `border`, `padding` y `border-radius` permiten integrarlos en el diseño. Conviene normalizar solo lo necesario para no perder comportamientos familiares para el usuario.


[CSS](https://lineadecodigo.com/css/) también puede representar estados mediante pseudoclases. `:focus` identifica el control activo; `:focus-visible` muestra un indicador de foco cuando el navegador considera que debe ser visible; `:disabled`, `:checked`, `:required`, `:valid` e `:invalid` reflejan estados nativos del control.


La validación visual informa sobre un estado, pero no valida por sí misma. Las reglas reales dependen de las restricciones del formulario y, cuando corresponde, del servidor. [CSS](https://lineadecodigo.com/css/) debe hacer visibles el foco, los errores y los controles deshabilitados sin comunicar información únicamente mediante el color.


## Características de Formularios CSS

- **Herencia tipográfica:** algunos controles no heredan la fuente de forma uniforme. `font: inherit` ayuda a mantener una tipografía coherente con el resto de la interfaz.
- **Dimensiones previsibles:** `box-sizing: border-box` incluye bordes y relleno dentro del ancho declarado, lo que facilita alinear entradas, selectores y áreas de texto.
- **Distribución adaptable:** Grid o Flexbox permiten organizar etiquetas y controles en una o varias columnas. El diseño debe volver a una columna cuando el espacio disponible sea insuficiente.
- **Indicador de foco:** `:focus-visible` permite crear un contorno claro para la navegación con teclado. Eliminar `outline` sin ofrecer un reemplazo visible dificulta saber qué control está activo.
- **Estados de validación:** `:valid` e `:invalid` responden a restricciones nativas como `required`, `type`, `minlength`, `min` o `max`. También puede estilizarse un estado explícito mediante un atributo como `aria-invalid="true"`.
- **Controles marcables:** `accent-color` cambia el color de elementos nativos compatibles, como casillas, botones de opción y barras de progreso, sin reconstruirlos desde cero.
- **Controles deshabilitados:** `:disabled` puede reducir el énfasis visual, pero el texto y el borde deben conservar suficiente contraste para que el estado siga siendo comprensible.
- **Texto de ayuda:** los mensajes de instrucciones o error necesitan separación y jerarquía propias. El color puede reforzar el significado, pero debe acompañarse de texto o de otro indicador.
- **Áreas de texto:** `resize` controla si un `textarea` puede redimensionarse. Permitir al menos el ajuste vertical suele facilitar la introducción y revisión de contenido largo.
- **Botones:** los estados `:hover`, `:focus-visible`, `:active` y `:disabled` deben distinguirse. El área interactiva necesita espacio suficiente para utilizarse con puntero o pantalla táctil.

## ¿Por qué aprender Formularios CSS?


Un formulario concentra tareas sensibles: iniciar sesión, buscar, comprar, registrarse o enviar información. Un estilo claro permite identificar qué campos pertenecen al mismo grupo, cuáles son obligatorios y qué acción ejecuta cada botón.


La consistencia reduce errores. Cuando entradas, selectores y áreas de texto comparten dimensiones, espaciado y estados, el usuario puede reconocer rápidamente qué elementos son interactivos. Los mensajes de validación bien diferenciados facilitan localizar y corregir datos incompletos.


El diseño responsive evita que los controles se desborden o queden demasiado estrechos. Las filas de varias columnas pueden simplificarse en pantallas pequeñas, mientras que los botones pueden ocupar todo el ancho disponible cuando mejora su uso táctil.


Conocer las pseudoclases de interacción también ayuda a mantener la accesibilidad. Un foco visible permite navegar con teclado; un estado inválido acompañado de texto no depende exclusivamente del color; y conservar controles nativos reduce el riesgo de romper comportamientos esperados.


[CSS](https://lineadecodigo.com/css/) se coordina con la estructura y con la validación del formulario. La estructura asocia etiquetas, controles y mensajes; el navegador o la aplicación determina si los valores son válidos; [CSS](https://lineadecodigo.com/css/) presenta esos estados de forma comprensible. Separar estas responsabilidades produce formularios más fáciles de mantener.


## Ejemplo de Formularios CSS


Este ejemplo estiliza un formulario adaptable. Los campos se muestran en una columna y pasan a dos cuando hay espacio suficiente. También incluye foco visible, error explícito y estados para el botón.


```css
.formulario {
  display: grid;
  gap: 1rem;
  width: min(100%, 42rem);
  margin-inline: auto;
}

.formulario__campos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.campo {
  display: grid;
  gap: 0.375rem;
}

.campo label {
  font-weight: 600;
}

.campo :is(input, select, textarea) {
  box-sizing: border-box;
  width: 100%;
  min-height: 2.75rem;
  padding: 0.625rem 0.75rem;
  border: 1px solid #94a3b8;
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #0f172a;
  font: inherit;
}

.campo textarea {
  min-height: 7rem;
  resize: vertical;
}

.campo :is(input, select, textarea):focus-visible {
  border-color: #2563eb;
  outline: 3px solid rgb(37 99 235 / 25%);
  outline-offset: 1px;
}

.campo :is(input, select, textarea)[aria-invalid="true"] {
  border-color: #b91c1c;
}

.campo__error {
  color: #991b1b;
  font-size: 0.875rem;
}

.formulario__boton {
  min-height: 2.75rem;
  padding: 0.625rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #1d4ed8;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.formulario__boton:hover {
  background-color: #1e40af;
}

.formulario__boton:focus-visible {
  outline: 3px solid rgb(37 99 235 / 35%);
  outline-offset: 3px;
}

.formulario__boton:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

@media (min-width: 40rem) {
  .formulario__campos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```


La clase `.formulario` limita el ancho sin dejar de ocupar el espacio disponible. El grupo de campos empieza con una columna y la media query crea dos columnas desde `40rem`. `minmax(0, 1fr)` permite que ambas se encojan sin que el contenido fuerce un desbordamiento.


La función `:is()` agrupa los selectores de `input`, `select` y `textarea` para aplicarles las mismas dimensiones. `font: inherit` mantiene la tipografía del documento y `box-sizing: border-box` evita que el relleno aumente el ancho calculado.


El foco combina un borde azul con un contorno semitransparente. No se elimina el indicador sin sustitución. El selector `[aria-invalid="true"]` representa un error marcado por la estructura o la aplicación; `.campo__error` presenta el mensaje correspondiente con texto visible.


El botón diferencia los estados normal, interactivo, enfocado y deshabilitado. `opacity` reduce su énfasis cuando está desactivado, mientras `cursor: not-allowed` refuerza visualmente que la acción no está disponible.

