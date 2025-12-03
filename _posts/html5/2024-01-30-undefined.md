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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2YI37C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDQ2t1V2QOCNaAe%2FCFtpJ6amjQMwzb4GOvX%2FAZyKbSO5AiEAmhh5YPKEO6lgmqoT6jU1Qdonhsh%2FDoKAKZf7Ra5O4ugq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIvLCZr3v7WY1D145yrcAz0nG%2FlxS6ytFEN6vcf0RvgFCZS%2Fku%2BGC3t%2F4AA9JixlpOU1eVjbOfmtVrqvp%2F0guCVc%2FJBCZZJUI5GQnMHA8Kp4%2F1m6SQO2xfebNvGpyESV49HiwZlsSnTzr4hVyFqFLDkmr77LY3t3q89zygM%2Fshzc%2FNkp4GAhIexwl48WnMW%2Bb31czGk284qn%2FDT0sqnrGT%2Fyai0yQCU4M9TqqeUddwcoT3u5P3SmSZ9kF7tAC%2BR%2BBMv6xCSAH8wEcwlLmiAHOOabcW4QNNGSjy%2BBMh8PHKee4UMxwVb6cxcyGllMLUZXytHpQ5dCPdSM9XGQALNSSzEKQftyQm3ahoDDdx%2FPLvf5AoVVH7%2FaHV6EZwvX574Pnktrgq1eBnBthN7%2BsX25Fj09GzWI0peRmNIKRYGJEk8IEC%2BLQIvvCquag3WcUIdc6eii0ZjQacswsGPu7mX3DVbTn7whUWsXvuMRI2DrwcS%2FIAPDEXNZzqLABy55HGz4%2FSysDoCmfYUrWWZqR3vWJ%2BBqSM6opWoXzopzf6VPL7n6wbcGyoBT4EePyp8Rtprnnr1hQu7Iqv5OzCbTrxw%2Fkd3ZGnOD%2B6i%2BQYgohjdrl0HeKK1JDiRRSmLspF42xxhJYezI4ye5raY4e0QOMOvVv8kGOqUB1o4fktT4pk3nqLVA4n7SC67m3yB6YzriUPBgG8leayY9q4srd9PCxZ0UdPS7VNw13w2sJLuCv2BmNLum86u7UYSrTSkaPqviDxVwq5uTyvvt305pCSbWfk%2FYrdyLaNtHa%2FUJNGaFf44OljCJSKw0pma5erXrW9zKjhdMblTwHxpvh3X5Alnn5nePRzs0NZtxuZI0jyBTOa0Q9jnozU57bOAIRYTY&X-Amz-Signature=d31978a574755a064855bc1748082393c485abce74b94a5caffcfa4d3158baad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVQEJW2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC0DVKjuUHfaG1QbrW2gO0PSTpyLMbKeyo%2BaQLoP8vqSgIgV4lYYy294YP4jJlzSmubE0GO%2FTUkTdNgdlPeiCDJcNEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLSvJ7JUX%2BP7tOYf3CrcA6i%2BX2mj2CuB%2FCK11v3TppkqSOgg4MAh07QdgTkchI6GjrQLKNMcj3FzCvo9O%2Bq%2BOx8AjfytVbpzJFFmG8rDV3vq2pebrvNbIx%2FqOAi0sQudyhc1ijGEXu14LBtc8X5uqE7q4wpn7sf1a%2BoTWYQCqRkqtaoBa0AC2yuXgVzB3h3jWr%2FZUP1uhWPVodJurKpGzxryu1wySvLRTqdR6qcJaKawVUFzjzBjXIvXbibsriBxIMXaQRygLpBTZzSPE489iU8yRjeO6YfTSz2TBYvgjMfPDk0GPwb9TTFygv1Byqu2YypTHLi7E61UfPYJN%2B9zQS8ugWZRB3Kdgie0tp%2BRkRuHN8%2BQCAkmPsJLdweL5yQkAwmF2RSgomV%2BqRg87WeYsYgz67Pntx3NyQRotgswkTeKr0DVymVZGbKy%2BRZXBGhhNu%2BnY3WI5gMvH%2FipPPXGqdC1SD%2B8Ww6jgZrSdU3x2y%2FEf6XXlj8ybARYCl239gEXAM%2F5a5znwzxQzmBqlTuuyMTxUM%2FIFdkuf7wSeZFiCo8jS%2Ff5jLr702LMj9L71%2Brkopaat2b6nXBLmAqqYkmOZjUZezH9GhyggmBhS5tS%2BNhGOPNeCVtT3WlmN9FajtaOsOizI06rVkBkjnm1MN7Vv8kGOqUB%2FjwIST3RKaxrwm33POMVbCULgBjMWhntlSvj2kOBCON5d7tK9SxLhEvuUejZ6z1k9B3K2c1OWSw2UTM2vpUsx%2BhdBQdiSGzqpr8NRoXapTDxS%2FOsNHOxErlBruukGhmKG7mAW5fJOTzi0fpBAkNpa0A7suyf4FDwrRveMMJN3xU%2Ba%2BW%2F50l6gov1dnoqVjEpzyrLZdyYzsUCEd%2F1vcmC6QBcjioU&X-Amz-Signature=6543ab39eae68e61066c592ae24c32aa042df2f1911883fbadfeeb87da49ba0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

