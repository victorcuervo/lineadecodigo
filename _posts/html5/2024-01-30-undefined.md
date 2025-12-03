---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PTB6GG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCARWYbjHDdFD8xp0pb2PeFQxgIFspi3wAtVYctDML3KgIgDunSw4tWr5EaPuRgOunbZ1R7dZCk6dU1OzdCs%2Bxw%2BE0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDF34lCsgBLgFj%2FffrircAxekuuwoSgUw8r8zLVbXGGG0hJ6hw9Mlf8%2BdfxN%2BPGG56Eybn2kFrx3wep9WST59FaUOgilFe13p122AdalBlroNzYMuDhk0wb7uOPfCcOVKZci9xcc28utchYR7rBvWzgTIWdQdLKNk85J1WcUygIJNIzHPWCZ%2BFNZlqIX42%2FLv89cQFErooO3R8xWjkDyKRiMZbQkahyDfQCsKTp7QVF2TTRbSSHsrXCBlWhGVHBKj6IrjqFZg7ejhsgz5PMkL2vNKBoF2wH1%2BAXoDlWeNC7YFFdRRWA8dQytjrpp5WBmqLqG4T2rbxF1UwKsvpQ%2BcD8jIlbWbpvUPwGDjbJ5AP4ULv7ojqShh7i6lkO1sSGucw8jVm5K5NtrLW5sRD1Qsxs8k9lajRTrLmlPYHJ6NKkU%2BasinzaMQUWMHIqK12YsSsklwfZ1czQCafjRUrPvxfmv5ol5r439dJFwdOhr4wMPyWQPMyD%2B6WE37gUPC2BvNlmH3jKAFMQwQa0nKDkOOtcZZA0zutSobjq0iu2TaYQIWu%2BR53FM6zXo%2FeISs%2B5LBpnnDzhJ9LdXjZQWmYB8TPxzkR%2FVZ9IBIU9ocAqpg3YYIf%2FCfKBlGPz5RMZtyD3%2FzJum2k1R%2BNkYeaKVNMLyVvskGOqUBp98SGi31Nk%2FRqYxaxUOtBKlL03WcDkQ8zW6zGqfrP3BAQTa85EmMVcVmEdK0dyjWcVrYNZ6eblOXRm7nNVpXYLYJBe9jpTKoZ4Vfj0R5So5UvuPKXSe%2FBR4V4PPVhaiu4XXRC5T9miHU5EFKPoAFLAwyqQtp5010cJOi3SgR4eMH23U%2F67YA7JHe51LVn02%2BZbdyKOr8THedbHQ%2FVaoBFy%2BM5zv5&X-Amz-Signature=1d14533fea20e16c87b31a2d4a3aaf7e0eb6fc4eea93c53be2adaf053e32acbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSWZ6M4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF%2Floj%2FJ9344B5SY6KNI1Dk4MWuu7YxyWtW1Yi5%2BbUOvAiEA1tOUfH5XyHARxm1O4MCrUrt%2B4VOfTq%2Bb5LgP%2F3%2Fk0rcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEn7IWGrta7xHjzqZircAy8rC2MbBPsYra5Pkyw71wnhUxMV1jvWMGE2thD%2BiRuJuz7gxHLFO6Lk2iI8BGyKQZ9M%2FvrDtspWnAD9VGDR%2B4170ePvn6M2Nz%2BGgal6%2FOks5lplIpCzKuvF29avgRKGI8drBCyp7m3Pe4U6l7PhpPaE5VsLRbdVo0s0Im7qAyID5r5LP8ak3GktBnkMyVG%2Fj%2BTtM%2FzsAOv%2FvyXHJpzSKgAU%2FZW92i9jRtE9UVR0nWRe2KNAB2rSUnE1v8OoM1EeN71XYQFqMAjHLDRFHXZ9ZwPazIpQPbs5AmjXuoPf5qfFrRoNi7W0nCmLR5HJJtJHw0m3wgtz82Oeaqq8qSaDyahf9nOHGV4S18Lfob5L2N%2BOgIoHnZi7hWl8w1kbTLOVAnynt1H6weV9RCAomKAExMVF7y63jRxQo%2FQoOuzQcefsaWy3jVB3rhRZblFhl2%2FtD3CBmiLmO5Bx9rFTrxK1FOejMxjo1nEgEn6SFzbtGYxiXQ1BeZMuJx9%2BkS75V5pwg4OUUEkCn1yj6MUhKdYgszSFOet9ghoM3xpeCeYtwjG4A3N8yNEhpsn2vL74Ui0aFlVeikMzroJP%2FTC0LguYNCBsZ2KTeGEOEan1YvYRf41ECm8E4Zgz06MfpY3jMIyXvskGOqUBj7HGCbXvr97uq7dXqYAPkp4JgLqgY28SAT01xzjOCfAf5lb0ryGOU2av0CkapTqFMQmGB1bDa%2F3UCHrBorcoXJIbAL8pNQ2J2uqsFZfEFEAzPdhKyDb28DabuJhPcsrRoYmpgo7s5pCk9UrVgv7MefGZkYR%2BmL4VgPEW17iW317%2BVSYCV6epT7XjEIP6x%2FR2r18OXKPg%2FSu1FzimXJ%2FQjbdUqSbf&X-Amz-Signature=4350c279e6ddf736bfae2aa1ac3621e51b4b019f208f5c1b4048a3084a8d0f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

