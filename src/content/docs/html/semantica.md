---
title: "Semántica"
description: "Comprende la semántica HTML y elige etiquetas según el significado del contenido, con criterios de accesibilidad y un ejemplo práctico de página estructurada."
date: 2026-10-12
updatedDate: 2026-10-12
tags: ["semantica","accesibilidad","article","section"]
slug: html/semantica
type: category
topic: html
id: 3f7a9dfb-adca-804a-8b36-f12222c9a08d
author: victor_cuervo
---

## ¿Qué es la Semántica HTML?


La **semántica HTML** es el significado que los elementos y sus atributos aportan al contenido de una página. Escribir **HTML semántico** consiste en elegir el marcado según lo que representa cada parte: un encabezado, una navegación, un artículo, una acción o un dato, no según el aspecto que se desea conseguir.


Por ejemplo, `h2` identifica un encabezado de segundo nivel; `nav`, un bloque de navegación; y `button`, un control para ejecutar una acción. Un `div` puede agrupar contenido, pero por sí solo no comunica ninguna de esas funciones. Darle una clase llamada `titulo` tampoco lo convierte en un encabezado.


El significado es distinto de la presentación. [CSS](https://lineadecodigo.com/css/) puede modificar tamaño, color o disposición sin cambiar la función del elemento. Del mismo modo, un texto grande no adquiere semántica de encabezado únicamente por su apariencia.


El navegador interpreta este marcado y expone información a las tecnologías de asistencia, como los lectores de pantalla. Estas utilizan el **árbol de accesibilidad**, una representación de los elementos relevantes para la interacción, con información sobre su función y su nombre. El [HTML](https://lineadecodigo.com/html/) adecuado ayuda a que esa representación corresponda al significado del contenido.


## Características de Semántica HTML

- **Regiones de la página.** `main` identifica el contenido principal; `nav`, bloques de navegación relevantes; y `aside`, información relacionada de forma tangencial. Estas regiones pueden facilitar la navegación con tecnologías de asistencia. Como regla general, una página debe tener un único `main` no oculto. No toda agrupación de enlaces necesita estar dentro de `nav`.
- **Diferencia entre artículo, sección y contenedor.** `article` representa una composición que tiene sentido por sí misma, como una noticia o una entrada de blog. `section` agrupa contenido sobre un tema y normalmente necesita un encabezado que lo identifique. `div` sigue siendo adecuado cuando solo se requiere un contenedor para organizar elementos, sin un significado más específico. Una sección no debe añadirse únicamente para aplicar estilos.
- **Significado dependiente del contexto.** `header` contiene material introductorio o de navegación; `footer`, información de cierre o relativa al contenido de su contexto. Pueden existir tanto para la página como para un artículo. Un `header` dentro de `article` no equivale a la cabecera global del sitio ni suele exponerse como la región de cabecera global en accesibilidad.
- **Jerarquía explícita de encabezados.** Los niveles `h1` a `h6` expresan la organización del contenido. Conviene utilizar un encabezado principal y niveles coherentes para los apartados. Colocar un `h1` dentro de cada `section` no produce automáticamente una jerarquía equivalente a `h2` o `h3`: se deben elegir los niveles reales.
- **Semántica del texto.** `strong` expresa importancia; `em`, énfasis que puede cambiar el sentido de una frase; `time` identifica fechas u horas y puede ofrecer una representación procesable mediante `datetime`. Para una cita extensa se utiliza `blockquote`; para código, `code`. No se eligen estas etiquetas solo para obtener negrita, cursiva o una sangría.
- **Controles con función y comportamiento nativos.** Un enlace `a` con `href` sirve para navegar; un `button`, para realizar una acción. Los controles nativos incorporan comportamientos de teclado y semántica que un contenedor genérico no ofrece. Un `div` con aspecto de botón no tiene automáticamente foco, activación por teclado ni función de botón.
- **Relaciones y nombres accesibles.** `label` permite asociar una etiqueta a un control; `alt` aporta una alternativa textual a una imagen. El nombre accesible es el texto con el que una tecnología de asistencia identifica un elemento. En un enlace, normalmente procede de su contenido: «Consultar horarios» comunica más que «Haz clic aquí».
- **ARIA como complemento, no sustituto.** ARIA es un conjunto de atributos que aporta información de accesibilidad cuando el marcado nativo no basta. Añadir `role="button"` a un `div` no implementa su interacción. Se prefiere el elemento nativo y se evita repetir roles implícitos, como `role="navigation"` en `nav`. Cuando existen varias navegaciones, atributos como `aria-label` pueden darles nombres distintos.

## ¿Por qué aprender Semántica HTML?


Conocer la función de cada elemento permite organizar una página antes de diseñarla. En una publicación, por ejemplo, ayuda a distinguir el artículo, sus apartados, la navegación del sitio y la información complementaria. Esa organización hace que la estructura siga siendo comprensible aunque cambie la presentación visual.


En accesibilidad web, los encabezados y las regiones permiten recorrer el contenido sin leerlo de principio a fin. Los controles nativos también reducen la necesidad de programar comportamientos básicos de teclado. El marcado semántico no garantiza por sí solo una página accesible: todavía hay que comprobar contraste, nombres, orden de foco y funcionamiento de las interacciones.


Para mantenimiento, una estructura que expresa funciones reduce la ambigüedad al revisar una plantilla o un componente. Se puede reconocer una navegación por su elemento y no únicamente por convenciones de nombres de clases. Esto facilita conservar el significado del contenido durante cambios de diseño.


Los buscadores también pueden aprovechar una organización clara para interpretar el documento. Sustituir todos los contenedores por etiquetas semánticas no garantiza mejores posiciones: las etiquetas deben describir contenido real, con encabezados y enlaces útiles para quien lo consulta.


## Ejemplo de Semántica HTML


Este documento presenta una noticia de una biblioteca con navegación interna y dos apartados. Guárdalo como `noticia.html`, con codificación UTF-8, y ábrelo en el navegador. El ejemplo utiliza solo HTML para que el significado del marcado no dependa de estilos o scripts.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo horario de la biblioteca</title>
</head>
<body>
  <header>
    <p>Biblioteca del barrio</p>
    <nav aria-label="Apartados de la noticia">
      <ul>
        <li><a href="#horario">Consultar horario</a></li>
        <li><a href="#servicios">Consultar servicios</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>La biblioteca amplía su horario</h1>
        <p>Publicado el <time datetime="2026-10-12">12 de octubre de 2026</time>.</p>
      </header>

      <section id="horario">
        <h2>Horario de apertura</h2>
        <p>La sala de lectura abre de lunes a viernes, de 9:00 a 20:00.</p>
        <p><strong>El servicio de préstamo termina a las 19:30.</strong></p>
      </section>

      <section id="servicios">
        <h2>Servicios disponibles</h2>
        <ul>
          <li>Sala de lectura.</li>
          <li>Préstamo de libros.</li>
          <li>Consulta de catálogos.</li>
        </ul>
      </section>

      <footer>
        <p>Información preparada por el equipo de la biblioteca.</p>
      </footer>
    </article>
  </main>

  <footer>
    <p>Biblioteca del barrio · Información institucional.</p>
  </footer>
</body>
</html>
```


El navegador mostrará el nombre de la biblioteca, dos enlaces, la noticia, la fecha y los apartados de horario y servicios. Al activar un enlace, navegará a la sección cuyo `id` coincide con el fragmento de `href`.


Las decisiones de marcado responden a funciones concretas:

- `main` delimita el contenido principal. `article` contiene una noticia que podría publicarse o compartirse como una unidad independiente.
- Los dos `section` separan temas dentro de la noticia. Cada uno tiene un `h2`, subordinado al `h1` del artículo. Los identificadores sirven como destinos de navegación, no como sustitutos de los encabezados.
- El `header` exterior introduce el sitio; el del artículo agrupa su título y fecha. El `footer` interior atribuye la noticia y el exterior aporta información institucional. Su contexto diferencia sus funciones.
- `time` mantiene una fecha legible y proporciona su valor en formato de fecha ISO mediante `datetime`. `strong` señala un aviso importante, no simplemente un texto que se desea resaltar visualmente.
- `nav` identifica la navegación entre apartados y `aria-label` le da un nombre accesible. Los enlaces son apropiados porque llevan a destinos; no se utilizan botones para esa operación.

Para comprobar algo más que la apariencia, abre el inspector de accesibilidad del navegador y revisa los encabezados, las regiones y los nombres de los enlaces. Con el teclado, utiliza Tab para enfocar los enlaces y Enter para activarlos. Un lector de pantalla permite comprobar la navegación por encabezados y regiones; el resultado exacto depende de la combinación de navegador y tecnología de asistencia.

