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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJT6PIW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHLnJYKihxBIndQqMpk0bvwmXaFyKQifAh9%2BpL6M1zBgIgANx3IvbjdEUiY2TpF72pqulg94gqLQBTMGQRibiSRbkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR2W0ZXKFBqk%2FT2QSrcAyf2Tfvrl%2F6qUh%2BFwAuciex36pX4VY6Mx38qz2ycQf%2F%2BgxLdApPSG0wp4VHCab4o0HAYwM6Vi7rXb7EU94FDIjx7QhWs6XhgwHkJvaLvS5AYvg8TxFcCN8mURgezeysHLyQQaeij9ZWR9AdFw%2Fo%2FJfH5j2z6rSEGxrQYWzayn08lUvD8WZffqs9AbHSXPG6hogcGKlczrYX1k6eefUcMwWZ%2Fb9oFC8nRPXNUv%2Fv4dAW9ExBt1rtIPx%2FBJiK%2BMMUqCEELPZG8Lg%2FlXhUoOY7bZmx2A0yJMaV%2FnsieP5ZZTcRuX46O1jDeZ%2F4%2B60FiIp8Dj8CAnZ9XgQF39H4ZbiErrrBpxY0InVSUqy0ppEdLSthvC33H7P13Q%2F6rxZD8Sq01fgxs5R569bVXimMS9ciGNTXoL%2Fi%2FKt6pY5W1Nxq3u%2FUhZyTV5Q2zvjPX%2BHpwHRx0py%2Bun1IbjRNdLdjY1XVZ06po9YU%2FG0W%2F%2BFl2x252PIBweBr19I1ozTRSUEVS6Jha%2Fs63eSMJ2DmUjqPMzLZN68LCjof7UMiE3jiuKCFLQMm0jUtVeFsadGgXTt3TsFxumTC6j3AIS5tirjOqb7Yht6HzL1cqwgLWAAYz4AMHsfnN3WGcOgeelUgvnUMaMPao18kGOqUBDRdRAaZufsT3QbInSCWe%2F8vP5xOQSONTzMlafzGe8mI2ccIo%2B6auQhwsWHBqCP75pqNChQumM4Eth71d2orBiXHn1pAkBTrZIzjUJyIKRzddu%2Fs%2FZR8T95aaswNzEKZx9uKNG9Mz5%2FvGGw%2Br34IHKYRbLmRJ%2F2yY1sPYAjfaOzNaiwuvXJiMyYWu1l3Dxh1e%2FzRUAh5dwSPwJ0NNzjEafQYdAz51&X-Amz-Signature=e4eb0bbf45626d1779f61c09c15593bbba257cdf1f4b05179b3b1a7956f73229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VDNQON4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVHIpifJGx%2B8clq%2FMcm2UqiogeUcJo9XqQL8ZMUtSDjAiBaBmVndcZBs3YML9AiVQH7X4otcdp23YUjSxtDQv8YLyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbII9buVO0uiFm8t0KtwDHQdKJOGTS43mHco9LknmO%2B4560usiReaZl2FfZ6LO8JIdPhIx2L4001tWBDj9ayDAHynIpnpkrg201fqm1mlgmy1t6gEuDl1X7S3zS1OMOWySImum11nEGUKkwOsLS5pnGsAMhplOp65kTqtTtu%2FmVALQCCkVXSpVAzMzbB42SVJYqOvc3qxmY%2BDA9jqIuBRiVM6t%2FP6juasLNvg%2BMn%2F%2BOVNCfZUQfkL4qdzhHCsBfio%2FKSeAOWdt1KNwe2YqzBD0xDVxS%2BqGAb94tYhHtrVwNATWvaT%2FiYuhVCkJgRXaFU%2Bvaazvxcdkc6m2FAW%2FWuOxyE0LKXsL4koYK9IEGKjtISotV4cCcmrODcwP47VnS2jrkdWOmPJzMYz3wTvzh5xGQEpj8WXAFlx%2BKu1FH9B4OIbPMxwMKZpmF3lohTsLQ8k1qPqs16GBFepCDPEXVSAVs9ee919211ThUHBK2UCa5%2Br0d3b927KUrwL4nXDcIhOrB8LwM9fbUwWcCFPiWGJJdTpDLmz8LZm%2F%2F2PtraAU4h3I1k%2FCMvcR1%2FxkgYlqMlYWBsK7ozGkIvkEWSemuC91UkinqNytvS0hFWt35DgwulwPb4IevQdzzGta8Mb7TN5%2F5gM47Wfk9gVn0QwiajXyQY6pgEGIu1EhuSDAV%2FMqQaVdshhbqsb2zb60LBSyhNymH6upmm9CZzBr4rvX3HGyl8xoLTwD6Wgn0jyln%2B8gianjPiMiN64OAKWqyVbuk8VNS8mDDXieuJmP3ToIiQbO8WK78rZ3QXEn7Gmeli9fZoI%2FjCiBx%2Bpi3THTNzjFe37a7IixJwMPaOc%2F7Ir5vWqEnW71tdQa0odH8MzlE6pfXvlytirb4S9GjKz&X-Amz-Signature=32f3d4e555b9f59232f9a17a3cddf6ba4696417697843de902c49861ca0694c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

