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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMWVM35%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX3gT5IuNa9%2FOG%2F01nSQ7DwhpA5Fn2YapcF7Z0Tuzl1gIgTvVa%2F%2BATn%2BtayyWWvFABXfC6b%2BlAqb54WaeK9IJd3HsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxVDPAUvl67XUwC7SrcA1o%2BsmgQtR4OzftMSUaIyE7GmZM6HI9bqGTVQMVtlKfU2zP8Y7RvDudtxOjgX%2FySC6OMyaprZjzHGcq7yXSxSmoF00vAT1O3vkeEp8FIxsUwYyUSDPrlZa0uqB8I5JcxKajRAtUrqQpt6QTOVAm%2Bz%2BQydT6Q8mNlIlbnKsRQ%2BPILaY0%2FdF3H9XXi7edsHU1nEGj6YDWCJe4aYDPTG9ENLghaNJcRqRAvwMzEQe2WYw52Bx6H491Q95ebf%2BzhQ7UTvrjTZyaDVhOhOZykuxIpFMyzfRW%2FQ4hPnAwKF3x3fN5TS0KGyjm3zL6UZM9fe%2BO%2B7voAtoRxl%2FAUhzPfLPO9zxy4d8yhB2z5kCht58C8zrdzKCGTD8IetP7dw4wtP2TLoHqer1Jpp0jJoir2MeBwGjaJJx8GOxGKpyxPaB4o9d2I7rrviBz6W0Uc%2BSYkqMN2e4DZVwJbFIx5AvH2ZUpBx8ALxT73wCxPgaSWu%2BKsfqIaHgvFAAfHGZoc1IyYNe0i8SxKuOKnT1JVxc2FrEyN22lOGkTiP5wmz3MEzJXZmcSZiT2fIrqDaqDfQTm9A9SBCxxrM0OV82U9teZ3dBUCbeLa2zoFviVNepWgaPC52xw3E7OnG6j7GJSie%2F6XMMiZ1ckGOqUBrq9R1JfQKfHPKqHmftPad1h8bwWF9hf7otxVXaHfYyQQ3U6YXipBRK4Jhm0TXON8GtLsADQyH%2FufoJXlf787nZq%2ByhmvpddGmtx4r2fglGDaEjj7q1PxYuosBekxGPmZB0eeJvhPGlOfiWhcgSc%2BJq6ZWjYhJOTlT1NMn%2BSCSnQ13U5jUEqmeZkowO6%2FTzy1c%2BIsv4Nb5l92rsnV0EM%2FI9nQxF0M&X-Amz-Signature=6fa3da5973e463b39d74df7bd8ccb60441a3cca64cf025889c8d3be6646b87be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WR6DBR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5nRVbg%2FMto7WsbExAZRHscp33kLlK1UMRV6rpElPKDAiBfsu9dsBcmMpIcGSTM1fabqFTEUQbfyGRS1rY0QCUg5CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMpIAQG4ABnodbOW4KtwDes2rnuwRf3p0kbDBQcR4Ar63HO6KQaSN4xxqEKa5bszcQvmboPKUx1zRsVK88df8HpyrOIUD175%2BWENJamtPShwJlN1IWonuaj96TTKAhHdV971sFnpti3%2BiTyUhIyBFk72gwj0Cn2KsKMdoxCYXG04PWURZmJwK1JA%2FTyjAiFok8def7bn47uUmIgrt4DfogB3E6crvNpdpE7ECvUED6gLUauziPpkwLEHBMcDq1rWoO6msWZa7AzjXuXzxFeI5Y1YFsmS3NrVG0jas7GIMykQg79IPC0YYzPl%2B4zTixymY%2FgTWmaQ%2BF646m%2BNKQoJElTCrKTXQhTsu76OfDMDWqRav6%2FsXv5Cn89xyyo04e%2F0H65AMGVkWuAwNp%2BjupEs6LDQkUzDzQveeTnCwCvQzwbipHrwm%2BpIBR9cGfBIV3JDgMTZLixWWwi%2BeOR0ihWPx7ZscDjs%2BIYlSDY8R60vF86U96rkTQ7MOIqjJWTVGyaEgSiuSvA%2BrxdKIhhFr1HdUDFYF7Hwxl9F7Pmo2o2VuPaeRcJ2g2Fa9MZq%2FIIkLL1pX8cdSo%2FQuEmUjCfQEBgwP%2FizjIYi1PaiqQZ3xGfbLmsHnWNjLNro%2F2NahiwavtlE9p3a9NNxpUCETAnAwlZrVyQY6pgEFzbe00KVibY9Xd%2Fy3zfJ73RdYVdcBrtm1xLTp3C6rNvVE9SwqsrerC1rabpDqqpikXJMhz8bQc9lrnG6rCIEssmwqK31tQM0YAZBXge017tFJFjX5vDnXmnw6hmpNa5SGhPaRhy4Vp83sjgKH3IClv2WxWiWMzPLjrPQF7r5OZgbd6heG%2FATIS0npRGwjmjEHqEzLjmnMRbxc3gJ2wEVp%2FnWj4CRh&X-Amz-Signature=032d6c633629cb65e2f4227d2a5bc6b50791eca9a7410d1c0734f74dd4ede3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

