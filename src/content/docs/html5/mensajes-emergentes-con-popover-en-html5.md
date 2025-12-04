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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUFNMRRM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFTBDtOHveFxHmbY3X0M9%2B7WvwMomGW52Wr7TRm6gCMgAiEAkumxgcg173ofGJ%2FjHXcpZVMzmkHIC0Oi8wUGPzJnGUAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIwB2l7KKW5vIT2RxCrcA%2BFUbBoDx%2FjrLybleJefznDXnhSalKtf5%2BK%2FOVgfNWCm01FqMUbCbGBVMn7EdbTX4Edg9eE8prcqoHABssIxkqYmQ4JKat4F5JV7MFTBU5dDVgUSYbaCd7AcJtRnvvFDy6vYYhdbrZNFykZYBUENsJcFD6aPo5lr7cm1TMFbHcfIUMG8LTRF42NiEJz2p%2FUxMuZYXb217ZXpyxUCm4YfydJe1gCYg0BEjA3bhuVC2dpdWBeufEY1iPrXoy%2B4F3F7pDkbeJJSCKe97ofYovBSxUjV7Td2RDWDQpjsLLXoZG5oBTzMrtsRBATlMAZewjF5jZIJ%2Bq7ztuYzZOLALpZXBfaCvVU0tN6uNpuZ7i%2FqPUp9hWJjiMXlh%2BRAMb0nGWSc8HmCVi8b7s3DzbQEK8I4Ie9XIBs34rT0RXBpGSR9bkOZJ6vDmO7pKktOdEWaqbppoYniXuVPSoDu44oYNQIvpVchZ%2BMySNEmqju3kLcaQxviF84xGbgw8gtvztgfKd24WzYLux%2BmRV%2FVaQ%2F8H%2FODNre%2FxJQxKHQneRZ1N9092Z0fnwNH2J0xbXTP%2F1GxmqNCnGTPwuX6yS5RhGYMtVk2CCS5tCzR3M7uMiJq4LhWUDyIyVCxjcv71XS3BOqMMNKgxskGOqUBdJpsNSDRAzvLFcaKOJlri2abOIt%2Fy%2BZ46mcisGNxAWEpVrYMbrTQI4hXzmpksMutmVEx2rAyFHWFoP9cnOyQmXEHvn5tgJlrOUyT086x8ASnuDbcS641wkKP1QrIugt2So2fhdfCtjw701Bn1oqW9HmyhkQbvdgSyl1BLabmMu9td%2BXOzW3HSreo5k66g6frc1vJkhnKh8lu6s3gcRXR09jv0q2g&X-Amz-Signature=e1bd53a3b130ae1a9ac47270f8a7f158d34b28fd16e91bdd5d14789c3a379b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2XYMC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGfRK%2Bg08Me2aH5HStvcOHAfty0tCGqPMbjeE%2FkZzNRSAiASAfRhNpZ0i91qfd2ilp0CxIWkeCKhmhhw%2Bv18rxb4jCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIModG9XJLnAhAZbtkRKtwDMm7Qe%2BDtn4ZAvxRLQv%2Bixi2%2Bo2WRkHfjutdTdnqZ3QsRUUccz7zOaXf3h9z%2Fg3EclhlSvalpFs7XO6zXafZtwO9geCUK8uz9ScFZgWE6lXXgAIQvJYekH6VCl%2FyltGDN7k0%2BL66vgLr5GPvlMhmWlf1rJmF0aVqcXKGMeoo4DIu%2B8SmlmQJjpSH8BAWIP6BowAmmsouiXU2sHMoBog8%2FsA53xlFkaihqaUjxU96EB%2F5ZK9w7TY7dvQE64Hg1OVQtQtkNvUfs9Z8npqbwN4DSQ8lrncTelDM2JlIqxtJ536vw5aJa1LrpyF3OhzyLsfZeSmH%2BzfyUoF1fo%2B6Tu23Z8lhpjLatqwCCjyFAFn7ofV8cakrlAt%2Fp0hlXQQ9RbZ0ZyDC6X%2FOddhCqFzgXq%2F1nEyh0%2BivZXzvaCuC5rBxY9v7mLEpRCSgWjLvkGCCQ703nmhCJmBCv4juk8SYKM1AaI%2FWC3iAz%2BVIHaEr53xrTBmH5VrMpjidd5Lg9DEkeVskZgVMvqiSqkoXg7VsgFA4EwN3s6vmh3nvss4BZR83GVAOrkUU8HL8KScaUCGFnk7qt7sYuZZfXsj5%2BTilEE3JlAeyFYhyWrdzPJR7vx8M2cqEUWZPOuSeVcPbhtrQww6DGyQY6pgHCgMwsaxleA7hONp0Jj0tW6fTyUYzl7P2rHsDZ5deKuv80R9Azy56D%2BjyKpS3JQXNJ%2BI9XGi80oaYcCl3cecXk3EfEliUcoWisbP4don6UjEla2tAj%2Fv0hjgh7gwo1i2BGuKUoC5i2wogeSfTM1rRCXIF%2BmFWHHRMZAcRrl7%2B6q5JjscPVn8%2FIrnjEUiy5dzp6VVX1p6fmBsGQJYihNwxw0ZBXSZXq&X-Amz-Signature=dc49c837b9992b9b23d80b13419e9c2463b056d787d044fee3170ccd02d29fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

