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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642AVYTM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCenZtx62hVfUwXIBJ2NzaAGoF03XbR9%2BHI2RoInd4FMwIhAIJaHn8bkFTAxELZk%2F7CUHDPrqzJEwCWoaIpmvBGAmybKv8DCHUQABoMNjM3NDIzMTgzODA1IgyKEGQSVmh6caEGj3Aq3ANFOReufJrKF8GvIo9TsWcYTWoS%2BuRNOUdh%2Fl7dn0OZXO7Cqi2c%2FkU3cRkI4fOrvxlbdFS7DFYbEem0CVmmdb2WHe8zQg5UF1z519wYzVt%2BmhJRjoWSJD7uE4PEcrO14AtpPAxW%2FzC7JReUjkdQ%2Frg7CUXX0%2BjvyiYwtfMJd4QA494AfrkacDRHid6WZeADEddaSBwZQ%2Bdt6sqJgXgE2GEeft2gftyTSqYam19f5SjwQcttbJJltovodxdwUJWF009poXJQCWXJlhL4wFoCZZk6Muuo%2F84slLielCUGgheTaoXcIrOan6TY95aSL8uoHsrMLcwG14UDnnFeQNBGwIuPgPiCajtKXCJUFCp27Q%2FdnZT%2BWnFgxQERu%2BnQhi0TSx30aJ5LTOYJMBKEG9t5XfHekYl1ek8YSVFrir%2FSpI6Noxmhk%2B87Jpg0sZmgD1Vnj7FltM2F6AGm9FnoxQWf3XK3OCNStmgSj7YdswTjJUACvxuadxcocZ7np4ex%2FsoDdg5YKqI0Fl%2B%2FSXwzqMRUAWE0%2FAW4IlEQm016bVFGoyPuZGev%2B3VdLJqu2hoi8LR%2B3Q8SeMkEjIU4d2Sp46EDDw0RN2gIROFLgVs6nRF%2BKh9YiCvA03pBrB1fIuCsMTDtptDJBjqkAbso94bHzTz%2BYtGdPPv8kpcwt0QPDE5egi%2B2S2Xx1GultbhUJrSys1NdwP01JKb24oqAZuEzhceOZ3GvVgXC02enha%2FITViuOlytaVy18XyR2ry6sgVybovSjjwnopFiANHLyrA%2F3Un%2F4qf1%2F21fgc48P8As6ZQLxta4BfOBa6wKOx3X7KUI%2BeeHHEYBjBzfB%2B38HvZ5mefT0czJTkFzULbE%2BO5h&X-Amz-Signature=4765a6f1af58fff6c36477ca21065873b7f57f11e07365bf5907d948fa4bf7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTMHMSG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACGJjUZwrs8oYXMJTR7VacFF1NdNCv0MQfrm7nav%2FE%2BAiEAhfnybBdAVe41ijBJW1ne6L2AYGmBql%2FFv8G2fcqlaKMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCTWXRc70QTrhzUUuircA1LDAt%2Fzh5bNV0CpNRayInCjCbCrFsOBE582IDzwAm9FS7d5v79ZNftwXXIU1eNVFZw%2FA%2BKNoXbN%2Fp88UE3C8r0Av1iKZWnk3q%2BoD%2FrOtzNzBBFGGUjjiduMRLFlklYVP5HAEMHJaRSu%2F006yKTVLN9ic6G5QJ94SNEdZ4pHT0JNki9W%2FxGPjRMZliYLbbRj5JcXqUxJn2BRIc%2BVnlMvFdUGuEEm2%2BLfPoGeby4IpaWmWe3Ahc42DF9oR1fa7vb7oWbHyEHmwWyVt3qUzuEYTVX7x7wQhMSUnNUutJNDOmP2axCYMnYGnfIdaopGFCXqhe0nkm6yo%2Fz%2FCjIh3bmL%2BR3Rn3Yex8qe%2FqNXSw%2BJCqxosiYGdFD8x3DLr3bqMLs4YLb30xGmiLJla4%2FHnmiO1e7pw5O%2BDMeievMGiZZZUF%2F9kRgO9Fzkg6WTRCiGP7wfr%2B%2Bzy3zC06jNtSbucbhtNZub2kXMFR1awruy%2BTB871WmzyA24gK6bD2PHNbwMqC2RPk1p2Euc1ferNWQ1QJ2%2FQggOHsppSizIeM9CUOl4pY1sUpMqg2rq95yb0cq3uf5z4R7IPYoqtPISbVo9YqhybzbmRR8aKoZXD5kdp2fWIgySIXDu9shHV6Fgl2lMM%2Bm0MkGOqUB3NlTxMF1VyffYym2eAG%2BgufQwxNzogQr7nUCdTWT1QCRmMq54l1IM%2FJkoMh9yGApg0PlDOu1RiuoHWbTgsphWp7OBt00WfteP%2F7wNeMYwnkG%2BOziG7G23SXqdcco1TJblAPWqb0NTRaThfPGdY%2BkmjRtBIiUvk%2B9jsGYVONFIPRTATbUNzbAnMXasZLRpkudSxNjT0TIndEunnJ2N1gp7PhfheOw&X-Amz-Signature=e5746e6713ed04968ef9d8d35ed71c9b36da5f3d62979358885b9f4bf1f144ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

