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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSNXP6EI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqhIBtVtaOBXFImvibK8sjrZA2ceWoxbrVIU1knmPieAiBWvWyJvlxS7TRvf7dt6pTKR2%2FjGIQUGmibTocI9LrYuyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8YKt3bgU%2FddDsewuKtwDdwTvrEIErU%2FalvqFzKfMFWt7VWzJVLwkPguMWvfZu4N3yKFsoW0zBwWeQ9rtV3G%2F0php%2B9EBvIWfw4tf1SXdf4L0oi%2F6ra6EcsJSldvX06Z03Zyu0%2Blb6K5fMgPAuPPnUl3HpprD5X5UrmqVVX7VaYKpbk73%2BRukyWkrpwjo41l5n4Ikjt1MrYddWgf09T4uZ0D2PclJXGHEAao6FaMiVgM1uiAbWwTnumBygaSl9xH0PtRuWPOYGFXnxCpLcNLO1lCJXNsjXuCSdKkNg6MCEN71oxvoPcDuZEMuua56P8nWOrXeldnk7IKdAC4l7ayy9M6ho2fIXrfmGl7JbT5kUxlJFOWOlm7mpCZU2O5eEcrKpjtM%2BZVS0Qpztx4NSKgAyRiSch75VbnEwYOqEzeaUHljQCsm5S2rOmFrxctoN1bbeC0xoPsOxe0ItUwjpEMu042UdKkQyp2yShEyH3jjgmCJGXoeV7xbx1swRWjywDxiFffmqv6L2DnZ2apmq76MDeKnaX8Kwt03kwPjKXIi%2FKkWCqqfR6fU7jE90SSLSLDwDtJS5ixxKWUmIrvN1s%2BYsOJOAQBbPKZzndNHNd5MbQpALtyEDGlKuxwknqrybeUIHKvT0h16mddRkOEw7LHJyQY6pgH6SAta%2BCBr2Dx10M95VFkJynXxyptnxfxZZsnxqq8%2BxLXEewGvgaKpjwl6AaV64p%2ByBujUxEEkaVR9%2FX1gV41%2FMispn1RSZe1vRDBLGlMG8oLRp3OXAvDWgiFEP7V2aGxT3lOO66wojumUjDDxcTOXaTJ3FiU60SXjgPQNhePB64htQi6FC3DH3KCWwh2tssSt9nkKCzERyCxtBo37Gfr%2BpWNQLfgw&X-Amz-Signature=8478f9f2d2cbba1ed0fd444af743d1966a09b00186e8822818545f920013435c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7IZCYP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bte%2BEhR3D55AqI%2FZP%2BiT1n%2FGoYQE%2FAJuPmXaNwBaM8AiEAvMJvYPk4sfShojl%2BMZValxRo%2BUDfIqDyjtiBe1BefcAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDALAWHrS3S0b6B7v5CrcA1FL0e%2FAlf7d3isPOz9Pojf4usNM1ZVU%2BnrkjGlmoKKDhNWqW1KbAhdKIWf4UbV2%2FpGYfMmU1hTqGEI9MNCrQ%2F3r4dKlfhsqa1G4j9wZgK7Bv3ctM4PXvF18WWmQF7TOeDLyMyBsXpKuiqI0ngh3EHsAt%2Bw%2BwaQFjIgPgDEymddCMpnKppxIWnwzLq0PP3y1Xs6NReXFC6ZouSds5D3QH0YPchdGYKFyI4exAATnjdAlU82g4tOQDyarXTdDFI28%2Bx7CJbKM67ERFUGpClcFP%2FJ12qCHfs8XUWevV4TJaEAEH9g3QiiBykRdUwOObbi1HeCV0POLenIcbRR6xjKv6HSWuha0TttPT1pfA9OwRX8hwduWXBmMpgnkIkUYCkUPr6nnDmQE2tsyf5khmP2gInZieZuXrLuFSwoUaRMY9UyrZVm6cR7fpkZDDaEQo%2FOAYCl%2BJRllqptc7LJXaRcQPwcki9URfJaRkR2Yxv3%2F4WEVCksvFnwViAWG1v%2FmLkHoEu0V0AtMtK64RMeqvNFhhcUCobWDthGBqXe2MFY4w3igoDyEAgpwWOkGunMADUWWFboW%2FWuzy2ziRkAz5%2F7pNpg8TRfSGb9xKvhR4%2BxqW9CzUM6wGMW6m%2Bj98FUxMOSpyckGOqUBGWtIPiKe3LwF%2B8Yca7oCRLY5SAJ66PgWgkI32a59lDocxhLC40n%2FJtGzh38lkL7Im4M%2BqSUWHH0WZwpItABCGSlvSKtxJbFaz4krIni1yDhF%2B1hFiYHPBHvXtxrCPyQ1vm5plun0SbiCNVs6WC%2BAWnLOdyuDLVrTQRD9gyGpsFjMMv9%2BXuH%2BpidINGuBYSFwAEMijTH2noPo6mSh9RPh1q3NuXgd&X-Amz-Signature=1d1173c18ae5a50170fd9f8631554980fa78036dffa907b86ca0ef91cbeca3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

