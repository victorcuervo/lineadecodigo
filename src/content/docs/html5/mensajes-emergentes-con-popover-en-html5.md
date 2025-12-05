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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMUDZE7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XHeqVEVfTY7fFj%2BGaucl5VKQProsqpuR3X2CN2n2WwIgFL%2BAb8U07mETFyXt3W%2FgnXCcu71Dnfk8TpcbngaBl0oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHjA77qnDGFBE89pVircAyKZzbUEzPo%2F0pHYsnANIhabJIuza9peRu2cAjHqXZEsQ1Y9j8v5t%2Fy%2FaF68F0RE1b5nd7dQOUwm82DRGKwsqqIusCu%2Bmp43F%2BSrcqjxld1NgwJ7abTOfz4jVy2XxjglahyGPVu1L6XC8pLgj0nHeRTEhe8Vnlh%2FU3O77XprolB1u36%2B4ouRwEvCoto1yE8b1ODyr8UGVB2C6GrDmF2A5Nny5gEonaIKvtgdDqgFf75rx6zCxSW7HGIlOiZy%2B5bLiaOUmpgP0eFKQKX4Un%2BH5JP76eKc9H3KNMBwqf0jHqbLV%2Fu5uyKcsnc9PEUZYp%2B4dnRpcVNJZVXUtkYb%2FrbrYuVUlHWYYu8XVR8qKp1loADg3B3dr1lR3JpfMBWZSDjdx%2F480MP1vOYm56WNBBHb1nrpN2PhXwCvw%2FwR4GV1c1%2F%2FzzHfbdrt0RY0Xa%2FvfujM1WYdTj%2FFPGoyuLLy1L1dsAw4ZIr9XuOWmuoPzY8nT6%2BiRuCN96gmmPSWtY8jxJV9qJJ%2BnV8enK86XO%2BKFDDA69%2B59kvL8XAfb2u%2BPq07q1qZ0hE7hGmo4NBm%2FXHUjOz8p3RxHDkP9CUY0Oglun7sycBNmYk3ncwX%2BQQgvt8YkUCBb4OdCJ46oNO8c5xAMJjJyskGOqUB98YMh6%2BdVjk%2FLlGSul22A64NKv%2Fu4DFQFj59BQ6Dcp%2F2MwPNY%2BFnalco3VmOy4YUiLZbjGViaNG0oMgM%2Bp9Yl5fHLsbV8UYzojMtIdw1JIGoI9GP%2BdzIRZrZahlbgxywwONWMS8NtXksB0o5MkOm1o4Ff3xWZvezEStpd3SgUuY%2BXqz9v9oU63Sa17RoRH5dz3TeM3aFJN90CrevNuQDIin%2FXbjM&X-Amz-Signature=4a505b2dddbe9eab3e91e15f0f26cb6b92a53abc8d327f0f4e6ab1d9664fd514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DXNWHLQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9yllWM%2BG2pk16SRSNToGBswQfb9EMbTI2Zc9ov3b1oAIhAOqcK5J9L2NOkL3o89MvCgy%2Fyo6wdJxubEl8ICIU22uzKv8DCFsQABoMNjM3NDIzMTgzODA1Igxb6w5%2B3R14WryYK3Uq3APpnc%2FtF37kUT6pCTD9%2FXhoSGyhmxNuJ4YzIbjRg%2BVl3tj6IK7p2kH5TUGiurcJDxg20J%2FSO%2BkfR%2F1HizvAgZWnwUhbD0R%2BIbmBObMTPPuDBkioJLrZzAHcWhrv48JQgoAEX9uc14ai9fkfkna%2BHxCu4VaqfTG3%2F9JRNZEyo0mc8z39kdHVPTCOccEzNuo1M1fkNJhgRDYQVUKqHR0jixAREY%2FqRLgZltufBJ8r1GRCthW5I2D0ogkwlnZHoX1y5uO5paqdtCwe73sjQ9hZyrJ9%2B6DG1vqzIqg5%2BoJt2qhWiRfHakflOK5cNXOqTA0E7lffvk5EG%2FiEz2KsRokWY9ignWwB8skNyZcIuipWIvKMhx9X6%2FkXiWQc%2FzNJgiofaT2Qg9zDhM4PMVNExdLEfOUS6My%2Fl8V15CuWQv31q7gGYaGtxiu0yAO9OCapieHhcMjbI9x4Uj5F6ed0gqz%2FkKAbnX9nFxSDHHkD%2BXF%2FyGzxsBAekiYrj6YzUL8adwBCEaYWczviQTcXaU5%2FClF9kQCUpubFnFUcE8hURH6h%2BN6EZEQJz4A0vMNw2CKt71GOvvuqWMQ%2FxcJyC%2FiEEK020Vqb4PVIyvzRAzy81tux6TrioqV3M7eccmSo%2B2T4zDCI0crJBjqkAc%2FDtzmyzcQvBeitg46C2x%2FEK725g0tb3KxR6YTxIP0ZRobGvxLWjv0wQRdJLMDudvJ696eI99fIvQqMrO41wWvUHLqW%2BCJocJFL%2BHzUA%2FT5RzC80egX2XOnukKaMTM2IQXQ6jNpaNLJsM5MsvfVkGY3t9SchzRrEpZIGhwlF4MC83NKqqdu3E6m07XcoxIsWUohWK4XhwMJeP6%2BnbF8B5Ox6xSR&X-Amz-Signature=abf986d7b384d203cdf7c96c99b1ffd436ae3c5031f6d25331d900bdb4712cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

