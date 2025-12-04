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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVUZP5Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDDygI0L7Q1WDjPU5c%2FtWT67cMI4BnVjTFtY72axtin2AiBVOkn8mkvRg%2Bqx6uRICmbrcTX9LnfWnsY1FVAtSAsseCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BO%2FPAjI5sbWV%2FgLAKtwDDcIUVzG3UiUChoV9jgY3k2yX45Vn6n21j9rA5POIs7APNZ7nSInDYmxJ6%2FT8AHbrw%2BLHMrAYT90Jw9Tj31oE%2Bffxirq1QS82p1DjIhE9lCsdHgoTZKpfE%2BwLjdhPyxSWDbkRod%2Fmelj%2FIh3Z%2BRhnphBshLEh5nxI%2BD38skSsA%2Fs0VFc3DnJaNuQ3FD%2BdfblzddD0FDyK%2FFlXl4Edt%2FOSElH2QYW%2F1gx3aQAuEtowxdn8EW9erxQTkVJND1%2FH8Q8ifasDt%2FJ35lH%2FbhnOK3m%2F8k48JLWVCtsgmHzzLeS7P4r5gbzgI6%2FKuEN36i1tFa9IdiF99r1K8yoY5bQYlcQOxp2jSH1mpLDPdgiAZ0N8PUoUSx0xB5kpAbAe7lkn0f0ZPDZA9%2Fn1Rkdg0cQC6IiQdUJarypj5W2gK%2FwX4ahacS%2BaUHP35m8q9e2d2wyjHEfOaNheoWvZvrdwitcqOpsHOc0qJk3x8CjhV7L68aeOhfGoaXw9u85RcDJH2f1OrCID67vJCF9hEkW1cKuKNvJxJx6iPpkMFp5PCgq4LlH0P%2FjAE5Va0CSGokhO1bHTObM5G%2BEqLhBuZf8I49EXfPTlPGRO%2BidppHKP%2Fnuf9stJL0krqHahauI9A9OzggYw1OfEyQY6pgGCaKTi00ZVi2rgFQfCiVCWZI8PCROy1vP0KP1OQUUV%2BUJhIS6mtC11uKsvDrLId4DedU1igsERgRy15p2AjywjaGLpCak6LWcC5ybxzuTsJ1tdFLEPVONAkW6pjC3hCMXQL7qOfMGQGrE69hD3h5ZIdkm3qlPLb4R6dBTOjmxqA3IwNDg1RtqOgnZuhGAM%2FRPmiqJzeKFDE1VB0A7R%2BNaiQrjGlT71&X-Amz-Signature=a0d0f180378b2f7299f5847c30e31df553f164937c9e4ace467db7f6a8669715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WS3WIUR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBXD%2BwpphFZrVqLxrHUv%2BK3BqtkcfaNP8tjyAD8Y7tFEAiEA3sJu%2FBMRFWSSHO8R0al5GxYf4DIcYl%2BikXtuEJeeH2gq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEbyNSiG3UpeWjwveyrcA4q3QLrMh7Am3mqTTHfp6Ug3Fu%2BFhjGusIdmNzOM0HZMuCRcQN4fP6qU0dQtDzlivNX4BZuKpNm4li2ZspjVOsq1hIj%2BhYzJyvS3Pz%2F2navAtUsgwPK8neACCnCoeL9ab8fF5b%2Ff%2Bc%2FVxKccqkyZt2BGkXIE1kX%2B7flpV1IAGTncgH1rAE8cDBiq67FVqB2YTi5bQmznWTalWU9Lj8%2FU1ohM6RCi9S7%2Fh9yN%2BYJpmL%2B%2FK0YbNyUQpqcsX4RF2QryIhOxgQ5Zdqjjc5qwuG0iMjUZhdso4Mt1dCwSGFKfVU75sQ7wtfCys2rB5DxJ%2BMeBgNuw41dKqdeG21dTTWo%2BAmX%2FgEQ2izsR0HnW7YOBARvYcboCQ%2B7tRIA8bHHqvBGGkW8qQTIx80FSkpew2ZDw9%2F7gmgQioMStqCpXzVCARkkZT0sGOt9Fo0NjSX11%2FVnK%2BkroqJt8RVSTgDA%2BsyaDkixG32qf7Xqu%2FZ9hzDF%2BRn6n3PeF4%2FIfkH42lar6JFqyO2bBgrn71VDW9E8fmVCtdZ9OfPSfE2gZAO%2FM8ljLtIIGOxY49Umt4OGcGJaRP4gCvWxVHGB6y4aJnkMYLzH0GkQNdUx9lpvvlg0zeSICISd72WlDESEGMA87EiSxMM6FxckGOqUB3W69yWGB%2FQzwNpcOPR0bDoG9iiUa0wu4wUK7Q%2Fhr%2Bq6AN878XE5Y%2BVg5ymChKx0Du02qstBwy4EJRBYsJQ8IwMIyhrGF5CsYHNhT5VQt754pBkhPZRon98UkB1KIzRcOxa88UwBlNGXVaIClP8Hkd9Ua5wWG663Ipr0JcdNgSJ5ajvqDKSYVRIDu8WTctIqq6OvCHztI%2FbvZzq2hKInFQrj%2FtYJi&X-Amz-Signature=62563e2e22d35e23f8c8726d36ed5c74fc94741a853187a841552a84d12d4ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

