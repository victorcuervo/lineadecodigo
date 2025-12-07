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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMHXJVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzDWXyQ4PNuSfs0wVh24%2BEyNjxGYmatWSGa%2FfLERdrDAiAmv20aJHhgYb5A%2FIrruABGXjC0FtKmdBV2OpxYjLQ3CyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVEIkx%2FCi4l%2Fi6wLcKtwDziMfrhkAFOMF4cygq7zbhXTSVk0XniXFICa9PedAI33gA7Y5QqJ7tJp3uytRkCfKi2dlwnP%2FqxTj%2Bme0BKEiau0EYwXYSFxEMyzrZPrA1NZLluNAy43S5p2Hj9AXQmIBYwfq9Aqbvtclviy0DCE2qb85rAaWW7x2p1oS8t%2FHJ1z4CX0Gyxsfg6g%2B55cPpaW%2BAXPK83aJLbnNP%2FTd0y9cEmmBNn9qLNsHGPqJMwIA8zYuOgoWyETDS9loSCSyZW%2F79MfZVipVSV8Q6oqg7a0LpqfVqbHc6sPOA0lC3xm3zm4AiTLYK0bfTUxTjCsFYSuHNWNyAV0EoPwmi8qWAR5X%2BAP5hZuO6yGQ0XAZ9KjdoRLSs6hj4PPyr52xqkaorwSQAVX4DA6JY87Q4VKdWA7nheV0pcWFcz8T3Qx60W9EMgDhCejN1y7OZwYwGQR3gwyoly9q1t%2BAeK%2Fu98HS6IFqIz0wMxLRaIBJvSBa%2FRIhzFcnlXm04RbFJmrJh5%2FYu7%2FgzKgHRuy3T47bOTtY3GQ1Ol3mTA3siMvc%2Ff3ZI67eDpXzka%2B8313Pj8E%2F0g6uvACAA3KX1KpYujVJWN7UH4ILirwiTtIOi3YvT0qNJ2ea0TBZ9ASbaCeHbKPoxAowgqLUyQY6pgH1R3y7v%2F54WT%2FtI%2Bew1phMzRRZUvzSQaqZAR5fS67u%2BMJL0kpv%2BD3JFRPrQ6xSS%2FQSv2bF4oDCKhrt48PQYejuQ0Xb%2FddwWDA9YiOzG0qj6OwA08lrNM4Gu5bhcG%2BqzjndJjnDeHlEOuAwIqUhre3uz9%2B5eOE9iyCHo0cEug8C%2BAd3Tj9qjVj11%2F8FWQCF8nIEm0F%2Bc7EXOUlsQXjJenL9iUy3e6A2&X-Amz-Signature=8cf3a683139c1175978237650b830ca4511e3f24abbff86c0a0ca1a1c17e11fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE5M2R4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCghjUYPdCDOl79X%2Bf9Qz18C9UMW1ubg6l5UioPb2J6CgIhAPNUxSXLDxyapSjAkkpMiyKMxrJbifrYecHB%2BSW2tlJXKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxHPy3%2F%2B9LI1Uj0AMq3ANbq1rATrCWbUu6tJ8l2Ud8Bytu%2B2oB9TP1GSyCe86cnXqo08UD5ygb9wUOIwojGGYl1y7%2Fg%2FnFlMuxVIZDbvaj2n8OlcsRvFTghYek0jIw%2FVppV%2BtD3XdBDXbigT1X7iQ30a%2Fell%2Bi7uMPzv1rELzzdM3bpIsvd0mvy9xKxx%2BIWVAYT2PEogVttqNVIuoCxoY5lsAtFULiFbYYey132QbFmgJBMwPhctGBhxx9L9noJqg3codSQ%2F22Og%2Fkvr5%2F6rSTK8wuvISAYTdRhIG7c9u04F%2F2YWRvfIqKx7PpzEuqc7nf6Qy1f92EpQtHAiM3JBag%2B9hPxp125xjHFiWk3rwMhZjxvEoTtAR%2B09FwFh4%2Bgf7sbONNTzrI1RM%2BQ1B6E%2FRRvMdOrdtcFu3fXkWGkNncmsua%2FPQ%2FAdaLZQcTgiKf%2F6vQwrHLm3xvneNwfBD7s%2FOKI3QGjU3XxAmsYITi0FHzfasTnbkbZZJJBsWdFoISGelc32UsC5LDHGtA8VPnTFC%2BsrFRiwQPNR%2BvUj2ClTFnq59lFyz%2FrNtqk%2BNlkOUgfqIfxDPWYCF9tH7p%2FjvgUKysWJxZZY2FaZ1%2FlJ%2FEpf0RfS%2Fx6XO1%2BIufB3lHQjdMpgqjtaM4bCaPvmH1DzCpmdTJBjqkAbmToBdbAV3duxDnRtX%2BrGEbw4YxwKyBQQnHnu7NVUgZH2Dp4iPvfwsmfwy7d6BQhJ0MBKfSLTDCT9JUWRWBYaov2sta%2Baaz40oTXxhOCdCryZ2cev39ov8v4N6rnzdeyfqPUTw2WxxTTmvOngYLMYDAG7ZPUUf%2BzScd8x2xL8scF6LnY61mXnp0ujtngFb6ad7QZkYgZ7YMv1dBpcgIznJ%2Bcvhx&X-Amz-Signature=06729995a05f8c261bbe9166cdfa1c3fe73df4a7db6254c182a7bd35f5c348e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

