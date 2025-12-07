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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TASPXN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyUYgIySvc0OUurlcYhjmhDtHQ1mku%2BxOM%2FUiVqCU1oAiBjzkGHhcTnq7T7q1ntobyqxfDZR4O5x3q7vgXvDthCliqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1caNewtI9AvkVYzKtwD6r2FH%2BSNVS%2Fsr8%2FNtDUG9G3eBDzen435aXu4DDDF8rRTRL7XwgPJF9rJeoRYPXwH1XzOHSHIPJxTRBFbM72Va6VpqY%2FROzgmVdS6%2FeuJv4NxCZMo3iQmLidj3Ngo3ATM849pEYI5oVGn1uGxc0aont%2BAbD1BRNFLha0AIWt2uyz3WVJaR9KtVwOGPNksQk1j2wnD6Armqxir%2FxGROCwYJHciHNY3wCjpZWnDU7eqvKLff4lnOcyTzOCw4pNbFJPzO2mERu9cwgnMzoZU2qPy9On4fNOk8kmnsp8JH138Cadh02ajR%2BSXD%2FYnfCAi5qpJutPlWFiYE5GAIv7VAcRZddSaT8ilFEpJfLpruEhe7IF%2F6WfiHYNAfAZDdiD%2FSydcElnNZ%2FlFR9sZ%2Fb6AIr1egZX%2FDXt4aM7Z2at0pnUkKm8fOihHuUW43pbJmHn356qxh9jgTiEdDE2EO%2BfgqR5R1vtFsP6I1w83MQvdQc8zYO%2FRAzoTS9zv17nYLvYfiunAbrAc4euT8saU9y11FzSo3UmfdxxjPp2lpsFT8jdmva0GEd4mb1leJJym3MEi%2B42eWjn43%2B2%2FCfoQ7KGEwF6nHix1%2FA4z3jldG%2By5i8RE7ulOAeOP%2FbWMPEVk2AUw0pnUyQY6pgE9ctI5xT77P9bDvZKZ5SgGODHdeEE47Uljh2L%2FIi2mM0O%2FDGrrszsrMOj5vTi2t0o7VqSETltckAPHYrZ%2FfU5Xuzjhah%2BaKJLbNDcCVv%2BP0J82IE4R%2BWOBwn859ukny0qkCyy15NA7J4U3JTDwf9dzrr7ohg%2BfERQhPBLKJRHgV9UHJp25nB2V7oBaR5GFREpudQzczgUHGh064Zqkzz1d9WiytSsg&X-Amz-Signature=acd7d73c8a7c469edac750ef3ec41e7ff2b35bf171212e306ea1e4cabed51d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQ5EKYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjxaYFirpeZmaP0PVr2LE1kzv3jzIAjqS%2FAayJ%2B9Hg6AiEA0v1k19IOHyGwxy7kGCGUwGlGXvPpDLIMGrvGmfDkvrwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOQuDutLIN75WFuQCrcA%2FUMXPoVbqy%2F6TUunckqoUX2oKtpwogF8oCHSxLu0xoBioUL8rk48f3IsAoM6SI1HIzRCqymZrEFKM%2FmsSEVmLCJEFh87oW9CVnn7FMpeosRUwmKIHXN3yoPtEBJBnZzdrW2UJyi3aPPtqJDJbWW85FDLem%2FfIEpJw4MqI5bEnuGwHyQ1ZQEQl4GAhbiaWw8c2tfHEHm%2FlsoIHGklRMKXz8Crzddh9J9YMV8uArmHWMr%2Bo%2FLc2WgGdCtcLWuRD%2FZllcbJIshnEVK6BXFukF8RnzPTZNxpNdgWWGz0KS%2FetWTjqp6mImuq93h7fHieR3av4ih50ys0bUHCQTEW0NGrtf%2BCumJbqmCjrAibnzn5djLEyrJhSj5rv%2Bg%2B6BWJHqjPHut0UIlo%2BfPTteLU6r3F149ZMiPiUVWqHVujLb7mgd9r5mCcPK6498sIZ1H1NAoCNbt51MHu%2FJ6TS073ouYcrjUjOuZKl213Bgk7E5S0dRThOukKBhxJGZkKvuLX67y4hrlak44aGZ%2BBvgRGBo5MNz%2B5HwtP5FLmQbhHX2ftq74fQzD5bHry6Y2xcAOYaL2XIScHMbpz5jYpuS%2FOVQbvDmGxmH9rOqK08MKmBFugvozq4F1F19CyF04hsHuMN2b1MkGOqUBR1pHxUqN3I5UHkb5yMME2FwP3dGMVWZqdFiJhNH9UuONw%2FwL5oBkmooPr%2F6yb7lAtQXyxFTXrKz1F5dTjJ2lfeH0tAzAwtJcp6iZOE6nCbQysi%2Bypa%2FMtjWtMRSMaYgB%2BE84CKpdpva0lEXbc2wBGnZVFjMGlHpP%2FExv9WHlhPEemIQNbJrbAgu2p5RaBf3CasLewgF1Aqhs81BNKqCy0BuatDhb&X-Amz-Signature=db3db081b48c03797b67938e9765009461fdc7e14eb152f95769429eddf0ccda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

