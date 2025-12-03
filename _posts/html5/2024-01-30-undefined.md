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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLIZANT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHdHeZO9POqljZZ2emQFAo1qFLGKFFuE6Qd9m7wv20qWAiEAm63Ua83I9h9tMk8dfgP%2FWCLbmFcRjc3KZfwoXpNZLkMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO2%2F0JlT6mcs0WEDEircA2cQaqCjN3AR8ojE1ZAFONoo4sWgDHq2nbPM9Mv%2B47y96NQvcGsUogIYn1KmSwrhfdTXOThPon0HOGkJAZh9xd3Nc9MZuceyRCIS8Utry1zRjqjHvb0dbjOeP%2FaFQrJlvJ1rqcFJpLG34oHQePig49Jdxpb1F19LSBPNkL0QJoq3iJXP%2FBkrI1HuqyESbYhJjw1VYKdo%2Bh0DAFz8pD%2Ft6yDhWdS1iit5tKduyVyFfcC3YgwnEX%2FTNDjCU5cCcTToL%2B4Eeg0twseXlyxV%2Bs1p1GX1lR0cLAYPpMMaVzM4EmYUTCJQAoyZDE1%2FK7dZ4rtoCJoVL7EGXQ68uSSxxikJuSuTAbPWm8i1M2jLVsbJhglmnPeswezQk%2BvzWAtjmgggt7%2FsQGhWizztpc8iHbnwd3Xlt8rgSTLS2DiYbVBsf0SecGW0jRJNGaDjIpdPn33PVnR5FgjdBUWG%2B7N9zd3oOz3l3W1iMxoliDFxPsjamFm%2BEapyEo3YoNzoMKQHnB9OMzb8ff8aD7PczViTPxbjRKAleBvSAVNebiJdYV5l7gz1JYShMjr%2FG8PBy3wISYw809SHZiw2sCo61zqD3cfV6vhT5LahRkV38709mglTYOGFgt4oCD4umQY%2Bl%2FrsMJGcvskGOqUBldgjzXLQqp4Suw3h0UDxU%2FwaTOBdPq%2BMF2iTbWPs1yJ%2Bofe6c%2BoyW8%2FRS7pI0nIIx1kihscf8clDJdb7E4kK6Vh2d2AwGhCPa%2BcEFEJV%2FGYFFUrHtGBEHs%2BVhmPHRj5NC49DoHJGhoPIn%2FFYXyqpNnIDyvVWWaWdpGlnJZfniC%2Bd8x18TD%2FCcGcu9iQU2Y6qk5ZwmcA5JuA6h0h0leV0K1N847Pp&X-Amz-Signature=5ddcb9c2515a15fd1d05031377f3c59c8671a7d427d28b77577931fd47bf7485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCA4X3YD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBTBPH8TYLQrJqjrM7oeoB2H%2FSo7WsOW1bdRBQSUsxeYAiEAvx4MourRCWFC8IrxZeN996G7w%2B5TKgfeeoPYLDMm6hQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAGqJHjvuCIrTJ7BQCrcAxd6yTpfTdo0%2Bhc5j1IRee%2BScT0dRVtCyk54frghVFfen%2B9%2BDS31m1sOxyZrTNtLLNDDIPUp9yc9uq8J46Zcv1o8fekRFZBegg5hz2aUyxPnCG00cy9WHyBu79qhTklWCYLB58pvu4%2B3k%2B3Dt%2BrxZJkkdYKu3qss4O9aJH3wwuzjVydf4yqMc1j4R2CchzaWAWpyCSjzJs%2Fh9lMfrYwramsd0mSu0QmpC93C0sEK6woJRWaFVCBWWciMU0%2FTX3nNoCXOtnzmOvNw0hZTWBupKMwJhu6luJlR4G%2BqAP0FHj%2FV%2FQNQEzBp47BWSR0ue5znkY6kX5SuozjbV3%2Bz%2BigtoQX5bx7nq6eaxPRHpoC2HmUIgSPf7O4r%2BYLButLXcTOlkdstMvcLgR2N5YPRtBAaenB3mg95rPauHFlIEoC0TXazCdnUBidYZ5Whg3p%2FGxWCjc%2BUGjSyBMAkUhT3PKEvCNREpyq356B%2FcFlzet2qK8fGdYfLoAD7G15ySbHmuBvoSqkUEQJiHE8inwwIUuHg4chIJuJTQJJDJbZQW1WrdVSGxEd8dMZroGriS48xpgrPDbfi9yKCG1hw9HlKVOIEAZUXVNGU3AoHdKT9A875tPxgH17zzC8BnNzyv2izMPWWvskGOqUBm4jALc5QTzF20UlCE2HYemqUbB4ru3iriGp1HkOd9D9Mjo0xegrLN7KieW8s9htZDWdi%2FnrwX5zxLyXE%2B2jasTbz42T4NLYiEF1v3WTptwDrRmTexsxg3UdSp%2FrYDxGtLzZOShg8%2BPVSzCMpEMR%2FzVzMEa7cQIJtnaDb6mTNh0fHczMfNuV2tW77yMVo5KDLAtnNwy6oZN6KIkC4I0mShPKl2tyw&X-Amz-Signature=8265c8baf56114f29c777593c12f9cb71bccd076feab1f3f086a326d060b4c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

