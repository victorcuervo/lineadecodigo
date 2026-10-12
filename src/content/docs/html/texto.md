---
title: "Texto"
description: "Organiza el texto HTML con encabezados, párrafos y etiquetas de énfasis. Comprende los espacios, las citas y el código con un ejemplo práctico completo."
date: 2026-10-12
updatedDate: 2026-10-12
tags: ["h1","p","strong","em"]
slug: html/texto
type: category
topic: html
id: 3f7a9dfb-adca-80fd-9057-c5064c662dac
author: victor_cuervo
---

## ¿Qué es Texto HTML?


El **texto HTML** es el contenido textual de una página organizado mediante elementos que indican su función: encabezados, párrafos, citas, énfasis o fragmentos de código. El marcado permite que el navegador interprete qué representa cada parte, además de mostrar sus caracteres.


En `<p>Consulta el horario.</p>`, `p` identifica un párrafo y «Consulta el horario.» es su texto. Ese párrafo puede incluir elementos que añaden significado a una parte de la frase, como `<strong>El plazo termina hoy.</strong>` para señalar importancia.


Al procesar el documento, el navegador crea nodos de texto dentro del [DOM](https://lineadecodigo.com/dom/), el árbol que representa la estructura de la página. Las etiquetas no se muestran como parte del texto: establecen relaciones y significado. Para mostrar una etiqueta literalmente, hay que representar sus delimitadores como caracteres, por ejemplo mediante `&lt;` y `&gt;`.


El formato de texto HTML no debe confundirse con los estilos de texto. [HTML](https://lineadecodigo.com/html/) expresa estructura y semántica; [CSS](https://lineadecodigo.com/css/) controla aspectos visuales como tipografía, tamaño, color, alineación y separación. Una palabra en cursiva no tiene necesariamente énfasis, ni una frase grande es automáticamente un encabezado.


## Características de Texto HTML

- **Encabezados con niveles.** `h1` a `h6` organizan el contenido jerárquicamente. Una página puede utilizar un `h1` principal, `h2` para sus apartados y `h3` para subdivisiones reales. Los niveles se eligen por la estructura, no por el tamaño que muestra el navegador. Dar formato grande a un párrafo no le aporta semántica de encabezado.
- **Párrafos y saltos de línea distintos.** `p` agrupa un párrafo. `br` introduce un salto dentro de un mismo contenido, útil en una dirección o un poema; es un elemento vacío y no lleva etiqueta de cierre. No se deben acumular `br` para separar apartados o crear márgenes: los párrafos expresan la separación del contenido y los estilos controlan su espaciado.
- **Espacios normalizados.** Con la presentación predeterminada, una secuencia de espacios, tabulaciones o saltos de línea del archivo se muestra normalmente como un único espacio. Indentar el código no genera una maquetación equivalente en pantalla. `pre` conserva los espacios y saltos de línea de un texto preformateado; su comportamiento también puede modificarse mediante estilos.
- **Importancia y énfasis.** `strong` señala importancia, gravedad o urgencia; `em` introduce énfasis en una palabra o expresión. Aunque suelen verse en negrita y cursiva, esas apariencias no son su definición. `b` llama la atención sin añadir importancia y `i` distingue texto en otra voz o con una cualidad diferente, como ciertos términos técnicos. Para un cambio puramente visual se utiliza [CSS](https://lineadecodigo.com/css/).
- **Citas identificables.** `blockquote` representa una cita extensa; `q`, una cita breve dentro de una frase. `cite` identifica el título de una obra, no el nombre de una persona por el mero hecho de ser su autora. El atributo `cite` de `blockquote` puede indicar una URL de procedencia, pero no crea por sí mismo una atribución visible ni un enlace.
- **Código y texto preformateado.** `code` identifica código, tanto dentro de un párrafo como en un bloque. Al combinar `pre` y `code`, se comunica que el contenido es código y se conserva su disposición. `code` por sí solo no conserva todos los espacios ni provoca que el navegador ejecute el fragmento.
- **Caracteres reservados y codificación.** `&lt;` representa `<` y `&amp;`, `&`; son referencias de caracteres, llamadas habitualmente entidades. Con UTF-8 se pueden escribir tildes y eñes directamente si el archivo y su declaración de codificación son coherentes. `&nbsp;` introduce un espacio de no separación entre palabras, no una herramienta para alinear columnas.
- **Anidamiento con restricciones.** Un párrafo admite texto y elementos como `em`, `strong` o `code`, pero no otro `p`, un encabezado o una lista. El navegador puede cerrar un párrafo automáticamente ante ciertos elementos, produciendo una estructura distinta de la escrita. `span` es un contenedor genérico para partes del texto cuando no existe un significado específico que expresar.

## ¿Por qué aprender Texto HTML?


Estas etiquetas permiten convertir un texto continuo en contenido consultable. En documentación técnica, los encabezados facilitan localizar temas, los párrafos separan ideas y el marcado de código distingue instrucciones de explicaciones. En una ficha informativa, `strong` permite señalar un aviso por su importancia y no solo por su apariencia.


La organización también beneficia a los lectores de pantalla, que pueden ofrecer navegación por encabezados. No hay que asumir que todos anuncian `strong` o `em` de la misma manera: su tratamiento depende de la herramienta y su configuración. Un mensaje crítico debe ser comprensible por su redacción, no únicamente por una variación visual o vocal.


Comprender el tratamiento de espacios ayuda a evitar errores frecuentes: intentar separar párrafos con líneas vacías, alinear contenido con espacios repetidos o pegar código cuya indentación se pierde. Elegir `p` o `pre` según el contenido resuelve problemas diferentes sin mezclar significado y presentación.


Al editar una plantilla o contenido procedente de un gestor, estas bases permiten revisar la jerarquía y conservar el sentido cuando cambia el diseño. Una estructura clara también ayuda a los buscadores a interpretar los apartados, sin que añadir etiquetas o negritas garantice mejores posiciones.


## Ejemplo de Texto HTML


Este documento presenta instrucciones para una actividad. Guárdalo como `instrucciones.html`, con codificación UTF-8, y ábrelo en un navegador. El ejemplo utiliza solo [HTML](https://lineadecodigo.com/html/), sin estilos, scripts ni recursos externos.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Instrucciones para el taller de escritura</title>
</head>
<body>
  <main>
    <h1>Instrucciones para el taller de escritura</h1>
    <p>Trae un cuaderno y prepara una presentación breve.</p>

    <h2>Antes de comenzar</h2>
    <p><strong>La inscripción termina el viernes a las 18:00.</strong></p>
    <p>Elige <em>una sola idea</em> para tu presentación.</p>

    <h2>Lugar de encuentro</h2>
    <p>Sala de lectura<br>Calle Mayor, 12<br>Madrid</p>

    <h2>Texto de práctica</h2>
    <p>Escribe un párrafo utilizando la etiqueta <code>&lt;p&gt;</code>:</p>
    <pre><code>&lt;p&gt;Mi primera idea.&lt;/p&gt;</code></pre>
    <p>En el navegador, el texto de ese párrafo será «Mi primera idea.».</p>

    <h2>Criterio de revisión</h2>
    <blockquote>
      <p>Cada párrafo debe desarrollar una idea reconocible.</p>
    </blockquote>
    <p>Fragmento de las instrucciones del taller.</p>
    <p>Revisa la relación entre claridad &amp; estructura.</p>
  </main>
</body>
</html>
```


La página mostrará un encabezado principal y cuatro apartados. Con los estilos predeterminados del navegador, el aviso de inscripción aparecerá normalmente en negrita y «una sola idea» en cursiva. Sus funciones son distintas: el primero comunica urgencia y el segundo enfatiza una condición de la actividad.


Las decisiones relevantes son:

- Los `h2` representan apartados del mismo nivel bajo el `h1`. Los textos que desarrollan cada apartado se agrupan en `p`, sin utilizar encabezados para simples frases resaltadas.
- Los `br` mantienen el nombre de la sala y las líneas de su ubicación dentro de un mismo párrafo. No se utilizan para crear distancia entre secciones.
- `code` identifica la etiqueta citada en una frase. `pre` y `code` muestran el ejemplo como código; `&lt;` y `&gt;` impiden que el navegador lo interprete como un párrafo real.
- `blockquote` diferencia el texto citado de la explicación. La atribución está escrita fuera de la cita para que sea visible.
- `&amp;` produce el símbolo `&` en la última frase. La referencia pertenece al código fuente; el lector ve el carácter resultante.

Para comprobar cómo se tratan los espacios, añade varios espacios entre dos palabras de un párrafo y vuelve a cargar el archivo: normalmente se mostrarán como uno solo. Después, añade un salto de línea y espacios dentro de `pre`; allí se conservarán con la presentación predeterminada. Esta diferencia permite elegir el marcado por la necesidad del contenido, no por ensayo y error visual.

