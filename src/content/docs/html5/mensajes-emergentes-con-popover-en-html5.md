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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWRWIQ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVFE8uCiUWzHbWM1AuXspkW5hH8mtQpsfEz1JAqzJcSAiAtQsL6nJQz9wRrceBAg2ZvPZ0FL0HnwmB6Fw3iUl77gCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUO3OBsIUWlzi1e8PKtwDr8zpeP7UT6YO31ql3qXokR1Tz3CiQe69UbTOVSltTMXpGHIixnqZsv%2F01Jhf6aCHi6Rwjf%2FMlotQ0Gxshq7ctaCglOp%2FDHWu%2BZarGE%2BNQD0lOUjorpHy9nrkAQ9xrxTwsv5bqAhf44RnFYDUhCxugvT%2FZQQolDnHUBG4j8edu6FwDasOD0Iwdvq%2BsNRDEwSFgthSTSj01og90OB4wPFnpr2gZPtxZIKzGpas4JOniaE2Ay4yUpwd%2FV1LCTHUjGiC3v831sRXv4d%2BoTYRynmebceRerXKGtjf3%2BtKRcLkwGRffq6ahBP1CIY76R%2BbiRLZPykkHMrNClL7l7PETdDzdnmZ9a2sLtBTkw%2BlHxSyPG8w1UorKauiGKSysZ9BeI3iBZEvuHdgewSZ76U9EPpmPFAr4tZJ60gPn3Cc0ygA4em6Os%2FX2l1yP0F5FrtWPquV%2BBszM9Z%2FKEGxwMH387mkmAOfvFsSXVAUziXYNfkEQBPb%2Fiui7GjVSyoSjTTuZ5b0cIYOUr9Yfda0%2Bzq1oaSl8WG6t%2BG1mav7clVvkj%2FUKPveBrQ%2Bir6yazv%2BvhDTbLTqLYTmHW4grN5422HAqYXxYv%2BZtkW%2BEjFnHlLQuw0A64pJf1HO0%2BT99DEM2%2Fsw3%2BzLyQY6pgEyNI0%2BVfcLTMpUv%2BA2szVFekrilj5i0OGtQcILQhAneHEF4pxDoYijXO5WkPo3nKDj8M7UPYIXsSeznIvSo183eA1las4M0Paxqgk2Brc3JkaP5yJfqMZqrKip13qHtTWdSh11YkYr6o8kzuME2rUoAPq2muec0d4ZGLRMc260D88yynYz%2FknEes%2Bfs600eeM5KYSlbUT7WxI2sJL%2FJ%2BGIBfi2aok3&X-Amz-Signature=8106476a2ecea9c9a25a65b5e1c1029a61dcb4638dcee66ed1f05a052b7c3134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZD7KNK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsn60PBj4bgeZOjsjJLY9qhd%2FsNlR7M9v1YTINemL5pAiEAk9DNZol1ie%2FFGDpfjPxe7AsZt5jRNmsYAf3jcADfvr0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCR1nYb3sJoSp1UB%2BircAyma9GeDBh0qsUI7ZRNhLcij6IpWenEE6V5tMQx4rdjtqN7hKftzxpCJw1%2BsMSHXqM%2FdISqgW5K2f4u%2BpNQ36EZ9VfPrpZPHaiIhG0Er4HpRy4Fwza8%2FhM7Fif4k0dtU4ioK%2Fni8tHUgt2CAQ4b1aeM5TgfqiBwdDMSMHv7EuP%2Fd4cZYFm3R5vxH7U134BqH0SzVrfzITSKORnWPADBznGS%2BziKfi9kRb1GjH3TkMOKjB78vuSBcFKHJAmHdFEIEJDerNKzwpnpNz%2Be1MGTHW6I48pqms0uQc%2BQD6hZ44dUD%2BKsloyEo51rLJ3Z0QqacTLmcQGIb4c0x3D5KcqsQ0OiUUmh0ffQm6EBHitEuILl5ZO%2FfeFAcZ7zkp2YChrAAKFeH9zQsH1lYf3w81hLzyInhhK8rJP%2BKHfUyFPvw5n5OM3JH1qAw3WU102YEWfS64Gkcnelacng64vWM7gK%2Fy%2BXRKqiW%2FTI6%2F%2BupldrGICOXB43Sq3X2TtMhKd0F9F1hdBDM1ERYngAS77jqhOM1GstFaNcTH%2BUsM572kYkIL2kKGPyt%2FhwI9UTH%2BSTrizb4dezp%2FmQKk9vscoDpBbzpM82elLbdkK0NRBIhzRS9jO%2F7DJpLPoNO20KlHTcPMPH8y8kGOqUBtFk0p4Yj0Ic8QEQ0mZkyFH1Mh7R30yNf89fXx71DwqVKXVG7tYGGNo8frnJpfo1u6U%2Bvb8%2FiRjT9BiiKH7zMmG7Y%2FBODa3lG%2Fnwn2FMxTO46pgAczpfeOWRIvLp1DBx4iVlnu1KpBiQe5TuLwidhaKFFNi0Nc9JdGuPuXN1xJWvlewec1HphyIy7UeH9n2pZG0zZileDuH9oEoz%2Fy%2FF%2Fd4FZhWGa&X-Amz-Signature=baa602c336fbe2f4f52791faa3919a170b116dc398970e1a99a4e1c9e3f8cf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

