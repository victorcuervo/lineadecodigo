---
title: "Texto"
description: "Domina Bootstrap Texto con clases para encabezados, alineación, énfasis, abreviaturas y citas mediante un ejemplo semántico, claro y adaptable."
date: 2026-09-15
updatedDate: 2026-09-15
tags: ["abbr","blockquote","h1","text-align"]
slug: bootstrap/texto
type: category
topic: bootstrap
id: 3dca9dfb-adca-80a7-b769-eb4a5e919644
author: victor_cuervo
---

## ¿Cómo usar el texto en Bootstrap?


El texto en [Bootstrap](https://lineadecodigo.com/bootstrap/) se gestiona mediante un conjunto de estilos tipográficos y clases de utilidad que [Bootstrap](https://lineadecodigo.com/bootstrap/) aplica al contenido escrito de una interfaz web. Permite presentar encabezados, párrafos, abreviaturas, citas y otros elementos con una apariencia coherente, además de controlar propiedades visuales como la alineación, el tamaño, el peso y el color.


[Bootstrap](https://lineadecodigo.com/bootstrap/) parte de los elementos semánticos de [HTML](https://lineadecodigo.con/html/). Un encabezado sigue representándose con `h1` a `h6`, una abreviatura con `abbr` y una cita extensa con `blockquote`. El framework añade estilos predeterminados y clases reutilizables, pero no cambia el significado de esos elementos.


También existen clases tipográficas que modifican la presentación sin alterar la semántica. Por ejemplo, un elemento puede recibir la apariencia de un encabezado mediante `h1` o `h2`, aunque continúe siendo un párrafo. Esta separación resulta útil en casos concretos, pero la jerarquía real del documento debe definirse con las etiquetas adecuadas para conservar la accesibilidad y una estructura comprensible.


Esta página utiliza Bootstrap 5 como referencia. Versiones anteriores contienen varias clases equivalentes, aunque algunos nombres, colores y comportamientos pueden variar.


## Características de Bootstrap Texto

- **Encabezados con escala coherente:** [Bootstrap](https://lineadecodigo.com/bootstrap/) estiliza `h1` a `h6` y ofrece las clases `.h1` a `.h6` para aplicar su apariencia a otros elementos. Las clases `.display-1` a `.display-6` crean títulos de mayor impacto visual, pensados para contenidos destacados.
- **Párrafos destacados:** la clase `.lead` aumenta el tamaño y reduce el peso visual de un párrafo introductorio. Debe reservarse para textos que realmente funcionan como entrada o síntesis, no para todos los párrafos.
- **Alineación adaptable:** `.text-start`, `.text-center` y `.text-end` controlan la alineación. Se pueden combinar con puntos de ruptura, como `.text-md-center`, para cambiarla a partir de un ancho determinado.
- **Peso y estilo de fuente:** clases como `.fw-bold`, `.fw-semibold`, `.fw-normal`, `.fst-italic` y `.fst-normal` permiten ajustar el énfasis visual sin crear reglas específicas.
- **Colores con significado visual:** utilidades como `.text-primary`, `.text-success`, `.text-danger` y `.text-body-secondary` aplican colores de la paleta del tema. El color no debe ser el único medio para comunicar un estado, porque algunas personas pueden no distinguirlo.
- **Transformación y decoración:** `.text-lowercase`, `.text-uppercase`, `.text-capitalize` y `.text-decoration-none` modifican la presentación del texto. Estas clases no cambian necesariamente el valor original del contenido ni sustituyen una redacción correcta.
- **Abreviaturas:** [Bootstrap](https://lineadecodigo.com/bootstrap/) estiliza el elemento `abbr`, normalmente con un subrayado indicativo y un cursor de ayuda. El atributo `title` proporciona la forma desarrollada al situar el puntero, aunque conviene que el significado también pueda deducirse del contenido visible.
- **Citas:** `blockquote` conserva el significado semántico de una cita extensa. `.blockquote` aplica el estilo principal y `.blockquote-footer` presenta la atribución; `cite` identifica el título de la obra o fuente citada.

## ¿Por qué aprender a manejar el texto en Bootstrap?


Estas utilidades permiten mantener una jerarquía visual consistente entre páginas, tarjetas, formularios y otros componentes. En lugar de definir tamaños y alineaciones diferentes para cada pantalla, el equipo utiliza un vocabulario común que reduce variaciones accidentales en la interfaz.


Conocer la diferencia entre semántica y apariencia evita errores frecuentes. La clase `.h2` puede hacer que un párrafo parezca un encabezado, pero no lo convierte en una sección del documento. Los lectores de pantalla, los navegadores y los buscadores interpretan la etiqueta real, no solo su aspecto visual.


Las clases responsive permiten ajustar la presentación sin duplicar contenido. Un texto puede alinearse a la izquierda en un móvil y centrarse desde una pantalla mediana mediante una sola combinación de clases. Las utilidades de peso, color y tamaño también facilitan construir estados visuales coherentes con el resto de [Bootstrap](https://lineadecodigo.com/bootstrap/).


Este conocimiento resulta especialmente útil al revisar interfaces existentes: permite distinguir qué decisiones proceden de los estilos base del framework, cuáles se aplican mediante utilidades y cuáles requieren una regla propia. Así se evita añadir [CSS](https://lineadecodigo.com/css/) personalizado para comportamientos que [Bootstrap](https://lineadecodigo.com/bootstrap/) ya ofrece.


## Ejemplo de Bootstrap Texto


El siguiente documento presenta el encabezado y la introducción de una guía técnica. Combina jerarquía semántica, alineación responsive, una abreviatura y una cita con atribución. Solo necesita la hoja de estilos de [Bootstrap](https://lineadecodigo.com/bootstrap/); no utiliza [JavaScript](https://lineadecodigo.com/javascript/).


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Guía de accesibilidad web</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <header class="mb-5 text-start text-md-center">
      <p class="text-uppercase fw-semibold text-primary mb-2">
        Referencia técnica
      </p>
      <h1 class="display-4 fw-bold">Accesibilidad web</h1>
      <p class="lead text-body-secondary">
        Principios para crear contenidos comprensibles y navegables.
      </p>
    </header>

    <section aria-labelledby="estructura">
      <h2 id="estructura" class="h3">Estructura del contenido</h2>
      <p>
        Las pautas <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
        describen criterios para mejorar la accesibilidad de los sitios web.
      </p>

      <blockquote class="blockquote border-start border-4 ps-3 mt-4">
        <p>
          La estructura semántica permite interpretar el contenido más allá
          de su presentación visual.
        </p>
        <footer class="blockquote-footer mb-0">
          Equipo de documentación en <cite title="Manual editorial">Manual editorial</cite>
        </footer>
      </blockquote>
    </section>
  </main>
</body>
</html>
```


El `h1` define el tema principal y el `h2` abre una sección real. La clase `.display-4` cambia el tamaño visual del título sin alterar su nivel semántico. De forma similar, `.h3` hace que el `h2` tenga la escala visual de un tercer nivel, pero el elemento continúa siendo un encabezado de segundo nivel dentro de la estructura.


En el encabezado, `.text-start` alinea el contenido al inicio en pantallas pequeñas y `.text-md-center` lo centra desde el punto de ruptura mediano. `.lead` diferencia la introducción, mientras que `.text-body-secondary` utiliza un color secundario compatible con el tema de [Bootstrap](https://lineadecodigo.com/bootstrap/).


El elemento `abbr` conserva el significado de la abreviatura y su atributo `title` contiene la expresión completa. La cita utiliza `blockquote`, `.blockquote` y `.blockquote-footer` para separar el texto citado de su atribución. El borde y el espaciado se añaden con utilidades de [Bootstrap](https://lineadecodigo.com/bootstrap/) sin crear estilos personalizados.

