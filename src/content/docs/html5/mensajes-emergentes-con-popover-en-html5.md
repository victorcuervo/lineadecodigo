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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQWHGMI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrnYdLPRQOIb1XYjIxgPI5PYO0ereNIy%2Fo1jmZa%2F6L6gIgeIhwDqs7iwywM5CLKJk6dwQQcUu755ZSxAciRBERrW4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPfJ6RF%2B3dTmu4GwgSrcA9sUwNVngIbn50%2FccG4VCTD3lZsrNTKc1HTNfxugZuCLPCty%2BUsZx6lPeONxgzAmwgcfeyfxNlD%2FtIlMPnALsqZany8%2FSM3R8%2F7PX1X82l1BFgKtanyaU3MtNLLEP2zDv9IKT8UgsG%2FLSHt3tEnE5zDBmKHkmIgzM2Hr0YBEN6EBgXj9pihCgSvqgm7GM04r2G6WIqZ7gx7Dxrkptl9AJL7NA1RMtp%2BligdIx4xbDAsRYJmWqp4feVXgoihUIzqJ4%2Ba9u6smqvntVWmygVSzneHlqW%2FtplbQxF61Zw%2Bjf2rYI0AdBVxrywDa9UBP%2Fe6YtOxj2tqIR7iD8v81%2F%2BZeY5IaOqw82qOKDf5rPTBpH0WW%2FX7vBZAaloNomHG8%2F5yPyRcabPhj%2BfUpjdZ6wWIy%2BJf1g95z9AwyRQqyzT6zPHXcJ6ULF2XVEh%2FRaecSADbnlR3otjiEwRcsBGR2ryv0aryS0c%2BFQOCE4XVNfa7cEYslfUp0kT9TpiN0eA%2BTrzmF8IR1SILUDboSO39UCA%2B%2Bf4TzIyMs%2FOndvQVcNP6N%2FdsE2lMmVVN%2BAJYPHIhywkQVDOR64iRcIRHFtXe6k2z0X3uPxmVpytqrPe8qMy99RkDIHnar35Lqp%2FtbxW9uMJ3oy8kGOqUB%2B1F27opL5R49zptSZ6WoECslVAW2XATDUuyBxtzgYLXRBQ0DuJspYVbUBmHmpjmnewEIQtDAWBXHgQQv7a23%2FgNXRVX1jBu8AVgOqNx0h8zDW2vPjpGzfx0nfZ7lWGGw%2F3kDdODIydGF9KZVPlfPw%2F7knT%2BHIQIB%2BVaHpzQicQ4s%2FBsGm2KMO48lTykKJac6GK7kBlSJrWCzdB50lxf82UIsv%2BMJ&X-Amz-Signature=12586b01d1cc0a8b395bfd1b72fff6e670b68df89055d3acb7240f00ac44f2ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWRWIQ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVFE8uCiUWzHbWM1AuXspkW5hH8mtQpsfEz1JAqzJcSAiAtQsL6nJQz9wRrceBAg2ZvPZ0FL0HnwmB6Fw3iUl77gCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUO3OBsIUWlzi1e8PKtwDr8zpeP7UT6YO31ql3qXokR1Tz3CiQe69UbTOVSltTMXpGHIixnqZsv%2F01Jhf6aCHi6Rwjf%2FMlotQ0Gxshq7ctaCglOp%2FDHWu%2BZarGE%2BNQD0lOUjorpHy9nrkAQ9xrxTwsv5bqAhf44RnFYDUhCxugvT%2FZQQolDnHUBG4j8edu6FwDasOD0Iwdvq%2BsNRDEwSFgthSTSj01og90OB4wPFnpr2gZPtxZIKzGpas4JOniaE2Ay4yUpwd%2FV1LCTHUjGiC3v831sRXv4d%2BoTYRynmebceRerXKGtjf3%2BtKRcLkwGRffq6ahBP1CIY76R%2BbiRLZPykkHMrNClL7l7PETdDzdnmZ9a2sLtBTkw%2BlHxSyPG8w1UorKauiGKSysZ9BeI3iBZEvuHdgewSZ76U9EPpmPFAr4tZJ60gPn3Cc0ygA4em6Os%2FX2l1yP0F5FrtWPquV%2BBszM9Z%2FKEGxwMH387mkmAOfvFsSXVAUziXYNfkEQBPb%2Fiui7GjVSyoSjTTuZ5b0cIYOUr9Yfda0%2Bzq1oaSl8WG6t%2BG1mav7clVvkj%2FUKPveBrQ%2Bir6yazv%2BvhDTbLTqLYTmHW4grN5422HAqYXxYv%2BZtkW%2BEjFnHlLQuw0A64pJf1HO0%2BT99DEM2%2Fsw3%2BzLyQY6pgEyNI0%2BVfcLTMpUv%2BA2szVFekrilj5i0OGtQcILQhAneHEF4pxDoYijXO5WkPo3nKDj8M7UPYIXsSeznIvSo183eA1las4M0Paxqgk2Brc3JkaP5yJfqMZqrKip13qHtTWdSh11YkYr6o8kzuME2rUoAPq2muec0d4ZGLRMc260D88yynYz%2FknEes%2Bfs600eeM5KYSlbUT7WxI2sJL%2FJ%2BGIBfi2aok3&X-Amz-Signature=4644024768d6174978dbff7ead134fe124b1465c51d04f9e72b16c6648a0604b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

