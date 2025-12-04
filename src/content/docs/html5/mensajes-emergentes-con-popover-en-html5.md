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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK46WB7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCjc1ZDnwJ7sFJWo2Xt48bQvRLSHaIxLnlDPgHD4nTG3gIgSZ1lL3aV0ib4uoszp%2B5m6XsEsJ8JvI2QXF1Iui6rCHoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHup0mB2UVa63weUQCrcA1Y9vsnYrTj91HHoo1opnBRWTHebolmRfPRLAjx6DzMnnWVxqfuQXgg0RADTDAFdzhcWiJ6iNBLcaCBQmOoNLkbl0ZZuGvS9MM1Bwj5oZ5xR0P9V%2B%2FHK1fbh17moBeOV%2Fd600MffVwcQnSILwu2d3%2Flnnk5YpjuHhBtIURcEH4L3Eu9y4AirD6dGLBF6AzHDnBK9F9bqkD94JLqyUdfg1WfoLwQ2jS4PGL2%2B%2F%2FPdkwRCcj%2B2WCQDmgtBSZUBFcdIZ0KrfRRPsk4l0hB%2Fh0wvqOBvPFjAsRh7GH7mvT%2FxMXXg7QuegCuVNKtW9QCuydwlerAqK%2BhAS%2FT4lmMKo8eC5nDc0Kl4DUlgeLTqW2PCmJ7IJukCBKU%2BOPCa9x%2BwMLejdk5O%2FJoG2b0MMTUxFyLqa9yAEwU83tYJ0Ua1EOMhl7BLR8%2FJbSLl14aUBGCGpOD8cAUIjZOdnoRS9jXY7WhTPrf4R83pJG7TMNgbQDTOwrmjWVvGxYnFgEV0MivA3GQcQuUhEDmDt8FVTjZQ%2FvRGErgvZXbfbAYsO7VNxts3gd%2BfBuy%2FYzQElyUibCFn0NJG5n%2Bn9io14HyUbu9VxRbfFzLJCF1c%2FuZFM0FEqIkUPcwXjkf%2BFclHAwifMtEpMIKixskGOqUBVqPSWpyvky6yUK7XcM3tJrGJVj5Hu6GwcpUYEF6eGEDO%2F7n1a7cAicSGrOCbAzpiPyXoGHtzcxsKiErQCxGk%2FbGvvJvPCg5s%2Fa9udH4vr%2BOW2eBFW1PUcWXV8a4%2FWyWL9DUcQeQfTd6q09GWw19HbVoX2QE%2BuAUyfNdViVkkmEBytMxy3Wkhe6sWpVNKIcaEEm7%2F%2BlObT6Vbi9JeafR%2BcBenSB2J&X-Amz-Signature=89fc6885f0eb686436204f2e34ff0f84214bde2920b6e2efb264eb946446370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAY54U7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCQBJow%2FUEMRDprF355wATIYXTSCO1KH7yFRqBAJcRQZQIgdaAtt7q3KbRpYj%2FPXZcee2cbYILCTCsNvHIFdpLaYwYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAdt2JulWJvgBpxUxSrcA65Wi4cxHmyc%2F2has5Msh0geMK4%2FUil4bczjSok%2B7fbkH183a5b060qJ40G1sQ%2B9xjGMBsMXxpsLgcLb9NKLSrb3OHWKBnPtuG3IMDj1Fro34lE5BJddtLqAvOFHBHOwoDcAkdtLXd4FTw53ErLCH0%2Fpn2jCuaa%2FIaB5Z%2BWUKkyKb%2F6YjEcvXthzLVEQNMC8ryTEz1fiAPXff1fb%2BXIrhP%2Fm738NOvDPuXY9Em6OeeNbAEInEgRsBFOT2O5QjSBooEadqHVwL1rluxCfy9hxTYouBxNmxpUtNSINsmwzbxqnUnXH20vBPjcy9cAxoV7op4QiwxY3bWYcXAslwAz7vGbkCsmvwQdL3DIeVAT%2BCexLXAGbGxTqAwa84UD4Xl91YJR9FYKongbSog8IgmHtOh3euPI7NpODYVfEnFc5tqEB%2BxG5CgV%2BTLVwHI2JQcVrp5LOUWW5ZZhlYW6FuOASz9I7tM0yKL1ngXLwxwP52JbSa4WvAw%2BMe%2BvZmjjLm2e20WgVQYlurGcIOKCzSHXP9wb1aZ0RqWj8HcVCQkbvIf5de%2FGrm%2Bl2KL7KyBbI2vxEt7aPbOy18sdevgF3kr1zOZSeH8MRRuxOmdwW45SW24gXt9%2F0XMUW4eHyI3MwMMSgxskGOqUBeP5mrsR78AltEPDd17%2BCykP3MAhSYMGtop4g4wY2JuyVrlm1mAa%2Bs4h7kMVwe9iL5HRchhWT3%2Fe4YetthBeRP0JAPJwJYB20FTYouJuSWhziMCus6sH2dDB2yU71dxDYZqY%2FZz7bGvne8To5wcY1EwPnj45YqsRAXKRT8IYhxmSXncrzUqXStF9I%2F648ocFJX6%2Fx6CCM3rD9IpncWX7WQmwthwA6&X-Amz-Signature=e61ef09a7f9d4cb4ee74cbb2b8f8959a29c96da26b3396af80b2d9f39d1e0c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

