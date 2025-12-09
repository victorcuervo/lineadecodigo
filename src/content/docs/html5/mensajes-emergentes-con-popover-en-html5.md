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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AVI77T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqwCAcSbGr3tWrIfcgJPUMKZzUXKMh27kLI8drIHcDXgIgfWOVt8X%2Fj1GL6Rxa8Xsf2TCrcdwZtp6c2%2Fxls%2B7Lp74qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWh1BPqQohtTjwPLCrcAwxo4kPWvoq%2BZ%2BAUHtbHtaDa7nutbT54ISdH2axO9CdDg5ECMzGoOfj9bnzXdqQ6fZJUsFyFefafkemRSHYMlfSJJfJ%2F68yaJHxC1bwZRhtzk7TWJyT993ZyhtZ3cnhT05YDaOIg8RYk%2BKYnaHfxzlSaZQ9OnU3Mta85S8v9j26MTO5u%2BqYRCV%2FWdVfuNyeqOTacmWF9qyaR%2B20gVTFnNtqvEbBU2a9XQaU9CSuwtH4NySfItNgOxUA2IuYSHufZpD5gr43mK4DIasupWRTe%2F0kYS6FIXejSE8uGWA7L8J00K1Rewrj43dPxGfAABWrCMcLoQSgIug1pbj8X7FvHOIOUTJUDIaO6iedjmG3nFo13t2Ikg67kLqYhHR%2F%2B%2FLgThjFkpyOfUQ6Nq%2BHNAbrYK%2BxTuQUJxZv4G5TmalozISfOtPbd6F3jk3cyoxLIaKt%2FLJYye2GrLT9sKxAgZMhHsva%2BH0Nlv%2BKMHVqtDkRMuguVPjXsSZiCHXP%2BIZkF55rDRUXgsTY4iA77zStFl17uQ5P%2FhlbWTQKyStuCDeL0xvHc0%2FOXv9%2Bk7pEtkviNUpNEkKs%2FN7Y%2FLLFxDIrmRhgC1D8xJDmkG6qlHTNhsFP0BvqUEPQ8a7kIAoawiFJdMPSt3skGOqUBpCTIjuKzSenQszaBnkHhfdAAhcoSY3Tt6Ni6PJRKqX%2FHQZwUrrJAbQUPm3weo5tDLFKYoGwy2c96Pj7Kfit%2FGsc2DFfas9XsUWdjzON7CijTgNqW7S1Mq57B0Rx7x9fYCdC977pJI2MG8Wo6KrDH34DAQeaofVLnSm0fygPUcJY1lqDw8IwRQoSMTMuiL4QaFmx7UdNHHUX2DTfm5jHAoUfpVD%2B0&X-Amz-Signature=dff53252917cb63cfdf5650e9dddc719f298a174eabbf77f700b0bb884cfee24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJVC6O6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm4eA4cL%2BggbXXbiSjtGBy5x%2BtXmwJ6qQpgqQN6Tk%2FmgIhAJvRMTJJf37kZaqQWTMmZYcu2NmFl0tIdw%2FHwDywMuXSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsFMXZYYmEutOIFCcq3APWA4g6qAirvg79CbUg29M1FGtt5Moapf4CG5BQDEOsTnbPvOK2tHH4dAHaKfYfWeRIDThHTLH0N8kfVhVjHtp05QmcV%2F0BGOVaks%2BWXne9sPzyvB7r8NNYHutp0WeRVLbB28iBCVFZx7y7biuz3nvt%2FUhMb0sGwpyuxa9JAUVCoTMCHanlJX7sHNmdmdKIUFSceYS0tOBZ2JjmDPkCDGqRMIdSrtyvrpAenkngg65D1KcWP20sNS5Ty0jlkX5fVVj3XCSj5OVZVdD1XrCXUijMZ5%2FmqTQn%2BqZnB4U%2FelnG5H99cFs8nED6Lhhje1%2BH5skXOqXRz50OFCpuJU%2BgMYjJCDmtuiyRsYD1J%2FcQaJ%2BrvvYFkXoiTxKZiXud2inPl%2FXOwYRTOfP2dkGtbzP0afwXoJytkeX8d8jzKfc33Z6TOsgnmMBExImpdU51p8CN6iNxi1wWdVZHJpq7h2XzbTcu%2BspBEvUfaW3qazChBr%2FUCdXpC6jltsGFTAMAhpDRQPqRoMJ4Q6SmhW33HeofEQXeaqbfm41Dr48sE86ylJQE4BdMwFrpopRSEluIYohtoVAxyiJVm%2Bt0WUbxq01pDSMngxYGygxf2TiDrrrzTslG8tzaWPgB0HMzglmohTD8rd7JBjqkAU1lOa3BsRWNPM7XNur85gPb9ncOLhP3H%2FBvultjPi1cE5XC2gG7IYG1bot8XKZrlEZabUIdV0WI%2BLfXsReaEjxhTOjLMkyoxVof2KlRwIDIumPPalX9r6g9CTVxCFVSb6yQOSzyORgnj1OpHK79zbFhdyhoYtXk9r28INO5thZH4XWGZz67HxMGCNSDwp%2BqjcKO4%2FAGCIKhBawOzPFNKeUrlXtA&X-Amz-Signature=28230e8f729a2566ebb53a5a25ce653fb97e5b54c56839711c45c1ad21137e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

