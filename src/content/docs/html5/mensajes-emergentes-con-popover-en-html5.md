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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VCUQSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi4NrC8ehCLpijBf7KbXQ84gBkHc0Rg8ynx%2Fbvd8Vs%2BAiBHmQA2IM0jLT4r2lSYTXk2lbY0EsiD8oxhqTsGw6XmLir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMv9TSu67KPsdQki5XKtwDAygh%2B6cUXaPFAy35wM%2FFeoV%2FYaOC6B628ALFHqCImXv6PAD417Ou%2BJKF4%2F%2F1a09G6FNiE45wuTz3iRGR1eAsLPiHlWb80Ps16kM1NqBrRaS4YGUxaLhiFWjLXYnGSin1mhh%2BIZhmRqd%2FPmh1Nimf10EjX5jgRa4uJ%2B3Xnv1Obj9C7KGpLOECu0Pq3kA%2FryV0NuPtxBmA5cuKpct2j6Egpd%2FwWaUXSTAa50GQ5IO0rrbfrIsku1XNpXGGqkf5cTJNE29tmR6YPh%2Bf6bxMzJ3igWqxSPv%2FE17Mi8kRGfwqUI1Gvlqq74zheysWmD9X0agKr%2FGCEjzn9ojLK026W%2F8GFTu9dTeH1lRepvFNWyma%2FaI2ou%2B1UVQ%2F9TsOy7p8vm1pMLBpJkO8LCzjJ%2Fhw1R6RjF2pxfyNesANQ0pKLQY8%2B17HFfdSYMiXtSvJDhlUZA3gdjQpkFOHZRTLMnUbMMNo%2B4p05UihhF059pKIlOi9Wqm4nTSv74IulDWzvHB4fm1DDnLi7tIX0hTy9oxAnRuQGpglkVd8lRXP109CTUxqChZF3tflhRcdV6IKlTQafuCgUFeEah2xeRMGKhu8Im8y1v44Cv5yDhq0E6vdNtbagHmkg4gFc%2BNhA3BB6kEwvMPOyQY6pgGto9Q4JDCXr1C85Qb2Wmo3OJVbYl%2B0oO%2BPpy2p0z6M1NMuMDiIhCGCTxbJRHWO14qBsSBsvlRPHnC9403wS4o7p53eHk2d%2BwYKdpXQQYTENBUB7lmj%2B6Llko4l8qKVpfFoFXRIWw%2FBSX10wkgEkM5WD3AjJGIbd0WIZhelvY%2F0F6iVUHMD%2FiJ6iyiCkQnNBhaD08mooYEjRX436krhrznVBf2Sj1mX&X-Amz-Signature=893b9b217242c4b44a8dda15fe2c1bec62f5fa7c7e306d4013eef93c04daae6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74S3K2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgiuA7SIcSGPvZ7JOc1EvZfM2lGqn%2FdVUXEZHNK%2B5NjgIhAL1q9EemWxTTgwazgCIFYgsdpEr5qVJbBzzrYkZN6x41Kv8DCGwQABoMNjM3NDIzMTgzODA1IgxO2%2FLzvXaIWULap5cq3ANt8jevfNEafdoeftFsRRzbZzvGsKlE5KR3JEmakMEMfh7NiQlRguuWggYwKcQUfsC8WF%2B6ZvqE2Q%2B6eLTfqIeehuO44Ay7DOfnSQAXqShl9O8JikbXmtu60a0qRh5BF%2BemCM0KtX%2BDB7k8ZRbvRx07WZf66sPrheP7b6244S2%2FxqLLsVqN2QRRhXZem1mErrziqfFqWWrmRLpJOVOQmCLhtJmXN7Yaey6UiSM7JvUabQ7lHHQZG47npCqBBU77EMKRa63iIsdZe%2FLPN4jLdOsOkdzywyaVYV2k6TYIs8kK30IcxV%2By%2BOH69QfRKSv9NIvS3Dar2SpJppjevBDtUfP8OStW6d017CF8sREYGayh4h1etWR4QTNxGgNGju9z8j%2F1lkepGPAC%2BgvHmX15JD2kXffDvtjuWGRRWdjCdLbvVSmKfEX9U55soAfttjsxKaJjcFiGCV6WFW0P3MNyo%2BKCDYKGqtuXJi%2BLSsWkADH1cFhseX6FKiCmOJUwTFlQwty4B7sdFgTw%2BDQpmQ1GoVAUDVzuSSzJpc10xBs1jWqinzQKgelb8ZuCEUhekjL5Te079SsHZzRfcTC%2Bblyjn0dK5kOziepcm9jJIllb7kjBFLJNgyrqVq3Emw46hzCew87JBjqkAZ5XLq1xA83Dd6njGlFVXI6jaN2Fo5BzNYIpvj%2FpCFv4DAnKliGgO4uFv3Avc%2BQ7SPHcOmKgv2MjZlOQ2qC1Ebmcw9H6GBVIP2wOwPbdJlu8%2FMzBYUrZ8jPedfi9Em9E%2BynbKUmgBHFxIGErY1W4eNK6QHVcCse5yMOCq%2BOvjYLi0mAT%2BpOZQ7fxd0bR8y81NEqJ9nq0jTCsawm%2F%2FKWL2hlfPR2e&X-Amz-Signature=10a3365e2a7f4b994b1bb254c8450b3a66d645eb0f8d4b4fccd2872b025f5d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

