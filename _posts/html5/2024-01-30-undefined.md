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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVO4LXF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEBK%2B9y%2BqvMuisXRpIwT3y6mcj7eegYgRaXwvK5qmd6hAiB5%2F56pX%2FWHl2JTivD%2FES%2FBiJO1%2Bia8ej%2Fy2c%2Bhp06O8Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1dvu24T6GkSLfRKIKtwDP3TFvbb75rretSh%2B%2BOvJm%2BRmNwD4aqCc0n%2Fl5gulst4Zzp47yXxcQYmsR7%2BoNmXbAScSdHRPt7tb3cmcGf2FpzZUVuVhE6ZOy2N%2FUp4%2FOCF6lx1XxAh2d4T7lEBO9aC9bnF6v0LsD9%2FRccpFMYR0PUfJmgqrOJMIaqW1KWWDppL6GnFVlD1bLoKZdpuMOV5Vhg0Y47xTHyp%2FfUUGAHBtkGNqGZPXo4vyYfVoy9zWG056x5t37Fm9QMX3V8qp9lpdkCJj5T%2FEO256kPaia1tEi4Jx6SXT5edevLlb6XO4L8rd3U7H%2B%2ByZgnS376%2FJAwx0ZQNA75AWx2LrfaqlUZTqGEHt869q9GYBfj2%2FW%2B1dsxiYWgakDBNN5GUW3e1LpPLBnkslC5ue0VOKkni7yq1N9EEJH%2BX5375HbgVAZkrshFt6XNS9Z8xCVknm052TVRQlVj%2B5b0dAJxgYEow5LwSrMQTGPPzB18j8Cr%2FPjPlyP0GDyFWmXMnM9d%2FgD36u9L9Vq%2FwgxC9JdkLm%2F%2FUgA690xjxc4xKYbvNWI8kYv%2FerUG31oUDRzNHey84sPTnAMrdrsae1%2BlGhnCNPVjBr1Xh0NrLcOuH0CVaLnl9xzgqtBAiT5KolzvvE%2ByEFjn8wqf%2B9yQY6pgEqBgoszsQIT6Ut6LZkBLIGYOvSEfFaIIWtTnmJoe3K9%2FVwMX14tn8UuhhPPzKUsjvJikg6Hs1psSh3sadmaVbMLt%2F7sZ1Gex5PzWnmn7bUiJJHJI%2Bp%2Bq7AkBl1KAZ3gZsTwQ6AsA%2B2SbSdu%2FvzbSxSIqhL4%2BirFkIyBNB4e%2BfHT1Uny6sy8Ffsgxvuxzz97%2FDpm5AGiZITK%2FvEtHOfP2RDCDbdUX9G&X-Amz-Signature=93f7cb754ad762f38f821ed7f86ff3596bd7f1b56066f0fc64ca52290f12a9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77XOUMK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCdQDQFK77FXIi02KO25YlB5O03RK6FM8gjY6dtFnCzJQIhAN6W55HTJRCq5MVVv9HqHa4bUwqWxFHdgYKEohtKTgVpKv8DCCEQABoMNjM3NDIzMTgzODA1IgylCAYWE1mkYTz8oPIq3AO56t8ji6h1t%2BDKsDmDRo32trkUoEWL%2Biz7qkv32JiQWpA7Q%2BKrk%2Bh4t7RfnuuJcT74sUrDudf208rj5r75Ftw%2BKl2zFW8GnXTHqXUtTi4GGREb9V7zh9ZXLdgbJf8RJgyiw9v6oWEXzHsuE3LBhuchdJWTO4Tms5hWWwVUbMO4FURt%2F1Yvy8yu2ZjjFiMp0GWHnzJ%2F4MEHLL8j9o9NiiJPz67EnMrAA%2F0AWqXmJ1t9P2qT6XM1MzXmvV%2BIemxEPmawrh6321vc9BEuMo5mxf%2FNlDBrzoE5Zntu69ns223zUTyZxFoxV2gIWZ4ibIaBS3V905dv7ji88QPxionhnUShkgDeIWAf42xaSLIciNBlAzc%2FzQ1rtJRhlLeJnehuy0F3CebPXZiqtOK%2BI6rci89gsjdY2V%2BfmQgR11Kc0sesfgwZD91kT4FvtYCAnwU3foqFOmMKJa6hwngW%2FGuBjgcJGcqwb11lG9KCHw6vbmW7iFlc6Ld2zHYUMIfCpn9V7g0rOcG2bVcceG%2F05QKLePFfRimnj6FRZtpbi9%2FuChnAgOyQWqNjyPEmIkIDdiGH5WvQ06Gxs4hgCyavkl%2Fqsea6d%2FlcGifbzTk8KNL0wk8PN28LL%2ByWeWOqpz36LzCS%2F73JBjqkAUdUVRTm0Ob2k%2Fp1m7JlJEwyiBW%2FivlpovlYBZajtkYKlrNMmXRC2b3hF7M1m3uhhOe%2BpKnn3z%2FPCb5u%2FxbG8hr6nG%2FqH4nr6wBmKc%2Bhl4xnAn10XEY%2FNJgfmAbmeP32xJxWIYP5ngRez9%2B75G6m07zUZsnGuEv6a2sDkH0yGlXY5YjCAedZ852GmOrYxz3whOAtoRGyubJaPAflGRxEs7qwAqNM&X-Amz-Signature=992dfe0430e82d0dea0c939ff93c4556bd2bd18f2c1c5860b2c372bf9d1c8f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

