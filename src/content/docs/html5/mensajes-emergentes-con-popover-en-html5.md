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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX2O2RU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDW4iwGQK9iwmbcX68lRdWBIvSM8wE075Ec4MHCEX6VCgIgFY0v7o0Ob%2B8JGjk4ASVEh25okolReuVgM0GM53ZWAe4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLeoVSQKFqPTk1lrPCrcAzPiq%2Fbi2e%2BXm6aaCdCGyEadh3ywJS02q3lax6x2PsanVLxLa%2B4a8TpKpxSKYmab3lOyMBRTOueQ9yiNqA%2BTO8JneBMX3wKvxW2aRyk9G%2Bjcam1ju9rKZVrUinQSKBv6ENNP%2FFqrW59JmBM%2BGuQF50KKzZbH04TSdCn7lu0%2Br9B66YT2isNZLgk%2FQ8%2BTi23lWyfkn3EqwTZjJi0S8Qp6%2FLAELfCOrsaOyNtvfVqDEje2bjaUozT%2F4r6XjKDbC43L2mYEFroZOEZaIWs3BAdIYApzPIWXDfFb0rKQ9O8sZKlserTIRJ1usRNu6EfKR44OzBE74nDMi7ZKOnaliE4khxgayhTnLM4pDY0mKhf%2BJDScIoUSfVRtkZzDdEoDDfYUlZcd1RBEvbQ%2B%2BzYcYt9aqcgOlysBWl06GYPvKTUlhiOQXlUFlV05SojzHpVqhmjeIXio3mpdu7Ods17uVlqiOjXXx1SElDnuWyyyRUWC95yl%2BSBAuPpRx47Pk5%2BsHdbreNF4QvdV64MO0ltWScJn2j%2FdYmG0Upvjtq%2Bcv%2F%2BsBa2jYp30LOvgbHlFRyZh%2BPDPdCxg407b5lOFbfhHwnkJU4t4MWNffio0p0RXOEyMAvoKMAMXAQVZmAbG1rjZMLz4wskGOqUBU6Xs7U2V0d928CWXlTZLfBgaiVa6c%2B78oYD26b90cAYgFYNpCI3rN2oK3uXpy7TzLorvu%2BHvvhMgHbBZxIduY9Jhh%2Bz6G4RGtAzRu%2BkPZv7Zda3I3ZQnQxu6g%2FmpAfG5UlXDz4NpDp8XVeRDH%2FI49nDDaimwJ%2FAvAWzivFXXFKYfMlFIWDKljbl4GCBiyKGnErn6rwtJDwHcKzW%2Fh40x2sfdiyZA&X-Amz-Signature=cd7c6ea5756797f57da76f32d0948d072c66836dbba1a26911bd81eec01afb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVLTZS6P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC6pNBn%2FQacnYZYskHpuCVmzVh%2B5il8SLDYBZrFwLuotwIhAMFYk84LbRAZIlH7U1CSFx0RriAcPur3e2%2FmKJz%2BGgLLKv8DCDgQABoMNjM3NDIzMTgzODA1IgyS2cxgIsmDBW73LvAq3AOFJbT21LF%2FmiWFUd%2BgL%2BYQDZWI1oqXEtIU5cttQiuGXVbT68iPGKxMtsJeeWa82J7SUqXsVoctK6pWOVKtR4q6GcaQjHvhIX8yz5z4uxTuIjzyUux9SUk3lGPRil7c3jQw9luYtHG1e6b%2BSjTON3AqO0lDDNwp4uqpeAHrlm73Qe9Q9K9CaufgWjw%2BuHR34dalP2MB%2Fey9FCu0QsAGTfgDQFAnzWqrBjTCq%2F%2FXclS2CL7KLJaws79s%2FHUHsvdDyJj6A1GexQXQA%2FwJw%2FeqIi%2BUEnN9ZsnxwZp7dOW39ltO9H%2FcG1LLNhccEEqIxw2QKjaPMm5J7LRtgvFPaf29XMt81RkVA%2BWFBf8xYjDKtQtG6Wad7P6WML7RwOE6SUFEAGreTkEODgTp8lNMMyN%2B6yeZD20RQjzcxaE9n%2F8NMXvne1CNSOx7hQumw8nAMd5hgrp6tfIg07UH6nzxbpvHo36h5qLSuEIxkywuYEoCs1dWDRc6viXhviSKC8MtSoRrmn1O5uPeucHLmkeg3Eoth5IuJcgMud0SBFS89EezrsP%2FvjDgxymmkfkQF5M3%2F9xJId5bKZjZWhcxK0GP1FlQmOXoYnNgussjQtTJkUyIwPTLBvscCkabZnywGtA2%2FjDO%2BMLJBjqkAfYAeHk3DpSGR4WM%2B3i8t8kCQdD2rYn6feX8lfoXpBIr1JACVu%2B93mR7ylVYOlgFQgFcDKcNAdxB1AGx82s4b15mlBSA7blfbziLlsJCaZXNC3s%2F%2FoC%2F17yfXm5c%2BWDDmG8b1hUYwZopIRAkCdhEog2b9EDTEe7u3PPaf5w0F8HqbvhIX5O0AVXRYyYeor%2F2NHsdsLlNcDVAQE4wRWo4dp%2BSXn%2Fj&X-Amz-Signature=82f865ce5f925c7b54457d61162976fbefd61570f360e3da69d2ea99b21e4bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

