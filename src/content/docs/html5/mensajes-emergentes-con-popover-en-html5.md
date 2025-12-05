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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EK63SGU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgDTBkAnHozevy7FM0x4xJFiUh88nB4%2Bm%2BfHYcgO6R6AiBqv0HnSP9oKZ4YaYuhQsQVD9mFOFoUiRjy3b%2BmymCJDyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMqSP3niMmYDyYT2oqKtwD5QImnq8xk4zcJasnk1ZgbV5B%2BP2Iq8INXaylVXHNBh4kMCRjBULHRgXOwbJXyMoFphQJj%2BKslRMAqVIwOdMnz%2FuDRA4BINTvQGqJZMxI%2BmpbiafmhjFRcaJSdKwY6JQfBxVuMtUCITlHbggbgwYDTB%2F59M99qPkhfq0lc%2FB5i1BjYRgAPEN8Dnx3EgkICgPhi5o%2Bm2vq6Oxz7OYGjMWRagFaQyiWKPvLd9ByzcwHvumKrYxYWDoejwgx53%2B9TLSche44xyu9nZqqAzaLyZqXYCIFCnROOYaHLy%2FIoz1UH21tKj5L0keN76GBMxOGI37Jb0GTZ6%2BxnNXFm6fw%2FesM6FMVFqaPORzNB3KSHnxF0nHco%2BSouaJ%2Fc2etdZEEIO6wg4sUiy63iibspGOeH%2BCTraU5P%2F6U47tgIkitQw%2FZORv%2BdSAhpttDgoUSCTnEruZXKUVEUoXw71yT3m9tCzvwEAY%2Ft1ie9bPyigI%2Bxeds%2B1502XtshM9al%2FPg5DPGMQrrCIgaMECqhDz1%2FEbYjyYZyssisDrCR0qaEUwuXWLzs9sycYMc%2Byg3oCJTD1PnJ9fCi71r6HOgQMkry2IcC7TXZ2gU6eTucbbFh%2BalzKN1o4hPrvMO3MDrQiuPGKMwzqrJyQY6pgGXJrewofovANulop2a4vZv8LddWmRDy%2F4i9Uo6B%2BXF5CyDz4b51ghESA6kd16CvFNcOsW5V%2BbswDTop8UwtjyL5E9YVvKTamY0%2Bmx9d84ct3ISL9qT8%2Btwg8Cd%2B7uU7dYmfon75PWBJ7XR1T1BBuwHIgKbLOosYRKIo0jTN4hTplCzH3gGD9Yo9WP5WPTlY3wWgL5za6JoOrDHAS6bv6KgefEET%2Fch&X-Amz-Signature=ee526d5e336b90aed9159728911b2903d5e7040a260486c6091ec0c666147a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWURGWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2FzU8LqgfJ44DEWO4GQRTG3AkFpnIUhgWbG2icqFKgIgMzTCBciq7is0Xmb459tCGFk9UXtgUD1DiracsHF0t1Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI0O98NkVJeGVLbviircAwnX9Fhfy7%2F%2FqfNSg%2FoeGC3whWEJzeHq0xeZb0pxt3d%2FvqZaFq%2BwFqhbBUTglQ1rgXybhPV1qRFirJIuMAlJXS3al2P4zOtxcDv8XF%2BdelRJ1ekVExbxk%2B8DKE%2FPz%2FVhW%2BN8OpxSnkHhmo6c8Vw7ggTEoIPu%2FkYSFgxFPqi4s4s4Y5cpQqzd1ZHcTxH0hvLvn%2Fhd5vke5MHesNP%2FTn%2By5ufMC5UsLzkfF0OTzfLx7tF%2FJR%2BitGSpg%2BWIz%2BCprLyOnz%2BSEYoTAQPpjYrOsJPrB%2FoWfJ3kdC5JIX8pBs0o6KadkMFs5%2BSrQrLrAhmrAu4iM9aXvmvynPZ%2FdfSjvNRC2pQ7OVyYkRT5SGzJyTVoMA0obuOpHkHpF6jY3LrVpZy1lB5T7X0owITkH3t6EcheCEq0yd4goyMhtWI7jY%2BLdu4k%2FOI7%2B8wvPjibZ9XpajLNJn1hHDY6dJg0zUCWbbTBrwHe6E%2BcDbI8dtXj%2FsLLQQBjCTwIH%2BJMZUQkgCai1ZjMpXgLPVOQXAzcJu8q%2FLZdF%2By9XhBw6mnh93fmrbSkA0SsxifIyvMGEPhE2E5J6xAjTqiPm%2BVdK0MU89HLkwRC1%2FBGdFAYLFsdhWLdwgwux8slj25HWoHNV6Ux6OVhMP2vyckGOqUBBaDtonJ0eUKO2N1qYauBVGLRqbnkaWUs3jgygAwVsC5%2BJFA0SmVKglLEXphYkMa1cugt9O6oeIHho0kParrWLpQlOIl6f7IFe%2FPgbabj%2BtnjF51ucPDhIvkloklkmex3gUNI8KzkrSWdzvYbQGM7Tlp03wktD%2Bih8CYKJxH%2B5EVUgZhl0ncreh8xjkXaxyTBZ29SGL0Xvzs6NcUBDi0yzSEAigik&X-Amz-Signature=38fecc7f69f8e391b544a3c6a5e6da3fe60985cc35e7171dced7e9359f8082ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

