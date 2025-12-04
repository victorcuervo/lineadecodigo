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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSETFROI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3qsHwIcQrP%2B2hZgYfXAzvM%2FnxVDKo2TA5OZkvrJ66HwIgMltPzOFRypPEJrP7I7aVippjxhZ98zoQAj5ZZzdbSIwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDG%2BHM1enxfaoKwHfSCrcAwVs8j49YaYbwba8mY0iuxl72P2hLYNQyJB4z5DF7zJus5ghSx0KHprFj8M1JPdOQKO%2BJfnIpzuYgMNfZ3kyV%2F6TgR5zF5rAexgAv7kpLPc7mAUvcyIPZczAsRmiTgTQnlpO%2FbARbWt5jOEGlAWT3Ka2K71XnCB4kszGL8p4OgAcsMALbkUZ0I4lkbxY89a%2BdqJr4rnySf0dKGPcWvh9xwFoFcCxG3oVoFsvzWgfyg270ZL9RPMcLTnq4bRdumFcAY7H%2FlXFxRYrpsMfWDwMRf3RClkjWKgb9K2ktT2fkKnEikMHvIAVR4kFNGh0tFwKkqa%2FOMdwv5MdtcZt7B3zPaSRaylTuflBsD2fqpLjJU%2Feg1GYQub7Cs55nwRYuFF3tQJLcVwKwX3poyCgWIiO816%2FpLIfV%2FEddA6Uve78uNzkxeT1rdVLbMeTBCzijCsRtShLM4Hi%2B8aaf7QAJjmSv9VThGlegreBFZAKJR5XPgGE66yVmphnW439d6pwVzA13J7vT2pSyoHZQCCmmRtMzQctjm70iUHOwCqu%2B8aqMzjYDMlqwiIgPgSRA7j9uKOI%2BHFSl0yLGmdKPaHcNZzposAcK95Ox%2FVL2Qahp7rP9BBxwTY5JXqrEvbQFhccMMS%2BxskGOqUBzWDXG2TmYKvqrfxe%2BavpNZoJXwexEM6OBAhw3K1FJJhIBnDij2gvUZ%2FETVXh%2F4jupe22UXoFKKbTkOY6dn5X11TRHhF2gRRXNFt81TY1kz6EnLZzcqK0fp2kuSBCnEGDiUJ0nlwwLKCgsLXk5N9TSX0qtMb9ge0pO4Nq3haRTd2%2BQNpS381UxiJXqDU5vdvigDGIXBwBNobJ%2FK6Qu6WmanAMWmT%2F&X-Amz-Signature=b02fc733e46b841fa46dbe767235d61ce011130b3d0906d3ec296cbcf7e8f372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NOYQW2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDAOg%2BeIC39kB55UOsdvC%2FgdiX63%2FvfMupCk4g6nPGVWAiEArk7IN0SxTMD6irrim92WvETzVO8m1dOm2agQ6bQIxCIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNPMoTZ72MHPAywgYircA%2BdMaOFhYstSitfIEjM%2BKYEAkXL%2FqkoGIXKXQpI6qnPUcT92AZkD6RSf3JjEuH7iPcxFVv1j0qk8BIIxMPFx1WyZHn6%2BtE7zYmMMDAKecPEiNsQyCLAgf4GW9d33P5%2Br3FnoF1PISHXDmXxvnT1pO7VGg%2FSlJ67UXRh4rEz0P5WowVdMa4je1OgJD66553S%2FyxnCHOO5nIPxalam9WVz%2B7EtCui8gClhfy3KIZIFgmFOuyzzRntJ7Tomd03LGp%2BcEGphEfqZv7opAH%2Fd1EmSH%2Fvg9MIN94hZ%2BRhSSAti8J8%2BLYpFOKYLxjnwwdXEM7n%2BmpJV7%2BnSPqUxlcRjNQO%2FhrpOY4J3ddV9upxD%2FapjRxZMDjC7xR5u0Texp3SHJl4jpeipC%2FaJXUcrCIFS1%2FTRCGa7thYK5ytPpo%2B%2B3cc2WQ3i8U%2BKl0F1GanzQeOpg0lWHCCIpejV0hJ%2BY7Wlpeow60DmSikHslt9%2B2oQMnajTf0mPGB0%2B%2BtGoGnCYV73llU10JS39G7FsMeHAz4KmjN7YQcNMbU1ECoUXUVsJlwp3gDQpLGKG%2FMvZx3JKGM%2FcVu9yjIdO4isRWY9AxgrblMXkAMBBYktZLG%2BLfmE1GIEs157wPnm%2F9os4KWGl0rOMOu%2BxskGOqUB9OS%2B6Zfk%2BidTBCGYPaCc1Gptt%2BmWfKbc3mvOXv2CNi1wie1RFfA37tqjfrrf6NtKrn8Q%2FTlDhQGSXtFrCy8zBA80Esg9ApJ72oFQ5MPxtkfypNCj1ux1nLggLgXTiFeyB3I9Xuct3JED3r4WZuDrjJKEU6ZL8LE7v2ZHuavTdy0TjteFOebp1smQ1yfrLjFWqDG6Ro3KJ2aYc5oGw3CSPet4Izzj&X-Amz-Signature=10c5e9343415aa332bf27c65e3e48410e0ab2a60c005e80334ef9f326dc3592e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

