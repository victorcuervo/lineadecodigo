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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLU7YNRP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FpivRqgX5LeAdZqZ1drJzxe2VRnYw8LK1vdWIIFurGAiEAsUtdvAdMkmIgKqlDNzODIWqY2609bZUKR1UuaCq2mowqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyLl%2Fx%2F%2F9%2BHTV8%2B%2FCrcAyp8e2PlxUVdAriIlOCw9g8ruJgWBb8NFBGFx%2BKs69J6PAl%2FfVaHxmP2tcLsQXTIFSpuBXNw%2F8rC2HHNoAasRW3%2FnUSoro8I9i5%2FPO7yIc0ak%2BP8f5pbD2aYt6yk0Y7vYO3OJASx27vqzbl6pNLQrj%2FGEgGE%2FXS%2FuQkY7W%2Fs8m%2BuoHVZNSYwB%2FruamfPFhKwWDkayU1i47JVQRKuSg5GoYbKZ3QzVXmqCyR576IuRR7dz9jqUoxMVKSRLLHFGXztwRiEf%2BIEODROo2ozSXbTnvYNX57xrIcBxXmSlN6JBTI184MiLSZoEcN0DthbV0RA7MLbUe5DuYfFpo5ug6zVvNQ093DtHOByqQQvAoVXVLzOIiLhF7lCDhZueYEwi22y%2BUWY5NO%2B5qvhnQ3WRPriNPlJu%2BVnSbwpcpj8QzRy9WcfF2NWKGeBZ7eqy9YAF3JrXxgB%2FF%2BFrSEjZLL0owC%2BALNkr%2Fzq9dGXMocR8ANPCsOBy2kW05TO2sT5K%2BYW0qeMocppvJvvZd8DWppzIDN6zI%2F5jmdviPHpDwn%2BpR87kueoRCqRyHPLtdihIW4QMAiE5VQ%2Fm5A7Mb8jlj3FBfiZD072ls5AvB1YWcOpdqNXQdCthcmCgsM3iKbUs3UyMLvD3ckGOqUBoItDmdf%2Bguoc2StC8kNktdbDqLDuqbPJekv8O7mcXIrrPtzYogeXEwWi%2FCAtenJfi%2BRQouyduvEyJ40woN%2FtJmpHQfP9z9m%2FCqfskQFamgOs30K2GpAirC%2FtOxwnCcxE1J%2Fo0DNvXU6JDbpIolPrmry5HsT6XmAME3U56krU7qtUk32G1AifqSYkYLhPf%2BakR3g4LiuC7C69qc%2BpwyP6Bi%2BM%2FITo&X-Amz-Signature=0d1c507346398cb6a0640b7dc90ce979dd101fde35f00eecc39cb41b781ecb09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UMO5AP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1P2r%2Fm7a%2FY9vl7Y%2BQjOODCWua42SCy8yEEGscD12DygIgYxr9d9zQdrqb3dxbRpe2CiJ2%2B37s7USvxcEtwfL0tXcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRWb6IBPDNDkyS45CrcAwcSMQd1Fqklg2ZQyhquG3b0JMItLEOrWTW1nV%2FnZcb8L3WkORyUgCO2BpidPTtOc%2FCZayrG04r8DjA7ZWa7don1wRmlmY5r6qWiAOokIhvehgOE2FlVqvhR7m8iTjop3k3cL6t9K0GVNzDp3VKxpFeXUC%2B9ie4Pq9H660lVJRkAZrItU%2BGAnfhjcRTVKGv8DapTkirxo5xfW8JE3%2Fq9WIVEjqVcXhL3luYvl%2FeRf3Afy0zj8qkP7H1OwfsW9BG3DTQF1fCuxlHW%2FsbY%2FPNb1Jq6M%2B2hEeKwpCd%2FlAJtSu8tXhUakBs2VkSjRq0BIK4bnyO9YgAOrZUU1GVCtqZZyeB5ZdUE4Vc04WHQtzpQzoDVTXp4%2FKjZn8u60FnmAvswLZnYVu3RInxvcebgfi0ZtX354yXCO0GD42hIpF158T3J8dZ61RtqGoRzBuF47WzJdyKwnZGRR9aVvOOK6YhVdfrmLRxN9qNbTEUU7w646ZaufeHovFJi2V2j1PESuJ8YvL%2B66i6KHC1RwA705ipSItjdSkte9f1Rci31QKlIUTd9NaCo%2BzulESKrv9ZPtx%2B%2BqKogiEHmQCySHk06%2F3hZ2SwOs45kKJpcj9ElfgYNADCuZSZU3d1Q9YA%2BvB1FMI%2FD3ckGOqUBa24aCH99VqnKhq7WR00i3D%2Bd%2BEZ7dMxARs7Gy8tE5MUIlkwUzBaMEflJu2K0ZjvtltlAjZJSUCEDZnmAqZbSmRxlsFQgY9ENMMKCW%2B9phtc92Rkt4g8wfyMpIiOzOAriy%2BtEbjYxCxUGfP0TtxSeI64CIxFbfBLd27S9K9lHiE2XRGHgFrd6HJaON%2BMrbnaJsxNIq6m9AtTxpMJ5vAeNIKhHYgBT&X-Amz-Signature=4225688a6eb6aad20c8b412c9dfac90b401cadbe428f3b1689dc2f3f462d2ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

