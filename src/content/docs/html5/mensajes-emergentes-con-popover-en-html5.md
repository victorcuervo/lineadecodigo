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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACUYRT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAj5R6LT1jmoqeFXO8Sf2YvIh%2F0gc4UmOZYhid6q0QAUAiA5ZgBDV9%2B1a9oXPaeCO0TFy5%2BK93cSaO5rRcmgk%2FcCkSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMXaFaoLdS3G73aiijKtwD3hqA7vMDxyvag4zOotLcIFPGQefA6jia4acDqIwtJ%2BapqYv%2BbcChRQ%2FQpQ4RBwNVIhejtYy7eZTvZxr5T3634qdpRmdJ5VRb9KfP1Y8H6LEkAVmRMsYQztuYneEjHOdZ87qm7orSELQ749GpNfcvFRdCnBANUqxnLh5C3UJjkYb56lb46bnPmNNmyPu75vVzK1F%2Bse5%2FeI5eteWPkrvWMb%2Bt%2BPBFNOxmDWsx%2FVX7cN7wXA6aFkA5U6TCR8Fql0W9Th4z6SquFH5OqwtTttKgABOLSPO09Ih8ZdCk%2BClC7HUdZGu5uDLFhe6GmjsFQDpfy%2B332P2MmpFWVp2%2B3baWWZ8EzM73pAYLbjUq1e7LTpuuumFMGdy7shqPiumdkyQBsqHnFpJFQloShO8lKH%2BfuPD4XYTxi%2F8xPfYrYU3cojyfQnYMp6zgYHslQItG1nVqA%2FKObH2smEVcE7VfyMZR2I3PPdBrVNptji0cSYAaILSvRKiIeRj9n%2B1hyMSZpaiA%2FHOT02dL8KFwdj8c%2BUN2Tq9WEUcXjUvP21gSQGYYG6CjqWDpdJXu89IOfzVG1yjukixTyqdaaBY9%2Bchbt%2B4nyU9ViIYvUjuveA9rPHCu2fHI31dg9%2Bhkgzs4Aiow4YfFyQY6pgE6LeVJ9eFs%2BnFNxhxAhC%2F9fInxQUJDY59G17CRSueAzBQ%2FwMuZve2mG6wjk0OHNAcsbT0HeV39vAj%2FvaSauFJzWYU21yVTmoZysvfr6cf0iQfTp3zFuFyTNfKVJVRaXFf7YTj5iaDG%2FjQNBi3KNEm%2BBsBEW9b9aBMUQzZjrua7ecaa8C2mte2OcuOvOBaTZInFVOfr6%2Fpa3GKE2AUao5u685rAcLT0&X-Amz-Signature=20fe104689ff45b160d040bfdc033cd7d3e349db091e96957d7c01cb25c5fd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XXNRI6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFMTWUVU%2FEArdCmkqrRmzldizhmQXocyqe2G5373AO7qAiAKCxmSF1UfdXfRZ5HfMHWSCX9H%2Bso8h8ZwqdO74OasLyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpGWyDxN%2FSZV7HVWkKtwDYShMXo56l41gBk%2Bois9zK4zX7ZlcboN1WY22iVwgnFCg1imGCNpaOb%2F%2FPx4NhM3dbn2c0AtaJHqXh3WsKC2a%2Fq4d4AzjpdF%2F7EuZYFbZL8pfak6BkAl8TI6paL0IiAeZ5OotEoaKuHd6qs5CVEXKPNs3ToPoI1Iq145ttJQazLqi8Mu%2FnmKsL8IgmlikxDHeOkiiOGWZqjIHax409qOLsWmpiVELrWVT4KjNLXbC%2FBAZ9el2TR8zui0CnigkMFQueThAM8HZ1FEZBsB0ANNI0Ctfsx4g%2FJf74vKDuU%2BE72ZGlM0bex2ODFcmyiPAHBPMGPFpaRQWahDYp%2BquhccL7rHcpWxZiUAAmm1ozoLrENEdZWsc6IsWHOSDNaN3rPex5hIh5uWhFm7hs2BAAW%2BGppBEoLFSA%2FzrDFRGVadcK0sqzAC0aaLDmfOjBpFyvMPBmObeI1O3upjT%2Fp6vSFP6Oh8%2BwB1qR2j2IRp7vKytfhZvnOU9brpaqkwg7G2rurBo5LYtBQbeJR97JfQfsssmcqpYh2lGs2p5W3RQooDnCjQbkA8Q6sIhrLODrWh1ot9XjrJ%2BQwzrgG8y3EML1ZZScYbySgyhQpdbhbzLBZTP0rih3YlEGjwaju1nyJ4wiIfFyQY6pgGJM7mQaQ8eF7%2BwZjVMtrd3rJLXdT2UPgR%2BypvODKE9Lv2x7fRqQVtE1Ut7m7oJXEOtqYihPC8%2F9Nv3%2FfR58weokOk%2FJWNWF3LDFjuWRD1Aeye9oBL9CgjbcMze3l%2F1EXZsvgfKfl9%2BftYLzFtTvCGhjE9xRDvxgwnchrYZeRlw7k8PLvIXQ870jnJMXC84Q8hG5WTnP1EDXBhh1u%2Bh4gvHPouIg1GK&X-Amz-Signature=c216468fd82301d09554f726764ee65af5ce453046c3928d94dfa3272863d65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

