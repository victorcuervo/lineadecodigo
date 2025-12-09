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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7RGYFB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPQ8jaCLrQYl1iozOr20Ucv07GKPU625V4cxE3ImeHOAiBm5gPwdg%2FuGSYvpAf2Be%2FyocO%2FI17EqOjTK%2BAo70WjHSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTAdJHjgb%2FPs6dfrfKtwDrYZaGtcMBH%2BtxOpu46OLplvowfiaGtf8UJwQ%2FXVPPtVYz3arkNsNKriuHhqDEtRSmw6TOFW9iIxP1DkhBmIJGFLwegW1S6ozYvtWx1vZ0u3YtRIv5CXjBJNIUR6tNENNt7X2zYc%2FY4j1JrQQlPthMf9Un0MeDrEX3NJo0r0CSWOILcF%2BFxlSG0oN9yI7w9INfWqigZmbZt4wQ19thTr6Nxy82xo0NozJr25%2BHIW9f7ZOMtgKRdZS3%2BQH0BQBhsPQpq2U%2BSguydfnWyPYEL1IeVkRXHxOkgOx720BEiQfQykR5gBdV5K4D3IkHog9aaOcFjC17P8SklGfYI7k2r2BYtQFLmM5FccWGi%2FYO7k4MNBjHfM5BmctYFWMiG5iAHip3mkfc%2BjSeQ6O4beqPXEt4VzZ0Dlb1ZHDxVDhiMGz5EvzlCqLdBYuFuoGFG%2BdXstqApBJNZp7wofzcwdb91MTg5Z9XOTz7qz%2Bsfx%2BTQzq23khNaZM1tLJcOdUwsoMtnEjDWNT4m6iIm%2BJbhNc4ZNzjb7q3DGLC4pq2qJg0kUrJ6UEkTUCfzPvBCjBuHIy39Ei9EBjLVYN6LwhygCoihCHlrugSww1X5zcH7jtMmveg8CzrA85P%2B8qHJyaWcUwlMreyQY6pgHxfjXC5rv1uVY%2FX0kRyHw2865wWm8BoC9ijhv50iczfYGEu4AofR4IzboYIYv2VbXwH5IQSOwfj7A7t4%2BvwMx5wHogLuWTevSIrVrji0BZNFrpPBRw7S4WJKBHmXfkJWUz%2BErIvOGcxijG9El1rf10cPL%2FKmxQ2BUrjdfixcNkMxKP8upsrcchFY6zk8EcM9f86FsvarCgoswtZHJLSZ%2Fnj68Wl00g&X-Amz-Signature=d03a613d90f698c82f680a6264761a6ca9707458aacd6c07cc57446ecbe3d61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WVVX3P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZPv4SpZ45HMgrl5OAmKZqHGf3B4KD51kAJQowNtKpiAiAeEdqLDLAAdVewy1HyX3f7XkrJlKC8y%2FEkPSgHX4QN%2FSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqTtkUrrIX7Gmjc3gKtwDt6F6ND4j3VKB94EbuzEUr13XpXSI3CYRlQ2YxUhDTgE8XssvlnbFORqa1Ll%2FLVqB%2FP2MQpgugNCW666tEc4l4kZry1UcXSjGHRL1MSyLjKniQZ27Vj%2FUzLrYNGY1frlXiuF01FWzJPf8A1UwBORgFI98g2nywNejKHxqAfnDjEUoXfiz7XMaUBTMblRU68%2FfbcKiSvoIwmvGKpevS8Kik%2BMRmxW1xCJ%2Fg7eL0NQJyiqColdfRHFHy9EXmDJkyi5upEprydYQ%2FVM2QGNKrGmsHU6B0L26RIp1OunmQaYsxAhNrV9rtuEAzdNk4q5DQYpVmlDCT3I3tXHhF8eZfx7uwaPI2WLaJh3v4Itv2ShcmbHCVJhOMPzCDhMCLurUFDRy3V7ElpkxN2t8P8LhbaYX%2B4iaE%2FZ0tqx5iMdKfFUZBjOmUbQOALOOpFxI781em%2F2Z%2FhYyWYgqJ9HjV0j5rJCC3%2FZBDMGAWsGywiNOAHmFjEs6tmJgFWAn%2FVnvm7BaEObQ8n40Zg85DOH1qVKJAOlkaDHk4Ei80gmt5RoGKCkP69k19C1jYK7xUOW59saV%2B38HUE4lIvFqJCicJP%2FzTugwoLSjsJ0TTTk4PGMV8C8MOdXxzMkhQb5xFw87scUw7sneyQY6pgGqEt42Qm%2FjK9uqnsbg67eY3B6CZ7DBRutpVqyDKzUk8Izk6I33UkqxaEB3Do1H8T%2F7T8OaSOgiSdAGUmWyca4mcBu4%2BskACFwd39XXltmgpncNq5QnibfkgF9TDAdybHDz6yYaIFuQJmaTLoBGl4bxv2Ujga6vib06G0agVpSpWYa9D5ireWMYbdFez%2BkvlNv%2BfVYR4pSAivARHib51A0ukC8qj3a3&X-Amz-Signature=81930b6e72cc32f26aae99a5c88036af6c4158d4f2be395dc1f27b9fb7b2691f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

