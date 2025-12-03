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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBXBU24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDv77fjIFni1A6GxaTsY%2B%2BLonSgUU9rBa0Wng0G67H3qAiBsZaDfyQq2NgZLkqh0sj05HUUWEPwSeYIcQKk%2BWk0o%2FCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyR6pYPUb43WJe2hXKtwDGhegLES2hUkBhiftd%2FcnqEU5SPpjLxcWEKVVHklsIV5bv7ikbTE2NNTZe8ogqfzGejz4bqcNCr9Peao1lxEktnGvg4w0Gic029ZqWDAJLZGjr6JlRTZFgzZSsnOZIL4pHGlgiyMYYdjQgNuqXBcHpJpSis2AVeu597JMHOwcPPhFLV586O5AzhruYw%2BGYg6cK0Kv6R4p3wG1oXUGDjTpghmOtzf%2BUEbkhJcqNFhq%2BEuGfPjMjr6XzLr6cnXNoJsa1b43GZAVWySqKHmfCnzjzw9kGuLzPu1Jl2xkyiztA7njgcSUc57G5Z%2Bi8rqcG5btR6MSJoVk%2BxLEStuF0q33FjIOX9pEr0GNe0MHqXI8O5ecqMUjC%2BjaaTGwlJKsnHhdZMd3I0w2YNN6Qf3DTXpcqO4v8o5z1ZP1sgDNAvAtz26zX0qpeANiERqLkLNulCsK3t%2Fe79oVr9kz1H1sl9SY%2FXLq7JPTL6vyKFWog%2FLEojj5orXuvKSkZBxdwuJLgHao4Wqd5PUc89%2BVj6CRw%2B%2FLzhAOy2TgkwhJHoKoONI%2FIj34cL9WY9ORU7XmNqjlqCIL10XWhEVyYjuSfMNy4faFRkloP%2B8wVj%2BBMbl6EACkQKlNTrzutZkYT5ARvr4wq5a%2ByQY6pgEw96563qvSP2HbSAILFGe63k1uUGQTtK3eN8ajCI3Rl9SoLNw7Z6DuiKKrkZb1%2B44V065Z5wYMNaQCgsbt5ztLjl539QfO%2BpoSzN4AqXghunWgZQpQsIJG9PImRofKeX%2ByDa6XD66ZIvZ1VynM1MRQDsnURLp6nAoX1CH5qs7qXWvKWnve1M5YE0fCrqAb3IDMNTAPm%2FLFTf0Z1xpvjZMYTBgF05ks&X-Amz-Signature=ee1be7eec8ec2f158c11abb7de0f832853dcd62e5b66201e5f4eeeb60a41ea2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRFCL7J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBodjccw4GHiWedfFM0icBCfWWks6ms64D9MOHc9c2HjAiEA9JPx%2F3hJIpMZCDKJV1NFJTpr2IBga32A1AMvpIjnnfkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBUm7M%2FtIQItQbcacSrcA49wod4d7yqY7aJP%2F7uTfsz31sbRSjY0OVTEgUtB7F9755gZ8i246UEj9QjFLVLVS2Hwa9ARWK3LdcYq5dDsDVBlX%2BarTfuTL65E2Px7aZ9poYkL8DLXqprFzL1Ebbf0Us%2F2acZ82gyCGqvHlODVTiceew%2F%2BmO8NX1Bw3WuPMFK6Gl3mPrjBwYnFcTCfSk1K6%2FSBhlkm0qwQxhOwNFb4uzDL0A97Lqt362bdlh3IaHcZrImlCs0j16tuwh1Dz7NQuBFYlFw70nh%2BKW%2B7w9s%2BINx4okD9HK9evQoDkITwehsbB9LAcPJKwdBNQevBezA4Ex0v4c7GSxvsbr0UpuFIyjhJaZn3ChVoYkDdxjUOt%2Fj%2F%2FJQI0mGQuw0dPpl9a83bBbkdpDeoOmVT7xGSFkB55DKWTiiCq34Ky6Ss%2BmxP1vhsTA9qReu2Ip%2FdUd5wcHdhnQbU5Ji7gsyvkwwqSuzW5nj8NeQHXBVwYLySIlPyMetwiW6RF5GG7TOmqfdGtBJQW0SoYnXwbqHZ0D9y8pKf71m79BTtFUuCPZWkbfDaNyHwcZMwRMI0ovpPVvEzSEBr1IWRVUISonpzE%2FGopBIyPJisHcKdv3OXykL4MoZ1AS4O4DkvueJRllbAz%2FU4MNqUvskGOqUBzc%2F8ODbKYprIeLBXQqipecetR2TwzcFpd1Ja97s4oT6H3aIZCNJtutfU4Q0V4s33WEO5xvT7aYFDxWpkNft6SLZfzTZbxHbqGWbSne0bQxs4sPfrYpjOVkEMJM8%2FBRW5A2GB1Q8fcrsg3O1Ew%2F0XjiS%2FVNIiEjXvYFyISpzfMF4VlhiirbSmTJiy%2F%2Ba4ey3PiU12DjV6EeoIim6zHjYqVzLmbgxW&X-Amz-Signature=599b72aa1b5791ad7b7001e31082de30f128094fbf440f5d7cd3e17159a3ea8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

