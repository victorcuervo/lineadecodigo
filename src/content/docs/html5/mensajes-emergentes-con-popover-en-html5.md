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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AT5SZT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdbV2DmAPEEzT6D53coVT%2FaQ3bs6MMfCzBR0PbxPS1%2BgIgbSdksqw90b7nSSyRUs0e135IIOADI6gjvW2uWzdSiREqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2jFJHFHvk4MWU7KyrcAwhtd%2F%2FxXbos6zIgOMM5XvVNOHo96IbnRsBKNCUPFuHUm2Fh4%2Bo5SwZYn13HiKL3G2ezvWE1ScJJGiep7IRna3beLypeviZmUv2D0o%2BVIHS6DqPUnj9sfzLhHplsEWX%2FGBmPaYLCsUgIZZs7aSZxm6X1UJgA0GeVRCil41Eg6a8lr7KNPRpBAub9PlPV%2BYA%2BsNCorSXMomf%2FRwyZGXTGpj%2Bmc1YDpK9bQk3yKRQuldJM%2BfBq7eSSroiLdgie%2FtEN9BXVAT%2F7atE6pV5q1zfNPem2ZgHmDoCC3UOt9yyuV4ZUf94TjQQodPxaIA7a6WOJiCAUiBvmtaNyu6rUGZ63D3dZBPJoJFqYw0aqb8vIC9qYfXJu%2B6q5AE%2F%2B%2B%2Fql59Z3ChemV%2F0Ok4JeQwi8e7YtCdPCnD5Sho8kt2sbzkcp70E6y2Hd7VJYtVmq4RdGz8V7gxiDcvJTFEmo6WL69nP0GeZVfy6VXOGP1rDktQTn%2BelvGKEXoyg%2FsC9Pb9bgcNO31UDIK919GFhGjTNaR%2FZoAKCA3C1%2BGBI1Wl9GWvTu4d%2B9bZHQzTxN0KMtaqra0gM%2BA2aGex4Q9MfRY2mn3sE73ArC%2FMHxQSacXoGIQHjwSXaYas8j6wO73dBuopkjMJaH3MkGOqUB7Rr54F0%2B9A6t4msjzeHgH1URenIzQbvbudEg%2B%2FIbpeeR7RihBmNpDs9kv4RJF97Zq6f2Kz4I9gXllIF%2B2Ey5C%2BkG4NTL8Yoe7MP%2FKy4WR0sJn5iT8VPCyVkmU%2Bm5BwL4x6k5BylrPuF4jUCqBfv1rq%2BudRmPeV0fKjnrHTc3WshkAVz9gLno%2FbXfaaWdBoDXPC%2BdyYvh7UFA6B2vcyCC7nHP%2FkUg&X-Amz-Signature=8e9bf49384deb1fa454a9d42bdf76cc79ee3654f225388870f6e569423c2c3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQ6EV7T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRu3gmosZBqsZ%2BKLm1zc4%2FtCLA1NfB2FUAVaIfYelPUQIhAPS6MI6x%2BPHPEzbVeC3aHuMbPqGgs4zKD7%2Fe5FeWAkqwKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk1M2R36CUKHOp%2FYcq3AO0IYmzCTLjlslzqb4kWX7AJOdlkAbfrix91ZcGOQRidAQlE%2FXW8zSHkhdiaFGSJ%2BY%2BsAWQKfJa0Vmx6wDc6FT3hbhEE7VDL1BYq8mJmW9pbfo4a3H26NBgRyxIGGgldNVesU8Op95YVGuAI2mtYgL7aZNMW14txlrRestUv9%2BXbaIHi5nMmRAc4EvNFyzSE3Adj6jIincLIiNUwrX%2B7CPm2gp3hKaomC966mlTAGqHLiduVFnUsMvI5EomNPsABsezg4XP7Ai5kMKoIuPRjSdpZy1KilWZaxdikMnG7M%2FBHktTZuoqmOipwySX16azqAD%2Ba4hwoVMbffJd7ofdeIwrDri%2FtcZ2iHAOSCMtzUftTQ2DGSQUk179CMAIxGrGtQiIniUTXFrq7y%2FqebZDPRxfVz5PNCqjv1qHEJK02RToathEp1kAQC1602pyYNdA8sMAk78NY%2BH3T96zBlDiKmlFZiH5fLaAOo0NLcT%2B0M5fRlEBHW682HOUJ5PYxaGAAfSj538Qpo9%2FuAYY8nj62f0SvNnB%2FasMU2FFw5aQ%2BSOjW062ADO%2Bl0KmXz7%2F9hZzj00BoKUHLVt3Vuh6n90tNAjLpBGDHDaPrwgDKr2C5CIhfV2In%2B3Qre1BD7CRNTCch9zJBjqkARGXEg0qPmu%2Fh5tYo2MLtEbwBcaYiWw%2Bj7P8QX81uOd%2BaPHHEY77ovI%2F%2FhjFlbn1yw7Px7K8TSACwKZzSQxAGYV41dMUhFJ2B3oF26c8uEVz%2BYz7jPzsfbz86EZtQuQih9DlVI1bT2vK%2BidNPOOoDY93zGSL9SFhBB5o60QBqz7EPVtoJ7FyhcMFP9EpXHsYQALMWOpx1iUMS8ytZczB3Tae9gX1&X-Amz-Signature=5d229307cde82fdab70bca357ba7a65b3a93f00e30170b0da35c819d4d186665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

