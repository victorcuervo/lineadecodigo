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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPEX4IQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkZ2PeICwFsHD8kmUoVlJutDQ5yG31gGvW7XSGtRdKXgIgSCxS2a%2BG3QYZeYKrdS%2FBUcF9vKibFD0j%2B4XV2MgIHqwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOWvAWw34aa6CAeRIircA6kDAUP0r8ySKLaic5hZB1%2FSNZXwLFu9CMbkRkqRvoMRzcl6nJsTz4Fow8O0vRJaopWhN7qYHTYnJB6k8bGjAzlmtOK9kjdrU8QUNW9%2FLLYFQxXWjzdJrmOeVNCrPmmPdToYl%2BHhnTwa8Pg3mc7N9JEB4tJ1cXt7YbwgDMToHOTfY17Ng36jEeAlAjE0pmy8Xld6461jp6P%2BMAh%2FxneFQCpMa6b5PEu%2FXwrI6qUs1dYB6WCYqEaI1AtEOTUwu061YrgwnFhtyLFADz1OfU%2F2HIkdVw7u%2FBORTTMIcJ2FKcziQHssEfdhfChHkiSH3crZ6rmrOLlxzcDTtfyCyCmUPe5gN1FFQbaMWPftoz2MptF8MbgLio0irmTRGcs6ITk9K1hN9UZoXOah%2B24xxt%2FfDpbpuSYGH%2B2iko4XtOW4OurjQi5YgcwuTxxT5COAYsea8NSvJ0ZGMy8C1W83OaFc0tuCz7liM6ITj4%2FLuVmx8yLT0iCwLiQXn8YE4cIOPk0N6KL47GW9vYyQlz2aTzRP%2FC6AXsddKLzl0wY%2BcH5SoQP2gL7UbmoET3EeKg%2Bz%2FcKgqOKOjgYdxAmsNSEN9uTfKRccOK5%2F0Zr54Aj5VOsEa5CBk212JsyU3m0UgZjNMNGyy8kGOqUBmzZADGKWGYzagCNtWHgsH%2FYq38MQM9w8vo4m13zGfRQ0MpQERBs1AxTbiEz5qMaGi9l9G%2F%2Fkkm2LzNNqFlAim8EvIsWhH%2FYZP5nupA1PQCzgEe6GL%2FwaizRNqcEJKf8yvNMEyIGyzVFm4yqSTHsOOGUUeY9v70XlZLNvDa5Ay7RfQAFqts57jy1NPLoRILsVV8jXvSnHDl79OzbKKjdukSG0XLuw&X-Amz-Signature=e27e874d7393dc90d0f18d8d6b7154e02e7d43c01b74b1e03ae84b90c062a69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662OSZZ6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJTuf10kW5b3PLSzQY6zv9ZOKH0kcGs3gR%2Fg7hrC0hoAiAgGl4ftpVZmFlWj3r8scWYOv%2BdkgKr9erXh1EVoX%2BFMCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM38eAbLggDONfF3OKKtwDH1K7rWrZgcfTg75%2BMqwNMj%2BCP1v5YzrChmK3vHDoh3iAnLySWOht%2FfEXNNRIi4BrwrAPAPcK%2B%2BeASo2AQK0LxVNBlxEvVmTKneodStS5d1au86BXmYMYuI5osScuxAvwOvDK78FNTJ0nPndm6OFkTlapbij9uQPPOD1NnOVs%2FqyQdwr9jlXvbiNcGS%2B8efHjpt942f04vf7uUfRWFV3fpZMzXXC0aQyRX8pSHfTgvQAlmR%2FcsF%2BIWfNC7Kh73lmgvjsnICaJKPG%2B%2Bbz1NmwDJh3UdqUUg7Ic0%2BZI7nt7X%2FVPwzez36HtuvcOU1rsrOQqOT%2Fmcvf6V5qDqByM1q6DVCDVFvQOSGtGIma1%2BOMLZsPx4b%2FG0dD%2FTvlu0Ltr5zQycNYLJYtcE8a%2ByxnpwY8NAHGYQx6CjpuAR54boaCnna5nqnFRl9%2BVcP25H9qxUPrIVS3KVQjp%2FC3xbSMAAzlt2Q7TblT96%2B2D2OFDhdJyO9otfN4Kl7R6wLeGdjF%2FxwHczTUWB4n0GKDq3lsT025zhkc%2F2aVK4qauDtMBlkumlyiyHNMjqOh%2BzrtHVDfZwdLLA8VDzhJqRSrZYz4O21tHtj%2Bs3%2BhqT4eV6R8mYlOz6B%2F7HpVDqXHTz7OHj7kwi9TKyQY6pgFpsM3aQw%2Bj3ikjuY6mzfIMsyk56xZbzEzlY1ziW6iODEg%2F1FXd1dgM1tc3Ac63z1ehSoSozLWYno50wDHfcrYnhA%2F9YM3Sp6TR44bKc7%2FSBuo19w0E2DcJ8Vf8loeYbphmxOg6R0T7SMkRRFAEF8o13OYo9w%2FJKrIfNqbjdk4zMoh0A64Q64WH8UcdRjORWjKgs6IDffJzveKUOdD2HVXwMt%2FGFBLU&X-Amz-Signature=6d3d34750c3d8343a53a76bcfd5df190f6bf199d9fe647bd2af492445d9e5803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

