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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZ7AQPA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmFKonmVOL931cuItf2iJDJHyP3rr8iysTXazTI985xAiEAzYUU1c01xAYCxQAktJ6s3wJH9kgutWJ67QVUKWD0U8EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FIbZZ2pLjqIPZe2ircA8wNTL5S8wAhVR9YAOHYtyEuqjQJf1Fcj9WKXRnB256AT6HVURkd5dBqyFuz7YjSa7cDGzc4Awf40v3QPxy9mOWw73BQR22yvpsaIkt%2Bd9%2B9UT%2BACdNzN%2BurbkulEd5DDiaUieQfKDmERqBTqXKCB4Gz85UFBSjceaxNQje77pVzN9Pn6XKz%2BArTI0VO5H2ih8eILsrIxy%2Bh20pmQMbjqqi1ic4qrpaB%2Bc95kcqc%2FqjywWn7xkYQvZOuS9AGK0ccC7iDfDJW2ln5UwYB2sa6QbXYbYNQ5Opr9KA9qIwH%2BLjZVnCsQ6gxJujir742u%2B4u2r9QCMKS9CoRW0Dxsbp2JXoNKzCeIe4GG5D6GtMgL%2BLIVNJyEY2tWubAdivtf61aWAsWKyf%2BKOeFldUSReypDcbz5bY3n%2BdEEXmKmAYXvIbluTH7i5XWz6fiG1Y%2FDemcmnrGFlMe6CCXvoVWz%2BSb5LjAfD5Onh9Qga4FivXhYxiJKPe8h7IOzLC2iRRNGY4pGdfqlWbHih4WdQi9wCL0Vjmgeaz6Cr2PLOZoeDvT3sTa%2F8lse4gKWH5y%2FL4cTng4vrr%2B7BPGlCtzDJX%2BpGNrAiBNytrU9xjPkULEZz2TWwN8SB1oNqrrmYHZB%2BxjMMua1ckGOqUBNqDCWEZXRb6Spqfzqeb9byFhCgZ2%2BRdRdQVzyJG8zs3%2BGmu6EEz%2B3Q1KT5I5r0VWFHego3k5cPIH6UkutXky%2FkFr9o7aAwURw60b7%2BsPuEsJX2Ay36bXJ2wtdF%2BwrvAvwJtgLu%2BOn1PUFkwUKH6a5rt4eHmNyZz5Dy9B8dcio09fRE2nYhvv2iasB0W9d7BNvkkoWGdfl9IQrJYZikwUy3gny%2Fnm&X-Amz-Signature=3f8c0a0cca554079364ac8aa755278ee19f2cfc584805646766a6f4e3d95e7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TMTMR4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqrRR058Re%2BktU6lpC%2FX2biuCDyGhBhmjrM7eR9d9caAIhAL8W3l8pougaf5og3CKqkCvjxv1mauE8U9GNjXwRSEvMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4bl4PspUuQ4j%2FtAq3APumNM5whhIp6dtn7tHn3fMkQoXUWnQVjG5Nuv%2Brfq0kaGVEHwjuiO2cyVctL4yoV6cqiHV0Dkk4asFmnW1sjbQ%2Fn0OI2qTKeuO%2FiiHN4b4diZcnBqDiolaQPH043el2niYlXw3%2Fono25a%2FthMiK30u%2Fe0mOMZAicL0J7rkIMnjYo2p2E9bGk06k6hYPqHE%2BPigls3Um8bVTCkIbUNQ0eO8ubq%2BBk73pUyVR2R48mp2rvXyLAbdhOyq%2BwFMmjPDeGaN%2Fl6Cr46rCudDfXKPVfRx2Rx1zSomybRjui5ou8Mh5NM5ONOam%2FV1DNEzRta9bvtAIGckWO4xpm6qXKDFxvAtuOn39mqD4BlPUh0CEUP8msf%2Fd7%2BWkYgK7wGht2e50viOorrYDztW%2B%2FmqlVAhOsUr0twMyeho9nsLD0XEOWF8NM0ufzsNKk76SN1HYAxZUOonIfJ7aVju8NnCTTSe5U10KqwYCSBm7jGCbVbPUkdkObw2t%2Bh6hJ7oyrjlUWyQcBh7IcV2vQhuOHP%2Bhh3Mzjrqx%2FzUi0LOTiYFLc2cCAcgXwd4aLUSsr1jA9HWvOhFM8%2Fxw2xAQfWrbAxbY2fbj%2BsdvJaZGOFB3k4ECowY7fkLSVGVspHzOw5e06MxaTC0mtXJBjqkAcyUsQFPSb5xkn%2B%2BFl8Q43wmPkfl0bHqf9UVQdnAGtWMesemGCIy6QTZOSNG%2BgIjlWrcvTKcVgpZ46HuLByh5EwVVRJ46kkoZaf74Hdz4IDKPRWZqNTJ0a6ewb%2FDu6EPVHoG0PsEVF3Ou%2BtIECsXmu8%2BCfilD0BAm8%2F7EuvD1OS%2BXL6l7Xm0jnMTdqeOL6Tn8LJ7fOc1mloItiGV%2BPS1r2B9c6jx&X-Amz-Signature=66690b89b43a0037c275734577786cf68e3771905cf345359a311076375f4c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

