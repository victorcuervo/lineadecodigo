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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGLHJ7O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCJy8fZsRn0cgSWsU95CuuZbFzXXBvSf5n9fwDRojv8NwIhAOglFp7SuPiSQhHtD78P0EQ2qnagTUrtI3RucSPFTToSKv8DCDwQABoMNjM3NDIzMTgzODA1IgypbIVKpLkqE2OcIhUq3AO26OeP2QCQ%2BsRz3wbb05hSVRATCHdTSp5dbx0qhPTeCXwQdjdpu1zJ4HLKUJwFBbeTWJMYoT0R5TrtFrpjPNpK5k7pmvBt9We%2BBv5GJ1frUG1QHFx%2B1oGbgXS4GZ3mx1%2FahX7DUVgWywv6fjHfIxwD9%2B%2F%2BFUqE8IklguvcCGu1g0gLGnOyQ5w2UO0Ex3I3pyEJszGDZnaEPqz%2FLqDqTgcHyu777ZuEwJ3FwJBSJoqzFVu0F5xSTnyJb%2BmI4dqBUfT%2BDxMIJX15tgAx%2BI49dSnqYTW5692lc6rbiclDMQXdAfdp4Ng0WX7rpXsERHe4LTowG1C82iCmEeFyTqsXdE0SqTAA%2Bc7b%2Bf9r0eT%2BM%2FsqlW6SbU3JJoNRNaJ81r3HNYjkVACLiwkKQrrEojUIudnsYuP6pNI5Mc5EQEA8YCMytBXcW5xNvf10dwlPadonGsFxZjVYk88OcaO9SAszddhBJF5cMYdAAqzfIT3ZvNmUv1phdm9J3AkWsyf3bI9BdqyNZ02NrTRuWTAdmEoZeCPoH0h0ymLHeHH%2BsRR94g1mvJH1ROV%2FWU216tjwVf5fkqZOGhJxIfCP5qsvZ3NTp8GFTBYSyWKr8v88PzvU4bIWviP04xRESNDLItFPuDC488PJBjqkAUoi2kfAeBA9Yl5KD%2FVbKbRJ5Q1tWuqlaio1Bvl2m58IaGaVswQHXjin93zy80U753DUKpTwF%2B8%2BToRDeEz89q3o8vEu1W9Q85PfaahSnNQwBhEM36LsgOTE%2FaediyeCCcFMm6sLocrYFQsV%2BQUdKfiktQQrZgT09uZUlQz744bHbXdS6qVT0BEHTFi0i3BRd0DMqpr7I6KxRzvg%2FcM8mFTS6hF3&X-Amz-Signature=dbbf0973564b3e62a6f20f8d958afcd304ffe5f893c14bc70367d8b8428786fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YXVAB6X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICD6gIk5qaeaU0mPLkbwlpntzc9OKSeWd9diju8ogYjTAiEAsaqN8EFTsLc0MUG7Y0Wz6Mw4tm7ukrgFoHE8AeCPj2Eq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMAfD3NcD%2F7CVLXOICrcA3bW%2BcUAtav9XNm0t3s8q5Z8zrsY2OcU0DaU6hhM9MDnfgzanBEtfwCop5HAPZGRnwQaUe7E%2F2Tu0n0pdSYCC8UBN8CwdX9pSjgirVa5RUeTH6sgcsF594ikGO0Eo3LgRKTNZ2PsyeVQdg4DD%2B3XvEUl%2BmT79nN2XbkyQiaz8nSYK1d42UILxNizagWI%2BAjRdqV67ESlmf6o2vH3UVTRJMtw9RpAZrKZNCUjoA%2BwOweRaT8g4aMaYCM1WLhXI7TJ1SUPu%2FIyb52sjPR%2FyhX0hOMGcfbBD%2F3QMiMm071ANq%2Fgc8scxhoUXePrpWe4N2v0SJBuWjlCQabTYEGtYFe36t9cZXsjYSpzwCl%2F6JYfb0OGTS8aOd0Ois1CqdlXOoz8v%2BcG8pf8KQD49UJCnq0pBqO8NwptU0FjNQfQVot0OCAdFU5s8n6gv50P5FwxwUccgqgg5trEgeihShTpaosy%2FgNi6xU3ksNk1%2BhNsY81Rw9rPZ78PMAzIMjoQ6gwc5qm7yA2G9v%2Fq4FhjROiKU1UsWvB58hLPYdT7%2Bqr5b8l8rL%2BbtatELJrCgyyPoM%2F6ZpjWFNqshuAtfazpWllzDv0h%2BGaJsoihvMrFfA9UMJ0s%2FF72L2U%2FnzhmHjsLVlmMI7zw8kGOqUBQybNLZvEA3OYc7YKP3D%2BRtskI1%2FFRgsQO0e7uBYpniERzQEMKnUG1C%2Fd%2BNW7S%2BVNhgXuvXnoGNXqjFX31NJxfs1l%2FdUHBKO892M2doAAJ7FX3CoJ9mOOO2HH1k62pKQTgaQ%2FJUDipMExe3RvtCrRSAXzIekDKaMAsdY7zcAeZ226XbKV%2BdqFpvImd%2FUor4wGt46803U0paLPtzMHvTIXOXiYUrZN&X-Amz-Signature=7c008f696285dde0805dcd6ce78372e6f7743ac5c09d7855891158c592925f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

