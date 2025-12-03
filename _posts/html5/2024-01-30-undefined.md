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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BWATXFK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAS0nACx%2BfDhKYFKQrmsOFfkqdJmTKDpCGKchgbGWIToAiEA76iNthazZXTwFoSHu9LTAzOhKja%2BEZp4cui29nIfhbkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKhyc0K%2FbRts6eyN7ircA1A%2B%2Fyoq2cAVXSg6wHkbeS4J%2BWWzAxpEmcPamIJIEW%2BrZJ1cbtbBHAFas2pdrFPhPWFRY9o%2FugBdIMALeaCUb56lCQ43oOdHAm%2BQ%2FfSqdatsvm6whg4Y7pzXKLOQs%2FTbt926ccEWt9hMztHUHElNF906svCZXcuv9uhbI0XsGTahY2Xj1YolfgJEWpDBvGxBAauE2ypoz1mZqFR0S%2Fp8C3mkUFhWXCUDXa0O%2B7Vaf%2B5m1IPwbym66nyo%2F2SsUljakF%2B2Gl6sgi40mmc3xKFO2GYgEn8%2FmNO8B6vVJ9O6uwXeqZPGipZyooanvPiBNa10rIolO6EcYKsS4zN0mktvmIB6dwIt9KpaFWjrz8aYtlNFDVKQH7YzeDHStRH3dK%2Fe2faLyKrvtSmboEbSGU6LzNuG%2BsbmYJrQSPBzKC3Ctk3rOBFeazilyWl9TDC%2FdUUeFEOopSe%2FWYnO%2BKkEUXRQ6Ao0C7hbw24UbbRzJGuGFMXFlzMKqdYqYKs5MgjzKZRDl6aYIgU5j7Lc%2FwxGnrk6Js8i1Hs%2FRnZY94%2BgA2U4%2FlrDtuVO7EINimmSCRYRUAycLEvMLbOJ1qcAt%2F0SobXTQUR1Pzdm%2BemZ3RENGGTdIF2Z5cpKayXRjb4Fbj1JMOWSwMkGOqUBfTUJkAmW20VE6bwULxYFe3my3drCwuvGMHpRwyZKq%2FJcamQDXa%2FTUO0au%2FSPUTQ1EymZ6FF1dZF4GereuN8FEe8m%2FNBNr3wRdO%2FGe4rtgriwQ1VqOt1TMJRPL%2BZXAjCxHPvWh5mha%2FXbqAtc%2FQBvDcXt5%2FHKWtOYAC1fEsxygDIzCd21vrhVZJV3FD%2Ffs42F7fShFuSpDDVKjhUYi%2FjKpkzIJbAa&X-Amz-Signature=b7d03fd8f173ce37a8d57d648b9a72f2877301ae0c47ea0e87409adbbb3e31b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBNYRL2U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHA5ZDdgy9%2FkvFtc6kl9ijpHLvVbA%2F8bGTNkGbzgozsKAiEA6Pdzyf86vg5I8031%2BOS0pRJI1jmH9%2FzPvvt7IyIsYVwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDVW3hEjwfi4X7VLTSrcAyXmjsEU8fc5wvc3xoihq9JwzpacMK5g2iBMYWa1I8K6NbZno6ezygS4n6YK%2FcyCvu5aiuGlE7AGpM4aw64IJ%2FuB3W5HbP9x9mEAhdQ9XWluW%2FCh%2FucTm2u6lmikkjLYLhAbMo6ehvRJcbacYipBN33iMY90MwMwOg6HOMUa%2B2CwdBUlNgCxfj60dund5x5Sse2%2BczJEwVSD85c10V1UcXPDqPfOkQSgbA%2Bfy6Zd5BFZZTUjw361QVVABWSd7i7MRXqkInyZuoFyWizTpn6KmBKcqM3jP%2Faud%2FFFlU2wqauFhRJBhpYVPxAqnq1T0LdpY7nVyJpKSFaAGHhxWJp3W5MH7kbmayAkWql1d4Uqvfwh0WIzv8RO1c0YtHXXFTKTWsJJAQBs%2BrsrnHt4jaM8N8CYGtBkv3cDLQH55QyJwXhktmcajOsUzPpF2ATrIGnmW0DzF7CVoR5If1yKInkOQKGPmmfTmKkb%2Bk%2FfwF128KVbNAkI8m5lMrP4s%2FulZvqdG8oKBouGkIcdfj4sPZhTtf1KUa%2B5KbmiQgULBDvKgYZ4go%2FmEF345k9JjKlHq2T77TsiPncNGRQWF5tqW4yYoEyl3WTWrXAzdaKzQvG%2F5%2FEtsiTL9uN339%2B5gNK1MP6SwMkGOqUBnYOqqpVpmR3thDIxYSxJZvlQ7a04iLfNKBtHpFmle%2BauHevnEo1csQA%2BRvukEaWbSHnslpX%2B26Hky%2FK6M%2Fi3JOjRNCMlRwH9vrHXXu2Mj2GlRVqcLmC6mueEmbvurG7ql8Qzm5Y7UmiRFZ2vivNOQwjBBnhgb1BKQqXVL0lHA1G2VozjNyNQWqGbm63vmvZAWSKgS0lgmTYgJeMHyzgk09nNkGhJ&X-Amz-Signature=637511731f9657efb421f27111d53b575b560e945a6d5871fbc2878f69581fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

