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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMH5BAG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGJROU4Pxi4KY7AvAcnBuk6PgtHiWIwILSUS5ThzcJh0AiEAtUPU4gvMQL0qhnrgT4DAC9XfXKHHNK%2FivqnMlAVNVtMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO5r55NY0gGql3yWtyrcA4mLJ5svlxfG%2FKNzOpeKV%2BLg7ZIomIh6lqoSqUGRQLQkUhL%2F7dRj8eG3DH6ERGdV%2F1WoifpCvALiqPOIgWtRjNfmpENec6bq7uskGW8BONSkK4Hcv9%2BTihXo9O2%2FBS%2F1O5g2Rho2q9Nj2%2BRIlCqmTshvlRUYIjSBwpsPbYwTELvxY0jfqW6KGlFL8X3lGoLoGw1VKVOq3hlsJ46%2BRtgNqfyvEcB1GIpTfe30DzCC3qvqyTI%2FAZjIdbzUYwfkeVzcbMybGLoqYXIkALSbXx14Z55RbnM%2BWzXMO%2FGTAp6kEgs2ajcyGej3kaEssYdJptiZI%2FNx%2FZ3faLHNN5rH5ta%2F%2BZ1nla7zXgko%2FUpN0pKBfBj9x5EYCwCKK2lbjTHyIBBvntQ56ZqizD%2B66PAdq6pqsZVvoJJm84apbfC0XO0tT2zKj5qPRHoUjOlRZLs9uRWU0EByYV%2FYoUORAAj%2FbKXHiAwwbCw0ueIJEEE%2F%2F5BY%2FIsEl5%2BKY4hhk17MSEgcRtY1LpTL8eQSd73I9rxHMiKw0tFh6lHYSz3OXZTiedeV4aL44le1MXQdyWpz6II7gtK78i3KHVCU9cD5lrJwJwpQ9Qs0PKqqAkybZaUMK7WWcD3trW%2FM2LIUSqrhfZ7jMOL3wskGOqUBwnBOzn%2BaWIHT33XkNahjMc8DBiC75MIjLNH2fmUjxy%2FZXr5Ih3n%2BOROesa32B2SgRXixg2yv9WiAi5GDXLuMX4RhusfpPDjxWk1MAkneyELAhqsnve3gwtQ90hHGJKA8zq%2BIptF5QaijWkLgVWnDGF377RFu15U9xRlP2mvsFFaMbVMjy6noamUp%2F0NcNHcZ1pmY8BM4iPo4l5Sn8c7qGWZlqX6L&X-Amz-Signature=76eb961392549f892e9177f05780205885d3f0631c55c21e6d0b97a2c997d8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WWWKDD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD5YHLil0IWzZynSBqA3ZHvpGs%2Bckqb2eD85DfgOPd7QQIgAtNSXxAVAE%2F4lCwAbZbWfj%2FkOuDmgv6jf4ilq13H3dkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDB9PEwX3J%2FxeSJubgCrcA3wlKWuZpWHbW5s3P1XK5IcYfdEC5jNlr5ol8HHkYnITvjA0tendlzXA62oUfRBQIyzS6Mx8wQBO5vRkBUC0IfkVNkG0kk7O7R1uBwfP%2Ff3uKWGRr9jeDbsHmK3MzokbQw1gjEzSNO9rAeYVNuTUUFdmsdR18%2B6uSI1FLp%2Flxpwz%2FbvIZPudrrzNkmhysxVFJpIHqE%2BVyRr2fTL8G6G9oDKUQQdeFpmV4i%2Fp38z5qCP1nt236RZ7ugWSF767hyXKWS6KNyPbsv%2FQ%2BmV%2Bba%2FrP3MCQVWvL0CJFlw1O9LB%2BVW1Dzy%2Fdm8nu2vSmip17VPp%2BgrXTcnM3Q4TjzT%2FW%2FtOn9NRTotr6udBn1a1XHJ7lWbyGjf%2BYsZngiSMoHfEJtODGO3wW27Z49%2FXdeffuJHaaleQduOja9h5r8yhuSMne29Pe5%2BVZ3I2iwdhppf%2F0clNux%2FsMIT9iJWHPEUF2jg2JveApkm3H4s8pvm1yS%2FZPnW9Sla3pOME%2F8C12UwaXC%2FXaaMdcsh1XFskDfzrxdLD04X01z66uR9jBy1p0TLiooqvxrgnK523pTJ5dw2MpZ8n5mHPdXl9priAobL%2FzwpN11xwdHoNZymV21631Q4fRZEw1IgikQYVJsRjEEoJMPP4wskGOqUBw1Cvm6xCdK9OWDEY89irbK7B6Qbma9WgBxqfesbQRwCGts5WwMO889e%2BaPgwLAYHv%2FMj7Uzf%2BNJ%2FxtErX1J6Umuo%2FnC9s0iSu1fEHHzcGrCkggBspOIz%2B0qSak1B8gQ2gpDNInyRA8jteYnDOoPjUUCGBW%2B756nH3URiwM3EuFuHl%2BH6JNh83LybMaU8mWos9JFMVURM%2FFAnH7Iue91Df9goZUxZ&X-Amz-Signature=6ec25ff8c6d71a5b9f87e08a78371cdabb0ff59d1904bb070a78a2298afa9b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

