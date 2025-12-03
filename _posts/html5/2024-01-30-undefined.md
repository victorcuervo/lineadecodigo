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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGEKGIH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2BpOHBpsCUw30h23vz5%2FHkK6%2BDx1VIr5CHFlddQpUrqAIhAITmPbipcxR3xu2AAgaKCbVGLJ37NZWVP%2FQT48acvwMiKv8DCCwQABoMNjM3NDIzMTgzODA1Igy7XjVy%2FWq0dAklHgIq3AN2q0M7KpNK69l9zbP2cBcnApc%2BjbuFEWLzIZQGM04EDnogmMmvu3g9kB7QrV0K7phg0dZhCLYzpZ2bXfaAp%2B4NbHlcE9dEx7BgqHpLp%2B6H6jXJEtvuSBCNnBxA1I2JptSvd3cdOYY9l8ryyUFBgRneyPe3WropRfjB27tNIxe6Z7PfLudXOVvqsoJ9G7olio02awboHcbTMy0etvqf8o%2Buwqg35xfMHsWmKmhC1hnSpivaSeZVPVNkqitRMnKzNMEKDLZtooiyU%2BnXRtF%2FNY3jCnv2Pr0PLQunNSe1EuHFugq6al2mDxiiEnjH%2B%2FpjQ1nqVb48VhxJ6AZPkLWEZvx6qNKDaIIXlpCbyKxvO32FXz7LT8d8GGwn93MW18rBt9eRFj5YrJtqrnvGcjsn9FWia420rKbbzeAx3nSegb0PfC3FiqxpSN2ni2ysJ3XutFuvMUxz5w3LHceO7pJ%2BoFGSuO%2B5xv7Ln%2Bbwk2gO2ighAM3gRfq6BjBS2lvo2vIPjCcmeKe%2BbH26%2BeSJSqqeZFqTDq%2FXKUq3XSMyw0cL6NXg9QpkWktl%2BbuFYZ2Vynahvjka%2FaGTgsg2CxqcfWGhkMTD6esgc0z2pmoY8G6iYqOJ5mY1TecN4UeA5wwoeTDsrcDJBjqkAZA76TXTnzx9B%2Bo6ds6oysCbY5nPv7n%2BawztE7WlaYFjlRJdjQMSSXJNtnSyPWiwy%2B2I0YtrB1aXlYytvjuVp2ra8Okx6ZImtGbTRJOf6%2FuHVvyyBa8h3VpBAgdMZD7u%2BMdmcfcyyGG2835N3JCsI4lE%2BVAZ1eL3dBFSOFrhcp9RExsW%2BM7sxxZrkCJrYo9VSrJ0rA0H1kAlO16KLX4aR1keQYBx&X-Amz-Signature=3f942b31c8f4156f16d881fa780ca31b97f9298146969686d3627fec470dbf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEK4QYA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQClXSmLTkDIy33turpSEGwRGwCQblOaszwCNPY1jrz88wIgOj8tq1Y%2BdG%2BaqiSX3g6y6EZ5AbMeXTSPzr918vEcj4Eq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCqPvRbvFzuguShvzircA4x0SSK6hAtCimDL1zhCIMuplWKcX5j5vSXgFtvUyJDfYdL1C5I16%2BE%2F67L1%2BiXga9qHevPwwJZvkl2nQ5WmH4uKWt9j98k0jMTaqtp%2FdAxnNGghikdKbGfrOhUXTopD8qZc3FnPI%2B6VDE5Yep24VTBbcFJBOI%2FVVxUsKLnntY3EU9sd9m8U0%2FoASJUH0byqXR0bFckEw%2BHJaXOWo10Kgu24SOT8wEayZEGUSamkooc2ixu9N3vjnTqrGGHepyyjmIOd%2FJnuo%2FyH1HgQGw2jjQrjwIq8CxKR5trxlgOdBqge0CZyDZs5UyGopBOzVkv%2FdHKKKZS%2Fw6wBE8KH4VYxzydEg5aaziSUKf9dqaF2bU%2B13ZMNHcrywhNI9W3aW30GDcBTiQ8TKU1lkBgD04shK8AcjQPcZYPzav2E%2BRIYgsgq7TgfMzgh0LVyQ94g5OlSMphtWMiMs0hl8oeXzMEBLBmzvBr56RXbEDhP9x3Hs9dKXVZmTM%2BJx7UH2nq%2F35M6UOcQrg8vSNSf2nRWNtXcUdXnKAOden%2F%2BOVZVHp13qRibCY8hTZaSBDgcoY1frkifn6V1%2F7W8uc9uqaUZLGumUZML%2Ffx%2BEvtMjYcPNhdz4wMhnSBcLiyg7c%2FgwursMNauwMkGOqUBiGY%2FtL5QNPzfVZf3IBj3IzfnfZKD1b2TNqmvlNpWa00OYbcIHHjUBObGESXhCEC1r2JxK3Bj%2FVZBX3mSZc35P4tDqZ0AKk4MQ4FYZj9I5ItgmmfyKC7sNNOXeNSN0%2FiNz%2Bpn7jj145O4iKZxvaaxH%2FvQ%2B46ltNQHocVnnCuZPofJOcoKG5ht5c0VQd3dhh3wcwG%2FyN%2B76TPD%2FmPgNWN4Fsar344H&X-Amz-Signature=a5a3f773e4dd0dc3f16bd68c848dcfd07532c9d0cacd98f2e343484e6bf36fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

