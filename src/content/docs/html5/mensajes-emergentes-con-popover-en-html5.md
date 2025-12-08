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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KTEG65%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMbT6OU2s9iCEk%2FOqdpkKE0Uing6qdkrD0367AepuOQIgAhTvScEWsQuBhaoL%2BEXgeodKxQNUiXhlaCqYnMj8w%2BMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kMxOODQvgwOc4oyrcAyx3QwUH6QfdZFcmxDT2ogH%2FIFg18TbA8YR1sEYh9uTWriMOHAkMLq%2F9381TFtfaEOEQdusF5UBI2y7ooZNzFRkwVICGZzKX38DNGwf7YrhozXDk7HBMe8Zc1d5FN1f%2BvwbisQG%2FGikEuYtiFRcX%2B%2Fu7TdWypkYBrjW%2F1HqUdE6nBaJCFIGOa6P18NpxtukGuJMCRfHapSv3tmQYmzb1MJm9Txmbtf4e8OQ05A7aBaNoD2PARV%2F%2Bh3wdXRuPCQEGYNL81eN4n319bIiV3acOmUxN%2FtK%2B3BCrpm10Guq9BSifOg1G%2Fgee799myF5XAHiwytJqWeeiQwoIAJ%2B%2BXiDPYbQyJYHaogYXS2XC8HOHoRJBds31sba2cuOxIyeXtmhMmOg3aOrK1OLhSVw2Qe5TVkvqnMM1AkL9ooK3ZdkU%2FU32Le2rQQoNMAgdH%2BENSgHHynUhfvr%2Fuk%2FO%2FhARDnR6Kt4KVN0qvdjneyyd5xoK%2FVtFvdVS0Q9HlG45o5a1Cir0P5dyYB%2FBJb2zu4a45xJJGH%2BaNXqlKzM%2FVHO9EmEdWzqKXPcPWh4AMADG1uxwsUU%2FF07DNirL62%2BhvMTNHYLo%2Bi%2Bse9s8uw18Y4A71R%2FdvT2nQ4ywKyjPOw5ML6kiMMaU2ckGOqUB47Ka2DZiz1B4AFByV%2Bpv%2BXcGEGyEm4S9ZLUUFDDMtzqs8r9avOUV0KlOS%2B4ZqhsVgtWcuwxR7v7bmHwaZuZITSFu3LBFbY4WbNW4JkrsvW%2BEZ8WNUz5csBpyrZmmguXkAruLeSG%2Fjj08Xo0O8MmB8OnZ8lxa9o%2B9k3iZXntrF52jAdJhkUUP6lFGLbLs3Ji8QpHWU6lcW9PpC1jl48GJ0D8Za0Xo&X-Amz-Signature=aaee42f4197f2e08b86267638b0bd3d5c5a11aae20e12d1181630851ddc582a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6TUK7P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyi10oureua1Z%2FIQY%2F75410%2Fc8mU%2Bbj7%2FltUK8mhhTbAiBowIHCPzNTet6%2F9rVdaLjeuV%2B8vBUPEbhR30p97R5kyiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSeY4e3IQEf8fpBYKtwDIomhmEoMFUwKHXQNJJXtkgTB7eikLOtb%2BiqowDs9C3wD5oT1PyYs%2Bh%2FusOV5hg2nU01yxaKGtm93SHOSnoyBxFoKirJD7l5jkXLhBhBQondkEkSTd%2FNgS7EadDQx7knTgTlF2K%2B4PolPsqNruZDC4H%2F195butdpVUaXw8%2F1Xos%2B%2FqfnsDs8a7Uw8GXwbtEhsIfEKwsyYRCxOaO9CP2oTZXC%2BiBewENvJBrO%2FH2DY2t3hwhfnMT4cQjeRZphks%2Fu5D7KTH%2F1yUHLEIrxQcxYwCvj%2FGr9K41ItN94fO6qaIc4eC3WAzXe7rtZxbDF067gIyN4QOBQj0QO7fc5%2BStnI8TSFTQQ51rMe3wCRYb4pZjEnyvLeUwkCdeughwTjvcCkCq0gemjI78n2%2BZNSHDPtXjaylpJwNzdhJ6Oin4F831avm5wFrcd5tM8W%2BhcfdtKAo56Xcn1Znnul8SaTCbnyBgUtXhn7MAb%2FHlPR7GdQ%2FdCnsWDdX50BywEObaTXsnVdhZZYdZuot%2BX0GUzPXblM5boBBVUdAGoKf9PYaVRR1bCbs4YUkrVizGKTvmnLbj3PVN%2FjNTnDNlSfMH61G2Y2fP5jZ0SrrjiwAwUcoN2vYfSUalyjP3hH%2BOC6P4Mw5pTZyQY6pgHPf1sgMZlOTOsuNqlicMImNeDHRA0M5GdiirIlQAVfELNcZwiE3XA%2F%2Bp%2Bexol%2FWamulU9xlcf%2BadzqkH2Y4WQo98RMpmalqxslnYXsP8VBzsFP2wlCUVmRnrO59QPkAzBjR7vzb2xCphzSr%2FGLfX%2BfQcO3QtsVN%2FX1ERfb4Ahg0E9IUXmubsVbSAGU21q0KkZPwW6RDLUC2CXRjum%2BYpKz213o8qVe&X-Amz-Signature=b95b424b071cfd34d818abd4cc1f614e780bebd2da3a20855933ec2c2991d477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

