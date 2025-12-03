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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZD4YOBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDmhPE18RtvokL2dCcWEHuLWVPJljT0WPn8FBgujxxeAQIgSKLXjxA3kNZBBzGLvTXQCLNuqTqtUUInd1RB1Zt82L4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH8BwEKqy6b3DFKsyircA9ZIrkuhkL8Lac9tMQ%2BgH%2B6%2BOwgPHWHp3mSsI%2BTg8Lg18fi31Ywt9r6U2lus2tv1SDwv6h70yH4QTXwQ9jOnZCQkHzqIHYOlCbS%2FD3cXUuz4aT7iWYfWhMMJxYrmm%2BIr7CMrJTztgtVftez61sZErVqEWQDMxS6yCluvAizwj9PD1BeraNfujQZmlh6R1a%2Fl9G%2B3nElmRU78HNabCEGvTzCtOmSFG%2FuKEK1VuvJscetkR7N5PMrRUEMRJ2GHXWC52pfgZVDRT8kO63aZVY%2FVQMlfzGx%2B2LVN4%2Fv7g%2FRvoNHsn6UyAy%2FZr3jeOg8WB2bihBdwx%2FK9d6RKBwCdMOkD6jwW2Rsw4LuFsG2xMtR7kJAnI6PiEHl5HAsiUX2k25tfsOP2frpHKy8aBQt7kdf6jGJ2K1Tdv9TzhbIMbWDtfug6YjeWYnWy%2Bi74fiGLBDS4UgF3yvhR502jj4Z2qZ5wVEy3PQU3%2FdQRjAwLRIzHRT12wqUI%2BbuE9D8f%2B9SRQFOcsaslUDirmmQXm3PYbMWr6Px6SBfOXJFA0iEddlKGmNnjgCI2N8pGO3bYlY1SUUkSTi2zNPqjPPzqhTuYB45sYqNPrmgy1IyLLA5%2B3SX7Rg21tmciKKXORr%2BUKoa8MJuav8kGOqUB9hbqUb%2BzG0A83M%2Fbe5lGI8Tsli77t6f9%2F882AhP1e2ilir9nPce5%2FE%2FlMljjSzL323sEG5YJjFLx95dpy10bsLWFgKwSg%2FXeny%2B7%2BApQELSLJLO%2FG09q%2BgOAMp6DzwSaHBP17n50IzMlRz4h4wwWr9aVQk%2BWNtCyEDmzjXPgyeEl7XPI183QzPDRP%2FlfFO2PQzyY33uc3pQIhCDqUTKkwLu4Ws5x&X-Amz-Signature=37a4462c7830ebe6556e4a2157efbdf577e8d66bc0be086859e46c1e1240fb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUECWIZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD9IrYvLpIc8mVPOEZFMAQKRcN0yLQjDkUK5mPZ9%2FzhsgIgeexJmN8716G73bdv1qiJyju4OAYOL82AROuDFCneyasq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBJKCQkewpey4%2Bc7tCrcA20inQGzvZCLL0RBvyV9qKGu8s8FwngXROeqsbcZR0Wpb67ZGU8QJe2IP6Cv2%2FGz%2Fsi5fw7vEhu36e%2F%2F0HMz19g8XkAlNPgLNwFHp2xmgLgtcuk%2Be9xMqjYqLXIaYtGcKTTxM9UzzxxvRlCon%2F%2BGXIKN4GuZ%2FypXPgOjsgHPLy7JIvMsNfvRanytu80NZBrHBXlaCosG7rJWNjA%2BDXKpfmDgzHg5uEtgRha0AqQH%2BgvZiYRw7xvY9tVAeIImlqNx5V7TVk9OqxGd0NlTa6WNLurVtGZ2jjZExyVi0e4q01z2qRQ%2BaX65hcI3SV%2F9o1b8LoUEzvdOQ2n1A0OXVwIM1d5m9S5xMXgUJDg5HG4jfjubaJ7CVrB1W4dYZujHdEEP9CxlpddlIOkKLUUJoIHIvnozZYxcIYc0iO%2FPI85Wrqz%2BUKqDJv3oos78Q4jHmL%2FurPnWcBQxXCfsoMdNnboj2MBVy5njDNAdBF4LEaoFSdSOW3bGXYtK5iU4KezYQrvX5kZwiBKnRnAsY9oEEqi9xPsC6ukpYg3gT150sVhqyxVRuOXcMwaGGlscXLgltoL%2FaoiF%2BNWLMvW422Mjc9J69h2Pc%2Fqbvr0AnKoOB2dZKKEVy9tvlIlVpPZTQvJKMI2av8kGOqUBXVkKo%2FjGFFCTVpCyX4P61481jN7pO%2F3NdATe8zHi2CW9FS8WwfgoZZ6XoT1NfQpvHktEsTWytMkQkPtmpd%2BawH05Nvs%2BvKtZXA280Wo5dCFDta0MK79KkoOETXHgdVvbLyCJQ4qvp6rr0IuCnRSM9jvwMnuFEfpc0zaEs3ZH7kIcWhZOb72euf3%2FHjg2p4BDRW614UpqCgtonekoJ63XwMBPFnBI&X-Amz-Signature=99f234d3cefc1f7e56c4316d11cd0b059af01fb6c5130689530c96f6739e2f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

