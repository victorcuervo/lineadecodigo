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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M75M7P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWSQJpTALlGMbukVJFXAL0DL3oWrvb8noCpYRGEEfOLQIgIg6p1ZPZqUaz%2FNrbwZvJhT6yT5ovYzOr8oOG%2FF5RMboqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9IaYE34TqqJiiaPSrcA5augDrioqcbsOdjBLqhFf0CYGLTPK1ETtcltzaLbF0CY9nxNvgqZfEZwk%2Fcpw2teGWR2%2F2QddzvLRHSHvKCRtE9wMIJ%2BkdFTu2Vo9wjQThmIMOBjoGch5O7%2BU49dgNbuZqbBpME6vWnAXtJEUrKAJQNReSq%2FWRXmSNppWwlNosAo0TwcdfY51vFpT7Fj2YAp85S2ywvgeOKWgRGsHP%2FEnTQwWUgoFaXPkiVflQuGKndqYLb9EA5Ezx3fvMhG3AaCb8aAaBVQrXH3AScWczSIosgQV6AXPGC%2F7Ch3R7SJxen1hWLwpEpiIlEL94rOTTjIeG5hQ5XlNtlM5Yrhj2b04pdmBjAqSegDgOrI5xd6VnfknnHh%2BddUVi6UI%2FK9dOseYZy0yIHoY%2B5k16vnywRqDWGcAB0Lkieu651%2FfEJftGA%2BCxxiLle3A77af8BEDe66PtwoIF6DyhfCskwBrAF8iyFFX5KNrDB18QRWI%2FjTorDGwPX84d9AdEbq8rBJf0fi8wxtPpa9odDhRpeq2pDTKtFXZYiZgwDxeSVrhkAiJe8Qp0PF8Hc%2FZX2JaX%2F1658fC2S2hvLrxG6bUgGLikv6Q8XVtYJFcbNmY5jRHZJ9HuIyzkadyGQYu8NyNCzMPaj1MkGOqUBXPel3GqGz7Y%2FLpFmu1H%2FoAV7DrotYKiQTHZywtA5%2F1jt4wgWsqwJeNH1SedE1WdoMlg8ftQR9OkhO1hGu5%2FBrq7KLGL8yrilJ4iV6KvPtWwPoASr4M9nGqetsKHpdn1vxsuS7y2wkA3tmasi4b3EbsfuUCgIP0Qf2AqXQs9qKLiKHG6u%2BaYD24REwJVzE3Z5LGaD6MkIohyaWPQuDLPIegJkCdBw&X-Amz-Signature=450bb6ebf6fcc8100ec784792cd9cf51828d10a4e1c7723ca96fdb4cd86bc806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6EGEKA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIIJPyrsAi6WJWr3XpqGvbgrnkSP4stc7uRuLOLmcSwIgSJDlwuCjOg263tK3%2BRQEfAbfHZw7%2FZDd2VP9FdokuAcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa%2FoTnE9jI1QDaXLSrcA2LdjbuK5WfRlf9Xv%2F4aIexPbX9kx7X84aUOu7f1g8AWb7u%2B0VKGH6d%2BdEm%2Fybj31%2Bc4daszswbC7Ql6lTiLDjVrt9CmplK0hIMVndl%2FK%2BEUPqQTKSm0xpBdG%2BkwN6SojgFYHgtDgbi%2FhapBEGs04iCVK2HHjP8Wh1%2B5ynEfnmCwf63N1jIxd3bvhdfIWM55eVsUHB7S%2FE81XHAxHXOJRIT5niBYWHjFtmMUoU1FB5ySaEnNMOBT1CL2t%2BFe2kYEX%2B3lWQHqnft0PTfG3AvkD9n1U7eAtc2wRlALpaRtMKVDy7ru5Tvkl6Jg8UOpUSEKC0iiGYmlysfW9gq4LgN2uxjnvFtws8xwlWdK4%2FSWVJAE5YgPlm2cigYjCztAASvIIYMmAQkJwwukUwNz2HvhTdDPbrUileidUiaLnm29H%2BCi642nTPQnDeLkj81Hanm%2F2u8pDMSy8DeRFu4LcWW0tAZgiDCNmFrfMzu%2BIGRj8Ck%2BHJQQINXlGx1ZBLU2mNtglLnXA9GCOJpOErvvuZhdLJe3hDDn36NCcC4bwbKMELoSxuCuLWwqDzCbdafHnMt9jmOE7PvvTdthomTODU8GMZcCE2otK96gh3KG%2FSbuMJWtuSTtASnr%2F5p4aU9sMMue1MkGOqUB%2FPhU6j9%2FUprnGNAkKm06sE43V4vjWf%2B7YUgBTiqA69GGMHXoabq%2FPU0qLCbLxqLsSlGqmjwPihg79To1k9TT4C7MWuE6LyyX173x%2FFGP9pufbOq4v7XX%2B3GpOpT%2BfYD6XnYzsQ0pDe9diR0IiienBC8R0Eu0%2BqK99J6rfWGbqwlk6aRLp82FEooYqqrMqVmQNVZUGOhPfXlH5O0yZtesBCjrrq7T&X-Amz-Signature=b54340762f58d63a340aaabda5be643f275a71831c2dfa23be3944f9f559e311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

