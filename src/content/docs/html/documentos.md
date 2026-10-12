---
title: "Documentos"
description: "Comprende la estructura de los documentos HTML: doctype, cabecera, cuerpo y árbol DOM, con un ejemplo completo para guardar y abrir en el navegador."
date: 2026-10-12
updatedDate: 2026-10-12
tags: ["doctype","head","body","utf8"]
slug: html/documentos
type: category
topic: html
id: 3f7a9dfb-adca-80f5-8b9d-ecc7c2435e39
author: victor_cuervo
---

## ¿Qué son los documentos HTML?


Los **documentos HTML** son documentos de texto escritos con el [lenguaje de marcado HTML](https://lineadecodigo.com/html/) que describen la estructura y el significado del contenido de una página web. El navegador interpreta sus elementos para presentar encabezados, párrafos, enlaces, imágenes y otros componentes.


Un documento puede guardarse en un archivo con extensión `.html` o `.htm`, pero también puede generarse en un servidor y enviarse como respuesta a una petición web. Por tanto, una página no necesita corresponder a un archivo físico con esa extensión. Al servir [HTML](https://lineadecodigo.com/html/) por HTTP, el tipo de contenido habitual es `text/html`.


Su organización básica distingue el elemento raíz `html`, la **cabecera del documento** (`head`) y el **cuerpo** (`body`). La cabecera contiene información sobre el documento, como su título y codificación; el cuerpo reúne el contenido de la página. `head` no debe confundirse con `header`: este último representa una zona introductoria dentro del contenido, como la cabecera visible de una página o un artículo.


Al analizar el marcado, el navegador construye el [DOM (Document Object Model)](https://lineadecodigo.com/dom/), un árbol de nodos que representa elementos, texto y sus relaciones. El código fuente, ese árbol y el resultado visual son tres cosas distintas: el archivo contiene marcado, el [DOM](https://lineadecodigo.com/dom/) representa su interpretación y el renderizado transforma esa estructura y sus estilos en una presentación en pantalla.


## Características de los documentos HTML

- **Declaración de tipo de documento.** `<!DOCTYPE html>` se coloca al principio y hace que el navegador utilice el modo de estándares. No es un elemento ni selecciona una versión numerada del lenguaje. Omitirla puede activar un modo de compatibilidad histórica que altere la presentación.
- **Un elemento raíz.** `html` contiene `head` y `body`. Su atributo `lang`, por ejemplo `lang="es"`, declara el idioma principal y ayuda a los lectores de pantalla a pronunciar el contenido. Conviene escribir explícitamente esta estructura aunque [HTML](https://lineadecodigo.com/html/) permita omitir ciertas etiquetas en condiciones concretas.
- **Cabecera con información del documento.** `title` proporciona el título que suele mostrarse en la pestaña. `meta` puede declarar la codificación y otros ajustes. La cabecera también puede referenciar recursos mediante `link`. No es el lugar para colocar párrafos o encabezados visibles.
- **Codificación coherente.** Guardar el archivo en UTF-8 y declarar `<meta charset="utf-8">` evita discrepancias al interpretar caracteres como tildes o eñes. La declaración debe aparecer al principio de `head`, completamente dentro de los primeros 1024 bytes del documento. Si se entrega por HTTP, el servidor también debe comunicar una codificación coherente, por ejemplo con `Content-Type: text/html; charset=utf-8`.
- **Cuerpo organizado por significado.** `body` puede contener regiones como `main`, encabezados, listas y otros elementos. `title` identifica el documento, mientras que `h1` encabeza su contenido visible: pueden estar relacionados, pero cumplen funciones diferentes. La jerarquía de encabezados expresa la organización de la información.
- **Árbol construido a partir del marcado.** El navegador aplica reglas de análisis y recuperación de errores, no se limita a reproducir las etiquetas literalmente. Un anidamiento inválido puede generar un DOM distinto del esperado. Para comprobar la estructura real se utiliza el inspector de elementos; para consultar el texto original se revisa el código fuente.
- **Documento completo frente a fragmento.** Una secuencia como `<p>Descripción.</p>` es un fragmento que puede insertarse en un documento existente. No muestra por sí sola la estructura completa de una página. Cuando se prepara un archivo independiente, conviene incluir la declaración, la raíz, la cabecera y el cuerpo.
- **Referencias a otros recursos.** Imágenes y enlaces pueden apuntar a archivos mediante URLs. Sin un elemento `base` que cambie la referencia, una ruta relativa como `imagenes/plano.png` se resuelve respecto a la URL del documento. Mover el archivo a otra carpeta puede cambiar el destino de esas rutas; abrirlo localmente tampoco reproduce todas las condiciones de un servidor web.

## ¿Por qué aprender documentos HTML?


Comprender esta estructura permite crear páginas independientes y revisar las plantillas que generan gestores de contenidos o aplicaciones web. Ayuda a decidir qué información pertenece a la cabecera y qué contenido debe situarse en el cuerpo, sin mezclar ambos niveles.


También permite resolver problemas concretos: caracteres mal interpretados, títulos de pestaña ausentes, recursos que no se encuentran tras mover un archivo o diferencias de presentación causadas por un doctype omitido. En estos casos hay que revisar el documento y su entrega, no únicamente el texto visible.


La diferencia entre fuente y [DOM](https://lineadecodigo.com/dom/) resulta útil para depurar errores de anidamiento. Si la página parece correcta pero sus elementos no están donde se esperaba, el inspector muestra cómo la ha interpretado realmente el navegador. Un validador de [HTML](https://lineadecodigo.com/html/) complementa esa comprobación al detectar incumplimientos del marcado.


Una estructura coherente facilita además trabajar con [accesibilidad](https://lineadecodigo.com/html/accesibilidad/), [CSS](https://lineadecodigo.com/css/) y [JavaScript](https://lineadecodigo.com/javascript/). El idioma y los encabezados ayudan a interpretar y recorrer el contenido; los estilos actúan sobre elementos existentes y los scripts pueden consultar o modificar el árbol. Ninguna de estas capas sustituye una organización correcta del documento.


## Ejemplo de documentos HTML


Este documento presenta una ficha de una biblioteca. Guárdalo como `biblioteca.html` con codificación UTF-8 y ábrelo en un navegador. No necesita recursos externos, CSS ni JavaScript.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Biblioteca del barrio: horario y servicios</title>
</head>
<body>
  <header>
    <h1>Biblioteca del barrio</h1>
    <p>Información para preparar tu visita.</p>
  </header>

  <main>
    <section>
      <h2>Horario</h2>
      <p>De lunes a viernes, de 9:00 a 19:00.</p>
      <p><a href="#servicios">Consultar los servicios disponibles</a></p>
    </section>

    <section id="servicios">
      <h2>Servicios</h2>
      <ul>
        <li>Préstamo de libros.</li>
        <li>Sala de lectura.</li>
        <li>Consulta de catálogos.</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Acceso gratuito a la sala de lectura.</p>
  </footer>
</body>
</html>
```


La pestaña mostrará «Biblioteca del barrio: horario y servicios». En la página aparecerán el encabezado «Biblioteca del barrio», el horario, un enlace y una lista de servicios. La cabecera `head` no se presenta como una región visible; `header`, en cambio, sí forma parte del cuerpo.


Las partes relevantes del ejemplo son:

- `html` contiene dos ramas principales: `head` y `body`. Dentro de `body`, `header`, `main` y `footer` son elementos hermanos. Las dos secciones son hijas de `main`; esta relación describe parte del árbol DOM.
- `meta charset` establece la codificación. La declaración `viewport` indica a los navegadores móviles que utilicen el ancho del dispositivo como referencia y una escala inicial de 1. No crea por sí sola un diseño adaptable.
- `h1` introduce la página y los dos `h2` identifican apartados del mismo nivel. Los párrafos y la lista pertenecen a esos apartados por su posición en la estructura.
- El enlace utiliza `href="#servicios"` para navegar hasta la sección con `id="servicios"`. Al activarlo, la URL incorpora ese fragmento y, si es necesario, el navegador desplaza la página hasta el destino.

Para comprobar la separación entre cabecera y cuerpo, cambia únicamente el contenido de `title`, guarda el archivo y vuelve a cargarlo. Cambiará el título de la pestaña, pero no el encabezado visible. Después, inspecciona `main` en las herramientas de desarrollo: podrás recorrer sus dos secciones y comprobar que el árbol refleja la organización del contenido.

