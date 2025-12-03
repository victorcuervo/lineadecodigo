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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q32PLKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCAjBxZJnC3%2FklJ7GvvnMglmqVFkymY2lZ5WWz9gVQIoAIhALvdm7ZOnjuvXAThzbtdv5XuGPylb%2Fo1w9sUPMFFsYlCKv8DCCsQABoMNjM3NDIzMTgzODA1IgwPZWTkm7irIIJTY2Qq3AOEenw7MaLlGo%2BvSLorhrLzruQfYnx7sarBNnmo5LgQiZPklKX7eUufc4aZ%2BZwSyoZ6efFOVV%2FkIolO0N7WPYDsgJokR%2FvzL%2FFn6WyJT%2F7e0YdbCXhrTw0HeW5iR2s4DvJKIF5oV4O8isNfeC8b9Azp6BQDApBCJo2ZagNSNqFli6DFJx%2FH0evy4QdJYfLfl6b%2Fh7s7zsHBxLZdRCiXkYrQJsbDYSe9Lg9%2Bk8oJmWg%2FW%2B4iMackvvw0oT5AtzBZxb4pySJ8F1hwRFOL5fJozRKpuQCw4o8AWCjhlfsgdBtpjwPPlbt%2Fn6L1PG3VuWA1EAqT5Dd3vtbe3dsIdVolxiqKTjL2SvSZo1QnpGvgfRnh43OtShNPM21VLaefY9%2FGO2qV6UENpXtD3CeYqrjQT3l7wS%2FtTlcwDkhUL4UBN0o8LInjmMPzOH96vjyhWZpam3plNNVIAuX1evM0jtahRiBqJax%2B%2BRFNpKUPipaWWu02uVz2HBgsZh058SPf1kY%2FbcKCXQUfRYNmyikS1%2FPwEX5rnD%2B6M16IllyaxCWGUBfzrMF46z34ClXuBsu5R7yo2jIlUxGIqXLsOZp9cSnUAqD27xXTEqjGIrrGVwA8eCh61KvhqPDhntSlRxkfjDDbksDJBjqkAaA1H3VGcvt4N3xqWs0xWhnho6dXTgPb6qE9AsNfQ2kxU5r2OdWW7K9vm2KT%2Fs6sSolbG5KCinxCZ%2BOx1es6gTAeKnOBHUfJ0COEBAO0KjPYHkHKFFbjwmpibTETaH1uMv9sQyj4frdevxvx5RDhXaRir12rY1xRBOQ6xRxzMLrDOb4o9d%2FneM0B%2FKIjcLPSKB%2BTvtj517%2BsbZT9orc5JOC8H42B&X-Amz-Signature=e4b6e84b4d433110ac304fb38ab19df1a0da360ca23206825f91cf7a5d82a2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZA3ZG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD7adMAYVOUskP8VVGHAyg7NT%2FF4%2BGheU%2BcqJJVwR898wIgKf4jFqLBi2fp1VmqbzKxBQF0CF7tBArk%2Bv%2Bh7zOnsi4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLKsVbpd6OwwVAFS3CrcA19dNbywT5CrgaN%2BaiLh4tprLwjhpooajMu94ESfvnoExPqAo1xYoYDXdE7pY%2B0ED1orVBXfY5qxDDr0NyNivFnfacmXSMsSmdldzvmSqFeZKPm0ku1g8fmN5PvbGsxEWl%2Fvdu%2BReugLa3sMUA6uHB9Bk6IV3tD%2BGEMjKQcWtGLze1vTIYDt09MtLh0yLFVYc%2B493Vce5daB0NXNHt2y7ZF544s7c%2Ffwy1vDY8Eb%2BP%2BRHpX8P475POOe%2Fu4lFHSOPHLKlwoH3%2FMVhgLcqKrX1uXS0spFxPcrrG%2FIfgRpd2LEaeDUU9P9Yykph3RYdcVHM4GMgYQxY7kI59n8IFAjq1x6ni3jamiGm5WJ17exE0PwPIm9eBJ03OwqBlW%2BuApUdU1f28OuRpl2fZ5m09lzvAhdzJexr97A3w2ZMAgebVfceM%2F3EwW18JEGcM%2BzDOSRVMjn163qc7fuglXxBF7aK1XU7GONY7k2AmbH0lWyVUMcMgETfmV6F%2FkMkXn6G%2FduNO5fRatrbdLcyFKo8OBHnVnyfrtRnJkpzPYa8xCbO9S4RDGE%2FGYZrYKTH5Bvk4%2BmWxf0p4lB0XimU9gQnlGwnzma9Wdln1e%2F%2FG4e1GiMBuLYaFASe%2ByBY1euGxKbMJGTwMkGOqUBhPdUtSQGobmlmtaV7GMIbntTTuYsjiWXboAXUlQHnWr7s92jv7qBrF%2FhnSr3lSQFOhNJKQ9MNdCL35GEjwbj9BOEbT6NEQZ6oV9UNuNxythM8RpczrEzNsGs963lnIaaR0QZMKg6m3jItEhipr2qX0EeII8EmvQAwoR5tUJEP1KioLDNevaSvyUk5OplMJMlIFh0tLcwGCROTnKqWW8kZj3LbLyk&X-Amz-Signature=149584f4795d5371ad66e3b35e88096a28be5a0d91448bd8a502d47988cde8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

