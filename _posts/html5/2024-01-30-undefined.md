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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTRXM53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCOJQ4fFOY9F4UTBxalC3MXxNvDk8RuulkYWrhc9ePsAAIgMCHOUOqrJ%2BY7r%2FyjqSglFRnTIra%2BMxuuy2ZVZqE5FuUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHrMIPgWBcDJGj6cHCrcAwIBumw%2B2CAcI2Pow9gpAycxCyux4RT2kn%2BZuKVNC6Vo5deiAinCpa4u7RqqYUKIh4EWvaMEh7KLplPdWnoeCno6w6TVwB7Om3mciH3jeKxSruwLPULVXIUwkpGy9adiRIXQUziBvHbeh862E5hI99bFzuOQB6eXDhRsMZkHYyEe%2FJ2LhdYn%2F3iFQ6FTRjA%2FOA31MmdDr4Hvtl0kvN2Uf2D35TkoIDRTnDLhrlSmZ7lWCDJClKCV5CpPLf7svihFDbW%2B%2B%2BwDSyuV%2Fg9DMyYqQZbKzEEM%2FvliVoFnaIvGUGLgfabQyKlNivvWxnqJQ6mY7ldpTz8Rl1rpYQikGRz7GVZt%2FSOJvcX04h8m0TZfGtHHKaHoR4zk1nbzINlWOHGbB1e2gZLRPgA5r18WKetSimfyHcfVTFVgd9%2FTZ7I0aW4vizDewsVOHadS%2FPnDPGw10VxqE9N6AEdvLM0MPj4%2B3ZOQf%2BjzbSFeiv0%2BorAIzsX2Iud7u8tYNx5%2FjAn0%2BNM%2BjLKWT3435bcz7fb0JWkku33W32Hzwswg58ky0%2FEIZfn4ACSBdmrVgGmfH2zsgBWCxDm1kJv76cd%2F6d3QKFcHiv48Kkv9Jx0tE1IcXHKsK%2FAWwDs%2BYVukZJDo9YyAMM%2F%2BvckGOqUBjX%2BtGVc398mGux7MEwnmR%2Fo9xd1Cch0BGaykMOOeeS82tSQ2YFS4N6pPiIMCfc001FKnuDvjnkwhMNTjFaxk%2FG62btWiF9JZRIu8yyJqMsHUqa4jKgcxbe9p9Opg1ZqW4IE5j01V1zJsp5sSLvTheCH0ngxJgHt10HjnElr5LK5Akxyw1vHNsnu2gKLo8iHjhoibWqSg%2FANMK6RAlLa4wypxiYwX&X-Amz-Signature=dbc47f93c43b06a24cb1c146a6c5cdaf6b77366b434b7d5d553d90964a63e537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4ZSRT5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGqzso%2BU7e5WQT3X88g5k6cBOt3ek4i7HwYdDd9406cUAiA5LNVatpdsAJhozYkL%2FrXZrcLlOORL2vzEkWsJbcCt6Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMyEwL%2F6U7LKEciu7AKtwDce%2FINhlAz760oBu7VSp8bYTJ0Fx6TYFLPn4816CIt%2FcB0n3ePkRHAkO0IyP659At7PKPaCTAWvzoPdpPzBDgtBuISK7mCr6zynD2u4yQk%2B%2ByZDF7lsBItg8y4Et4%2BFuUrpY%2B54%2FwRejAOW6H0zxygucuTJ%2BlUZESWLOk3SACoXj353ivut5Fo2gLg%2BTKBde03g0o7Qvtg5%2BS%2BfKanc4cFhnJ72taoZaTX0yFY2cjen0Oa%2B2g%2BPLZA2EYjj05e8NAcbrdvofTGr%2Bs8qHP0B8CcjpErUUgVECKqESJzIBZR0qt6TNryyHeKDYoziZ%2Fi1aGXJVxOXAwi0lIq3W5vPq0uh1qlqxYm02pZBwkiDyLscFGIZlMIv08vTjskW8Ml%2F2N4Jwg9JFQkHg0gT99ESaMwV4mng638w%2B8vQQvvI7bso2DxPFyIEOe%2F1doeu%2FEw%2FWbT45541oS49c3e0YzjA%2BucqVshahgYNubtdi6YO3LJneqIS04EsfR3%2BCWhwftJPXQZjjuUgGjeWg36wE%2BB3lL%2B5Oust6GE5aS35glVdXYyDpbUD5JzL%2FCa88vOqXAq8luc4movIuDo37Z%2B1l1jF0hQyXrc9Avbzn1GHVDamox4%2FjP9j7PEoM%2FH%2FjxhmUwkv%2B9yQY6pgHwwrevwd%2Bm4Jube86TwAS1LcBFdSQJJ7fFIFjN%2F3awyO5l5kbfZNwHVbYRczhUeWyVPVeMGpFpMYxhAm2AdSmO2FFjivcUh%2FVTqOumSj9nQbbm0w2gf0W9%2BUTGzyyjI4KDKfk%2FDzXu5hpaAY2h4v5VVTxfCIVXpt%2Fi7ZToJn2WE81vQ%2F8k490V9ls2tcb0qtwhM0xJv1P9FIvGj0SJy6TEZoeup49f&X-Amz-Signature=e15f268821778ad0b1fd3db8099490ca31e7a922739f443b36f103c3384a2abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

