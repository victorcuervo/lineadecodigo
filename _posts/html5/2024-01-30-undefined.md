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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPKQ2US%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC2ORrvJHQgnvCHyepEVq07IE2vrQmLds6Q%2FSBq3MBqEAIhAPRYc5K9xYBOVGiFkUNM%2F%2FIOoYRdD9XXCdKS0vJ8YptnKv8DCCkQABoMNjM3NDIzMTgzODA1IgzB2%2FAAE%2F0zUlFh1vQq3AOu9L%2B9c8rEtuhWdws7fqNgyHTaU9fGvh6N0ug0F0%2FQ27AZUpnMPQn0U%2FsxZ1%2Bs1g6LcQCSu19FxSlZfyeqJJtNTfunK4uy7DKSxuhKJ1vD7SNGGk5k7I57DCVCI5aChljnqYa7B0h5lwdQoOHFsQshKcM3m61X12VYqyqgZNM8kHaDu%2BbgjUlmUxh3yQRk%2FwBQR%2FsKPZ5HcVkVgJiDFe3QVUeZxJqHthmKaezsKi%2BvIztCQQEPubpE3ieXNEFQ4aPJLgA0e7bPRWqLmm5pBAVK5LqWRexXECS2NCs%2BtlPs2k46Kzl0JPgHLp4dkSKYsfLVmyrkwbgaAENu2e4A4wDwvAH67bi5mICNxulcQGI%2BEGEZNPTfLSFyrZLGl4MOi26xzD0Ncm8IiIOdQFflxj8ao4K3dNJ7PIow7PBrHJUETa5xklR%2FuHoPBX8MTRg3Dfm%2FYGEZgqypVEVUwRnAP0i%2Fvi3UyRt%2FU2nOooDQgTWMy2MFpXs7mvvHjNTix3y51n5VfmYHryTPRn069tOoIP8BsQEcWMQhJWhJq029AlzEeep8Rwom2QEZ6VPI1I7IN57pKg4YJpTygec286qmsyr3N%2BuXRhJaPTGQWz1SBY2ZSUyxJvpjx00djzsaNDDh1L%2FJBjqkAXnsx1a7Ezu5N6cccEu4OfAQPSyUThJLUlJW68kDrv1fUeKNg7X0eG0as3hYYsBXW%2BilKn32FBMQQIBuxk0acuOSXAWWIlWGuUq3vO0lqu2JWhxp4%2Be1TEJ0Gt3QdqHnGbNymtRL%2BtnoSj2YJpBHioh%2BYhIVRl7XhUQrtfhc%2FMulyzoN%2FPPsiyREFdBe5J%2F5Gu63rRIe8u2nyvr34k8WhJTLQ4jq&X-Amz-Signature=33fa5c5ce5ba66aa859cc5bb9137ea97dfbc6c9331aae57401f2c435f16682f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3O2OCZW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCZp3cyqswiwt7eJzgoAJ4i2%2BwuyOySJcxdc4DbxDqQBgIhAOgvCArIzhSzU%2Bt5dOXdDs5POusJOodIZxLF3Eb9Va7OKv8DCCkQABoMNjM3NDIzMTgzODA1IgzZbQ4Up0vnh8RzeMsq3AMfXGB8ZcBFdGoP61db2mhhrE6%2FM1bHq7uTZ0tFIqQUomuNN1jEoSDN9JKIxFVlX9QY%2B9YwMXvfuo13MQ6ByVbDI4uxy38BOW7%2BdwxTmE1hxMk%2FMrZkhqa1UGJqbIDZEfs1zo85HVcEIgYs%2BwV2fyJDBNmFnR86Bdy3s2Nnw0LAggk5oyblbRvziT3eststnZcg3qfGSmZ0KkI5ubMPZ4hnCN4QKQEaX2vsEs5X9ZHOT%2BMmtFQgobf%2FpiEoCaqW1r58TQC47BpE8VUN30IZ2D3sd9uMB7D5sDhVI29YmvWyxoHgXcSsxSWM2%2BM34yst0OmbZ7a335wcHncp8W%2F97wAdkaKUaSGPQbAEIjB9t5qXZr21a78vLikGpCokn7LSej9u5a1K0SRMvNbwi0GrGns5YfI1D7LzgZQfGr3u0AARaLA4hCazhBMXAqAXPRIHPCInZw7jGCLt%2B8N0HCQIY1Fhvkx1NxAglyzzbTFgiXmZezdcgjE1kS7aX1AawYeqF82tTyHBKnK4VvpD%2FQPN1LQf2zEvpTU6CA69PSpbUu8nwiDtLWQar7v%2FbzReNC26LJl%2BLyssddw5ow7PbkVDY%2FxT3Iro3%2FA2av5eC9WJ54CkVQ7vRpf4ABw1gQQUFzC51b%2FJBjqkAUmTVgpczxNKvF1qCSD%2BoCR3ZDlpVfoq3P2yX43G8dbTnL7wFCQVnHFBF8jlXJ6GOxU4r%2F%2FSBRYnvPLaUcmJW6Mk6yRha6m0DMd92ELuT7RqDXTLnem2F%2B9nBoUcgTgb7Vubskmhxk2mvJEwooIrSYZpaqv3pS7kAOV92hAhPwClJA34tEPPdKo3bn3%2Bl4gmVyl8dSS934O9w1HGO%2F1ddSie775E&X-Amz-Signature=410bf696e479acb2dc9954dee1200470c0094498e0f7ca56c2116422e4f859dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

