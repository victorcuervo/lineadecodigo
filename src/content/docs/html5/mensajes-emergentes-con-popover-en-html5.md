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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRB7OY4J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvJjBfAT%2F7kDtHBUpP1R4itOAAYvuB4Gb8zKe8a6e1oAiEAsddyQqL3wbssW%2BSuWQzQeha4ZZt%2BLr64aSLI7JGJfz0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgP0wL%2BhfY9U8VrhyrcA83oI%2FA2f3pAXnhAENRpFn2L2p%2B8oHi2cRXtLowym9ZmMY5JeJMDH%2FgGvJ5ry7Ar19APIOmF%2FclycmIfIPXpLdeFurJyuSkI6tHQmEJOk5FoopMD4aDu3NYYHIMazgYc8TtJd%2F29bY0co35p497eyPI%2BRSy46wJVVO3xVQkA0oVxToYCnqc7cwZcAPWSVfiEG%2BTYHwA0A8xPj4TL9mybkpY%2FtFuikkZQuMo%2Fqc2oLs1utpQkGkaVNfIDK7HWCEckP8EZa8suCmgmIwGTS0xQf9H8nVGOmENkcU2xzu2PH0wCr9VF1pr75j2kbFB3eXSHydjY1KaWKLG4VhNFP%2BOzF6%2B18YgODiLpn%2F2Ur1XTR7m1hEusrXxbUNxSuh%2F9oJ0ljGvyXcz3Vv1hNwcQdf2DgJBsGIGi7feTY8o5StqlBZOn9vtAsKGHoaskVXx5Y%2B9VP%2BKDakvRamcO3A%2FsY3IhNVLWk5Vw%2BvCdvfSiaZ8DHKJcR%2BNG214WrIPhwx3QBZoCnX7eYem4Nc2fKqnautAqhe0MGkyyEwNWRQS2tOhR3g7%2BcS%2FibAgQtWjjL%2FeYzN4AvXIoy5UDVL7DJ2dvd72yTPDZzJwYLAY5KT3H%2BD1YwVOoZ7QDCUl%2FyB26cpaFMN6P28kGOqUBrmvQkU%2BrG11gQIvT%2FSXhBBurH0w40erYlmmHoIaoBqej9nnSHGLf4VZ9htIwZTKmpOBYhiboKLAARvv4q9zgxGtQo3n3%2F6LeyEGzAJ%2BNT7bg7wBqHhjQsI%2FdK%2BlRgCgtDwbE4mI%2FKdfBGpNjZU4avKDeIMog0HuPui8KSZcaSTbZdXYeyyxfESvnfhRPns%2Fak13Z515qmDSk1MmdFhvqx6FgscBT&X-Amz-Signature=fa6f1770f0bc8d5f6ff3717bcc4ccca834def32301b730b1e74f6235795ba015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EZJUTE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3TkxpHKx7SNvkdJkQWhzBuyz%2BCg%2FRvq5OjZ8wIgFMxQIhAN4xMK1nzH3zRGn%2B3Ef7UMbeQf03Yy%2FplqHsinlCPzQWKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBmIw4R6kPbxNByZ0q3ANPIAdSsrXPAV6sGLq3z%2BbizwcUXs8uUPpWti2iVj0KptJIw%2BU12tl9rBGICbb9PB4TACgRf%2FSkExvnr3gwRJuFLYJrW6F1tks%2FKhoKel9V%2F3hP3vK%2FX9jD5hZLLWPOpVhAKoMvXgu9cryLpuOTgFDd%2Fm4rYw7qQefwOgNeMR0CP4VItqkgdC27uwuQdHXRZLo5bD5%2B8Y4ynh75m4I0ErUeR5H93WKiOjYwSqGXYV9Dn%2FmDmUYHt5PSJxLcVwzMSehISxiFmbkYTnTyiT5jaFBrO9bh%2FEWIkUmXt089c2obz2EY2VXTmUDjpiN7IA08%2F3yuqXzeVKDGxOmGEpSz4JsBT6KFP2yB6YmD24opmRrJ%2BsNlQD1x%2FedUAlqPpHRlmkCWyjaJzs0M33RdPLe7ndkduYkytw9n3BI95W%2FdmG%2FvO2ouxJy7UfqGz7xtLv6IcxyYgrEoQM93aVxO6fVmMiuv0Fqyw%2FOa0LPTVREpezZcggQ0fYFoLO0wDtNaqHc9bBJxAo%2B0%2FORdBazOImMsmXq06SwE0WA%2F06LzERsMeFfeP3k0sh964fpV95%2B4Q9HoOIGEf6omAYE%2BFyC6S8v%2B0wdIWf8pne4vldnzjwCD7lv01jPVXuAEu9zUgIlv4zDKj9vJBjqkAZNNDoysXPOs6l4XHdmO%2FqnFWYWk4rqRZgcpHkogWyMx7Molh68V6TDXvI4Oz5H0k5qSVctGnInG%2BT8ZfbldC08Y6wDSAnOyPuR3DUtGn4DdWwuxPjdHUgXftHFUm1weBdDV6gSl60VAoGPvaCwyzwQ8F1vxuDOoh9SNCrQ8gQmLjpG1PcRcggpmsEpIi0%2FYxwoqLXRNappd8A3iFYP6ivd%2F2GoE&X-Amz-Signature=1cc644e5a4910658326eea2bc9093fd900bb66182529419e2c49db0b539dc678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

