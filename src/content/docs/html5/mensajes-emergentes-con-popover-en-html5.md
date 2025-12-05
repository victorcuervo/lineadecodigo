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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKCC6R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFmhA6mW0%2F1oL1w7SgdxNAvd97%2FeiHIOiszg55MSgOHwIhAIqyvvfs3ggyCanyWty3Sxr%2F8ui%2BL1qwI8YTiyjqnvtZKv8DCGAQABoMNjM3NDIzMTgzODA1IgznevkF4nmUrbbDW7Mq3APjettAJZbJ1E6mGwkCWSYky1hmph8dHvK%2FsohB8w0%2FMXE59%2F932NsDZnPxdVVdjPWXLB8vNgWRsHQosqJjvVmKaqzDuT4ZHkR%2F3LjfHvxLa15TeQ0YdNP%2BTA2H6JaaqNAsbYyoME7WkIj%2FcN%2BAIWZ%2FinBy4slrELQgzYgCkfQ6Jea4Qh6zmMR6gc4qzRR%2BLAzW6AgReOcprgleaOc7r8UBLMfZSBMZ8kzKeFY%2FQnG%2BM5KPBdFb4dak0UO%2BuqNzdxTgD2uRnzJDso3m8lvP6dbfpZ%2FSblvlTA3s60lNjb1tBOizHMXVtRAQyNK865jM3gJ5htZj2sGhN72nHZfDRNgKsr5VszPWlm3Ibcmks4415tenjzgaYKU4aw5nBi2uwBkoSnSxY1AKoZGR%2FWMtq31dTssqm%2BIVVl30Fov%2F4f9nPiS3Mpx5ynfPfMijUlKu11nGDXJAR%2BRnFCK2TW0KwTrqMegP6prjTbwEdWR0CnZ4LHVCUICGj4M5XH3KJJq7EWQYM82y7Ss2BeOZ%2FeJjFFQX1IxDKmClNe8Dvbpf5KmggILTVTT6L4y%2BpDf%2FXmqX%2BLSDJbdNknxh5Dz1oDGiKBvDuwDof5z%2FdqLc%2BdGW2SVG54OkqGov8iKMPEZTnDC77cvJBjqkARSHHCUfv4BIYKVEdyals6hW7EuCMugwuP0HlHm0qJWewlf8NGe46wK1aGVAsfU2EkyFVO9B7e9A2%2F3r3kohgwXrFt%2Fe8nV6Yf2QVLlvJXGqnp8ppcXMLbIWXYYAhTnecVfdotZNLshtDO0F9aPCt9nbWqr5iLgy5QmoHhDrNpYXFfedOGLzqg55IH%2B6JK4hZDnMAk301seWImthv%2FAW3E%2B5dobL&X-Amz-Signature=0ae7723819f77ead743de0e2719da4086eaa14531fb747d7241062561e65bd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QSRKF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKgj1YKdwWkFzzSvsxlvNKlM5o3NBgaqZcJMJgFjFiYQIgfaLFIIAivClFCgFqWy18xDp9F7zTu%2FKhkDhj3RkMbOIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCNKAJXhu4KAt6YMMSrcAxq5oXMMWjg1rlGbZAEhpquxhQZ2fcXUJdeH3iVDFiT%2Bu9RfhbEBSnJsXsf0TMYIVHcps9vfRykUOvacwM%2BC0dw%2FLAmyyOGwL8T9rlQvZs3sBdg5H21%2BlUgwDVj7rM82mM0c4NQXeYeOwMdz4BBOib9%2F5MfqPHNktSYblREqWS9e1uLQrydkoCP%2BaeKprjTICFpXcadOqrvuw26I57i%2BMUjiOFw%2FzG%2Bwf16cADQOfJ8kokHzEHLpO9SPPHK0Var9L8umnv2lhyGz%2F6X6LlaMlfqGHvvHxEr1sn%2FlELc2ZCHnKjdwwBU%2FqDLzmqvlN6yylqYPwWzH3lnQn2S%2FfuT9TYYdXymHDcryxFafra6pLzgAUQuez10vnfRRxM1J1SZpma2UxK2elCrw%2B3Fn6dYgORxstRoGqSBbpGoV%2FIzYpt8MGHEc0zj1G39JD2k2Clq5vIk2ESnHBJxJs1BiW%2BgolF6BDesKDz%2B5ik%2FbkwPhdlyHVLm8AjIiX3WpxavaP8nK%2B3mLagNmdrOKyi9Wd5USRfUZw%2BviGX1isIOcmmBN2ef4oYRMtg%2BiNVD5Uy1nQ1E3U7nyRlA2yC4Y6ADv2pZavizf9e73WqsCBrbRYpTbmuP2%2ByVQcAMVawV7yZlKMJfty8kGOqUBVwobdXV7sgBtlcMav%2Fxq4xewLDWvsZcDEjSkOEBD86l2uQWDMGmXQ5bV2XSKoiRbjca5BQWZrC12Za4E0s6oopL5GOHy67K8nx2x%2F0NJLGZTTWRoSpv7z7W%2BYVWlQZudIpgAzP2usnQKarXG5N70Zixc0YjogDYxBCUxctUuf2%2BPa8im%2Bp5yeLR2xpyV6wn7L04NL%2F3A1Y%2BPgcRmvGJ5oZmZU%2BKm&X-Amz-Signature=352b6601e9386d7a87cbb9c79b80f5ac95a080585465006445a8da70b233e5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

