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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTAOBTO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD%2BmbqKS6VH7Pc3gc5vTvNDO1svx5z7HnLHd6fxhOkZBQIgVWIrJBglxyQcnnU1XpWk%2FaQPLx8ckcaqIiUd3aZYc%2FAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMlmBXbWRR0bu%2BRCrircAxNpHLt4RuE%2BUJYJYdsjhCyHVOLdsUMLGEXldWvoXbOfC%2B2cSZgKhGQd80mfBobNFTS1cAhXoWh0SOYd5BHVXmzQoJqV3WxZ%2FQzXdoK1eQ1RiFtDbCv89cp6l9p7lmuAXZgbmDuAxR3rFZ66fWTHLetEygvaee6dLHZ3p5QWNz1KsbidAThoxQ8wliUssoMO1ogXDhXrZOcDo%2BmSxTmZg8e2dpRuRf6Xq1CIiordIt4I%2FbFzAXGKVnhHvKeMdTH9%2FQEeKTJUzfCjqZAe7fLyT4h3zPCNn3TDf8hErCXd%2F82UwfTm6fo%2FqJnf7IFlwogeki2IML0%2B99Aao%2FPxQwh9OSpklj0L%2F9UIm8VNv5nZK18zD2Wll6E3e5y%2B6UB3NNBa7u9G%2B7N83gW1FtJvyhgH4EV3AsMppid0Ytxtmi9cR%2Ff9juG1vHTCKBQ06QlpuxQ22UAtBRan8b7B5AEpD2M3im0xRYmM96QDaoF0ZclSBL1VvEZyLCXYwyFQqGZkxi00V%2BSiQjtdIMDBBugWqY6JQ0xKDyeDtwTTbIEyLLtFdKY2XDPG1WbFQJY5U6izD%2BgFd3vAYQg31xRiIPTBEB6x1tDVEVJPJhU5ddJWsFDp2n38mKlkxz3t3%2FiUGV9CMN3oxMkGOqUBRXmTGjrY%2B18%2BdwGgOuH3Kz9rDKsvhLkRq3hUwmbvcoIF3ydE8G5E3icv5U%2F0oo8N3jwJMA0e%2BrbsAgIST3dzXRUHNwoh6cUk%2BciRY%2BWViawmOWlrWnrWdJqkKLv7ECJV%2B24C%2FfnJkMh0mvLqpBHLOE8mVPoQHdWeVcHoYRppmdeNIGCGR33hLCs2%2F7unjJ9wAA6s%2FlzprXYHy55VyvmpCeJk4DH3&X-Amz-Signature=0b61ed6fac6bdb40747230eb663766f3ddc16f94def5192b47fd287eacf6a42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MJPDCH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCLd2G1Z2b28hfGX3vDvHwl9uUJBLrHoi%2B98fckFHonfwIgfop4UQ%2BP4Fj5x1%2BQbIx9DgyngCf8Ff0CpVXZ7Bdb8ooq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGA3%2BWAcY8BDC4Qt8ircA8elIO7MLWnR3RCEkmFpRaXNc1CfymlhfQ1Hz%2B8leWZSWxY9eUXbamcvM1hR%2FUZSMlr9DbYrQOHaix2zoFSWKoySb2ZTm4KjA2SNvS1wlgVAp94EcEehb2jChgBdKFBQqdf%2FtisUDqJnGO7W%2BIu%2FiCcQdivg3B2DGVOzk42CaZnjCvdr1WeFdn4cNbgsMs5BMmp1QT4%2Fgd%2BB7gsZzTDnwF3hM%2FzZ1PHFTgdE24Mt20hCt%2FMF6LzL8Lnf0tWGYxe6jQrxh03dO5WCHo%2FfScmpt0kfbOWHAMoj1WSuecDGBVB8h2Zpcd8WIO64Yq2XZuQtRnqEemCR7mz%2Fxuh8pGzpRBzg3oxsmCiLCIsEsc99%2Bvg2kNhtqbv%2F9pk1ez7hHTDkCoqUUtZMl5yOdsvlfhEMyoTWpd0H4n9bPx52oBQw1s73xqvqR88HNbmPgyoI93PHclavyaXRmBRFYUUGAj6l21eKkj7QFIXudLqFD9WfkXXunqhQFap%2FJuEgkVAE8njF4t%2BHvOFBfah0YdJ62JwLyvMo5FSl%2FBo6qf%2FtdKsBFHFERu9UurAxYGKE%2B91PSc6dqPdGJyOZHr3zuuyF4KoxgBS%2FA9urxHTgjQyI9cq1eHC6%2F1cc6n5UIVWpEJopMLroxMkGOqUB5R6zMUnSbij9%2FjyYzR3kmQ2%2B8gz2kmsItRRgvmYkqgAKMTBDR90F%2Bv8JW%2FfbpbwToEnulapmYjiBGQiQhreSPFl4mdF6bF0gvGlrn3v9%2BGE5wPnKwgbVD9cy8E3Oz5vHvuwaQmO9N1yqK1%2FmQPrLqTv05Xe9FFnkIbvRZZoBO4NoC1EpcV8BxsBWk6qx%2B1Jp0ndyuLYHewJ9F82Ofr5ZyZfXAL8D&X-Amz-Signature=47ba89780f98c4f8ad6da42001fc080bce96ca16c5df5e68576191266cb9c49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

