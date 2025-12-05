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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BI7MMPG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd4hPuhi6YpeIU0HKmEvy4Mv2tYoYSjfWFsS3AzGWE%2BAiEAlVJ%2FwKe1CJCpT%2Be1XOUa%2BwmymlafoUWlLD5fXrLVBkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJGWaZZO6OqeLoap%2FyrcA3Vc58PzPfeo03yW4TdAKXUpF%2FSDCxSJaVw9n1iW%2BP%2FHArf%2BWLOgpULUhy6ZR8Z0wkXWBzACfP4%2F31MhohxOoCD5b81PtVSKdSZOYO2AmSd3zX4Vz6NvQ9q3kp9UmtAFTDzb1ghO9bBlU8CMFyRUphhZRGHunZUlZSogvlblt6FY%2BeGiJ53jZnxN15w3IOzNOYv8OahikCgP%2FUhzyhFyjOmJkfIb0SNUVwhBVR3L%2FphBPhnvPSnyk2UDR1borzVorIYW1eNnZoJ0jFKXXJpNDX%2FW6LRDeHZ%2FYIKp5foRugNVkcCeN02w1rMERcqWTQXlaB%2B6MkvK8wmP7MZiWkFo8C4PFvcOn%2Fz9SFInGVTJc%2B7h7yWR5K9wXz%2BvU2jyrTqln3LfucU9RznkNMNjgloDpSVKm7ApldDMGbRPK%2Bt7fVs%2BjaLiNGwuImoPBYbKRwzGSu5ZQ5c9PdXL89HrxiMQKZVIWZl8Z21mVcrLr9rCbCK7iKin6RFevn0iJIUcAFRlWRo5IbL3vqUHYRT7VFbvixO6IPWR4Qe16bC%2BDOZFgs%2BLoZ37OpP2qK8p6lwEQ66%2BzecjRhmvtgy%2BuNzXzUEp%2FF0RVUObEVNR3l2eKxktOrgiqkeE3I97lOZQkGOGMPzWyskGOqUBLaQEkHFcVrxzZP7wdTXzyP3MK7bOhnXD%2FHSS8z1WijA%2FuJLv0IGh4VRhIaUJ4S52VvD6vJfmBca%2BXvAEie13oje5f%2FoNAl00DXuoB6DYkfj78e5J8AoUvhygDku8REO7p%2BPQRnnrhFk8WIA4rurvDnvxUD3R6G2DYK3PSCcQn0qyMQ0BpOBAYm4S3LXuaU7p10iM%2FUqEil56OJRIEFba5PXhb8iH&X-Amz-Signature=3597906396912a45ee753b9b7bf09d79b83256cbb4329245cfcefebf7aed9fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJ36FWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3LFVKQCt7tKl7P1FFbLG7XcjxMiiox8wTizbYymvg7AiBka%2Bwd%2Fuec0TEpA2k9MlKlLIy%2BzNLG3HCQkMFWMPvasCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEE0Vs72xvNrmCphBKtwDU1Sk%2BaFCosm5LSLv9OiUlmq5vgmQc6odjjEl4u%2Bu3gTH%2BatZb%2BDo%2FaoRlQOyr8L%2B2EZbo%2FH%2FjMrcPlORwrAleFk80tLGZLkiw8TgUlPLZQllEKE6s9kI8BQXbtXehq1eEYsgk5ltqVCqWFbF5xcHBj9xv1WtURxH%2BA8FmcsTWJczmBz5c9qEAEaaTJLTa574RLnbAKV1GgZMG6pH4FO295Vuf1nEg1rv1z6OKv0w08Jq95ClGIcgeCpbRoT7yXNjId9Ww7EPcscc0D38PGACt9Zu8Tub57lnz9pczeyX7yJIA8QSNBJTdTOL3EEEYIiZeEwJInLW6SL%2BwG%2BXl3HaWUm%2BVP9hzE%2BmtkP5cj07VZZ9ngm%2BB6RW6O1J9bl7kteTYSMUbnKCqBcRzCBd11NlMisPg1yEIsUiY70QHQvFizyjySz%2FIm6bj0bZq3EA0ehZKRl1BuCOJuqBFb7n7dZvre17ymq1mN3f6z61hAs42qCZufhqcG9PbE7F%2BAVmd5xhq8fzeQQjYroQofFfVC2FJxzg9373dm7iXY1Ndu%2Folc5l6dNkqM5Brb0Pa%2BaOfH2F86FcjIKUOxdQLf87koEPalBP03ZadUZ9u6IJ3gnAldKAX7lsb3g9UOq3OWQw4NPKyQY6pgGXfLRGwcRBh%2BzT0VmIXLhNvCa1IYn3sxncTVUYpIXKLkuv9QmXlYhuFYvPj1C8BMLLD5RDOwAom4seIoMKHcvRhqzRPb3Fg4rfrnGGFDiS9hSQwMxXdDBuULq1OXDoWtdqmMHUTo3PU%2F5iIunXXWVaRLqAiWskbtUPMfHunpCWZjUKBZD9Og9cia4XCq1PfZa9PVOzvq4HBNHT38IwfrlgxfH4TgZW&X-Amz-Signature=a84c9898f65bd990f839656a23c131cf06910704e34e17f9defab634de71418c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

