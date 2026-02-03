---
title: "Asociar un botón a cualquier formulario con HTML5"
description: "Descubre cómo asociar un botón a cualquier formulario con HTML5 y optimiza la funcionalidad de tus formularios con atributos como formaction y formmethod."
date: 2022-05-22
updatedDate: 2026-01-23
tags: ["button","form","formaction","formmethod"]
slug: html/formularios/asociar-un-boton-a-cualquier-formulario-con-html5
author: victor_cuervo
type: doc
id: 8d80fa23-1c4f-437f-bd24-24e3e6cd7dc8
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/asociar-boton-formulario.html
---

Quizás uno de los nuevos atributos de [HTML5](https://www.manualweb.net/html5) que nos haya pasado por alto, aunque es de gran utilidad, es [el atributo `form`](https://www.w3api.com/HTML/button/form/) del [elemento `button`](https://www.w3api.com/HTML/button/). Esto nos va a permitir asociar un botón a cualquier formulario con [HTML5](https://www.manualweb.net/html5).


Es decir, independientemente de dónde tengamos el formulario y dónde tengamos el botón dentro de la estructura de nuestra página, podremos asociarlos para que funcionen de manera conjunta. Y es que hasta la especificación de [HTML5](https://www.manualweb.net/html5) los botones quedaban asociados al formulario padre en el que se encontrasen ubicados. Complicando bastante la forma en la que diseñábamos los formularios y disponíamos los botones, llevándonos a realizar diseños peculiares. Además, a esto se sumaba la imposibilidad de anidar formularios que nos habría ayudado a colocar los elementos.


## Crear un formulario básico


Para explicarlo lo primero que [necesitamos es un formulario](https://lineadecodigo.com/html/formulario-para-pedir-passwords/). Crearemos un simple formulario con el [elemento `form`](http://www.w3api.com/HTML/form/) que contenga una descripción o etiqueta mediante el [elemento `label`](https://www.w3api.com/HTML/label/) y un campo de entrada definido con un [elemento `input`](https://www.w3api.com/HTML/input/).


```html
<form id="miformulario" action="send" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
</form>
```


Como podemos ver el formulario se envía vía _POST_ a un servicio que hemos llamado _"send"_.


## Añadir un botón al formulario


Si queremos enviar el formulario tendremos que añadir un botón, ya sea un botón del [elemento `button`](https://www.w3api.com/HTML/button/) o un [`input` de tipo "button"](https://www.w3api.com/HTML/input/type/). Este botón se añade dentro del elemento del formulario, es decir, dentro del [`form`](http://www.w3api.com/HTML/form/).


```html
<form id="miformulario" action="send" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <button type="submit">Enviar</button>
</form>
```


## Utilizar el atributo form


Pero ahora ya podemos asociar un botón a cualquier formulario con [HTML5](https://www.manualweb.net/html5). Para ello tenemos que saber que el [elemento `button`](https://www.w3api.com/HTML/button/) tiene un [atributo que se llama `form`](https://www.w3api.com/HTML/button/form/). Este atributo puede contener el ID de cualquier formulario de nuestra página, es decir, del valor que hayamos asociado al atributo `id` del formulario.


En nuestro ejemplo el formulario que creamos tenía un atributo `id` al cual dimos un valor de _"miformulario"_. Es por ello que podremos crear el botón en cualquier parte de nuestra página de la siguiente forma:


```html
<button type="submit" form="miformulario">Enviar Formulario</button>
```


## Atributos formaction y formmethod


Pero el atributo form no es el único que nos da capacidades de asociar un botón a cualquier formulario con [HTML5](https://www.manualweb.net/html5), sino que encontramos otros atributos como [`formaction`](https://www.w3api.com/HTML/button/formaction/) o [`formmethod`](https://www.w3api.com/HTML/button/formmethod/) que nos permiten cambiar el destino del formulario y la forma de envío desde el propio botón.


Es decir, podríamos indicar ahora que la petición es de tipo _GET_ y que se envía a un servicio que denomimaremos _"enviar.php"_. Una potencia enorme a la hora de crear botones asociados a formularios. En este caso el código quedaría de la siguiente forma:


```html
<button type="submit" form="miformulario" formaction="enviar.php" formmethod="get">Enviar con GET</button>
```


Espero que hayas aprendido como asociar un botón a cualquier formulario con [HTML5](https://www.manualweb.net/html5) mediante el atributo form y otras capacidades extra que nos ofrecen los atributos [`formaction`](https://www.w3api.com/HTML/button/formaction/) o [`formmethod`](https://www.w3api.com/HTML/button/formmethod/).

