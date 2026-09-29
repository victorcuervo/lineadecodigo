---
title: "Campos de búsqueda en HTML5"
description: "Campos de búsqueda en HTML5: aprende a usar input type search, crear un formulario accesible y configurar etiquetas, validación y envío mediante GET."
date: 2019-03-25
updatedDate: 2026-09-29
tags: ["html5","form","input","required","get"]
slug: html/formularios/campos-de-busqueda-en-html5
type: doc
topic: html
id: 6ba040ec-6eae-48e9-a791-0a2d27c10467
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/input-busqueda.html
---

Al crear una página web es habitual incluir una sección desde la que el usuario pueda buscar productos, artículos u otros contenidos. Los campos de búsqueda en HTML5 permiten representar esta función de forma semántica mediante el elemento `<input>` con el valor `search` en su atributo `type`.


Antes de incorporar los nuevos tipos de `<input>`, estos controles solían declararse con `type="text"`. Aunque ambos permiten introducir texto, `type="search"` comunica al navegador y a las tecnologías de asistencia que el campo contiene una consulta de búsqueda.


## Crear un campo de búsqueda en HTML5


La estructura mínima de un campo de búsqueda es la siguiente:


```html
<input type="search" id="busqueda" name="q">
```


Los atributos utilizados cumplen estas funciones:

- `type="search"` identifica el control como un campo de búsqueda.
- `id="busqueda"` permite asociarlo a un elemento `<label>` y seleccionarlo desde otros recursos.
- `name="q"` define el nombre con el que se enviará la consulta al servidor.

El valor `q` es una convención frecuente, pero puede sustituirse por otro nombre si el servidor espera un parámetro diferente.


## Formulario de búsqueda completo


Un campo de búsqueda debe incluirse dentro de un `<form>` para poder enviar el término introducido. También necesita una etiqueta visible y un botón de envío:


```html
<form action="/buscar" method="get" role="search">
  <label for="busqueda">¿Qué quieres buscar?</label>
  <input type="search" id="busqueda" name="q">
  <button type="submit">Buscar</button>
</form>
```


El atributo `for` de `<label>` coincide con el `id` del campo. De este modo, al pulsar sobre la etiqueta se activa el control y los lectores de pantalla pueden anunciar correctamente su propósito.


El valor `search` de `role` convierte el formulario en una región de búsqueda identificable. No sustituye a `<label>`: la región y el campo cumplen funciones de accesibilidad diferentes.


## Enviar la consulta mediante GET


El formulario utiliza el método `GET`, por lo que el término buscado se incorpora a la `URL`. Si el usuario escribe «canvas», el navegador generará una dirección similar a esta:


```text
/buscar?q=canvas
```


La ruta indicada en `action` debe existir en el servidor y procesar el parámetro `q`. El elemento `<input type="search">` recoge y envía el texto, pero no implementa por sí mismo el sistema de búsqueda.


Este método resulta adecuado cuando la operación solo consulta información. Además, permite copiar, guardar o compartir la `URL` de los resultados.


## Atributos útiles para campos de búsqueda


Podemos mejorar el formulario mediante atributos adicionales:


```html
<form action="/buscar" method="get" role="search">
  <label for="busqueda">Buscar en el sitio</label>
  <input
    type="search"
    id="busqueda"
    name="q"
    placeholder="Ejemplo: formularios HTML5"
    autocomplete="off"
    enterkeyhint="search"
    minlength="2"
    maxlength="80"
    required
  >
  <button type="submit">Buscar</button>
</form>
```

- `placeholder` muestra un ejemplo breve mientras el campo está vacío. No debe utilizarse como sustituto de `<label>`.
- `autocomplete="off"` solicita al navegador que no muestre valores introducidos anteriormente, aunque el comportamiento final depende del navegador.
- `enterkeyhint="search"` puede mostrar una tecla de búsqueda en los teclados virtuales.
- `minlength` y `maxlength` limitan la longitud mínima y máxima de la consulta.
- `required` impide enviar el formulario vacío mediante la validación integrada del navegador.

Estas comprobaciones mejoran la experiencia de uso, pero cualquier aplicación debe validar y tratar el valor recibido también en el servidor.


## Diferencias entre search y text


En la mayoría de los navegadores, `<input type="search">` se comporta de forma parecida a `<input type="text">`. Sin embargo, existen algunas diferencias:

- El control tiene la función semántica de cuadro de búsqueda.
- Algunos navegadores muestran un botón para borrar su contenido.
- La apariencia predeterminada puede variar según el navegador y el sistema operativo.
- Admite atributos de validación como `required`, `minlength`, `maxlength` y `pattern`.

El tipo `search` no valida que el texto sea una búsqueda real ni mejora automáticamente el posicionamiento de la página. Su principal ventaja es describir correctamente la finalidad del control y permitir que el navegador adapte su interfaz.


## Accesibilidad del formulario de búsqueda


Para que los campos de búsqueda en HTML5 sean accesibles:

- Incluye siempre un `<label>` asociado, aunque visualmente el propósito parezca evidente.
- No dependas exclusivamente de un icono de lupa o del atributo `placeholder`.
- Agrupa el campo y el botón dentro de una región de búsqueda mediante `role="search"`.
- Si una página tiene varios buscadores diferentes, proporciona un nombre accesible para distinguir cada región.
- Utiliza un `<button>` con texto comprensible para enviar el formulario.

Un `<input type="search">` sin el atributo `list` tiene de forma implícita la función accesible `searchbox`. Esta semántica ayuda a las tecnologías de asistencia a comunicar el tipo de control.


## Cuándo utilizar un campo de búsqueda


Utiliza `type="search"` cuando el usuario vaya a introducir una consulta destinada a localizar información. Para datos generales como nombres, títulos o comentarios, `type="text"` continúa siendo la opción apropiada.


Con esta estructura obtenemos un formulario semántico, accesible y preparado para enviar búsquedas al servidor sin necesidad de código adicional en el navegador

