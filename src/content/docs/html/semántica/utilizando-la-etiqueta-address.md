---
title: "Utilizando la etiqueta ADDRESS"
description: "Utilizando la etiqueta ADDRESS: aprende a marcar datos de contacto en HTML con semántica correcta, ejemplos prácticos y buenas prácticas actuales."
date: 2010-09-08
updatedDate: 2026-09-28
tags: ["html","address","semantica"]
slug: html/semantica/utilizando-la-etiqueta-address
type: doc
topic: html
id: 2c8a9dfb-adca-8190-82a3-e421f49e8769
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/pagina/indicar-contacto-pagina.html
---

La etiqueta `ADDRESS` de [HTML](https://lineadecodigo.com/html/) permite identificar de forma semántica la información de contacto relacionada con una página o con un artículo concreto. Aunque suele pasar desapercibida, utilizarla correctamente ayuda a describir mejor el contenido del documento.


En la especificación actual, el elemento `<address>` representa los datos de contacto de una persona, un grupo de personas o una organización. Su significado depende del elemento más cercano que lo contiene: `<article>` o, si no existe uno, `<body>`.


## Estructura de la etiqueta ADDRESS


La estructura básica es la siguiente:


```html
<address>
  Información de contacto
</address>
```


Dentro de `<address>` se pueden incluir nombres, direcciones postales, números de teléfono y enlaces de contacto. Por ejemplo:


```html
<address>
  Víctor Cuervo<br>
  Calle Ejemplo, 14, 2.º B<br>
  05003 Ávila<br>
  Teléfono: <a href="tel:+34920222227">+34 920 22 22 27</a><br>
  Correo: <a href="mailto:contacto@example.com">contacto@example.com</a>
</address>
```


El elemento `<br>` se utiliza para separar visualmente las líneas de una dirección. En [HTML](https://lineadecodigo.com/html/) es un elemento vacío, por lo que no necesita una etiqueta de cierre `</br>`.


## Información de contacto de una página


Cuando `<address>` aparece asociado a `<body>`, contiene la información de contacto general de la página o del sitio. Es habitual colocarlo dentro de `<footer>`:


```html
<footer>
  <address>
    Contacto:
    <a href="mailto:info@example.com">info@example.com</a>
  </address>
</footer>
```


Esta estructura no significa que `<address>` deba contener cualquier dirección postal mencionada en el texto. Debe utilizarse únicamente cuando esa información identifica una vía de contacto relacionada con el documento.


## Información de contacto de un artículo


También puede utilizarse dentro de `<article>` para indicar cómo contactar con el autor o responsable de ese contenido:


```html
<article>
  <h2>Guía de etiquetas semánticas</h2>
  <p>Contenido del artículo...</p>

  <footer>
    <address>
      Escrito por
      <a href="https://example.com/autores/victor">Víctor Cuervo</a>
    </address>
  </footer>
</article>
```


En este caso, `<address>` queda asociado al `<article>` más cercano, no a toda la página.


## Buenas prácticas al utilizar ADDRESS

- Incluye únicamente información de contacto pertinente: nombre, organización, dirección postal, teléfono, correo electrónico o enlaces de contacto.
- Utiliza enlaces `mailto:` y `tel:` cuando faciliten que el usuario pueda escribir o llamar directamente.
- No uses `<address>` para aplicar cursiva. Aunque los navegadores suelen mostrarlo así por defecto, su finalidad es semántica y el aspecto visual debe controlarse con [CSS](https://lineadecodigo.com/css/).
- No incluyas fechas de publicación dentro de `<address>`; para ellas resulta más apropiado el elemento `<time>`.
- No lo emplees para marcar cualquier ubicación o dirección postal que aparezca en el contenido si no representa información de contacto.
- Sitúalo normalmente en el `<footer>` de la página o de la sección a la que pertenezca.

Puedes ampliar la información en la [documentación del elemento ADDRESS de MDN](https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/address) y en el artículo en inglés [Use of ADDRESS Element](https://snook.ca/archives/html_and_css/use_of_address_element).

