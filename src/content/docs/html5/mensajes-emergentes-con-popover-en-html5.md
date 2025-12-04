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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L4SFHCI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBKO76BpTrF04p8EyBUZMOY%2F%2Bc1RyDyWzqDmtpVXX1p0AiBVuQoF6rZh%2Bv6tPM6voX3OUilc1EJSa02njAqx4oMZ9yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7t2sJ1vLILwuuFrLKtwDLdoAOHBnsT%2BVnIo6SLs%2FHl7w9WSVlCfdk3aJOuDnlDg%2BXvDsugbqw%2BPk34iUUmm%2FreBKXPmxTUyN7TBNPBmQ1L17lfDyi8b04T%2Bm0fTIbm574KHBz%2BFdDjQv%2FFsZvo9lMhaeZfrM1lkPaMRrDjNazqPQ5df3zzgsuOWxWYXDGeXxf67WvllbLPyJMfTRhflM9sDshFCyicGP4I9pnGqws3k04AuZB06pAwd1Reoy5u8Zt52D9S5Q%2B4scYwyCt9NY6NnP8z4w8WodU%2FyPUMmDtRXTrABf6QESJrtkqcIc83at%2FDYWaWTkNX1zTwaVpVftZ4w92QtOw%2FEGkCDIC6nRNxrT0CH4FhlCzaX%2BdEvkv3WFzYXlUvXKqqzIoWwv5NVu8C18SDRoBgk3uuYu6th2j%2FB66CEmy68j%2BY1WpVteAbJT9zHJ2ZwAUaP%2Bf9JBRzdULH7m0FaYPCgEo%2B85G35539sweSbZ5sKRN2PCCQL8eOE8ESk5a9bDmbzY6%2BByij6wbhNRD4aJw0VRWI1Jxoa%2BbdJ9sjZSozMJqLOWjfCirHClo4MyHdj9kSGKznQa1HD9aEN9IBr4w0nD4ElUOwlQtJHixHHSwTiEVJzfvy%2FKQNhCu2YGvdixea3auQYwo67EyQY6pgEHxQ7Q93lB8ISlY6rSwqYzwD45pVz9p%2BRicgwMZQOxc7Fbfn04hgb%2FWfZeLbAYnCM5rrHEoomKhswwmBEpLdi0VuR6CnXJFFWYWr3BZpQH91IMN3Xu2%2F3GrUIlCp4%2B0FufWaVRSz1PtGaNpQcaYN8jm%2Bfrt4o61NBaN%2BBORX9Db7j8gMmzEQjLGqRgAEfJd4FwEPaDvupEFcdV4lOGtztSIm7hmOQZ&X-Amz-Signature=9593fe1c2ff3dd236d31a5a926ca9a66194e8f4606bb512b6fe376a2ed5f530a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAFPMPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCKhz6E7Qok5%2BjcQkSJNlUCFRWcqal4nLM0c7OxRuyOBwIhAIkWac%2FuXyG0magi%2BUkI8zPYFr1sZ8eKAi8VsAJZszMVKv8DCD4QABoMNjM3NDIzMTgzODA1Igwp5yekDeYyYmQ5qb0q3AOwzszc05bXMRbYEKrW5xjEgJSPa9u4MuAI80xBPuRPudK9iDXKCbPbdqLQKjc644uSpVIGSjMYZtBYZmQA7Qa3z9PmAGMLGO9aogXMxACs4RPqtPbQIMu3EzJDLIZyTUF9ng2F4hZHvntyms038OB3fbwWP79Xb4iLO5uhPOyMX8M7nKMivHNAeRllPqkUKbQqQO8fEkYVyNMBikzhdMJYFxUNSwLKHe67CtjsVuzvpw8jb7o5Woyhtp3oK6qyGgSQ6EuweK6Ez6fpTA31H%2BCVUELi7l%2FyamC675LPnOsOrrkU0n7QChy8YzFyY2%2ByK3OH2nG3NwF0czi7X%2BDvoB9PGAOBMrEnrrYtTbApAQPhFOiMycrHPR6ZLZc44xq4v4EHMScWhTrElrvRyG4uK405EZx6uT%2FlFIxxBABT6HyJDJcxnLJtKntZEuAmNWwWWOuYO4RcjRX3t7lY%2BV6Di22F0W8FXtrtrZYYAmDXpFdbbQGGWzaG45wauuMr25hF09kTw%2FQBQuJodp1zKzULKmkryO8YcmrS2HxIORxamuaTVQ0BsqJTvzKjsYpZ8jD5OULiVZSfOtlubHY%2BSWTNihIzLAq0pffQ52IPbI3XIaHWJs9x6%2BQ%2BdG2mRda9dzDMrsTJBjqkAUegd4%2B77mopDLeoTjxHPf00lrOzwABGxwxSd028%2BooN7f2CLkCy5serg%2BY3j8IwVGhM73PlHpvuPTCTQJlths%2FvGLdD4VC1mM%2B9qI7q0%2FXHBOXWuB%2BLUEqAex17D72tf117bUMB8XRbGQ%2FEMMtaSEkh1Hhrx4WObBuEWdOJ6VleuZE%2F02sgg3x4LfQdFHAx80VEsB%2F3ZUyVN0QF6pfpcczyoFfo&X-Amz-Signature=cabcd67c6ad0472337da63974ad9406e184ee571cff8ca028fee3a7072dc5fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

