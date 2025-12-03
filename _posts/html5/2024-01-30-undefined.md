---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMA7DDV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC78SYwdIYwsVV15%2BdPnF1e4D6qYOh5Am1sNIWguX0EpwIhAO6pAE0%2B4VcRGWYo0lcT%2FwujBsW5bTR8xgB0kQ3jg9vSKv8DCCIQABoMNjM3NDIzMTgzODA1Igw5h0HeEk7W%2F3YJm4sq3AOYkgaTBIuPhCuZ7UlU9nS%2FprbeReXoPWkkkFJxtTfahlvLeVGA5DxKSNK8NPVHZyzBE6NtMu02qIPjG0ydxYxbRhVcFL20yoZje6E1t%2FHazkoqfCKcRV6e6nsCzSSET1wQRUNInYGcLzl5h2Xm0e7Borx6XBdMxP6DFCIvWqGYYSccKQUirdXLgcx0mOzwBjxtTNqD6TgxI8PEVlzJ1GPq8Kg76Zm4Qg4CjTKuF8QH4yzWJ3ao2NL8dk36tOFTCAYTXBSKK3KmMFiC9joKqOtRM7M4jlMc1Pot8NZrvZABUMT%2BXojCZfGhd8EgXH4x3PgqxFTJqGVoARa3OLFaWqGRGAXV23Jk5tA3%2FCiclVkW3tJhiW5kmAyFxkiZjNvIFet0VdENA3FCTd5gM6NkMxCQYPrIGEhv44rwUg%2FhlpwtujcHLrDpNog7qicUkuJ32yDtRfyXxXDpe37lru3jllXFbKLcM1LyVHQYVfpMndFHIOM9f0%2BBDkNqMSKcNXDHloShItGJDWrMD7Ayi9SlHVdAXBjjXX2Znv8Q5EsRrOKwIoQ8oCOwSXq00qLfQwesLT7vGxDmNDv%2FqJ3B5ryUfEiHbLmlH8%2BphWukcLw%2F53DHiiKiAtOyPPblgH62WzDAlr7JBjqkAeKgo8ZVneYIT6l3y5tkqwbowEIGsmAc7NTwNTMY3vpo%2B6oVSnMSTkUQXVfHedw%2Bf9D%2BqH6Un1qh%2FGfH%2BTvsubutr%2BQGnNXkAX5zAO2pqco54gxWxml99Zo3FJ70djKclQCqTyeUbVTgxmqfdL8tmPRy9QsGC1MNq26ik8m5gOp%2BHx6uQrS3VS61Gk8vofSaWN%2F%2FJruMtpKhSE1h11YgZhlGcCYU&X-Amz-Signature=9829a5727053379936b2d09a8de2f059a53e3e3f2a8e48bcb90be53c8cfaf6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL3AIPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD37PmqbAyUAmvxIz%2FlHUy2ixMMq4jQBxz56sIsCqxamQIhAKFLqt%2BPlbo%2Fee2PxNU7I5Y1FCesldDCpPvQFxlxlVGlKv8DCCIQABoMNjM3NDIzMTgzODA1IgyGlf5kuyjkGQrbzIgq3APdExUWmurWu0%2BwL%2B69DdskFr%2BAXQT623P0QaIO0uIoLcXIjE%2BiOUHGxRUi6kr6jxmmUBpFr8PJ%2BhALg3Vupw3iWe9rz4GkekmlIhmQt3zbVbMBjYn49IyhViVSiXnPSDqhjQ44vsLqILH%2FKHV4dbMvfD16xonHYj7yw%2F0LkISFyH0%2B2hKMGY%2BB77Agw0ngsR%2F4hy0gSyf1%2BYSKzCIn0%2FxaG76Xi9%2FcfvGrEJJntEHX0D%2F0p8HELjCs05NK4kCuPvH0nOmvA5JYuOWbmZW1hHU8ufiduaXtlO9qsSXQu9Se0n446BI9taUuzmW1UhVaUJVYYEDjMl782aVhCQ8HUazPQkeuZFNXFU9JUV1MQhbHMdnx514f6a8yNEXbpJjunxElPzB6Q%2BN7V1Vt4yCkOApIqMVh%2FngDbx73OJCpra0VcDbFLfRUdrC5UritsC48WgRV7PFiBUrDdV8aENQiMOxuFqL28z4amcwtdB9T94WO0C751mEUNQYm5xF5erFc1Zzllm7TLXEr%2FRuNB99YUI3nMXNusUrCQ4pxhcu9sAi%2B%2FyCx9lGSQetlCOfji3IsEEsYyYDV4tV4sj%2FE%2BlwzDrbMn%2Fw1iuSI8QymCO7CgoKPxwMQlRoM9winKV1DmzDFlL7JBjqkAcXwvyoduJEGsiNlMmBgiP4VbH6BTdHDoht4Y0oYHoi1dQHlLjhQSQ7C9DATeACVEDdcbXE0BRNxK1wnF2wILpGdivt%2BPkIiXepqkARAoUgjCqStkhRjlUr61V9xjuyzqL%2BWing0LOq5%2BC5yt61PHsO%2FlTOIgPF0Gd2JQIrYoBE%2BOeMvqJTjyy9bLRlHnqh4zfBK%2BYsSSg3m0BDeCRwOnyXqLQNX&X-Amz-Signature=b147e0a9ac8ee4ead15a881019649cc8be5cd6e61787ea659cd06dc1a9e8464d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

