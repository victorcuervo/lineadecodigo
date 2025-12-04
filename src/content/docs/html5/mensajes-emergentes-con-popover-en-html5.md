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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7Y4H6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICfiZd%2FvWeqQTElZQytzuUi32ejfzzOl452gYlpqwc2EAiEAxkiMfOTdCsiXNIkB2dfHCEUKcbsq9CfDmxLwVzBpE3kq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFNZKh%2B7y0lx72aKfCrcA4U4OAcF%2BKoT1zbD0iP2RzBCyBSZMILRLkUAWzzcwtKGXtmcWdDugOk1B7CDsHraq3nHn9U2GhdLovEw3hk11D3uwmlJ8a7dtCWZRMDLX1rOJ%2BHblujspyuOr6MNmRsKPjthhR1uYCtzeocXf3bMzWLtmwN8YQya0pCpPbSXuuxBzJGsAjdMlzPZQZnDfAQe2bhUSd5GX8sRHS3PIVrl%2BzVJUjFyk9iHn185CHyD6uzDIy5Bx6nQAdox0oGx6jEWImG8PwA2iRUPMtIpYd28amFsvZgoN61OiU91otnTmv3OirZhWQf6GVbH1gOryJocuGmRtd0tYSiD7Cg7SXWiGFmIhFIOd03Lz5qyXjF3Pmogy0mKvGQddEjeleS7ydgLrtGYB%2B9hwf1Tde8TAZgyBGpwoMp2OzsFUhE0eNmIZEZVtbVqe2LOvXHwXiU4gRwM9E7mxvTrgR3A%2Begmw%2B%2FnPr%2FQ1IKcjNuml3ZKbAcuCYDwMxdoLd4Rwk8Be5jxmSS%2BApYlVWxVO7gWJdgoF4L1aKBFLtXh4KDiWFxrcwx2OoxLXrt4RDJClaf%2BVEmy6Or8q2wpuZP130bS0TcbJWUqqqi5JEHLbb1sGTxIcCn78w1KHo8bT0ju9s5GheNtMImixskGOqUBQ%2BlH%2FmtI71Jdn2ooq7aGvDPEfLxYrwYKJEJJ%2FrNgEWQEDfQcyze%2BqFcW9flzMMfRejjjCqh4ZcMl25%2B1mzLmeYdppu04Z6PocO157taR7fVXoTPBWea0v%2BeOAJ08jGJuz5EWATRamDzQctXVSZnfaTBrGC5rE5f5Bi9pK0QAyqUOEtIsOkjXM%2F4jnd5XbJX6PcQunrs5cQ0OCsESJlc8SO2CpM9c&X-Amz-Signature=84843270a4b8397d9e5242aa29634cd0b0a5df26ff41bce06cece08a6c98d8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5F67GS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDcXgK%2B4KU%2BjedHZmvcvdMG5oWk44NPb7yT4%2BbuddgwKQIhAN1QruNx0uwx%2Faf16OY6zmN%2B%2Bl1qspisgZN5sx7SvdkwKv8DCEcQABoMNjM3NDIzMTgzODA1IgyBakwks%2BGVzRaq%2B6gq3APjBJo%2F677SiKNNb4tYq2l1UUT7%2B7MzhF5PDlMbmPjapintZPYCiSq9YxD8lmCP9se5wxQyjn0StOZvrtBsajqR%2FtE43qwcWF86R0nhMZXqg%2BRT0UsdCljWk6htfU%2FLPKLKRdQ9ku4%2BKz3vZfn9iZE2zYorn5%2FmFztee1%2BDH37JB80Gry4694Vlq8hk3poIIcPpCXB78e00Sahdim4woSi3wFoLkXhRBPY5luVjwd%2B4lOu95UzfOLXRKnEHm2H%2BZnbP1XJAK7aAMw7gC6EL2XekehDSoR7C4irphVrXZYlImossvHzO%2BBoFF0nARGInjVnPLdDcaLvRiv3To30mCtKehwnmVG1%2FTq5fbJ0Wq77%2BgCD%2BKsWScWO5FsjCFmQ78vQ8wSVAvo4xGFWR12R6p6Hz4WsQhsvZ8HpTuvyoXAiK4Ghm4vNwEUYYX%2BIGXsJNUFrvqYK8r0odQPcZVjn5RXRpQd5Mll%2B08l3Nqgl5THMSWxpfbzscaJSvO27FfNherSpgeHq2x%2FoK1pTHBSqFfuKAWhBAPqVxBFm7Wqeinn2010AQOMb40Nsb7xknbqGZ6NpPI65t4oBXKdtFuvj%2F7yNi5MIGCxundK6S9BNPKDCleK384gezH4J9XuiMFDDEocbJBjqkAUSmvxEjaA5ae1sKm6V2aHYOCqDoi6Fr3UnOlH0uBPiphpEXkec70mKAEuvc8Whzf7S5e%2FuVeY8RLKoFjoJB2OX1iM3CsOBQoJyqpYYKtenRgm0xQbaK0QbbIgWLNjTJ68GX%2F9PKZQa8o9RTJBUAPBHyQTmxIahV6sOgPauoaX4oejGGsR979WuK7KhKZsZ4rNgNio1O3F%2FIEI%2Ft8uNIJ6L6zBb%2F&X-Amz-Signature=dd79f6d3ce9f575a8558c7a3accf203aabd47947e21f3ec3b4a77d093f6c661b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

