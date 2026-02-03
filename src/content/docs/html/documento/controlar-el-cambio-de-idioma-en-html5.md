---
title: "Controlar el cambio de idioma en HTML5"
description: "Descubre cómo controlar el cambio de idioma en HTML5 y mejora la experiencia del usuario al adaptar el contenido a sus preferencias de idioma. ¡Optimiza tu web ahora!"
date: 2022-10-16
updatedDate: 2026-01-21
tags: ["navigator","language","onlanguagechange"]
slug: html/documento/controlar-el-cambio-de-idioma-en-html5
author: victor_cuervo
type: doc
topic: html
id: 8d21d5ac-4d43-46ce-aa72-5677760dad40
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/P%C3%A1gina/cambio-idioma.html
---

Utilizar el idioma que tiene el usuario configurado en el navegador para presentar el contenido de nuestra web puede ser una buena alternativa sobre todo si es la primera vez que accede a nuestro sitio web o si no lo tenemos identificado. Es por ello que si seguimos esta técnica nos puede servir el saber cómo controlar el cambio de idioma en [HTML5](https://manualweb.net/html5/).


Es decir, saber si el usuario en algún momento ha decidido cambiar el idioma en el que se muestra el navegador. Posiblemente las veces que el usuario haga esta acción sean realmente pocas, pero no está demás el tener preparada nuestra web para poder actuar en el caso de que se produzca ese cambio.


## Obtener el idioma del navegador


Lo primero que tenemos que saber es que la propiedad `navigator.language` es la que nos permite recuperar el idioma que tiene el usuario configurado en su navegador. De esta manera el siguiente código nos servirá para poder mostrar en pantalla el idioma que tiene el usuario:


```javascript
alert(navigator.language);
```


## Controlar el evento onlanguagechange


Si lo que queremos hacer ahora es poder controlar el cambio de idioma en [HTML5](https://manualweb.net/html5/) lo que tendremos es que poder suscribirnos al evento [`onlanguagechange`](http://www.w3api.com/HTML/body/onlanguagechange/). Dicho evento lo podremos controlar directamente desde [el cuerpo de la página](https://lineadecodigo.com/tag/html5-body/) que estemos construyendo.


Al evento le asignaremos una función que será la que funcione de controlador de dicho evento. El código de nuestra página quedaría de la siguiente forma:


```html
<body onlanguagechange="cambioIdioma()">
<!-- Contenido de la página -->
</body>
```


## Implementar el controlador del cambio de idioma


Ahora solo nos quedará codificar la función `cambioIdioma()` para poder codificar en ella lo relativo al cambio del idioma que se ha producido. Cabe recordar que el nuevo idioma estará en la misma variable del navegador, es decir en `navigator.language`.


De esta forma podemos mostrarle al usuario el cambio de idioma mediante el siguiente código:


```javascript
function cambioIdioma() {
  alert("El idioma ha cambiado a: " + navigator.language);
}
```


De esta manera tan sencilla podemos controlar el cambio de idioma en [HTML5](https://manualweb.net/html5/) y adecuar el idioma de los textos que mostramos de una forma sencilla.


Aunque en este ejemplo hemos visto cómo podemos trabajar con la propiedad `navigator.language` y el cambio de idioma gestionado por [`onlanguagechange`](http://www.w3api.com/HTML/body/onlanguagechange/). Lo más recomendable para poder gestionar el idioma de un usuario es crearle un perfil y que el mismo usuario pueda gestionar sus preferencias en nuestra web.

