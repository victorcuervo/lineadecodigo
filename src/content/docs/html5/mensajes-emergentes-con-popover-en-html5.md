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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKJEWIQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE0gJvT6aeNsHzmDXf7VYG9Tr3PNj%2BBh46hkbVxRh3jfAiBZ05wT6ef0bl7FDbLLiUG7C5S1Ia9hsvN9UvgqlNlP0Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMzYv4ErEmYmPs0udNKtwDvf%2BzZlHmt3D%2Fn3fF4%2FqH9iHmmEND06t6ncnUnTM20xgRNmLE5PUVvf8Q%2Bp2Fetwty8wdzcGUtqZRXIwjPiZ5HXDPL7%2Fw%2F85hrOZMas%2BskHA%2FepbbjLM2Ro%2B9gec9IzRlYcA28vO4pGu%2F%2BwGNmpGm6f03%2F647%2FSictdzndQslxOdFYyUoNNAE6xeikWMiwe24igAYsqbP6AROZOf7KiNv0%2BOeU8lkHGWPrQ%2B6ve4YQfR2wRL9nBipmLw4wYD2zsaEDbzId2W5xZYjb23DvqkMrOmKcJEG89u65LlMve5%2FTnsvtg9a7widd92AzySrrQ%2FArrgc0OXqWXeUGucRdylPKGNVRzH5JskOwGO84ZNlOhXz3MrXbeHzZTxHLyhjd%2BHipm2geV%2FFoIwA1u5MCi2RgAENgHfO14STBWWsUj5%2BmRvAKXMCV4MIYsx9gE9YrNGXROFl%2Bcxi1iveAQTP7m9FRnQ%2Bga7gLs169MaKeVejinR2zl0lY3zXV9Qe7Vg%2B5c%2FQO%2B4rdubkXL%2BLoxzOp%2F9%2FVZlr4DGsbOFkbKT2y5zQb8tvqR6Fmd3xD6e0heQLK4l1sFfybkV0Hw%2B2UaKCaRxanyXjsINwNzuY443durqkEPo4fTpOBX2SwAZ0%2BVcwipDEyQY6pgFPd60GZXE25UKWPUQB7BxZ9JlO8XJQA3TYkmivQEne8Ou351O4KV8Jebvk0NRxE1g7NpJZPxdM58VQhwcEKt4IBuLrjmcIkdDaKzhpY9gidOx1D%2BoJPASL5shUpwnd%2Bh4S2D7mL69wq7PPuRyXSepAHByk3fRXzszH715MZRnIp5iqfHjdK3NN2Kwbg4YFR6YqxMcHiq6qEK3kstlLIIizH1q9z1QD&X-Amz-Signature=50cc33890ba188b159764d227891a9746ef39c401d7c6eb4368230062bbc7d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J22HHEN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBSezatWWfmuZMv5HWNY4uhPU6jgEH9j5bJyVDPHElp1AiEAhkScYxE02T2pCx4BGZajk0pK%2BnsWOnBL3QqOs1OQsIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAk6D%2BVXO27hRhYQoyrcA%2BFhrfqFuANxq0%2FI6oAjWgua7cP9Gaq2DspjffTlCYKJXtYo7Ec3mNaZunD39NDxEA83%2B1hCjD1KYIURWclqTC3kG4%2FSxgag7PMg%2FaQA7JC2PT2uy1Sa82cK%2FOXhTCyNNc8jpXUeX%2FCVTXFaL4R%2BElR1npV1fcBlYjLBi2dBFdIxvSMBeFdS3Z5sqSeTF%2BMdI1iGBkzYVxzagHBP19fdY7TemvB91AQaSzpgdUnOP8g1ejW2BLlMpEBXdfGGLK6aSadKx%2FVu7rUohZKrd7FpzdU%2Flm1mJs03%2FVuJ55T7rQ9tIax28aOPwEbFrReSKAH51l%2FBeb3WV6HazBKq%2FfOyaj45a4TpwTon8G%2B3NOPuLjd%2BDiX9niVKR4ipE2V5xHuLsn1HeOX1711zvmkRFccOUyTQH%2BDwoQQLftbMQnbipCTEV%2B0nIVA93DhT5COjEuctavTmv4xoWFpCulpmvG24q%2Fy%2F%2FM4xLTPqR0yvKoRsJDqIMqRArzbqx0zojWLIDd5n%2BlgCnrXbCUDpA0xAhoc3uCHBBq%2FevtFT6HOcs4Jwr9sNkYui6wsHTHqVcYJXT%2FXKN%2B2XJKyJy92bJKbCPSufOQ%2B9HUmeaeK1O0Ft2PvIRb38VpFAcMhDZMX0VGVqMJ6RxMkGOqUBTS0QPqtjA%2FGPcw8NMOwVeFcW2xzT3fZgq31cbYsSqfxwujy2BLn0UoQmTroa5xP6n%2FCZUk84oXcUgcZtADQpeZGQFGlh2o8bu0Yrw10JeVmlsrX9jd6ajDBLeFRaFAe5x1Ps4wBqMz23FHyZxHI8jDDrIZOkOtOAMcDHfHbJ0DkeKdb5QdYN%2B%2FqLISCV2%2Fb6j%2BwdXepCYoAlfKEftOXtweAE9zUr&X-Amz-Signature=aef1b739513f653b49c2c528b6dd30eceb1b80333257ff2782167c6874b8a9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

