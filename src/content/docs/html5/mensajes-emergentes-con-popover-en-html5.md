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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRCRKR4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2BNrFA0q%2BLZM%2BhKPVWLSCv%2Bm4Zg3WsLL1IlhSNmM9AgIgfZ08zG89F7hDsengmlDUw%2F%2B99QEpa2YsQK%2BVfWSr3bUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOZZPFoiyFnfLxT1TircA%2BKW1B%2BKt01KG2ZnKFmd7oRYkUYSdS4u9%2FpOGgyQFI9%2Bs9H%2BVdk3C8b0JaqSKYAS41e0HSRpSwy5oRAfrki9jr%2F%2BKN2hLOqmkYRbeSxxTMF8wCUYi6IhCJ%2FhWMX0jJExzT9IwWysdToHQ7ffbUwEDkAgVNMw0t38AH4Ms80EGt3DQe%2BmuVEN5If6mQjiWCUcxFj3PbV7I8ZVYTIES1QCShevAPP7Duh2BJRbPenPTZ7HRVI03tSnp1d6YQjvubrVOOfz1Sjry5XSuLwfI2MCrCp5bnrMaC3ClMyQqmGGxkHCBn%2BhkkKBdN5gIk2DYfBPeVRP2j06K6VcD5C5lZvASHFO3PyrydjT7lOJQCSIyD4%2Fm524UaWYgefDM172LhoeMw9U0t5FknvqaKUpYZ43yC7t2p7e1%2BgQDBn27pgpYAfmIoskxEgZr5RVAamx1hBIC48suA%2BX2YSiOaEuRHpVrt19gHNbRrfNu4vWF9SfKdHuL2c%2FlIteyb3wtVTJLQUBG0pt3OGTC0ltkUP2SP18rHpqPAXslFyU4xjHNuPp51ZceqTnBm04gOLwvQuNbyotdcTqc8%2FhYC7EhqkHOd8UNvwWsVAQf7sLH85cBy95mJGcYjl3RipE21pscNbgMJOWzckGOqUB8NmmUbTRfZ2sjDaEqciL2MJT3AmwTi0TK9PDjCnithLSwTGGkWk4dZWRZKgO8F6BTp%2F5cE2f1MirIv38SBblJjXPlWqvw68hDdzhDs8nMN1zwFA8ks%2FZMGxBVxTGQI82glCwEfyRQ2cBBp%2Ba9V0YHgXddqlOYqFHel%2FkVaZtJ35d%2BZRaycEFMblfv%2FZkJcuQ6bGxROx0g5sUk4Y5dnlXm3%2BWJIe4&X-Amz-Signature=a5144d71cdd9e8a5ea8e8f6fb5495c1fd0fc9dc5cc424a8e3f0b6ae326eb5f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HISVJB6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7%2B57PDbURZOXvcbX6Piw8gbfiOWaLjBYL75PNgUizjAiB%2B1Ebp78rTYyaqgxxwjQTXs5WpRuvnn6axgNEdxRb%2BnCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMco8HVsHRxobd%2BkpuKtwDPBrYUzXPmlxePBPUNn32elm5dibfZbVmMqUGJG%2FxhgapxBanOMQyiQ4w9%2Fj5Y8LqNnBXom3qeJvu67XOK7bHdFb7kNDUru9b%2B1Lxc9rcRtfeYxllI0Z5orUiYxlfbhdoI7KMWp3YN6k2dRH05ynbUxvJnerKzr0lbBx99EGrqDsCmJ2VREtkDkq35qYVyx1CYPIM%2FRsUkyH%2B3Ffb%2FldFB0cZTrS79daKTm7egoXWIwRfIE5E2qbTmu8jt7dlx%2BgM4eh%2BHA6s3dD7mV92DWhplQhsAr%2BzfSP16VPQYRh6CADftC3tononma3HlwAKrHbqcTUFQ2b4SG88me1b60FiMZ8wpXPl5O6e3tlzol6tUSJeyrly4BtgPmPZBYsPGpkteK7aFuJJ3o8eQErhWRem%2FzEXKdbkpgDx1yA%2FmsOVYGX6jD2IqSKGdMsmi7KzyoAi%2FsZwbsYwfjwORtdWFnjyXuCUH%2FAYjgCOOqhd1gnvnZA32JzZcZ86y6oMJ9z4e%2B1an8hkYG77kZ8JHhKPvaMsw8ziEGMWgHr9nHeNpad%2BJx57kWwG3xea%2FZuC8SuO5OiMtyr5J2NJtfWCWSwTM5stjZOuiGpLQZqhh6tnWpGj1GeteZQVjgY3nKt8JDIwxIfNyQY6pgGdtOR4JG4RkcZlJ8%2FaLBYNWBQEDh08tdvzpLGcLSYBe16tw7WR%2BpV%2BMdVQcst%2FViFcCigmU5vjKl3%2B4EN8lOIL%2Fr02a7QeeIl3QdGO95%2FFW2iJXVj6FOz29h%2FxYVaL%2Fnm%2FJp%2BomfHOq6YCDwqrAPLfbyJUK8OAdCjK4O08BQpYyUDtOE7ctQIv5wLmWZcK85l6oWssdp7nDT5tqq%2FxnvBc1xKFXDia&X-Amz-Signature=8ff290d5a55b8730581111e02155596c22b924b693c4b2a4383c54f8a29c48b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

