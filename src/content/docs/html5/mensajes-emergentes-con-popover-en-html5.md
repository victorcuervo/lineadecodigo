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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNXYYMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGH9nEwRsCY8RcEJRB1SvLlNIG4iBkFNw%2FzeDfC3lWCAiAF63CuAfW%2FZuchRE9AYhpIKD7XNpr3nfVr%2BHRsVNuO8CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbsBP8RcSwzFMAlC9KtwDFHnVzWZ8i93CeS5z7iN8LEiIB4fYzURc%2FLOCRQj41HM4gv0vBi93vcr0NZL3HqQpgDXUjo6DNluWNu9NK%2F6Mh7YpEeU32kf3QdD28wAvkHFawjwJHRQuBu%2BfVPHKV13JfZNWYo587bB8oxkWGBeFYu4ua6Muux6DrZIM7b6wvdJOmVL6e8qpFnTgn3us8R7WGAiyaiIn23kNHwWiFw7rOJBq0KIYSgGIPTdtqYeHGZg3yHwsEN%2Fj2XlLkoj6KLDTIP4kRgBBUR4OYlL2kN6FcZKOqyfNi2P4x7FGSr1S4BCa5FGOgPT4gqNVtJ%2FqXUhgJ9bgKQR04NXQafBWJm7W7hbC1MbCwAIa1cQIUjbT6sfMfpWAVbGXSHt8uBEVlgWVPGVjGVBTbGaVUjqjFvFtfifWeSTml3tyKw32zsCX%2F3MuIglNpF6bfJzR43wx%2B%2Fmvz5vl%2Fn87vwjmaebc41Mku7h2Hvd4JIVRZ2%2FuXW%2BqfXUtIMPwu3tqcyZ9G9x7AyVcA2EEArxVlAZxTS8aziFRHwid5tJ%2F09TocATtmuGWO6NIrF7fIg7V%2Bk6RtLXqtDGHXzsjNSK3BrHtNgaGc6lyDSJCRZfroe4u8xmDSZY0TVJPd6CCuLzsdWC%2BX%2FYwp%2FTayQY6pgHRkRGnzGvDitEQw7MeVQvY1zjAX7z%2Bf4wGody1XIQOSwHGokoP8ufBfr04LrdnQSJn36rE2tK1SqjeG0rr8b2HQgW8AMGtyU8c%2FvBmq02YdZ4phXpglrWarb1oqQ5K1kMvFdIdx33k%2BtObpwJp9QRAZjobqYSKAa5%2FIM2pGuIG6PP77tGlKFmnCLwnnTfB5R2WhGhgKEnVIqYZrWRZ%2FK%2Fm0%2FjhabMQ&X-Amz-Signature=7093d2fcf2bf0d988b7eab9799094ce7ea91ed83362447997e12b95a487f1d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHCMCVM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNylPw8jL4OumE%2BWr53m%2Fo2lMtMx6leO4ZPqpw37youAiB7k522EqRcT2uzMYYNAmqIxQLTIR6yLBnGMuCWJFj%2FMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMad0dt54pAklnIKLAKtwD5X9C7BPU53tq3jzlGIEvRCdA2rGyeLZDm2w60XFes%2FRW3V9rTnza41GiOL6YTD%2BWTGT4Zx30YQk3j6WKw9KuZQYWm%2B5aqp3Rj91SVcCW5LSKqdiw2E6q%2BHv%2FlwDAKckL%2FR07p6HVpEPutHVkS9mxWByt%2B6Mf37v6d0VSJoz3KvlIqVuPSlYVtyYEUFZ580V28JU38EFcYH9PIVpzgP7q2eepGemnhe5tJQaH5lkBXPDFFgsEGwap87XqNQ6yu4OYtSKfEp1m0Ui9G3P2DC5McGRvxq%2Bqysc8tgUldGyhiinwyeTkLENgojuDclZ6xGOTd3kD%2BFLWm7vjbQKwlm2nvrTLrcbJeTQ4lSq9%2B1uPn3H4vHGST1z0%2BacSlhrHlLlRl5OCGDpWeP9nv8zo%2FzU7YZ28AQIX52P7wq3%2BZDnxigcpBYp08vDs6yHcqnZV7JCp2OvxYWKSyd60m2Otx7t0%2Bz%2BzF4Olpow8f%2FXxORiuHoX0IJn1ubDOCNC%2FlfCue%2BUrQEA78p2R9W%2BmryxnZQrQi372Fl2btfiHFXLVGaN6et%2FQpLeL%2BRzx5khyF79ycVKEk46Zo9AvZmVBRwEY6NZTmmrd0wNR3YIk4Z8EOZfAoo2qIFQrtivhH20Rz7AwlPTayQY6pgG2pREJV9qvs4PawetSj6yvpjbYDXTPvLfojftVceaPiNAarPBIOuzKxeZi57yQz7vx1XZrMNwIPAWmGzxCT1BMewJRGHpvhVFlQvw2ZUQh2Z2lsi0MCswuEHqt2uQPSkGh%2BmQ%2BMkF5Qnyxts3MPa2ceGPJBjHaJDsqcS6vlUSUiWAyAETL8PDjM2abqfR1D1S7QP5E54ixQsoZBG0gQipKgs2WhWJl&X-Amz-Signature=2812f49134c91b39d44298364c543545c0e62c2b480ad8e947f077d9e3ee0188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

