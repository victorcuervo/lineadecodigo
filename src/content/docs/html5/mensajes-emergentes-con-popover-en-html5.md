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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z433TNJT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWYjX9cQBvgwmOdnjc4Wdk9kXWN7VkqsmSvxxpUuu%2BpwIhAJw0Tpd%2Bz47kNfWdehvwdtIcFWE3Fr0mXbagp0tleKkDKv8DCHIQABoMNjM3NDIzMTgzODA1IgzbPn5qV9j8rAST0i8q3AMoucGMjVVNRLNstxG8uKwlSDulHc8fFPFq2vKeeJJndUQXLPowzxyE7eleClhYn4Vp9g6dY1KzUYy%2BNg6Vzfp9Dg5lvYj6wIpKMPNOo27GgN2q0NEDQv6m1046wpAaewVyDY%2FwBeg8QWgVWHw%2FhV3HXl9XzsBipWcDwXUWEwr9MQGUteCfqJd9u%2FHP%2BQ8a35hsK97wDvWQohnwfdpS0KzYFQpsYwps31N3kf4J6PzkZEVkIcgB3HQP8zEsF8W3fDNomb6h8SQxp1UC5yCGs6hG0oLSg91LSWi7pP8g2O8ymZiS24WW%2B85keqOft%2BhZqTRWvbEPcxcA8a2W4MDQEbMZOXAbrB%2BscgliS3n%2BZpr9Q%2BfKd%2FiVwwopXGydD0TrsZMUbsF7WM1DuoQnkAbtcMngRQe9zzxfOJWceGzQZPg7ZSTf0XNHY%2FWlDGKDMO8pur1sO6M%2BagW1kmMAiP2gvU5a8BqlZDMtT4xBslbHMyPewiLM3%2BMccTCshVxRheejnGblk1SujbfMxFnFeL%2FynVOqV8d4ESno9lDdtP18WPaflBE3v%2FdCPt%2F4j4CD3bqTRAusYd62EdPjwKi02gTQSBqmBmdpk9IVUpfksAHh%2FwZ5L%2F7Jc2TMT%2Bz0LRNNSTCX68%2FJBjqkAeo5gZiZxnf7Nm4bnrE%2F04UAgUTsKjWQRHXEDUldij%2FdpOjDQBCkMIzGU3BWrD4umHcU4fAwfA%2Bz1ZBiwaiqy2T9txTIaYMbjE2r0RxPe85X1Jx1m4gDJ0uHYXp5gFfrQoML1okD%2B40tI0vnKJ0HiGhjHAidIc27Wg1tBsGSBSzR87804yGMQMA7pbdYhM4Ev0dekpTEhqn%2BBM5prhZs9zffM69s&X-Amz-Signature=93d1ce81d9a4dbe7e147814f743bb3424d30890b198ed1771c27d6ab8e4d3da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655EREPX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk0TxybOdiZoDUKahFdzh2XFmxCsV74CsB17LhAaXmjAiB2ozRl1r38Hy3rz5yS2ag3qo1YQuL8vvdSMKdHykgIbSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM18r6zxatjuZEkAv3KtwDm6WDtHidPcHZOFmKTzBdYnqO9bnTCl28%2BVmteEsKFE%2FMw2KIDoUW7NtrQumWiYBV4LAO3LZ7nAVe9nhZnmkL2Guqp8clmmAwa9iYLqlZiZqtpIO5YttVqQWOfWeExvSjFKRVNW6Hy47Qtqyvg53nnjAZzDuwHNw0b%2BG1%2BS8fApJ24sYhqG2FCSkk3%2FrhhB19%2BF4KPPpgLL25ODC%2BLLWLBguHSnDGPqORSnjP9q1IDqgwrJuZQHjLphD9Wih3XIQWoBBr5sZD3Nt5SyDwVqvttCeRY%2FuySsalbA8iPJWDf6pwRy9sBBdiCn5aIy6F4Yfu0W92SrvreRiVp8lj2G0kyw6qvUXmfeRjoyus9qrqcEE5%2BTguYEWpWMdOrcCxmMPQUHCOUuXtrJrVQk60r%2Bv1hy7AnRL%2BB25P25BxbsIEVv2SWW87SsR8nF%2F1e8F%2FFTEN0eAB1gYtEwyuuLkwn9Oxfs1i0E1Dq3t0FQ0jLnBvpeXzWEZpIxG8uwbvGmPT5y4lVsWpfQxjBKWJaRrbALhvKlynXsVDXqwQqu14Ujj8iAvc5P3eaRGcmW9FZQb4Mf8RpfmsBa1kOAMpv%2FVgMv2VDy9o8nohMAgr%2FyLZjMF%2BAVV03YX8yCHbBjrIWZYw9evPyQY6pgFG%2BKZpu9kr9Z7njgxZ%2Fddb%2FhaoglVA%2B%2F2UCeFJBVj4Px1FOFI%2BDh2lG9xpqCLV%2Ff4g0tzPCPM1Fu8QoU4lqknxI%2Fzo3NRmM8TpcM8L9EE9hVIOBiP2E7jhiXKxfLWYFqrwEs%2FqPpkqu2mplLPGlXLeg%2BgipwrUgR%2Fs0VUu0Qaw4TYtN2ElV3brsGE1JJBAzLGZNxv0lMzzWN3rx1HJ3fU0mh35%2F2GZ&X-Amz-Signature=42ecaf8dc15fff72b44d8ffc7b0d6bbefd171827cc1e59ac06552d18e32fab43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

