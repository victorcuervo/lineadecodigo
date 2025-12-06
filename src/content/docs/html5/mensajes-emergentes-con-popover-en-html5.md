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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WWSXZA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeZjLgeKacUSNNcGD01GsgvxIcbQkFAyzLPztsVPTnxAIgFE7xAp17f1I8IKU6CRCGcKb7%2BQNgivcIQL6lqkP4BYgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDITc5LTPtf7hgTzf%2BCrcA51h10BSmhCaElgEtukzNTHoFBAk%2BZxn36wAoO3nrCGCaMwCOKoU6pelRTd1Ho4Ps07ABC7ndKvx%2FQmFWd6XAK%2B9f1O0HHZTQlSKeXshueoLgxxCAPcxAibIYOId0JOzLbo5R8SEhvowaoSoZ295rPnP637t6a9a582fDfMEYRU%2BnRpw974GryzapmMTVqw1H%2Bo0wBaSQ5c7dda0zZiivfzC%2Bl%2BBo0YLYkqeUASJdFSp2NtOSPynMl%2B4AQQ3JRXH4BFfKWoyYkH3TJ07Pxty8wvAjLBYO24G%2FpaUipqr5sHJH6UHj4ReXR3OdDn65g53e6DsmKWmudteDVbyuoLAT%2BJpDqgQH%2F2p4CD0%2BPHdOEbiEJTB0penttxrpbP93xyZea91mCD%2FJMG9yRoq7dQgSA5J%2Fm602UuTWCybMBNoXbbhtOVVOx2WQXjVTRMNVSAOTu5ZjcQg%2Ff9UQ6h%2BmCcNv43HZyZKOr0A%2FnXHN4t6IT0VnCf3%2FAea9qkZCFxxIX1VitRZnOCDMZ2KiImRsOHAWlcMY4KvcYMnNy7mZ0sxDSWr5FOj20xf0jwBmIjDa8CiAoiWKEBkGFjCUZrNj5hbskXCRC9WIriyi86vT3DuVs3ozyVQ0AxoIfqIOURyMKGm0MkGOqUBnDtz3BUKLrtSfKsG6T53Icw4XfxVdH%2FviQlT2bdtWQI0W2j%2FGlc1ehMQ4Y48gFuyYOSI1PGfzsV%2BR%2FuNLocX1Ocl1ioGQEpW1XDNp3ab2U9wVR6gZBV%2FvrtbXM4MTTvfQPfeUjBL7rBSw6V%2F5ISTMVCRTWY7ju7ZX%2FjQI7YQQ1m6pxqfyFqwl7kkSYmG1HHjKvmaBtUew8JYOcmU4RRzqSi73deO&X-Amz-Signature=5bd673a5338b37324fac33f4271665c43f40e08c6032149a543d75c438bf214e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642NHMZLE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8WCqz9MTwT2zAeKR9w3bhHirs0XxXxqtHSs5QUgpJ4AIhAOsyGPchsH7loJhbYRAdz%2BKdGAo699ANX9tw5B6mGpSzKv8DCHUQABoMNjM3NDIzMTgzODA1IgyrWSxMlQcrB0e1mB4q3ANCXiFntmB%2F1Ia5LTssm3MOD0v%2B6PCXCxEkJGtMpqpPUq539XXkF1xOMyuEjNTDbKa2UnY%2F%2Bwdg6FVo%2FKFTVFW7nNi75iltX2AjRMgOklr4WqDkllqJJNoMcT1qBN%2Bwe%2Fe%2ByfGFN0%2Fdm3VpIMbeeOZMSGhOoU%2FldectgdaypzksRyI8TSeMDPY5aMf1yz8Tx%2FzyehoiIKQclPaD4pasX5BkIoP0Ebpb3V3r7PPcoz5sJhBwk3tg2DdrBDclgzjk1laewWJ3gjJV%2FdXXoa%2FCZBWN1nqwtRntcHfYawFwMM%2FpcoKlM2LQjH8JG%2B%2FDjKeGuqa7OOaW2sJGB%2B1jVr6y0AzsAb4yKDorh9bKZICLpqoqQbpSJ7h6WS7pWkDMqt4OeYSEakMYjkPK%2Ft0yPZmHtU5ltYrpVsDjTzFPfraDEjXeE4lyYP49mwUty3jaM4OLj6sPL1jByrvx2wyFZ8A7au%2FuFsU8Tm%2Bw0fvHaFQdpVsHVfmEBOzO7820Y7TAjbrvKY5Q1U2bQ1aGDmOM8NeFNFvDclfUUkjCEjSLJWVidH3to%2Bf64cAbJG0s3ZSqdTO5GOhuuyef9ojnc583hLvXzlY0QGz31MPWh9beEQ%2FuRa6Wu%2BVkQLJeAE%2Bq4fMuhTDMptDJBjqkAdZzInHgsJPBF%2Bkb5%2BvB%2F6MDg5g29lDn3Lc%2B4cAx8wA6WkQ6OJ9mQnBEo%2FxOb8aPDjdtMbBVW%2FGGPhy5KhvuCH8lxb%2F%2BBsQQAJRcAle6ouExw0PX4G5gyBEPycQAhpg1NpQYshRFoR5LtuZWv%2F4qQPqOUqDFhn01BIKrU%2Fj4WvpzPCKLEgLY1QyK9dbZNOPtRMKWkokhvMLcpWZVLVIe1XoMIzQL&X-Amz-Signature=222a0b3f79b4fa52456199b30a0b32d889d1330c8044179849c8c7fe90068583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

