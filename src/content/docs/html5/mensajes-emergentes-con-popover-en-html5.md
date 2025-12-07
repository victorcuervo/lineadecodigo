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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5ZSYO3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FtHAxEscr3mYfhR3QMZkaD8XZfIPbff%2FQAtspVduX0AIhANX30j%2BH%2F1WexAgA0d%2F9zMNa09jL3125PSLhRWoghF4EKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGVaH25qNS24fsH%2FMq3ANjAuDM7Awzbl%2FoNDK2DtPDkKWOQ6rl0wIR7Eqeu%2FjYnkmENL4Ggs%2BDLliE%2BFwYnBNx7F8ycoI8UklByb5erykQ3mqGcttLR%2FVzPuA0ct9jOOmCHgB5RtHR1PGxlZWQSADe5Oaj9bjdYpq85rlDZjivg6LtSvkPY1%2Fhkuiqhs7Gej0isKJCOxcG%2FzjEk%2BUyD0nTq%2BoXfB1KYWN%2B9%2F8vAMJr%2BxHb5ZSmtJ09VoV8Z9wh1ucoJExkyw5pW3hlMgNnICLDcrQ%2FWDb1uv4gOHeylfIkPhQjMmVS%2FFPfl9vSyRHz5SBmKzxHQIIJF8Qiey4%2B8O3GbBgJfjR2EyLN2eNrPngTboNAHtCVRduYOWX2Rzj1Bps2lq5w7msVZKlSzhPzwwxW0yZpx%2FZHUS7hIbUtKd4w6avsM89ZR3f8xQYBPHLZQlSrom2eOx%2F3l4Qdl2BSxCcArWSciH0wmLu%2F%2BldqO8he5nUATllLLFT2QBSvoruw7%2B1jjJnvD683O%2BXbtyrisURN3ZshyX83mY4aArP7w8L%2Bhw6i%2FdTUFRaMCnoYyfcA6fmBlAINyQkY3Hr9C%2FF0qAoGPyaXPVWJvflrWki%2FS9GZ1jNzgojcSKr5ToQLptpYq%2B1chdDOVkQy7QyEvDCD%2FtLJBjqkATSvIVJu6w7TakcnE6w37BlshZG6dNSmtHXmAF7lxZW%2BBh9pU1RJyPQ8c1nnxD0yoCI5d2Vj%2BdtW46dpe5Hm6rjzKUrj4VyLMHUbl9VusiCXuyG2p3ML2ufmnt9mXEG%2BlI2Ya1BQMDJNgXeb%2BezThLhw%2BPiYYf9Oz3QRz%2BrgirMCNoj1nEbuzMfAsNl5ahQuhQ3OixPB1ckhwTdXzYDz21jCTUyp&X-Amz-Signature=b234af60d9f8bc37ed0655984017e289212e059536f3814f2dfe179fbe864a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4XKLR2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKGsUd%2Fu2hIE3zPrCJZ3ui4WO5WXVSdt3twU1j3PzruwIgEUbiH5UR%2BhpQbyzhHBCjp%2FEUkCUB2CB%2FPTGiiNwoPWcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPUbJgNXIJcvb7cBSrcAy%2BbV9w4%2FjyTR%2F0Za5y8iEVNkP03AZicSGhac14xV9ZEYrv2F2q0Y58hFBz8GTdJCz%2FQlgLOI%2FgwbI5IPTp5z%2Bhd0jIwJHdfGV2nwOPib%2BgC3KKRYjDw7oMKg8ORyCHHaVc4HgMhYFMiR7DqhaU1TLb4QuRIbrTlU9shRDGHNAkrW0aZQznlIzIplHM0R8irsgk0TKF9Bz7r1UKYBrCxY%2FI3Bw7nm2OOfd19hnwe2%2By3KrK6wL9Zom%2FHKLWrbSWPgrevJaBuidguyxfhEGmxd%2FGKI8aGGO5nSdh%2FrV4fsVpRp0iAhrxWAWk1%2BEZ3%2BXNEOJP2m1mLLBXvletqfmhtIy2J%2Flqz2LY%2BV2cxv1G1z0mCHMZD4XLkbCgFrrE%2B3Iss60Cwlwn8QcPNDcoHaWhmNP1Fxc3gMIXp2WvrFGs9PfJQvpABO4Qu0Z3qu0WZr8DKiXeCwzzifNCvFbO9sJNhaPuk9%2BwdrwTw5PzoZjL3aqs%2BVVoKbCjKzGJAaq91soMYhKe5HgiaRWKCEngvJS5wI9PnNGHxb%2BAVomxSAPqoDHCxX79YVGAT14V40V1NHCfXoedA4XNRrq4eMjuIBZX7miKmC1Tz%2F8zva%2B2n36HrgeLSt3SKiNelzdpcw%2B81MPL90skGOqUBgUSHVoZcszir3PONKYOf6IyvOF%2FwcM65rIx65COMLgFNStChUOwcPLAyrdshs5i%2B85F5PF8sDPh4v6bruK17vVa0bmTR7zDqBRwfqrt0qkPcSK4hD34qyM1Mk7o8llCRdmERU0jNhbfWQT%2B3uUWdhA%2FX7h8tIJcb8u4EpbDKlzJGVLb9GiLgF50RvzEgUT0Dw3kAKmpmQ0eF9s36ji50tNt6lOSV&X-Amz-Signature=a38a5dfd7e20808f014269c2e46f487d8ba861e96bc424157245135dbec3d9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

