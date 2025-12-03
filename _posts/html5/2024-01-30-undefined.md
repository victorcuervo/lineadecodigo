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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5ANM2D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBKlJRV9Ti1hl4%2Fs3%2Bxwvmp4cBy1vHv%2BBRKUeNqkLTbfAiEA9d%2BiIPPFYYNqM9s3p9r12%2FTLkdNz6WAvahssMIzTrlcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF9HQoAvalWsIqRfPircA0OQHNkaGWS%2FLRm2qfep2pPh2kIzk%2BdlgDSoxGGMauXx167WrC5PHilkdJO36cNvZJ879PDx3zeKNpSdLcNRUsycA0ogsqTK66dVP%2Fq80bLxjUN8pCyblue%2Ft6%2Fz2%2B22J08U5iY2oyog3mKX5iEHez6GolHl52es1IMpHGkQcFkK0NQJGLGfP8VTcznfid0ggbD9zUzO2wPZ1WGIv48bFzla1%2F1AsMXfoVYGlH7VZUXMdj%2F%2FEZx4OZAW9FzVqaY2VaUsnUT1owL1KtyJoROziBqTwLFXwT8mPtgi5sCYbvu9yefv%2BY7Av6%2B4LWiMAPpLsu2xYxa4qaMZLkYKfJNrd%2BrxpadBAAOgDh%2FOmV4mOZsGOLkN8gAKjNYJiq0KnM3fsvh8jn5Hw2ybqrJoLut1%2BCLmpMsNNukciz%2Brh44biYaNd8kgdn%2B%2FSYSbDyjIf3KjmBQ4uKrhPh9CQZWd7H98yfRMqqa2Z0TmgdU8YwRpEVUO8EhrF%2FBcQKRFNXHLOEbgsaRddCo2cwiqciB3fYTiYvFzQVziiTEyL30x6KC6hEZT7JUryPmh6%2FqCdC4shBiLgpHzOoVXHbYoK3iSMjjP4w%2BzxNOfa6sc4V4XTMaFLXtMTlxt3AzSxXjP6G%2BYMOHUv8kGOqUBE%2Bd%2Fh8tbW6avj%2FLCe0V1%2Fhep8HKQ1rfrel07f7ibQC1UOtV07pJs6e1HKP319UpnP%2F4EwhZfwjYuFgNzMIEjVkJ8jIoK47H%2BefxXcmLuoxIIHBgvCUFm70u6bdJ6IrIlGKIkJikC0Le%2FbkVluiyrVgny%2BESWE%2BTRBQDKV7QN6TuKvRDEdQ%2BUFdFnZvybUOTj7Z05Js0Z8D2XltAi2hRIrEn2IKd%2B&X-Amz-Signature=f80d8039707376f8356f8616de46a6062a89a92b4950b922bb627ad3057d2f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKJ7ED6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDLMmxOjmu%2FguHMqPRcPvtaGn%2FWB1eVlVyNZEyvtJTwgQIhAP1fE5q43zV9yXS7BWVj2gPUXJGcwyeyld9jQXERBDBaKv8DCCkQABoMNjM3NDIzMTgzODA1Igx%2BvbIJw3mkPlRqM9sq3APwwY3yzFG0MYGzTjmdqRF13VInAYf1kqK9eUYM8ckXTbdSoc4Gql9DZf0ETBXDJaW7IJa5apr927A72u96LmDtQx7t37v99d79qE%2F8D%2B0FjFD2VdIF443wJQtJvP0Qb9p9GP0bw3YgA8QQrIpjp10Pnd2BKMPafQxY0lHRR5EXhqYiSTpdJ7hVuGexN%2FTKenilpVGDu%2BucjyyQ%2FxZ0ZX20hEBm4z8ZJLbMEZ%2BBgmrNEaHZny4GQ1l1UUdoAVlLz3obvdN1g5juDoEoCaIWSIjjU4Ur8LCaC9JO03uLbo7wIr4CR5rQjVjuw%2F1xCOZV9Nywnkio7aWv8bandDfg%2FaYpaGzpMQo92vLmoK%2BCyKHATE%2BYwYujrKfQ5czQBoi96isNHsXDzjwr8H%2F7kuboqKGQhLc3nV0SOosUEuqZde2ZEwzJyKc79KLwjM49O%2BaM81DPuvRXokX6cGXkA%2BE9xjlt0Kosf1dtD0UOqWwzD3X63JYpkISg4y5RjjJN6GDYF9BJfNJRVc8zErsfLokfllnI3wuzvtcLwe%2Fjnoh89sjKwJyoYd0kQnydkYlP0sSXch%2FM%2Fx%2FxsQQS2CwFE2lesp5pfTiNUl8iKZbA7d5cl1m8BF%2FmfF6AAwYRq4%2FHBzDW1L%2FJBjqkARbiulfSno3oEjMgV6ajUZl625QqYTg1SzPJnUulEPoP1s5vyZ3tyYn22oYtwM%2B3mjj7EMbQ3o54HmDTRppmvze0v1oQxqp%2BENe3ZnMutPEeeYxU133q%2BStjgqUgYnTYh9eI6TrF5vAUQD0qFpfSKfUAYdzRYIE926KcLLMkGV8Xdky%2FH3xWqbABFER6kHAJtasBI4ToercVwwISachPhmp75tGc&X-Amz-Signature=53a9a326314da3523e2875a297cebd4641b28e673d5ca929a147e344f295dc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

