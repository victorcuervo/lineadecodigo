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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z257RSRN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP9PQxOo7yGbkrrHSF2eLmhCKTNPvgKI%2BVpPgOBZ1eMAiEAgfbj7YhxmYizPsH0VFfTwLasQPmZT43ghOuykF1VNJgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNUkW9ugUK1ae%2B3t7yrcA4jtFG6anNiaPY0lAiALzJpArY59ho54C1avxGgilZDDbi%2BFh%2BE4e%2FD2nBPqLGnywikzCrx60cFZ86%2BeIIvOzFtcusFLI%2BjEaXKxboyq6eB%2Ffbvin%2FryOf12r3tD8us0gXx58ZmA3IkDn30%2FRjUz8Y1ZZVXPSco4KMXScT4%2BpPQh8pfacofhoxDMt48qKnvSMKCKHvldBQLMLWa%2B5FX%2FLZ1ExGlilrRdmQJY1a8DB7sh1265jIwqRI8RuXtBFsj4utBiSdlhqkA1jgSkiRpLEmfaH3X1kBeLi%2BW4x5EWhKLquPwsoRLaK1XRgmUDM1P2hDKuJUhMjpQBfYV%2FjEdHYZr2OYNJ1PLDXMVnIxfgZB3yaC4r8z%2BF%2Bzoxgnl1WeH%2FNjEMBSUhgaQ5OKiM2q2s0cYkgoLp0D0vODkJqDPTvr30n1sPHkmGzg5X%2F09Iryxn%2FH4tGzQGpwxynZR0viFme2wewfcqfCPvNti0FscmoFKGerL9myi9ISqD4iNa0y2WMWtuv0GWsh5ty41AU0PFLLSuQiob2hI0m9tTHu2JEW9GaGRaMcusYlgJRycbFUDlbIOhAyAOfiwQuHpai%2Fbug4zlfiZLhXVEO7ZSpHn3F%2B0WLPvophWWXM4aJ%2BFeMLrcxskGOqUB220VzdnPmrXLtqoEehQYIUL2ex%2FSYMH5tPIk%2BQBXs%2F3zT2Lr%2F2QmNDWAdQEtGg6dPuVYkrRFBRcg3Xa%2Bey0iyRm3P0HKbX7yVrtvyprHlgocsOnmumIhGf1o1%2FjEfuB8tcBiRrg0Wld3aBoIEoElQ3GLUS1bh0q0a%2BcpUCN6x7WeMx2zWZt65tzJnFzkwZ8bbBROlbo8AUVncRb7cbC8us6Onogu&X-Amz-Signature=9407e0efde67807f9a1ebe35295b76654683013e9d982ee2d859726c6c4cfad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XXKTIA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRHo618jwDQ%2FKSswsZmk%2BMFMGzr8JL22O2ylmRq8MJJgIhAMy3dxvL%2B1MvtZgdy5xVFNcGriXUruFTS2mcw1kMTsxWKv8DCEkQABoMNjM3NDIzMTgzODA1IgzMfGxUao6XLMm4ZREq3APBA4kK7%2BPhX%2FhXIFVPdRbCuVTVC1%2BAoPVhxoU2fpykvcJPY4S9B9%2BsIt9Gd8jOZe5m36UsRPXsOLN4xUQ2KAs4XfpeFPV0yPlVZ8axVk82BBC%2BKny8j2W9n2GSu41w1BOBdneLFo6F4QF9Vg2A7Nczb9akuf04o0fH%2FnrN63%2Fs%2Faw0Yd8%2Fc9YvQYgcMHSJZ6cP88afqnchok%2Bn%2FdcVXYBJLUJUXDP25xQxgbh3XPbvbFLf1QjSyX8jIZvE10NTNyPj%2F%2F9QlIc7aAy7Trzoa6G0TEEjVSDSLswHrcjWHQOfrDS35xH8QkhedQ43t1mV89lN7%2BOb832OACrn9Ksaf0TDh9OFrGgFwmrRPni00%2F3WQ9DaButXXiBKOypkTVmReAqkzou7MSQolk%2FZ3Tkg%2Bs2uMQpCllIfp9n5lfxv9eG88LCw%2BlkJ9KDg6thDMl0KRy%2Bjzw6T%2BTEmFSFk%2B5CyC%2Fok7KWdwFuFC%2BBNS41MDqVvAfjI8iFdpbzivYFiDuWvA1xNlPPZ6WifRxMfZW3RRBKBXdHnTxc88c3OpFK59I4dseQgqo0ACWcEUNWpg2Ki4cTU7vDDjsQp6ZL2MAS17gqYvJBTHqCE%2FO0H8mZNuohQWBD6S7GqLuM11%2FKFOjCR3MbJBjqkAWlRL0SMyW8R7HEz3ueisgpfuq2fqL9Z9A0TDvtlTinIxatr%2BwPRNAc2Y%2BGRA2eRHwtCzAi5%2BNDOnxYupBkn4ynnh0Ua9P%2FqTsMd%2FG8u03ZTzoJrlb5DZlRhWRLM%2B9dQTsQZ8XKZfhlTQJfyCjgM%2BWkeqdlHM7IW8WkRDWLMnH0gOyp3vZlbyJrjzzIj%2Br%2BWR07N0t%2FlxGhsGNCGuz7ED%2BQmMxwm&X-Amz-Signature=49fa3ae1e3842281acb3e5124f5e6ba6c5c376d87926f1d3b7508803e2ef7dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

