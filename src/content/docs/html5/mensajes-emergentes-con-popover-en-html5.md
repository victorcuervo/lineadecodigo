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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EW2IXD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1Y2LFKZKEggUrqWZ4mw9fAgQuJm45zn%2F7BMQecdYzlAiAT%2BwmNAAr9QcHDpCmq7m49phKAGQu8QwS1YBWNM1eUWir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2FvuxJL%2Frgeo63D67KtwDifpuNW4YBHTN0%2Bh6gmkC00Pw730tK9Vv%2BbJS%2FlCyKGE2ix7sjeBAMaI5xg5rQc0FkENkrEFzgPXYPID91r4ahl5hcQP%2F0jKdpsHRA9p6%2Fkb2Z7vPGAStyRDPdRciTkgwTEXZgvjcgysYFzbcoGlmhI2CnSknXL3rXDywn%2F1VX69Bp46yjgHKd5MruDyIKmcxP4rl6WWSAykPpUNYTGHp9Kmw9G4FJOfGYI94y3gXC1yZWbtZpdlQ1pFdCazVp3agIRDuG6heuDaHwFxUNFanF6LI92DizdAjdCdT6151NyRrHzuZ3FNf9cRCdMoPv%2BMzB2tDhmOO7q6o9N4tgaiwznNwTjUnh%2F63Tx9YLJxKRMerl4iy%2BXmRUbuA8x%2B%2Fa2S9DiiIM1oFh0RTIpNMDjrqtGoKY1ctTvdS%2Bqd5c%2BpJiqT23O89fCnTuI3wRpr%2B08rEJU8cxTzRr%2F9OqM%2BKMjMxdDg%2B2rlFrYbNwP0AHSW8AULGm91DVoOrsfXhF5x345oa5ROGIQO8zBWfppcmOE49Adc5gxN3t9CCAmpgbyGqeoFYkVrkseqe%2FUDNBg3AWpAT8gdlh12uUm2pi4Ps8qIEuP%2BxzwkBaIO3kEqp3dcEh2h%2B1XxuF8iTLTTPn34wuNPSyQY6pgH5ATKsbqRX0oe9OHFbAAlxcGoUpvsMOME8QL3NC3Zb1v2ZFFkjIj%2Bj2HyaXO%2BVgrPBwK1B6fxiz2gRNZvyxgwrSp1BJxGI95%2FVimsejXVd2Nvwo8kDPLfbBzq7aTU4cnXS%2BActAUQPbj7WTIf9EWk1SCgLSahLlSN7reQIO9L9EcmkPRSfGRg7XYLpXL9UgQw2pAzF4SCdy6IACgGLg2K9B0c%2FMv5H&X-Amz-Signature=b0b9200aabc77f28ae6eecfa2e5843e12d4ef70e85e4c8da4976f01a02994653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZH7O2RC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXW1U3q4%2FMHm54dS13BCGYxqSekNsnmZ3Et0phBNSihAiAAxzxmLFXhtds03GKlNKqta7tVLAfopDETRBt%2FyFZhzCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0kEMqp58G0o8ln6pKtwDb5XAQrF0HGQQub0qmT3%2FIyYhxJMCx604c2Fmw9%2FOAv8bOQqbXG9%2BLOh8QGB5OlW8chRR5Bq%2FQ%2FR9kRd721Ak2K000MzYBfzJT5V49d9CETktwMdFSXlgvv18jvewUirzFr9o76H1EN3V27m%2FlBtulj06astn%2FVJzUDpoGrl36RQfkJKJhXVNBc20gN%2BS7XtVVnqoPs6WBX3oUtwTexJi7e7ZTvU0HkIzkSaQqZCPbj5pU%2FhKe4qPZlwEaxXbVt7bNqK6bfiaWNqQ9wHwcVS%2FRteHbIqsngy1ZSk%2FNXbTI%2BmiwXK9q5ih%2Fmi06HmIUWScG1uKusrqgnbEujJR6Vbd0k7vfciBQwUabErYDecS%2Bgek3MogRpHx6mOvWSfEfZaMUJqN6kdVDjtcxhPEKIzGX2aqCDA71ZgaiMnLoZnmHx0EsCqZNUspyp5VkLhGsuYdY3dUnnH0gXVTCfpihpyn%2FaMw8zWnnaYTUAA6A6qifi33k%2BMHL26tHx7iengleb83dXVdeG%2BuBDqlMZVjbrCJQhwaBDqM3DL7AEHtdNWZxy4%2BzjGApk96Z49RunXfUn%2BklE22NRGyDLWH0WfceueGVW6H2TrafJ7Hg%2BF7XvDB8FCZIlCgXdb6TI57tjYwutjSyQY6pgFqYKzIcxGh9H9LU3e4LsMjaEzukruS3UsLPByG5Q0Wa4tfEutrjdECLlp1XmUNEyha9JGIxCZzpTCd80m61l14DvNaAMtXCU3kh6MspkTz%2FYzbHlePaJSdiPQUD0L3sVy8Pdsif%2FvmV1KUobEbJsP8FhISJqQ9dnstsSSf6xdqTvUPTejYzNHwadwBhcwdOTPbP21VGI7bjZhVNjUaRlYuVSt9LCC9&X-Amz-Signature=2eb42b627410d840b75c7b2a6a8f7bf35f28ed5699b71f73da6593f228bf8969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

