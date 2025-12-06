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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DK7FI6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhAk6IP%2FTc%2FqNOU6GfmsZi%2BFlSzHA%2Fklsy5Srgz5mcZAIgcTbqM1lFsH6L1uOsO2ABKxrCql7rUe%2FeiMwX103N%2Fk8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOquC4eFdF3HMKNTDyrcA0zdU0972BlvdjWviOU%2F2eSLDw%2BMG02Ly0S0rA5t1X9USYD%2BC9FVkNRxyLWxMmeafJJ%2F7VhufJL5iCeMUPqjffMY6jBhuWDhEygj%2BhgjS2p%2Fk%2FmUBhUhHvapchEA5Fkieh3TIFyS4FuonlnmPdjYd2jqJejAHqcrntn64Mu%2B0mF97X63y1APB4UNHL%2F1auvhq%2FCg8C0W9w60hTKDU3hdPEu%2FaVTCTBosHBjPfyhizQO1FqTLyBl7s2PcOAifMV1ZPiogLtRskPEaHg8eu3ECkLDb05ABZGIzNqHTUBOXBUwNms5CQ%2BADEyra6fniD5Ht3LD2WquZkM0ENRaGFO3FGwFjlLz7T5XdGm%2FM5B4Hbcq0HEjtOec7fOCSoTekAAcDTZWXPup5353nQXdCeSUJfwbfOcTRQx%2BhQs%2FKIjT8alkU1I333FfMkf0UAgUebqAmWhbd14J2aT7QPD%2F5OjOw2giV7xCCVl6upW5D5tTSpDDSIi5abzNK2HqRSj%2FOAFZh05nxuJJnK2T5MlLSPqDBWoZH9Voqf3R5uER%2FW%2FBOOTXsGoXlhVtxQjoj5k1yREv8W6SJtI%2B9V%2B5bIxoIUCc9tkN31kGOTJ4uE71tpH7J86oTYKq3u2AZOoI3qfR%2FMLP9zskGOqUBypLRBgI2Y6psok9dcFZWi4hUQ5drrb8d0wj6KaMLwIYxaM9cHNnE%2FdcvAlwG2nHyu5UO%2FjqN%2Fy1TPDB14HoBbVfLZcOjD16Cv%2BJGX3WJ8SArQYdVoh7JM%2BQOzG7hJOn2BjLFQ0w7eN1bBjoLtT8%2BDNIHkijTc9v1bBB9oEI4t4qwE9aUcKfBYDY6Rbv8dyOidb3L89tx390WfRIhmE0K%2Ff2AZxkW&X-Amz-Signature=82e81686e0b9658dc1a55a8f63fa2a84ec369d039806d7ce3fe4a416bf3ea6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54JB24J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALPQrbSz2zxfXDJHoHfnbbW327U7fecARTKQdWZoJ%2FtAiBmWeZbyYUQSYyr53a%2F5Z%2FPbru9jsQvQEOtWA6uaPPBmir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKLI7tA2hsvI934sUKtwDF2u%2BxlkXsNnM0NDRRpEgd1F8dhbn%2BtTRSBnaX5v%2BJcHOXeTtESOd0ICuz8PQJeiFd7ykmcEeVWZJ8SUaQsceBDwKXTFs3pFXsqfiXE4IxHcmyUL0LVyJB0YUjakWMQwQIavHEZQ0ns55bZSr6dQ%2F7Zfx%2Ffw3vqNQvvFQYCV2LX3kolwPjfEXN330K3s7sXxHIuiY7ZaceiPY2wAvjI8xZWWXoPZuczoI5zWEy0nbp%2BdpL4RTYsv0gr2Sx9Ky8wHMsDaPfq65Uyv8%2Fffu1N%2FHFl9wgEs9rY186uDFre8Semv3LV%2FUMN%2FmgPOnfGLNFuabSN5w%2BcbAV%2FLoIRHC2fSvYntprXuDiNHGlnZqqCQj5PnHYfnbr%2FpGyQcGEqNKmVNSbZiL4zHR9t15XeKfM9kICVX5pWtviLYfZN4LD8xMAifc%2BDlajvWXXzZZWprcp9%2B1IdcVcsPLixRV9wWLZr2bha01NfTCPx1Ei%2BG2c7uDez1ri%2F%2BleMB7KijHkwj7qIZTixR3hcJ2%2FKVjZ7Su%2BHUqou75UGYahQP0iyxTUiiTtq13lJAJA6ACxoQjaERAOPeVtW5eycFJTFtVyH5z1A9qOSf53tEgkLdns4RNXq6Cnro8jZHCzB4JVtFka3sws%2F3OyQY6pgGkni0TPDaFZZiPAocVar%2Bg4i3S8tZzTQLfWrsEbUxP4f%2Fj6zmQFxrHKYHSULewip9VxWmgA%2FNupBJQUsZe9dCqhGiZv%2F2%2B5NyhlZhqflwzpm03X11gMGlvWZeMo0nxHbUGNXk8qFjsietkXg15UAmdfsjCKbR0bSm%2FWGl9ZblkcWDdC8Ktoi7S0iRC9AMFgegHSGVtCl%2Fjp9lqKr0%2FjIFrM48bN2kU&X-Amz-Signature=f6b679f7e4eeeb0a8c31e052e8ead98fa510952ae1caeb84ab7abfacd8e99ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

