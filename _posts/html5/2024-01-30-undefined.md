---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y64KTPG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FDOWDe3kFvLD1WUOIdQ8jeOAzBoPT5Ez%2FHiSbLvnEwIhAMa0hYrjYDgTlPwXMT%2FSXBJ1SsvccjhaP18TLN5FpOEAKv8DCCIQABoMNjM3NDIzMTgzODA1IgxKa1yuskkWkJSMpUUq3AMnJecw6w5kL64ZxAPC0DUUyK897SOiToJL%2BV1ZWmFkFiOfDp%2B%2BLoZHQ5tCKwRApieaz6h1CtIw%2FIPhXpEqOiBECKre8xKSML%2FZgz4AEHIL54vjLx0e%2B74x6HN7x0ZHB7BDd15wm6Uvp2mgCM%2FapQJ4FPOaZ1BLypGk5EScY5wkscle176oQU64RBRXoj4WJ4jRSgYmFV5hXHURMyrZ2q8RSmdYC7JCw7N0P3dE4fMBGUfZD04w1%2B7t%2Fa8RMhcGEMhRpSEifeRWqKN5vvAERK8dEBGEsEVwXN7xWljNKivCdJrTeLA2WUdsWcoYlRZjnnf0%2BLr11JPliHTQRDGo%2BVfr1CnjGxCYP8Xsp%2BPcaDfYRVKkb9bZ%2FL3QZE3l0%2B4wX5O3nUNbcI81nFWP4L2uSU1ffqg7CcUqZmOA1vQK8lc9%2FSKwKv3N4RT7OupeDc6imZDdwfF%2BIC4J0IgHLQ4Lmh4vxrJQfFCksjmMBtTk2GedDTZHCi7jZsA2VV4C3gbjbEeN0ZcVA5PXp5PnphvQcKD8qPo2FmIJnME4z74oq%2B0z5kCmHEw8NbsrDioR%2BeGYx3NxvJIOc9SzRUT36wQ%2Buz0xKzoiG%2FfpVimx7HmNvGhjYDf6ll5tG%2B4CR4KrijDUlL7JBjqkAU2Xr0cbUxkloAwsnIfVYebW4%2FnOrWbS4X3PpQSkwRVgXu2I0%2BcRBtvTy4SvqHwkG8T685sHtNWGGcSLHO5AMLOUEhuRj1J1RT2XTmKo39VB92jR%2FCwYSCsTNAUmmMS1pb01%2B%2F03JgnJgh4wXEU%2B5KykHgIv0KmrF3sd1%2Bg4hOKguZqnKqBwxeWPz3ZD%2Bh3sdh6Dz%2FLxEh70sx8tUuTkc75lk3W7&X-Amz-Signature=660155cee710fe00ca239ee2cefe71354f6c139d2b8ff07049a84df509018586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQ5AOKW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHvHAH00TGcAfhgYYD238ZXAxohuNo%2BiNvX75MWUZZ8cAiAkKQ2iIDvcPRzZI%2BpLRM6KClQjaZ81OSJZIEWhhuOfBSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMdhXwl5xW6ACKb3g8KtwDSNdTV0s3t7bakBQzLt6Tn1vhfWCn3c%2Fivjza9IWSPaQe4mRlnf0Eec2aTSzlrBExCpRuC1EZrcEUU2kmfjBVktaJUtINOg0D9C8m4vRzVcR1MGURZLBgAea8qYr3B42FZdb2VtjxP%2B%2FJgJgtSDmVpss5lVVDgqmqDGKAjgMuZwb3LIcE1JiLPN%2Fa9itYQURxqcVzEZphHQWcC1ee4NiE2D07dD5l%2Fq%2FlqFsF4VM4q5tsn75X0JIwGYBzkqq1gKC6kin%2BKjc6czd%2FbvfYHKqWSslqM0uX3ewb7L44AhwBkP%2BYEGtl1ppZ4wnvSyB99MWzIoAiMJf7loXRroljWUqAMCoE1PZd3vdKscYeWHBbFsso%2F4lE4GPOYs1YQ6uyOgT5j4GzL%2FD3mThq8%2FzSVZ1B1vWvLkdxUZRU509pGMMOCkjxKa76xWPBL8nkkYdus%2BWwXfwYTSgez9jJqtSk4zcg6uT071gZcNM8LVWXH3EvRg3337kKpytYzI97HgkWuWWBVVUqX338QYwLwQdK6VqM8TQk2l6CRfX2PV5iEC0x9hf%2FECn4p%2FWzPikpbe7XkLIkTuHoTK%2BeZUagbcr5ISqgiDfGEq4jmJtsdiPNlO2ZB0aJIeFPpZ%2F6iQbepj8wyJS%2ByQY6pgEzHq4AmO10bsfq3AelcQoHWgL%2F9FZy8hxpb%2FODKVTskVZoMkc%2FzSZq%2BRQZRbTKKEAfS6IFjyR%2BSa%2FupFzabXaIeGF3KTcR%2Bmi%2BCZR08SbF9XcCpr2mXThfL2xZ2ANOFWiTfnE9ivGTINYHAQZ1J5iXrJxe4JK6f5YWpeWUGuTGL%2B9eHj3qpExjJiqz9%2Fujz9k64byeF6%2Bok7UENb5AWevLOQgdF4ia&X-Amz-Signature=63b580b76e30cd22a59199fe9eb3a24be74b62756ab11eee688cb600c42d6420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

