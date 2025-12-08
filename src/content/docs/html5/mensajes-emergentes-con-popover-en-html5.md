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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2FUBDY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOYYtQKU1us%2BJWSK%2BzpYPzA9sf%2BESRh5mFOXyiwUHuqQIhANDh%2BwY3eJuTuKibYStGx1u6f5lW4z002FfUI%2F%2BhqC5UKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJAduUpysk9QEHtOkq3ANc22R9%2FDwjW8jXiidgz08QCJGn97RNKnPy0mdMkGcCIZ00OBq9UW17J0w3VoQkTo6nUyOb%2BIJXm2Q8rJEQD9Q0BDk0Fd8DI6STxkpbTPJRXxIpmasNaLXacrRbPVySfPHIETi6BFyzBprqJhBOk2O2O%2FJhDKe3WgaSipv%2B5wKEDfrpQ5khFG7wbDhurLUxo4w95iSIhQ79atO5saZUoj51v6S%2BAJ%2FKSVENp1ZtgO9G%2Bh8Mpx4O4NnKQ0w6r2CxiwJQMKonCOopV3s%2B%2BGT77hvc2hAmm6t5Qw0y8Z1vtwnDaMhVyxJ5lSEaqKLYHseN86iC9iC6RQtI2MYfXUHFtXXUiag0sXpUdHcjnLDa0AE%2BW75F%2Ba5icM5WY2RUl4PYglqExRwstsgr625kcdE6loKC50sGMR7nGQNho8vGIY2%2FHTzXaw6K0Xn5CWHc9CkG8Zm0cRu6JePFx6ZkPopX0P2jrJF6MoqlnJ5Nap9E6GVI%2FLilGMiemlhm6JnXP2%2Fcl%2FHP5kLFk%2Bu5SrH73QLQzhr5H7CcJO6zLHejwAV59pN6LVbqfWC%2F4IBaMs8EI8%2BiBCV8J2edg1ZAI0mZNqC6bvu7vsV1vr%2B26spVFOX%2FGdx3Cv8HfCAneBOazfh0fTD%2Bz9nJBjqkAYTSeAxH%2FW0O6YOwqcuIqpnipnSp%2F8IwuFSKV%2BI4jWNtXOPLpVYnFy0dfQk8sITI%2FurreSi2zQCLEoBZlDBo7Z3riS6pnQGmOu7pHXAcBK2GwaNhH0aftc7u%2Fp50plmADCvRhfb20SRG2t2anU4ak0Fc909JkLXW6856%2B1w6Es6q1ChZYsoDGiECVhnlBEUCaZBNFlefD6Pk86s%2BqVoTvbjPnagv&X-Amz-Signature=eeb9fb64e492f49c92be918e56b0e504ee42b0da359fefc951614fe6535a1035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNIEBNR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZL8sP%2B62%2BtMfJqGm%2B14%2FgQpwCcEzuL0kiqtRJ5KCnWAiBemFntxONwTAuLnJR4iJv9lJEkoikchy%2FBs6mK81blDiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHhfdNuPIspRkObBKtwDRHyrBWMI0HuA7XwXLxylNF42MIQPu6VLUYVfNgTA38PPkvpx2HG%2FwfAk6Y1ZSMOJW9LReRRB9CO10%2Fz4RtVU8a1bgY4QUXyMcoNOz8lukPZXKqlZTVDzFU7qfNFnBAi9fr8XLfrYM2re3jyfIZA4ZAn9Hz4b8jEH4xmhl5S%2BADd1OuhytPhvN0jM5mvarbJ2MR7ABphnfXzsaazflcV8skK3XegMa36EkqWvBJsOSo90L%2BqD1mUJiZp7e1PjymglDT1Jzr4wx65yl58DE%2ByO7tj5hqDnJgqZZGyiLxGqFM7eE2cZRCANnbDHjb0wVURPjxuOYPpg8VGEcdTpr9H43WGwD00Pcp9EgkN6KK0N8wf2OzoPU1BHUxrUSfDGdXo%2B%2BPbIGdfnwHweyzBKDexNPVF%2BvKUqiR%2BhaAs0KsprqTZHotGYhc%2BLkoYb%2BaQNEEzDhUfA8kOxEfFEQOhbk5XJCqFdjrHhRnNgZfOf1m09DBGke3Vf9rCOBNVQJe%2B%2FZ9OxF1x2ASRyppwH%2BcfNtDSN1qTxx2vs8ifHsPaxqw7lTP5w2LWE5v0uzVAdQqjCZH7YZmBD3DWUfYeYePyJyMbAjD351Q1pjwviCPQBoH701v76b7YO35zNc%2FjZ%2FwYw%2BuzZyQY6pgH941zGgDIvQri59tVf8csVZe2oKtyriN2yUfsQDV5ayQApy1MKcrABEWIL7Ox1Cq2OBE9LNQNJfxgKB4j1NfeJkF41LWHr6E4s2n%2B%2BoB%2FtPusyvMhk8d2WbvTu%2BO56fJQDPERYDH2%2FSzZOy1QTPQiFx2vUs3EluJsAMQpwxGWWnK7c54yYdldIRBBWQvS%2Ffs%2B%2BUQ4Nyl4PFOMgmG62WeBmBAYHTqd2&X-Amz-Signature=733829a067899f4cbda5b027e9b1fde0d47961526115994944bbfc27cc8bda3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

