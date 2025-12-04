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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGVZYME%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICExrnGLPWTyde5SAR2fZ2PXEagmuUlv9vZAGbnP23e9AiEA6slQZL1TZCidGQUABooVyVApgffyQokgSNSS4T%2BCRiUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEAzsJsYBO9HZuhvNCrcA%2FeKb1VxZYJHT9o9lVQLFd5wLeN4zi31CDQp3uMX2leUgUBdAXI6qNF30ebOEapUGJpYD5f9XZwWJz1VovbDan23vRQiMPsMwlGbLcAEQPmWJcUEXON%2FBy%2FNGd63VMWK1kzkjoLDZMNgOgIeTi9gp6jSl7NbEe2KY8XzPBws66iqEn2mnqVY6cCnPKs11%2Bwz9J2SHgKef1W0FWuNJ7tedgWyU0grNKY5gXaUzEJkFQQusK1BJaRVsAeNe0Jdpk5gTDFKsM%2FddwZiisXavIUeLfm5Qzvc%2Bpk%2FeR1aLNvINRPuU%2FsrQHqKDiOMJzkpkX5zv4eXeQa0iVXzreD3GjqJOmnGINxubTs95HpAlLkpwU2g9P80nvTssBn1wTsDsFE9o1CDeDY3PL76lx31%2B%2BusucWH9IrRy%2FmTl5UkcWja%2BWFszMnrHRIsrqOiJTwP1ch%2Bi3fMbTONQ6W15KvGDJcSLs85VT8gMPHj%2FTtXdEBCwk%2BGbBOdH2O1FEUSCQl5hEZ4UJwjm3iLoZemPV7glys1zvyrKn9NTE1RSGLYXbWI5qf6Zhfiv5Vnme4iqaeQ6qRbcyUq6b0K0YiscfSGyCSDtDhIc15E0EHi5TcdR3XW5QIPKKXibr8UHSsAG5i3MJGixskGOqUBP0rEGlpj6CwBJrl6ci4CFq9SwSBeIcP0IWjeGrC%2FGghgoYS1nwh2%2B7Glr9xi01MhhTqGGDKPH35R632ZXuTfvqAFLz%2Fm0vv40tSYoh9DlrnGA%2BQzqypDqpRmLOLKv5h4jq5n8N2lkoBl6yISlSMnJLmfjBzTOtHsPjb4NgQAijOw8YgsqOoGWgKHTh9Sv917HOKQz6YGuGo2Q1bSmtEMpgCyo8U8&X-Amz-Signature=3b60789c10f5c91f9108301664b87b181fb25fff25c588c0d236c743c3b2ab64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PZVT6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQClhQbmDXBZIoXKjRE3XhtwFZUUvd3GoW4iKR3blUaZRgIhAMSgML9DKifMyx0voXkoc%2B1d%2BYCvg1nx%2FR9eot7oxKzxKv8DCEcQABoMNjM3NDIzMTgzODA1IgwWgoR7bwIDIpdIADMq3APHM0jsL45cOSSO1Qr73KWRt2zj%2FR3wQfk%2FfTJcw8CFCxcuKTiz1s3hLsOKWyHJWSGAvgUyWy9gWagg3uenAmF8FLlEXiABr2okxp1zCkPZS2a%2B3LnxWykP%2FSMomCSrVo4CZvNZJv0PKrXR%2BBCPnMXUw75xxxkgDpdDyhxTQJLWPDQDXE58qVm5l4Wk8PIxToWgZ52lEGWxZ1uE4%2FlAEWr3obAu1wfD5s1WfwstxPdevhZBnWdAZxKrdeokKlKtMWnAMM5f39RzqeM28wWelUsqH2hzgFKW%2FUvchz78EDcYt9zrGywX6r1k%2BSuTC5b6f46m7oiLfrw2j4pT3ISlBfXBjhFB03ovUHSYtGbo5x6hbjw6I3vRsPjuBPOzlsalNRxZKbY76dFKlzDsG6HVujIuFCa8Cu1d6P62nTZifn6%2Bu9vj1ShLiIVlNcINOEbvCQo3s04%2BjWbCCSa0bIKSEaSLbj84AtA98BhGSYGh4P5B%2BmCDE5gLy7qNgS%2FDWoOlPOZMF%2Fs%2BaRWxboHAtF60ua%2BMlu0CaPpF8RspCCyftFM7ukdnL80vsXTzsbAavsaunbSwXv8AJLq0LcnfDifXibxyuv1pPh%2BAjSwBX6yozzuGX%2FLwQlSib%2FyGuGxrxzDOocbJBjqkAe0KSV%2BeS8HCnViz5xl6DVyHGfz%2BVwnwt%2FzT6idwnLZ0o0cYNqI9vrbx%2F4%2B2UOfuCGaiaNPu90uvyZZp7GmmgWqkj%2Ba2EvtVTceAZVNUV52ftOTaj53QxqVGyj8a1h%2FgeM3FWP6wZz0MEclooukjhrZaU4kiiSm94b35lnXR%2B0akiS83P%2Bxm%2FUA6n%2BEOO6c%2Fjcf9WIqMs5SAtFW7h%2F0M7RTGdHZt&X-Amz-Signature=9e3abcce678bbf0490753b512910b79df489df86ff6263d55e982d98562abaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

