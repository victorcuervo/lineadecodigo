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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIO26YD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC%2BqQpvhEBzoR4z%2BvTy%2B%2BQ6ezA9jAYRAo06QKPzjcb3dgIgNrpfY%2FXG2Xz0mbAI%2FoVAMQu%2FejSryA0vXGbuoXvgxCkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDPwnpKib10SrF46QircAzMmn9whVo7q1HHCnsa6rFBKlRUuJ53j6%2B7jU%2FQmoDNFR6EAFZyIy4AAKo2bjGgE%2BdS0xykJmebRRfL%2BaKXVV%2FYG1mOLuBzLI0rBuVx8GnEfyrU5f005FwyqthGR8ejDtv11Dosw3HUfDhRhKuoqSE5GS12JV8GC%2BFWvyfxWx38%2F0B72iu18WVcCyTwBiChz%2BIB%2B%2BJ%2FvAOtsp5W4uur5Nei1f%2B7yLkX1E%2FUPe7d7imu6HMwkGXdlO99rnfPKcbCbvjqmQw1fQpxav9h2IId6lTbfLU9NKOT57740EMbXKlLwFFtA3PBsXBtcklhqW%2FXdE9TeTG0%2BnATjFUS6GYs9NulAVaVu2eJLYqqFHlf93%2FpnC3W6o92%2Fl%2BaDB76ADD%2BWFMegM3v4EMzHeVQTSiof6fTwXkMfviXgIL3L6j5vkqmUuZ6rfZpI45NXy1HmpuFXXiMcUShpxXciTpUY0Uu%2BFjsFFu3tdDnMeO9nvB%2FFapatco%2FvK%2FdTcRHShE%2Fm%2FjDbfjhFq5I269rrJCB%2BY%2BKgYEXcudWXB7boXbdxifXJeCN0SfBJ0Sb91V66q%2BykneLunbWkG2T0D915zhD1RcxTtaXh6SK2z71PKXCYkZDLxiIngI6XnOZFPxWyOHg%2FMOjcwskGOqUB3ouIXvJsdaeoa1muoT6vIb5TG4suIWKVTtUK%2BUjO1SWjg8RACrVAEFjN3hMCGORFmo6H9ptNVgiqMfS4oVZzFTGFZv76UxJblYcd9bNAwn0vfYW%2FP1kz94P97%2BOw6XDNks%2BOhkLHHQFWEdIP%2FpktOVi%2FTUNknKJWIBDElFbpdfGrIoBVi9Qka6hNQwTja53l34IiliSY0%2BEYHJLhFdXR33zinXFz&X-Amz-Signature=c50c86a0bbb3443e434f96a674506de9316caa562adfe21fbb7859d1e73ed006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFXILQC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCLYKpJT73Bp9VhN%2B54qutfveW%2ByJYs8bloE5qcTSgfYQIgVkVDV46xFhW93eK%2BGBP020NRMdIu3Z%2BcBPGSrbxak6Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJQPre2cVA95RrNz9ircAwIpAe2ZCSpN9aw%2ByitUdVR4NON57EBegjtLC2%2BRf0pbyb1ymMnojGntHM46r1Ei6YLK6mwTC3XVn%2FJs4Cr23xZYyRYjNFSk2FPi0vkVGEKmxqIxEfI0ShKzLfB5xJ42c8CYaRW4sxAWslrLrBG3ICIPFY6cGTDWgncGCZnKnEgXysRe%2F9EjiQd6xERnR0Kj2bIuAYMscuAYCgqESWO0mqCqIbMiBx5y6PyoGEbbi%2FdlL064t4GvAVTlfIZJK%2FnxnC6g4t%2B6itFXOFBzcnee8Dp5LaUZJd33xE0zjbgOqUkSdr20DnR%2F7KNJYyr6oavtSpmwp3oiA7zsc43WJ4nVlJgE0VnkrzzwHbuoBEqwNSYFhoQfezacT8x8wnI%2B8jcDLtSnCqDqRxib%2FBxrUvKxFzHIlyj7lLac1xFn%2Bj7BnPA6FnNpKioUYrgfxpdjRiTDNRFIwSQSknnapF%2B2BMPabpUyl1GSFV7LAKBf5ejj%2FPGjfrw6Tk%2BmDd%2FIoiztrTI9tlNiRF7l05tQfNmuMnBXEAMJ4I%2BCqm0LvltEEXVWjeGOrxgk3NgMJySlb%2Bh7xW0rcjTjhl2SABTGCgrJ7ygrlMFVsJWURzQqKVPsgIosB9oUPShZNIuR0KkUZ2zDMJDcwskGOqUB7pAiURwhwA%2BZemaW%2B77BBnL%2FRzPOJio0D6FwG2%2FdU%2BX0M4fjsgHZhLMIo64hhicyv31Rru5zX7ncff%2BH1PNNLLMas611kvaWkb9xe2zQ7o%2FBLIYu%2FjRivHMLwtqWw0tN%2BqF6%2FOKqTcBTQ8pt2GAupohzh1BV8usFQdqOVL1eN4GwTtgnKj0uo4Y6gFY2qULK5xBU0uFAoN%2FaCL1STqAjeUnNq0cT&X-Amz-Signature=802f306a121a79a25f45b84c6e900785ce04b064095b4c6223e9f566d05ace9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

