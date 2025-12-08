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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DVU3I6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH34XZIgNEZpRCwipI4qpbzoyq2%2B77Us%2B5ImsNQuX9oEAiBSgkysQo7ObRqDvg%2FNRXE86GccV7aCiS2FMhniXdNfuiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNUeNhwOiYGTybtGUKtwDkP64hTkNAqjM%2Fv%2BZQPjEqaxhkxCyFMaDOtTK%2BlKYIOISzfpsOM31W%2FZcseSxp5bB4hjC3bL8xS3EhRWfZx4UtK7rbBfmDbXIrOEyaEqSDqRYBHkjL6d8i78kdtbRV5n8zntjy73HwbeGCyoyA9wW9CE78IDIZCJKOxjWwjci26Rsg4lLGWZYNwfS5AO9FQlBc%2FctRQ6bWfDo8Ki0LXjEuJ7dlVBysPASsSudDrhyeHeHzeTIZFRPzY7OmX%2F53nSlt5SprF3u%2BQiqrRjJHlFOdfJ38OsBfcw9L7%2FMWBXuNXomURPHjTbSzYBAzZQbt%2Flw5nrWg3i7JbS7Q9Xbh4BuFcOzysauu0v80Qt5gsbJ9xBqjSGSIknOaM%2BjcIO0rp%2F081OqjPMbrwR0zP%2FOTh%2Bq3U4ZYFSRKzOesp2vWUKddhtTjIfKh1bQ%2FktPFoza1uzEs6SFAc%2B7Qhxzga5QU%2FlqNQr%2FYCdC5Jq%2FTavnRPtLh6WabPqzyDVRCmQbms7VX2cB4S%2BrZn7Hb%2F0V9330YIQF4c7Wmj6UFwtiyv2%2Fz04LPpTPTpNIehTP9Hg5n0Z9KdcltYi8gpWpceJc%2BNoSsH1uHLWhaCESzeyyI6Rz6RLL20JD6TOKO7sNQpCELs8wzZTZyQY6pgE8KjF5Sqwp%2BgBakBrANvKrPRtJVez5AbuqC1xgrGwO6YDnsY4sNF5gPDZDNQPmXDrtM1YGylI1GeVfOZSxuA66savfjNET9RgxuhoVOOHRdkiulexHznLW4iX11VeeBHhN9nm8EdsbUX21Ubxg2mVG%2BviLXYK2XUWQVPyOyAn275pi8UsZ9y%2FTwuOUeTUMxcA5oUW8JL0tw3b4WGZaQrEZIayO04Dd&X-Amz-Signature=089ea07be7824f59987de5f30b423f74e02bc9071b97bd1ad11dbb6e31fb9891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKGXTDQI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDocxHISZYS0vgQgGRHp8ezCk0gstCYMm04FhUV%2Ft8f3AIhAP7%2BWOCgK1kJR6AwEu7a0HvLrbzL%2BugRWssvUrwg4fZKKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXIJbBWZATJ3suXhMq3AM69j1vyyA2bWbaT1wBsTv%2FWoQjBfJhTWgtyOCb6axdYvEDjmnfT4zV3FvZ4WSPZunrZwWCzb9dQB%2BzsJYMS19h%2FB5agPmRYDHZeDXqJM1GT4DVlQix%2BIGY71RKCeIwoe3HIuynd9AyI1gk8zxxj5pPdXxPIr9ppfcNrIab5LAH4Yf22zDBhAEpHXCR5%2FZgYvISdQcN4lxAvqNNtsWXBXui%2FCop5nJy%2FpigRTfMoY514NROR8f2tRs1malWcm%2BtKYvNEnz7hRVUymX0vPd%2BjGAzkb39AP8tcYNxJx%2F%2BDIuWUSzd%2FuQHeozc5Ubx0GAXZ10tNuWLpCSHXvNLJNmfQ5loql7fZMkhRTQ83icVSXv1773Y9KokVJNhgSA34Coiha3HOziyRG%2B1YRcZCez1oOZX2GFUcAbssZUH5AE06T%2BXfT4vY%2FyTDJZIMPRkLBg59JPRJfIBirG0Msmks%2BfoNHAf24Qpv068eocTpnDu1zHQlH3s7d2DJXkZK6GeUXfRmZ1yklwxqmpHy6ba4qNxdf122E5tnUoMZ1mPoXRI%2BKbqF73eZV9Rj4%2BTgFRi4V7q%2BSl4vCtpB5vPeCS8NMzPAAWIqyUW%2BTlaBrI3fN5pGIAMv7RTdbt4k0xVyEgKWDDzlNnJBjqkAW0W7evK%2FFTR7%2B83rNBTBj3gpWD0b%2BsrE%2FsJ7l%2Ftj700QDW%2BSunWYGX43o07LQh%2FmSSDl0pfBMjZz527B1dScLu1u6jf%2Fbswac1fk%2FtbW4EPt%2BPaClcYbgNstbQx2R3Jg3g%2Fq90%2FcHwPHRCLgWQrygwf7mvKzlaKYl8HPi11VyJ5BH%2B%2B3LMcCuZwT9EaVFF7VCT7aPMGk8wUJzQ8APJa1hmBwDHj&X-Amz-Signature=ca82ff9fa8b10750ebee31e224001f57e9d12b5fd7758d1f9e0e771adf34aa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

