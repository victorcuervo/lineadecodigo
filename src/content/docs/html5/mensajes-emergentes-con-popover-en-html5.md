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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJXMRK7K%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzayHG7zMdG1XlVl09e2xsT7Y%2FYfMlr0NVa2VsvOFKfAiBo%2BQ22AX4d5yhHXP1g4czSUsGMXKb8%2BNxV95HIi6jE0SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZ%2FRD3vXuudKNrKQKtwDjh4RVwVKQqnPiXzgVmaLk1qojxt4lLNZqYUxudzhhGejcyPjQeRCZU9tHskB6Z6MBayS8GWExeue0D3vQeEfFI6uvmHt03IChFu8Ypax8dv1JJBljQQIAe6LhPjbo5TiuvjOABmmKgNzdraO7Gyl9XnRwTph57xcp2SQ2u9mTj0RiP%2Fn5oTcf9GicZkmVmuRMn%2F4T2%2Ff1HJvtzxohtvAqnZap3dN98U3Ux6kaU5%2BKAFzkSXNgqSGyqgV1XhLvCbDdjXldtjDpJm1qAeIgIlYoDuGDvPxWiF%2Fl9XxvRCyXjNqXDrIJdUUQo5NW2ctz%2FFDX49ebU%2FRgK8Adzgx%2BiAYazEwH0%2B60hUuuHpPnlKVKOvdKK7VZ%2FBk%2FC0MTtZ6ZCnrAm7bxPULQHsUqlH3DTl3ZgBO4jK7XVwMWePBCQIXMQMkgL%2Bn2NSDO3RRhUprcYwYSSByyh13%2FMBibpNhFNEGjL5itEdurBsmTgeEXHPwfy5nvBFeYgi14ngNE%2BpvCSpPSVUqWQgYvv0OxQlPsZGPjUK8gos3%2BLvVWHcVdzvoaQ8j5pI4I99gyRVWLy87DwCAcDzUfsbv2pgwQWrxE4FMnPiZnqe4j0RLs%2FMQRJN%2B2A3uHJQOe%2Fsne5QA96Uwl%2F3SyQY6pgG1%2BexwFa7FTOPWjNsXy%2BTLF9fXm11fFe7OvAmDjbPyJbcslQFjh7ndHCapNWA1a%2FL7a9BH%2FINhL%2BbkWyk99o8l3I2MvUWXP4NF7ZrBQ4Vpp4SLxREAzAwyYwIcGOdGHyoSk6%2BhzV%2B6%2F1IP3vgFWXLG5c8l%2BtPYpAhb2m94cOttpemFMLD0%2FbrQe61lkFm2KPLC%2B3JNDfOoXSdEE5BHRfmV8ry0fqeS&X-Amz-Signature=df059c860696f7630b433c87efcefb29e95d63ca940b4bf21b732b05bf72e0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDEPQUJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FOyFno7L6%2BAcwbE%2BEMAvuQE%2FFIlQIarNhT%2FfmaXr2HwIhAPTLWVF2O0bLEvbyHnCl%2B5aaDRPt6MnElXfAPWBnA0oJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaWMD10z%2FurI7YG2sq3ANP45XSDzHHkDwVMdKotnTYXtjcmZegBMNVpwZUHAgYd9J1Q2SnXzUMOJz2SvJgWWatqzSSTGdEfF9%2F%2BmLAxJUMjvvSGztJT8HaiGtux%2Blv10a%2FEczClX6tulp5c4wTJBu%2B%2Fu7cJK4NByvnbfanYZaC42GFbHjNkxAGSgEMkvi9fo0EWfMclb4EdB1ayYAV2%2FiaVLR1LdeF4QaTXNJ57EjjkkLKpiH8LkaW9zNlb4c9Y7arLbJldXqsnJnvKkFMMqnFM7aB01Cbc%2B%2F%2FbRY%2BBAQm3U9dbz6p4DGI7dtmgxLTyxN3fphOF2U%2BHzmVQTcKGDi85DdNOwFhis5lCNR4F7fCwAFB7hK4sqAjtRR8u6P1i1V5en1Mvh5UlAizBxxkscSFvbxnl6Fw%2Bg1BfYoZDnGkQcAh6L43RUHoohsYSGTO7d4TxaQ8FoGnKBJbRtzmM%2FIUoSizmSXqXlB1mtW%2BUnRFDkpWLSoHAAPPAWjMsTXxxLubaxUGOGYvPUjtNgSqPGKhI2JhEoj2KWokY5NGo%2F15%2F1y9fwT5tHJAz1XEYsEnJQGrQnT9%2FcK2JPwAwB%2FlrfalKCh%2Fqj3Ni64dCWaI6ioBWhl%2B4z8%2FMHvyxpVOGG7sUAeD9FLly4Ao3Si%2FeTDY%2FdLJBjqkAf3BZw%2Fs%2Fd%2BpfKkJ1MMwZTdl7vDCpRseVtlAolRIwXa%2BXOwiF%2B4JzASZ9JhnGqTV1N%2Fra9zFa1rFGqCRu2W%2Bnth1TqOhHNyhjNt%2B46QDx2rHKmpcQw7lnic5lCR60JtuC%2BEp4a4XAFMXEXzuB8CS6FZ%2FKaDmeC6RMOGoeULVTD9HPjE5mt33pSpVbw4lfkvjOrkI6bT1W9ZbXu6BmWWLMLNSo%2Fr8&X-Amz-Signature=2b7fb0a11f3e9ee3c7421b8883e4b00fcb3a7e4b96b34d1b2008723a409f69fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

