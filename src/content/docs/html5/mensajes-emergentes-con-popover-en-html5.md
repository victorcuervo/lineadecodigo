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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3AXYLX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHav5QY1Gi56GoL5AXA0NhYkFts8bGQGgXZCsLzeMkxoAiEAyxm0hMnziqQ1AYJMr9XLXYf0dtc54UDWncvuT88mufMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHR0R9tGrURFcFimCSrcAxquhbEPFAIJXsqSGdTidZoVAK19nPUFCITuaF%2FIghVFfNgfYo4UwPt8t6jx0VG1SdXuYJNo0H4iJ0Bj1MjSaaZ8zYKJ1TdtnwBPM1qi7Vy3rxh3Qq3E4TwrAz9LSUcSVfkHvhZxP5TPo9gywgYtGk43fuszz8yCbX%2Fy2dxpbOiTm38fNl8i6emxlBagNJgDpLNK8kY05qB8M42FACNW85pArNTmqNLG0k5Vq91OwdYqwS8LRp3w69dxaruLct2LS1TuHP6lyBMV9c2FCFAgHdvznxff8hcj3Iw%2BrFPqlii14pxhsQL8hVQ3gzVZ%2Fm%2B9c0XsmXIUSNEmSwUZeJYiuP2dG2BCp51efutR5sg3u1AIQmvKki7MX7cXb2BPL6RPCtKfd5Pg8ECa4lohVSBxBWqI6%2Fbf1BB35OAQou0AOjOOl2vI7Fq543XQ2L0KFcxznlJv9nWtwFTWPd65r2X%2FiVL4jVP2%2BJ3I5a8X0t4ZcDptin23AHezmtzY%2BupqXb41SzNaEL8WyLOX5DPZGPcxnv8Dy8p2%2F%2F855iANe8frUIcadSCAeSNVOtR2mn9AO12q2q%2BUdPO8BcmV6R2VpvFZiI%2BCgjJOiTSHZWFHEsEJaqYfbOKc3HETYh66e4h4MIfQyskGOqUB45Cw1mkb4TG6IxCvysochelFr8ZD7yDMWWx6DN0rGkOXkL9d67Rb%2BY11auE5zl6Q31b6oJnO8nTLExYtgSpqppzkSxfyFCYv1WleQpebym8%2BMRDDGyMXIcTQstizoKDqbB%2B1QJBW5%2B79onhTz7dvTSsWtlMlAewN%2FvARNdMIyuhzTr0cf8qMu2Q2Zz1fJ%2B6JQ8%2BgV8NiJv8S4Kt3YcKok2x0nmuf&X-Amz-Signature=e65b4e6e7b1d7bbc0a0cdab382863f642785d82d2a204aa1a66152a0318d0950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YL5E7I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrVrVHaHU7y3qEESiw%2B%2F4GbvGNyxJi9WfUnGXZMYkCSgIgDWe5Vc20PXndbhtsCfmb7%2BHpygZrccc8GT2gKH%2F4uAEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJMF1160LplWfNYW4ircAxQzUEOBPNMK2gzT3i8s0uqDTVc5MMIzNSPfSRq%2BoE1h0DuW7dhRPe8pg5OtHyhGVpwK%2BCkLNeoGD2n5ZkC9A0DK89nw1gjHxPQIiQK1zbEd9KtcALvc5QKIRoDCLi7EERZJQKNvmGIgInEBDlKJpkPlPzU006wlOvYrN3lof8N%2BHZGeEfviF29AeYmgA1ogj7aaCn7xWRwnOjDusv9ySsvKcWHH%2BkIvhOoXV%2BBM68W8yCTHXlgqPJMrTCvaiFf7V3jXZEMMOts8hz9Y%2BkwDCUiD2GQiEUuVg4sBJuIo8TrbD1jTAHTy8ghk3SKH44jUGtdbujIQ4fxFYwrm%2FsvXzDxrCABZi43hmGga9YB2LAw%2FWCUgiMYenZS%2BoytqvybQdbzGy6QFTUD76UlwSfoZtXY4E1GZxdcL%2F%2FU9bv6TSYUyRXAcW8aY72kkzEXWWjcZVW7x1dgph2LYoejEW8YWeoW3QrGj79GwAN%2F%2BWbdrQsmoXHWSt1e%2FTYkfZKqiAwgYfWQx1vetdOtI1qmAbJUmud%2BGpof%2ByVcaary1d7zQdFCvRM9Pen0MIQj96R7AQAbzYSj6mKKKL8sEC2O1l6z%2BAM1uYk1S7848aJrpfRLiD65%2BaODOmRu4zyOZ%2B1s7MMDVyskGOqUBAfZ5V3Cv099sLkpLeDOUlW3xR%2FW13QoP3tQY6QmBewaH8lQgjgjOoDKbWbFGy87G%2BVQLZbF%2BhbF0g4zkZuA8Pek9tN3ibwNvI7yb0MKlTYvdb0LNnvUlwjm%2F0pyKFv4BbrzWNa%2BiOKLPS86mULa7Yrc989PaT%2BzdwnBQxrGVLW9H5e1PJ50jjclPU7NYH%2FT%2Fid%2FO1hbGoIh%2FTWqz6U4ei5dZSUSg&X-Amz-Signature=9b950130f89cdc37e85ccf733ff783c2849564e21642ec968701d999e865b29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

