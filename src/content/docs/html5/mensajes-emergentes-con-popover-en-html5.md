---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7Q7UJJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDdLCHQPsKblhcZqx%2FasY9EL4buKNaxndUY%2B1ymuwn9pQIhAKLtrlgZ4ZEIt23qiV5ZeE4TGh7P7JFVzn6bMgdxjSv0Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxhkGM%2BjeNG79GL%2FI0q3APPVBAxmuq1uzCLN4%2FnQkoRkNe9PZK4ugqRFb9by7y3H9If3bC71Fc8xzK%2FmzbLYqetVt59%2BcIpd2lM4ZeJOqNOS1GKNnDYEQ1iotmaflU%2FTqhl%2BAcC8NJzNZ0FJMFTX6BvpPJzVT5BAfyGf%2BwdkjLNEKWKzrcC1EpfhyQCKeCHQSm7DHTW8A7TlJjfkTByI%2F6CVw8z9NZgZTtxM1p9ttax3uBhHXa7vvMTh79IEtS1xCHCH4KUcZ%2BFdB4nt5JEq1exaLICtRwWlMWFjyDC4AioTwDWYTf%2FtC0fgA4CsvHIjQfGzu1T%2F%2BHCrfQtuXdvkzM2%2FcMrpyhQarFpJ3LZj4NST096x%2BSN4q%2BKz1TSrqML97IdTr2%2FOp7eN9ztnZSLcFEIRimYr85iNPQmem4C4d5jvYEMPdj4c9oesODqFtDHXvuxgSMAL3chFd8b3c9XhiqULy1Y%2BU7antOHO%2FEutwXqJs8hsuE65wVXKoauyyWh8c%2FwUrwMWC5rmWQitYcyveFU3tKcOuU0%2Fg0qq%2FXZ03CK0qR65l0jr12hr%2Fkwv3EI9Vg1p8h5DfTDJbMzif0Kgs6CQGiVeJe5hq2L328gGt1JKJ0p5vG%2FC88EHVqrVv%2FXsrrO%2BqjrqPQnjgdbSDD2vcLJBjqkAWg9NLTi2tbWURk8AiuNGMTWQn6DY0OYMZBTigYoqzQpgB92fVtt91%2B%2FYEgBhfJVUkw7U5UJYn6QvoEv63dK1xYwhdf4Wg4snIQEMnJWYUnvFCmu5NmnyXs30r%2FbIVQsxNhYSPJGEfvNZtBuQBBpMGeFUYGb7%2B1aEoiadhbn6ujeATgNK7oUPudqhBcqK8zjhLk3yAEysVgDwIXmsQKiYvkIK2r6&X-Amz-Signature=15c65e33bc2e5a6a7ef2c8049434199de3bb600ab691c200979876f2454859f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG7DBM7O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEdTjXzUT94pxaS%2FqVkndDTa%2FwfKxT1%2B5HDI1eqY7jZcAiBnAQfyzGH%2BkLJVn%2BGelbWGIOqgRv3o23p8pwvFrx5Wzyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMWd4o4ckvWWdiTWPqKtwDn5W49hPUAMEBybwqjX54LyROeSUEZrP8iwDPVChC6ZIHZrMUKSNCLbGtRZ1F%2FEONiW4s6H4hojEVBlXHDVzVoIvpRzUFFq2u2wKxWf8PFor7oNjWi4mVTd2AcpZxjGltdyVSo7RveRlf%2Fx3vLWLSM%2BbaiuPAATmjK6o%2Bbc5BdRXW0PnK6y6%2FAtZpgL5%2Bp%2F1UvHn%2FxCE3b%2BFL1PP3EUDOh2cFYEY5x6cjHVLBuiYeYg1EMa44IDrzmN7QD%2BjY74M0PHOtrF49luS9uxS3lAZTl4HenDxN2mftqe4R5uUwDU0JogCYaiF4Xe%2B%2FLcd0%2BpFw%2FljlvU45YM20PsLdr3LgxExSr%2BIsF4MkEgbwbyFHhZuVAg1dGGObUnuX3UdGXHOmJ8%2BOfvDVp3eaimcQ7MMgdeHc3kMj2Bcju8c9u%2BEfW%2FqePHEUGke3RQ7TkvsRz8NP%2BOwP6hASSBdnpJ4q%2BKTf7inect%2Frgj4pcUlOC7nWoYBYMI%2FJqKoMMb4709qMKa%2BDY9AB8K5D78pfpSx4mNMJ0e9NmivjbO26h4mIw0D06i5FOAUjq%2FhDEbjr50Aaggx7Gj6Z%2BysJApIpWKLV77fu6VO4ofzWV2d8ahtrL0k77mv9p7du9aqartK9lTswg77CyQY6pgGoYR9aXr%2FvHbdc3rOx%2FQX0vuXlvOOW7nlGadyNBjohW8uZQwFBcce5cbOdKxjRH1rcw2HgTXjFdgVxbvM9nC9Xrs61tZDncntJ2s5JKr8kO8%2BardDYlkUBjPAQv9uG8RIXqQfa%2FO2NUGAWivV3nNjqQo%2BsRHgBTDe2m%2BqVxNbgJ3wNFn%2FpneYmvPb8S%2B0qvzpNZsGk%2BTbG6X07wxCP0kTm2mrujMWA&X-Amz-Signature=c3a592eb01f65ba580be56383515ca0ba926338a81a54a66fc5e68c68951d020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

