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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6PR4TT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEUokbS856a4xBOyGE5BSePn8NiC1yUImcWpBx5Fts25AiEAqGyq9GEnw8X2E3ao3bpaPDAA4rKcR4kOFkQbksdB2Bsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDICjm91y0GQp4DKoSircA66AqZ%2FDsJOcDmRC9GlKuizLLkRrSR0Rykr6HPvCNzxg8m2E%2F5TcNH8BwGc%2BCErUbMa1zJX51AZFhWRcCdlg9kxe5PKlAZAAHUPQ0GqJfzSSs%2BJ73%2BgE70XXPLr%2BXjYBQ4XeUmIWeL1hos6ieNN2ZG%2F3wnjC6Kev5G2mqhfUFsgMoZiVRki%2B1OA66O7G9XUZyYQqtUtMyQBUH8gzHUB7tTX3We8PLn%2B9cBDtozKMM7v9GOFT4Jvl6QsAqtuWCUDACflShWznQWB5d6Rb7YT22zheh5OWJ%2FtIuZbNPCVhXjDVq39QDxLz9RF%2BdfROUUlaoyVrAx1pwYsF63EyyRr%2FVOBPivUWIzzEZSo3jcJJrX%2B7oTCTW19Xi1DwRO0egGu4V44tmRmQYxbeU8pyy8ZrrGD14yhpv1mPWaAOJ9hN8B3w8wgX4CGXFsNqJS2%2FTACLv%2B4GIxtevCC2yaQREkF4Y6RbtvZH%2BBcoZKUb%2FsZDLV1jzXU5CpQRUhGd3xHaT%2BrCjrPABeX6GRo33oWul71OPnlYNYi0BPCR4PcSVq2QHNenv7pPuBMhgHanOcbFpmf4Xz11AT6SPKUOiZKgGlXSnbRDu7swPUkD3cSs5nnUvLyiRNJRa3%2BFnNrSz9CPMI%2BrxckGOqUB9DH%2BEgpe6spcjnFMQPAXR7OvyFr27rnCh4mV5otX66P0w2LNaJhxvm0dnirifPij9vSCD1e0%2F054xsgFcp6STph7a7C31%2By9DqAZNg4obElTIcCL2ys8x5Eq2LQjnM4Q8yGBpIk%2BTTgoOF1L9Q2au%2FtHNvbdFY9Ygpm2s14n6L%2F0b3qKGFoT3LhiC5IrAXIJukYuwlKLbLjAG01J%2FbePyMVtD%2BvN&X-Amz-Signature=154dbc441f050e3e269cc9a199c41041f90755c7447c7b6c93d0bbbe9d7092c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUBMLWK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCbMMONrFmLPdRZlq4jeWWgbKm8Twh31Ho4lhH1ryw3%2BQIgbVV9y6QjOa52P7E19pShIe2ZyfNvth2pgtoWPza8alEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF6nPUF9yUamD0je0yrcA3nktq9xYdmfZvcECNPnOxcuVb4nEuahUVMmXhwSludTXy77OtE0o003wq6Bjs1iwGXwUbdoht9EPYMKx6RUJmiiGKj2rB%2FnGWxGUgSmhTuGVO87iBRCyOE5cxf6otJml%2FWO5%2FddqW2ss1E394PDP5p%2B675%2BQi%2FSqNSRReETBV0iG%2BrYlggViNNlsaj6czzkLjxuWUdIAl0BsUWUr5CfzpJXkNt4G%2BsfiR8sO3VtyHjikZxbfuL%2Fx9RRb1uirAsxmVcS5otI6stFMi9rdzJAlB%2BiId2hDaoz8dlowi1jWzFWmmNTSAoj2S%2Fg2UI5jGWH7Yv%2Fwuqa1MMMqbxtl%2BCMpetos%2BWiIhZZgnPMROnnKHgDcFpMaH9EQmZNtrFr4JHSwI5DdwJvE2C8cyVIxxN6he0d4BZMXlju%2F4yZNAVzoCxjJ3J2kdVfe4inl9sH%2Bs8mwxb%2BvXeeYEHyzC8U%2FBoGI%2BPfR7NJZm5lOX%2Fwl7X9Qxxw4y59JH7gtm8KO80oaZcdO%2BOAx5OuD6soFYzdGMdpLz%2FQRWaRUoGJZhCnsQFHnlVus3YJRJd8xbg3zDWMWPV%2BqXjuhfdvqJNwtoSY3MyQhKCBOH4sB9JAVmw51QZuClTBi2kCNUqlQIjpjixXMParxckGOqUBj72zDusrqpFj0%2BMGR1PHVF0QtXmyHVdPSad5gGdaKKwAAcHX3nomS2waVeJAjtPazdALQ8eZdzYymomifs%2F94cundPY8QnLe3DWhG8QN2FiPmAXMv6zG9rc1PFW1QCPOZiQ2Y%2B9%2FINX5ecORoiFbQ%2BxquyZbsplNI1XSL0UkZuUI0yD2oY%2BvxtvrcOYjpcT%2BlG0233%2FNtQpYhsJFNzzSw07AMCvB&X-Amz-Signature=aa70cd46b8894201904d198bd03d32532fd354f90264365a95dd4c7613125071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

