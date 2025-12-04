---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FCKPMR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGQv9bqBlte7dYBfS%2B9dS1mQB%2B4Xu0xMRD%2FW4t4ROtr9AiEAkNqS5OVhCOAQfMt%2FW8BqwUzsK8pZnj95Br6%2Fe13uQfIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHRiEzX%2BXGt0polATCrcA7VPO6PGh5cpyYYxPEmUvX5LwzzUcgPtqLenigIQYdFeVltXzjffk3mnRcVeYZxJmxBSXFfsKjhSR5dnLP16y6U7UzMh7jtzv%2Fjn2cgSMy3J61kJ68yv4tGoQFTce2OSXLAgNMlpLmMBX0WY22KE31GJEhl5xCI%2BeXvzt3WGWlKwywL7QDjnaRWVSn%2F2gorV9Qz%2Fa6DdIW%2FGlyo0bNL4Na83Xx5hnsYP6bYhl2uM6q8XWn0ar5i0EFxJu8hUspC8UqxbI98X%2FOs8%2FKUX7j6qRT3e0S1iSz%2BszpeQJB0cy6dv0mowWzYNEg27irvnvgvL1MZrLSIhwhrfV01DIFhWFfDObDTOKfgs5rFgl0K%2FT%2FSVX%2FXRTg%2B4sKOSdLD%2BlWbmAbq%2BZ3PVhzei5%2F3rhMwQhbpeJpiLbliS5FKwaMCgp2L9KFRgFlc5%2FGiZN3Al3HU2UFj2%2FpBYLRBaw54lRrkGMAueldOLkWFdMz4br%2BKQHJYI3hd3HSJTmKxDSh%2Ft%2F6xTYJhhdOzHU7dxvGWN2XdI%2BJ3M7oSQ%2BpOw9FagrAkhkfZHVyZ1%2FwD%2ByKEZzeENzuviRowr22FgVxZmRFJuDX8jKRPZXCplUGFpBSpv%2F9ok%2B1WHdNIskuSZWKCxAgyIMK6%2BxskGOqUBIRRk3rkRsE5E0daC4uOFV6eKZe535FAZHuyFsi6xkSQMlC8rlXoiJCK8llxuk58orVrw%2FW1x%2Bix4TxmRVgFUI%2FGQfOZF6djGrMsGh%2BQ%2BbhjO9MBC5UND3X8P7NvTmbSJTCk5cvCuHqD4SlfgqdT3fPYCUuFlkAuQ7gajFVP5xLkHa2OY4OO%2BNf7QUvnDhI1hce630Xa14nh8cV5FvWfQikPrKaL3&X-Amz-Signature=b895ac8bcfeb4e09d43cf9f7994abf45d5002de538983125677f81bea5f3bd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKMETHH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAVQFr2Zs81tlg8NWjOiOmu6LGCmGqrVtVr4WAJTN3%2FHAiEAnXpqsqvliGHq9IGY0pZbKILyCHg9chQ8mAyIIbSEiXIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMnepC%2BoD94fjbT0syrcA%2Bkvout8qfth2X68nl2gpzLGtP94CqDZgoGuxIYbb6NXllQzTN8YGKSvmMD%2B7X3XQj1zaqtLrRMjXjNOAI7kqvcqLHzlNcrujUJbhbp156tZjUw51li9cbAIAk0MK6xKYl342ii42IsmZLX%2FdlT3%2FBZpE%2B4WRxZAp6PG5duCJmQszC4O0oRtiCBWpsCZI56nxUiXEuVWXBRDwW1ZfweTq2tcwxZADz2LYL8O3IfHYApc20jipeCXUWdQNBb9qQKJH%2FR1j7fwIetD1gLoaQa1%2FW49IJE0HVCfY%2BHiIWHaG2W%2B%2FW%2FuYFyd%2FMlhbCzzROHIHz%2Fg0Qc7VcWlAy9sy%2FUUK4mYC0R%2BGCaKl1ERUJaZ4vYCRs3BPlzLRgtyBvpq6MBu4YALQ3hKTa0hDdBUNBZ7ldhZuliv2T%2FD%2F7JIt8dWEfysbqHR3VFdAz4hwJhy1vfgrt5WhJRGfYjiyMnHhNS3p6oF%2FLCIQ3O8YH4igXgiH0wo03CMmT8K9BV%2FvPmnbJwoB4Flvs9%2FLfPg8cjmi3qaeu%2BWOMckI7oysOGMVuwn%2BHLqVB33%2FgTlMTiF%2B%2FpJ46lskUVf0AzYHSsa9HNZVTDR6p1Vpz92ulrv65oH6kELlJX7dP2D8F62OpGBVcg6MIOixskGOqUBdC1gYLVhwYA%2FlpBEcFtfDy3YEkC4E8okl2v7RfmGFk%2B%2FTUIRhSeM9ImdtFrtUCP9ckQQ8ve88Khjfd9oVdVRyEsmwcyaFGq14ZR76pvQN3D%2F1IT%2BaNdHvpM6NZ9DVb%2B8xH%2B9RDtx%2FnYUCx4dtyWzi2vzkRJAzWPSWNCZv1AoloJ2Z1qJfqZPxkLixjKYT4t6gxsRYdQPnKpth%2FWLGZXK0KcRokc1&X-Amz-Signature=1d622e0872ab3d35d38194fc43a613f845cb063280cb07d0758982c027ad32b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

