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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25MNOZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG52usXihtUPCfoz8DX14YM4CgEuSQF7WUavr0oUlBHrAiEAzwfh5QJQzUNjTb7%2Bm%2FLKz8QjRH%2BZmUrjJJmmCkGTsAUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAqq0UHrOhxF%2F8vD5ircA7hiBedIJOvBqwd8Z9HqYM8gef7WfHHzw6%2Fw4L7x%2FUA49VE6LaRpFgEC%2BRLpPjYHkHlCKdtIYbU2%2B9wJiGLUbY2hO0A5ohcJgRl3lMBLPs4Njq%2FGzvSNqqkBMtvjjpvKUTS69PLQeY%2BUgTIQET7i%2BaVtL2j5xqM%2B5X8AAftr%2FVvS5irR00zfVyQgyPHrZeDn7QT%2Fyu%2BMm4yz%2FeYgAvNsCz0sC%2B52id92UnzovtGwImro6vLwoozh7g3138iDET3Pf%2B5flI7GK4R5LddbVOAQlOD%2BaILmyad7odjeg9nYcJoL6S6VsAQe6fAu9UlUv1X%2BwXlqcRwukU73xZrNIr4kjQHi%2BlYq8A%2Fgfn0VIItXQkl5nZIYPkGrNg1mBaf%2BkQIWRHT7JwmlGg38DA5j%2FlU%2B4S9MoHfkpcxxcPHmk95dZU70qwgzpah9G0kgojPFcLbp91TP%2F%2BG5Cp8IYRqb2Td%2BAuWlrfP3xWWJmRUDo78IQUX7fTE8gAXhMJdxuLxPCAgaL7vf2Pc3Q3nVX%2FLUHTwacxOnN%2FvbLFcVlv9k7ABJ12l45clwLMsnM7Kz%2B5c7kWc%2BgtW3ix4rFHsF9DHWeQYYdwP%2BFzzWOxpjXrpbp6SMIe4PqcXniFYchG6QBdLpMICez8kGOqUBYksCrNCbCczrhFmuAC09x6xPsIC6XqBPG%2BuVkkbGGYQClVbrCIxMwf22SmNsFG2OylJN3ENybUaqeFZTXycH0SjMtIwa7gUVnINY0iWLO0udAaxlcMdQi9JQcpI1YgCRUHrISgfs0KuhjR9q45EJii6DRJFD7gCsGhAVMB04U3tOsRbk4Sjkd4RN52bkk7hTEvceOrTFkCc45SwlvPh3jXusEIW4&X-Amz-Signature=d2fb01afd7f09ce6799c37e6a3436dd72606430d1e0f4bc735a40278e5b50ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN5V3N4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL8ophIZYg8zDUp9%2FDWgDMlPb6aN8t0%2BSGS1ZxHXvl2AIhAKj1Hg5v%2FO0%2FA1d1FISX%2FcZs%2FOFJ2WnXH5K0wJEXFVBMKv8DCHAQABoMNjM3NDIzMTgzODA1Igzk4tcxm2HG0aIeX3Qq3AMwTEGqY5yR8vU%2FEb71NjlXaOWhuM2TKb4q%2FYnxiyQ0uDwgmt1Y4z%2BuOJ9dZHouS0Of5lctlEdcMA5IWikbyQrBjQC3kTWYu1HF%2FrLxzlnLbVU3REjB%2FktheO%2BU4cL2SkGt9jEA%2Be%2BnBr5vdf0rG83aSeH3FngjsdshacZbJU22KKs6qlk7s5ATCv%2BL9EYdt7KDh%2FS6rZMd98mnxi8qHeGO3awO9qbC00rDXXp6wm44dmzS%2BDKy2XNu0VqGpwuekhTWlu81QZ9DgMtpYO%2FYdR1ltmO%2FRdQuPEGJMh4mwpEF3cbFl3H2i84x4H%2Fq%2FcmZklj8Ymdk5CT809CHOiL8G4aE7cUpDPhCf3ZNbglykgbr661bcYFHQQ%2Ffpjk9touYarS75phFzXi56WWGylIPogg%2FEVpGrRoG%2FlFRkhOE7JzhvpkEcVsBJZo01bBmOk1Osw7PHtTXTX60kpVhUzuMCEE3By6q61Q2zClWeMg%2F9tvWMda48tSf1WaP0JYC7%2FtYiQUhmqZk3sckXdhNbQX0N6oG%2Bg%2BrL%2B0GVAICVPYWMaMrBXFca1639Cfz3bFG6BhlHAYIE2eMlHDksHzkj%2BN7LD0qXSho2%2BdNJQf%2BB%2FBg%2BVQ%2FYuxSQAzIBIX71fpRrjD6ns%2FJBjqkAUvw6CWqPYgePZv1lzMnBjhodhnjyTVnoQB6b98DOu18A7V4HaGmzG9nXuwq4C2lsmwFF5IKMGyDvS5kLNKNgrbQS%2BnR3v7uQVKx4DZDrm1mih5FIVpZusc0dadIeWLr510bilHYoJOhvqu1qY7b66Jy66Cpbut82SxLchAxt4iUUElJMu55pjg95HAtelMjVHFxML96GgYsTnKlabVVsoubXR88&X-Amz-Signature=87203496a88a82fcd684f44aa9268f5618515a24343a0e4705f2fee27cde1039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

