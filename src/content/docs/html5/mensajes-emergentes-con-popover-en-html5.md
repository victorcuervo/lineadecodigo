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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VWVHW2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcFtfV%2BZXWfOK6vbskKqPLFSVCtguq5ec9VLAdZnTeNAiEA6qYDLrTpEhuq8QbgitTXesxvHSkc6pO4yLAmBwrKJBUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJjBqzMt6GWMghpgoCrcA2neJ%2BOP8fYzQ1oiZ6a7%2BdHGZIoCzctULN1%2BPMQldlV9i9tbkgVp5u6i2G3Kp7uzhUhD5nmA8wUru7LCLEmDxMe6SFhz%2FimXXUJqjex8gZ7ijJfPDa2wbLuXn7Crc47QTvwFXd6f2FaH0U79Yno0bRFqk47pe2MAPOypjKI70QzqQ%2Bm3URZFEympt98ddeyhyn4LT%2FpRRf%2Ff7B9ueUpEnd2cAWGJ1GTpui7AlprTKfbjh2%2BDwWVFaAY47pFjUKZA4xUbuifzLz9bcPQ3%2F%2Bgo01RDMUd2O8xCugDaSrPs0fQfX9TwEjkm80ybS0rY%2FHZiH3UzB%2BrCDgpmnhQxGVAuyPTTzC%2BZ3F0sa45n%2BQISzFAsatc4i2jtSeR%2BEGpVryXFdRksMPtdaIXUOaEjFhOE%2FawADKYHD9qwn%2BMizGOX6dCiCV5p8ihxntUnRiXEhDK6VydPHX5dqzidIIcZMR%2FXppy7awx%2BVMCm0X3SxbeZ1oEDm6TfNyDx8jtzs9MBi0ZMySib%2B9hR9EdOGDSoJZMdn9EWqLSHyCUGxBpdOFtor0Q4MGLk7DcYYgqFdF5y3GnQubk9k%2Fi%2FV7o7t2mxD7w9Sk3hLT5%2FM%2FIVwqL3rVqGxvrw0bq0630fJqVyk5HkMM2m0MkGOqUBEpo9PbXxAaX699kRoIBRVm1SJlPPiX17BbnQmUSzF7IAK6imvJMmi5lEhplIP%2BJxoxGTKb20VSVkwfl50AjFOxVinDGEncOQiIZBnutN%2BWU5gbkBTdv3HolK%2FC%2BF3bTydTd9arJobXH8%2FmA1i0sZ8RNoFsopIFTMHc74jG93GiMBanVwXENfD%2FD8FL2uu0X0PkS%2B9nrBjycI%2FN%2BYyjWgDlkuULG3&X-Amz-Signature=96ce4de55f2a77538a96fa863f1a863422ccc7457a8d16a4d35d188e1bd7ee78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YI3TPZR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA98Hpl5e2NdlXSENxl9syoy1lOp%2Fs7LwbGPLbrm4aYYAiAbwPm4cba%2F%2FP50k9m%2BTxb%2F0XQG%2FKSJJzlJTTzqfuGTRSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaOGae48ruQQ7H0dnKtwDp7XHuMRwnrBXVyzeostEh%2FspXnSOt7rpzCcJMYF0oVuH%2BcMpSjgQOf02bjS%2F7CLCaqs1qXdkomsHBImfy47Fq8WqOFYigXde869PyERfX0XcptXNYgkhTKuanqGOXO3Eutt8PAfGbUcsdSLHOoUADk07rOhnizEMs7DYQMF7k4qmSwp3dtrhTMFuTerAb8OgyyAiMQP1zT%2B42LARH7uw%2FGJY2iNeV%2FhZOKwUGwp5sWs3btS4FCHmr77ZLto6xknm9QxmY7mSIW2vXR5omVXGyfq9Qi%2Ffw%2B0YkDMxDQsvpUOq%2FdHUmuljL0fup94djicIE%2F6b0sdPMOFLFsKKbxf1lhfx%2BEocNviq16cWd9UIZGg5r5Af4uOheytazaoRTMpPRcjc3Wjum0q%2BX2RuLPIo894vjVvpUFs6KMABpvZKhVZA1fTU1BHQBbu0pZLCAji%2FCH3OebsUzxbiMvCDTM5ZelBeHKaEupuUsmwUg6yT2%2BWEz6j%2F91OL%2FVlLhFOq%2FujSycqP%2FCtykV2Bf6ey0CUX%2FzV2xMOEf4fEf0Vanmxgkj5z1is%2FmwUtARA26%2FGreFovdbI9WrsYFZbpu8vzQk6aEFUgKqTtk5xMZdDkd%2F0jxbdclMPfAc8%2BERPuqjUwp6bQyQY6pgGCkXDUQy1XA5jHVifYcN4EisdV6fusUOIWEAJPRmAQcV6NDEg4WFJIA90JHA261JNs8naJPs5xemYwB9tDKu126kmQqymBXmxiF12D1TvkACl1%2Fjxr%2BJ74ri0xQnyc8qLr0jFeUt9AAg5BXf0ZoiUIThvgz7OiAmBQdb%2FRTcFND5iHoXeTlL0ahtz7ekGkzg9Avg0b2XtGpicOn5iMzGBc4b8LzJrv&X-Amz-Signature=d5221903f00f47cae67e791fef6de371102564123cc91e748097d824b141862c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

