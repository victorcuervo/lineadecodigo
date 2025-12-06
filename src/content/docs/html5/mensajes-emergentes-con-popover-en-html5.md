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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGB7SMU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoRoNNbz91N7jtoW2zRBHTDhvEOtJvLVpZKLpMm3LkdgIgIJbyiK%2Bdk9OErG4akZo7wT%2BZ3qJlivU%2FW1G5wYZXWWQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEhSZzrCb0JRdDzB6yrcA0gmsOma65xb3U%2FfFb1ApZgZu8aqqH%2Finkxfn2cSpuAzWKBKfo%2FWcjGSybxmV2lpsQ3LjAEm7D1Ymxi%2BlnxD%2BN%2BshifsJqM6cFyfAr9ESokYhL%2Fdiy23M%2BRbu01rxEGZ9NI68aUqMavwXdCYXTjWjZdoBA7%2FMuuuMUsEn6N14P2t2YnbcXNcrnohW77ZCbGkF2IirSbgzLvlgrpI8gYbV6BzS2xDOb%2BdCANMx%2Fd6yOznsAA4XIueBpfl5uRd52axz4oEe9MYbrTKnKNRF2l2Kvie8zVQIgcPV1RwkH7EmNFak5AKrGtvuytx6129GxOVpE%2BwGvtHRCRDUsN3Xl99s1OVOb8KQVztpXHxZ0KYyHXQbBXe6eJONhF3yJuHQnZlLk9dRP8lFdoKX2ZG6sm12RUSwGeJ4PJY46yMT4jFbN4AsV92shHWfK3AUY7fLp5BzRqQxVwVUuU0x2ekzLrmCJd2hyfihaTaaSC1s0sDJejZFa61iV1jeFyQF0qQp1pMLc0yVtyvcxxN7MLU3T4%2FMuRjkmo%2FULxgswLDCVBKz1PDrs%2FGj1zDLX1TgradlOjyG2b5kAjGICToCtZ1jCz4OYGvUAgZDMKGjdcyAYSI34TPuLIti%2Bq%2FukPVcIu7MLzrz8kGOqUB3QYBjfaF0lulMX0rMK9aGm0AmZ8TorNXq2rnZtjTdQ8pgnJOHyYWo2CpQpAT3Ys%2B3qnq%2ByBWPON9RB5a7t2TWlC8Tm5OF6WR5Sr1S3CArmxPNzHVioXS04QP9FCXw3cji%2BuvhZle0gQZ8EJ2WyE4DD8rKEzIyH3%2Fjx1Dw8WYKwUUM0D9xLYfRjASb5nc77vIbUko32VcpT07oqUJDNF7FlbfT84B&X-Amz-Signature=2dc6bb522c628895c708422f2349f7eeee0eb016b45fab4e11e96c02428a6404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75DBDRC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmuDdSiJCd45aW67XxIRWJTDDyVoFcCCglI4BCZ3SLQIgV8EdF32ZCatsiQ294PmJL4aSQ%2B%2B0yH3WVmZk%2FfmumJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP3N9Z9zri1SLHXZACrcA5E%2Ftmq8qTSWVRrfJQg7FbN%2FeHXJFnt%2BjjKpRUOzEogwRDd2lLNJSaNmJUTJ1Gp3JS6f7GooMqEZe2PXx78RQ0Yrx%2FZAlXMbWL3%2FXgs%2FM4M%2FbUtQjL5SlDmIRDitBa%2BwBLsh269hbZ8qiMaaAvedf08MhxJRSbBj%2FWXxzeCVHQrTUwPv51gFVTwLx%2Bik2AAxL5%2FnvBhk14N9RZYs2RcKF5PtzPmoCerWLeJVwDayx375VtpECQdQ5QL4%2Br2cdkiQ6CngRu%2F7nR6xXUQIZc33%2FBGMRQcUM1CkpAJNWnRwr5LYUKUcZA5pBRgZqLNtL0SMY4kPTILB5U4NztxB9AyTfasR9v6gZMgtSRHrrdXDDwCFeaLPFnz2Xd%2BvpAX%2BdaAqJxu8tU2SdaZafqB0EQv4j2S6AVkpDOgvtRkGIDZ1bgB0XDb1k2qlu0VDSivv5bK%2Fz57btSMeeViNo20DrzamQTKPhSrX5z%2BBVt6ljG%2FEJXxb9nUCMK0YDcE0adN6CNxGUokWelfitKsgBhu55gutRXn0C64G8OxCc3IRSzNVm6Xykm2CPppNW4dSglBypOOLnaNYHVPnmPEp9xs0Z6OkXMlYww90JZne%2Fo0s%2FgCEZugBWWBwjYWMRP%2F9ZHCKMMbrz8kGOqUBy1W2%2BoN4diHFM81mVjN9o3mbcNaqx8Q9iXxBmNzGtD1xpdE8z7tI3HBW0BJmAHG6UJ%2FdOSUYwDHBib%2Fkv%2FSLLAzdHoOK9c5A8TCB0ROOng4SoCpGbp8n5DYE4zDhYh1yDmLZa7DNAtUf4Xc%2B6sq6BrD%2FmwJNd%2BNWI68pm1b8i68k%2FAV9M1KRU69LANuF6QQnD5jDjIRFiE3OcbwKXT31doDiNRCT&X-Amz-Signature=1e01f0a49e9cecc4df9d0e39f0f552d51f277e6eadba4a29857eece4e8ecbb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

