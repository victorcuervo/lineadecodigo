---
title: "Básicos"
description: "Afianza los conceptos básicos de HTML: etiquetas, atributos, anidamiento, listas y enlaces, con un documento práctico para probar y comprender en el navegador."
date: 2026-01-18
updatedDate: 2026-10-12
tags: ["html","etiqueta","enlaces","listas","entidades"]
slug: html/basicos
type: category
topic: html
id: 2eca9dfb-adca-8098-9da9-efe6afc87f4a
author: victor_cuervo
---

## ¿Qué es HTML Básicos?


**HTML Básicos** engloba los conceptos y las reglas necesarios para escribir un documento web: sintaxis de etiquetas, atributos, anidamiento y estructura del contenido. [HTML significa ](https://lineadecodigo.com/html/)[_HyperText Markup Language_](https://lineadecodigo.com/html/), o lenguaje de marcado de hipertexto. Describe qué representa la información; no es un lenguaje de programación para expresar algoritmos.


El marcado distingue un párrafo de un encabezado, una lista o un enlace. Una **etiqueta** es una marca como `<p>`; un **elemento** es la unidad completa que esa marca define, por ejemplo, `<p>Descripción del curso.</p>`. En los elementos que admiten contenido, la etiqueta de cierre incorpora una barra: `</p>`.


Los **atributos** añaden información al elemento y se escriben en la etiqueta de apertura. En `<a href="#requisitos">Consultar requisitos</a>`, `href` indica el destino del enlace. El texto comprendido entre las etiquetas es lo que lee y activa el usuario.


El navegador interpreta el documento y construye el [DOM](https://lineadecodigo.com/dom/), una representación en forma de árbol con elementos, atributos y texto. Comprender esta estructura permite comprobar no solo lo que se ve en pantalla, sino también las relaciones entre las distintas partes de la página.


## Características de HTML Básicos

- **Estructura del documento.** `html` contiene el documento; `head` reúne información como su título y codificación; `body` contiene el contenido de la página. La declaración `<!DOCTYPE html>` activa el modo de estándares del navegador: no es una etiqueta ni especifica una versión numerada de [HTML](https://lineadecodigo.com/html/). El atributo `lang` declara el idioma del contenido.
- **Sintaxis legible.** Las etiquetas y los atributos se escriben habitualmente en minúsculas y los valores de los atributos entre comillas. Aunque los nombres de etiquetas de [HTML](https://lineadecodigo.com/html/) no distinguen mayúsculas de minúsculas, esa convención facilita la lectura. La indentación ayuda a reconocer relaciones de contenido, pero no determina el anidamiento.
- **Elementos con contenido y elementos vacíos.** `p`, `a` y `ul` pueden contener texto u otros elementos permitidos. `img`, `br` y `meta` son elementos vacíos: no admiten contenido ni etiqueta de cierre. En [HTML](https://lineadecodigo.com/html/), la barra final de una escritura como `<br />` no convierte cualquier elemento en autocerrado.
- **Reglas de anidamiento.** El elemento abierto dentro de otro debe cerrarse antes de cerrar su contenedor cuando utiliza una etiqueta de cierre. Además, cada elemento tiene restricciones sobre el contenido que admite: `ul` agrupa entradas `li` y `p` no puede contener un encabezado. El navegador puede reparar ciertos errores, de modo que una página visible no demuestra que el marcado sea correcto.
- **Atributos con funciones distintas.** `id` identifica un elemento y debe ser único en el documento; `class` permite agrupar elementos para aplicar estilos o seleccionarlos. Los atributos booleanos, como `disabled` en un botón, se activan por su presencia. Para desactivarlos se omite el atributo: `disabled="false"` sigue dejando el botón deshabilitado.
- **Contenido organizado por significado.** `h1` a `h6` expresan niveles de encabezado; `p`, párrafos; `ul`, listas sin orden secuencial; y `ol`, listas ordenadas. Los niveles de encabezado deben representar la jerarquía del contenido, no elegirse por el tamaño visual de la letra. `main` identifica el contenido principal de la página.
- **Enlaces y rutas.** `a` con `href` conecta documentos o secciones. Un destino como `#requisitos` apunta a un identificador de la misma página; `curso.html` es una ruta relativa, resuelta respecto a la URL base del documento; una URL completa identifica un destino sin depender de esa ruta relativa.
- **Espacios y caracteres especiales.** Con la presentación predeterminada, las secuencias de espacios y saltos de línea del código se muestran normalmente como un único espacio. Para separar párrafos se utiliza `p`, no líneas vacías en el archivo. Las referencias de caracteres, también llamadas entidades en el uso habitual, permiten escribir símbolos reservados: `&lt;` representa `<` y `&amp;` representa `&`.

## ¿Por qué aprender HTML Básicos?


Dominar estas reglas permite convertir contenido en una página comprensible y navegable. En una ficha de curso, por ejemplo, los encabezados distinguen apartados, las listas organizan requisitos y los enlaces conducen a información relacionada sin necesitar programación adicional.


También facilita corregir errores concretos: una ruta relativa mal resuelta, un identificador duplicado o una etiqueta mal anidada pueden producir navegación incorrecta o una estructura distinta de la prevista. Inspeccionar el [DOM](https://lineadecodigo.com/dom/) con las herramientas del navegador ayuda a comprobar cómo se ha interpretado el archivo.


El uso de elementos adecuados beneficia la accesibilidad. Los encabezados facilitan recorrer el contenido con lectores de pantalla; los enlaces con texto descriptivo permiten anticipar su destino. Cuando se añaden imágenes informativas, su atributo `alt` debe comunicar la información relevante que aportan; las imágenes puramente decorativas suelen utilizar `alt=""`.


Estas bases también permiten revisar el marcado generado por un gestor de contenidos y separar responsabilidades: [HTML](https://lineadecodigo.com/html/) expresa estructura y significado, [CSS](https://lineadecodigo.com/css/) controla la presentación y JavaScript añade lógica y comportamiento. Si la estructura es incorrecta, cambiar únicamente el aspecto no resuelve el problema de fondo.


## Ejemplo de HTML Básicos


El siguiente documento presenta un curso con requisitos y un programa ordenado. Guárdalo como `curso.html` usando codificación UTF-8 y ábrelo en un navegador. Funciona sin archivos adicionales, estilos ni scripts.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Curso de introducción a la web</title>
</head>
<body>
  <main>
    <h1>Curso de introducción a la web</h1>
    <p>Practica cómo organizar el contenido de una página.</p>
    <p><a href="#requisitos">Consultar requisitos del curso</a></p>

    <h2 id="requisitos">Requisitos</h2>
    <ul>
      <li>Un editor de texto.</li>
      <li>Un navegador actualizado.</li>
    </ul>

    <h2>Programa</h2>
    <ol>
      <li>Crear la estructura del documento.</li>
      <li>Añadir párrafos y listas.</li>
      <li>Conectar contenido mediante enlaces.</li>
    </ol>

    <p>Una etiqueta de párrafo comienza con <code>&lt;p&gt;</code>.</p>
    <p>El objetivo es combinar estructura &amp; claridad.</p>
  </main>
</body>
</html>
```


El resultado es una página con un encabezado principal, una descripción, un enlace interno y dos apartados. La lista de requisitos aparece con viñetas y el programa con numeración. El texto final muestra literalmente `<p>` y el símbolo `&`, sin interpretarlos como marcado adicional.


Las partes relevantes son:

- `meta charset="utf-8"` indica cómo interpretar los caracteres del archivo. `title` proporciona el título de la pestaña, mientras que `h1` muestra el encabezado principal dentro de la página.
- `main` agrupa el contenido principal. Los dos `h2` son apartados del mismo nivel bajo el `h1`; no se añaden niveles únicamente para cambiar su apariencia.
- `href="#requisitos"` y `id="requisitos"` relacionan el enlace con el apartado de destino. El identificador y el fragmento deben coincidir exactamente.
- Cada entrada de las listas está dentro de `li`. Se utiliza `ul` para materiales sin secuencia obligatoria y `ol` para pasos cuyo orden sí aporta significado.
- `code` identifica un fragmento de código dentro de un párrafo. Las referencias `&lt;` y `&gt;` permiten mostrar los delimitadores de una etiqueta como texto.

Para comprobar el comportamiento, activa el enlace y observa que la dirección incorpora `#requisitos`; si el documento requiere desplazamiento, el navegador se moverá hasta ese apartado. Después, abre las herramientas de desarrollo y examina cómo `main` contiene encabezados, párrafos y listas. Puedes añadir un nuevo `li` al programa y volver a cargar el archivo: la numeración se actualizará automáticamente.

