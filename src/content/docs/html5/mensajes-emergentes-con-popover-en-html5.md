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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H6IVBK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCimSWE28GBR%2Bjw%2By0hXKrwEuNtyDSfthwMRJQNoLXEJgIgAlhRBA8E4Tu207vb%2BoSOzi1L1%2B9oMI2j3aFdDWEBpKEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDK%2BHeIVa01f5%2BImKfircA72CtyggvVKXyv6BcvaxZJB8qnhqckrCpVTqhDU9LsGo2wRMLkwaHAd43CCov4pSidqSAnTf10JbKj1HFWAxyNSrcDsV3%2F8ug8NmXwxeAmlr%2Fs8AomC9mkbBsN%2BLdpzIO71s3QhIn8VaJcRrMt6a4cBVkkhTS95Vse1Rw6V3iH1ptI7AeSC6gzS8xhBZWJHb5aOpB6DJgDtJh97ZE7m4%2FxdqFgKA5Sbe%2BG218NVVATImTKCyO6oZzWNQRb0xmvscwl9yFGLU%2FCVjOe4ujgOw578WD8CaCqFRpbp%2F2x87gBWdPBCly30ScAwU5qPJXaeEGj0RYFsT5gX2Qwk4md1W1o7Jxsmh7aMY%2F4oknCL6yZqUeFndJr2hk%2FDA7%2FFO%2BW1pWsWHFdMpKm8xAiythY7BOs%2FsTjY%2FryURemWZUHNmYQenNkOXF5nNQB1TLC8ZwGKKMGc2GCab4G%2BfRj8tAaKDBjbC8Um9IFhId0%2BaN2K1LKm7dk8zE%2F8Gna2GJ0CvUWhap8VvghR8hAcgRpNbYgE%2FBW9ksgmoV2Ej87IoVgbqfw8jSonoPq2VSOTinw7%2B9iyZzJ%2FUg6%2BH4WlQ9pq73HOg6PDA3wMYY2pOPFx1v5wR11ad1Xz47052znRWegYrMOHyw8kGOqUBTvepQE4cYyakMiTIosfv36Ky8ZAsRiYig3ilAlS%2FmnlDf2r6B4tlP86f%2BxmMa%2Ftcn6QoX417q%2FjOIvkxjv%2FpR3DLrgLCmF5C8n1yBQn9U3w6aGsbL2yengkS2XdK4AvkOHtO7MQatd24L2FaQDOiSUrkAlHqiSaAK7y4vFSRaXHWScVEtVeQdEjgifSV6JFlSPcoOWGgVoFNC59SxSgxPCA3IiaS&X-Amz-Signature=adec8457b1f0c03c0013bc94b6f89fca699440a2cd033f31c260f326c6f74b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QZI3DA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD0SJnaMGa8oVXciPW%2BkY0erc6%2Ba96S%2BTkfAD8J1zzCEwIgZXRuam3hYIW4aaq1GFuIh%2BkBqtvThXTLYiGQ%2BLqW7Psq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDL%2Br2t7G5Qe6rXotbyrcA%2Fdr1nJdJLLRxD1XC11KXsn7ytm5RXA4POxddP17rzAxAioUIwf45zC0z12VSsOxxK%2BXCo638EXK4WrNhF%2FJmGQTJEayK4BpxAPX1mseE0Q883bnqX6mg%2Bu18WekzYFtxMTWd6SMQpS1FyHQKrG9I2b4tKKqQQWTdhVEFy3wawKYP7QCDJhFJT%2BgnlZ1%2F6%2FKNuZoQmF20fhnTmshLpgrp6gKg5FnwYChrYhbM4xsxNPfplVRoTY1qqD99Op%2FDeFiUXifHnIoo7YdKO69zRETVPsIIloGXMrbQAw%2Ba3FgNZDuRdVFqRnim4AHo9gK5WepPY5dD3AAVi0oIxNHcoeCbdeHpFw6gdtsTibE1B0IjPGyzCuazv3%2F9Uh33RvEXpigBBJq3IVCbuRpQirk0o8c0dGcAodhVveXkHBx%2BAxrKyWSuDsKsP9qbH1OorPzFxkUVSJaxEHpzHu6Hx7jJlve8KHdXm2VzQ0aLiqWEyT51H8dUKnXYlqidJZnoqM%2FyJ4epGHCaQjHCYfval9IgOKgzEmTW%2FVT4qxSN2JLnYivFZIRWz8N%2By%2B2n1swIpWujgpKR8lx3Al63u1CCiDVqZDbhCm9u%2FDtF1d2UA9PfAousBp%2Fnntocb%2FsokKBekMTMPDzw8kGOqUBOFDuGgxzVSDccx2jx%2FsbPxRD9XNc3ikjBQ0cmhAYc6IJ%2BKqzWCCJqhonYLPuLTYhy4M3Y04%2F6CPheq4OttdvMIky0dUlXzv0DkBXCz%2BL4S8PLhb%2FbLl83xhmcTBA3VZkqErPGrnanplFmE9e%2FrbjBlJVbcfwstsoVulfVPE%2BIXm3XJAdqQCp6H3joJ1Ia%2BusiNxb4L4%2BhbPJ3MAOjvZQX9ni6c%2FS&X-Amz-Signature=a32b0209b0edbe1bdc7ae236b2951e1a48a8dc262ba7153b003c62882dad9e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

