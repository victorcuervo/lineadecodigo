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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AQVSWK3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCJmUqFNUXid3D50116JyxnaPDffnMMzNIUxZ42He0ydQIhAJ0aUvsdACfgWbiDmjQKV6r%2BwN5muxjiHqDpmpfmmaLiKv8DCDEQABoMNjM3NDIzMTgzODA1IgwOp3n8KSand28I1yEq3AMfaN%2FriSIhXbSLX%2Fx7gm5Y3NdoQYJt%2BqQ%2FC1C0aWpELirZiXhJqwzoLE5sfdCF5B5YVspd3gq9rC%2B9qopSQN0DZ1mqz%2BDJ82gM5lARcgoCLZHTmSwGuQ2Mhu1Y%2F%2BoVa9I0DgUjUWNHWqVVKyCuPC%2BGYlJGoMlD4rL3xTxDEqBX%2BUvPn9FimjWvg5Zl%2BTbg7rJ40DuoKD9r%2FtgYRR9q0NgQedrEbC%2Fh6Z8ChAhnGLKeVQJ2I2xGpLoAaXd6GAo7lj70lFdN2NEheLQSbgfOiqtQNf3hwY%2FeTagJI7eQ6bg%2F13c42A5t4v9x19z0CfI9%2FIIrMTFc1RTHm7krn6re38C%2BS26zjuwc5qMaks0sKbF88pOLmWJHr4%2B5rWrWaDhu4ISYMKB1mVQnGuH4DRohh0qZOf17P9XVQoTx2wRadgUpdmAX4qNbD18JuPzFyZgzhpspLUxZMVfkI8%2FgGWwQVSxatjPnNWt%2FT59JOKTQbzeDjfnBkTXaj%2BRhYNzU3EivCel7BWZocj55dCUMze2LLBTMDOlu8%2BvyurJrC6ol38JmCSN4v5xRnGqBh52U7Xnv79Sab%2BFhydehQtU4%2BFWdmM6YdrRWvuEgxIs4I4yS8r97gcF2ggiJFyop4%2F%2BazTCswcHJBjqkAfBA8RXuDJY1oibkFuOyVW0%2FFUnBPpD0DN%2FIW4RTAoHhsik4plXp%2Fi%2FKMBDOTI0kG5pntuiqiRy9uVQwik0okLnjAI6VcWwBVB26Fh6u1yn8PQs4J9W5%2B9JpxBvDjSLs13WGgW7jMYZXOkyfI9jorpkzWw%2BSKJrISv1Mw3mibkXB3%2B%2BQySuiC2DduJfa%2B6GODKmqyr5wOhyvS%2BK7NLzQ%2F242anS4&X-Amz-Signature=30ff330f8bca5b4e7bc421633a9aba502437be84c335690b080b133916d097cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655JAAWMJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIE6Fj4M6wkgCMmDlrYMbTNtLwKB0%2FQdtZrZ%2BO3VEGXUiAiB%2FBWdn40NuoXBCYoCEN6b4ng%2Bd1KeXMeN97WkglwzJByr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxErMecxntGoBPk9HKtwDA8XyQFiUTvK3qE8SO2WNc6MFsJiGmsRLcryA1OZf1pwsdGb8tqpPZqSb5dICixKiTksSH%2BVaTk%2FgYxyaxaNr7ACR7RdApqD7JqryUokkAcLFWru0NLV8dAq9qdUxHC%2BUCuzpZoF5GahL1XQ6McJsEVZJrWaMkH%2Fi32fu4uQnZC5K2vPi0RXl8rbxfwj6WEvTBSxlwyd1gII2ZHgozHvaT6Ar%2BpUNNpV4ljIBmpec0VezS5RgMAhCnrUxmtzf%2BI9MtkNkG9dzwqalPSBLL3%2FW0Z57cjQg8v5lj7S5IaLWD5zBQt%2FLGUNVBENHwuc5jg6%2F%2FzETNQUo%2B6Af63s6riw5SZS5Ya4i60L1AB23A5riGFtIBpqlifAqtPojZ%2Bb0lMCii%2BnPPTP1pvnom30oDDj9n9GKGaG0gaChgsZEVCQ2%2BEbqtqDYk2eY1VEFrWinGLyNVyaT1L9NOtOPCYl7vuMoW5JP7LOjHf16Fct7sR7ltm4L2ELripbqSpsSmAVKla%2FW2T9a2sazqRU6nZRkrVY8SMFbPwKNbwq07JPWKJ0kcQnunkoXTNBBNgrExK98AYzHC0taBNbUxpu%2BHviBx4ET%2B0ftzr0ZxNoTH2yImw4Ew%2BsZ7yhhlfe4F6fYp88whsHByQY6pgFQ7KU0uGNiMYgE%2FJLC%2BE2N3sJ1evDkpb7S6lppjIT%2FU3872fvka7DBcqBKNQUhKVTrIgf4J6UlU0WMLQC38I9o36mns5YKvtNBc%2FtEHPpNp%2F6Jp4CZko3atLXC%2B8m6JsZriR8%2BWs1%2FX7baIz057SNYOdzHvVYqEHoFkTsMLpyOhrzYxK4IIv75kBAy3SttwjJ%2FBbMH9wNccXKehoF7n3MEIG1owh54&X-Amz-Signature=e154d0b796fd4631a5690d3fea546cab00cb55a1b36130fee96921280aabd97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

