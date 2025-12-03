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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZREYGN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBigMu7gcJtz3OH3PNnvIOfO3JyIl1KZz8R5oPUnp8D9AiEApCpLxjWUXrx0bSJtyqyY0PBw0sQFnEPyEqOMHzhFU6Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHWm7V1N%2Bjqmj8bAYircA9%2FCGWDcVdVI9sJJsFQ1mv29%2Fl%2F7mmBKU32eXrbNaVV99Q%2BCBCOZOy8z81SDk6ZnNeubP25Y1%2BzybgBdgI9jSFB02k7I%2Fzrh0Q0mTO3smnkLwJqWIZozg8yhCXanKVRs35xW8aONTKxNuId%2BmPLcPJIlx90VTUvpeybvHBhVOkj6NyVf0YcpHvzIyDBNOvaxNK%2BeHS1Mgg1XwS2QmFrNvg5%2FjG5xZN13c1RQo96dnBTiIy1X%2BiPzwNNiM3ZDs6P%2BVw9P8eFfRVaHWWVoHM78LPP3acy8Lj9%2B0%2BTyYAvbK8tPQw7KwEaeyuOFGtAlJ6xx94HqfMYXaXNf9NaMjDBP%2BEjD2de8BF%2BGArOLSmz9EQPvcgRAkZRiKDFvV0%2FY7k7%2BNwTvWYsJB5BwsDqI%2Be7FLVTMbjvj9fisk5jlNQGnyon9iYG9vkNJCNvPgz%2B4yh85qBEiy%2FHeWWm243tsa58qTJE2%2Btq231N8WmSYvNVVu2MiKnfLi1HvhPTDedF58ZyqKqIyQ5SI9cEcPhdMl3bTBf6XYfM1KPxotu3a8xPsh0HykKyNpSSnjPm06AKSzvrvKoCDnjzpxSGevmVVU7jn4QRfBTZ3DjeIrz7rb7o%2BdBO%2BjSIS6BmBRuDOKsaTMJWIwckGOqUBGGqy1IsRbasjKIB8gZSq9vR8SeqLyO%2BkFiwv%2FrulRBSefzWoxNjD%2BF7N0%2BNNBKAN5VaBUiU7wC2evrHggh0Zbt0J02L1PYyytShr2jRw%2FUVZJ1mBvt9mAKdQjkiMrCEHkNZ04x8Gn6o3uZ1uMod0PA871H8GvslBI3w7GAw7OZfuaXJnGN180%2FqxahM6rNtqeCAm%2F3oOf%2BomhQzYg3i7Mn4VEOBc&X-Amz-Signature=8ed6de1a4a427b1987632dc4bb50f6227b8382854d6089f441d0d3e6767fbdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DB2R6XC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHp34preriZS%2BjVr4S1yOokB8ssG3Cju8BYpGVOKem18AiEA2sTmmEbyzQFR6dFBYh4kUOabo9%2BvE6jIIYG1gMh7YHIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLW%2FNN63fQnyJMZnuSrcA9nIxPOpDs%2FfNT2VUSPhKBpEiEsW9Ngz9t2%2Fe2VfrnP3%2BRBO%2B3%2FZ3lF1RdY9J15vmEPU78sjNwR7uOmA%2FN6kzqsX%2B5rzpc4qeRYgY5d5Ue7t6QIrUoKeQYELBwelWYGkf1uqKzqz2opWst8IcM3zVRlyEoyB%2B7mUpF8vC52FtmsjHQinQehqixkLA81vmuDwfK%2B0FtOO8DOmSfx43EfBeIVITUHQbvWUo1W4qbyXAk3VfuyhT37tBNgVoGM0Xb%2FNyQypkAFPyWypyXPCvnl1S6ppp8W%2BNq9xujzkDDgc2NZRtsqHEO9XrgIplLToFGtxI2j2XLgoZ19CVUoxWHAlRXKFhBqKe16Lnacsjp2lxAMOd6LhR0BJqSwq1fnSIPmdaW26OUEOBBLlNZju0JeproG7ZGObkDYI4r7IR6JRwzFang2Qw1e7BYjDkHuGFdJK4OyRkQ5XZT9djStGPFKSRYJniTqpOwPdr8Kd%2Bv0B39gTvW7CadScYPS%2FDzGVGRBqSTGrW9DBRu0%2Bkn3dppfMHAjWXuToPZqlctX%2Fnjda1TY7bjXVicFqhct22p756JeiMdDu53UabucBqaE5Rvr50qBxYmFJ%2F9vqgBZiiDZrf51fE3KO0iR5vpo4kXe6MNSIwckGOqUB4nAIDInPmCnlLhKTwhRZEFCFfQF5qgxwah9k3QNG73htdKvPi94UZ0zpcyM8PqI7UOhiUlEOH9M%2BIl0aWg80IMgqkPfaRbZ7g1hpPf37ZTyglMsyoZL5C69Fqz3YtB7xMj8lP3TeXvow%2BbZYl9%2FumdBDLEarkVt9nHROzmSiAW4i8GROCHXTfIz7GcjfkJOpA0HoSGsMIDOg2zjwFnWoDDWeL04Z&X-Amz-Signature=234e4c3244bcd5a3f0854ad885453bdde8537fb3b0ad4768dcfef88b8576f11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

