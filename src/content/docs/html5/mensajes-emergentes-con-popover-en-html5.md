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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDXNQZT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1SMssQ5weoPGNg9t0z8byvL9rsSrcgTbNtnBoUn9OhAiAcSAedCQF5xIIgT1pp9%2BlNdxE7s7wTuCwB%2B79vdR9mKSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMqcl5c4b9WkUdIrhnKtwDyxU0P5scKajmh2lcdNfq19V%2BBu%2BwWWeIDXV6P1cOGKMTqnFeXnX6GGHlPbSjzI3PSkfnnyURb4nnv%2BuaJozDKQzTDBljEmTR5W9CpYGH6%2FU2ZCx4Y7HNsZowxEbiyUVvrs7%2FXnsTIxQF8LUEFsor4bEq1P8af8y7QKg17jshBdQDqlPFDKtV2Z9AqABlt%2F7cpV8dX21SSeILRh2tvej9WI4cp0r0E%2FPpsmcJ3vTKaERYh0Vy6b2rxgYJDtzjHZUIFiJ2S6a816cWspEmqBUYA6dH7WH2CvhhMGTLoWTFH1PX0YXoawmKiaSSZJNmkCcK6tlJZ3LWwi013t4SiP5FL3mCJU5Q653oudbnfHDV%2F2rpQlLEv7imYhFWr6tbzSci5%2FcFb42bT8T8r%2FjkEQ0TzqucVSQ73cQwXsIqkScdO8ZWaJ9Wu3a26skioO5K%2FishJ%2BfEFoiCAfhlZX1g3uRtx3zg4tqCv8pk0aa8G0Josuj5fYKzCGwnhsAU%2FwLiTmy8CWISLCHEXrsfmAkV9N3dQuGotqf5D%2F0bxjkpQE%2F5Mvv4TmTfNyDuVRFtFTOewuSn1ddpYBOXvsRhfbrVyvcb%2Fd0zXQ3PyDv8316PrUnmSvml%2BWRG1rzJkvZjLlowvevPyQY6pgFLOJ%2B71ZWKSqSjLAg%2B%2FYaWTC6lamvw6w6JTs9y7cdhLuvI0vUjTi%2BwhC83VDij8hikSdNokGn6zrxGy3Buw62h0NPNnrqpgddXNog%2FRf9IW5liviPQPLTDt1a7yvqW3SREbmw5B%2F5m2uF2icF5CJxIMJTfXtTLZjcy9NWiKOHnE3S0C2TrQJS%2BZ49Q%2BcFkriDPQNoVLZs7T7ovvRTnn2YiaOnyFKxM&X-Amz-Signature=5c46a318c26f0315276b258ba0feaf718d4db15e6692647d4e1fd7b40070869b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQP3R5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2BmxX%2Brlo6P1tn%2BxhpcA24vR5Tpkx6gU3yBfmA7QR%2BwIhAOOPWvigT%2FeS%2F8v0eztWNLV9nBGvlyZ3vJMRtbUQ1S8BKv8DCHIQABoMNjM3NDIzMTgzODA1IgzkieffHUHB6bQnX0cq3APT7SOsS3uCGCIlf8WawQOWxKV1qJjJCb8LpUMDbMaJly9YmrKuSDMyXBUaIVzUnhMCwGyHnwAlksoPWPnjRiPeF7R2XzAHJWF%2BvEyuhOfbAqTgo4Rs94oyRsroVRFhUXjN9AEQX7TV5I37CvWemflqaBI5mrpryTSEujE9IO%2BfJJzlIqUdzCA0INDGRV2IkuSR0JL3QA3GZ6fKqJOf1i28UjMG80w%2Bgsro0mWOAnYPZr8DuxtGVQh8bIx31W14VYdwqaa3bgapMuGkjIdvH9938S6H5g4PjCTa79QjjsvP7B75Gzy2xMC92NBk%2FrBXy1QNg29QlszOBJJ7H%2F4iwdaR9KucS%2B%2B69pHndyCFaIGor7cNpcQHA1IfLbAY92%2FZVLyVw%2Bx4q%2B5AYjAyJP1QtxX75RHAEyzItwgs288d8jpND6XnDTrDjthmcqznaqfRkhRhq86Ifh7VBsmD38k8UUPIbAZ906iMZWRGz1wnA%2FXUCUs6roLPe89LrxGPptt%2BC6L3B12cXZejnOytbJ%2B6JoAsFLgF1ucSkdVtvCjITNG0fZ0T7IZbsDmlqoV%2BTOPJn0WUU1i29z5noOTBv1KVcX3OzZ0gteXjd3tyUyo4anWHOURooBhSoGuJYOkb5DCR68%2FJBjqkAekq2RdkDF%2B82QKq4LlkGMM4TjYb3Gy8DUFSX5oZSAiXbM%2Fw5ANz0qNZ76CGetVs1w4ZWxTKTNk9Gm0tNC8fDBrEUwj%2B2obc5PiVE%2F3YRwAS9JCjG2E9JsGlDCWUBQXHlk8B9%2F9Vrqpasntzaqnj%2Bg4OQDTRm5n2m8LtNiikrtPE%2ByfI95G%2FkTwJncX5u2SvPiOu3Bbp3OGPYcxsfF1%2Fy3O7ca8W&X-Amz-Signature=deaa67c0c80850c9139fca6d69529f9bc82c521f00f3257092a5f2ed0039f0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

