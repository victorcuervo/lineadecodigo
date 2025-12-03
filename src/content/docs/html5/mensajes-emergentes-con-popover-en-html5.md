---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCUAGE3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFTR30PeMUsxfj5qThDAMtT26jMlteJFOI3FeFPRU9NgAiEA6TOg9sfZM8vZZOhnn130RhIFrzHwmDklM4%2BAZnO8OVIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL%2Bcdb2kXbtmkaErwCrcA%2B6euQD%2FoZx3tV3NOECKY7CJb%2B7osy12HVtwTvtwWKoQZhK%2F4ZnOg2%2Fiad4Aso627S635mVjNPbZKG5EFkGbFyrPnkIDtr521Kc0%2BKIO7mfKqcoMYI8UGSKeA5wyCHgtFk%2FiOVCpWIvJaVi7eDa8xTGgsndmlo2SFWhIyAp9fdDJE4HXWGTiI0vAloS2xgeqfAwUJ34l6Ej3LgwOOs2Nl9HhLMB9MTXlOlyk96DTIm9WFj%2BHyvxtgqj%2BLLyGXwcAXuxsEBa3JfQuni59MSXmBvUOHyOBT49t1Mor%2FSb0O3G%2BeVhthJV%2FyDtzGVFAPCg5B0OxZG5re6%2Fl8fcfedaL1diEXk2%2F3sQ6%2FQ2lWCqsQs0yIzitp8SVf5yUjhe5SoCm30EtG74Qi9HfFsWJlV%2BuVouRCU7Vx0p%2F3iU9UvTELf2pQB4NZSz01KO7IO%2FQw0SWRBfyEEiVbUMQUjjkASOq%2FuV59Xx2VJpbroxCEFyF1jvyS4DIqO0hAE6FXaSspptFWj47Fz28T0ael3fduOHM1ve8qYswRoR7ul6EXeSRlF1vosZlefi1czSsausYCV3HAeBJFgmLv9uOVgM8qXvE9Scn50dXEvFiOfuNknTwxC4qhYzs7RzOxp0BbIbXMJy%2BwskGOqUBgpN8YY9GsiXmBo3nZCi3YwCDKQ7os%2Br8ImI0lWeRpPA3ueW7EYCE13WZigjwoycSVfjq8NHKL1pzHAs5NboGMoyJaj4jVIIFBI2P%2FceX6SQyJJE6Hqg6ZmKn2k2DohBB%2FOydKGY9PEWTuwDsPHNOuytO%2BnpdDcLv17TRKwwsL5cjf3VIoCHukkAHSrT6ZWVsCj%2BvsuYqLU0l9K4M3U8NZS2znBsM&X-Amz-Signature=37a9f6530ac7ef26e8645101cf8fc0419a8775b0e7afd88caa92278002c6f63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2NXZHI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDADnrtBDxP5xc8LE9WJJheST735SFfaS7vUoM5FQcPYQIhAObetkYWFGD%2F8j9qRUFn5SEfWR9RqRpbt00lV5ik9gpmKv8DCDYQABoMNjM3NDIzMTgzODA1IgzTwwRc7W%2FNB4iH0ncq3AMa%2FVh7365xXrjA%2B6ZrXD0nCwIv%2FG2FP7eXFhst5ypknaq3e5i4aKTdKm2Arcyf4nL3kU3NfeJNeKdg13KUYP5B3IcEJ5zP5h2%2FNxThnBEqpXOW9Z%2BeWdwIYBi8Oj7d8ry7af8ZxYsumEWsH8EcfE62NTb7%2FT%2Bfvp8VFpa7bQPrQT687ttV0K2B%2Fugy8bydLI7T2ck6x4Zi4Qb%2BuitYrTZGYAd37YRg0XkFbJpBKs7HF8jaYs01jK6yus%2BolQF47TiyIdU7UEOQ0AQfNZpRs5uEVjTLwMNI5VDxKIOtUwb9SXoxjNE8fgfeqoToykZ%2FVdWvia6TzkajzGbTlBYwYptih%2BgW38xhDeAee%2BSQ9E1HLaTWE2dH2t%2FDFN%2BO5J9gQfiIQcS1Xa1CTyVTKJdndT095vxHSRiSHAmnUZvkbMdxzdJucm0QJhV6FY0rTP06%2BSgoremJKoM03xM2Nb%2BxatyNmT%2F7332GHrCjWHmC0qekGzfmZQ78asBHql%2BBa3kWSzaXdW0kleecTl2ZzxD9IAo395n9ACy4%2Bl8luCW9I%2B5a0AwseXQ%2Fjm8kXYv8M%2BGSJ5wVJ6oxvn5KL724SwtF5kDjN5XAuDHCNA31KNA60UkHgISxsIvp5tGWJqAftTDOvcLJBjqkAUpSkmUs%2Fo49PmWN0htDUC4uKP69zM5bcJb6kIG2EmBNztkP77Pm1oZ0UuMxrpZeUbfhrrgjbqlrFsDIEmU1n82gIOpdoHQ0AsVlxYz6i232oDNX%2FbiWZB7abUyPNiXY2DVbYEQqlBPdz4toumjV7G7QxCasUf0ew5C8WBlHuBK2tWrXOcRnLku3B5LbUMu5yj6NEsnj73TOeZLikiNi2XHfxXhh&X-Amz-Signature=1c9c9640fccc380a494802a60220c052c2594bc2483a44c55415de041b669147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

