---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO2TVWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHyek%2Fg6TlqBHAnH39VcPDG1l3YUGRy2JROhVQlyVj43AiBwVN2doywU4IQWgcqr6iMwzYT7AkzLRpQb7Ex7AD7XVir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMGip5QT0RHYToYof8KtwDkSDhTaTIEj00WYzlMLXgrVhvH%2FzWyl%2FcfQjStJq1dcO2mh8AAWBs3te9vGuA3%2FQ%2ByYkzaC1LM7cY3iN7FBrD7TEuIeGWlOYbxTNQMIawOP5ZHQzhAVv1YV0mxBPudi6xU3O6%2FBULG0CzLTmKb1RLqnIkFbg7LF9IXEGv8B%2BUsQkWAZC7UkvHNFX4GPKPY6trxp19rGeTP3Squ2XwU%2B1%2FhwhLjauegeuCYIU%2FlcysaeJUQ1jHg3SSujizkhi4GeDeTCniw3U3zKUlq%2BD6mC194HgQM9Ux%2BP7IMhra7T3kP0fV7xEsv%2FcBbg%2F124tZln3hx%2FhyBPVCG4GkW9g5IuuvwgOx87ZeEbONqAZrgYJQOjk4KK7aGzshoAoopFlBEEvjM8S0X4oQxcbH%2FNUEb%2Bh2XGFIz4FQCBkkuns2UuHf7gDe2CQM7Kl0fwcWTXbnsYw4KNSjwFAeqD4%2BreB%2F7Gyj3A7O4kZX%2F4RvYmYH0hhVGOw8VTBxwiIpKdjXi%2FM6LSt0SRm4U%2FFJoHEC%2F7e96U5GIKPYZiBFwnVxkCo1Yx8iKWEUzuZrBvTvrRJVdIYGWcL2jP9pTv6MO%2FRcdAPGeH6yj%2B0bvUuQC6NrH8a1aU8omr39k2h3EfIzc79vK6EwxOjEyQY6pgF8fb9%2FwUR87kelzIbVwJGXe%2Fuj5K2nuaXAlTnz3BMkRniZ6OyKmxvavWlrmKaDpmJuZ8FkAM1OtgVCowPJE4oXL%2B1R0TZF4i13otSTketTYo1OVOVKYFqal%2BF61MX%2BAYMPQbnXFLxMkhSZl7z9z%2BaDItpnJpXALeudlV8HgkxhoklKlSryFBkJB1Bm%2BF1oWHOmtaHPfpGWJeHbf1TAoTuF23Fmw7On&X-Amz-Signature=5a85125143bc7e1b8ef1053d0dad5c396e0f6c932972b5b82db1df0287bba7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662323IARN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDz%2Fd71QIo6IH4qcvqGdAojxwQw5o9UuF3Agc32cfNfewIgTTebPkHdVprMp8Me0PQj3KzkVZYaDMAE7SRWCRKBazkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOC3mppWqxhkxG7SICrcA9axyNCfo8MvjJokBOkyxUs1QHuOWCprLJS2TvI1BpQ7f2PYHqvlnsHZqO4rW%2F2zxgdb9R22uCME5uF7ZmzTPnXDDWSait6xD1qZ%2FPL7ICq1Nfw5spZer8LHVfCwWkRZtcVFV2X4gJUdmzbpERO7LgjVyjn8ZGEx5awAJTKAlpmJLzbO53cb0YZy9T4v%2B9hF3rlxWeP8bNClQL62BFhlbviOagdI8RQNIoSkjn9jnBdqPRyG%2FbAWgQ2P91DCcFfWM5hI6ZU1b8VibNPDD9fM4X79NW4xxVgMxiz24MaYuaaI8DafZ8rxD0dBsgyEFnbfn6czxaWYeYNWrjuFUy%2BeO7Ea61GkVxzeEql5mfw%2F%2ByeadBcWg1CdYBhwRWxbxuAHA3mUE%2FgWZ4WQfaKTBiGMbMRZQsZZa7VDL1zXuBccb0Gg%2BBuzPjRZP8UqYGXJILURJzvYUvG8f3UoVwShw5cwvYJ7sqHvgyTeqiNHXoJlzKrMuTDASJ%2FKrhyKadcfZ629sRg3Nq5igtSK7YuD6B6kKzYvzY0cr2COxboIaIPv%2FSZdYkZzAYacs2K8jIrt%2FJAHkqMKBtJPVrDRHlKsqnDn%2BgknAJqNl0%2B1%2BcY%2FF%2F5R21kJwsHPjo%2FXhUKww6x0MMvoxMkGOqUB7a%2F%2FYMbU3homciOYA3EMmaZV0jdMA8gmQUl%2F%2BtrSpu9v1nxckuutjGkLN%2BuD1GEYQ7sFHCBVfIJvZmOskj9Urrqq1wuhQd3u1pVYg4AL3GFaLqRVcjurcKFFZSdfcxTmU7I3I4x9ZP1UVacfwChjC%2BgeaJST4HwkHcdv%2Bz2WS0BypM9bGMt%2Fznt0yccNmWE5k7FQ8io71UdApU2YY42BMt6OrreV&X-Amz-Signature=88f4f5e60ff46b2f4906327afb4c5f12973afe3794b12165f928f7b8d96a95e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

