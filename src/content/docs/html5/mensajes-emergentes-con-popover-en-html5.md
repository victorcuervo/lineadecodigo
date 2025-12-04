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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6RS7TUV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG1a9NB2uROz6b6QjA0EtTGolgZIhBXHaZj64FDCX6MLAiAWKHV46Zsm8LPA62N0mxZGjyDomi5XRde0f3Q6Kk8%2F1Cr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMfYwwLWZLgUp%2Bmu21KtwD0VoXjdvpoUN1mRnHGh9WLg9KDuezWlEDCE%2B1%2B1E%2BwEIYOOGjKfwaBcqk3qy7KklFSimbdPkqFQZUzF0S3VxkCsqb7WrKWbC%2F4Xwp6s6Kx79xYyf49vqSZ1CX6LN3SM%2FVOD%2BtxotivqFgEbKkqrx9tr9SsDbPOLRNY2wTI4ZQUEUa%2FHPFRY2ZacQEwOsQUuZPw%2BHVs92LA%2Bdsqq%2FLjRq8v3zklCsagR5p21E0tJrNaMoV9hkfPyG0rUMWwyC%2FLFmnQ1c8WrBsYc2xyYt1HpKsYj%2FEHkHuGbQ%2F3uIvXY%2FCzOUs2CYNS%2FTGsm3kTQdT9WjGnl9GTF73FTh2%2Bf7PXwgqwaGAwKGmgR7GPNWr4MrnyIrD4Fg7k7swydqKmpvNAsoJHHths0RgnFYFOfW59T4rC4mmpMWMLS70e9xm4SDgAOrnFTdf8wF91bXHST78Z6w%2FIf%2FK1LofX8%2BwOCLFsJ6IfguOKPN3xrlcaN%2B6ZdfzgPxxTEB%2FQLuRd36yFVKBRWgGwJNlRQUJat%2BDLgIVmtydGLclf%2FijNls87QFG0D4qmK1xu0TG1dmNWsqXLx0ylohTHQmy8YAE80jSQaTun13tDcuqhKtfe0utdVJoIS4f5kLv16oxBVXrRkenVzcwq4PGyQY6pgHZXwPr4yFhtg269Qzvlh9zkdH2mgHCOeIsd4um1TJxGE9P35Bv%2FVS5ZNdr8V0ZeBkw0nFhkBw9uRaxsFPKbVxDEagHAPcctlL%2F7lfladsYW4NBvhhrYzkpRPV7GOXW2X7Xdy%2BLFVyPJbTP82qFqyySQyV6J63eExtM6iryQVwEyVNQAs8REffToRAM1I1Ay8B0jK3pyzJ7gq1feRERkeSnJQRLQwKO&X-Amz-Signature=4593f270d3b2646d2a03c4aa2ff63da2aeb518df1cef7514552c889d70960485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSDUOSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGNi%2F7fuSUF6dyVtLH0a3MnmLvNeaXgrPYTARTUNw%2BwOAiAqwTzPRweyMIOKEdNwpyBsle6uq95w%2B%2BczYJW4QdU%2BwCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMi9aMxrmUKbkVXphVKtwD%2Bcu6cj6jX6dha4SF42cg26gVmUnwNykuy1bTTi%2FKiOm%2FOloMa73Y%2FcyrdRx7uKcgxwnyfmBIOYcFPKbwQnJfL4AogrAjolFgmFabYbsi6Of3FEoY7bvq1xqpOV3FNxuilqh1ri3XFgSWaWxoE%2BpO8Cz568Re25Ma44oJSZL6ZB505K5hBXtTWk8wYIc29NXHaPmrMRNXcsJDh%2B7y7CWF9YVvuMHkT13azZMxDXk%2BLekM2aX5p8NT%2Br4uQarcFLXAbaTu%2BcDpRrzveg0ZQcdf0MKcdJqzQHKSqEisAD4CRSC3%2F0BRFtBZrSZbFq%2BHoanC32NKEfbRfJUYnEMFjxclukVHa5buB8mv382iJiv1Wk5JYjXkWX8UymeAfvtvtjlBmw9X37YrcFl43yGi97kMtQHe8s3yENMJdXdyGVxyyq4645aHuR6tYRvD51YTmPimd%2F%2F93mfRmc0XjyYcu8%2BB6z4s4DtzjJAaqCPhsFQD5jbe4aEwyN3W4QaOJ9bAo%2BQ%2B%2FHMBot8P7zmFmP9w1CMosAQUg5Egl38fLHzIc7n4BkbR4sTtlhE0Xm4sR1WTDWFIGxDcEZWEWFX8jngCm%2Bwqe5TfCXJrtqL9sJqabLZnhg92wdWvK3hvVoZLmigwoKLGyQY6pgHJ%2Bug5voo5L3ab2mCcOoEI4K3TFaQ5Qj4K01duEs0bqHUc1KwdGXCBi76iwKOru9t%2FdyhEpiWVJqUZwGbB7p3nqqme3IwWuNlI2dk5c1Um1jRJQEBPhxG6CjsbSZIiQ%2Bjt8EVMtk6o7TxUsrhQZEKCd6JAk55C8PIl6brqbPF5CHgfolLMlScMZIAnbL6YWq7tsVrPXiClcu8q7k6G1sZ9YpElF9SY&X-Amz-Signature=a62c23e4c1dc1418ed1bf73140ab8a73acc1dc5d1bb13e80baf5327030f22a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

