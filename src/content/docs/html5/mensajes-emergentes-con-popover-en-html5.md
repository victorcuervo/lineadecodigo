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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWNMYKZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsV%2Fhege2v98t1rfTdIA0YrUTNw9%2F7Tv6I42dDpzV0KAiBVABzZx3ch5q1lvnS5S9dNZwpfoxZGrIoG%2FjPBUXinKCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMY7Hfudghe4%2Fmj1JIKtwDRauVo0QELQMFiVEq1sF7bboRdOfx3w2cqKygxE2rYewu7o%2B0fqNn740Hv37Svpe3xUw903P%2FZ59sM6099%2BkALRlaP%2B4xjZinH%2BGdZSTupbKweGcYZS1n9pM5MtwtyESGUtc80IXBHWRZeTEK3FmOneDDZ8IRRx3Dqa3uWULSQM0ApzyKDlzpPaSgjbRA2GC1aDYOEQMolegFtpTtO3ibYpPr8Gfvd74gNMTY86tSUKmcNfLZysD8re7ObuIEVH%2FUox5SZ6aib9M2Qw0nC2sYfSvnCJBexlQPyNtsMKqXUWfy8Zt%2BuKIVN2Hy9l%2BpmmZfuyRkXk9mDIRbCSNqGtP56%2BUloqN8rNLRANhAhF%2FgFOQzkebTKdHHBg5mzfM9OQJKJr3ouENHB1YlM%2BEIH8OuJVqVGgBgTD0GPHXNeIGlQBhkFW9OyOM8Rh1KuKD8kzt9sM0T9LqWGoPdO3k7h6wvfM7xAIfnQV%2FV3GswE1mu0bqODnTJ7XtskpG8mplEOsDqVoHEzbQorVLjQgs%2Ft9AFiWZfO16TYu5ZSgCbBGlcEl5Ia3dHFATRlhgI18zQinfzFMCR1PY6UbLQ6zeW8RYiBLnA94rArZoeZz6sdq%2BXHXPpuHxVZhmR8t8WK%2BowsN7OyQY6pgFDpftUfkw3k61clKpQ%2BYzVTfr9zCbuRf06QVAzISPyeLa7%2BofmwPIO1d9SgAr5uJXg7N7m2733y2T3TzJIebwAoIT%2BuwC2%2BNgTldTDGfeM7wELwMaYQA1mS5%2FLuXf%2B07u3GCO7mh0cm0o9mQQ0ObQwxLEr8SavAbo%2FbJJFFY4IE%2BVyReskmvbhTQcetuCj23SpJ5DbpVvbJrKwCkD33%2FSIRvU9SqhW&X-Amz-Signature=edc656f309eb48ff324948b36eb80f0166cc691aa60992a931f1b30fe35e4f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YBMT247%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDekiVAbLMFgijpBQkXUGq%2FshjIsBWKm7vQ%2BRQKyzl8%2FwIgObAPrWrJdxOSRB2WhvSOQJCq4f6rpNzUFYpV%2FHr1d0Yq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIk6zZPlg2inIyyboircA%2BlhQILVfqk%2FC9bWDLHQZ0U5fTprrmza1daxEd3aB0VY8ejCvAF1ofLotZjbrj7lZ%2BV0BbTP3aq8HhVdjyiBOYjzDhBsax%2FqsS3VvWRuBLmewAnM4MM9MzN%2FPStvxnQuVft6sq2cxbFKfe8j9dF5%2FZ%2FuvuxGgsYx7CrMWtH%2BY%2FgI6R4WZ%2BjmNp8yCf7FJltZKcSK8ne9qfFRL3SS%2BbA8Arnu3%2F%2FGcLcLkPR8ixArjv9jCbfLrOdccO00GR9dUO%2F2WjjFkoBEsFydgJfzNK78vthEMFypGMpvxlSQ2Veyl7x7aUHjX8PDw1fnDPmUkaR%2Fr3UZyd0RWzsaUZhhMcn1oCgPSiKNjd8jEi0ytOa5%2FMJ44eUUuJ5g8PkbMkqrzk0Vpx9WtDpvj8%2FeV4meCujgO1Jzwx7t55W%2F9bexuSw3VDOTyZ0Jx6Th7xFKsxPMBOd0E3g0Q4sRgsL%2Fk%2BT2w7zLI6CrBd3j9S7PuYCCFPR64kOu3urIjQE9VGQOXGMpOdkQbyRHqgVzvTGDYdhG6ZoPxF9g1qQ68QnBHg%2FU7CIYvthR3QGdWRPPvkr063PTXCJWu36yq8c64XJkNDJByvAddNZPB8pfcUsuyDDqMtN5aX4xfOJbiS1BdQkANGEOMODdzskGOqUB6aj947p3ccjNgMVXz2ZiTY3bwAgG4I5geH%2FXUFznn%2FV36Pakf6LAh%2BE68gKa41319NuWHigPaq99jw%2BHqO1LvjxV9VWNay15xjp%2BN6eHpxbQHMBBS6jjcQCXBby4wlOTkjfOFLYt88cPvs9fii61vrD7TQ0NwwpIBneZHUcr2Sr%2Bjf0zZF6A1Z%2B83SVhhia8Fkkh%2FFdGAoc9rMVAyZhkXewcWsS9&X-Amz-Signature=f45c8e48042e4ab453033820b7b06a6f5bb5d09637d5539d16499ba49c0c7d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

