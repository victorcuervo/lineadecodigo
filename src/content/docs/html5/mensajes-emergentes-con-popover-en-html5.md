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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IPUQA2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG6eBP8yOPWFdCD5KJ5kFQNgOaAbWNxkd%2FVoqCNbcsTQIhAOY8AlPNFVWxO%2Bm8NhUWQjvT%2FdGZ3TIK1kvT0%2BjB2SMNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzysqSYfg6zpbAGTxQq3AORYSCo42YpLHwQQ34nm%2Bt5%2BcjiczdhcCNcXwzXXrc%2FtlSaQxjETyfCSmwKNIm6%2BiNebuj5Afk%2BZpavFYhP%2F14VCxpy06ibUhEoJhWOdbdh0Es3w9%2B%2BzpLeD9hp8SFdI9ZsYw4mKppWsUpJD4ReMVBdw0Jb1DJ%2F%2FXGdx8FHLTOj%2BnJEnuTZEgvXUdP817Fb6BdHnnRaUzk9I%2FGBCjqPSAwkM%2FeU90U4OtOYcc0oV1%2BUNx%2F3r3g%2BK43gRmgLGnnUyvOx0nQEOvtYj34aGhPs%2F8SIMuQnNdCc6r8QqDBy75iv0LywZkk2OfDeqVlLx9py72JDvcXbkr6rpGNKfxGXphFQOG7HoJhFTDaB5yZ7q%2FmbubEyQDt8smekQI0tiumg72nX1mwsKVFzLw3nbl%2Ba2z0EII3EX5REiQCEjoJzH7voTY0MvsMyu7MI0FsHYCSKZmA3bkelb3g1tG83CoCNpUnHWTcWQUygz7UMLbUKfssftTSlx2%2Ba8KSIu%2B21MoJ%2BWBXLhJ0SvC%2BNBmaE%2BrwgV5ROvfIU40Zv6YOfjAyNY3UMsU4OhL4PteSFN4w8D0dg2QSE%2Be45mfpjApNmITXTps6rtPpwVktLvqpqmmTrn5XfRmtEWv49f5wDCHF8PjCPkNvJBjqkAW%2BJNC24W3a6QkIlqvyhRpQtJ%2FrNGhKB23eSoYbwukslpJ2MR5fyiYKRoqx25W2rAhoVDbs3%2B3M4s6b2sCe3hJyod4A%2FSAVxhBx6cM7NCxniN8szJCLdjHdTimjFEL1El1XJ1q11YYsf9H0v4hl2lmdvSOSy%2BZq4j%2FCbzrswOpZVkHFKfZTttHOZIWPyp5NxyafkWWrsGEWdtbYLY8ad%2FbxbbqJ%2F&X-Amz-Signature=a3a7980e081f2c6eaf4d5c02b8ac1ec875e62e70eb4e6334942fb1d6745bcd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYENF2L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCig8BDW7ZZl6ja2iarN2mbs0gNiPgGyQYG8KfoUcEpIgIhAL8IivOqaCzA59MBsWRAzJb6iBKM0U%2FkrCBOJeRCCrImKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2wZmphDSI5XVItv0q3APs07gX3Rdszg3xIzxI6zY2FZqA%2FPvHlUcMjC2TCoLObJl6LD75wgnFurSnZvTc%2BxyYAmKBtElw1PTNU5YTsN88sIHwFJpTgP5YerB0EGxul6gAku96be5lddGvGS7JB4PT3IjKXCkbQFxqZKYaWdbUCQGRvIwUTmbEEE0w5t6bccKLmpJiN5jzhh%2FZyUzvv%2Bt2%2Fytye6CL0I2m9MPbwF7mb27DojpFkmdioJ8vynAqBb2YZQdKgqMI9MaxSBa8LTf3bXb7uraw4wJoaJ64bDhze5X4uNxCIdfZ7x8oaxQHdOMxwLfEJA8i2yv0Sn3SAEQoxACyRr771HWKA1%2FC4yl2pDZdcStMPJHwNhwNkh0eaB5ctCSiM5md4jiUUQL41EXZ9CgsBOWAXN9bUlS5NuVmnQn5%2BlkpK6bIykoqG44bXpdt%2B27GJfW%2BBmnsZC3BW3g%2BJt4IpOQs1qiwRL48tsAA7YScYQ5NgQQ8PjhfWvFlFwWyhZXu7i8X5eUxoHb6IqSX9gDesotUh5kYyXqlUy%2FKXxS5TIklFLZUygEx0SO775NCCNdojEFu7sZCLONuWhkhMIMyz00OmGCfXCePSQBxY4htW6KKqTNNqqpgWjhVElhx3bBkpIGFj8jZdjCCkNvJBjqkAdEakxMWI3vTwa8PE5ER%2FyXUw1u5bDZ%2FmNVd3g6M0e9%2FS7Q9KmzagsBD2RzBW%2BRDtCrPXcuE8CXqmaU%2FqkypzKmonf73nHmVyzqfVKRdI9mfsS38EfUQ3QywQpwLHyBeo%2FQRwvfuObE6TWQUYuk%2FTiAET%2Bsv%2Fqa%2Fk3xbIxSyvVxh%2F%2B%2Fm5KGqu96YeXduXwdO%2BYI8CYsJVWZEBbVQm5cm3SauXpc8&X-Amz-Signature=4c097bcc9252f2a8949f871191a266e6bd23a402150f3e54fe9370d3c85dbd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

