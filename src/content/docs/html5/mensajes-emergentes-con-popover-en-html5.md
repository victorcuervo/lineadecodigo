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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO5LKQBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnYUETaJWxKQANcb7Jgj5%2F%2Bkx1E7Y7hmbfsopMfrCtUAiAxqs6j2KF%2F3HjxJaGsltAqZ9l1%2FW0iuxjevN3oPYt%2BpSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMRk%2BnZDv8q6dboB%2FfKtwD4x%2BMc8i9rVA9vbDd%2FePMTj9y0s8nmcG82VjzxCVp8dMRD46LKJax5DU5qM9I0l3P7OH4FNza9H8CYp8dyNDoBdeilnX3pu6Q%2B%2B3wqYp2XNhXVMWaTjHzntG9cvvIUmsxFEvX6iygylOeSuQXZOQDB85CgotDSH0Xi9mciUHAAEo64%2B5Bfrx2nqKtqm0vvUOPVq4j76Xd61S%2BbatpKOJSYlP%2FURj56qfGmyDRA%2BnU8ylR12tD9th0nQuEJOZ8I6okLCm3BFqoJXt3FIQNInDVKgsKMB9cYy5RD4SJJA7XZ6b1TaUtcPMOjvOfhzi%2FN2ge%2Fg2JiVfge2Oqkjuhsr6BztP%2Fli6dS8ZyEJrNDgxRUL%2FCGdbftafdXq9pakfxbXMIcHsFk1j6Yp5g4IeRcMeULu4AGmLrVRP9ZPTXrCTUACAhmzVtBD5%2FdBr5q8jhyJWIwqQr8pfVjQ8mk3AymBP9cHd%2FiZOVXNCJtOrxGuGX3x%2FYPNEafqy74uD6mT%2BhZl9%2B8hvefqyLxK6KCiNxFGmevsXurjLEpnBFKxFe4bi7BWhO2fLIXeXwb2Qp9LEkAldnXQKutEw7vnxCfsaGXfEvu%2F2y94byQ9H%2BGA1Cmv1ycQy0LSIxBP50ZOFH5rcwv8vRyQY6pgGkVnC6gpb9jSrUx7lM9sLdhJalRnuDqIQLwDSRHhURREZdJ7Yv9in42XtgkvWtrKJOQmBloRU7VuuisZjDODcz1YvQu1%2Bgt%2FMUK8L33c%2FVO6IT190%2FFRl3cmcemdBHRXD4fSDIqbCezEyls4xwRmADhzzNgappqsRaoJVqf5OdxqppNJZHn0fzBhkKtg%2B1kV47WTRD3Md6S9LyVN04OwPanV6OJuxP&X-Amz-Signature=05a1e0162d6089fa99fe31e826cad4f5f692b67e42725ff012ae5d22dfcc5c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DIJGC5C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICl8R8eky2hqkrIi8FaIoexZl%2BHzumplSfVRjG4YjXREAiAfCVu%2BTeJo5cqafQHnw4bVtmxDK97JL7aZRqD15gPkpCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1klrmrS2V0hSiPKSKtwDeTIPUJhN4Mou4ILvP5RTwapmJ8230cbotCYI2zLMrrSa7lzJBRgKUj%2BmJ7yYGlfzvnViF19cPzzLHj10DyB6ZIr30TRi1aF%2BVKYZGRfZXQTLJOgpUsFfFpZ%2F1ww7TrWgWH8%2BG2AhvwE7IrM3y0Zu2Xtloh8KUcjcXdfrIkLfksA7Bh4CCnll7jzzoxAhWdbFiRpPocuCOvpuZlKxiFuIJ6NDdGEmBI%2FGgaprJF2AWJFdbUw2GBMqSE%2FxVRT5K%2Fkenkj891EE2%2FHs3iEk4vEV6bj5zfw7v9V1SQmwbn14Lyhyqjl35jKvisyslXfYH3CfAM2vcUSR6WyjzPA7PUGS3a1ZMSv9CX3dbpLpuciFAcvQdP7L1eEgpa8aJRnH%2BUjPWbB83nN6rn%2BwOvSz0XEt9uAtY3TQ4x5nYnZlvGTTh%2BJcgqjepRbVLZexNcEZcjesU0k1iCyEY%2B6UFXgSO6XKLsvEEbNTDV1UXX%2B5NYY6wgLvN4riOw5WoQCGqmRp9jWuWVtoY%2FKeAjvCcsWfysHLHDOkz3m8SzTobUgZifB92%2B3lAXt16tg746NhL5tY5p1P086UrdGDJPbQmTPDEGLIWoI0ZvA30gDan1iLRjcGlw4gCK0%2BCd4J9acCj0YwxMzRyQY6pgGe8ojNDPE0cOApCAgTreDcTD%2BRjmZqAAPzRl7N1bSsDh3iJXmax8v80NYZ9DO%2FgbQK76l2arl2dPZUiVPyog%2BE9VkFAbe%2BCxyQ4vpRUR1q3tyw2rgU848zDDNtSVUUztXhY4NuTWlvixzOq1XjHlYCdi1BtOvCSkUXdMbvPNzzDf8aJ6pvrSulQxW1gjT4tt%2BJwvFuVInmSKL9eZRp6BbDdteCBfjY&X-Amz-Signature=e3029f56fccc1423f19f869d2541a4c7943b968ceab80a5a3e2afcf9cd9ee3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

