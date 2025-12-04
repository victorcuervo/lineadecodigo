---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U2GSRY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCStLd5%2BzTKjG%2BUGJuNqjoWv41aS0seqXS7U3qN6VS%2B6wIhAJDFpNBvlwA8NgnSRLzS83cJbyLS7%2FUVuw3kgKLILcuBKv8DCEEQABoMNjM3NDIzMTgzODA1Igwkg3%2FtSnVJ6D%2FoMBEq3APROLQa881symxmrmDnKWUlC9pWHsW%2BFIiu1ea%2FP2mkZbTPy%2F%2BEniPQW9PKBseClB3omuF5yK5TOZ5tPxYNFfM1XhCYUtI0p%2BWzty%2BFMeVJKpvbJxeR2Q3kS6bf7fCIrnFO3Q1C0yZpBW8eTGE10Xe3FWfp6fmWBzwp5ftPjbZhdekPuIiCJL2nHVVoXO%2FsCKpbKJAimtqdsqZtuX3qnBqZbN9LAbTS%2BalULLK2jkQoShhoDfuSTGBA6o89oHaYx919fc7JNKJ%2BUvE%2F0PbR7HUNSerN%2Fs4IPb9J4Fm9kd5hdSVUDDN7T1a6YeQIhkEulWKLNh%2FdkZzAoQe510n7MUPuFXD8We3PGMnbEr%2FWbOQIVjEyqXUyqrP3%2BvagsQx8XMTNLA1CNeEgLA2rEACC7BgwYNshj1XJeU2DiekzbAsaSPqZJLwDK3DU9P6WC7dKTu1OOZrdSSz5DFtGmUySPMWDVF8oa8SEC%2BRF2g6AyXsydv2AKa6EZfP4I0V6JE9PH2RFO%2FT73FnF0pfhHIGSWGBrU7pO4WO%2B828yyfdYeQDIOC%2FXdV2jYyJCcFijV5Qng%2B4Mur02K%2Bz9LC9diSA0frrzopmefDngYGuSEjOGl8i1%2FPrz%2Fy3Qf4958BHtMzCdhsXJBjqkAZamrBMBIDNCKvHS1F%2FlkXw8DDj3xyj1vieUU3ZWQAciYy4cqtIQ2uTDY0dK8iyh1KUwOvRdeJihQmTSeZ%2FlqCo2VXCUQlYnZPD23nVgv%2FKFTf5IyEVMPAXW5QOOA%2BpmIVVKCfl0ATuVKbTTq4nsGjnx1mPoxlD%2BZC0X54yNdznBl8CsV7b1pWq8SGIm%2B6zLEH%2FbfiELqw8AIH6O4aRIDVMSePtf&X-Amz-Signature=8b42e4754f1913ddb0695b04d276bd20aa30952ae209dd07162a3a8c99ee621f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5IIZY2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHTgiN5W3G6hNmboShyK16DvLs6XzYQPyjC%2BRkyQEfiZAiBxXDkcYZ8Urn7Si50sMk6HaZMHF%2BUNrhxmp9U1eLNziSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM9%2BnmUmN57V7wpGzXKtwDDYoqYybmHegYWfdjKA4lSnQ4YipM%2FbpjTLhyR5ShBf2XeybnAlbZ0a5gIpZSNGu7ATb7RxMArY8tqPI9ijp4TSys851i5EKUxtJYWI2n7zprPY97Pym0nK21Y1Ce5OR5%2FJkNwIQBA%2B4xHm2D6hUJ1KaHA7QZSBD9GQgEefT6ZgS10Y2q%2F2qQoeTJ4V0Dwwjut90BukiYRPJe5wzq10aTDyxYP49JzX4ll51cg01akjcJRm3kxBHLcVX5keBfJQ8oFUyv%2B4WOVC6q0qHxXhy3RI4iI7ldiOWrBO%2BBGOvpJW8HV7M2owatmmeC61E6VwNtoJRMlQWUXUkJzcFjFmeqHNfGxMwt8jQdWCUKJsboLJe5180GCMROY1QO%2B1Z%2BVpB%2B2zVywq%2BazmuRTGnUh6tMF7WpZFFjiNTPRKJG4kxbn8XxTOJcDG4%2BR2jSgbkCc1x1ow7Y61KYFk4aRg49%2BN9QI2c76ck4ybc7dsw6JVolOde31HLxyiD03iQ0bith9x4Dg6ajQN58bMFyxPdlaFAxP9mee9HW8%2F86cEDKrUFYeUhBTe9F16ix%2BMErRACSNg0a7F%2Fywg8bseWxNpwtTL4O33S9hhl01yUzZ%2BOMkhRt%2FhBPZRF5%2Bl0xrfzsbg8wgobFyQY6pgG%2FB9EdLJErdNueKN9c7L3U8g9q4ky2QDc%2FAWQMhVmFt%2FVQmRs8f1ho8D6I2HK7BbRgsqkLakRCQqQ0R6TNHk09O4GUNlJJKMPibpCyQAYjld%2BfZV857rCUKKPv2aPa%2Ftv%2FY9Z2xWY%2FXgat3AOeC1ABY42bu0MLka%2Fvo%2BM%2BL1c85VA0g7%2B8LANTfUHbXP04cj74U8qrMP%2B1YnW0QG9qNGxaPRribQuK&X-Amz-Signature=3227ff9ee80a027370b28f3c7403d68ad2387ef33efc7f4dacfdaf16aa1d9b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

