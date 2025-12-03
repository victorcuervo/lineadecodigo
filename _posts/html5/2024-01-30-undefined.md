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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVJE3QU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDMK9ZMETq4QJC8MLWCOmGSbzpqEBpc3S7LU6GPEGhqdgIgB91hFv5Z5l4%2F9Q0ZQefBiFy9ZQgY6kZ7wy2OuenmHtMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBLayr7O8DKJC%2FFyASrcA0mXBVhMesYY%2FhhLMVtGdq8Gu9klafEmoUm7WvR4vwATTymY%2BVQS0%2BIlgevYkxe%2BNHjQRKKSceet%2FIJBJ83afCP1YhiLQWsuFCa9rfVBeOivENYnlk%2Fef2%2FJMYVBH%2Fe2qgZLI4d7A9s09teoZp2cu%2FdzKyn0fpqS90tJ5DC%2FeFjjPMx5LWzv094b4AWWKzO5IpXBcNNB5dfRy%2Bs2H0JcJJE%2BaRy%2FRbWuarul1AlzAXgECNeHk6n0Veu80l%2Br7rYjp1hTgZDKeTaBBD0q1ywjMJIi4PKQCEbpjdW%2FJLaWfnMkvtUq4SnyxxXjU4DBuwBy7DGBSHvCyUBw5%2FXoSnBzVqMG6Fn%2B8wnVwDiv3DFEW1SPXE5%2FOEO%2FmtLydgiuUJN6YGTsWyEaKAAtnjpQhwfV0y23km48%2FGyR7H%2FIK%2FU5E%2BZh6u%2Bd02GdT0P1lp1s8azNEQasbsksGiNRrwlVBIzEhZxb%2F5Lv3WojqpIflkMAbPUijA3kZmbxb2VIzsTOe%2FlbK8V41gvOoWdfBOLzIK87dF9QwjSoyiAop%2FJgZi2ASZ2pB09l76yTo56475rOs8Q1F6PbRXoCpaE5NdPS9le2b7m6POoG8tydL8BkVDSm5ioyBAlJq2IbcxqBzvRQMNjUv8kGOqUBub6kJZXDJRXB48qN5ajHSmBtl%2FQCc3XjFoSTBLe9FVIDqftDnwwJraFp2TUYOFGn1fk7CEC82TS4g%2FKkgX8uaDx3hk6mIxnhMl%2BFrQP4YdHJK0GbRRBfaLFDwMUnGSsnUOcWAYEFgNQmBkvg6QsVoGdIDP2lzCWYgeAJ3TAGwojofBoxIYTf3QSHOv24Ru07FnaTKruAFhR3P%2FCA7IFLZh%2F%2Bnf5t&X-Amz-Signature=83004bfb9b97d7959d285f61f86f10a71fbc50ddedd36f175bfc06e4c3d3c90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WUH2F3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1qkQDuF7kCJgrWM6xgSxA30CZOl%2B%2BkY6tDfKyf%2F%2F7hAiA7jKg6N3wCcAZ9kaOwbVdkxyusCwpy7HqJ7bMYJS2EmCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BUwBop812qY1FlI7KtwDGueWzGrnTvl58PoF7zBfBJkMIRjRnnk6pC9f63ASPHVo1YUUxTpvWr%2FRBEKk%2BU6SG7LPrfzQ%2F9dodPzqIMowsBO43x3BuCKcfNLQvqEn8mAoo%2BXXUDMEIIBf3%2FgNGh2%2BRNpAhNyPaVaVJnU3tJMmoSfHXkfo771MYKqwm9HP3oM3EMCvVqE8WDkcw%2BNrGqZ8OO9om4tVNwekypDVggeiFdUlrpPQ4Er7aTppH1G5hLFSfDbpX4xGqR9N4FA9Oj1CUhDmBgif%2FUCgp%2BOTNbe9dUVJCxqINW%2F588bBsks7MsirbazTerxyR%2B%2F04Mq2QgzZR9A5IDOl76Hp%2Fg9FT1M2f1a4PtBZX4v9KP%2FDvJrU9ToKVKrN%2F%2B59810CozRys1PXHYylWk33rfbC40r7gTPL75NIHeWvqWxdbwf9mZgZBcAYJ0Oi8smZ%2F%2FiQebtZRfis74okCjtdiKM%2Bp%2BTYxK8mJ%2Fa8Et5myMrTGrSC86wV7hGysVSr0WxzQR51r8vBw3Y9vtb8ptB2LfUCWbTcw88pvTgdyBsPuTA6Nx%2F7rkajdEpmidi0kbPfLbqH93myQbdl8%2BwGdSeaPA5FhDw6dCyS1%2FJiOEnzQ4Ba5h9tdzhgMoLnYxwnR5P%2BEOpOxa0w4NS%2FyQY6pgHrGrGMIy3tX4WXrqDY%2BLgvMjDyYl2E%2F8uNnkemHnUVkLjt9IhpY%2BMmYCNJcDFOCAZ4Dym1sxVaQSzd4rsiFk%2Bk%2FhYoFGsQaeGzm%2B31rLIj13LQ5aeA7UGJnXtginVGtbr8qtVx8%2BZjr67XLNbnHtHyEeh2PODculCpviC82xMF8Bk5KYv23vSJjWbWqP1o2omzjbLdCiA1rfLYtJr1ufUo8%2BYQwhU8&X-Amz-Signature=99ccd01ead2e81e98619c3cf9958627c18baa80409fb598b9226c72d0cb258b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

