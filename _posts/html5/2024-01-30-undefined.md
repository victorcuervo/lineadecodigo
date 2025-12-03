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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRGT5CC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHu6WP4fh%2Brpv9%2F1UyMQL4qrI2HHbIIAsFIqFXJFnMskAiAYCMuaks70tY7KnT%2BBiMxbJ7mbD5NF68mLNUbX3ZAxqir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMO%2BthAqoZ1%2FCcx6OvKtwDo6TYhGffdo6215x6PhVtXaLOLmGorcZzut%2B90EbnfEC3AR%2BIO9FbihHjzybHeFbhy7pUYU%2F0JhQTDzFD4I77NhjNeztDPaCmuFFH09ICxaLkDs8ySsiCgtFCOfyO%2FoYDEam1QKnRiXCmbkoVmLqwnNpXQx23GQL2d7fAdGAS1T52PztmwTQJWtoarndvuLCe8%2BzJgjgGcEOEDlcwxHd4AgDdzNpR8y98zLIBsczSY8UctXg8%2BtohlkAljSFNwLt0LNdIIt4%2BRRSalcsfcUDlYBSh1ICRhiWPxxO8b6sJQSY%2FdZkctOmOGL60VriJlNfi%2FGwssLh7whrzvWOM8Zx0KIYdHsbAnFgSbBs7L0Flq9vcLMxF09v3OrRXibABDH%2F%2BVsWT%2BmYf6xPNpGg6fYZY02VMn8tVxYCcmuuW8%2BaBchc0qpgcNS9uiu99Y1125yzFhNM223GAnrFwPnTzUskDVRgQfvW%2FBIA%2FQeheFQcGDRIUaVk54W%2BT%2FYbvxU7ijdgnm%2B7NeGL1Q%2FkykCGr4%2FmYLdlFqMnWN28By6FX0jZa9XGIVxx8DAZlgXkKOErDydRhZR7dFZx%2BXHICTrNsV%2BVWoKy4TaKq70X0oVeHYYLPFeVSrS5EKrUlmxJfU40wt56%2ByQY6pgFcytX1zp9htX9y3U1uB6GeW%2FnMoGrM9%2FlOmbd%2FFOeCEqXAFo%2BzsMHmoklp90VwAleIMjLhR40v%2FN4cVmjL29tClyviFaNz6kB%2BzglnjI%2FynhVQWuQa9KYlJlNrAlmC70IsC0Se6oGXAlOb5V2TMp3OZBi%2FNFPSc8y50eFr0ajBV1R5%2FnhNnh5THTi5rCI3EWl%2BSkvFL%2FfyxRSSkTeBNQjXStsgT8BJ&X-Amz-Signature=e12a5ff438212b26c051c955705e744af1415543f394007f8bc40d7b56f1567d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYPZD3Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDNgglEiFd98ZUrFUOOHKEXXa%2Fs3r1Y2NhE7BcIPpW%2BvwIhAJgpUAsNL50gC2k9Zq%2BZYdVQ6Utdcbi1OE4jiBznBJR8Kv8DCCIQABoMNjM3NDIzMTgzODA1Igy3diIb6aFWsxwICHwq3AOYR8TlIlcX9eOvzz3YHlGK57Rl%2FMny%2BVPw4SbxnHlFiL%2BpdT7XfvTFRAevn%2FiZKcDfXC21hxsSJ1I3siXTjjO1y8f6woTFBBNZmdHXMQSFcXZkiOZJba3KkdInc8VMGaZdgo3MHOV6pt245clZwaMgzqO4jz7s2UbM43MUadCQ2bCa%2Fbe7rhlCSA2F1fK7aUkQCEOI5HrgksRSge9%2F8ad6HoE9trDZ9N8a0uqsWGcoYHS9e7Qcw%2Byv0ZHRC8%2BXp4RCjp3zNv7vJSjtXEF2vLNKTGo%2Bjq%2FN3s6GNRGNuFem%2BynQMYA6lHwy2AHwEY4Lq5oD7l%2FhP5xyegHENsHQOjZarEvh0vhCGqI9KgnpNyDgLjrf%2FjXAsBZ%2FqZy5KROMmt3KOarsQqJt5uc15bFlANAB%2FFzjtKuBhDlcrhj2ZuF0ZAIaSRbH0bpcK8yv89qIPyM5UO4fP6m7jP47n%2B4RcsDR8dl03ka6IsDFZcJFu%2BmSCCWwDRXi0%2BA04A1nIcT9Fyg73j5DcgPQ0ozobUQiT5UFM9dl9We%2BYElSvzIMUobiu2OlRG8PglsaogsuOoFuUbO3cWpwRQEokchapYN4M1w6Az6mYTeO7c3Kr%2FWcFqLIIm05Kx%2BcCYXXiqz0%2BTDUlL7JBjqkAci2TrjbfBD4IoK0Pjyo7Hz0e%2BMNNOMXuam5oxVeF6z4e6ygbUsHIi%2FGtdYmjppnrqT77Vc1%2Bq38kiC5EglSxf1fVCWjCCbTiTZyLsIXH7z%2BZWcAH8Vsur5fqYP5GQN1s0ScE0FtMiZz3xDZgB15R30sj5aGaFnSeEJEv6PibRS8MqloJjFyKWxLinFOGTct4DRu4BTFN3kt2l6vmFSmD0%2BZXTQW&X-Amz-Signature=b3b554a1c6e61027c354d0c1389c7aea8ec1f3a6506d5183f6bc0f9bc199e472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

