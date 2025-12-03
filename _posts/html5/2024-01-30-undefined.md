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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTWB5HO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGY9kaHJ42Sv%2B1jKyTEB%2BRnbWTmB6bMYgjk5eReh0eSCAiEA8fCwjmLA3OJbLtIz6LuqL1agCimPtPu%2FlgNw88wTkMAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKfcnsOO0rnf2imkNSrcA0Iu1jeXETS5GM1KhDoUfpdbDRtErG0efZYojNnGcxtUBUnb189SKLuOQLEBAfAXqsYLay3C6X245n6iYXDxt5x11m2MCRYShRCv%2FU%2FNzA9G%2Be%2BNIiuX5d0VQ2VILKLkYKc5OATxjEi3J53UGHFYLfMViQKcWIl0PG6Phg5PkkMPpK3jDTgnebd2n68BF2KydUOBWCcFUu3WzQ2CNrcL5F%2BLpZ5RJqyKiKI4%2FUkBn%2BcWR%2BaV%2BLrYXdZ63uvUrrEv%2BkcZGf%2Bu2vNAug%2F9G3TD4Kb8TPNpEZI3%2BbDCqaz8zuenWXyqNzuDji82ximJRj2PFgOwp%2Bakf8Hd5tZ3sCXmYUHDUkqWd4TEkgbcv3%2FVc8G1y%2B%2Bc0tfNQWfLiF2aE560NE4T9w8WZNuavezIRuOnle1Ts71sY0BKtloYvfihbJ%2F9uT%2F7YieFjZSSxEWRmck3USdnLWTCsxA3HuyVIQ9A6W8mXAmtlSBC7jRsrIkmBMOOTSY83WIHLOWU334j4ayojDFYvXyw%2Fh0QmndsiuGvS2TjfvMSq4bqLWeZU5EHIl1yUSwwTmYU2wtMAI1TZcMg%2FvwN5n%2Fw%2FyYeTHkMjF1FdXIzmTdyuQGp8uxmclOHe74dinugAhApr5A59kSOMNbUv8kGOqUBjr9UDLWevaSCPzcWLqomXjvqK6ofQS3KB1uzX%2BiDSPkMAHrjPhe2ZPHkGxOO0YmS%2BPSOBcMmPAC%2Fib8ydnXRmNjC2IOVR3iPsFsBWkWGQf0EjpbFGHN8%2Bpt6lcpZTenFX%2BUfFOcxY8dHLPuqX2J3%2Be0oeSCpOK3571rpe%2FqpifDrOmxurJx1LkS32OffWEagoD685w4gQByu7urFMpszlOwOyXR9&X-Amz-Signature=b88c9b1f532b14c8135d310d95dd23069bba92b47299010964fe8b926c439bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VWRQD6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDtGhHbVO4Wgmz8Afdr0fQwT2nO5sL%2FnYdY%2FP1WG%2FANmwIhAOZK7te81A497GSOQSUIIDLsopG8NkT%2F0z%2BfKfNoOx0KKv8DCCkQABoMNjM3NDIzMTgzODA1IgySPv2prPQKxREssmcq3AM5EZw1%2BQMbqSopn%2FuYuckep7eDrUbpjmN3rSwd2rKa1bRwfqfzlY9c7prpEoVvGxnQR48s7U%2BZjpxzfkGq1V1L7h15%2FwgyT5tguDcqJqpjz8sFx3BsVDPg4XkH8X9pe2f%2FhOgrd10V2Jnx5fNyWeu1zqb3zjIXB9RL4dOZqUfp4L519ejeIg%2BRMTmzKw7wdmKOufMQ2XvZjPQh06swe70RNSilwuiSi5Z7bzmVjqoKQu%2FgMtO91Is3GQX48X%2BUZiifeBNUTNYa54EGwoO8S9FPXpXjG4q%2ByWM8sHwsZrWh6tSBfiUXAw1X%2BTLoQcNRII4rmarVugejFCFDEfF1ZhXue%2FodfEBf9wpkgvkhfeIuZIxRFNsPr0o5isCAuBKh%2Bw8qY4IwyUF%2FlHXEfSFCSVQU7JcevzRvQUZCac7t4jxPMOIn5t2b7%2BgWXqdW5hbaBe3sWduz6GDbHau%2BeJ0pRab%2FjNh3Gop2DiZyR8%2BTloxHDNG5fG3ToliPU7mZfxI2%2BBM6W6p213oRw6bFFvNp%2FF576zVqpmGnfQgCz9BtwUutRHdT3kuWXSdxdqMzevQgaF3tHzuOZK5Z02tZqiZGc9Guvpq1E9XUyP5ZUv89J6vYyQYn%2BcDQs1R8UqKAazCL1r%2FJBjqkAUd%2FBxT9xZ1pZS01%2BkhtNOmMWGPX4FRPqY0UWNSPV8Q2W06IRA5%2BPuyWB4LnY4SEkYLg9XHqqDQQ0lczYJg1LTNxd58oDPTLn91Bjx7xu0lE3wCIzZo%2B2QOOMisGzCLZW5Im4mw6fxWuf0Rtvvu%2FoneCL00I53ZMA714voBFiWbe8mBaxt%2BRVlmxrgNrd%2FDKIqECOGs6Lovs%2Bw3vhjeU%2Birn7pi8&X-Amz-Signature=aa0d8a19ec0e077b8c32c2c67c06c6a5de89478a350562907f5e3543d7ba1619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

