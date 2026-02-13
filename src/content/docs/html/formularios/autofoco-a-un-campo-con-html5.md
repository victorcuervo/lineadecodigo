---
title: "Autofoco a un campo con HTML5"
description: "Descubre cómo implementar autofoco a un campo en HTML5 de manera sencilla y efectiva, mejorando la experiencia del usuario en tus formularios."
date: 2012-02-05
updatedDate: 2026-02-13
tags: ["input","form","focus"]
slug: html/formularios/autofoco-a-un-campo-con-html5
type: doc
topic: html
id: aa768deb-42d9-4c03-b33c-62ca84a97630
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/autofoco-a-un-campo.html
---

Antes de tener la especificación de [HTML5](https://www.manualweb.net/html5/) si queríamos realizar un autofoco a un campo, es decir, que al cargar una página el foco del cursor se pusiese en un campo de un formulario, [teníamos que utilizar código Javascript](http://lineadecodigo.com/javascript/hacer-foco-en-un-campo-de-la-pagina-usando-javascript/).


Ahora, gracias a [HTML5](https://www.manualweb.net/html5/), podemos acometer esta labor de una forma sencilla.


## Definir el formulario


Lo primero será definir el formulario. En nuestro caso tendrá dos simples campos de entrada de texto:


```html
<form action="formulario.html" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre"/>
  <label for="apellidos">Apellidos:</label>
  <input type="text" name="apellidos" id="apellidos"/>
  <input type="submit" value="Enviar"/>
</form>
```


## Aplicar el atributo autofocus


Si lo que queremos es que el autofoco se realice sobre el campo [INPUT](https://www.w3api.com/HTML/input/) nombre, le añadiremos el atributo [autofocus](https://www.w3api.com/HTML/autofocus/). Quedándonos el siguiente código:


```html
<form action="formulario.html" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre" autofocus/>
  <label for="apellidos">Apellidos:</label>
  <input type="text" name="apellidos" id="apellidos"/>
  <input type="submit" value="Enviar"/>
</form>
```


> El atributo [`autofocus`](https://www.w3api.com/HTML/input/.autofocus) solo puede aplicarse sobre un único campo del formulario.


## Compatibilidad con navegadores


Solo tenemos que tener cuidado de una cosa y es que la especificación [HTML5](https://www.manualweb.net/html5/) todavía no está terminada ni implementada en todos los navegadores web. Es por ello que puede ser que no funcione correctamente. Las versiones mínimas en las que funciona son [Chrome](http://www.ayudaenlaweb.com/navegadores/que-es-google-chrome/) 6, [Firefox](http://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4, [Opera](http://www.ayudaenlaweb.com/navegadores/que-es-opera/) 11, [Safari](http://www.ayudaenlaweb.com/navegadores/que-es-safari/) 5 e [Internet Explorer](http://www.ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 10. Quizás la versión del [Internet Explorer](http://www.ayudaenlaweb.com/navegadores/que-es-internet-explorer/) sea la que más problemas pueda ocasionarte.


## Solución con Javascript


En este caso podemos recurrir a la implementación en [Javascript](https://www.manualweb.net/javascript/). En este caso vamos a crear mediante [Javascript](https://www.manualweb.net/javascript/) un elemento [INPUT](https://www.w3api.com/HTML/input/) ficticio y vamos a comprobar si este tiene el atributo autofocus o no. En caso de que no lo tenga, lanzaremos el código [Javascript](https://www.manualweb.net/javascript/) con el método [.focus()](https://www.w3api.com/HTMLDOM/HTMLElement/focus/):


```javascript
if (!("autofocus" in document.createElement("input"))) {
  document.getElementById("nombre").focus();
}
```

