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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2NTCK24%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF%2FIG6RIGO9NSrKOafSBOPT3Qqm6yOc6219%2F5WvgCfSwIgWpDallN8bGyOkf9lwnapTIecc5Um82p%2Bqe%2Fgicmmuawq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAAyqBf4AjaH9w%2FnLSrcAyCAziy8h8b5m%2BhCEorzDC%2Bcsxwtsp3K9Odej5m5zwFlX5tqKpMXD%2B7DNGCPUzUyLIf9FRQu1UeCcfEyx0hi07qUiWhFVqPCWQYvKysGeiv5JenzYPp5vF2V0JKBfCkqeKujaqOiVwD6R4G8eO1eWFEUzDzE60tG0kmB9WEn6Wm%2BVZGRYEM4ckmjDgLA3f8EyzR0TVbeEa06A8PWy%2FfLztiBvYg%2B9YLuCibBwMW7ZyFsrs3IVUGkokQcVzjja69clRhFYvo4Ir%2FjPR4i9CtSih3qLnryxWZwbMZwEMhlsnLbaV7N20SntHULCfCq8Ae6e6UGhf89sF%2B3%2F5qqiEqArOPxKtK%2Fcd1Stf9mEqjvXdAfN795WGtSGiYQYJMSsuhZ37YejXEDfupZ2GiCSX%2BpmM3S9EyB%2FbSgpJt9n59LRsaycjf5WVtVx0EUzjCX8NnetEMjQRmx9gVMZ5qMjXm0i2WVabB0SUsbMw5gSUKoF%2BJ%2BZt%2FLkoi%2FjO6IapK%2Bo84lIwZ4CCPyKMPIaoex2WhuHNhxHUPl9p8byNc0t4HD%2BnCbDD8USj0yjS67hKnQRPBw6GYrv%2BskqSAdAJkfW%2BVyvbcVpSjYAGRKJbdbEIBPiRy1GER1r%2BfFob4bsn9SMP%2Bm0MkGOqUBYnZgJvbWt02Hti9j8uugO1gL2AqSSQc8OovymOdWNtoBX76hQQpMT%2FHcamTL8E7bcMqAzXdpBZSfZB8RA2J3qZUWqJqIfvYQMGRr1Vu5a4MPyBfYBJNcuC9Y7K19bEC8esF9kWsAiyCj5klUKcE5%2Bo6iwKaxKRblsB5X2jULHWCDqLN5t44AI4UQgDSiiOHvg%2FI1mCNXAenHWh%2FsUgQFHB4Uxngi&X-Amz-Signature=a3e8fea33e08ee0c08698556bebaa4bf23195c7d05201163c409ae62e23e4f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNMTF7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGDHpIz%2FeZYee4VIU6UiFk%2FM9ZnaxEMxV7FTYaX7runAiBGpIPT3MPMeFb%2BGxmk9z0MZ3Zvp3hL6uWqaCIMnui1tSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM76WD2uXfg6Q5oIYjKtwDvTnno6vugPk4LDteZX7gwF9PPpcMYAvqBdBfqQXz9DC4ond5KQlHB6e25IM%2BYfCAW1t5f8kIqvzg2BVmBGy6WFDVpRxyNiohfskitwzKmRVBEKmiz76abNur32%2BzwsDhvRlISIm7KJox32Y9IUNnj0pVvQ5MsKVu6G2vmTpibM1a4dB2Fcibk99jA5XpRWi2AUVwomoRVtIimHinvv9GppTHjXnvto9ar44vr5UhJJMCQDX9kB0YbGkPe5Mmjujx2P4WJcOGuswVXfQMgQjGOk0Ha090e14cXcabZ37lH68u9wF0vNNb2WZ%2FEOz%2B0ISv%2FMmVsC%2FYu3kc9qTDsAUEKHkcg2wn9iePOsmdoYHIfuQVyRXPU5gyosO2gZ67dTQiE3MsPJ3s57N%2ByaTjKHWHIguv9jak6AHG3Sxx9friawr9i%2BXVgF3wxfKoZsDQSawwsVUqNlpXWaPuFok5K8idl0aVCE4had5%2BLsOBTeBo4078bqELNuiChZ%2BkvSzExwrPUHnLeHATvYNdphG%2B%2F6ImnaEeWKLOtMhMwQPdSq%2BKIq6YVYi2I9%2FbLv1w6m1tp0Icy7qwwM521hZdAWKjsUSdWc2fCUhVWT87z3BJ5QGt%2BuzjIm7bWS7iQeQnHTIw26bQyQY6pgGAZ85UjQgisjN6fjtje6Q20ZiQPx1Xjl3n6IxbtX0UeWr7lNAdiq8E3ZTj88LJH7x0pchqb0sfixR7V%2FllXsS16YLSbbCH%2BsPnIE4tErVtJ0hm7AatEpjbBvjxtTKLMS%2Fcwdz5%2BUZJiv3V5WS0hObD7cQtBecz9zfew7SiAsGLEcwSBsFeDCXTpF7gIAXNV6OJr%2BAWslVRDxVSTxjHLBcnC%2F%2BkjLoj&X-Amz-Signature=9859279dfd8d400812eff0ba23767b841a95c94a8e8c183b16fa49557583e4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

