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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT7RKWA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCovJmFmGDuWVIIUClzNHA%2BaUgSKarIwnPH7UFar9pMEgIgTUVDI4czmY842tA39KNeeKAjZQGrR1b%2Fy1f%2BdCHkGfsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDVxsaFF3vZCCQriqyrcAwEFGMRlCJfsi7aAH6KliYXMqjx0CvkYduODHOQb07lgJ0n7oJqzBwad6iW3ZSDmQyKwWUzz6YjAQpL5t2Cnjrc7rodCfGu53rGc%2B%2BCA5uGzu9gwjTOgGjLjP6xIoGeRu2qDEOwtkceuNLv%2BB6SMSHgn7%2FzT4YV62bvaemotKKnRK6qKc5x2WoN8cV7yzRLb2nBybO6VFrWjmtGWDI7OzWQVY7vc884QM1xoh4iy1pTThV%2F1YAQCbhHcVqhr%2BJ7wkuAF2Og%2BcthTdT9HsfqYLAXEhPRedS4qjpEz8zYqwGMPinL3JvI3PRIrqcOo9AWz0NYfjUjIhjMDuCYGUTXClvFf0%2FJdbRduHTjFsCG8h34Vg0wlIluPMS%2BTAEsu6a0NFc3fPSyR0kVE3gZxA7Gw1jZkxdrQMCuCLb0ZlcW5ZagjX72s9KQrdmU55BVM4aMKmXxUEwZcW7AefldOTGqWgpFMAqzERyu2a5jLp5BPF6JR%2FjiIZktDby4c0G%2BcQ6qJuzYnIjd6O94GcFKxIBkKsVtpTrSD9dKBTU5m3R8rH%2F%2FQQCdISR7oiLr8bRizSjxSrrLlbVtmIP7eSRHCdVLqPvsQTpoB6yTDd1FeBnHwZkUv9WzMDBh%2ByuoivCrZMKquwMkGOqUBRIvFP%2Bs16UDNBIBZFCel5J7lTpRm15bWAzGbZoIHrg14COkLFQk18uIp99aTufL0pgX7QFQpBhWWCx1S68%2F4J31Wvq95p3gWqeWCz59d%2F4wV4Coy00WXNc9nkErc%2F8PRxFJmye6lZw574cjLGuOWpBpJwTwPqD7RiLXcIOOQmHGlKJz0xrwgQNCZVlpPXokMuyRtOWuVVrTHEGEMFrGO7u2xwCcT&X-Amz-Signature=95b282a9b1c8ec86b16c54b4e8aed425922196a011d718af60e8165738cf6992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTNSGAE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDwg%2FwjZGfB0UosHGdAH5QAZmTrskL0TorVjOklFJQ3cgIgEUqyRYo2sqdCvaDkQk4XNUrHjP4z2XMDbdabZWhbbkoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIkP7UAmuHHdF3SjISrcAzxDG0RRMkVfpVuVdboHdSvuFzULZGAKLQauwKJX8%2BE8gbl%2B69BmBizg0JOYInU1HUplzjUM7LuEXhMrnvhj90trV6qubMgMBKML4S7Z5pI0FkPRA0gNeKR%2B7LtPI2F%2F80tYWbkYZw5yCqN3Ya2G3a7zsvh3GojZIlWmJ%2BlrhaeIDGsx2WqOR6x35Hs8HYf9EV3j1Bri4%2FnyeCbOPSoc4ZduFffJZmGCBzZyCvuaj3KHh8YB1kwYpKX5h0dLsOf%2FxKwmdAqed8Js34AMa2FW0MJM4Tcqgdh4yT8NxPss0KaWbVAM4XQE7wd79bm06GPG61lurkHvX9PfbxImqroZGF6lEF%2BzkpaqU7lSI85e5TnnfDSUmG3IH6paGjbw0TVt9%2BA%2BP9MmDxA1QU3cr0ghPHD5S%2BV1hn0eanzKbvdDSlaLG95nvhUMtIoIDOqK%2Fq6tZhpBfQvu5ePieaYVBtldR%2Bzfkbv6CUyKBRw7q96dEnZQ0uH%2F40%2FKh8DkeglZ5%2FsR%2Fex%2FM%2BWosuyHcvdGtbIHUeKJBaqa4wlAx6zDCMMoCGFdJCvo5u5tCNo8xZARQc8ZVs0bjyQPyR5HZRyvikTLt2P%2B%2FV%2B6FYAaReTECz9bVhR2L0h%2FW3KmEbR%2FxcWsMP%2BtwMkGOqUBqQunzLRWzKV%2BJuKW%2BE9qbzfd5EDa%2FAmxGNMgzkCL4kZjfhY013mkM1Td8dt4DdVHbsb5yAJieFD7Icpym1OISMfDhVtlk1GZs5J5aeUpAgDu1N0wuuXcpeo3mpBixSCubYR8bouhTRS41hfInqNJc7BqYklRJvEfd4YmyWn6c9JKvh1iqCU86S7Urq1deMuNr2TTAj%2BpDoR8f%2BOaCE1skY7flmiM&X-Amz-Signature=276398472b77a0e759c824d4fa3977f163927112a0704243085890072002bffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

