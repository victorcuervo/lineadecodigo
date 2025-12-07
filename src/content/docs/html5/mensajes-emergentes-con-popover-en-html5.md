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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNT4M23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRjjnWeP1GFiAOmGXcIOVjxSo1w5H%2BfmpA1ShowM940AiBHVlFElYN0OymJkDkJWwnb4C7wFZHROeSpxKUEiY6VKSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrbGzv0Mr71fCTZIKtwDHe7rlqUvryLy7RIlTD1KX257ge7FSHOQoLwH0juLXqIIFt8glTq529WX3OPGY%2FZd1ZTYAWNDKKxaIxXcgk4U2M2F0rizoqPoOOo9etzsQiJt4z46%2FFkx3CsdGH6rhqeHcNgsyammkW%2BU8Jo3pGjxsmPkFYCUj5ucGF1AUm%2F2aVCn2lX%2FNo7Z8STZYmKs%2Fz01L5Q1TEk9eJzxZg2bULxDGBrdUy3oKcO%2B2sVrIL44Fz8WBpVUqsWiSSxr%2FjaWYhlH6Y2DqNPJ5e0HqRSR8nJG%2BonnHQ4BJevQPSgG%2FsXgAtfej1gUI2TLWD6nX4qVduHKLHqFxx4m01Fp8mFBYJib3b2CgDlzxJi07P2NheSt29w%2Br53%2FOU2f1%2BU7l8sJiypP88ErIX8IAVTn1q5UL4kFGCfcN%2BVyKPRawfK%2BOIOVwjmMFCLlbx5fHzNb392%2FRLPWyDUuY4cQi6H3WmltZkJnEhs5L5haQgPfgiIoBLBB8GUnTAcLwhBHIKAuwOtrE25oPUZ88k3fZJgcbVcsCefky1NfE7YcArItuRVKGi%2FI85O9SvHkmhNSqEBfl%2F0Ku5ZF6iuySEHsAWc09B9thfJy1AAGt%2FmARm%2BQUV75CVuCmALRJxr3z88GW2lh8y8wv5nVyQY6pgGPpM2LpA1qROA95gebCwTYJQCg%2FIQHigpg2OhL4iQiaSdGlQnaiMWhgHcOrPCbPuwLmi%2FzRa8049Pe5umAGPMNWT8Y41SPVb8Vn%2BPja6HlkwjlZORRMe8W70VZUQJ7ZvS%2Bu6N5OSTZ0R%2FqcUHogi%2Brnju0F2TR8Ol7Gei5mIfzDf6jqtHlfLNEm66RVU25i9wiCQMONUcGrvUdK9390qr63YTuWKU1&X-Amz-Signature=fb6c467f160ff976ac471917ec911efeefdd696d87276bfec8486464e46a6152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBILMTRU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBDAtG6z383ZVqtRcKyOY0nLwzLakVJF307J2NHvX98AiBb9%2Fk9nNh1HpnZ2H7NC1SLpf7yZbWdh623HaUagac%2FDyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHRQSCGjz24hTUY2KtwDM%2Bw0LTp26pFWYtYS9kxXLjyDkua2oBs5NUuLy46roPB6MsztryXZUgC97amW%2FOAIO2zW%2BVueBY%2B9h2B%2By0NfQsFk%2FD0QmAdzc1IJQDF0ef2L9Ao3RqFUmiOZg4xcfejD1spBltJ%2BpvURK34B078L57lQC2lfai%2Fy3ub26qfverEr%2BbC8kctlmEVGw0U%2B7ujXXNtMm0K%2FmYMmFeRdNEH6ydwcceEHScjhZUWNTCNitGin5xMaiE%2Fq1YoHwUguUaGJgakSMLcwQNKFb96s9TqVvQV7ty0TsRNoUqtg9Pz91EIG88OYKjRGxZwAHRYa9dq9l4SOlfZp1y2F2ehkX6VQo9bZb5uUg3XKiS0uBhg4LTuKrvBoZ4SBJCVjc3G16hHdvr6uHHS8szukl23gYobhQ8oEO0jK9fG79kc%2BNQEfljkwM%2FMy5XeLnR2gd1pkV%2BwtGAiFeim2ghsE9RKYK9sgiEvNPcXujhrIG5iRF%2FjmJaSb6x%2BE4Dwwqgkw7yeqVxWVSdMNWlSyqMzW19nGYC1JJWnwjH6agNyXUJ8MdZmclpHTQYl%2BbuR9ZcVB4ghpc3jT0TUHhsWm9VYXP6g%2FW29tn%2BEh2XJE7FUSvg7EsuYpAfHJFkAnWmTk3C9pCkAwuZrVyQY6pgEDzFU5GaXgdoPZXWmfqZWRa1vJh8eAPkDrXcxr4TlT2eQPA2GP1mB%2B4HJqeCBB2iNUY2q7KpcvvMFuiHoC4dDxfvaK30IHr%2BmET3WH2U1utcjZiM%2B2lP6%2FJoRIhWF8ySorfYenEaLTIL8GAMwgQZxkgpxuJ1tV3H3rGuFSLmX5Q%2BLhSeAEkxHsk7G5eGY%2FJhT2Vjmm0LGDDmKHjUHkZBghZKPxwQnm&X-Amz-Signature=1e7bb02b6a3f9b0117d6c6a1a890d125bc8d7db3d981b188a664cc5413a85881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

