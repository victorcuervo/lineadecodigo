---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVHIIWC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3WkQcWNYnwR7ap8rptwSmXywV5%2B0CHCgfjU%2BTEZ4NjAiEA4U4Mrl85IxQBvFprBl3vlteoRggzfWvUaypwofZ6mhIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJlt8ehKumTLmP3bASrcA29H2FAc%2FOV7mHshniASVyN2MTfrmUYmkVH4EDmpokd12hClMj7NxPUtbNksSqFpx%2BD4mTyl790cACB6m0lk1v%2ByJSdrq7v0ErhFxe4uY%2B05zKXaTlV5iRcaraZdObn27CKTiOxXXi6UxlXOQxL43gfU5M7sp6MkvTv7ZQi89FnEuKNs0xLX5HauGcA6lEBpY1ZTuBY4qHvBFTCQrAGLEzyY1PDad3R93ZjF1G8mGsRbd3uATtj837GW6SXuJuPVXh9mq1w%2B61FjWlC3zY9QtmIiruwhTEXxIUYzDdPZxckxMkj1RlUhr2PE8niN6M%2FN9KDVe1f%2B%2Fw0GaeU8WXx%2FFQTu9aKXrJwU0djrDtVrYCJeKOZRZbYewDBUZo6FbhgHIQmTCQ9ZKK%2B8enRK59Suh8puF8OOF%2FjTOL1lb4QT0TNvgQcsU24HphQHpiXFeeOapbEB7T0b0bUhJhMuhUCxGJUUyBNMoNvsws5sUZI1b4vDNVxoeWE2VyDSjc6ltBlwVTN%2BrqTwkdty%2Bzt%2Fwro97bFyP0%2B9XaE3CBVeZIGC6RSJLxksPo2LqsE1yKwlGhm9MAs3lOrSA6VqmABtfqBUxc0be7PPPXbpOhHWC9oU5vjXZbZdMQSMCL%2FaLgISMIaNyMkGOqUBq3Ab844tQGTev3nKwlfCsFFNUcc6%2BZ5B7R1uWpxS3uqpW2pAH%2BtvvmxFDxwIpz37F2UrPsG7l0eGwdRS57x7fhMW13M3N74BwayUcspEPPh75SEGFRGBs3GniDB3EhFSiMag23pmmyRgSIhwtvVxWwit0MVJrSSj%2FDsKozfrEgpGwTDhGAlsjzIPTG9dCL1vZRUC460O0ETE3sjEQ5WY963Uwxm0&X-Amz-Signature=9f22d07908512a33f86f7338ad1dca594ea715c294b1163edbf30762c58d0b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUHX2X3X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF2r6qjnjxP6SF5XX1qFRUSN9Jq%2FVIzSFUcVnya%2BS4CAiEA14TddD6UwtSEbS4HyYHQ%2BvXVoYKaXGzeW06yxVnP5Gwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNWWBdMAzR5mch0%2BCSrcAxA%2BJdkmrJO00BsTsOh9okW42O7V%2BmfLEMW380wawesBanoeaMxkmauvaaPhuTB7Myc1w22nIsgSf5kDa3oBpTKR0%2FzfYGnZJNqWrsBQlYGHNyHL3cK85y2MidDT6%2F4ACv1RPempCnnVLt2rfHh%2BibxBqZ0RBkRKq9ZkTX2evTx%2B2seXPvGb9Zj1rqptNOtw28KYHxAt6KdARanEGIWCnTUrEWAXRXYZsM20CehpJY6YzNbk8e0nkbk5T%2B5a%2FKLuo%2F6FH79ZT8004vUnXQOJqN7MYE4nbrj%2B8AIPkw4Pj3CPh9b7uYIO0n9RPlb%2Bww0%2F3WRLPoCkf%2F7%2FUOm%2BGmKGAKhVbAkixQkjvMpnaI88a5lMTDTQBLW%2Bz3dc60rZxZz2hF4gQN6EcQfdB9IDhIGBBbH82V7f7fLWGNXNo9O3IwiayaDqrn1NEoyS3iw1xUKM1TLwdgpjFMAgTigbjksdbOD28FYi9TAAYMncOJFL3mSvsAv%2BOUfgIp7MGHy6khfE9Xc9g8zpHepqep5J4YxX7pv1fkkYCYzPtq%2B4kf0T47adPhdtrzc0zq35hNRcldMJ85cqNZxh1bOUgMswVVVHvlYKI8w58M7P9E7TuUxoGhy%2BAby52VAJjLolu09rMLKMyMkGOqUBioy9FA00Kbu2iA0e0yA%2FgZg12jZO2aqugc65WT%2B9tcFzaNiuj72dIgqbTGzNzodVH72Z4o%2BOxIjM9WBBYk2IGbwLX%2Fd%2FR3ysP95BK6MNT%2B8fDmO3T0kfpV%2BahPA9Hpi3w%2BA%2FI1PtDgObmNEaBDagGxmqEYW%2FhKZFiVe2zhKCoGkBu8VGdNtZ7lt9f2nAMnYQ8MwwkUGWmRcGjlnUDIRd8mg9lHrC&X-Amz-Signature=ed68c330c79fd5b9c306c5de68f4e87a962a263f5799fa1c67307d1cebc73c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

