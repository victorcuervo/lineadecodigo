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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4DY6BV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGs9TQLc1NugU8XFXkyU9HDE5X1GdMy5baPTDSC7anQLAiEAi2Q6qYuKlX6faDeNjtcH%2BnzSX8a6Cj7DOOI1SFVLQiwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDqla1IXd1ONL4J%2BuyrcA7xFVbZmMQ5BERiyx5qTKjhO0ZsIY%2FxisbpqTDazXceuW9Fcn7YtSkznqExibzCUjkmWfr67I6UyH8mK6If%2F3ytOi3Dz5rusBr9Ybkco0NxRg4f0ICeZWAUhNXg9BYa%2FdlBqghpiCzl6%2BJvia4dPANYZ9J0nTJwlJGGvo%2BqRVslL9fidTR7zwzTA7zf231xXdc1%2BWZcBOhQtg4iz8ekQeOExhllmqyGuxMKD2XqgjcaVZ0yortls9mcwu3li3Y3TyftGOCIGVMQUm8U%2FhYwcpWR5WRM1SZB4L1bksDJS8Am%2FW%2FXyVt1IC4C4SDPke6Or18jBFX5Qd%2FRFygE%2FNvMfOIWSYZBfbtCjLuuWM3PuBPTxNNM7VTsArztULNJKQqOGYkBtUX%2FYlNBCAl%2BQPKp%2FrSGx8r%2FVpWbjW%2B5yN4U81d%2Fp0DlMECM%2BjDppEdsXIb2ZiXrve%2BnnmOjMhYyt5md4C%2F5FFK3X6KjanrLtiaaJJ64UquFM4NLR%2FXmUHj37BFj5VJfc3pgN%2Fyhq72NwI0Dnr4e5V94vjxzaW2o0dKErATFwN%2BD1A26c1Ajk5ymc2u8Fbm79hxzQ38EV1Sk4IB7TKo0LssmOZ0IAa3tZnUVo03pzFl1l2kLp7qfyh717MLGUvskGOqUBLm1qJ49LsKJJoMVcTuLlV8HzwEewN%2BNtMIhcn8FUqGNKpkOt%2BS5BzASiyhNTNpAgURwR%2Ben63FphotMNc3lOQv%2B5lBga1YctiJ5JE7KnP0U8zEhP%2BjatsG313bNxdTZ%2F64heedgUwRjd1jK4%2FIlAQ8G63gp3HhSqSMEPjzuLJ%2FyKEfxWVkiLUgn3qCItMOqSol8QwODJ9ed7tM20GOV8p6eCU3Zh&X-Amz-Signature=b908910817a9e322968a3ffa2a3e274f3b9fd1a56fceb5225f16bd7d822f63f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQV6OMA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAjs1yarAKWIR2t5kA7lY5terpiPWA6XZ16El50GFOP7AiEAkcPONPQqjeitWlIHhb%2FUTf8eImaxMU6QfZBbBb8WFJkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0ctE1FgVxPWkxU%2FyrcA3R9jcqsoFLKiLXiY0yWZh%2F2A24NUU4SoqkVB%2F3Ksp%2B77zGsOjdK4K0EAyLrzTphquzKTiUyhcNW4G9slkBro8ObfZc9ePhXcrfMQQlgvfeLV8yBFnmdye4AbWyrYekK6%2FyyxTRs34cSnMvwSVAqYVYkLKD7YIw8%2Bnr%2FxnRDohOE4WeAn1sjzEYuBKEoQ5yZXewylbiIu72upwXftPAMVdzEmr4e7C0ZWyJi6sM7j47p2alfq%2BFb9bwkCAmVQrzJCZ7JNOg5wWJ33vw%2FxL6t44AVDMYNNLKOPjO6RSUToRm%2BG%2BCcH8qg837xO4dI6myxPd%2BtEZT0FU0ixBY8xr9loJz1exF%2BuwchHYb83b7u2ZuZJf0y0boqQNpvHp2msp%2BAbT3q8CG4d5qBTAYwJhKy1KkK6jarVwYqIceYzAiqF7WLh%2FQe7B8OW%2BtG4%2Bp%2BMno7xIDvktaCsiWsGAVbua1uTT3HS4MbPn23J%2Bhj%2BL06pYt%2FegU9%2FVbG7BbbR3JBH8Jc8NUjudBW2imzdu76Rg%2BLRG09TMnamT36Dyf5aQKmL8%2BlbNGmvvsS5q6eND52DKm1tKIjwmGinVaDkwilbE34QRbr8rR1wZpqNY3Q5x1fpmuyaFrAiFaL1ZQPk3FpMLeevskGOqUBG3W1w7Gv%2Bs54glId%2BP1YvBlY6qcDJDMqFkP3ZZ5F6mPPlUgxWlrx%2ByGcAqN2t1PaiqLZOlX8HcKzw6bcgUsAn%2B1Orfdky9HCtb5rJhucCy4xlc8aUCYKSwu0wfg6uWZUlC37O8A0N9k5Xy9Zl6avvhkZGuQDGzc4eIcGdNu8%2B669C3FpuECjeF5LZuP%2BxJDOLMLtRDBzkENxcsHcwKRP058ssk4x&X-Amz-Signature=cd019b65a321d4d804f75d9ca5e3cf18be13425bde23775c363e9b10b7aa8772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

