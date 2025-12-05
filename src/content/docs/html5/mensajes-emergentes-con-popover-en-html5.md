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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJ4PJRQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD183X52aTb8Y3lKs%2BTNw8c00k4M7VhbF427IMDCYVa3QIgAL4p%2BGR%2FQ6bb%2FOvW34GvZXoHHGogu7icmV24rUazrWgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBrQ3ceAv6Q%2BWv%2B4tyrcA3Xs%2BelCjtshTP94vLQEkHtMTZnjV9ZgOyy%2Fb06AowXsrNthnV56QrajSY8zU9tt80J5HZo4QvtAn%2BxKmtuCHLb3klOX5jB7%2FBP3IGoVWrxUDqoALPJTlJw1mOGMsN1get8JowQ8V097OQYIZP5dAta32R7RZB9bI57tLWC6XG3dlDVgydsqEel6RLU2Rk96vS%2FPPjXrXJ83Xb5MblrtvvYLpZXNJdykx6d2GsQQiWhryiJHFwiZ61%2F7iWOJqC53m3v3%2F%2FrlK4d%2FggPCFebJ6kCpDO6kvpMlqIjJoHDxBVhpPaJd3jPSZgda%2FmmapTKiXZhb4aDhy1gAbvUe%2Fa1NWn%2FdRrXmlijq4OqGs8tuZAD%2BMa0wLv3hVqcEclIcTyThzHBlcw%2B0nngl45ef%2FQ9nXtwQMJhd9%2FkxNC2qZYN6o6AjTgR90wF2U4SjXLzQnlI%2BFLx5CVhdM1zAKlaXcjsqhxIEKGtsTRyk35pxLrGtSE66%2BWOekR8t9ZW1RHaVmqLaXzcq%2Bs05%2Foa9Ji3WYSBaPA11HXjDw7HWCjgJZj3sattoAdH5ScoVVJ6OZZXriOLkN2%2BFULqTwH6LgIzfJxy5e5gyoFaqIfo%2FhFjgBOcjTRGCXE7JMiSIYtl8LN0EMLX3y8kGOqUBBwWeZPHlSP30dagu2S5YIVqUEDDSbDTCaXCHH%2F2qcQ5fmmetf5ZU61SjK%2BJNbwERt4Cy%2Fpwl%2Fepjhms6httC7GV6hs1wm7UVtPnEDsHtxyEun0iVpvWk3vtM8GYbyw7MXYnFo%2BUHOmFcsrGoWecdhqdlVmwFQlM%2F%2BPyz1baK1UZHX7NBSYJzDwG3R%2Fd%2FMeffsb%2BXGbhv9RAMeDLq7U1gT2DWxAcc&X-Amz-Signature=3cf8206c5570ce00c103b7d92eb87668fef5ed2f1acd5562a1d114d7ca3a48f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIFS2XDZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGxf8kYzjhhrNr9P8Jld8cO%2BsEGGNPNoIM3F%2Be8dycWgIgGabXpUeQPq8OLm3kwsvkWbqcTJR0ZWSUU%2FJRPat1Iegq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLtWL16mjD2W68Q10SrcA%2BVn2AtxLYPLRWyLA4jUE1sIMpqKEehi%2BZiVlEpwsQijo3IzHKa8eej91hOLFbPuhKb7oXMB81aj%2FyCFaA44UbUkfBs8eanqk5eAd8pUn0mGXszpbnx5OANS4EkmTUlInK%2F61e2QNONiy%2B%2BsRoX2c3aUvc3gBcGTTPbPB8mBsHI4p6eQBLOhGZzLEBiwhtrbu76GQpxUXOqhV2QAhsHHz6DhWI94R%2BEkoNkQnpf1jw6TwkmMGlbmlPaKRS9rLzIAwwCbSiFS9H1iEfms5NOiZlrygFiSbXXI7Rcxuc9cxriVsBqBqcaqqAdmrZERVeQlhYIFgGfrYSmRvi576gGhJff%2BldDz6AMnO7QHB31fTuiL%2Bl0C4CQvY%2F2P5j6yyYb3mhE6%2B1buWn%2FoVfyM3U5NdtNRkuhcrluki9Hp3Sk1i0GStB98y9XpRc18GhUhFr8rr0HPVVOjK6%2Bv6yEDLUvliEWoVWm27z8kSkTlLfpx9eOWF0G%2FyJTY0SWs9mpDFj0zmB%2B0U%2Fs12L6yaYRdumR%2Fdd0dRfNyCvZYXkgUEXhLLwNGfUIaFbVP7ZF3I9JZAxoXQgkztZ6fDjipgAzYe0oqz1X6nksywcb7DEHD%2ByI3%2FX%2BtfN0QsW0Ens%2BjHmBUMP3oy8kGOqUBacoj7BfNx8OVB6wsC%2FPQx4saFdUKVwNMQKmyWEuiyzqCufkSVFeSiMtPgNo0H1db7of8una%2FFnXEJE7VdogMRyw6lBLOiAUTPvCYpLItwCuApGuuqh6HJNuDM%2B%2BNwiTyGd%2BCeLyxw2IHT1AeGabQlrNIDCdPR%2FuQG2JnllFUXqrGs3d010aenp7yWZW0JweaTRBPwRUOiADSCC7iV3Ps%2BEbpxg8u&X-Amz-Signature=0face9d15ebded734a8967b300b975f9560741ba3604cb2931b1cd18d9098937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

