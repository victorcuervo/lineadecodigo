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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQTJJ7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtIw4SZouMiQcodJxr06LIPGzzOs5qnGqluW6zkWOv9gIhAJGrRVUpLACgJh3mTxl2HLpBz1vvjWCt8XpBMM2g8DTDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqmxFJhHTBh%2F70OGIq3AP8i4B7v52ae6tb2yRfLEJcoyOXfizb5ADaGlhnsuUphx5kJXZZjy9uYIF%2Fo3%2FrSDnRRKNg9U3wqR9AYsf7a52FvcQoSgVMoQ11oVlcOSvMzbpQ7oqOdxFpWpMDkca0xO43IzMU5gGDC3I71qPIswqOgLvQV2W18VaDWJjQ9gQDXATsyEBJWztS9xYW1HWgKISwx3exU98pnwDsTJvmEOYUcIlLGME0Bd6yDo0g4QQLDbTDKhuRJeeFNerch4vZ0sMAKOWX31niX26H9Kol0lmz4iOdGYV%2BmYk3clxoYtgYJY1eah2DB6PUHIjJh9hmmEP0i3bk0SV1eUffm85tmDQU5%2FFnat5hCY2fCQUaYvQc31QdCLUdXgfO7bw5isUyiJlseHou%2BIIfI%2FgB7%2F8O6YwNL%2B8KzWeKYcjY45ychtIcsUC4z4z1k9VahKl1oW2xeBOEA11y4KZnZP7pVeFTNGppwQM6r7CsOy%2BBGJiStKARYfPKNCpQd9dn7kBe1H%2Fdt3Hf8P%2BeYTJb%2FPkXcIStDzISb7lGAOAb51R6BBfL7yWe0zs1sOLiw5Attgl0kGmsLBotiR8SyeRQHNT3HH7o79IM%2BOF3AlEaVxofwVuCUpL8czU6sq7O%2Fhna2wJOZzCu%2FtLJBjqkAegykW%2Fh39JaVdYsn44uhpae3GrcybP64k3XpMVqcC%2FcGAJuyrhwQopM6nNJ4wps1DIRyFpiIFjYcMoBd3LNQnnTegjKil8Ixx6N%2FoSN7ueWjpbkZBKDMD4u9sg7IZQa8YqkeLdU7QhDR4NN3YowLOQeZwUcv3AyB0QPrKHdntwc9ld4eDHt8eIMsytC03Vsb1F29Ls028N4v7mM%2Bf7Ye8J8hhvS&X-Amz-Signature=efdc7aa4f288d8e2239226fd9669782b3bf6c0a5ad457275f8809a01ce3b91b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU6L4X6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrntFo0n4kNbQd89nA6TdFsVX625dK4QKXpxjs%2F5hDwIgGvayCG8mUi2%2FhaFXdYg4FkqzoGyUSVdBzuQrG4w0dDAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVwwKVQolBXvpyJ%2BCrcA3BxjDhNuPq77IJaN1ww5Cj%2FgQoVDojPfd1RY0b78RMvAJTdARL4I5wPG%2FMxgwkvAPLHlzfdYTrOmWrLI%2Bqnh%2BCK0Ydfq8fJRMLmLnbj5%2FdWZg1gDbF7lYO%2F9GrwMKHDvHzANtaAXtAOiNCLB64QBVkbw3NBQCj6FH9RbJggjv7wKXrPOOe3PIUIYV0u125GFPaV4wSfjxQ14%2B%2BpPp0TFfmXycCJI09eK0kza4iLhXOkzXVK%2FGw8czaI%2BeduATBMKJobPFjvycnhgxXyczBD5BbFS%2Bi%2FVHIgy9auzHemF%2Fk9D5wq1B9vsFNuUcfxpeQzM4GriPY%2BvFM7pLC367YfqC3z%2By0aQ1%2BcUNjxoafLstDe2o%2BbQv%2FcIZjz5SryvRba7%2F8v1RvHVc977Pj0WtcydqjOTacF2IIVPkuYYdP9actiWSGQTKVIpnrppe%2BSfb6i237iGNc14Soh6zUb5qMk7WPwDCqEgqbHA5jlkSY8gprcoAmRWjhpXJsZ1BNdvoVxf5EM18zJxc7oHWBgRmFzUcMYNEQEHIdkw2JR9v%2BHWQ7aY39x75E6iRa3B9GUPkf%2BXLbZjckHJ5VbmAeRQ8lmtf1o1y9WCvqQ%2Fih%2BqAiAHI81pvptL7%2BoeE%2BiA6sHMPf90skGOqUB4fWANLmuf8epn%2B439GlfFPHzQQOq%2BUqR6iAh%2ByY%2F6KLv7650SUINZqfD9nsciaVQbLRSSdovA0p8ncpPex45Lug4GEneOKsIwITJddCaoFdDyGdfiIvt1sgCks0XtbwhglppfyMg2kcc0XbE0LRg3DOBeUIEtsZmMYq8DnHpJkgmq%2FVAw6MHYWHFtNF3O%2Fls%2Flh6PVIZzwt2SaPkxVZLmVsDVuVC&X-Amz-Signature=da5990c8d4696a438ecca5932a47b9ab3484999257034974e85c2ae0906f0d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

