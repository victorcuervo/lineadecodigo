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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGCRBG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5DRZcKVWd0MBXp8v0Ph82aGZijJzCvPirfXvHCiL3QIgO7xSv2QG31DtiuiWoNT%2B3znNgP18bWvMouKlpAOLk90q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNlOZnxAM1gnu7zMFircA6MxK2HzxUcK7KFVxaXOe%2BWNdtAbup%2BpQxcK2eTTHyXvUrKhJQGoxgNBNGYF5AGl9uKaFH0f24Cn3li6EdZYowvDQnIXIVPnO2Q7aEN4nNjYbZSKczPTxH5sPa1kq9gWn898hi7ZUuaJ57U8ReQipSWqgG4avLz0VaNGqXRHnrvvA5lwrcgNpee49vvv5cXVtXj3ojolyqYLdUyq0DpTY4iejUZg%2ByIS91KKgPdChSuBVw1%2Fwt6ZpkfxBzCNK5%2BLi%2FcaclQRGr4fosqhGJGsyQrpkFNOpyL1ua85oar%2BdFtcM9YBUdMohucrHtKV%2Bo1vRueC%2BKKmWafdY3VzZZQlaJsH5SCwIWuM7xlkodbRjKVEYK6TCFCjgHUYFeWK01A9iX8Rn40cTT9MnuA%2FlySSCtdjbNJ%2F%2FfpHI%2B4Fh%2BEMvoOhzY%2Fpfs%2Bt8hYRckaedILDnUv8iTM7A4VqgCpgqdhv0K5LL9nmoa3p%2F1lqN1q%2FniNKRfo0iykCSf8l7iSv4b0kWA6RuoODAiSORL8O%2B%2FDKOjm6XITSIAkTxIPVk6BPS5yW0GtoM9qMmKMtx8i9V5brLnHpe%2BaPq92gcwmowtTGta1tLnqSsxTeVoNJ52foHa50SuGr9NbDDOVpyz%2FzMOqm0MkGOqUBIrIcNjKWnM8KuOUyEo%2F%2F9fn7ChI6qlvHlMbE4S756aC2RIeBLLn%2FwVYSpa5K7bne4whagtTyFq5dPH42e1AgkQ7n9olLcqOqy15viFPfZNHmVEWQUoX7YzgJo%2B0VHKPZl2%2Bt4P3m%2FNTZtLJvmebPOhn%2B31n87Q%2BUndjp8pjpTODc3TIWuNB6wZBYyQy7OrSBg7d5YxuDhN7RRloXVWXflDS4VZrg&X-Amz-Signature=a1877c1de59bdce1613c682211ace407a4d028f1c4f899571525f25a1e67bf07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673APSYKB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLjh4L9jQ33r0ofdHAfxF3qsOqem4vxmVPZpKNeFMtAAiEAns1cJH4CveYp%2BIJwQFhde6zl13nK0qebMB9lO1BzdfMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL7qo%2F1oO%2BDarXtoTSrcA3DPpy9dtE7t7w%2Bt10WHnde8%2Bwb6%2FTgAALWm9meTyc1e6XALcbiSDkCJQnviCEfT5dbJ7wwFGIiKaIOa6IoCvAH5OYtcpgfTOCbTrWgrohsZD1e58FLuoBMOgmaXeq6nsLKPUeeHi36EYxj6voMmDcJhGi0XHeGvgg2DWLMI29iLqB3AY6zN%2Fk7zvj9YIyNMQY9jfeZDEOxv%2FPna8c9NQ9XPG1etVA5TdWRt9kspiuM091ZvTxs6r0ad00Y9qME1aMMJmhnUHStHn5B7OVaDqgGqj%2F6DXRPjnYARP0VkxigHoqBspGY%2FYzIoFje2IRxAk8ukPiPhHb%2FHDuL3WKrR%2FJx3Cxz4bygKYuwHapXFVIEcCfNUsTaoZJXHy8bsLIOGpbh%2FjRACl82IX9oQ4lRk03MtKUmJvUwLh9yiu5ygW8Bbh0qQ9chclIgveSnV7JsgW4vK6rk8BnInt7EEXLwNtk%2B5q%2BwxoCVTeTLB8FZeh0X3OWXMdHJI1rfUPFzmuG%2Fud50d%2Bu6WZe39t70OEKVT0LLEjAQIribwpLB0HdQR97AltFnB4QgXjuEtcNaTerZ1U4hPc4tjMWNzqeaBLdDozHngR%2ByN6A5S6TPR9DEV6CrTiQ3gqFLdXwrsKqJ7MMam0MkGOqUBlkMLI6Ht2TAIhdXQA5QvgAott%2BNpY6FQZjpBsePFxv2gfsRuFFVR9zCdzbU6REKsdA%2B0x4EZvMBgA3bMmNccjyTlhqLCwdMG4N7rIEeN3oXEkelbIVl60MsF%2FzWa4CpvljsfemEPKMF2NlPdNY4Cj6DPpLVFSTUGGOPxH2rNHsaSvWROvA9z2GYq2abiCD2qN50rmM76q8XboN46DHfkquvC%2FFbm&X-Amz-Signature=646860617bb3c0c9bcfcbdd03095fef8bf20af8933da7f7a05109e76e4615a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

