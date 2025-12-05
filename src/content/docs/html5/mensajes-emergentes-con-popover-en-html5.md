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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPIABKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlr19Ty9U63CqVGxeaMxJ1LkdirUlVEST8cHp9IwY%2BqAiA3E3tCqLHB8tQ63l7ZGx0Hp35UfzHipkmR3KkeivGKdyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMywc0sppFm%2B05zorTKtwDViW9aoFPEXygy5Aij%2BGs9F3DPo7k7wtiyRAiOLuLiLWC4L658BNnf%2F9kASf2aoH9xXOKZa7CJl1B4xU1HJFPLdX%2BZrWVB3Gi3vk0cz6PUHBZ7KuHO9zs9RWNwGl2DLDKhVxt7IR1XPWCwkzLXn7nHoeGiCoK76o0duTCAsIDVkUdQ2Q%2BQ7SoKKcHAqG7pxmNSo%2BANG%2Bzp6AGfaiLo6ZUzWF5pub4%2BgXEvhBQ8VqiqjZBeDnmNcVxRV1ipAG6n0q%2Fq9V18K98wI3mgss0oHkKTlQu8may7X143x%2BfHAMTo%2BLOnx3qh44CUwp70C5GqwHkL1vhZ2oQScHNt2k7kS9L5R9IjgpCK6ghdxrDYuNq7w1NGIBBy3Vt8c%2B3Zs9W6lAPtTAEHCnhXXRjA6flwpxBSOjHP3uDhnTckHBMkaNXW4z%2BCf6NW%2BSIvkAwkfSaYRwtutHzCpHYiE%2BhQlb9bYpj11SmrgLJjAYwUD3sTELb%2FZ7pqBZbDcG3hxJamAyXWgn%2BE19kVoRod4joVD9a6Cw3d7Qq7kj7W7EQxYDdy2E3SV75nEKncMeGWMpKWwAAWHgFctCbI7oInMdZkcKqIFvGUZbp7%2FqKpWczS37so8fK2RAupm%2FM7qDRaV6C9G8wxIfNyQY6pgF0cxR6KAal%2BgJnErWmcpGJbsFtY17B39YdUbIgLUekBwVkbszzsW%2FECLQ8Xqu8CZDEZEL5Pas61a%2FmytjB%2FBZgZaVESFgDAMBfwv7y2VV9EQpuL16ioOFCPQ%2F2U25X3Ry%2FxSjBdkjOh3yvxDcrLh64Yaj%2BrE%2BhoRWFx9a8dH4IBYOOGlyrQxqAUwN0WQgghCP8ZdxqH2qvXnJoJAclsah4Z9FminAP&X-Amz-Signature=1b017c3385c89399a9f904b11e3cce58a54e46342e40200bf650c86ead03cda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVUZDVY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr%2FAHyV3UpDXOKGhvWPRmZGzIlzWG9%2B4AI%2FuGBIwJuRQIhANSmbQH28jxrCzmOZr0%2FHG5DtEfAgGylWFnXesyvlVPUKv8DCGYQABoMNjM3NDIzMTgzODA1Igwbj5eAzg8Cm6mYczUq3APDVPgVBIF%2F8s%2FXeSPq%2FfHPOSXO6axrNAxjZHUEF3z6f5HiAtDcceEskuOV5XS0k5EuOI0TjWYbAmRCVETNWux2YeDy9Pg2rsl7dIkeevfaZr9IKFhqdi%2FvdL00JPfBQ%2Bu3jwS8l6On%2BpgNLkoB3Uki4gXzxfS56c4xHk5VKk93UnLIxXAZQq2qsMS2%2BQkfoX%2F1ZBqfoKBt5DhyWEvBb9JL3iXxTvjccKFPz1re42JsGSt3Jw4tXMwSnuNQZL3eOoSisQT%2BVGkstD3%2BrbjVlWcAKlRvN3tk7Fp4XfGtlMgE2ID7k00qur0jNxLceUFgEwBxoJh0Ep9fSa0hM4MtPX9W6u%2FGDLk1iVLascJrOB0tOxyXh70buUAAINxqMI%2FuuYyOAJz%2Ff%2Ft7Kz3YNCQ453M5nR0crjSjcFAMkeGXYKn%2B7WB9%2FRrvp1FX0vK9xJVUovAvcNckW9a%2FnEIY7w4JMY7TAkOGyKmfHSabUIio2EEEyxXhwmEav77KYtrjKyHxNEeXFN5RN5gnKlHydiQA0hdklUsfqQmVOut81%2FlIl94E6JRZ2LeOa39zkLURr3XPZ4Q%2BZVhF3LZb8yXgJjWgI8R293rKFoxKH6zZeM0NGq3Lqfr%2Ba1I6am96S%2BE0FzDsk83JBjqkAV8o7GyTFEv1KhoTEqfF7jFFTH9iGbwqKt9I5o%2BRz76hk5XVgnFkqAct7vkf8RVhZD5n8GVnZ0zWT%2BDFaszfDli4Tbdi9IwRkxPD7HtJd58Wq6ih%2Fbr154tEXJkXlIwShPvFg%2BigVqIqkb2OMl4sbnDNxlsRaLmYafjTs%2F%2B5zV5D81m98RSV5f2fBkIUhJRuSryuk%2FGvo7FTHqaTbWMGKLcDMa1C&X-Amz-Signature=468d20989d34b561040759571819f9d9151fee870cf997be883ba3c9b12d0038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

