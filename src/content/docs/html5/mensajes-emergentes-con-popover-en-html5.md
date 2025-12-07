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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5REQ4MG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMoVlsMzRD6eZn%2B0HNi%2FCxpgDbIVpt2Xib4p0obQHjqAIhAO4qZA8qeaSlFGOK9AFa8gJ1GyMWPZn6HdPjqR%2Brkjw6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL21RZ1wyZppNFSicq3AP9M64KI6f05enabIHGz9U%2FlUp79%2BbTl7jLng9SgNOC3PiN%2BOerGUWOmofLxsChubEDf4BoZ96j0RBXWIg57i7Cpy6tkNVgDUBCMUnkqHxJ7aUPsEKvs7LOs6c5X46%2F8pVaxnzmL3k%2Fx%2FXjuaRzT2lDoC1CHw%2FhnB5FK%2FbaaEYvSijIPbVethG0s3gzM2P98b3jO8T2LhJ%2BiNPuo7en81EwhEGf7MFa%2FoALDsyT0Y4dnfrS8le8YNudBNWEs%2FsmGtsd7PqKC64T5sto7IxA%2FciVNGwTx0%2BUilz2jY1sZwu03CQ3HTK9y4hN9JzGaJzrP1BlbbYCaofQKJdT3%2BHklXMKLTfOkuadZQTJMVb7DFeYS06lxEfy5qkXWUxsCDk51AvTl16OneqEMp1XgXXdeDUGNHubvv2Q5YaCsNiqqyj5DzeUEdrTjVPSsLVCwkD7C78I0nUHl9d0eF3oUV%2FpfVs%2Bz%2FjHMFE1nNfscm7aJXI1%2BUo4kgc%2F4Qn5f8yG6X%2F%2BMfk7rmMrm3mGNubXi29CI7cIK8AuHMXaIcH6MGPsHFSnPE4E5ggibhpWoAjEQ1VN3EeO%2B6x7xSzh7kqpKYu%2FPJmSsa%2FJgStiqanwH5x1HdJcIBTOQztQtgw9PF8P%2FjCF%2FdLJBjqkAfUvg1sASuOvmJgmeoJaAxlZ761xR%2FyR%2BQ0dlclNovLHJY9AR8PXv04Hzv%2FakyLf26PzBwiVT%2BGijtyeYP71k0ZusJ%2BM7kZTgePHMRFWkitNzaDYuBDjZQD5Fhhqr5EFgQxXNGMX9xVb0Pltbye7Ej3GFEAprtA%2FQ2QMf714kSK2jse2tlzneJxe1Pjw1eYz6i4ojU4PtXHyZM4E79tNQ3uW4uUd&X-Amz-Signature=5b7c9b61b1dd1a4947ab492144002cc1bac27ca15b0f7cf2fcf7a8cb4756d90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQHANZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqCoeoRZcMePL7%2F4WUOeJsZJrTrhQvtS%2BQRt6O4cuggIgWlig28h%2FLU7letU3gk3RkD%2BtLLeZTbx%2Fl6lUqj3xRNUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHqmz%2FAA8jyRbSwiyrcA5AjUIhVwAehZKJItibMYi9%2FBhj5Pw2ExDRlmwLhmMErlVHhGtVEGP9dlpSffA%2FiC2jqNdIIc05tmLaq4OqIkL0ws7uKnvMrQ1fErePV3t5%2FmwHCj9KDPORupIgNB4wzvRKJU%2B1eHGhTGi8bTIQBfZYPvLjdxYxG%2FmCKapabRUptt%2F6I3rYE3T7WkCFic%2F5lWKlMeskiK0gyOydY4k9vd1eBGuB6fTBdD7QA2d0jL%2FKhtkobZCsUI5RV1a2pkYy7ivtPU1CqjdHSUJn5lseDx%2FpFmuzybLvydA6mus%2FsMcQaD5MQFaIZHbTugpoFNIfuy%2Bjkx3okchyRdagbz1ZhglPMJTMdMHT%2FaL0d3SGOQgdEFPlUMRjp4cDdx6JDyazc%2BO%2FFavmX7dYsub3ErclQrPT%2BiNk%2BW%2F6kpmTdtxj%2Fi4ykGwQDV%2Btwn5qwFnjI3OhALtwQCNd4iwalnIXBqP8jfzxrUo71rK2kqYX8zXmeF9qhNExUQGF%2FPZHEkQZMoyxCaKl0O9lwI%2Bsosgowu3eWZClbV3fjLJSzQnfySbQXpoS5WoAuiB80L7akyiI1us3ij4vV%2BCYuDd5texdaakuo2JXHFoFuYBxeo9b9Hjo7YJtTD2%2BxdYGbk7WMctgXMI790skGOqUBC5ZOyntTphh%2BWcrEFVh6E22yeD5RPchalFSBo3u2aQpXGZfxkCnPpDt5w9G%2BBR%2F6l56VFtW%2F%2B5OxdlUpZ6q9OFH7r9vfe%2Fx5X32ALmEpvMLwKOao8Y4ZVJcLrSP%2B%2B%2Bz69wjr62bet3O458SJrs0vJs%2B9l2wEdQ6h6MVzFa9f8NdoCT8L1HvRQ7sXSQ%2BGBO3HA9Q1F7iAwxKDiT11Uzc36s%2BNwhtL&X-Amz-Signature=bd17c7f089f281aff188d893d6058d11e6c5cc092f7ac1ce86f2c4d2c0715a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

