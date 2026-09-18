---
title: "Listas"
description: "Consulta cómo personalizar listas CSS con viñetas, numeración, marcadores y contadores mediante propiedades y ejemplos prácticos y accesibles."
date: 2026-01-17
updatedDate: 2026-09-18
tags: ["css","listas","list-style-type","marker","counter-reset"]
slug: css/listas
type: category
topic: css
id: 2eba9dfb-adca-80eb-8869-df7993e0acb5
author: victor_cuervo
---

## ¿Qué son las listas CSS?


Las **listas CSS** son listas cuyo marcador, numeración, posición y presentación visual se controlan mediante [hojas de estilo](https://lineadecodigo.com/css/). [CSS](https://lineadecodigo.com/css/) no cambia el significado ni el orden del contenido: modifica cómo se muestran las viñetas o números asociados a cada elemento.


Una lista utiliza un **marcador** por elemento. En una lista no ordenada suele ser una viñeta; en una lista ordenada, un número o símbolo que representa la secuencia. Las propiedades `list-style-*` permiten elegir el tipo de marcador, su posición y, en algunos casos, una imagen.


El pseudoelemento `::marker` selecciona directamente la viñeta o numeración generada por el navegador. Sirve para ajustar aspectos compatibles, como el color, el tamaño, el peso tipográfico o el contenido del marcador, sin alterar el texto del elemento.


Cuando la numeración necesita una lógica visual personalizada, [CSS](https://lineadecodigo.com/css/) dispone de **contadores**. Un contador es un valor administrado por el navegador mediante `counter-reset`, `counter-increment` y la función `counter()`. Permite crear secuencias para pasos, apartados o listas anidadas.


## Características de Listas CSS

- **Tipo de marcador:** `list-style-type` admite viñetas como `disc`, `circle` y `square`, numeraciones como `decimal` y `lower-roman`, y el valor `none` para ocultar el marcador predeterminado.
- **Posición del marcador:** `list-style-position` acepta `outside` o `inside`. Con `outside`, el marcador queda fuera de la caja principal del contenido; con `inside`, forma parte del flujo del texto y afecta a la alineación de las líneas.
- **Imagen como viñeta:** `list-style-image` permite utilizar una imagen, aunque ofrece poco control sobre su tamaño y alineación. Para diseños precisos suele ser más flexible usar `::marker` con contenido textual compatible o un pseudoelemento generado.
- **Propiedad abreviada:** `list-style` combina tipo, posición e imagen en una sola declaración. Por ejemplo, `list-style: square outside` define una viñeta cuadrada situada fuera del contenido.
- **Personalización con** **`::marker`****:** permite aplicar estilos al marcador sin eliminar el comportamiento natural de la lista. Mantener el marcador nativo suele conservar mejor la estructura y la numeración automática.
- **Contadores personalizados:** `counter-reset` inicializa una secuencia, `counter-increment` la avanza y `counter()` recupera el valor para mostrarlo con `content`.
- **Listas anidadas:** cada nivel puede usar un tipo de viñeta o numeración distinto. Los contadores también pueden reiniciarse por sección para construir jerarquías coherentes.
- **Separación entre estructura y apariencia:** la lista conserva su función semántica aunque cambien los marcadores. Ocultar las viñetas no convierte sus elementos en párrafos ni elimina su relación como conjunto.

## ¿Por qué aprender Listas CSS?


Personalizar listas permite presentar instrucciones, características, menús, índices y procesos de forma coherente con el diseño de una interfaz. Las propiedades nativas resuelven la mayoría de los casos sin añadir caracteres manuales al contenido.


Usar numeración automática evita errores al insertar, eliminar o reordenar elementos. El navegador recalcula la secuencia, mientras que los números escritos a mano deben corregirse uno por uno. Los contadores amplían esta ventaja cuando el formato requerido no coincide con la numeración predeterminada.


Conocer `::marker` ayuda a evitar una técnica frecuente pero innecesaria: ocultar la viñeta y reconstruirla con posicionamiento. El marcador nativo requiere menos reglas, se adapta al contenido y mantiene la relación visual con el elemento de lista.


Las listas CSS también están relacionadas con la accesibilidad. La estructura de lista debe mantenerse aunque se eliminen los marcadores visuales. Además, una viñeta decorativa no debe ser la única señal que explique el significado de un estado o una categoría.


## Ejemplo de Listas CSS


Este ejemplo combina una lista con viñetas personalizadas y una lista de pasos numerada mediante contadores:


```css
.lista-recursos {
  padding-inline-start: 1.5rem;
  list-style-type: square;
}

.lista-recursos li {
  margin-block: 0.5rem;
  padding-inline-start: 0.25rem;
}

.lista-recursos li::marker {
  color: #2563eb;
  font-size: 1.15em;
}

.lista-pasos {
  counter-reset: paso;
  margin: 0;
  padding: 0;
  list-style: none;
}

.lista-pasos li {
  counter-increment: paso;
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 0.75rem;
  align-items: start;
  margin-block: 1rem;
}

.lista-pasos li::before {
  content: counter(paso);
  display: grid;
  place-items: center;
  inline-size: 2.25rem;
  block-size: 2.25rem;
  border-radius: 50%;
  color: #ffffff;
  background-color: #1d4ed8;
  font-weight: 700;
}
```


La clase `.lista-recursos` conserva el marcador nativo y lo cambia a una viñeta cuadrada. `::marker` modifica su color y tamaño, mientras que `padding-inline-start` reserva espacio para que el marcador no quede pegado al borde. La propiedad lógica `padding-inline-start` se adapta a la dirección de escritura.


Por otro lado la clase `.lista-pasos` oculta la numeración predeterminada porque necesita un indicador circular. `counter-reset: paso` inicia el contador en el contenedor y cada elemento lo incrementa mediante `counter-increment: paso`. El pseudoelemento `::before` muestra el valor actual con `counter(paso)`.


La cuadrícula separa el número del contenido en dos columnas. Si se añade, elimina o reordena un paso, la numeración se actualiza automáticamente. Aunque el marcador visual se reconstruye, el contenido debe seguir utilizando una estructura de lista para conservar su relación semántica.

