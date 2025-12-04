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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDHSSX3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDe8wM7xRfIGqFsXjxDZoEH%2FoUJxkDGAKrdFMxLFW1WfQIhAMk3k1iRfubWKogMN2CNXJ4tl5k%2FJfQ%2FK6egsamQsRgoKv8DCDkQABoMNjM3NDIzMTgzODA1IgwAhaNfscYL8hTPHRUq3ANwLCY8z6MbVuHxM%2Fp6wUVFxCpzQuUFNzGSg98wRQoM4HejsRRcwyIxuPC8mJfIFLcLI%2F1SinQyzlXgdE4U5L3Gr%2Fm6uf0wcQBW%2BDbDbJCUqYQ47Amo61qOMNlHYEljBk8Ypu5%2BMHFYjOCp7%2FQMcPelvid6yUkXTFU0VW0ccZIgBCmhAfgS0OUD6%2BdZqFYvJUQczNvHdeHnKUQc2XhCTaYj9vK27OJ3ujX4QaMg1dS10%2BRQzOoRQQfhKfrbA9Wx7wpzA8mzqPB3bfLK3AjnYEZWqEey6ljhqHMnhFVEgDWSf%2BGhnTA71ys12gY6kIRzvlWmtI7yRT3eiWK2wg0JrI%2FvLTcCVZhd78Qrh1hiPjmieHwL1JMcDnfSSIXDH3%2BoRFAFdldfBPgLA9SFlnDPqMc0RI3yTtwVJ1fEOIqYzSEUIsSL423KXisMJpaUxk6Fn3Aq3YMC%2FHNkVZmYR0AhDCrMbKVspegOTvK8NqjJzD9J3thf8MGdDdbP%2BL8G%2BLA%2BGwv6xT8m0c1ArKhD5Z%2FSVCPSt7juWL5zf0M0uE%2BKsMSRxJ%2FHqgMmKB%2BF%2BVjqmaLBbcTSLUu33V0zceQu%2FvoFj697jgnXh8J2L1txOaSzEUcNYIRhcRsK0EWYhlrjnTCElcPJBjqkAciinMr2C3w9Bk9CF96R3ogBt7tiu2STRFDqpFaiLoe8Ra1BF78%2F%2Ff7Kz2TDp69Nw%2Bj86BO5faeuP668wYZsDHSVYYU02IxIWS5mq4Fb0eeRLZecP9L7KJF9uQYxUVj12Ux9YVOoHLljj8IfGzcIJ6wle0atlmzpk2c%2Fw84Fsa1S1k0XoG6d5Z%2BUpAXxYPalvCXk2EBRQyRTVHwHm6Rq%2BubKA7SM&X-Amz-Signature=2ca71d59db6b27b0096a8e83acc23a75a4d0d6dfab9689727efdb4e1bfe6b1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXN4IS2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDdW5HX9rfonW%2FuvQfhKiUn5kFtznVWlJMfriPm9eMmEQIgMcrqiieg6jUCce53tEJIRZeWAxwEgYvqsj%2B345CWR%2Bcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAtviecYPgjNzNAt1ircAzrandmuzNoM5sIyEkeyW%2ByTHQIVP%2FpDocGR6uByl66DqQDP3b1ffPG%2BVoPxm3eaN7QklCwskqCndqLFvd9hXXANlYfIyvrN1mHLoTrd7G9unsfsoQPnAtFZuWvOqUbbwqhj7T2e6WRxawn5J4fN3VDhvwQj9EXz8XX5NP2TSBbJ7mmwXz3vH6Cvb%2F9Y7GN4sFKRNqEQ%2B%2BeowoigNeCrXeBepz9J24WxfVY2fbzBrJJlsCFhjSd%2FpZnV2ReZEYzAyFfHdnxIDjjrbOFMzatx6f07ph5GDTFXOyHLdqeQvWe%2FFK0fsJEAx1IU6naZJm2m%2BlRqJWF8P2PumpjfAbdkg5AzDZilFHW3Wt4KGqBxs8lLnl6Xv%2FsdzUy0NAJwpR2%2FP5%2F2qlu6UAskyLntZvqCvm9WS8Y4nkpb8If03HxeANA%2FgOLeR0byYNw8yl1WOz0RUfnymLiGrVnARSWWqtxM46uv8aahw1nUyBLmFdC4rT7yfSvYBIYQBSvMGKfAK%2B4HpJvwMgo7PO0K9UD45nLvzJ6AkqoPNIlYK77KRXBVuBZhD0BxfzRj9bMhFRHqpz4Zp91icT7rJ9rge%2FhNL0PhSnvSNbrOFXQ5QaBQu82B7UNGJMCC%2B5Ne38DI2mE7MMiUw8kGOqUBu3ujSq6ArsdshERhWANaRSCwZa0UyKN%2FUBOObZRicT0J%2FKKKiTAYVogg%2BbH3E7VyBB9NlxQ%2F%2BaONarxCd2AM3coV7ipck6dOpzpmLBFLUgxN0bnvzHOndoB%2F%2B%2FazyD9sNW2p2RErO4JB2NX0%2FNbfwFK4hAty%2FU6PgnZ8uFidRF%2FAzKpVWjB8CqCtdDTsxeRdqrnHIdTJ8DTlbyUdBucahyc9PscL&X-Amz-Signature=ff441fccafdb780cdf30e401389daca877fc4cc64c5ca673d34dd0fb8dd71ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

