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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYTGHYT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEP6YF8VEYm2xhxJtnHYDGcg%2BcwFBBo82NP8mB%2FSI0DQIgHN0ZaBcaYT1HoGWLUCFKGtD6HmJOR06ZJ%2BUlDyrIW28q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI0efJUYlonKS0rH3SrcA86gj2BSVbFESyOLD9o6tbslFkrdhK7t0OFVtBjQNl09Ms%2FKZ2ESvyxdDZAvx3fxg82wAbla7a4BGtHfm62UeYmZP%2FqfbR%2Bfh3Jfg51Ml%2FDLN32ZPQk%2BLf%2BBPGcoLGXvNd3ZFVDQWhUq%2BvH5ZOqsczu5e%2BDEw34PTUH6ejngff5tahmW63s4x5Xgz2Y5UjdnerPLwVwd2%2FiglTs14b%2FFTwEA91KmXwDml%2BbgfnnKF4DrCfQc9y48h5Bn%2Bnr8ppmzaZ0%2FwaGLMmiOBV32hLv5wwqA3riXjUSVePhS1X%2BUS%2BCGu1otzxpgT9RRdDk%2B81SfhFFjBATVObrTp62ry8SIMyvSvCn0SCUx%2FeGhZM0sh5x7WkNd%2B9tnyaJvgTaJ4x02XGFSilN4yqzZyi3rmOSynHLfdU4cp3R3WPfUwRBHZF5IbY6QeO6dX59T7NBtAStFeOXqFS2hZuu8BdzEVe%2BPVfk6MbyO1c5hKPBCFI5VK24E8kPbIJprUIR%2FyLXZrsbXAEGUekFSvuZuSDi1BYJ6MaY9q0Wj7nUvRjbzFRYUBmbenYkXNfobmALBLh8E%2FeUpgGcmjZ42GZwRz5kNvxrjWSXU9jLW9iidc0iPPidmI52S6KG2fR06SJffyVtLMLGm0MkGOqUBWNs3fR5xSb9MRdmaqJTt4vLcH99sKvuLcXCgWZ5QxPuYD2lU1t7gs6eLj%2FtQVNroR3MQBi1OmChOA0zM%2Bu1sUnju49YT8zOP1rfo6faoxWQCZJ1MPp%2Fn3tF2BSj4JjJI3TaP%2FrZrIgb0B0pkVKDXQ0Yzr38AytE%2FuAi7wD2LOsqka1HnGAEMPZts6J%2BKSOfccI9ToMD%2F0LLkXKj%2BPVaGDdr5wvlO&X-Amz-Signature=35b6080b9952f126d55653c88fc4fe56620e7c8f74a6dbd84a1144d56e659a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJV4RBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bvggl5RxqWDSQQsKGAztrMXGxEHHM%2FoN9UijVVnmamQIhALr%2FXAfLaepHR%2BLcKZuZNJlu2Otuuq3GMbAILITlmx9IKv8DCHUQABoMNjM3NDIzMTgzODA1Igz5B28uyw6My9Cf4z4q3AMdCsHFwgyXGueJGTax4cBLlLboH%2BJXTAeDRRlLV5sRwW7Xy5Lmk7XDnZ2juyBLDwgE5wgidcHbrcvbOt1ycH3dUvNr8yi3%2BlJj7289heAb5HNd4q8IMofH9QRGmgWssk0hWfe2WmCb69vu8YDfi81IUvXFWNsGXSvfOC4JdBxkyLmvt96nbhlL6gyg%2FYei9IrQnZUY2L3n%2BzguTli%2FqVVjTLayNoHuMeTo4wPBrLxoHYJD10fQf%2BjoZhiNQvACV6iQd7ST5W4KDsns6UJjzVPXXxj2T5L7u0Xybe9TEO3P5ehtoydIl3IvfqejrLHfbnNmY1pxVjGLD%2F4sYD5kvbS7mceQfYSvoY1yfK5Nh%2FaxOUz3IKfal3Mmkmsq0Q3%2BnqH4%2BCAxq2n9HknE5UTULsWW%2BkxuaP1EYvzhDnmhdHnpJLE8m%2FwwKS29zuXBLexL%2Bt%2BBgwd5Www%2BswZT8NYJmYrfx643VpG59slGIojsw4hLtYNbI%2FwzGLRIu%2BjwkFp%2FB5CXLxZJYcs3%2FsMH8Roe87MS9gD1gCSCmImaLk%2FG%2B%2BZvPymQ2CExg254JE14f4VhWF5dbtvk5IdQJp5RQR8cnIuXmCo7pLO45s7a%2BzHGnS6do6dYIfvTiZCUMw3tmDDPptDJBjqkAUURoqNrX%2B2axu035iG3VONp5WwqR2PgtWCEsAVM0qZcdXJYo8VEvbvjWh1PievbHg0WlqPWHOtzdN%2FrSq2WtTApFwlpkQ2jDJ9zbxJZcOxopyyBYb0BgQjjsqGzgMAF0Nq8GrUh2asZVX0n53NH0gY0Xtp4s4w4WF9mGuzU1pLOSoQbZPdTQXsi2cpIAYDPttJDUfrXz%2Btkxcb1BpfGsmewoWJ3&X-Amz-Signature=2694032cd99016cb566648475857a017d860650d8fa1c7c28a9c61cca42f58a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

