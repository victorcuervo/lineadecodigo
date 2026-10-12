---
title: "HTML"
description: "Comprende cómo HTML estructura una página web: etiquetas, atributos, jerarquía y accesibilidad, con un ejemplo práctico de marcado semántico y enlaces."
date: 2026-01-05
updatedDate: 2026-10-12
tags: ["etiqueta","enlaces","accesibilidad","formularios"]
slug: html
type: category
topic: html
id: 2dea9dfb-adca-8000-b719-f07478a806e0
author: victor_cuervo
---

## ¿Qué es HTML?


**HTML (HyperText Markup Language)** es el lenguaje de marcado que describe la estructura y el significado del contenido de una página web. Identifica encabezados, párrafos, enlaces, imágenes, listas y formularios para que el navegador pueda interpretarlos y presentarlos al usuario.


Un lenguaje de marcado utiliza etiquetas para indicar qué representa cada parte del contenido. HTML no es un lenguaje de programación: no expresa por sí solo algoritmos, bucles o lógica de cálculo. Su función es organizar información y declarar elementos con comportamientos que el navegador ya conoce, como seguir un enlace.


Para comprender su sintaxis conviene distinguir **tres conceptos**:

- **Etiqueta:** marca que delimita un elemento, como `<p>` y `</p>` para abrir y cerrar un párrafo.
- **Elemento:** unidad completa formada, habitualmente, por una etiqueta de apertura, su contenido y una etiqueta de cierre. Por ejemplo, `<p>Texto del párrafo.</p>`. Algunos elementos, como `img` y `meta`, son vacíos: no admiten contenido ni etiqueta de cierre.
- **Atributo:** información adicional escrita en la etiqueta de apertura. En `<a href="#materiales">Consultar materiales</a>`, el atributo `href` especifica el destino del enlace.

El término _hipertexto_ se refiere a la posibilidad de conectar información mediante enlaces, tanto entre documentos como dentro de una misma página.


