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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4IKBCO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDT1YESlJmTy7OvINNJgqO0T%2BJe5dLJdygGs2GI%2BOk64AiEAqq11J7f0Hql3%2FohHKcVkuMG6aJ7A5wW6QIV5FixijSAq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKWl43f92qVbpnkxKircA68R6muKRoJY%2BMIr9GY0jcFENTA3Cv06q40EVrW8fIYa0mXQ9HJIlCN2gIC86gGNElV2edm60ViBoO2wu%2Fgn299dzD7mzZ3j8Dwh6Y5w%2Bdl4U3jzMxlXbQQpNPcDp14QwXcoS1XXMMG5BmZfeHGlEQ97ygQujHkw5BdhyIOkH3Wh1Vfg9s4c4OvXXo0wR2I6pBE5E1IzhVcPRoiIcYhnVeODype6MMQljGqN7bEBeQxPNToyZjbLw6An4kUHncnARnGIp3ntkQAMUQ%2FMWUsFYz2gGRzhTpc7ML%2BTi5MGQeZujXBS4F0gagFyPOPmFu1FPRIgrsU%2FmaJX3m0mIkIk1tus%2BWWa1kfJVwiON2ZztFEVTI7bKdf80EPMPe4nor9lYbCIRMufRNd%2FZLNLfRLM4pmATtYqkcWqOPHqlsvZSMALkV4Q9yYabvoGk7o840leIURrGzUlWKZlSG9cGlbTH8WVSZFJGdmFSGaOV7GHdrBdRR0bxuOTNn%2B%2Bni0PaYZT9hm7TdlcWRVVESDPaRfqUQOE240suoDdQ82nCCVdRx%2B7EQcyLb9UTLRd31xeDB%2FLzCYUnmQhF5xILQm7riOUZDCuCsCpritvcpLzLlxHsjIShNUvM%2BEgB3190K%2FCMIarxckGOqUBQZNHZu7P97Br0c%2BRMCFfDbL%2FEPUm9hZkNW%2BiYXdoVE2lZq9Fcgfb7E6EmjmLR1Jgm3Ty96WHU4QLFsKlhtRXAGYR%2FNtrZJxjxLcN6Yxg44IoiFvMHyLpY9Hx5L7rgucoe%2B1KnjjW6RCAVb3984nlVUhPUZN0xr8TP2XQeHKjMy0zEks34ieEu4IY6g8G2q1Jd2bECRtrpCkeV8EsAS9hYM4C47Qu&X-Amz-Signature=ad68b89a82863da99b53e342fc717365d72cef147d446d4b23a4260850fd5ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ICWVN6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICe6uouTXN8vEqdYkICYu46zWY5i%2B6Zw6oKmjrll72UgAiBvg3uaQVJxjSRFytl6EQXEf4ssL%2FvizHIt7bhXV7o2Uir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMUJP0yBcZ3VIUafi9KtwDXLEOn8%2BJJ%2Frtv1i1nB0zN%2FKGXxDUPmUUnYxZ6zLcVx%2BSiesR8X5p5eUF21ZyyQ2a0uACFbxORqV3mX5qZ7obdNcK%2F6SzHv%2B81mQIEnqS2n1NEoEsYQTC%2B5sgC%2F5vqBiMzMJj7xQucCxdtVkRwe9ZM570VLYNVY%2FAZk%2FeV3ID4JS83vof8Unuk6LO10W31FAsI0HEr4i3Dqhhc6RHABIDBewMIfHiFh8L499DRwlX8vj3fka8qpkQFb4VOl5WqYdSopicwEQmYS%2FVIZrdAISxQfSC1UXOi%2FuDeVE7r25fLVvvIJbDUz8%2BtGr6Grn7Z8iHtu4eQFAIGShk%2FJfwQv7egtDVM3UR66U%2BA1cdF7jcfK6p8eGk1ilQNSM09rf738FgoDPdrH55wvXIb6T%2B24PuglW0yC%2BNUFh1grZtHyqdyW1E0i5IFyL9XmmzpVVGLZ1moHmoBLvlxv7XMO4V52lwc45g71KSw7EIljWkVgEHBZRItpC3%2FAkLKhy%2B5Xtk%2FEsIwI%2FPNUjDz2TGHHcVdR55WorCdXTwvgei6vGRSDcU%2FeMFQQCInkpa%2FS5V3mrJiUZo%2BsxJnp1sFKcSet8GTcRPeKgGHzjduI19YM1RfzCiMZpXyOlf0SsmXlTCtfUwoqrFyQY6pgHH87ft%2FEXf9pUWJxAApt9ax3dg2rUkIp0CYl0R6WOoiHLaDWmdX40YC4CpwQzc2eD1pXi5At3%2B%2FC2geyU7BBvemeTzw4%2Fi%2BITgeMxgsBtTIfWHfVmnG%2BORCJpAVyyzDfEJwyh4LSsj3gQpxRlpUPg3uMrQCciI8fHIOIdF%2BvH42zVvedlCRuF21eCxC6XuHZsOpIbejjU6vDX6FkDMMlggxLqAd4dY&X-Amz-Signature=5eb8d3f2d07a284278accf953c767da38547e9106a4c6f7a58e032c6eba4219a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

