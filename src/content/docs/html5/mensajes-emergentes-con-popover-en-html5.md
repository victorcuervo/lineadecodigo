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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBU3YGW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCqvYASqag%2B80OjDt0sNgok9EBwO2OyccSko%2BLqnWHirwIgVdge53bQM9u19O2FFP3Xu4x0pg4HhIyGg%2BgPpUpELBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMtxmm79Ra7QNqg4SircA3hYQFlHRmvSPzklRRloZohcOnIuO269ikD89ZRWOXnOOe8NsEc1m15s14VKr69Lqz8NMfMcNGkaoM0zQ20qhzFr0JrZBqukjqEZWgP%2F7xU45%2B6HfZiioJZiSH4O%2FIvCAV%2Bld%2BDmucwdirL0Tv24VDf%2FpKjOOH5SiQJ6bq9CeuEo3Hqc3f7U%2FQhxJEnaHJYzrKm0%2FVxrQdVqOB%2BUUgYwgiPtBsNI7QZ1kxU5IHFN%2BjE8Lr2begFKwfhMgEIRcKYK%2FbyWZol%2F3FQpbyPZjvbOfOJQ3pR4pBpoycJw1fkJS%2Fsxx4LhRUhAH0kIL3AfkBE7%2FEhKeeVSLqEdvIgJlr3cKHVzp34mq%2BZmUPA7rM0FkMTaEzF3I9FsjrymyHPOAMv9zf88fxjnH8h%2FNxWZU6ZHJJAKzfeHGtrHgLwt4W7A0o5ZEoolsfAaxKwJ%2F%2BEzFS0MeDHYIKRi64mT97tJ8rTh%2FsdowZDC7Q%2FYipHpgiC4215yMOXkImc4vy6Nf3W7IgOM5jwlgHUAE5pgpLzcvl8CvPUiK%2BrpglRHTBvMCP8Bkw55xBXANiLTE1upg0SSrqL15yfC9dGCKIak8oVLnkaFDV6q%2FgBCDZxMVzlSp7aJXhRKYf%2F%2FfwNbP1AKYnhnMJ6%2BwskGOqUBGd6xm6xbdvhWA2%2FmC7hrLOK1AqDSEKaguT0tz6oKn6DRFzzzMuz3tZKIhiwjT2y6IbdmE%2Fbhy0X%2BiiSs2HbmonxV7rTaJqXcW6c7AjTlUseDjS16e1NhP6isv8Z6qTyVr%2Baz%2BdGQkVZuCjhlFQ%2B2lJ2E%2B8TIb4PrKu6sJfDbRXC07bGewur8nZhemn27N6LLdSKjRNz0U0gyThhBU2YPnDeqBs8G&X-Amz-Signature=f5a8c3515ad30f29e67a22336885e9fbe114b65a41f86665b05b48447e89c649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P7OO36%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCWddXzyzzU0iNzBglbOitHyeJr3YadBbO3oDso6o%2FaNAIgNywC49AfB3zOj%2BcGcxTU3FZwOVwho%2ByQ2BCxQISoqHYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAWl%2Fkk6XiWuutMK0ircA98AO4wTxrnpxcUrVxP9q%2Bc0oLw%2F2NJBCoM1G74sidfjElqAJI1refoXrY1A0h4sFPRlR%2Bn%2BVvtiX0sujVeZ%2F%2FRByOLXUGg08Ewk%2BxtcwntUIcfHOtqiQl44zEoMKt1ukULjFKfbM3%2BC0QuBxoD20BUHTHOWLUDoBa1Tl92%2Bmh%2FbQN1D1LjuukX8JNG6sl4hxTU%2BtNMKACRgkxu%2Fwolt39osPGVNRy1l6vrVHu%2BdjC8YufJ5M1f9PIhrGLioxTpAYgSS8ISxrsDbUvVkzG3dm5ey5PFMLIghU6tDYyRR13sBpzdTSphQ9vPZK%2FN1iBc2iCTpn8c1Ef3K9oLxv1yt7DaUfUazeYbM1fIdZ8pHVJSN%2BamqHUzZiAnXi%2FpcR%2BC5Bu6wBtPly0Z52mA3GvMKPWrPtDy1CML5L2zg33fBgHBFAVZmoZnxFEscJDkJrRYwT76J4OYCTTjiEoVksWzOaiQA2zx8Gh0STs36J1tZqEarfrCXQVF1rQ381znZLQIHSUFWd4shd4bMdpD33OeZv%2FMdSNrwLktN0MDLmk2EUexbi5N5jm76%2Bo02NIa9L5H4jmB563qooQHcUtw4iSQYLTn8i0Kd1JhTwQEJzegbVzjOjJvq1q6bBFLCFJGuMMS%2BwskGOqUBNGk42OtpIrb4YcePeJEdEWcpcF00J1C%2FZ3TIWxMHrtxWgpUvdMLe2OCjSX9SE%2FCkUdlcY2WI970KI3sSpTCL6s91%2FQP1AYXnVf%2FkawQRsy20HoPHTy5Ck%2BJDF7cI0oNQDU80dcLs0DU2PJbrjy%2B6X5qBNnQif98M0iJ6tSutlNpIBjLuLfrQrEcKxTU8Nc1J1AJWp%2B1CgFCainCyyjvGX7nc4LZ7&X-Amz-Signature=1cbdd11a2a93c267306e300a229b54475414562a9f34345e95d78a1dfd778799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

