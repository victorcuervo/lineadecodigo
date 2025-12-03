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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBX5BUTT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD0yrwVuUOTIT45tmcdS8atkgGO0%2FvPBEVnTAHZ3S7qJQIgNx%2FCLquG9CRe7af10vYzfb3u%2BOKC%2Fptgx1LMjZ2Khpkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFaS6vnx5kiIfA222SrcA%2B6YM1waJjEWdCkIKBr5IgjoyZDMwr0XNWrKjdYgsTgR%2BUyemtmAQYe3hCrzS89MArZirXXSFhVXKsoaNxQMuX%2BaH7M%2BQARuNoXXAmLtm0fyX88rUVr03VagDbwxdokT9sTMjzCoFE9KAQf%2FBr4ICVWFtgrhv5Er4p%2FBFHbKL17ABClVhj2rYXe%2BVlqarj16iORBhw9E7xM6PpVJSj%2B1yHRe4BzrDxJQplJ57plwUIslbL8UB3D5o9k17uu0%2FGV%2FFi4wo%2BrPFGKwncek4kSPQ0%2FUCK%2Butl2QI5XEBeThkdkTgzJSP7P6xzLZmCefCK7ubiR1vK19wLrmAtNfHxwoW%2B%2F57z2qn%2B6A5Ih1NucJYVK1Kc1rZO4JKiMm6Bus%2FueIOfyrh%2Bnxx86SUuB1WnBdLW2DoSx0hqNeCcLrM8499BmaQ%2FOtkQZErSuOtCZ7lDAI3cmIggoMeoloqrepKOAGL9ANVP%2FLaZkr83TYlyA2s08ylj1kK88kcKAFxNCzhmnMzGGW8xVsVVnxV2sh0E0Po2QaRU%2F4kDuFbzEttD7Ea%2Fd80AB8ijdJ%2Bp2dhFGQoPGcSvB0FsBct%2BdKmBBHNrolYWceJtMItI2JLn4ldcLhFO9XEv9HGvRY5vfgG6CWMI%2BcvskGOqUBcZpZaY%2BxKm%2FkZpCE3W80X120DzohlInHWHRdGKOHGYRRzzGHMlXiEJsSCjb8g6lb2YjTU8tmMVXdEnrUe5jUB%2FoA6R5eL0lfZ9FheYFIw3gOIEI4UWz8l0CMzr0sPrCgDBtvQ07WydY9t7zfVZ8jE0FB9KRlBUn1aVjvNV74jiUS130wKRqBE%2FZ1z%2FjruaLB30Wm%2F%2F3ZsXaPVFbHf2UiXlw%2BXVqU&X-Amz-Signature=cc5c7b4a41cd8e00d82d879ab19208aed6ed4eb5723f4d0b777d03b0b6c7bb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENQGK35%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB7EC2ymJ9EK9GLZ9uVE0dJ3i8CYjlZ3ti%2FPGjn1%2FPWiAiEAt9w1G49D9pEpV9Eb0k4vuX1UlfpKEfrCVYFKlo4Zm6wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBZoghZGHaSr1uZA4SrcAznpsrMBq4hJOgMktcZWo3LzEsNVFA%2F%2FzFQjsUUqZ4xE7X7YpOx%2BjwEcCf8EG0lRMqSeovcehhdDFtSVTJ9jpKjGinR%2F29mPXk%2Frv75JlUpA95T1907q4XFioGDKkW3ciU2J%2Bmk4XcGSSFabzIhqTYKPDbi6Orhhpxx8w2BBClHEuPACX5JGHPSUBU%2BuW%2Bt76jhHF6QYBJOvhgLLFhQGAZzQVvwGN57guH9dYeP79BT6yagPKt8iAOGl3qPK2sGJWjvTf7XSUXl4rUkIgS30u4YatFvsN9EkNEBOVo9qAG0gf0Lgex71YeS2Zda8P4ocPNGUGYOykxcg6Ing9xQ%2BhFKi%2FtFfD%2FP2SXT8Hfxa6%2FeASjcquA5uWfOqZBbXLhJLSYBJEniIBqIUcOYQoJDDXw8zWQ9e6jKR1QZnN5dGtJlyXA0hkKQVZV20Hl5BCRmxkkuQV3o%2B6473LBzJfRNZJOEHHLuVm9oNcPmWFzB1E1R6MuOkNl8VvnbrYc48H8xcyzvn6IgDRSec2j2erJh%2B2woayYrFd1wf7cJTmi%2BKurHyrJYXj88NArrZ9UH%2F%2FpvqaACdzwV59tAISKbYEBNsZeU7xoUm1SF9vvC8df%2FcnWworYmV653%2BZC2J8egRMLGUvskGOqUBsH77qWKaW3oCC84e2mWWXqBg5C0GM4JmzzCtg8uuRBIggMuoSbuHdYl%2Blcab5uoq7%2Fs7833Iym%2FpqZwR2JR4qWPM5I7%2Fn1%2F8gLHyr1wzd%2B1HOaQHwmFGu9Ip9ine%2FBJKZCC%2F8tVqwgujTHr6xEA%2BB04JbpX1Pww2AN6%2Bfu1XJ4tBDdm6oriSC%2BVMG5TVZoK3UBRE%2Fxd275MwjG%2BhYjyzLAHv5aZr&X-Amz-Signature=e8230a642f5be46d7102fc64e2a683528a6332e40381c328e0e105a9968bd080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

