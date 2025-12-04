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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRGWXM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDy%2BOA5l1o%2F%2Bvc16jMn7lXmUAilbpxwHU62IjtuVPClQAIhAPxG%2FzSkEDyUvsx9gnIxQPfcGbS2%2BLa8zBjloT%2Fs5icOKv8DCEgQABoMNjM3NDIzMTgzODA1IgyhjvvCPpA%2Bp00n%2Fesq3ANlNuDuQlGZ04tG7p3hO4SLrRQ1SxM8uwRb7qzbk5akAhYBvIbc8ZOeRI6RthWL8JrCqZAtFsXE2fl6SmQ6PR%2FM0Xnf%2BAD1NyWs%2FHjeBxKAqjP%2FC6SaX4TcjkdwjAKxo02bRf5vxT5JSwfR2aR0gQbsGAeUczggAnbg2Bt0gd%2FFpkcw%2FfrBOQMs6Gq9H8r9rz3VOpUoH9GkaYarhpMTINoeULLVs%2FmTLJb1HXudYHq2XY4pwhygA5deE7tdb7mZcIYW0AfeJ2hbscuEWkutwkvBxRCEWGUnPLLGzXDDVfNinVHZ10ro8FdBN08NCcbLqbPEKfzfq%2FrRQclScpFnp7QWr3E9U84dLXBsS3u5pzkQMB773uw9z%2BVhV9JebiaERtMvu6YX%2BFCyiv1iTkquE36kttsDtk1bGZn%2B2bctGWgM1tXzXsEX9DbrnsSXScMvVhBP%2BV7b6CEY9h%2FZEoyWKwFapY%2FXyVzClB6JdUPKzXEPHMrc%2Be4jmsDuPBCp2tC61XbqgLLDUW8TMMs9nvVVYA1ubOvX7PwAY8P835GGfA0i6RJf%2BR%2BgPUo8LExHot83oZ9J%2FyAzWsVOPkzvw6zdA9EB%2Bn%2BS6mEfHf7LfIQKcw6JTVZbjPeLAWK3xsaO8jCKv8bJBjqkAcZE9QW91yWZWk3M8JT7BnTFuGENM22iQNtOUBDh8uFIq760AmWdK3Fgy0CycKBlrRlzwVygAboqng%2FWYIyAgwi83Iv2Yb0JRqwn8O9VNJpuLuKaWuDMEtJqw4B%2FLZ3nHvG3A4lF%2BAsPC3BOj8Hh4oaGnEf60Q2peY%2F35PqJ%2FHPklXOUvTtjXSpaX6WvLLBy0T8QQmXD%2BJb41D3lgZNvD%2Bc0KySq&X-Amz-Signature=116b03baed855d5c8a4bdc4ed3d7cb78f69d4037510cdb813b2996795abf3502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWPMB27%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDQlM1%2BY%2FunSw4ndQ20BXsQPQhNm0rIr%2FKqqrpJ%2Bg6CuwIhANfx2y%2Fe0gY3NaPfOBDXIVCZAxfmns%2BM12vrXFQzAwxxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw7HP1YYqbXM%2F7nJ3Uq3ANaHjN8r0Y8p6KpwD4%2BahXEhxKihgLcsxDf2GgiT7Nlluc44gra0LIKCGR%2FY5HGhQ8bh6oA2JGlFqiw0EkMhHw0YczOg80S1oxyYKuHalLTeWOSrrTBHHUvfNeHkk8vHDX1y5LFBNaoBu99Bfgr4f1uqSjkB39xupZRNYe2MPbIKVFeW%2FIgHMTMJ%2BoCZgiEujFcnkSzDYSDfTqVoGjHObmeGN5xmBa19re6yFs1UqWPvnVBk4qhctuy%2FfmzgPh9pOqTqzfZ4WlszNo0bswZ3nntxEQkyzBp%2B8N1%2BQBq4vx0V6T14TOfdZUI%2Fmu937hQj6%2BKmtkOy4b0fkuqlpt4I4kK0OEMroHNfmM%2BIiOi2upNkclASNRmVj%2BqvhsO3IXhGGvR02hiJz9i2kcJsTMVKdFd75nQvj4QinSz4Vs0mambE%2BtDz8eFmi79XtcrNTP50cIJ7wrQgG92nfmCgDvXJPOZG4MtGKmJN30O%2FXq3EHL%2BDTiRPdcDlORv9C392V7jQoZvdtiOv4Cwyyk6JDqG1JphF7at2RP1cWvg1XHbi8d1%2Funyw%2F0sOJiiQTxBbKziwKbHAasu%2BUF1U02uQTvpckGHQJtPOsLjorGxD4QrnHjkfRMT8JW9LtietyzL7zCMv8bJBjqkAYb64nYgBVs6YALvGIsX41dyiEerM%2FtpyipqEAoReRuQG4iZpi1Ks7IMjknV%2FPWxW6bgVWlccKdLIK0f4TVOPxLzmpP%2Bvq%2BKa%2FvUQl0rBkYGtxdLYmW0lUb5aQCqEYONrcMQb%2FHkkeyeT54MgyIUuwrLtJLNgWbq9hTCKLgEx5pwg3Z7Kv%2B%2F5ojTejT86LZt0uwtv0JYF29dlXMgcGDGp1iwUia5&X-Amz-Signature=614f4e77ad9a8e726efdac84fdc6a781c87763f85e761e4928206cb33ecd475c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

