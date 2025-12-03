---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBI5HWP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDGqipYV6%2BYtJOx%2B2OWiPJvIkVXT56alc4jbI7Mnv5O%2BgIhAN7J5ROXJvR%2BQwkMelsRQCsY%2BQ1v40r2qfjiulhLAFmzKv8DCDYQABoMNjM3NDIzMTgzODA1IgxW%2FhNqkINLBIQ80wAq3AM79lTTBfNejDC4Q1IsaoW8buVenVyrC%2FxcZ5M2mgupnpa1vhWRdpGSpYVoyVVncKUSeWsSHV5dn2PnrYpCxh%2BlUTc7gJf%2BpY6N2l5tD9VKYh4hkKraFBCy9AzhDnHUSr61SPBJxPNIptKx8Q9di9lh1OcWtZr3PUfydp4ldbMK3uRMu6z6RTnOGl6uvSPEGiyUAeB5CCgI62cbShiU6%2F%2FLYx%2F0rDFKCLabb902oAxAquoQj80U2gEVq4GTnk744uBWv8usCqRbnXkJSlnGP2wfBylO0iV8vrhYS2nSZQq897QvT1XIOc9O4IDR0CV14WK4x1WKf%2BRnzn7DzJ7AYSa%2FPTLYD05A0E5aW8Fmh3mGg4JePFIo473DIXfWNa5WBgKc4V4ehRZufCaauJ7iA%2Fbxam7qAqKULr2vcmqJM0ZAK6Gmprk05fMxG86lw6cFGjNYhTwJdY58%2B6B9LhZA3RUqF3h51Ql7Nr0uFXOFC90jAycaPEYV0mfu0AwWLGa8b1azCnOA7bkaBsVBZ9bbHARe7KZYk4jdW%2Bf1ak8ftZEhrtwZCfExvFJwSjEHX35O2IGDM0haF5jUCisi%2FBuW%2B8Qx58NciNR0eVJ3IRcSwG85WliofMlugr9fmiIKpTDpvcLJBjqkAY5xs37WUA7C%2FH%2BXY2m1E7YWzzeLwv0SApjaidNWDuoj3C%2F6rDKMwxsfhajnRjyn%2BUEF%2F%2F%2BcLlVCpHwcia1uX9f2Fm5Jk846cIEuxwK16g5aFHJzb6D840mseOkzfQ%2FwmiWc8EiS1gbdmnKCMik%2FxRxSxs0PgMqZqBvcttQKtHzT7c1eyg9CIHQOC%2Bqsro%2FcyYS9l8%2BNs5lAqTFL1jVYj2UnMh%2FY&X-Amz-Signature=0311366de05c309849ad118190889d672ca8b6dca3f45fc26aa042a51f4c7272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CCWABH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDbtlHTEZppVl1lRGNfzngLCk8uhsxpEOvU0hJV8EclqAIhAMkv6m2aVZhC%2F0r5s%2FMADkPMfmr%2BoN%2Bkfo5FoMRTYCVGKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2Fa7mZqrD8AL2xF2Qq3AOkg7uuUY0FmSoxu1aw4GJSZSFzSWg7UQ4q16S9YsQ%2Bm2TKVUKxEqn3%2Bnrrvpxy1D4NKjJ77sPfu3B1RLZU%2By9z5jLCDG9dna53uV2Ty1ygAq%2BbGjvjxCtG8ewXx3qI7JQc3cSQgcFaDcxsE66h4lu689b4qqVHaKcxh5IYueS%2FspQZdr5VxuVsnABOWi3n7qfhydtvMjN5c3i5Q51YA%2BbhhkREDdjsfcpKiXwnOyGSCADMgIqak72tvugaNviBkrQ0VZFS2aF4ZnSZmGUUGIG7pReADoBGXIKJbxuUqHbRxdjp5GRtiJfByLxpfOuH0zuKU7IarFNj%2BwF0knzwKcQgjAtx9ADU46%2BFp3frQ7EuvEUiSU0sCaOJUtoImfPDP%2FL4FlutGMJzg%2BSb%2BvzDenT4q0MdNl8%2FsffjoL%2FKDdwVIVjglZLH4qw8eaY1umnxJIYGKmhe%2F%2Fhp5mPjLFr4qpwoDSWKOnT%2FfwWr9%2F0zp4du5m%2FU8ALrbKnTQ56hnnvlJCEZgP3qbPh4WFOkppzd7DDtUqZ1E1R00iFU260GbALMgsNBYF7zP2h4YWcYfAHj63g6mGmIRq7Taq8OOnzEnYtR3h7NylowWj2M4XjQmnd7UmX%2BPcnGcOM349E%2BgjDFvsLJBjqkAXTQuvHHpo2fGI8lVGXZlAvqLQB7dIaa0XIXWqcSAKYGpUKD%2BOap8UB4T0MCymovYiOr%2FmD3GTENSJi9JMz5ASmczA4jFcqYa4V76dgf4WbNUCbtGg81%2FgQeSLxuTuX1lrUXnmOD05IEyjAaC%2FMd6hviriQoQGmRfuR3athBjwhcXwd7aEP0vbnyVaBJWlGb%2F8zB9D9l%2FpsEpxciLeOeB5gUqr4m&X-Amz-Signature=54d0307ca93c671bf7f42a57a622672a444a5976e8cc1d9ad4f4a743bbcd240d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

