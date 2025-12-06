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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVAKWZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6YlFXywLqqfyYAA4bUf8cEkaBBO7ZaQwH7ZBoMmNR5AiA5Ke4aAzGgJcCK%2BVy29CmpBc0lGHp441dli46JxlROUyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfQBspEYmxI7NyIJEKtwDgXIiAumK0uwpydedDNc6%2FSNqXpg3dz1qft7YaCJKi4I3ToHhlxijXnhg3Mru5DcZR0s0tMU0Z1S3fB486pdBzWGXZgvsYjOiR7SVvsucCxXRZaoNdpUCHhhuhQMER9WV6ITUso0urn8F1GHPzZh8ugPpCZ1ArRj3tCbLGbWh5n%2FdrVXUUM51DmvSPUWfGMRjsyH1iVILWj1KKp3pgHlQhQsYO6xKQmTxB%2FfPU61q3UTwwsXlgTmkOU9Id3KC0RXyyfOmiAmnaoVUc08SQGobr24wnmrt1H0xL3oMqqVtUJd05ENQ04VRdvstY4LVNXSXHr0cKti2xvXtROplCsF56Ke13XqlxbrtAT12AA0ABKQ5SzJQduWXEbk1%2BiuIU7tFFETNDvLI3hQ9PWuQUYh7TEG6rxfx3E4hv2Zq%2BXoHonsnW1TTFeLMBVLfKdmNKfrLg51n2H3o43WqSUZFCZ9QNrpWu9Rf6pdA%2FfN4AFoXuSbParWEQj5lTJaGOs5xLY1duF15xoc9rZT%2F9YjBQIGFbege57sE%2FfQlrfXH%2Bup00HZ0W1X3s1Pwnk%2F%2B7WdmpAu5S2S75%2Fsu1V8s%2FtN2fsy70Y6pDU0I7yvc7ub2tdUKdthB2FSKn0gBPnha2y0wvKbQyQY6pgEXRp%2BN20B5J4TwxWm7lpQz%2Bed4CdyoN%2Fj%2Fsi9LyRr%2FAZmHH6VDbA1doJxGzx%2BuKkfCqeZwebhNEuT1Addgd5rQ%2BYIOcwY64aRgcYLeqqNWhsg5yRyIxKIFhh6WHHTB6RaHeI4djE7ef9nX03pxoyd9VDRS9JMc8rbiKghzi3cZCQxNLLNE2cXszV0gbGNhRBxfLuG10cJ3OtLW2T59GfE%2FXuy3oqAR&X-Amz-Signature=4233b5d58bd7a5fba27dd35deeb77343f27043faa937a2b5c94814e3d9555010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R36HC6U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZ3lkSgsbBXABwDAvEHuUBRQEwNFkAIFDkDc%2BofGhGwIgLksFT6gjeaAmA4qmOFfnx6JkoGSqBClhTNrwK9TIb%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL1eAbxUFNaxLEw48yrcAwqmYU%2BfNjmW6AqWkW5xt3%2FSZLoWOklwBvT9HhdPhKdUVCO1Gz3w8o%2FQCBhW8W85aFNbo0DhY8sTFBXffPHDfTu2sODFd%2FixwVFpuXYIqbJ9IWJ%2F3sQRU%2FwbKDweuuFpKU6hsKXCncv%2FfaXjpNVhQwV8XCVVcfwQ8kymQS5DSpJSsGWP8E4HAxvsP5Zyq8lRSNm%2F37krEjxQsWbgIfctsKCYRdDK%2B2NpzILE2btMb2OkXvNm1yF5F1zjetZKFhp9DkQ%2F%2By89HihxsVXkZH10YdVp6m4u7ZojTBWFiFy1PFiYD3%2FC8Fj1%2Bw%2F%2FzOLa92rADvbrT4s7P5AX6cAxmJZzmmxg8ZoMGb9Pe84S46a7cdEGt%2F2qRpHdV5Bm552ZC67%2Bb0Y9VEUGu3UI2pShe27S8PXaiN7%2FLL%2BmNqCesjBxJLc%2F4jf2z7ZJ3AQVz6QoshZoaghvOChA9roJjcV9%2FJNdBzWEvqtd40vibIy9i%2BO8Y37ImOQp6nB1KPfgzmb5AXzfpPrf63uViCYRvWUX6hAn7aI5%2FQMFP28%2BjCA4JQywnQslW48R4WUotExj68cWeDf25N6OLiy5TUeE0hVuBu%2BkMxbOMuBOfXESf0lSg%2FtYxcxyJP%2B7Lfg98VwGHf9gMPKp0ckGOqUBk3q4PhPwikUWcNidxWh%2Fsc89pfus0DfLrWwlfoz%2FVKflXIPw23oBJZpnLf4t2vxQL94xGNP05lxl26waTqHTp2dqi5BR%2FtuAa%2BbQDW68WC1IX4qEeLl0wozgpiWf0VFgQ%2F7iDZ5g06FoV3YVQ1Sy8cM2AcaB7SAxsZ8gnGcXH1yow0v5ggRumjZMkfr1%2FNfsGTA0SHcW5b%2FGpA8Y8wyUdKoqLMRl&X-Amz-Signature=19c5557b061a2c2b180f310941c48009a0edb29020c299febc910841fe325c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

