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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFQALBU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIA2y16P0pZYMN%2BQv2ejfHUaUtyh8iwz%2Bfmzk%2BXw%2Bc9eaAiEAvSpJdoxynEtW70CoXDIDX%2BtZ%2BLvsawmg5e4QnP8habkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNf5uhzqpdLhQbdvWircA5i0GxeiL9OLUXvKe4gO0xYvJQKSjgVlUyjpdpRv8a78MPt1oxyPj1XbgU6JrMt1RBGhUjVIttomeMK%2BrFReZbngK%2FtBo7E97hxQrbVRDBLR071QpNWylFQn4HNp7Jhcat7Wc8Ra55b3iKrWDkNlnPTWp3aNcsRm0%2FzkbVavUtBx1JSwJZMC69bqX6L2o%2BZU2OKlgwW4rMC2uLgLGH9WZ0SF4Ul7Xlp6IdqBv1yPTH9%2BfDflKwLMSMEjfSQ7crn1bhAV9ecXjQKRI8lDJ9TFS4YTSP5EbWIXw%2B6rdA4jI5f%2FSrZ6osyVglscmAgDPME9PGTKxT3xgqGAoYJscm%2BXcshWMzNUB2K7uHfi3Nr2NxCKKj98lcp0HaopyhoicBPOWeitQfYQQ0QXGkjU1knUSECGh%2FaCVXygMRVDBzddVpcIs5x%2FuT8itmiy1hcW77AquF7Cc1I2AkFAsxZ0QyXJV31Q84IfWQNAETahNA%2BIj7P%2FjSu7muzJl%2BHzOpP2NWnx7tl3cCcGJEeD2ZFQZQw27TwS2bIj7RlxNDh0%2Fg8jrn7NShOYuPyktjvvRSq%2Fl6%2Bmh%2B3ydkZ8iKOqbBTs32rZ2Hx%2FvbjjbW43FeiRO%2FXWhvc0GOm3Txuzv9WwjrAHML%2FnxMkGOqUBd6oS5dc2bz91kLk76ApSyvB%2FKDnH24JEtOH90nh129Ot6gZSNYVBz%2BpYabODSFB0BrtVNG8PMjvKwNYiPBaSnGqJPDnxSVv%2FvWjOSwFxRepB%2Fl2UWAHeC%2BmEy21I7XuVOj3WpomHQ%2FXgHPSh%2B53iU2EivnLDiaH12Mu4aLIFjfZj3a0nQTe9jg9k4xkPqEdC3s77LGE8GXO6KNc4hqy%2FJowuBmvN&X-Amz-Signature=4e89f6a13372fc1f677b39158207328043e1cde6d2189e4ad6936a1fca7ab8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA5S5DEV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOgyYDI8vNf2o1z1PMNASnUZq%2FCFCMINPbTtL7OdjbdQIgbVFmHJJKRl7YNtAIbMZaRflyrCLYw8ErjruRo1uPqDUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLJAn0A4LjLojAZ%2FjCrcA%2FpxZlxhJjA4wBvwuLft50JWsd0ckVgMwpvIFJ8aeffjOskra1QJuEDBb0jGp2NDYSopK%2BJN4qjiazZXjkVAVQwFZIIZVkY8j%2F5PlkOPmy55Bda86o9IOg7L4NRQSVrG1Te8oErYvX1jxGooI305WsknT4TPn6dE6l4%2FxSjcJmEHaFJc0HVLySZAbAxqu3OM5dV9DduTxboh8OMTQVPZvLe2cW7Od7xUPL6H7ep%2Fuum1SSt1Tl8kfCyu%2B7xbSa9csX%2BHuXYIDMe3F5fr2%2B3wmPJN30tBQd1tiYW%2FN0iE1fMNhOkB8jEsuCAGZVvrwA8pfjm1SxDfJ9q0G7oO6SrJh7YssX321jEfaYkX6l7dsp674xBuh4l6M5SVWxUv5s7cXexbubIivj610w3GFXCzDbLRrAza3NbxPb6NP15DenFti7yA9LNZ%2BIt%2FELbCzFrFAApfzvGaWlwmrCXphkR9FN5ubnVwnITtbo3ABgvuQBDXj58DJlWCLAQQ9BMFiAPsH657mAPTuh0Fq2DC2SvEptqLITk2%2BCwFRuAR6BNxn7bY2zGqzFr%2BiPk1nnTDCsJjl5GQ35azmRa%2BVjuoaT6wMTyr52vls8rb%2BUbq3TmG5lacEn0kagtl%2B%2FLhoBZqMPLoxMkGOqUBXShQEvhikzchQkaqqI6OHkNW0FtLrQS0zMpKmisNoLzfx4WRfdh%2BYW8eD8vQm%2BpckXOozy8v8mThVZKlnIMVVFSCuGAUdNYakBP2BvyjNyKQFaAIyo%2F%2BruvU60iqkUv2TS0MLT5g0ujVqLbkfddFZoRVBIpuhd6BZSJ3WZtd4jrno03Di8ok0Ba%2BMwhqIELt7tgS12E4%2Bdw3Ecjb%2F7kPtTaaJAsM&X-Amz-Signature=661477222236a1a923ea3a84481c06aaa0e94d65678f844799ea09b33ef3fa4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

