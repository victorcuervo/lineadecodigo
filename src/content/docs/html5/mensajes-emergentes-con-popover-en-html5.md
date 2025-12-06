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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUZEIOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDmi3dRrP%2FSQHRP%2BCcngjxI9Ad4LOn3cNU7vtUQWnReAiAMWTD%2F765UPqgyv%2BRz5uZvHrwKxCQzGm6VVXf3acCfgCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfQUSqSB%2F9KqRD%2BYSKtwDTEXOeGU5bG8IOCRWUe3pwDjXPkXzSFGRP%2FfJpSVpUgJt3IpzO%2BPlHBbYbRrlWOccT%2BefP3jOgiVlgCHLj1Ljoj89ispzgwPHicR3B8C2kD7XDMv9wZph7%2FeahlScB5xlqw586OjaUXAfvMPlzry9ChWYCvzhcLvYGytso1exxlXh7UsQFBBIxPs6UXKGE7oEY5rQnMZsJQz9ivEdrog1gb00YRjY5MkpIiPbVh12Cvjx5il749ACmqBkrVdp6YmXFXmARBP3gum3nF3vW9uJMelA2qdi1YObz3Xj96MyPT8KRf0vqfBBzinWYjs8DYqQtyoukCirmIXXFU7Fj0CLLs8JKiI2b9g2R%2BfWLeQ2G8eOxNyYMlDaXCxRwnzhuIjsNswlPgJhpWSC5jVdmQvX8HosN0I9pU0PvQvAnD9IVsEyyZEu8k9fzTPkZm9xpwX61G%2Fvv6sr5MWilR0yaACIqfK7H0RfYjMaYvdk%2BYvQ9ctkQOXy4HCJGRQG11PWEBUlYu3681juSgHN4cixr2vPpC5q2fYc6bA96VJQROG1Nnx9GNreBry6Lw%2BE8dVCTKRC6wMnPKY6WeUHExAGkZaGjUAoA7KoF9Lx5hi8xxd5WN2XTAxkQ6ginvrw3q0wzKbQyQY6pgGztphNMjJlfyyC27A9XptJyv8IsEX0vwwk4GI9bfALcbL6saU4kDFGqhx0c4NZTW8u7DYT%2F%2FReJ9Jws726lqElJqYUO2Bo7XdwMprgsACqfrPyKfVqiYswLWex8TYD0gtzGuOmOfQdG4TXkdyOwgRJ2%2FxNfehinfaDF1DstGYzwj%2BwxvcJP7ND4aF12oobi%2Fs%2BEd9ZjUjFShPy%2BkNUomZN7XYfbX5e&X-Amz-Signature=7e8d0fdc8af20f1ad91e3e9d0e345f5f3940fd301482d306c0c137a9eec7d0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXD225O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8pkmHJ5IURv0CelAQrN4X4BQ7TouGSWHHYbh2U08aNQIhAISElYVjlwEfv2LTPl6CkYPgwMGMWBhY7yEdXBShmSxcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzaKDPq6UlUrC4O3DMq3AOIW6apsouvCQoOES1PCTIucmW05%2BVj9qZ1NaQhMxopeottLgVmj65K%2BSORKoj1%2FbJj67qHasLOCmHfh5NdfZ4oJsaVDmEpAf1f10Tl%2F9jKKMQukD%2BX5zDf7pAfPIJIA82yZE7gxT7uhwdGxpPTS%2BT%2Bj8k5LjH%2FoP5olWgsHdjU9MrLk0XD3rs%2Fu0nUmPqKHT8fe7yMK76YWo0vPR3OrcuDVFK%2FDSEFSQHBf%2BsKv1rss9w9L68fA%2FkhWtkVnntVJ9Sn77KlGOFZ8tKrtYFy%2BijMtT%2Ft2ITAdpsbDgXNfnPubk3f1R4nyepoe46dy2JdRLGkDCe%2Fgw%2B%2B7iGhoGAyl1QN5GL75st4dY9axLK1c3eSuJl5NIEm%2BlxxDNuuLXE%2Fu%2B0eOG5dwZGCl3NaoluNDMqRf%2BY4ZdAw%2FVg6LDHByBS24vmGl6UXexqv4fOij%2FjHc7vLif5tZ%2BPtcu0qUgRMT0QbiJ3eDaFY%2BswglZT7NkLvSS0AQ76rryUQRA%2BS6xcDoiOcWiRcGi4xM67GzWX0YU7SbrSIevlFv1qpuBJCwX96rmqonrxhFVEjxxS8nqWf8JlUBWXhR%2FUbfG6aF7q%2BSDtEklHJZmJ0tbrFbsnjWJA%2FIytIxqgNU0jZfbJs7zCiptDJBjqkAUkl%2BJWd3kR5GhJWgXGQUXXcuWtYDOXEr%2BdUE0yGHUzBUiVlLLXQBZTq2Wm2nvxMPkcsKtsGCrqYA3TLRE%2FHyUguFIf6q428x8Vb%2BRg9FGjgJhJy2lCU2ZwknhzqBzcTgYH3CCmrxg%2Fdci4P%2BVMp3mEhbbbDHMC20Z29wXIUYRWXYzTgCjkRdM4WraAde0Zaufan9ADtgxRDn9UXxyVTXCV%2F6sVb&X-Amz-Signature=23849ca57a87a2c237d7614e5d02defcafc8b9ca48af255e8472eb2725ff2d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

