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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z32VOXW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCBVibysvWhHCZ18e5Gc3AWd1VyJzDACuXUN7ON8%2FM%2F%2FAIhAKtLDo4lJRamdNKY35NEMcfVxn6l4dACmKgU6vEeR6EgKv8DCEgQABoMNjM3NDIzMTgzODA1IgwTb126XXpHGvPuPWEq3ANql7EPaIGUKIZqy3IskM97lCNmFsOnpZYrve0WLhNro8RoxGsyH154TwvPS7EdR81Bj%2F3yJMhePURaNfSFMWHydELTfIerJG5F%2FRLNBlp4RiP1zvatGUhw%2BgL%2BO4yK1M9ztyHqknmhy1dpjk8HImdGvOlLvUHoJ2UtboH4itZRZK6wUrgn7GQT%2B34WMnF8Uz%2FaKxollcDnm2jb7xF45EH3jNCd8iHvHvBBsxZUvx9ER0%2FYGFJKImMNOUu5lA4fzJGa9d9y%2B4fw87Y%2F6XmdxD1KDD94B58Jy7tjIVIGHsHNEoxMMjnsCqC3jR8iTF%2F%2BGCY97wqja67sf4TZZSlvDrujV3jYcM0lUt4d5aXZb280wanpuLwSTREDb0R7wRhvogI75iEaG4TQLQy3K%2FkvuYB2gJAjjJD8Qjl7%2B6PxtmOy0SL8WOuICXsl8XoPCYnrlQ7HKZPEaQV%2B1YUcpev%2B7ySZME2liem5JTg4qu0Ut4nB6gL57F0VO3z%2BgyO7J3xr90vM00fqPs4cK4n1Lgq9G3oVmNlPGlVMLmyYunrTTk6U3X5wOU3uXFb2jArAT7RVJbVlxv1aXENLEa5TUbY4aG06cAwScDKvqgDCIf4YdDaLswRLviLOIffQb2Yy1TDbvsbJBjqkAXpk0dE3lkHbzfiRe5IY7YZELcAP7uGKFN5kpWsg9zgYq5VrnIMJ5qVtujR8766T0fcXtihXESzZxb0KdkAbIlURUKpYtd7wDWc7kY%2FFl0c%2F9YKusm6zezzAneeq0DPE9tQU%2FTq044omdB8f8a%2FTDPzPCG4XtYOwVHMD2KYobLFBq%2BM4QRCIlaROL4DRid4lwBm3cWZ0xxPSeJLUxWtKeY0hdIBC&X-Amz-Signature=acd572f36ad3cb2bc70947bc4356b85d1b700c3d3b41fc4752ba264ab3a43a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDZMWOW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC7nacvHLxlTymR5zVOrokf4%2BNjUrnGMvuXY5l2npbvcwIgPr4f82P52lTJgSbl8pxVZ0XBkP0e0TNn%2Fzizf8cf7Ggq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPVzhLtiqWZC3AA6ZSrcA6B2wAp%2F0vO1IC7yBBisx441mfLy6xg%2BQMWH5meozcc0JRucZ4qpdEcyi3qWwZol%2B81Rmps4kBCCJl4Apo%2BDZJ03pQ42gYbXSqJ4GaIdc9OOg7TYYGUluY04OEXcSKxiQhK4l9gilvp7UixtYDLEY%2BtRtA1uTw8X1XDat9n62Lb72dIq2hAcpq1%2FXowmufmqBnypVyUgDRJUIQlOXGex%2BUnS3rxNAggvAa8bnCGFeabld%2BdO06nJdnwTbihz0KWE6tI60SZ31bZob%2FqSJO1c09RI6dLvSPwypsPw%2Bh20m9s7VXFgS7sMo1PvNUX%2Fb7s8xD9d71oNCDVanoSmenVp%2B%2BTdjGOyt1v5826R6tHghK9PByL7ChfIobRHhZTfeBCPgkCp2bXZY2r5xrhS7ll07qfKujipWAD6s32uwqHt3i8JHp1w%2Fd0%2BUejJZlIsyGhTMRgRDGbTrUImuSwTBousgpav4yJzApXCtDjK4AL3LJA6QXNRIP3FqSJ0IWO%2FcYLm0athtpHA4xb3nQ7Ztw%2BMFhgZjbVIVQq00EIuFqCZch7%2FcGv2P94l3w3v7g%2FB3Qnx%2B%2Bl6UTW%2BOI8RT%2Fk35IH%2F1yvUxwqLs%2FndxwowIcQ3K1Rdz8i0KjfhAF8P%2Fb%2FWMJG%2FxskGOqUBowUvlk%2BJp8oAcYsa0DUHmE7OXjXmx9mW0lvAeLcMKnxTCAni3YjqNIuK7%2BtvRcWQp9NcC%2B7JGVK36s7dVuAPgq%2BfIrk2zvKgk8%2FUwhj5%2FRtb3vNSIzCmL4GRrQtfLMu2BWsawcyK8Um%2FKvMz2v5ukSpAzGN0eDk0utMfnWFoY1YVzG5v7LUP60s3ZjzFQ7QF8upH82RhskDUSNBlm5uKS8Q3pfIU&X-Amz-Signature=31c4bd0db97daeb8f9a6ca4e218a594e92f19b46a474c30c26ece4b407ac967f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

