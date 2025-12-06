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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2G6RTW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcMwfMqKkouR5hIW6tIEO1a4m2cgcWekAPdx%2FJV9P1nAiEA3O6Jps3sMkgqZ4mrYbrhIFlPeBKNJ9RJvIBSP1ZIKToq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKe3lmunP8gmyT3C5ircAx1pbqK9mCVdGC7ZPfkx7Rd6sE5wpDjUeyZhJ0ewvCRrYhNanAdIDnnySwtlqw4cnBhgXe1WD6eYP82eE86Eiz9UFtgi8oouF%2BsxStDYi4pyPkByq1fW6EjIUr9J%2BuMPBD4cwNrJD3tMgog9NbhyB0UHTY9GJkFuQppkVFkV5UqbPcakyyVqVTOQWE7owH%2BR%2FPkg2SV1NzEjoqse%2FdEci53MAfv85mu%2FKp6NsiYLRPxMIBolzRKCeCde8FnE9K7kYzQHelPPhl4x9Ht9s7GpLQPvGYJJz0qB3uwvymJHJQ%2FLtdOlqbFMxG7Z%2F%2BVHuvd8vAdnlE7V8s0Ap%2B%2FDwcFJArQw5tXYVyn9EU8%2F53EZE26OdPMa54CJ3vhHTIzdhDZ%2BvNh031T8T09FJG%2FHUca984XdwAlIVrkZkHG8kkgC6tGNT0dYfQcB00hzQRL25Krw1%2BqIX3BDTZKdQhpslWvgUXy7hToVmQAJqKjEXa8iseKcbNrv5uPTQLPBQskE2uzL7zZ1Lo%2Fgwo4IhwKG0yDTPKlr41eurLfgN92GlOn9PccRnnzHYkkJFIHMq9O1eGgfeX46iyVCOLlxf79BQqU2C1k2AXk8C2Mz8%2B3IGgIaVEzOZXYDxQ8ju%2FUrBo5qMPSJ0MkGOqUBeCiCFmobL4rH8dWcLxsxz6Fo5KZRxNWSyGExd5cllb6I2Hs6aHs1yxI1Zlnl%2FTKIAnk%2FfU7VO9RpOck9EgeRwael%2FhAJhKjXHkdGZqRevYB3mNr9IFQAjRCQJX9UgUnCrt2GN8EqDtNY7kiCtOBa9TZhUwYkKLBq41ZnScpehmzPDWvIU4%2BAT9fYjUErIRPKt75jd14z7e2EicfDzRzb9eNLCHFY&X-Amz-Signature=54d839258835f9165f546032358e8e464743cc0250ef5074a6919d89ffab66a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AX2EWVT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FrmOrkFzpotQ0FHahsiaNlGeNtaS%2F7wDki0UibBFQYQIge3ZyyeqOkoCAeFjyjb4ypWQfCOsyICt0ovuzkVMfWEMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEDUlJnbYb6Wx2vCaCrcA%2FxGnGLCewJHSyIZ9k40WJ9IX05obZ7eKlwA%2Fns%2BCYr0%2BGs9yPZKfcFjzQM%2F%2BhbmBYOMm5ZTplCcqJlS3hzwwwTCt9nPYvZcTihW6WCyDZzSQ8D7JUGq5yqJ1LWAC%2B%2FI4JA64QFOKhKnpaWuV3CH%2BVcTOJa76kJH01CdqESKeBV41fyRRo0K9AP3YinwaCPiSPcd%2B%2F6n1PyIMMs29Kdf3P38e9HOnBHTXobm9otjImIuaL2rQm2U1tdf2ROjFD0IamoTtYCQc9Q55erX6wmDPQOBALn0U9EwqBBCGI4GZOIrcPyXa18bfmyCjwg%2Fd123Z2zvc3z0cMt1tqHVxWIjtj7lKDfVzY2RT%2FQsgf%2B8u9%2FbjoCGrsSbjqnPKeCUG%2BiSbDfY2pvqOIqI35ewrVlDAT1OKu58343fIT2qUtyuI4drdfk84XX6SPFeHAmoS75h6DMDp2AKFmXEysnFe%2FYeD7dQx%2BQbjosWlEyPmkzpOMYx4ks9Ei8%2F6iOfCoa%2BPcWCnM49kcIks2DA6owYQI66LARG%2FJ6nAapCfM08YRIkS8ceCAauHCLPfgq5DYTArbIeKY%2FFQ18x1ynOTEU%2Bo24cobie8DU8P0pIZuNgLOI1KxCBGXEu81lrAsquP7fQMNOJ0MkGOqUBUbYpx%2BYoBYwuSMv%2FTL3ea%2BiAIWBEELL6brc3wWtN5YNLS8aTYMGDxjB1b5AJeqTCFS019BXL1Y2qMqisyNwABp1scXJN7Sfcw817Zhn7KMwITtxZnEnaR4GQ6ILmbb85LlokaDoFTd3TjdO0UTB%2FHOep8iDWDhe4PTnhdig5oSXJNgnYlg176YmYI8d7LnoxqvmtYr2GW%2B07ZGBUOOdJt1HqHlQl&X-Amz-Signature=f6f64ff013abb6a741713cac98c524b56c6f11541e6fa2bce9f2b2cb42454eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

