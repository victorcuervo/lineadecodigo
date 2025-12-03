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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6YWOHW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDD9zF7ofGfYe9fYbYajquw3Cj2bwXW8oWm9J10epb%2B1gIgMls1jrjRc%2FHgpRrougzaTZUQGjfBkULRmLtOihGQ8e4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNbx4iNJtNccMQMnZyrcA%2Btr4SMfFfN6kS%2BgwvLAi5V3A%2BoZ1t2ULqs916Ysv6PpMZdCfcvNvYtu1O%2Bb3zXS46Gx1WYwlRXVSNyYl83L7dZggi3K%2BSoW2d3u6nPAmX%2B6YybLX2tvEV0FOpbBiwuEL4%2BMVtVh3cW7mGV3ruIwBuCRcIfHyTshHBb07nGF0kSpUIGKAcammAaT5CHn4Ro%2F2kWV%2BZlSlsFiXpUu5s9COCPzDUSX9iYECIRu6Cz3GCDBMXGW6QRQGCFB%2B11heCSUhKpRA7iMQn82YFOxjC%2FxwPrPBiACae7Nsri1VFljwKSGTSTcCMJUMbNMD7CUj9XV7jD%2Fb%2FDwZhwKE2z7f3JI0jQtRy%2Fdh5hpfX6iE5zdQY9XTqofKnC7nCC4bV6a4yQCGqKzmou499WdP0d1PQZt5WpHWtYBRR8nKiqrtf6EQijdTeG0BEElmsBya%2Bd5BziRNf6s7ed60v0h%2BOd859hDfgyzg511Pb%2B9RUtkiBsBRpLSeZaudWfm4gk7cO%2FOJZJvPSHX65kZnav4divUbnIYmF8MPCcfnum4aJ4YwIyH2qb0rxf8IlL22Y7jXuve65GwAynP0WocJWKvzXUuaijPtxF1fqF5BUMfk6vs7O%2BwP5iub4%2BX5XXT%2F5MzJ2FCMNjUv8kGOqUB%2FIlizC0PZywTtsTfK9GZuSEiAZTTnD%2FfLKs%2FcVp83F56n3gnCMjOAuxzCejvw05hf1QpMZ8YE%2BHvdUzx7kCiO%2Flrctqa7jo%2BD%2BRZYSVTch4nIPjjn2lgJisXx4haQjoiWMvf5PSU%2BgGfi8Y7iznWBA9KY%2FV79ZJkhIpDI3Wpi%2BY%2BB7ZawrtT4CfHNuehJKUB5GT6vPz2cG%2BJqPNogaeXINt74ywh&X-Amz-Signature=03ab695b1dc5e037238c3c1a03117e79e6f4cf3838da89834c280cf45fa37fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYWEC53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDAUaeKsj2VbG1s%2BOxMchDjrW%2BhY88%2F3aejIZf9PAekIgIhAOJWItqtU76a9IjlyAjp2u2A42YqLhwSXCPos7SK%2Flm1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgxsR7z9m1qfoPBmEgAq3AN7AfQGnyBFgOfG2nZPJb21MurVP2YTiE3zsuFxHRFA8epxMPl50aAmtQTKGW8c9KByvQ3c9w%2FQFpWzOXpuPLT73vHXZL6oyoT1L%2FYNrVc0Or8NWQ3usjSLQhbjgqKmaQ1A1o8hLOmzDrma5vqZctgcbv8LnsCjE5QPfQ8M%2BjNGyX8ZPSnNS1lryfDpCK%2Bovp5n8NgOzW9GhFgG2ZJdwd560Ah2LWxim8OchG%2BFwuxly3iwJkgZy9v3ros4EkxIt8ypAtS293%2F%2BaXT7AG6p33geEyE0tg1t0HKQVXj63%2FSY40%2BB8iXCbJ82%2Bratwr7WN9UFz7R1NLcW4DO038MBe%2BnCzpQqmrChYke%2Fli5tVBrBDsz1KNrOUg91dzk%2FgawPbFI5gdTaLZTTQHrLurIh7LOwN4Lkop3r%2FNYQwk3YA3nB1lDsV62qlKoEtsKeCKX4suErp9CKckr06HajQcg8Ncnjfsul%2BBlDDLLn8TzxHodijzsARqRg3EEokwylYF6GmCEoIHVAa4fr0SI9hBsln4w%2FQ%2BoDl%2Bvl00XWOhYvv8zgJWm6Gk80WmX34Y8aXuYp6UGTSPAU%2FNSha%2F77%2BtB%2BV15%2F9UQTWf%2BKAhuwfcjPNmPFjUuSC6gNejIRbxOqjDCH1r%2FJBjqkAetUlJGhqhzxuDrK%2FTtSLrD8veH9Uf4jK%2FGm7loGsxsXsV%2BEBykSF%2FbJiAtVzIcGCQtmxoA1WbqSdqJC%2F%2BSH1vSQG%2FgcdnGXIKVpm0Z%2BTzr6KTqAXRpTVa3tNz2IDMPbLskymSpYRDQiYCeguarDC2rkcTmTwusQPTbDhptKl7bTFh64owauIrlqjW5QgqcWPWy7a5HS%2Fy4Q%2BIhvz4BLSIFGAfkk&X-Amz-Signature=454b4b5f203ad3a9ab28c1d9748650a6b8ce113a243f65f6fefb722f9718b3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

