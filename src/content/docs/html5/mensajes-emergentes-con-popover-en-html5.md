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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HIA4RQQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD1FH1iZhNjsJSz1V5Az5rY7UyrbAjpfk3OXevUrd35dAIgVkU47Gmnn7MmNC5id9RuMoIM5L9Q8axrHziCg74utq4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP46Ih2N%2FkkzAz1hSyrcA5%2Fgd%2FUumouY52qKRcVVLGx21DPZWPvAuFXjah5MMSIqqvRO4GgZNJ2L6qjd99XHE02oAlyI4HCDFdcWv258XpJJQFtyIiAnm5W4OZE7HyaTqogOi4jyAm%2B9QEiv%2FKd5EDn34rz6rwxn9EOvC2kNDEmKo7WRYVaXX1G132Nba85VYGC%2By1ksEP%2Fbix6pYdg0POZiZ9JMXSPCGUwki5rITDq0j05Hdz3LwQEo0qaNDMn26wBbQAFVwhPe9JlGFfMf%2Bdmp1tjl%2Ffxl7SOesyv4HTvR5h1MKHkfcK%2FZ8OFuHkxiYGuc67L7w1ngbhRvIjBpulyQNmPX4rFaKmFPf87COe2hXOU9pSmcxzaVZI2gPdWmcxWmIouWLIDzV%2F7fJpidX1pJojnlMD85Yfy4%2B5%2FLlcILeYApAncExdepu5E1oZ%2BThFxRiHrN9HKlcRg4FGQmi1CW95sPQwUP0m81rNpCTBbooKbz1Uzf70gaDozCLFlZkFPv%2BbadU7s2w%2BhpuIHrR6Fiy%2BZDt%2BK7zLuSLADibWyQhdtaoFoJxS1O8FSCaTC5id7g7SLxVwm6ewWSfyGxBpZAFhst4%2FqexWugJxNo8BWAui9u34uz8hcPgd%2FAV5ldPvdLuAf%2BpkNfd6CkMJ2DxskGOqUBVCK%2BaLNmEpSNMkUuAPLj3uTjM3MIrRCA0m70AvOlR%2F%2FySP3MSTkcMM%2B78Fu8FPKYZz1c2%2FZ0kIlnmetd1dS20K%2F7Pnmml6xpcUjbM%2F2suzlkY8rW7VdbZa7CRhFYjiCwIm1Wf0HKgkStbvjH9wJrPvnWyo4yzYIdnCql%2BTLm5%2FBXTUnzOYXXMkOMc%2FokExxeqipqrGz2a8WFTNnFh69p9GBQ6sig&X-Amz-Signature=fe88bb2f5ff31b55f964ae53f10b0fec1d2da4ce1bd651eb55d7f667e6c99537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZC3OYT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIE6jk6k%2FeRTS7xRi5lcWl6vyUR5slxlwAh2wmw3jlCYyAiBCCJScpVgdhJk0dV1rdnoSeQ3%2B2D2PVyCaSY97c%2FIYKyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMYWtgwJXwGqY1fxbRKtwDoto%2BVZj7nZrcRpLvdPogRSUOeiNAlkV5wJLSRPndkL3U4eJky7p%2FZB%2Bl2pkYYocWCYHJqSHJiKw4u91yEMb4BRX419D4ARNedFSYHbWKFrkG29xR9%2BZ0T%2Fpe5oHpyhbM3CByZybEYZiow7iIwWMaSL9z3EXNKjTne34AKL7tkCy8lYz5shATreDIibGkACw77Q7Uw57zOTERkhXWo%2FsHRaUEwARc%2FWQ9ayrqeZD4r4JrMGBucyNjudNxRh9i0KfuI7S1JSFnu9aAoiZ3LvidK%2BO2LL2gqscETgo20s%2BzyxU9ji6BcXKJZ%2FnkuK44DE3bosPDBg0%2BTMmY%2F5OxPRyf2t6BeEiVjRFOqfATm%2BC1vdaUh%2Bwpy3CzfoKhB9Ckf1Fig%2BwNDxjyRw3oUyxnAQIRviVaFubO3ov4EuHzXQ0JJSku60QS3F9YXJQUDIswvNynzhlOcepC2bHOeyV%2BRGamSSNdedglJh3UIipNE1l6VYwisZIM%2F68lbXzQiqqYZ8zVfBIOSzR6oQ7B%2FsGqcW%2Fa6MfCWZ7ksPyxZ8cE9ITCLoJ5H3xLh0FTzrN1wsFAS2qbR7thl3hfrhwtdqTKdY8Sip9uZfbJlwFUQmHjb5%2BQYaawScuOivBoUsMuPMIwl4TGyQY6pgH3xjqz9xzKDPDJzMSlod6v0lKzOJvnpGKWw2J8bKX8JZYT%2Bc50B%2FsZcqLzPqntJ5mPiXU2Is9Ciht1nB4vCSC4FlGHlkzMxBfa3tOWHbsI5cqV9to1%2BiAhSaQmIo2BdWgZR0RQe6QS30At43mmwCh%2F3BGKmnOUGMHLm%2Bz8Fe6t58tTVObb9caDB2zRw1scPhjeSq%2FLL3r3Fdj%2B6Jpp8qBGGBrudjLD&X-Amz-Signature=b07e35430c6599e64779ba10bfd45349025922b6223f5cf5fa116ce40a8ead76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

