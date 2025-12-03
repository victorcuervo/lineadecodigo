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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNW6LCHG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIE2ks59qOUUamZNKhAB004JMGuIgs8EhqlEaUhwMEuSDAiEAlgdH%2Fj3bQjie8K7F4Z6%2BNCe%2Fn%2F4VdUy%2BP0dnVT59Argq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAUpZxjvnrNZsBiOLyrcA2EMPZAmK%2B3SGMmGyGoSzegN5wKTH5fzUkextBH2XoIDHx%2FCH%2FA49hfYBWAINzTboHHRaix8CbPUehbXNHpxCgX1T8mMGz4TW7Jg42fSrow1i5GMRJgoCviF7C1SjZOfe%2F2X6lMnSWCG%2Bl1IpySiKzG8aaICHGeqwW8SCJ2Z4li%2B89VeOWmlfiFZszY5Ds7X6wG%2FQouoPjfRuEWLR4V0FfX7J2j3Xgq6oGF2OIQtaUakkMtl2buU4vDMp3685Ax2%2BYRebtSGycgwBwkqMbDhz34PiRfsL619gFjW%2FBpctBBK1%2BoWs98KxuRdAjb4cmTck%2BdP91SGEYvO8VwC4bBTlgaKS6nl4euDfXMJngUTvi89SCIRcqRCFNHXJkSJ0y8ji6dwdgW5MR1tu4uetSvlMocpOqNPPSfYD6cBsGZ%2Fv9GPYJSwOYU6ZG0PiMrq8vE2y0Gj%2BiyKr5b1w9d5i5b3QPph9z3lretq%2Fg70AlWu3GVrAUUnQTUg3FDjKv9WNqfMIGOhS0gK3LEWjqNU%2FnKhtecI6e%2ByAU8J5zqegWFyJnCcdbr9hb1HBzufqXQ1it%2B%2B4Z2nv51j4IFhIBQnvvQX1F%2Ff4u6hNGwiR9Z7qMcsfjnpxQGxoYW3leSOsX5sMOGSwMkGOqUBBGNPlhRY93Yq%2B8qLzljTKdjBsiSPP%2FX9BhiAAn0m8R4TgQyRqqcrJcGiIhXkn50jXk1Bl98K9r%2Fp%2BxJ8HgPICDMCxYqLu0wWZ54L1IVzy7OLT%2FFDLeE6%2Bl5VmGvWhSruFV3S6VkisdBIBb681N3DJpbQaVzg8E%2BfwBKIgE%2FqpSxZnPfJoSS5K7ufCOLLGFW4IFAOyic0S3BRR6hlg2ziUiQ9oCfs&X-Amz-Signature=01f78d9a5c5d45b28287e37b6d7dc27e6d110381a1f627d9322f5fb093db07a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHEKKQB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGHAa9sUNnbfEIrHJSGgjaoQUvV1R5S8qW%2BeUyzGOZZ0AiADzE6qyvnUkOIcKbL9Xzakc3VnqSSyRSOfl0mKLS4bCCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMSIafdv7KX5LdtJbJKtwD1pWdWBJgIW6fv2%2FQpDCqiDxz1nwT728jMMy5Wf40AtL3RCXVayuHtDpdrKRqlxTr8DQ9ys78%2BlFjwX7qKOGhIGImSED8CtHs352bZQaCOin%2FtqdSf%2F1YgiDbxvJGJc9p7Z7pBcXHM4%2BIuKgt%2B6LfMp0N6CU%2Bd48zMMzrjik9i17Ct%2FwkhBjVmM1rUqNNEgdzVbcqt3XxZ%2FF8djn%2Fh5WTKkffzOLdSjse6v3tzbiU6ki%2ByQNM3PAU5upFasJduktL7qlh64Ncw%2BsXA2ggtS7BMcQiDSLhFoWVhSBSPObAHCvLxpYVx4V02m8FGqtTOMQEDoT5cuwQQZNHq9EE0Uq2cDpLYi5aifVSgICAp%2FfwMjuXwIh64Am0v2oqvs%2FxZcUsIgBOUCjsw44GKEVZQRjHrRoySZEgcRatkOnHrrR9XK1xeFHElt7SaQXxrcoee7YWH84mB%2FEw2eaX55y3KzB8yDfNlpaYtgjHiwoo%2FGgfrzg%2BStndtAdqhGj4EFvURXZk4VrtSkKSozOKISnIUbnp8ChzTFl7YN1I8NxRgnAmOFcLccIKdl3F9rMuaclIqjgH%2By5QPjVCw2bd1V70njiupCY8RCP4VTPlmR2GX2NtAG0bTwWUojTRvh94lKgwuZPAyQY6pgGLmblyJfrFO3Mu%2BZfnHL5hzPax6CMjjkMsoa8Mf2Inc4aQJKMxx%2F41T21dXgkog%2BPksGMzGA1qWCOo0OOwWdpUKQ495dq5OaV%2BDBA18iQHiAaoS5AkGvvWC9KTpLHsGi%2FG8Uo8QSzQR6tHQItlUimxGN1551XKyO9jzNMteSb0urQAk39Grx3Fhouj658CbHzhO2S59gp2Mt3OFWJk7xFb%2BhN%2F01AP&X-Amz-Signature=f6c08b889d57d74e2d3f1b6ea453b937f0adac1447cc3ffece37c129c9c01a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

