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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BWLJH2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOUDLiugnaCbsPKxvvLjSxGf2MPHHWyuMfQy0MyQ5ZgAiEAsmc3Kg9xfQ66yKJN0ZLRlplNzLaxjYX4jB9ALyT4EwQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDk8OoV9fMJ4uGkP1yrcA0nVwTyW7GRybryuUz6OO5lOyppRnjUxz89YYs3WqWiBTVrgl6WDJGNtTQWSb2jOmMPaDgovnDVzhrltWblFyL4vQTXpxOTRqiSuIPfYdey7ZySlSakCv7w3%2Fbncpa7xZCCkxDi1Wm9oIf1Pk6VmOEPHEJwIlJoG7R%2BRbO9jHg9wWLmm6E%2BSyHo71lGYcB%2F3Mi2P5PcfhrlBQRFe5y3dZHrI0J%2F5sh78%2BFGQcBDjx6lCROzX0tZJqyjhVO%2FMUCZSor9UfiUTL24kh6qXW5%2FdhecSpRxCvypnT8UD1pyuGmEMLLXPfGdWxSCbcONJUeJL%2BTvmpfQuQukDxt3EaxzZb83VnOMHnhg4hohMG9kEH3odXLVP92eNo%2BoCxbYw%2FaLFuQWkizVSRrmBwBSNtcOEquE34AnVqvYCPKEWdjF3ohaLVh25XAWZTG6I1%2BkPSxOb8SSIya7a56pGrN3qM2nMKliHmV0L9n4rBh3uOo7Em5F0fyj7jMTtw9doS5Emy81CdZ07fh8ts0MaaJZom55VMfr84EefMQ0U9yd1KnwG4aBjAgbvU%2Bsza2ohM2b2PF%2Fq%2F0oH2OxIfCl1uJ7gsnYWCVnkKW1QfYHo6i4mCAK8Zaupq7OTBcxxucdenuRYMIeK0MkGOqUBCso2FQP1HIrQT%2F6Tv%2BQH84FYoYjXheVNwm4C6lUCMYoE6EguGC4H5F7ox2luP%2FOQZmmgRyTrplK%2BSgYPAyLKlhXPkYi6fUyZfOQzypONBCO8gLZ%2BUnitZ%2BPMUF%2BgrecO4nZ254fNUDaiUifoxPJJG3mrD0TKT6qxIxt1Ef%2B8Gmo3gTlPfm3qQMgAzwo%2BPfIAZJRYXZD%2Briv3pmKmqWkKzvvRpX7Q&X-Amz-Signature=196af1799fe653dc794a750f52ca0415707d73e288cf0d9d177637ab4b9f687c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHGOQAC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGLA%2FKLJUyAKPsvbHzvYEcIvcYwD8PGKfYfDUzUNU3qAiAf%2FG5HHUiunXYuun1dS0%2BUzhbdchIw4O1vpSwwp1%2F4ICr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMt83cD%2BPHOA0Ey1euKtwDPxnFVg2%2FuaTwEFs1O11r2Y7yfoJHteo15hmjpc9Ea%2BvdjlNixTusb8bYwib41mVV0mcRUweNkf%2F%2BqvyfroEDMegN%2FmnsJxzdUUIbF4akgPaBCnxMyRbAuyjKDBv9Qnx5WJjRL0bWvwp1pHT2utj1D%2BZTMmJIGzVZQsozLl%2FIKGO8183419OcJHyaVd92stdKVFfIEYfTl5HyXtA7a1IDYTi%2F6jse87itb1mEnv%2BKyKDU45%2BugeKVwQXYyYcDNMX2%2BAC8yH1%2BlPYzY0la78Bk6yH7qJY%2Bx8FZVF6EPwTAiaqk0mIt71mwF%2B7eOVHpTRBX9KEgwjvcO%2BQvnX9WsQEGd%2FqVHtvpiz3fIgfvFFL5pvo1jm%2BRAlfyKkgZNJpJP9xI6%2BUMXdhneT5SMEJSQPMfCn7yyOUSE0mt5FmeUrD9gErK%2BGuDMC66jaC1g9CzRMg4yDpnnyscFGDpHFmPYaWmhGodvv992dXI1YvFsvjLIVC7T3wYo8Y26LlnLAM%2ByktHDXMHDZhhI5p7mSXtF6xYeUAsDlMjOwaqekI4nXKPrkzYHeePOsPwnQC6Hl8FHyx7AkA36nCEDsJ25Ve5WfzApZ3Xibk7XrsOlVWcp5%2F3zzhlibRxrcIGF7AHXBswgYrQyQY6pgE5R6bMmeRdDZjumH50vl4UM2gtnrqLNFnD1G7jEk6gm8hjqmxcId0NxQ2nYIS6AgNPLurPxjTwDO%2FpKHhHpOD7V1Jz%2BCyYQVbLAuBRqu%2BFcsW2kmhkysFE67gVf1ig4f8V8%2FuInYZh%2FCdhJbLawwX43L2LyBxw1N7EQ6HqpNG%2F5Q30qDmnhfF93JTOkJeEVMZh%2Fm3w%2BcS7eZF%2BYE7Ob5RUt4TwOopR&X-Amz-Signature=b0d57ea03f790ca35094b5792ca28889377d8399256d97fe54bd3d16d2ae1532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

