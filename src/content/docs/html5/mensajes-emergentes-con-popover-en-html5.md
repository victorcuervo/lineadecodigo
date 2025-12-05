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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CF3IBJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9jjN2EY1fja%2FQ1iVbHSPrYR0%2FqmPr0Wg4eOl%2FSuuQkAiASoUNSFaUawv5adAE%2BShRUoTz5UxgSGlw1drnuv7k5ayr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMxlWferaJF1SuzUgbKtwDi%2BVNZ6FtgDECN7NmLF48b3Qdkd81fikN3S8gImTEJyvLmtLl2c%2FOi0%2FeYevpYdsQBn%2FXVa7yj98XVTvyGcWngb0bt%2BhO4LTadm7zBO3m%2F9UwfDUqcjAfIXE4boXLgis9Ah5VL7hYkCaexW1KAeVLmzem5wm4yPnTedoiEhjkmDqd3GE7ljgFUK66IxN7JLYAG55kOTycUBzYT8Qrs1dVSN5N7%2BHqLgGw073rMrEoFJWe8egDmCD1kfhumx6DpfGZyPwCpMV1rZjKiPLem5NLoT%2F4AyOkU1UOyuZChWNt71ZdUSyUDSMbghe161maxeTZDINsVGGnMaArxurilMuUs8%2FwD1vvIuoNQW%2FGteKUJ6zT1sKlL08WZzIZf%2BVRMRyBLKwyBQb1xqHnxc9iz5GItBhzdRclAk7HGQl%2BPIcwiTA7lN%2BhqYiLpbny8w1qnWrqwjSC5cOQXHXyBpfgtxAnw2RMEGGDeDKj%2BN9ihCmVZp2%2Bv8rVlsmfyEUtC%2BWs75mQWMkCKObO3yCa5gcHDUjiKa7Dij%2BEy6%2BDcoABsQ6T2sC3H2x%2FU0W3wTPAFCImgyjf%2FbFZZC3S5q1i8uolcUn4%2B9300dT6mBRzvwiqwYMBqjBiMPp44Xf7U%2FhZcOowt6jJyQY6pgEnHkDOrIjIRF5zhMZZBzR8yLIKHBS9cYCDPHDmRsmU7d58qaOi71rAKGV4BhCCYLEX886oip0RXxacK6gNIJUsilclNYuv9c37S5%2FKyxn29JXf653dFNaipi8YrX0kEAHX%2BgtGr9fOJuL21GJvnrDXrDVBSGJ4fp9wF0%2BAYFHIPgnzgC5w%2FYDv7Cja3qq%2FmhVkJDqWAjo81tlmDBTqkFbg0RQigXmI&X-Amz-Signature=613e2fbcaa486a7cceff56e5c7b5b2f27a84bef45dd31724d33e4f430a367ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6E557O6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMg0KHHg%2Fr4F5gZld6ngvMlgJdgoUune%2BCPktmiAeFgIgZib4b3OKCqpzxRCgzp%2FIid9hsfeg3jNGb2FkiFVIZm4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE%2Bghu3j8c%2BTiecxISrcA8mSCtBXm4NDGalaa2Aj%2FKqGp5WKusthBhUi50NQX9gQ8fJlIVqEv3rSMBaY71LlX0MCeZQ8uOavTfBXWKMTVBllmLZtEbXYQfK1Rf8mLO%2BpNrIVln1lxC9ZV6AxaXQQjm1jyQxnlKIy0jdAgaOXFdoGUPs14tnTxjutfIczUCuMIO5ASyP%2B445S%2Bbk0RhWJilncnsTtxlQLk8cKHdeDYM13rumMnR3DhtEBA6rsDytwQaZjj9DTrTuU7CQBE6JUWsInWSzR1AscYY%2FMe2lWK4P9IMDnjXlsZfG8gxfu5Nhc%2FRl%2Bc2QAoLtIY%2Bl1UPquAoe0hvMxhqDq7WLYnYMOB763zastMzvB0D2Lm6b3RvU4yIoBLzSORmTriMWE4WxAtrfSs3qZB3TyyQi%2BQ9%2F9ta8VkE7dFmQJxEsUj6%2FtpvdqIvlNy0lvltCaEprGnDCRyUtrpCmFehKZeyz6vd0Y9viVOUJf55x6TnJxJSEo8IOjM5HsxDX9Wxw12%2FDwZV%2BntV93KuU0Rr03qpVOlaOnE3msDw7X42vm7WohgfumNzgyacaXPP5xVN3GxtoQMoF4%2FFLQQlQ1wC9lQD4wL4WLQ5ZjQsAoCnsbDHtuDEusXbNye0x9oA3NgL8LTRokMIelyckGOqUBtWBax9qhxjWaQyWeUhPw1zcAS0R8MVx%2FA6ipKN5m%2FPq1%2FNDXkBG5InozUsRFp2v%2BRAXDYZecMEllxKzzdQ4tCOB5Nsp2n01K7oM6axrDHKawnVWwN5lP9dCj%2BrAVCTGmXOrwdCoFRRbOFfSLuUYqjuGy%2FDoGv4m4GvBVc4WXjE%2F%2FpD97sgkupiScJbT%2BklhKvtXjA5HuvSgpXZaFidljBtmYjdTG&X-Amz-Signature=5e56f4f39c87527f51e2c3ddddba0584c27d1415696c3addc384d936be83c71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

