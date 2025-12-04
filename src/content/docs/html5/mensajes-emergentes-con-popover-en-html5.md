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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQENGIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID96W5wINsgtcPJaL3A%2BtxKrFxjjZ27AVaVJAVWIu73HAiEAn3DrZ2wuZ7uS9x%2BKpElVlhyqm76FEwyFxzYvrBm%2Fc0Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLdsz%2FNsxptoNLzmQCrcA9whaZjyJiQN09bXWKJDnk1y1mN8DAvgB%2FOEVF%2Fh7udMk86zCEl0fKctFlwPyhPQcO4bHYYriQPfn9TlRC6B9bx6gqtK%2BL7Bm72%2F7rmYJcBr4pclcHYTJfd3FtIVI%2B8gfARhGsuZuxXcdliHVEVzXbpq0Nb3GU8VjeFRdbYglxBTE3bWs%2B0p5ySzZVNr5AxOxhlGN%2BeMT4qas2Y0DPTf1chqVa8k03qqvAG1ngJLeoncgw%2FkmXE7esozJBUv6mXHUxMIr1nny%2FjGkedHlenT6boSkaOiGEi3B303QVPRbY7GGhBKTkicouNE8%2FuQkFARySFRoewomjNuuRnlF8iwlusCPhSuNGA5Bzkndm8KIpeHGPeVs6ujBHN1%2FTw%2BygG%2FwYWPSNrutiE19NlX0o7vnqUstk3Z64LSWpODChEcNke9pc5q3TQnAtiClg%2BQpuPFvtbjCeHI4Gcunic861tKhg6mgX5sIUMOwFgbopVLqeBKlWhPxIPMKs5T598FaYYOsWhAemUnaLVKYEOZSo%2B9AwzeWnwhWPmZwx%2BNJHk8pcKNskbXdw8qIrBJGZbu5dS43YOnUV68EeGmJ6bx%2FQg5cyQBfK6VsbxQtHaUgoKXgkffHfD8hpDj9wiqw5CpMNeMyMkGOqUBIJEtqpjLa0i%2F5r0ytZhqxejY0IAJUro0mQbWDnYuzdkbojc0KubJsTNBkwyJXwjeltWH9EydyIfnU6ki6DHjzW6VssnyvRzAZPLTHrLQauteQFL68KeMEPa44WHvglYxyzVnWsIY2w6oCWl8IUm%2FMJ6Qw5zkF9SW44omcNxYt8VZFAwN7ASQaIf2dyf7XFu7y7VjVwo0cdURm2wYlgbBt5NI9YRu&X-Amz-Signature=5d2596908c4fa6dcd6c0f7bfd08e5da6d2f01a4e3f64f6f96e86c6e138180192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJIKPRC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJD%2BGRkua6m%2B0rypOyB3aSLLereBubof7WBKx9ygFPhgIhAKXNht62ke46rXof0syY03CE46TgCKuv3VIqjQdfHYZVKv8DCE8QABoMNjM3NDIzMTgzODA1Igzlj0YVy2ZutY3fJHYq3ANzcEhx9wbCQKI%2F%2FvAygegXclEJV8LCOfzno6k6sQqZ%2B8R%2F1Cp%2F02Sn7PMVKmC309USTh3fg21Imjd%2BqGwrVIN7l0uEacjS9s0D6iq%2FQfSH%2FVfXQ0TaAqD6CvRIfRH8BeGYzQUH%2F6IUA3Fep17gPiEwzi%2Fj3Z%2F3%2FJ4TZt9kbCFMX%2B79YIyHzPg8Ri4ug9uXcUEFMJCR7Lr543PgJ7vRW%2Brc2W5mtyu8Oqc897k5QK%2BMFZZmPh%2FCR%2FloMnC62WtqFM2huL4trUXQl7iHgenJ%2FwW%2BVPZ7%2FtuLkRvZ5S72WJ5%2FncNVXiw2K0IE2Gbz8qtTH9hcBS5Y6yz65S2StMSJV8zpty0KA24SZ%2BdHkdrcv%2Fwv5UC7F2QKbIrfYt94NiZMPakvL0T8iBOdvcxtfARcYkkfE601wKEcq6AH%2FIO%2BvXajpJTFRjwmfGE1P6WohJZ5Izjomoz8Parv0X%2FKngXKt1HoayYvg1Ppe4g35WSudTGpk%2FiOaus91MZjptX0SPNy%2BDDImd3pOx6S0Fn3QbCAGmjY4A1ptLfQu5XZs9B3doZsoLYQC2qI2M6qCfdDZwk%2Fp4FwHhL2Mve6Omhe1gGn3z%2BiKGHa18o5nVO5yUT%2BCangRwsqN8my1MOk4yKtTTCyjMjJBjqkAZgffEKEx8lkuZV3G4hBZHmicZq8JSn5IbAsGCcOMuUDnW%2BcQYP5EXi3bBCCFcK25BJYGQg50jHSXyjWkytJkSzXWnkDFW1OwIkd8IRBktwIE40V9FAIcM6hJBbPs4R8be6S%2FO5QjG1A27PmJhZHREZ9aOAq%2BG9Qf44%2BibvVcUlIyqEO%2FEpiFEGOUQmKBppz2MRhCGkmV%2B8i0cik9CsA026q1jB2&X-Amz-Signature=3d7cff33738e158b3f8015c36fe84f9dff7656499c877d933cad29f30a343e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

