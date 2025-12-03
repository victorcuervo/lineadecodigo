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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX4ADZB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGOzzalsS3tf%2By9fOdw1X4FI5796OHHm38pQrF4BGTRNAiEA%2BRDvvw9bpDZtYB5UoYh9sbQ39mExKJyMAU8rfcD4g0oq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDL5cGf6s%2BVmKMyUZOCrcAykP2bUk%2BMKgmPhaDUXqNFfTQx3wWhpogn7X5rhWgqimhulUhc3%2BNaWXlA7f9C4mB%2BB8AIlFPPJ3JeGawYTWg8%2Bb1VJYF3yw5OBrm%2BDPxr91epoH0%2BQnySc%2B63v5E%2BSUPC50zv%2F0n2w5PhbMZ0Izs3JdBTgWW5L3J4gv0TcwIxLR4zXWTnGmXh%2F66vM9HcyMkIktfgWzTGEe6ugE6VSfdLWLmiv9f7ji8I58m%2FaFeo7%2Bqye52oYyL0USzC%2FPTLCizCppIkjULtiQswx%2F08kAIxqv5FLULwdeKsQiBjlnG5xfWU902JEeJrmL1IbYS8w74lP7ZH1gPKEQGIVn0xLuBrv0sjGPzxBRgYFM4K%2ByUJ0igwWOd%2B%2Frd0ijBmtFqeTg0%2F34qGy4rVrzcWdtZxxUQ0aF%2FjTYgp8ZdFx%2ByiKyv0Xfb%2FwwpJdi8Zp77TvEIQgEDhDkMzM%2BLkXMWrXoYhEalCf%2BdZLV9N8u2%2BoRR8bPsBEV5Sv3UAHU9ZGp%2Bm%2FvNjKiM%2BoOEDOiDL2oYw2Uq9bktK5K1F5nTFyNEhyMgVz7QGch1%2FY4reUNo2pz%2BSdFu%2B%2B%2BYUYXubvdxr%2F%2FGyC%2FGThBiYU%2BsY5QZVHhUApfUaPMc%2FVZPxHTLAJTPsV3pRr8MKemwckGOqUBzUbTpoP3RSgQdRHVF8eM7fG204D5LnhvNbD80nNBfXo8FjrwC%2F2WGgHDbyrV24dJ%2FRirah5LFQ6HrYnY8XdKyoIMu1I5I7IpWO1PqkVnZnE6Vzt0yfWGbGqKVJ4QIYJt3Uf69UIMvjjWUU3g5POPXqxxnv803%2FTpcCHx3wZw12ibsn4%2F7aPOSzZnuZjFZNfoj7EgS%2BMwVdWjZ8eW6eQn4tKwry5o&X-Amz-Signature=b37f43af4969afa2eb52babfb4d50b9006ccc4ce69c105e448fadc2ba7e2d024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSGWIJW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAU12l4bWLzKh0J6dUM8lZ4XPv2TQ5AxW5sNEeF3npzGAiEA4artAy%2F0IfakEg5x6FlznZ4Diq6Gr5MQC7gAX44lXdcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGsNJdzjPPYo1rW5pyrcAxzdSKb%2FHLEdzPKrTbcaEIFdyUEGSH73e1%2BJ%2B8jbqtziVBb57%2FNiXF9sxvVi0DU81FISVM0Z44B1EPV3nBgW%2FxAProfaYDCmzM%2Bcpz18gyR2waIR8R4w2y3bqBWUj%2BGFQ5JJd5hNoS3BXnNe0rh%2F4ZgjFqEnZF7e89%2BQH808WOkQZq7WZA5MJi2%2Fh5wp%2Bbbd0KswB4Q6L1sluBk1eFhgLsJ9Entj52Bn0KFOCRanZycrSsXktXtyspXZUmQg8kZ3%2BNWPgzZp8ubvcsYrcaS1Xt2%2BoyfVSsY05SjpEtemhekuwhLRggXdwoA7HEVxNxq6F1p85n%2B5ssw5Fd%2BNdwZaw0w96en8s5gA5P0ibjACQmumefvWQBOg7QN0mqS1NTQC7hlYyjRL87w6lnxyp7EQLjZD0OJzkghYOtGGVXN5GSsDeY%2Fl%2BQr%2B%2FI2PB8YSFFSq1HERyoHwnuBQsCycv7ZiFx6D8NMrrprTl0YPuQ9t7ultJwn%2B5go1IqMCxIialIn2uTA2TrwAgPTtUmayFNH3qfUQK0TcHBQbM1Te1NZ08FANdOEJWsl4iBT7jdMem6Rl2WIkOvshFyyCB89GX%2F3%2BNx1JAmKiPVVezT07Xp7STQ4lHGYiddYGLIq4%2FzMUMK6lwckGOqUBfNFuNiyqioZkbFIkIx0pg7hiSRWuLq0FHNqtQfEBrG0AFtps%2FfrjbnmlMNXc9Zx85f2l%2FQAN%2BLE35ZqsXDgJbERhFK3VSw0ECw6C0NaKGpaWZYpDxHk%2FQdUma8e4E6O0bCdt2A4JQl1BmK8w3d%2FTFnYwRLaVEUnLDcXWN9bU1KAfRUar7R5CUe0kO3S2qWw3aSAfw5RPT5e6L23%2FWLzkXpfgs04e&X-Amz-Signature=e46d134c66701562e990bf603c7a2811b0ae32e31c5ae396fb9f3eb9386da621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

