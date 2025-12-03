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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2S6DIVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGFtOllxkT%2BXn%2Fv0B2pZyYMxu9B3RwaudV9G7B4ni%2F0rAiB3PI5AAmt%2FoqheHAiFEGMRZF0iYFVCniwNiRTT%2B4JaESr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMkdTsZa8R1kXmUqmnKtwDAEiaZaF6%2B18KlzR541HQWaycyROOORDoj5a0ehtDL0SheAebQrWUw79zUocIHviPdM5OteBztvWt%2FgwjkUQOIrssgPFYI1CV%2BHWgVfsjoN2oHRKHZCYRX0VFfyPMwMXQ%2F2QBflRwBcmrjfweAtKkDjJ%2FheoGs34eGi0NCkRRRbESU4pPC%2BBevNdCjWjhBYZk27nEd62FIV32BK2YndmSRN90ngwvoXpjHzlGSuGZor4ok39TPY34NUAwBGzgClfkk%2BZbHqupaPTZ4%2BsQcX5AB8rJaLYv0LKoSZGf%2FHQnn7Z9gl2AWJlMYDddAnno5LW0nLJqLpWNUk7dgIuYwS1f6kUNPJ4dij34KfcLyJXFiw5hgkQ5ocnmpgIcYJzDRgJk8fGYzi0a4rwzWvaNuzl1C8POFKAnpEIcnHpaD7nL14LCZZYi%2FN7sJ7GgNN8kd9rUGwVDQ4KmOj8ha2QpXbZPlvU%2B7r1LCRSlbQ%2BahHLob%2B3S7iIPYlMB%2B8axXk%2Bv%2FZJMp2k8kVgFvHYjTZ3EmGFpZnQ6Zf%2B5x2M4zg0yzIz64lsTTNXrGffwZM0aASYggVwd404DqDgipqHhdbO0DQiNVMJbvOildMLFg52FqQLrORAZOH1NFDPxEChNAIsw4q7AyQY6pgFGKjGmZvkU3%2BZ9ng6Qk8wif9KmkVQ84%2FOHBpqnbbn9Tt0KDpQsI5KYHkw5VQNhtiwPBZAwaSaa3QNm6J1UZFf8vX3uUGLX5TFuh6M73IEhX2lHlNV7X4naO7eQetuqgNo2wc6%2B3ThXIyw%2BP%2B8swyos8Omw69FvRWAgRyMYyN234CcrF7%2FkXhvf59oIhWKHClhRLIA%2BVht0bwE5u9115jM6t18Ys%2F8c&X-Amz-Signature=885bb0fdd28fba4aa5071ed260fac6353154521955ff50abb7419a8151a7c737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452TBWUD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFGxBzjR525rn5IRfnO3h36TFF%2BVr0uvonyQH0W%2B%2F9YJAiEA%2FyqP6zbQTEp6Z1AgoQhZVMBCIvd274i2yGtj2BkCydQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEeOMKE2hiVW3CE2hyrcAyAYOyRCWlI2UAYSbdDB7%2FIo9PfY4DEhyUi0CJow5W0RGG%2BITsVusAu3qGX6MBrDbrVdzz2ulxfrHqVVUD%2FYUxhNOAKOywakEPcYx8uOpcK9OsGN1PBmin%2Bt46o%2FD9KX7Lk4JVK0sfR2cpfUHs7BQZI0abk8GYM11qq3jm0vYmOUM%2FLSaVEzmmFgtroDleqQCAdqmiklWVz6X1Fh8BvBc7jKiVQCMRjvCNp45NBbX%2FfwQ3HEWuNnzO5VkCHhpLYoHKF2L8DO4e%2FML0qLlUEXG4JfR50BO5PKGPnUSQqc28p62cDWISbsndBCsrN3v4eIfK1sZkgmGqVgdVZpb%2BiGrPGPgSg3HNC3U%2FtTekyXgetM3e5xjg3P%2F4tA8ubxEBFfd8mXPesLN%2BoVgY9pmNgB7e6X4CEp28sLnuh7etsb3RS5z1WVjOJIJjSFVX7UdWBRT3k5ys3uMZLot1FYIVqbzilwZ1zLzt8emXa4AMfDSug1UvlwzHV7Plq4seXk31ktSrTLEvekaVXrVKfEuQOKWzz1yXjxK7%2BnRCnyR%2FWKKrxSnM%2FUkXNM%2B1oLLrMeGBM9V6zK64kIE1lepaeMWKABBYiLeQfwYDyBEG7sE%2BytbuPYLLAgIXPr1OXoqbaTMPKtwMkGOqUBXGmlfz9T0eVjnfUf4xH9UG1S%2F4QnHmZCSMDjU6X%2BZdZbqkTfNRNzLLODM%2FWBV6NsoXiBuHOU2TNhG62ZUoZJWsKhumbxFbjKpOzCOHEpr3bzk4SR%2BfaOgYYaCbFNI%2BKntUlt3ETIpsSh2wtmqxrLu%2BMfZV3bxSll0x0kfEotx92qkoWnq8%2BYtuVcCeXRsaanvrEZyFkcG6%2Ft6zQg%2FaJWK%2BML1Jzg&X-Amz-Signature=d1d4715a27d0a983c39ff1d6b27cbcea16ea4be4ccf6bd1e2dd05ef5dcf4d155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

