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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PGZ2CE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtDM7q1b%2BETIEDBPY6ZOZDSuq77dGsjRf58%2BLI%2Fp0uTgIgAd93DGTlIoeOzqh7391TK4tzJVCtXdqM%2B6219NZEgQEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOki6ihQTtjEt8reyrcA68Gha8%2B6VrHGwFBHufA5YnUFL1JP9%2FLOdH8lFJPRl2KAGJixsTspJydRY0TByN%2FWAd5dzeXS1Y%2FjqRNp8ju3Y7YagEzSw90VhiL4iiuja46QxxH3%2FngPYEdr0aLirW8HD4Rumi52I75RsvpF3qvSELaL8daEOBrMaGm2u7e0EZ3H1if%2BkpIS8jfOx5wi5bmRQ9ZKGVxcO%2FuOAQ1qIG7%2Bg8g%2B9cmrKfNlxB8Zm9%2F0aZzUQW5VFkbHyxvcHfpc5D7erARSNo%2B%2FV9UhuguKD4TSPKxl2LZMxHT8kblZrD%2FYR3OSnMXUamkHgf78rAkog2pOvd4kqX%2FQ28IvtAeEo0s3Xma5ZMOf%2B6LA2yKyG6D5W9g82Rm%2BdUcRw09n2Fnnyal5MCKBlVeJbjmXBXNB3dUtQ2NbJ6qSjIaHUPYuYOEE2w4vrP7Oy0eCv0qv7EBoQFn63rLV0W9x9Kdsy4O%2FcGXbvpIYwWcgORwS24I9BozEyTU5neIWCsx4HD43r3Mghhoq2da76REZDnyTlBCyz2%2BMg29%2BoMwFSWVbCGCkjMNNbDafGswqyn6a1mgZYwpkLgAtActomb%2BxDJ1l8AUeMoluK2rTwq08b5XrmUXzNRlrdGAPanjMNoxilAhzwFYMM3R2MkGOqUBpoTMVydC99LcdGCq0Aa%2FZlOIsDYuD67u%2BkIMfsAOvlsMV165f%2F0fbbtrYlQQ9pPHeQ9FAGnQrQucT6NDWaEWGY%2BvexPHOAL%2F%2Bnk6ktVJCTfp%2FC1qYui9cqeV6c86S1EQxI0XqCu84n73lH2mMpFYGx7bvlZCTucbwcBC%2B%2Bwv%2F8X%2B0G%2FtouMQAAaZ571VMtj9YasduHTn%2FYFHdU5TFFM0m0ii1Kil&X-Amz-Signature=88495424a4c7adf7cfb9ca31af9e5a0536dc1f32eafc5ffe91f0a6ad012f656e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656FDZHGA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMRjFrnUpZd4Aq5kCwr0ViMhWbcAEaCfA6vgXDiUaKhAiAvXF0kWWVqv457bU6fGCfH%2B25xcunLFu3oPxrW%2FMyI8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAGDRR4IqG2ZdZ3mlKtwDbtm81uT49mpIG2MruyG3zHARR%2BVH0%2BBXGOwvVFYZ3oiUjaHfo%2BaeMGL9k5bsZi51HGgjyUCXIqv8O%2B5TvZGJKJRjG3lVYqfKPCHzX%2Bue%2Fqgzp%2FD6d6hvAEk8O%2BpTuW4dZWERQsq10m5Rp51F0RphtVSLeP8ordIWk3XoDTUgWmc8wghA6h2ZUI3IZPrGwvJxaSyGJGl1URiIy3VBoIDNAL5nhGKhA934%2F2uP8sReAyll3pTcLZ7aMusqoxb9cG0I9p5bzNT6flcuTAInK3usmkR6MFu7aIl3Tr9lRI3g0PrDFPnEIrph4gajLUdxFKLpjXxaeseCt57Y84q48M9VOTuYsIIwHZYpRqMOUDmcGNO%2FMLj%2BRz0okAXpIAFr5%2B83de8jQMm%2FiHMe8WqgtRt3vfokdc5feu7gib7YwJqE8RTJJU5JyUkWBmqDbYoT83z0mmrmqScp%2BElRpN0j%2FbJNX2T8L5iDm5IvNVuCXTIfv2z%2F%2BvK73F96h31SxSiXELWqH71gJ4ylh6oAYSRb%2BBNxrPlUs4Bc5kuRBFr5vU6vChscBttr4wRcgZkx%2B%2B1ZNqQEM%2BN8u8E%2FjY2VybzVeu8lMsc0D8mzixmDCQv5Fi9XKYgkZFz7YY%2Fk3h95%2Bq0wztHYyQY6pgH3zJq9vchErhaMAobT5k5D7dMe7YG%2FGWoQH20l01qgAat8aETfP%2ByO1w7Vqsekh8XrKfaNDnpz0RGJlshgOp2mxr9MZz8nqAnS65AGTEO6tAF8YjVY1r7XQdezZ12IiA5sMNmd69yiUEW5pWbxPgvXmhTWtiPvRCyRa24IEPGpEVB8a7fmlTq5cE0AyPL592O17f1SXA8UrTrv3SkGhwI9%2F6qlQDi%2F&X-Amz-Signature=e6ad15d51e816442d503cce2209520a8d9e152ee0ef57e8552fd871d7be980f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

