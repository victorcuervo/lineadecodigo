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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UYULPL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8BUCqZJbub5lBuUdqvaNkcNF2WlvzrYkf5UYBhuaqggIgHREy3GpGroxCG8QhQe9iVai3q75ka4haBDGKJEODQDEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1b2gbMeBGlE2wWUircA6WxFZ16ovTR7Vh0KxWCUmvJx0yLffHVs2DuwDTPkhImWE%2BuO%2Fhq2UUCXgHksz8v9z7TWGcHY1SkUzOd20X6sX4nueWLm1U1VEosEPqq%2BxUV2XdtbvZtm31IOk2CnZxCBfj01rLfB4hgkNJd3P%2FUgLSReOgishEkOEOC4CvI0DTDUU8RHNO1LICh6BWHZwIkUbbe55DRfK2X1B7JDrEla8Rnl8q5JlRYwvtxxMOb3%2B3nemWJ5F%2FtlzvPJyy0KCNnFo90umjn8x%2BdxPeePhlgY%2F9S81RuQHRL%2BNVt1EiXnVWE4rRmcjTc6jHywI29JTBoA7CnJiUpfMak%2BqJ3xPQvrL%2Fc1Ua35p0CGECI6Hq2IuqXrEuooPsDdNJkT%2FUpLfds%2BthLqd6dkL2dQUzUTOz1gM3k4DcwkULkJxEF8PGNoSTdEWIHhF7GOXx%2BuNfW0DVUZpGTmuynDpF4By%2FzLc1mUjr%2F8E2nsVegjovX7LScE3czlKfM95hTsbP2xSXHEDrbYHw7pzTwoN89DKQBhxom6YjXlcoJTbgByht6y97In%2FePJXG93IfB0OSF6%2FTw%2BFRm6Eust0YbQPPInCFv6kfV%2BgKutIfb6%2BGrIG%2BX5GDUfwR%2FLdbDU72SsBgbh76NMPLp3ckGOqUBuoCZNr8bA20jcLAv93E5GrQWE3PbBliMo7b3SUd8EHtuXs8oYDUOxYTLsFJN%2B7RCI81AV%2F1LvwODdAZAYnJdCDFOiIXwbPlNt7Vjj%2Fqt5ZYEKCjVoWUHlw8qoPQ%2B%2BF2y%2F0uDv7JE%2FMzMYFJXKutKx2%2B2hyYchE81iBsWn9t9JtGk9OURu2BnpGYHVZ9qATNb1lHcwVPSkaZ%2F0SZ2%2FIYrc%2FFXyAm5&X-Amz-Signature=c752e1717bfe7760485679b43dda4fd25228017ffed61f2e3e7030a9f69c5549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDRTTJ5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaEsAMb4YyJqIHnSPUiTQUN8uy2qzmdOGGoRokVCcBgIhAL5L9R1WTcSzZeBaXahTp3M9OcA0WNl0HQkAvNG669wzKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQKdfqeCJz7q0fYgUq3ANUrKfDnR5XD0%2Fc5l1trqnBWkDRWx85hdAW1zJLgG2YApb%2FhpKX4KuoapOpXEM4kMVHymnXGlU8kKQFg3Z1nY2yNHa33HyYQFoZgiOPJL%2F67HNmVK%2FTY4u4aLsC4st%2BT%2B72XYqDdGNkUapZZaqHDwlYe1YecdbIJJ1QaDOMo3E3OGqMMbkftnXBaneiIH8WFHxCBenU%2Fwq7m9Wh%2BJXU7VItkAeo231jlkghniyHDEmr7DA34b3iV165FixlEUvpzklUEIJ6Th0fbmSSSpLa%2Fr7R9nWB1bkpl%2BuV1zXwSea1%2BS8g6IdI4jVLgGTYU%2BMwgmx2dwV1mquXTi4aooReOwcy7GSvDzcZ4hCws3cl7TWdpW9VfatzBRbpWHSNQGP47sM%2BQQ2OdOFBOmzC6Rjs%2FTbNSgI9RGwZC8LK7%2F2943fILAykv81Pbj7RV7gPGdwsYRswhjIyN2DCd58h6QA6FJSKLoovobqVFd2%2Fq1L8P75ZpsEQM%2BS8pSI03tgzUslZDhzKe4NrHsTtXlWRm6Zmdu%2BAyPIdJPjlL5DvrDzoDxeo3mJbMKuThTmiw39a26ixDtjt6Gif9jjQ%2BC113IlYPi9us6E67kqOh%2FyHC0ueeg8hzWguSUV%2BwQiZ%2FIThsDCo6d3JBjqkAbcHiHj7JHKQvANpzF6sXgYm5SfcYOiRF4apfNJhuPEEX%2BcapGr4vjrbwGLgHSMo0KREnjX1zsQSA5MQB9oj5ZtOPtzBKHGIvgHCkmTlMZLTM%2BivY9R5AXEKEH9QVi8gSKP7TLie57%2F0QfyEz9gRZhYTVOuduP8Huz1qRNF4MD2HkvuPCFR7uUC54ctmeezTkGP2brUgqzTmgLUg06AMdxKNKHI7&X-Amz-Signature=369fb82a15ce41711208e83c01100369ea3e5c01fbc166a12c97d757d9b5b73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

