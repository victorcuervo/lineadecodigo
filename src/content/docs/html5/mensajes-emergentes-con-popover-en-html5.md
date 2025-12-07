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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMHXJVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzDWXyQ4PNuSfs0wVh24%2BEyNjxGYmatWSGa%2FfLERdrDAiAmv20aJHhgYb5A%2FIrruABGXjC0FtKmdBV2OpxYjLQ3CyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVEIkx%2FCi4l%2Fi6wLcKtwDziMfrhkAFOMF4cygq7zbhXTSVk0XniXFICa9PedAI33gA7Y5QqJ7tJp3uytRkCfKi2dlwnP%2FqxTj%2Bme0BKEiau0EYwXYSFxEMyzrZPrA1NZLluNAy43S5p2Hj9AXQmIBYwfq9Aqbvtclviy0DCE2qb85rAaWW7x2p1oS8t%2FHJ1z4CX0Gyxsfg6g%2B55cPpaW%2BAXPK83aJLbnNP%2FTd0y9cEmmBNn9qLNsHGPqJMwIA8zYuOgoWyETDS9loSCSyZW%2F79MfZVipVSV8Q6oqg7a0LpqfVqbHc6sPOA0lC3xm3zm4AiTLYK0bfTUxTjCsFYSuHNWNyAV0EoPwmi8qWAR5X%2BAP5hZuO6yGQ0XAZ9KjdoRLSs6hj4PPyr52xqkaorwSQAVX4DA6JY87Q4VKdWA7nheV0pcWFcz8T3Qx60W9EMgDhCejN1y7OZwYwGQR3gwyoly9q1t%2BAeK%2Fu98HS6IFqIz0wMxLRaIBJvSBa%2FRIhzFcnlXm04RbFJmrJh5%2FYu7%2FgzKgHRuy3T47bOTtY3GQ1Ol3mTA3siMvc%2Ff3ZI67eDpXzka%2B8313Pj8E%2F0g6uvACAA3KX1KpYujVJWN7UH4ILirwiTtIOi3YvT0qNJ2ea0TBZ9ASbaCeHbKPoxAowgqLUyQY6pgH1R3y7v%2F54WT%2FtI%2Bew1phMzRRZUvzSQaqZAR5fS67u%2BMJL0kpv%2BD3JFRPrQ6xSS%2FQSv2bF4oDCKhrt48PQYejuQ0Xb%2FddwWDA9YiOzG0qj6OwA08lrNM4Gu5bhcG%2BqzjndJjnDeHlEOuAwIqUhre3uz9%2B5eOE9iyCHo0cEug8C%2BAd3Tj9qjVj11%2F8FWQCF8nIEm0F%2Bc7EXOUlsQXjJenL9iUy3e6A2&X-Amz-Signature=63ef76616591ebf5f3232cc92af438fb55c911fc9ec4f0e0fbbfc632c226af8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSL6OHRW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZRklDxqBCClXueh6Hj9gYlYe4CfTMFPFr9kFAGe8mJAiEAwnBTBVrdSyYnpwFABeFXk3PGlDyBPm6l9ZjXUDuflYEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG4uza37FFk6iCLnCrcA%2BeaNF5PF6WOMV9Ligky20VdoiUCnZ7NoPjmmwNQguwXgkvmIJYInvroRKKvs%2BdgdDtKNFJ2AQ2XOHifbjifuIWhwcrLpe8osQonE7GW07jBS3sMqYgp0%2BWVPj0jsIMfl6y%2Bbjnx29fSzRPPbWUGktJZaawCzNX2fy7zZzOgPpGsi5f0hNqc9r7gUskCNIvdbQLRW5jlv1Xy5DXUbvImQPgMn9B5b%2BHGVV83akJHrjnEo6xCDI1MRJBDQ49bk0xMDLE8sPYVlOJOTS1LnD%2BFEFwsiKrxSQVwvbxMi3ofclNGGaleTThiewZG%2Fv0IRgIPWzCy0fzytPwOecnLRWyOiLpfVmf1MT%2BfIXULqpfp825cyhljcq3KhOGqvV4eCBbZV5Rw%2F%2BA%2BTA0OCn9qFc24Vt1m%2BvJ6v%2FPxj8UosLnyrcFjrt50qizIWfRsfHZMlkPfk8%2FpFWqUXzYN5RoHQ8jr3aXGgvTajogt%2BgdlUSWHW2kW%2F53m4ttlx1I053wSZ6%2FRkI1P1OMM%2BrJfDBQmXIMv1pb%2F0tyTCLwBpWjtFMGiCpbqPFBrBFFE8W7QXw2kpbGAUWHIHePeK%2B%2Fp0keHCPCK5BIPZloL44k8ZIO5HtSDkRo7RwP6j%2FAR8D%2FsWVb8MKmZ1MkGOqUBf54R9JFOpDujVtJbKmnMgzVCa%2FaRsTyn4JwOAzkD551FKTr8CKiWFovh%2FFfsdGeDlHtBf4s3FEFuBIjuW%2BHeNrs%2BKWNoY7vDR9mO3ZpIfPV%2Bi1Px3%2BoCbXK45h9WyeA3i04wmYFECdqE9PX8Ei%2BsSIH7UoK6Jy45lSZbnKV1degxyI%2FtDu%2FGrKe%2FWrLGnyfJSmfbr%2FWb%2Ftf4vpJSxOs6Qpwh56IF&X-Amz-Signature=9369f47c71a1daca56602b4818493a9eef7e666994973287f18b9bbcd0c2af4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