Al procesar el documento, el navegador construye el [DOM (Document Object Model)](https://lineadecodigo.com/dom/): una representación en forma de árbol de sus elementos y sus relaciones. La estructura escrita en HTML es la base de ese árbol; [CSS](https://lineadecodigo.com/css/) puede definir su presentación y [JavaScript](https://lineadecodigo.com/javascript/) puede modificarlo o añadir lógica interactiva.


## Características de HTML

- **Marcado semántico.** Los elementos expresan significado, no solo apariencia. `nav` identifica un bloque de navegación; `main`, el contenido principal; y `article`, una composición que puede entenderse de forma independiente. `div` es un contenedor genérico cuando no existe un elemento semántico adecuado. Elegir una etiqueta por su aspecto visual puede ocultar la función real del contenido.
- **Jerarquía y anidamiento.** Los elementos pueden contener otros elementos según las reglas del lenguaje. Una lista `ul`, por ejemplo, contiene elementos `li`. Los encabezados de `h1` a `h6` representan niveles de organización, no tamaños de letra: conviene ordenar esos niveles de acuerdo con la estructura del documento. No todo anidamiento es válido; un enlace no debe contener otro enlace.
- **Atributos globales y específicos.** `id` identifica un elemento y debe ser único en el documento; `lang` declara el idioma. Otros atributos pertenecen a determinados elementos, como `href` en los enlaces o `alt` en las imágenes. Los atributos booleanos, como `required`, se activan por su presencia: escribir `required="false"` no los desactiva.
- **Controles nativos.** Los formularios ofrecen campos, botones y mecanismos de validación básica. Un campo `input` de tipo `email` permite comprobar el formato de una dirección; `label` proporciona su etiqueta. Estas funciones no sustituyen la validación de datos en el servidor.
- **Accesibilidad integrada en la estructura.** Encabezados coherentes, regiones semánticas, etiquetas de formulario y alternativas textuales ayudan a las tecnologías de asistencia a interpretar el contenido. Los enlaces sirven para navegar y los botones para realizar acciones. Utilizar el elemento nativo adecuado evita tener que reconstruir su comportamiento.
- **Estandarización continua.** La referencia actual es el HTML Living Standard, mantenido por WHATWG. La denominación HTML5 sigue siendo habitual, pero el estándar evoluciona de manera continua. La compatibilidad de una función reciente debe comprobarse en los navegadores que utilizará el público del sitio.
- **Tolerancia a errores.** El navegador puede recuperar determinados errores de marcado y mostrar la página. Que el resultado parezca correcto no garantiza que el documento sea válido: la recuperación puede producir un DOM distinto del esperado.

## ¿Por qué aprender HTML?


Conocer HTML permite construir páginas cuyo contenido conserva sentido sin depender de su diseño visual. Esto resulta útil al crear documentación, artículos, fichas de producto o interfaces con formularios: cada bloque puede expresar su función con claridad.


También permite revisar el resultado generado por un gestor de contenidos o un framework. Si un encabezado queda dentro de un párrafo, un enlace no funciona o un campo carece de etiqueta, comprender el marcado ayuda a localizar el problema en lugar de intentar corregirlo únicamente con estilos.


En accesibilidad, elegir controles nativos y organizar los encabezados facilita la navegación con teclado y lectores de pantalla. No garantiza por sí solo una página accesible, pero establece una base sobre la que comprobar nombres, relaciones y orden de lectura.


Para la optimización en buscadores, una estructura comprensible y enlaces descriptivos ayudan a interpretar el contenido y sus conexiones. Añadir etiquetas semánticas no garantiza mejores posiciones: deben acompañar información útil y una organización coherente.


Finalmente, entender las relaciones entre elementos facilita trabajar con [CSS](https://lineadecodigo.com/css/) y con el [DOM](https://lineadecodigo.com/dom/). Antes de cambiar el aspecto o el comportamiento de una interfaz, es necesario saber qué elementos existen y cómo están organizados.


## Ejemplo de HTM


Este documento representa la ficha de un taller con navegación interna y dos secciones. Guárdalo como `taller.html`, con codificación UTF-8, y ábrelo en un navegador. No necesita librerías, estilos ni scripts.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Taller de estructura web</title>
</head>
<body>
  <header>
    <h1>Taller de estructura web</h1>
    <nav aria-label="Secciones del taller">
      <ul>
        <li><a href="#programa">Consultar programa</a></li>
        <li><a href="#materiales">Consultar materiales</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Organiza una página con significado</h2>
      <p>Practica cómo distinguir navegación y contenido principal.</p>

      <section id="programa">
        <h3>Programa del taller</h3>
        <ol>
          <li>Definir la jerarquía de encabezados.</li>
          <li>Elegir los elementos semánticos adecuados.</li>
          <li>Conectar secciones mediante enlaces.</li>
        </ol>
      </section>

      <section id="materiales">
        <h3>Materiales necesarios</h3>
        <p>Un editor de texto y un navegador actualizado.</p>
      </section>
    </article>
  </main>

  <footer>
    <p>Actividad de práctica de desarrollo web.</p>
  </footer>
</body>
</html>
```


El navegador mostrará un título visible, dos enlaces, una descripción, una lista numerada y los materiales. Al activar «Consultar materiales», navegará al elemento cuyo `id` es `materiales`. El fragmento `#materiales` de `href` debe coincidir exactamente con ese identificador.


Las partes relevantes del documento son:

- `<!DOCTYPE html>` hace que el navegador utilice el modo de estándares. No es una etiqueta ni un selector de una versión numerada del lenguaje.
- `lang="es"` declara el idioma; `meta charset="utf-8"` establece la codificación para interpretar correctamente los caracteres. `title` identifica el documento en la pestaña, mientras que `h1` es el encabezado visible.
- `header`, `nav`, `main` y `footer` distinguen las regiones de la página. `aria-label` da un nombre accesible a la navegación; no añade un texto visible.
- `article` agrupa la ficha del taller. Cada `section` representa un apartado temático con su propio encabezado. Los niveles `h1`, `h2` y `h3` reflejan esa jerarquía.
- `ul` agrupa enlaces sin un orden secuencial necesario; `ol` indica que el programa sigue una secuencia. Cada entrada utiliza `li`.

La presentación será la predeterminada del navegador. Esa sencillez permite comprobar que el documento ya tiene estructura y navegación funcional sin confundir el significado de sus elementos con su apariencia.

